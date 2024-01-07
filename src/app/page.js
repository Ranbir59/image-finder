"use client";
import { getImages } from "@/api/api";
import ImagesPage from "@/pages/ImagesPage";
import { useEffect, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { useDebounce } from "@/hooks/useDebounce";

export default function Home() {
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(20);
  const [data, setData] = useState([]);
  const debouncedSearchTerm = useDebounce(images);

  const getData = async () => {
    setLoading(true);
    const res = await getImages(debouncedSearchTerm, count);
    setData(res?.data?.hits);
    setLoading(false);
  };

  useEffect(() => {
    if (count < 3 || count > 200) {
      return;
    }
    getData();
  }, [debouncedSearchTerm, count]);

  return (
    <>
      <div className="main-container w-[100%] h-auto bg-[#181A1B]">
        <div className="navbar bg-black w-[100%] h-24 flex items-center ">
          <h1 className="font-extrabold mx-3 text-2xl text-white flex items-center gap-3">
            <BsCardImage />
            Image Finder
          </h1>
        </div>
        <div className="mt-3 flex items-center gap-2 max-[900px]:px-4 ">
          <input
            className="border-[#3B3B3B] w-[200px] h-10 mx-3 border-2 px-3 rounded-md text-white bg-[#3B3B3B]"
            placeholder="search images..."
            type="text"
            name=""
            id=""
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
          <select
            onChange={(e) => setCount(e.target.value)}
            id="countries"
            className="w-40 ml-5 text-sm rounded-lg block text-white p-2.5 bg-[#3B3B3B]"
          >
            <option defaultValue>20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
          </select>
        </div>
        <div>
          <ImagesPage data={data} loading={loading} />
        </div>
      </div>
    </>
  );
}
