import Image from "next/image"
import CardImage from "./components/image"

import imageCart from "@/assets/images/icon-cart.svg"

const Card = () => {
  return (
    <article className="group flex flex-col my-7 mx-4 bg-white rounded-xl overflow-hidden">
      <CardImage />
      <div className="flex flex-col gap-3 p-6">
        <h2 className="text-xs text-fem-aurometal-saurus tracking-[5px] uppercase font-medium">
          Perfume
        </h2>

        <h3 className="text-[32px] leading-8 text-fem-gunmetal text-balance font-fraunces font-bold">
          Gabrielle Essence Eau De Parfum
        </h3>

        <p className="text-fem-aurometal-saurus font-medium text-sm leading-[1.6]">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className="flex items-center gap-4 pt-4 pb-2">
          <span className="text-fem-deep-aquamarine font-fraunces font-bold text-[32px]">
            $149.99
          </span>
          <span className="line-through text-fem-aurometal-saurus text-[13px] font-medium">
            $169.99
          </span>
        </div>

        <button className="flex justify-center items-center gap-2 text-white text-sm font-bold p-4 mt-2 rounded-lg bg-fem-deep-aquamarine hover:bg-fem-deep-aquamarine-hover">
          <Image src={imageCart} width={14.39} height={16} alt="cart icon" />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  )
}
export default Card
