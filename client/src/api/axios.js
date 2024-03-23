import axios from "axios";

const baseURL = "https://portfolio-api-fry1.onrender.com";
export default axios.create({
  baseURL,
});

const imageUrl = `${baseURL}/image`;
export { imageUrl };
