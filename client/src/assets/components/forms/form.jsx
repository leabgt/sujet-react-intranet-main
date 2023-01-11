// import { useState } from 'react'

export const Form = (props) => {
  // const [text, setText] = useState("text")
  // const [number, setNumber] = useState("number")

  return (
    <>
      <form onSubmit={props.onSubmit}>
        {props.children}
        <input type="submit" value={props.value} />
      </form>
    </>
  );
};
