import React from "react";

import { EditComponentProps } from "material-table";

import ErrorableTextField, { ErrorProps } from "./Errorable";

type Props = EditComponentProps<any> & ErrorProps;

//source https://github.com/mbrn/material-table/blob/master/src/components/m-table-edit-field.js
//made some changes

const TableTextField: React.FC<Props> = ({
  columnDef,
  value,
  onChange,
  err
}) => {
  const { type, title } = columnDef as any;
  return (
    <ErrorableTextField
      err={err}
      showHelperText={false}
      style={type === "numeric" ? { float: "right" } : {}}
      type={type === "numeric" ? "number" : "text"}
      placeholder={title}
      value={value === undefined ? "" : value}
      onChange={event => onChange(event.target.value)}
      InputProps={{
        style: {
          fontSize: 13
        }
      }}
    />
  );
};

export default TableTextField;
