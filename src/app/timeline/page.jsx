"use client";

import { useTimeline } from "@/context/TimelineContext";
import { useState } from "react";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";

const getIcon = (type) => {
    if (type === "call") return <IoCallOutline size={38} />;
    if (type === "text") return <MdOutlineTextsms size={38} />;
    if (type === "video") return <IoVideocamOutline size={38} />;
};


export default function TimelinePage() {
    const { timeline } = useTimeline();
    const [filter, setFilter] = useState("all");

    if (timeline.length === 0) {
        return (
            <div className="p-4 sm:p-8 flex justify-center items-center ">
                <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 text-center max-w-sm w-full">
                    <h2 className="text-xl font-semibold text-gray-800">
                        No History
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm">
                        You haven,t added any interactions yet.
                    </p>
                </div>
            </div>
        );
    }


    const filtered = timeline.filter((item) =>
        filter === "all" ? true : item.type === filter
    );

    return (
        <div className="p-2 w-70  sm:w-6xl  mx-auto">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">Timeline</h1>

            <div className="mb-4">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border p-2 rounded w-full sm:w-40"
                >
                    <option value="all">All</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
            </div>

            {filtered.map((item) => (
                <div
                    key={item.id}
                    className="shadow  border-gray-200 hover:shadow-lg hover:scale-[1.01] transition p-4 rounded mb-2 flex  sm:flex-row gap-2"
                >
                    <div className="flex items-center">
                        {getIcon(item.type)}
                    </div>

                    <div className="flex flex-col">
                        <p className="flex gap-2 text-sm sm:text-base">
                            <span className="font-bold">{item.type}</span> with {item.name}
                        </p>

                        <span className="text-sm text-gray-500">
                            {item.date}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}