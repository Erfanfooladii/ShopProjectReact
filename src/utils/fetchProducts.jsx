// https://kaaryar-ecom.liara.run/v1/products?search=book&category=6748dfa3c9017c78628d4a90&page=1&limit=10
export const fetchProductApi = async ({ search = '', category = [], page = 1, limit = 10 } = {}) => {
    const baseURL = 'https://kaaryar-ecom.liara.run/v1/products';
    try {
      const res = await fetch(`${baseURL}?search=${search}&category=${category}&page=${page}&limit=${limit}`);
      const data = await res.json();
      return {
        productsData:data.products || [],
        data:data
      };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const getProductId =async ({id})=>{
    const baseURL = 'https://kaaryar-ecom.liara.run/v1/product';
    try {
      const res=await fetch(`${baseURL}/${id}`)
      const data=await res.json()
      return data.product
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }