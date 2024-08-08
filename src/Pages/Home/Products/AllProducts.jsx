import { useState, useEffect } from "react";
import axios from "axios";
import SinglePro from "./SinglePro";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=8");
        setData(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to truncate text to a specified number of words
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <SinglePro data={data} truncateText={truncateText} />
  );
};

export default AllProducts;
