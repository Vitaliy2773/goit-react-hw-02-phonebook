import React from 'react';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} value={value} />
    </label>
  );
}
