import React, { useState } from "react";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("All");

  function handleSearchChange(newSearch) {
    setSearchText(newSearch);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter
        search={searchText}
        onSearchChange={handleSearchChange}
        selectedCategory={category}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <em>{item.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
