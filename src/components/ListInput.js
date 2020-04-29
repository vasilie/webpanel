import React from 'react';

const ListInput = ({
  type,
  options,
  placeholder,
  handleInput,
  allPlaceholder,
  className,
}) => {
  switch (type) {
    case 'select':
      return (
        <div className={className}>
          <select
            className="input select"
            placeholder="Status"
            onChange={handleInput}
          >
            <option value="" selected disabled>
              {placeholder}
            </option>
            <option value="">{allPlaceholder}</option>
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      );
    case 'search':
      return (
        <div className={className}>
          <input
            type="text"
            className="input"
            placeholder={placeholder}
            onChange={handleInput}
          />
        </div>
      );
    default:
      return '';
  }
};

export default ListInput;
