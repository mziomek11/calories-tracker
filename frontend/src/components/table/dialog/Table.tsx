import React, { useState, useRef } from "react";
import { tableIcons } from "../../../utils/table";
import { FormDialogProps, DialogProps } from "./models";

import MaterialTable, { MaterialTableProps, Action } from "material-table";

import Add from "@material-ui/icons/Add";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

import AddDialogController from "./controllers/Add";
import UpdateDialogController from "./controllers/Update";
import DeleteDialogController from "./controllers/Delete";

type ActionEvent = (data: any) => void;

type OwnProps = {
  collection: string;
  onAdd: ActionEvent;
  onUpdate: ActionEvent;
  onDelete: ActionEvent;
  AddDialog: React.ComponentType<FormDialogProps>;
  UpdateDialog: React.ComponentType<FormDialogProps>;
  DeleteDialog: React.ComponentType<DialogProps>;
};

type Props = MaterialTableProps<any> & OwnProps;

const DialogTable: React.FC<Props> = ({
  collection,
  onAdd,
  onUpdate,
  onDelete,
  AddDialog,
  UpdateDialog,
  DeleteDialog,
  actions = [],
  ...tableProps
}) => {
  const [isAdding, setAdding] = useState<boolean>(false);
  const [isUpdating, setUpdating] = useState<boolean>(false);
  const [isDeleting, setDeleting] = useState<boolean>(false);
  const rowDataRef = useRef<any>(null);

  const openDialog = (rowData: any, openFn: (val: boolean) => void) => {
    rowDataRef.current = rowData;
    openFn(true);
  };

  const closeAddDialog = () => setAdding(false);
  const closeUpdateDialog = () => setUpdating(false);
  const closeDeleteDialog = () => setDeleting(false);

  const addAction: Action<any> = {
    isFreeAction: true,
    icon: () => <Add />,
    tooltip: `Add ${collection}`,
    onClick: (_, { tableData, ...rowData }) => openDialog(rowData, setAdding)
  };

  const updateAction: Action<any> = {
    icon: () => <Edit />,
    tooltip: `Edit ${collection}`,
    onClick: (_, { tableData, ...rowData }) => openDialog(rowData, setUpdating)
  };

  const deleteAction: Action<any> = {
    icon: () => <DeleteOutline />,
    tooltip: `Delete ${collection}`,
    onClick: (_, { tableData, ...rowData }) => openDialog(rowData, setDeleting)
  };

  const fields = tableProps.columns.map(column => column.field) as string[];
  const emptyErrors: { [key: string]: string } = {};
  fields.forEach(field => (emptyErrors[field] = ""));

  return (
    <>
      <MaterialTable
        actions={[addAction, updateAction, deleteAction, ...actions]}
        icons={tableIcons}
        {...tableProps}
      />
      {isAdding && (
        <AddDialogController
          emptyErrors={emptyErrors}
          onSuccess={onAdd}
          View={AddDialog}
          close={closeAddDialog}
          collection={collection}
          columns={tableProps.columns}
        />
      )}
      {isUpdating && (
        <UpdateDialogController
          emptyErrors={emptyErrors}
          onSuccess={onUpdate}
          View={UpdateDialog}
          close={closeUpdateDialog}
          rowData={rowDataRef.current}
          collection={collection}
        />
      )}
      {isDeleting && (
        <DeleteDialogController
          onSuccess={onDelete}
          View={DeleteDialog}
          close={closeDeleteDialog}
          rowData={rowDataRef.current}
          collection={collection}
        />
      )}
    </>
  );
};

export default DialogTable;
