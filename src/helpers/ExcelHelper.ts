import { IExcelDataToShow, IExcelColumns } from "./../modules/ExcelModules";
import XLSX from "xlsx";

function make_cols(refstr: string) {
  var o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) {
    o[i] = { name: XLSX.utils.encode_col(i), key: i };
  }
  return o;
}

export function ExcelRenderer(file: File): Promise<IExcelDataToShow> {
  return new Promise<IExcelDataToShow>((resolve, reject) => {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

    reader.onload = (e: any) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? "binary" : "array",
        cellDates: true,
        cellNF: false,
        cellText: false
      });

      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      const json: unknown[] = XLSX.utils.sheet_to_json(ws, {
        header: 1,
        raw: false,
        dateNF: "DD-MMM-YYYY"
      });

      const cols: IExcelColumns[] = make_cols(ws["!ref"] || "");

      const data: IExcelDataToShow = { rows: json, cols: cols };

      resolve(data);
    };

    if (file && rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  });
}
