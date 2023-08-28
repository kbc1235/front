import styled from "styled-components";
import { useState } from "react";
import { Column, Column2 } from "../../pages/datatable";

interface DataType {
    Colums: Column[];
    Rows: any[];
}

interface DataType2 {
    Column2: Column2[];
    Rows2: any[];
}

export function DataTable({ Colums, Rows }: DataType) {
    return (
        <>
            <StyledTable>
                <thead>
                    <tr>
                        {Colums.map((col, index) => {
                            return (
                                <th key={index} style={{ textAlign: col.align }}>
                                    {col.label}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <tbody>
                    {Rows.map((row, index) => {
                        return (
                            <tr key={index} id={row.id}>
                                <td>
                                    {Colums.map((col) => {
                                        return col.check ? col.check(col, row) : "";
                                    })}
                                </td>
                                <td>{row.name}</td>
                                <td>{row.old}</td>
                                <td>{row.skill}</td>
                                <td>
                                    {Colums.map((col) => {
                                        return col.format ? col.format(col, row) : "";
                                    })}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
        </>
    );
}

export function DataTableType({ Column2, Rows2 }: DataType2) {
    const [checkItem, setCheckItem] = useState<string[]>([]);
    const handleCheck = (siteWorkerId: string): void => {
        if (checkItem.includes(siteWorkerId)) {
            setCheckItem(checkItem.filter((item) => item !== siteWorkerId));
        } else {
            setCheckItem([...checkItem, siteWorkerId]);
        }
    };
    const handleAllCheck = (): void => {
        if (checkItem.length === 0) {
            setCheckItem(Rows2.map((item) => item.siteWorkerId));
        } else {
            setCheckItem([]);
        }
    };
    console.log(checkItem);
    return (
        <>
            <StyledTable>
                <thead>
                    {Column2.map((data, i) => {
                        return (
                            <tr key={i}>
                                <th>
                                    {data.checkBox ? (
                                        <input
                                            type="checkbox"
                                            onChange={() => {
                                                handleAllCheck();
                                            }}
                                            checked={checkItem.length === 0 ? false : true}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </th>
                                <th>{data.deptId}</th>
                                <th>{data.name}</th>
                                <th>{data.region}</th>
                                <th>{data.gender}</th>
                                <th>{data.siteId}</th>
                            </tr>
                        );
                    })}
                </thead>
                <tbody>
                    {Rows2.map((data, i) => {
                        return (
                            <tr key={i}>
                                <th>
                                    {data.checkBox ? (
                                        <input
                                            type="checkbox"
                                            onChange={() => {
                                                handleCheck(data.siteWorkerId);
                                            }}
                                            checked={checkItem.includes(data.siteWorkerId)}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </th>
                                <td>{data.partnerId === "hyundai" ? "현대" : "기타"}</td>
                                <td>{data.name}</td>
                                <td>{data.region}</td>
                                <td>{data.gender}</td>
                                <td>{data.siteId}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
        </>
    );
}

const StyledTable = styled.table`
    width: 100%;
    border: 1px solid #ccc;
    th,
    td {
        padding: 10px;
        border: 1px solid #ccc;
    }
`;
