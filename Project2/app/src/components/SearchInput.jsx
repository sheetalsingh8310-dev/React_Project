import React from 'react'

// A reusable search input component that takes two props:
// - search: the current text input value
// - setSearch: a function to update the search value
const SearchInput = ({ search, setSearch }) => {
  return (
    <input 
      className='search'                // CSS class for styling
      type="text"                       // Standard text input
      placeholder="Search breakfast, dinner..." // Placeholder shown when the input is empty
      value={search}                    // The input is "controlled" by React state
      onChange={(e) => setSearch(e.target.value)} // Update state on every keystroke
    />
  )
}

export default SearchInput



// Props Used
// search: current search text (from parent component state)
// setSearch: function to update that state
// Updating State
// When the user types, onChange is triggered.
// setSearch(e.target.value) updates the parent component’s state with the new value.