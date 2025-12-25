// import application CSS
import "./App.css";

// import components
import BG from "./components/BG";               // Background layout
import FoodCard from "./components/foodCard";   // Card for each food item
import TopSection from "./components/TopSection"; // Search bar & header

// import React hooks
import { useEffect, useState } from "react"; 

// Base API endpoint
const BASE_URL = "http://localhost:9000";

const App = () => {
  // store the list of food items from server
  const [foodData, setFoodData] = useState([]);

  // track loading state while fetching data
  const [loading, setLoading] = useState(true);

  // track current search input text
  const [search, setSearch] = useState("");

  // store any errors that occur during fetching
  const [error, setError] = useState(null);

  // fetch menu from server when component loads
  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetch(BASE_URL);

        // if response not OK (status not 200-299), throw error
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        // parse JSON from server
        const jsonData = await response.json();

        // store fetched food items
        setFoodData(jsonData);
      } catch (err) {
        // save error message
        setError("Unable to fetch data");
      } finally {
        // no longer loading
        setLoading(false);
      }
    };

    fetchFoodData();  // run the fetch
  }, []); // [] means: run only once when component mounts

  // show simple loading screen while fetching
  if (loading) return <div>Loading...</div>;

  // show error if fetch failed
  if (error) return <div>{error}</div>;

  // filter items based on search term (type includes search text)
  const filteredData = foodData.filter(item =>
    (item.type || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* top section contains search bar */}
      <TopSection search={search} setSearch={setSearch} />

      {/* background wrapper */}
      <BG>
        <div className="food-container">
          {/* render a card for each filtered food item */}
          {filteredData.map((item, index) => (
            <FoodCard
              key={index}
              name={item.name}
              text={item.text}
              price={item.price}
              type={item.type}
              image={`http://localhost:9000${item.image}`} // full image URL
            />
          ))}
        </div>
      </BG>
    </div>
  );
};

export default App;
