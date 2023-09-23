import axios from "axios";

export const getImages = async (text, count) => {
  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${text}&image_type=photo&per_page=${count}&safe_search=true`
    );

    return data;
  } catch (error) {
    console.log(error.message);
  }
};
