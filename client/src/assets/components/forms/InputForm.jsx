export const InputForm = (props) => {
  return (
    <>
        <label htmlFor={props.for}>{props.text}</label>
        <input
          onChange={props.onChange}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          size={props.size}
          defaultValue={props.defaultValue}
          value={props.value}
          required={props.required}
        />
    </>
  );
};
