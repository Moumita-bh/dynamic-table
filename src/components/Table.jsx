import React, { useState } from "react";
import Row from "./Row";
import "../index.css";

const Table = () => {
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1 }]);
  };

  return (
    <div className="app">
      {/* Table Container */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Label 1</th>
              <th>Label 2</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <Row key={row.id} rowId={row.id} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Button outside the table container */}
      <div className="add-row-container">
        <button className="add-row" onClick={addRow}>+ Add New Row</button>
      </div>
    </div>
  );
};

export default Table;
