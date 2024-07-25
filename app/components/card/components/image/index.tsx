import Image from "next/image"

import imageMobile from "@/assets/images/image-product-mobile.jpg"
import imageDesktop from "@/assets/images/image-product-desktop.jpg"

const CardImage = () => {
  return (
    <div className="relative overflow-hidden sm:w-1/2">
      {/* Show this image on screens < 640px */}
      <Image
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 sm:hidden"
        src={imageMobile}
        width={343}
        height={240}
        alt="product photo"
      />

      {/* or */}
      {/* Show this image on screens >= 640px */}
      <Image
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1 hidden sm:block"
        src={imageDesktop}
        width={300}
        height={450}
        alt="product photo"
      />
    </div>
  )
}
export default CardImage
