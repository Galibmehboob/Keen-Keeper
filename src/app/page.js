import Banner from "@/components/homepage/Banner";
import FriendList from "@/components/homepage/FriendList";
import TrackBoard from "@/components/homepage/TrackBoard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <TrackBoard></TrackBoard>
      <FriendList></FriendList>
    </>
  );
}
