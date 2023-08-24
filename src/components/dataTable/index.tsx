import { Colum, Row } from "../../pages/datatable";
import styled from "styled-components";

interface DateTableProps {
  columns: Colum[];
  rows: Row[];
}

export default function DataTable({ columns, rows }: DateTableProps) {
  return (
    <StyledDataTable>
      <thead>
        <tr>
          {columns.map((obj, i) => (
            <th key={i}>{obj.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => {
          return (
            <tr key={i}>
              {columns.map((col, j) => {
                const value = col.format ? col.format(col, row) : row[col.id];
                return (
                  <td
                    key={j}
                    style={{ textAlign: col.align || ("center" as any) }}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledDataTable>
  );
}

const StyledDataTable = styled.table`
  width: 500px;
  border-collapse: collapse;

  tr,
  th {
    border: 1px #ccc solid;
  }

  th {
    background-color: #e2e6e8;
  }
`;
