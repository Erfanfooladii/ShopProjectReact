import "./style.css"
const CategoryItem=({data})=>{
    return (
        <div className="product__category">
          CATEGORY: {data?.category?.name}
        </div>
    )
}
export default CategoryItem;