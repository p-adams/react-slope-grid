import DataJamTable from "../components/DataJamTable";
import "./BasicTable.css";
interface BasicTableProps {
  data?: any[][];
  columnHeaders?: string[];
}

function BasicTable(props: BasicTableProps) {
  const {
    data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    columnHeaders = [],
  } = props;
  return (
    <div className="basic-table-wrapper">
      <DataJamTable data={data} columnHeaders={columnHeaders} />
    </div>
  );
}

export default BasicTable;
