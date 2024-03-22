import axios from "axios";

const baseURL = "http://localhost:3500";
export default axios.create({
  baseURL,
});

const imageUrl = `${baseURL}/image`;
export { imageUrl };
