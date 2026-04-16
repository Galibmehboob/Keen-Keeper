"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="h-screen flex justify-center items-center">
            <ClipLoader size={50} />
        </div>
    );
}