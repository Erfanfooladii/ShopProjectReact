export const fetchProducts = async () => {
    try {
      const response = await fetch('https://kaaryar-ecom.liara.run/v1/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
};
  