export default function TrackBoard() {
    const cards = [
        { number: "10", text: "Total Friends" },
        { number: "03", text: "On Track" },
        { number: "06", text: "Need Attention" },
        { number: "12", text: "Interactions This Month" },
    ];

    return (
        <div className="flex gap-6 justify-center flex-wrap mt-10 border-gray-200 pb-5 border-b-2">
            {cards.map((item, index) => (
                <div
                    key={index}
                    className="w-40 h-25 bg-zinc-50 shadow-sm rounded-xl flex flex-col items-center justify-center hover:scale-105 transition"
                >
                    <h1 className="text-3xl font-bold text-black">{item.number}</h1>
                    <p className="text-sm text-gray-500 mt-2">{item.text}</p>
                </div>
            ))}
        </div>
    );
}