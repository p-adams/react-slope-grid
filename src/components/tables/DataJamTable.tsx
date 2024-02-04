import { useMemo } from "react";
import "./DataJamTable.css";

export interface DataJamProps {
  data: any[][]; // Adjust the type as per your data structure
  columnHeaders?: { label: string; sortable?: boolean }[];
}

function DataJamTable(props: DataJamProps) {
  const { data } = props;

  const [columns, rows] = useMemo(() => {
    const numColumns = data.length > 0 ? data[0].length : 0;
    const numRows = data.length;
    return [
      Array.from({ length: numColumns }, (_, index) => index),
      Array.from({ length: numRows }, (_, index) => index),
    ];
  }, [data]);
  const defaultGridTemplateColumns = `repeat(${columns.length}, 1fr)`;
  return (
    <div
      className="datajam-table-wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: `var(--datajam-table-columns, ${defaultGridTemplateColumns})`,
      }}
    >
      {props.columnHeaders && (
        <>
          {props.columnHeaders.map((header, index) => (
            <div key={index} className="data-header">
              <div>{header.label}</div>
              {header.sortable && (
                <div>sort {/* TODO: replace with icon*/}</div>
              )}
            </div>
          ))}
        </>
      )}
      {columns.map((col) =>
        rows.map((row) => (
          <div key={`${row}-${col}`} className="data-cell">
            {props.data[row][col]}
          </div>
        ))
      )}
    </div>
  );
}

export default DataJamTable;