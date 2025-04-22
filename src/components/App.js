import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import ItemForm from "./ItemForm";
import itemsData from "../data/items";

function App() {
  const [items, setItems] = useState(itemsData);
  const [searchText, setSearchText] = useState("");

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  function handleSearchChange(newSearch) {
    setSearchText(newSearch);
  }

  return (
    <div className="App">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList
        items={items}
        searchText={searchText}
        onSearchChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
