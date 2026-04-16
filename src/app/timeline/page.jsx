"use client";

import { useTimeline } from "@/context/TimelineContext";
import { useState } from "react";

export default function TimelinePage() {
    const { timeline } = useTimeline();
    const [filter, setFilter] = useState("all");

    const filtered = timeline.filter((item) =>
        filter === "all" ? true : item.type === filter
    );

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Timeline</h1>

            {/* Filter */}
            <div className="mb-4">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border p-2 rounded"
                >
                    <option value="all">All</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
            </div>

            {/* Data */}
            {filtered.map((item) => (
                <div key={item.id} className="border p-4 rounded mb-2">
                    <p className="font-semibold">
                        {item.type} with {item.name}
                    </p>
                    <span className="text-sm text-gray-500">
                        {item.date}
                    </span>
                </div>
            ))}
        </div>
    );
}