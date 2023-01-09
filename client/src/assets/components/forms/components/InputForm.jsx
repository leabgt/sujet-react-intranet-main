export const InputForm = (props) => {
    return (
        <>
            <div>
                <input name={props.name} type={props.type} value={props.value} placeholder={props.placeholder} id={props.id} size={props.size}/>
            </div>
        </>
    )
}