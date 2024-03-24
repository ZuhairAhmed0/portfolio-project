import axios from "axios";

// const baseURL = "http://localhost:3500";
const baseURL = "https://portfolio-api-fry1.onrender.com";
export default axios.create({
  baseURL,
});

const imageUrl = `${baseURL}/image`;
export { imageUrl };
