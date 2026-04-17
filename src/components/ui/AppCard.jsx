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
            className="bg-white shadow-md w-60 h-50 sm:h-full item-center rounded-xl p-4 sm:p-5 cursor-pointer transition hover:scale-105"
        >
            <Image
                src={friend.picture}
                alt={friend.name}
                width={64}
                height={64}
                className="rounded-full w-14 h-14 sm:w-16 sm:h-16 object-cover mx-auto"
            />

            <h2 className="text-center mt-2 sm:mt-3 font-semibold text-sm sm:text-base">
                {friend.name}
            </h2>

            <p className="text-center text-gray-400 text-xs sm:text-sm">
                {friend.days_since_contact} days ago
            </p>

            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2">
                {friend.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div
                className={`mt-3 mx-auto text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-2 w-fit rounded-full ${statusStyle[friend.status]}`}
            >
                {friend.status}
            </div>
        </div>
    );
};

export default AppCard;