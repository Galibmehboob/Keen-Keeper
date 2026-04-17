"use client";

import { Pie, PieChart, Tooltip, Legend } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

export default function StatsPage() {
    const { timeline } = useTimeline();

    const counts = {
        call: 0,
        text: 0,
        video: 0,
    };

    timeline.forEach((item) => {
        if (item.type === "call") counts.call++;
        if (item.type === "text") counts.text++;
        if (item.type === "video") counts.video++;
    });

    const data = [
        { name: "Call", value: counts.call, fill: "#22c55e" },
        { name: "Text", value: counts.text, fill: "#3b82f6" },
        { name: "Video", value: counts.video, fill: "#f59e0b" },
    ];

    if (timeline.length === 0) {
        return (
            <div className="p-4 sm:p-8 flex justify-center items-center">
                <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 text-center max-w-sm w-full">
                    <h2 className="text-xl font-semibold text-gray-800">
                        No Data
                    </h2>

                    <p className="text-gray-500 mt-2 text-sm">
                        You haven,t added any interactions yet.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl sm:text-5xl px-4 sm:px-0 w-full max-w-6xl mx-auto mb-5 font-bold">
                Friendship Analytics
            </h1>

            <div className="p-4 sm:p-8 flex flex-col items-center w-full max-w-6xl mx-auto shadow-lg rounded-lg">
                <h1 className="text-xl sm:text-2xl font-semibold flex mb-6 text-center">
                    By Interaction Type
                </h1>

                <PieChart
                    width={300}
                    height={300}
                    className="sm:w-[400px] sm:h-[400px]"
                >
                    <Pie
                        data={data}
                        innerRadius="60%"
                        outerRadius="100%"
                        cornerRadius={20}
                        paddingAngle={5}
                        dataKey="value"
                    />

                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
}