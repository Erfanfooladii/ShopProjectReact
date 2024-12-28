import "./style.css"
const ItemSllin=({image,name,category,price})=>{
    return(
        <li className="itemSllin">
            <img className="itemSllin__image" src={image} alt={name} />
            <div className="itemSllin__detail">
                <h2 className="itemSllin__detail__category">{category}</h2>
                <h3 className="itemSllin__detail__name">{name}</h3>
                <span className="itemSllin__detail__price">
                    ${Math.round(price)}
                    <small className="itemSllin__detail__price-off" >$99</small>
                </span>
            </div>
        </li>
    )
};
export default ItemSllin;
