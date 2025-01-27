import React from "react";
import DropdownSingleSelect from "./DropdownSingleSelect";
import DropdownMultiSelect from "./DropdownMultiSelect";
import "../index.css";

const Row = ({ rowId }) => {
  return (
    <tr>
      <td><DropdownSingleSelect rowId={rowId}/></td>
      <td><DropdownMultiSelect rowId={rowId} /></td>
    </tr>
  );
};

export default Row;
