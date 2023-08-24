import { Column } from "../../pages/datatable";

interface DataType {
    Colums: Column[];
    Rows: any[];
}

export default function DataTable({ Colums, Rows }: DataType) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {Colums.map((col, index) => {
                            return <th key={index}>{col.label}</th>;
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
            </table>
        </>
    );
}
