// import PropTypes from "prop-types";

export const SelectForm = (props) => {
    return (
        <>
            <select onChange={props.handleChange} defaultValue={props.defaultValue}>
                {props.options.map((e, i) => {
                    return  <option key={i} value={e}>{e}</option>
                })}
            </select>
        </>
    )
}

// SelectForm.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     options: PropTypes.array.isRequired
// }