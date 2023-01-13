// import { useState } from 'react'

export const Form = (props) => {
  // const [text, setText] = useState("text")
  // const [number, setNumber] = useState("number")

  return (
    <>
      <form onSubmit={props.onSubmit} className={props.className}>
        {props.children}
        <input type="submit" value={props.value} />
      </form>
    </>
  );
};
