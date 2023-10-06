// import React, { useState, createContext, useEffect } from "react";

// export const ProductContext = createContext();

// const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data = await response.json();
//       console.log(data)
//       setProducts(data); // Update the products state with fetched data
//     };

//     fetchProducts(); // Call the fetchProducts function
//   }, []);

//   return (
//     <ProductContext.Provider value={products}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export default ProductProvider;
