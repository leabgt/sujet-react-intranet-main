// import PropTypes from "prop-types";

export const SelectForm = (props) => {
  return (
    <>
      <select
        onChange={props.onChange}
        defaultValue={props.defaultValue}
        required
      >
        {props.options.map((e, i) => {
          return (
            <option key={i} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </>
  );
};

// SelectForm.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     options: PropTypes.array.isRequired
// }
