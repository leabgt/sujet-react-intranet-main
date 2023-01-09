export const SelectForm = (props) => {
    return (
        <>
            <select name={props.name} id={props.id}>
                {props.children}
            </select>
        </>
    )
}