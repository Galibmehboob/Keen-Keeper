import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-gray-50 to-gray-200">


            <h1 className="text-7xl font-extrabold text-gray-800 drop-shadow-sm">
                404
            </h1>


            <p className="text-lg text-gray-600 mt-3 max-w-md">
                Oops! The page you’re looking for doesn’t exist or has been moved.
            </p>


            <Link
                href="/"
                className="mt-6 px-6 py-2 rounded-lg bg-black text-white font-medium shadow hover:bg-gray-800 hover:scale-105 transition duration-200"
            >
                Go Home
            </Link>

        </div>
    );
}