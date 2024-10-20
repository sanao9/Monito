import React, { useEffect, useState } from "react";
import { getProducts } from "../services/apiService";  // Import your API service

const ProductGrid = () => {
  const [products, setProducts] = useState([]);  // State to hold products data
  const [loading, setLoading] = useState(true);  // State to manage loading state
  const [error, setError] = useState(null);  // State to handle errors

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();  // Call the API function
        setProducts(data);  // Update the state with fetched products
        setLoading(false);  // Set loading to false after data is fetched
      } catch (error) {
        setError('Failed to fetch products');  // Handle errors if any
        setLoading(false);  // Set loading to false even in case of error
      }
    };

    fetchData();  // Fetch data on mount
  }, []);  // Empty dependency array ensures it runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;  // Show a loading message while fetching data
  }

  if (error) {
    return <div>{error}</div>;  // Show error message if fetching fails
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-700">
            Hard to choose the right products for your pets?
          </h2>
          <h3 className="text-3xl font-bold text-blue-900 mt-2">Our Products</h3>
          <div className="flex justify-end">
            <button className="flex items-center space-x-2 text-blue-900 font-semibold border border-blue-900 px-4 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
              <span>View More</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <img
                src={product.image} // Assuming the API provides an image URL
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-500">
                  Product: {product.productType} <br />
                  Size: {product.size}
                </p>
                <p className="mt-2 text-blue-900 font-bold">{product.price} VND</p>
                <div className="mt-3 flex items-center space-x-2">
                  <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-blue-900 text-xs font-semibold rounded-lg"
                  style={{ backgroundColor: "#FFE7BA" }}>
                    🎁 {product.promotion}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
