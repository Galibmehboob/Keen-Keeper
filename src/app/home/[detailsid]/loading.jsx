"use client";

import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Loading() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!show) {
        return (
            <div className="h-screen flex justify-center items-center">
                <ClipLoader size={50} />
            </div>
        );
    }

    return null;
}