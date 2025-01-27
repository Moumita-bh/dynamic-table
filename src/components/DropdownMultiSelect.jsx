import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { FaCheck } from "react-icons/fa";

const animatedComponents = makeAnimated();

const initialOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

const DropdownMultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customOptions, setCustomOptions] = useState(initialOptions);
  const [newOption, setNewOption] = useState("");

  const handleChange = (selected) => {
    setSelectedOptions(selected || []);
  };

  const addNewOption = () => {
    if (newOption.trim() !== "") {
      const newEntry = { value: newOption.toLowerCase(), label: newOption };
      setCustomOptions([...customOptions, newEntry]);
      setNewOption("");
    }
  };

  return (
    <div className="multi-select-container" style={{ width: "600px" }}>
  <Select
    options={[
      ...customOptions.map((option) => ({
        value: option.value,
        label: (
          <div className="option-container">
            <div
              className={`checkbox ${
                selectedOptions.some((sel) => sel.value === option.value)
                  ? "checked"
                  : ""
              }`}
            >
              <FaCheck className="icon" size={10} />
            </div>
            {option.label}
          </div>
        ),
        realLabel: option.label,
      })),
      {
        value: "add-option",
        label: (
          <div className="add-option-container">
            <input
              type="text"
              placeholder="Add new item"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              style={{
                width: "300px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button onClick={addNewOption}>+ Add</button>
          </div>
        ),
        isDisabled: true,
      },
    ]}
    isMulti
    value={selectedOptions.map((opt) => ({
      value: opt.value,
      label: opt.realLabel || opt.label,
    }))}
    onChange={handleChange}
    placeholder="Select Options"
    isClearable
    closeMenuOnSelect={false}
    components={animatedComponents}
    styles={{
      control: (base) => ({
        ...base,
        borderRadius: "8px",
        boxShadow: "none",
        borderColor: "#ccc",
        width: "100%", // Ensures it uses the full width of the container
      }),
      multiValue: (base) => ({
        ...base,
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        padding: "4px 8px",
      }),
      multiValueLabel: (base) => ({
        ...base,
        padding: "2px 6px",
      }),
      placeholder: (base) => ({
        ...base,
        fontSize: "14px",
        color: "#999",
        width: "100%",
        textAlign: "left", // Align the placeholder text to the left
        paddingLeft: "8px", // Add some padding to ensure it's not too close to the edge
      }),
    }}
  />
</div>

  );
};

export default DropdownMultiSelect;
