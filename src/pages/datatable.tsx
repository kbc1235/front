import { useState, useEffect, CSSProperties, ChangeEvent } from "react";
import DataTable from "../components/dataTable";

export interface Column {
    id: string;
    label: string | JSX.Element;
    align: string;
    check?: (colum: Column, row: any) => JSX.Element;
    format?: (colum: Column, row: any) => JSX.Element;
}

export default function DataTablePage() {
    const [checkItem, setCheckItem] = useState<string[]>([]);
    const handleCheck = (id: string): void => {
        if (checkItem.includes(id)) {
            setCheckItem(checkItem.filter((str) => str !== id));
        } else {
            setCheckItem((checkItem) => [...checkItem, id]);
        }
    };

    const handleAllCheck = (): void => {
        setCheckItem((prev) => {
            console.log(prev.length === 0);
            const allCheck = prev.length === 0 ? rows.map((item) => item.id) : [];
            return allCheck;
        });
    };
    const colums = [
        {
            id: "checkbox",
            label: <input type="checkbox" onChange={handleAllCheck} checked={checkItem.length === 0 ? false : true} />,
            align: "center",
            check: (colum, row) => {
                const checkbox = row.isCheck ? (
                    <input
                        type="checkbox"
                        checked={checkItem.includes(row.id)}
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
    ];

    const rows = [
        { id: "check01", isCheck: true, name: "이름", old: 11, skill: "리액트", isDev: true },
        { id: "check02", isCheck: true, name: "이름2", old: 11, skill: "퍼블", isDev: false },
        { id: "check03", isCheck: true, name: "이름", old: 11, skill: "리액트", isDev: true },
    ];

    return (
        <>
            <DataTable Colums={colums as Column[]} Rows={rows} />

            {checkItem.map((data) => {
                return <div>{data}</div>;
            })}
        </>
    );
}
