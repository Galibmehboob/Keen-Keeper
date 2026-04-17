import FriendList from "@/components/homepage/FriendList";

const getData = async () => {
    const res = await fetch("https://keen-keeper-coral.vercel.app//data.json", {
        cache: "no-store",
    });
    return res.json();
};

export default async function HomePage() {
    const data = await getData();

    return (
        <div className="p-10">
            <FriendList data={data} />
        </div>
    );
}