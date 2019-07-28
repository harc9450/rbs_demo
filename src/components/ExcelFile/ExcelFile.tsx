import * as React from "react";
import * as XLSX from "xlsx";
import { ExcelRenderer } from "../../helpers/ExcelHelper";
import { IExcelDataToShow } from "../../modules/ExcelModules";
import { ExcelGrid } from "../ExcelDataRenderer/ExcelDataRenderer";

export interface IExcelFileState {
  excelProps: IExcelDataToShow;
  isFileInvalid: boolean;
}
export interface IExcelFileProps {}

export default class ExcelFile extends React.Component<
  IExcelFileProps,
  IExcelFileState
> {
  constructor(props: IExcelFileProps) {
    super(props);

    this.state = {
      isFileInvalid: false,
      excelProps: {
        rows: [],
        cols: []
      }
    };
  }

  render(): JSX.Element {
    return (
      <div>
        <form>
          <div className="form-group">
            <input
              type="file"
              className="form-control btn btn-dark"
              onChange={this.fileChange}
            />
          </div>

          {!!this.state.isFileInvalid && (
            <div className="form-group text-danger">
              Please select a valid excel file
            </div>
          )}
        </form>

        <ExcelGrid {...this.state.excelProps} />
      </div>
    );
  }

  private fileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      const file = event.currentTarget.files[0];
      const fileName = file.name;

      if (fileName.slice(fileName.lastIndexOf(".") + 1) === "xlsx") {
        this.setState({ isFileInvalid: false }, () => {
          this.handleFile(file);
        });
      } else {
        this.setState({
          isFileInvalid: true,
          excelProps: {
            rows: [],
            cols: []
          }
        });
      }
    }
  };

  private handleFile = (file: File): void => {
    ExcelRenderer(file).then((data: IExcelDataToShow) => {
      this.setState({ excelProps: data });
    });
  };
}
