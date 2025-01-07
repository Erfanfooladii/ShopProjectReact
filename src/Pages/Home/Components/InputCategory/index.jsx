import "./style.css"
const InputCategory=({name,isChecked,checked,disabled})=>{
    return(
        <div className="item-check">
            <input type="checkbox" disabled={disabled} checked={checked} onChange={isChecked} id={name} />
            <label htmlFor={name}>{name}</label>
        </div>
    )
};
export default InputCategory;