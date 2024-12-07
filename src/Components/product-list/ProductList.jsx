import "./ProductList.css"
import ProductCard from "../ProductCard/ProductCard";

const ProdcutList = ({data}) => {
    return (
        <div className='container-product-list' >
            {
            data.map((item)=>{
                return <ProductCard 
                    key={item.id}
                    productName={item.name}
                    productPrice={Math.round(item.price)}
                    productImage={item.images[0]}
                    category={item.category.name}
                />
            })
            }
        </div>
    )
};
export default ProdcutList