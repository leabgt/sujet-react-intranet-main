export const InputForm = (props) => {
    return (
        <>
            <div>
                <input name={props.name} type={props.type} placeholder={props.placeholder} id={props.id} size={props.size}/>
            </div>
        </>
    )
}