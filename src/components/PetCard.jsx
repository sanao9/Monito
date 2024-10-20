import React, { useState, useEffect } from "react";
import { getPets } from "../services/apiService";  // Import the API function

const PetCard = ({ image, name, gene, age, price }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-70 object-cover m-2" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">Gene: {gene}</p>
        <p className="text-gray-600">Age: {age}</p>
        <p className="text-blue-900 font-semibold mt-2">{price} VND</p>
      </div>
    </div>
  );
};

const PetList = () => {
  const [pets, setPets] = useState([]);  // State to hold pets data
  const [loading, setLoading] = useState(true);  // State for loading
  const [error, setError] = useState(null);  // State for error

  // Fetch pets data on component mount
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await getPets();  // Fetch the data from API
        setPets(data);  // Update state with the fetched pets
        setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
        setError("Failed to load pets");  // Handle error
        setLoading(false);
      }
    };
    fetchPets();  // Call the function to fetch data
  }, []);  // Empty dependency array to run once on mount

  if (loading) {
    return <div>Loading...</div>;  // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>;  // Show error message
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900">
            Take A Look At Some Of Our Pets
          </h2>
          <button className="flex items-center space-x-2 text-blue-900 font-semibold border border-blue-900 px-4 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
            <span>View More</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Pet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {pets.map((pet, index) => (
            <PetCard
              key={index}
              image={pet.image}  // Assuming the API response contains an "image" field
              name={pet.name}
              gene={pet.gene}
              age={pet.age}
              price={pet.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetList;
