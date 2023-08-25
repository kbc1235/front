import { useState, useEffect, CSSProperties } from "react";
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
    const [checkItem, setCheckItem] = useState<string[]>([]);

    const handleCheck = (id: string) => {
        console.log(checkItem.includes(id), id, checkItem);
        if (checkItem.includes(id)) {
            setCheckItem(
                checkItem.filter((item) => {
                    return item !== id;
                })
            );
        } else {
            setCheckItem((checkItem) => [...checkItem, id]);
        }
    };
    const handleAllCheck = (id: string) => {};

    useEffect(() => {
        setColums([
            {
                id: "checkbox",
                label: (
                    <input
                        type="checkbox"
                        onChange={(e) => {
                            handleAllCheck(e.target.value);
                        }}
                    />
                ),
                align: "center",
                check: (colum, row) => {
                    const checkbox = row.isCheck ? (
                        <div>
                            <input
                                type="checkbox"
                                onChange={() => {
                                    handleCheck(row.id);
                                }}
                            />
                        </div>
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
    console.log();
    return (
        <>
            {checkItem.map((data) => {
                return <div>{data}</div>;
            })}
            <DataTable Colums={colums} Rows={rows} />
        </>
    );
}
