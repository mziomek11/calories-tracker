import React, { useState, useRef } from "react";

import { tableIcons } from "../../../utils/table";
import { TableDialogProps } from "./models";

import MaterialTable, { MaterialTableProps, Action } from "material-table";
import Add from "@material-ui/icons/AddBox";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

import DialogController from "./Controller";

type ActionEvent = (data: any) => Promise<any>;

type OwnProps = {
  onAdd: ActionEvent;
  onUpdate: ActionEvent;
  onDelete: ActionEvent;
  AddDialog: React.ComponentType<TableDialogProps>;
  UpdateDialog: React.ComponentType<TableDialogProps>;
  DeleteDialog: React.ComponentType<TableDialogProps>;
};

type Props = MaterialTableProps<any> & OwnProps;

const DialogTable: React.FC<Props> = ({
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
    tooltip: "Add",
    onClick: () => setAdding(true)
  };

  const updateAction: Action<any> = {
    icon: () => <Edit />,
    tooltip: "Edit",
    onClick: (_, { tableData, ...rowData }) => openDialog(rowData, setUpdating)
  };

  const deleteAction: Action<any> = {
    icon: () => <DeleteOutline />,
    tooltip: "Delete",
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
        <DialogController
          emptyErrors={emptyErrors}
          onSubmit={onAdd}
          View={AddDialog}
          close={closeAddDialog}
          initialFields={emptyErrors}
        />
      )}
      {isUpdating && (
        <DialogController
          emptyErrors={emptyErrors}
          onSubmit={onUpdate}
          View={UpdateDialog}
          close={closeUpdateDialog}
          initialFields={rowDataRef.current}
        />
      )}
      {isDeleting && (
        <DialogController
          emptyErrors={emptyErrors}
          onSubmit={onDelete}
          View={DeleteDialog}
          close={closeDeleteDialog}
          initialFields={rowDataRef.current}
        />
      )}
    </>
  );
};

export default DialogTable;
