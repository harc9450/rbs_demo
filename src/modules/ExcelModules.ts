export interface IExcelColumns {
  name: string;
  key: number;
}

export interface IExcelDataToShow {
  rows: unknown[];
  cols: IExcelColumns[];
}
