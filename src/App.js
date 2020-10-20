import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchableList from "./components/SearchableList";
import Icon from '@material-ui/icons/AcUnit';
function App() {
  const [items, setItems] = useState([
    {
      lable: "Budget",
      value: "Budget",
    },
    {
      lable:  "Food allergies",
      value:  "Food allergies"
    },
    {
      lable: "Number of people",
      value: "Number of people"
    },
    {
      lable: "Spicial restrictions",
      value: "Spicial restrictions"
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    setSelectedItems((items) => {
      const exists = items.find(i => i.value === item.value);
      console.log({exists})
      if (!!exists) {
        return items.filter((i) => i.value !== item.value);
      } else {
        return items.concat(item);
      }
    });
  };

  return (
    <div className="App">
      <SearchableList
        items={items}
        selectedItems={selectedItems}
        onSearch={(items) => {
          setItems(items);
        }}
        onSelect={handleSelectItem}
      />
    </div>
  );
}

export default App;
