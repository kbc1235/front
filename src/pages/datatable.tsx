import { useState, useEffect, CSSProperties, ChangeEvent } from "react";
import DataTable from "../components/dataTable";

export interface Column {
    id: string;
    label: string | JSX.Element;
    align: string & CSSProperties["textAlign"];
    format?: (column: Column, row: { [key: string]: any }) => JSX.Element | string;
    check?: (column: Column, row: { [key: string]: any }) => JSX.Element | string;
}

export default function DataTablePage() {
    const [colums, setColums] = useState<Column[]>([]);
    const [rows, setRows] = useState<{ [key: string]: any }[]>([]);
    const [checkItem, setCheckItem] = useState<String[]>([]);

    const handleCheck = (id: string): void => {
        setCheckItem((prev) => {
            const check = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
            return check;
        });
    };
    const handleAllCheck = (): void => {
        setCheckItem((prev) => {
            if (prev.length === 0) {
                return [];
            } else {
                const allCheckIds = rows.map((row) => row.id);
                return allCheckIds;
            }
        });
    };

    useEffect(() => {
        setColums([
            {
                id: "checkbox",
                label: (
                    <input type="checkbox" checked={checkItem.length === 0 ? false : true} onChange={handleAllCheck} />
                ),
                align: "center",
                check: (colum, row) => {
                    const checkbox = row.isCheck ? (
                        <input
                            type="checkbox"
                            checked={checkItem.includes(row.id) ? true : false}
                            onChange={() => {
                                handleCheck(row.id);
                            }}
                        />
                    ) : (
                        ""
                    );
                    return checkbox;
                },
            },
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
            { id: "check01", isCheck: true, name: "이름", old: 11, skill: "리액트", isDev: true },
            { id: "check02", isCheck: true, name: "이름2", old: 11, skill: "퍼블", isDev: false },
            { id: "check03", isCheck: true, name: "이름", old: 11, skill: "리액트", isDev: true },
        ]);
    }, []);

    console.log(checkItem);

    return (
        <>
            <DataTable Colums={colums} Rows={rows} />
            {checkItem.map((data) => {
                return <div>{data}</div>;
            })}
        </>
    );
}
