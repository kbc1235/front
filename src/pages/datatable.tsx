import { useState, useEffect } from "react";
import DataTable from "../components/dataTable";

export type TextAlign = "left" | "center" | "light" | undefined;

export interface Colum {
  id: string;
  label: string;
  align: TextAlign;
  format?: (column: Colum, row: Row) => React.ReactNode;
}
export type Row = { [key: string]: any };

export default function DataTablePage() {
  const [colums, setColums] = useState<Colum[]>([]);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    setColums([
      { id: "name", label: "이름", align: "left" },
      { id: "old", label: "나이", align: "center" },
      { id: "skill", label: "스킬", align: "center" },
      {
        id: "isDev",
        label: "개발자",
        align: "center",
        format: (column, row) => {
          const text = row.isDev ? "개발자" : "머글";

          return text;
        },
      },
    ]);

    setRows([
      { name: "김태완", old: 31, skill: "리액트", isDev: true },
      { name: "김영우", old: 31, skill: "퍼블", isDev: false },
    ]);
  }, []);

  return (
    <div>
      <DataTable columns={colums} rows={rows} />
    </div>
  );
}
