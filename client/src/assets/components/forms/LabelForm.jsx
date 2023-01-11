export const LabelForm = (props) => {
    return (
        <>
            <div>
                <label htmlFor={props.for}>{props.text}</label>
            </div>
        </>
    )
}