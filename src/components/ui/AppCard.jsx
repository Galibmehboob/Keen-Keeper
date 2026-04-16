"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const statusStyle = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-black",
    "on-track": "bg-green-600 text-white",
};

const AppCard = ({ friend }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/home/${friend.id}`)}
            className="bg-white shadow-md rounded-xl p-5 cursor-pointer hover:scale-105 transition"
        >
            <Image
                src={friend.picture}
                alt={friend.name}
                width={64}
                height={64}
                className="rounded-full w-16 h-16 object-cover mx-auto"
            />

            <h2 className="text-center mt-3 font-semibold">{friend.name}</h2>

            <p className="text-center text-gray-400 text-sm">
                {friend.days_since_contact} days ago
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
                {friend.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div
                className={`mt-3 flex  mx-auto    text-xs px-2 py-2 w-fit   rounded-full ${statusStyle[friend.status]}`}
            >
                {friend.status}
            </div>
        </div>
    );
};

export default AppCard;