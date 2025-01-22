import React, { useState, useEffect } from 'react';
import { fetchAllAccountants } from '../services/api'; // Import the fetchAllAccountants function
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Loader from '../components/Loader'; // Import the Loader component

const Profile = () => {
  const [accountants, setAccountants] = useState([]); // State to store the accountants
  const [loading, setLoading] = useState(true); // Loading state to show loading indicator
  const [error, setError] = useState(null); // State to store any error
  const navigate = useNavigate(); // Initialize navigate for routing

  // Fetch all accountants on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllAccountants(); // Fetch data from API
        setAccountants(data); // Set the fetched data to state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError('Failed to fetch accountants');
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Handle redirect to specific profile page
  const handleProfileClick = (id) => {
    navigate(`/details/${id}`); // Use navigate to go to the profile details page
  };

  // Render loading, error or profiles based on state
  if (loading) {
    return <Loader />; // Show Loader component while loading
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="py-10 px-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Chartered Accountants</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {accountants.length > 0 ? (
          accountants.map((accountant) => (
            <div
              key={accountant.id}
              className="bg-white p-6 rounded-lg shadow-lg w-64 cursor-pointer hover:scale-105 transform transition"
              onClick={() => handleProfileClick(accountant.id)}
            >
              <img
                src={accountant.image || 'https://via.placeholder.com/150'} // Default image if no image is available
                alt={accountant.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">{accountant.name}</h3>
                <p className="text-sm text-gray-500">{accountant.intro}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-200">
                  View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-full text-lg text-gray-600">No accountants available.</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
