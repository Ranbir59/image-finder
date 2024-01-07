"use client";
import Image from "next/image";
import React from "react";

const ImagesPage = ({ data }) => {
  return (
    <>
      <div className="main   mt-4  min-[900px]:columns-3 ">
        {data?.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <div className=" px-2 min-[900px]:py-2 py-3 ">
                <Image
                  src={item.largeImageURL}
                  className="rounded-lg  w-[100%] h-[100%]"
                  alt=""
                  priority
                  unoptimized
                  width={100}
                  height={100}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default ImagesPage;
