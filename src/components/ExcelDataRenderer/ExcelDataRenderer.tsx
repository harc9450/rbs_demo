import React from "react";
import { IExcelDataToShow } from "../../modules/ExcelModules";

export const ExcelGrid = (props: IExcelDataToShow) => {
  const { rows, cols } = props;

  return (
    <div className="table table-responsive">
      <table className="table table-striped table-bordered">
        <tbody>
          {rows.map((value: any, index) => (
            <tr key={index}>
              {cols.map(column => {
                return column.name !== "A" && column.name !== "B" ? (
                  <td key={column.key}>{value[column.key]}</td>
                ) : null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
