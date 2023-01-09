// import { useState } from 'react'

export const Form = (props) => {
    // const [text, setText] = useState("text")
    // const [number, setNumber] = useState("number")

    return (
        <>
            <form>
                {props.children}
            </form>
        </>
    )
}