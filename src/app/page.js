"use client";
import { getImages } from "@/api/api";
import ImagesPage from "@/pages/ImagesPage";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";

export default function Home() {
  const [images, setImages] = useState("");
  const [count, setCount] = useState(20);
  const [data, setData] = useState([]);
 

  const getData = async () => {
    const res = await getImages(images, count);
    setData(res?.data?.hits);
  };
  useEffect(() => {
    if (count < 3 || count > 200) {
      return;
    }
  
    getData();
   
  }, [count]);

  return (
    <>
      <div className="main-container  w-[100%] h-auto bg-[#181A1B]">
        <div className="navbar bg-black w-[100%] h-24 flex items-center">
          <h1 className="font-extrabold mx-3 text-2xl text-white flex items-center gap-3">
            <BsCardImage />
            Image Finder
          </h1>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <input
            className="border-[#3B3B3B] w-[200px] h-10  mx-3 border-2 px-3 rounded-md text-white bg-[#3B3B3B]"
            placeholder="search images..."
            type="text"
            name=""
            id=""
            onChange={(e) => setImages(e.target.value)}
          />
          <button
            className="  rounded-lg  h-10 bg-black text-white w-28"
            onClick={getData}
          >
            Search
          </button>

          <select
            onChange={(e) => setCount(e.target.value)}
            id="countries"
            className="  w-40 ml-5  text-sm rounded-lg block text-white  p-2.5  bg-[#3B3B3B]"
          >
            <option selected>20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </div>
        <div>
          <ImagesPage data={data} />
        </div>
      </div>
    </>
  );
}
