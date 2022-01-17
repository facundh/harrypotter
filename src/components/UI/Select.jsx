import React from "react";


const Option = ({label, value}) => {
    return <option value={value}>{label.toString().toUpperCase()}</option>
}
const Select = ({
  className,
  label,
  required,
  value,
  options,
  onChange,
  name,
}) => {
  return (
    <>
      <div className={className}>
        <label for="validationCustom" className="form-label">
          {label}
        </label>

        <select
          className="form-select"
          id="validationCustom"
          value={value}
          required={required}
          name={name}
          onChange={onChange}
        >
          <option value="" selected disabled>
            Seleccione
          </option>
          {options.map((element) => (
            <Option key={element} value={element} label={element} />
          ))}
        </select>
        <div className="invalid-feedback">Seleccione una Casa</div>
      </div>
    </>
  );
};

export default Select;
