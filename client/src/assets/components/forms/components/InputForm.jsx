export const InputForm = (props) => {
    return (
        <>
            <div>
                <label htmlFor={props.for}>{props.text}</label>
                <input name={props.name} type={props.type} placeholder={props.placeholder} id={props.id} size={props.size} value={props.value}/>
            </div>
        </>
    )
}