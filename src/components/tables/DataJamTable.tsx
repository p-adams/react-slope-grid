import { useMemo } from "react";
import "./DataJamTable.css";

function DataJamTable(props: DataJamTableProps) {
  // TODO: APPLY ACTIONS TO DATA
  const { data } = props;
  if (!data) {
    return null;
  }
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
              {props.actions?.sortBy && (
                <div>sort {/* TODO: replace with icon*/}</div>
              )}
            </div>
          ))}
        </>
      )}
      {columns.map((col) =>
        rows.map((row) => (
          <div key={`${row}-${col}`} className="data-cell">
            {props.data?.[row]?.[col]}
          </div>
        ))
      )}
    </div>
  );
}

export default DataJamTable;
