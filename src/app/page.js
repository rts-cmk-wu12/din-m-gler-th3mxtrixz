import LandingPage from "../components/LandingPage/LandingPage"
import Houses from "./HouseInfo/page"
import Subscription from "../components/LandingPage/Subscription"
import MeetAgents from "../components/LandingPage/MeetAgents"
import Ad from "../components/LandingPage/Ad"

export default function Home() {
  return (
    <>
      <LandingPage/>
      <Houses/>
      <Subscription/>
      <MeetAgents/>
      <Ad/>
    </>
  )
}
