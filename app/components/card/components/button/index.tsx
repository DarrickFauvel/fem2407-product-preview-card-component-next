import Image from "next/image"

import imageCart from "@/assets/images/icon-cart.svg"

const CardButton = () => {
  return (
    <button className="flex justify-center items-center gap-2 text-white text-sm font-bold py-3 sm:py-4 mt-2 rounded-lg transition-all duration-300 bg-fem-deep-aquamarine hover:bg-fem-deep-aquamarine-hover">
      <Image src={imageCart} width={14.39} height={16} alt="cart icon" />
      <span>Add to Cart</span>
    </button>
  )
}
export default CardButton
