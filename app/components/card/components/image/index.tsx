import Image from "next/image"

import imageMobile from "@/assets/images/image-product-mobile.jpg"

const CardImage = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        src={imageMobile}
        width={343}
        height={240}
        alt="product photo"
      />
    </div>
  )
}
export default CardImage
