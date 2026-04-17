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
                    className="shadow  border-gray-200 hover:shadow-lg hover:scale-[1.01] transition p-4 rounded mb-2 flex flex-col sm:flex-row gap-2"
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