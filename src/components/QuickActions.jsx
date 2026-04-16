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
        <div className="p-4 flex gap-4">
            <button onClick={() => handleClick("call")} className="btn">
                <IoCallOutline size={30} /> Call
            </button>

            <button onClick={() => handleClick("text")} className="btn">
                <MdOutlineTextsms size={30} /> Text
            </button>

            <button onClick={() => handleClick("video")} className="btn">
                <IoVideocamOutline size={30} /> Video
            </button>
        </div>
    );
}