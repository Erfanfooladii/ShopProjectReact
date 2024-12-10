import "./InputCheckbox.css"
const InputCheckbox=({name,isChecked,checked})=>{
    return(
        <div className="item-check">
            <input type="checkbox" checked={checked} onChange={isChecked} id={name} />
            <label htmlFor={name}>{name}</label>
        </div>
    )
};
export default InputCheckbox