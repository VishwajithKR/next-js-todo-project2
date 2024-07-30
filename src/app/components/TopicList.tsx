import React from "react";
import Removebtn from "./Removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicList = () => {
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between g-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-7">
          <Removebtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicList;
