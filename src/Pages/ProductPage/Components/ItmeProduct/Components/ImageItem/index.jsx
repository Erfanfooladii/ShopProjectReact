import "./style.css"
const ImageItem=({data,image})=>{
    return(
        <div className="product__item-image">
        {
          image ?
          data?.images?.length > 0 && (
            <img
              src={data?.images[0]}
              className="product__itme-img"
              alt={data.name}
            />
          ):
          data?.images?.length > 0 && (
            <img
              src={data?.images[1]}
              className="product__itme-img"
              alt={data.name}
            />
          )
        }
      </div>
    )
}
export default ImageItem;