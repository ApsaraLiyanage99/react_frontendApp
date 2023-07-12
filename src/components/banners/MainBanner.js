import appleBanner from "../../images/apple-banner.jpg"
import StandardLink from "../links/StandardLink"

function MainBanner() {
  return (
    <div className="bg-gray-400 flex flex-col items-center justify-center gap-2 py-3">
        <p className="text-[50px] font-semibold">iphone 14</p>
        <p className="font-thin text-lg">with Awesome Quality and Performance</p>
        <div className="flex flex-row gap-3 py-3">
        <StandardLink  path="/iphone/iphone-14" name="Learn more >" />
        <StandardLink  path="/iphone/iphone-14/buy" name="Buy >" />
        </div>
        <img src={appleBanner} alt="Main Banner" className="w-[800px]" />
    </div>
  )
}

export default MainBanner