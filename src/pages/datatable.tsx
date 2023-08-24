import { useState, useEffect } from "react";
import DataTable from "../components/dataTable";

export interface Column {
    id: string;
    label: string;
    align: string;
    format?: (column: string, row: any) => string;
}

export default function DataTablePage() {
    const [colums, setColums] = useState<Column[]>([]);
    const [rows, setRows] = useState<{ [key: string]: any }[]>([]);

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
    return <DataTable Colums={colums} Rows={rows} />;
}
