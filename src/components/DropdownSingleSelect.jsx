import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" }
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "5px",
    borderRadius: "8px",
    borderColor: state.isFocused ? "grey" : "#ddd",
    boxShadow: state.isFocused ? "0 0 3px rgba(131, 131, 131, 0.5)" : "none",
    "&:hover": { borderColor: "grey" },
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "5px"
  }),
  valueContainer: (provided) => ({
    ...provided,
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden"
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#e0e0e0",
    padding: "5px 10px",
    borderRadius: "5px",
    margin: "2px",
    fontSize: "14px",
    display: "flex",
    alignItems: "center"
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "black"
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    cursor: "pointer",
    ":hover": { backgroundColor: "#d6d6d6", color: "black" }
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    padding: "5px"
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "grey" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": { backgroundColor: "#007bff", color: "white" }
  })
};

const DropdownMultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
      <label style={{ fontWeight: "bold", fontSize: "16px", display: "block", marginBottom: "8px" }}>
        
      </label>

      {/* Multi-Select Dropdown with Custom Tag Style */}
      <Select
        options={options}
        isMulti
        value={selectedOptions}
        onChange={setSelectedOptions}
        placeholder="Selected Option"
        styles={customStyles}
        closeMenuOnSelect={false}
      />
    </div>
  );
};

export default DropdownMultiSelect;
