"use client";

import { Pie, PieChart, Tooltip, Legend } from "recharts";
import { useTimeline } from "@/context/TimelineContext";

export default function StatsPage() {
    const { timeline } = useTimeline();

    //  count
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

    //  dynamic data
    const data = [
        { name: "Call", value: counts.call, fill: "#22c55e" },
        { name: "Text", value: counts.text, fill: "#3b82f6" },
        { name: "Video", value: counts.video, fill: "#f59e0b" },
    ];

    //  empty state
    if (timeline.length === 0) {
        return <p className="p-8">No data yet</p>;
    }

    return (
        <div>
            <h1 className="text-5xl  w-6xl mx-auto mb-5 font-bold">Friendship Analytics</h1>

            <div className="p-8 flex flex-col items-center w-6xl mx-auto   shadow-lg rounded-lg">
                <h1 className="text-2xl font-semibold flex  mb-6">By Interaction Type</h1>

                <PieChart
                    width={400}
                    height={400}
                    style={{ maxWidth: "500px" }}
                >
                    <Pie
                        data={data}
                        innerRadius="70%"
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