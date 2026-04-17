import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

            <h1 className="text-6xl font-bold text-gray-800">404</h1>

            <p className="text-lg text-gray-500 mt-2">
                Page not found
            </p>

            <Link
                href="/"
                className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
                Go Home
            </Link>

        </div>
    );
}