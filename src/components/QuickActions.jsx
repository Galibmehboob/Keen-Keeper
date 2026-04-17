"use client";

import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { useTimeline } from "@/context/TimelineContext";
import { toast } from "react-hot-toast";

export default function QuickActions({ friend }) {
    const { addToTimeline } = useTimeline();

    const handleClick = (type) => {
        const newItem = {
            id: Date.now(),
            name: friend.name,
            type: type,
            date: new Date().toLocaleString(),
        };

        addToTimeline(newItem);
        toast.success(`${type} added with ${friend.name}`);
    };

    return (
        <div className="p-4 grid grid-cols-3 gap-3">
            <button
                onClick={() => handleClick("call")}
                className="btn w-full h-20 flex flex-col items-center justify-center"
            >
                <IoCallOutline size={30} />
                <span className="hidden sm:block">Call</span>
            </button>

            <button
                onClick={() => handleClick("text")}
                className="btn w-full h-20 flex flex-col items-center justify-center"
            >
                <MdOutlineTextsms size={30} />
                <span className="hidden sm:block">Text</span>
            </button>

            <button
                onClick={() => handleClick("video")}
                className="btn w-full h-20 flex flex-col items-center justify-center"
            >
                <IoVideocamOutline size={30} />
                <span className="hidden sm:block">Video</span>
            </button>
        </div>
    );
}