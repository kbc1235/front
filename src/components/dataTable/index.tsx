import styled from "styled-components";
import { Column } from "../../pages/datatable";

interface DataType {
    Colums: Column[];
    Rows: any[];
}

export default function DataTable({ Colums, Rows }: DataType) {
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
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.old}</td>
                                <td>{row.skill}</td>
                                <td>
                                    {Colums.map((col) => {
                                        return col.format ? col.format("", row) : "";
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

const StyledTable = styled.table`
    border: 1px solid #ccc;
    th,
    td {
        padding: 10px;
        border: 1px solid #ccc;
    }
`;
