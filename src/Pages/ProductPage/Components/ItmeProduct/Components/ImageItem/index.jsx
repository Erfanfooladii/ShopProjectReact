import "./style.css"
const ImageItem=({data})=>{
    return(
        <div className="product__item-image">
        {data?.images?.length > 0 && (
          <img
            src={data?.images[0]}
            className="product__itme-img"
            alt={data.name}
          />
        )}
      </div>
    )
}
export default ImageItem;