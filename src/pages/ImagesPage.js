"use client";
import React from "react";

const ImagesPage = ({ data }) => {
  return (
    <>
      <div className="main  w-[100%] h-auto mt-4 flex flex-wrap gap-10">
        {data?.map((item) => (
          <div className="w-[30%] h-[50%] ">
            <img src={item.largeImageURL} className="rounded-lg " alt="" width={"100%"} height={"auto"} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagesPage;
