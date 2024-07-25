import Image from "next/image"
import CardImage from "./components/image"

import imageCart from "@/assets/images/icon-cart.svg"
import CardCategoryTitle from "./components/category-title"
import CardTitle from "./components/title"
import CardPrice from "./components/price"
import CardDescription from "./components/description"
import CardButton from "./components/button"

const Card = () => {
  return (
    <article className="group flex flex-col sm:flex-row sm:w-[600px] my-7 mx-4 bg-white rounded-xl overflow-hidden">
      <CardImage />
      <div className="flex flex-col gap-3 sm:gap-0 sm:w-1/2 p-6 sm:p-8">
        <CardCategoryTitle>Perfume</CardCategoryTitle>

        <CardTitle>Gabrielle Essence Eau De Parfum</CardTitle>

        <CardDescription>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </CardDescription>

        <CardPrice priceNow={149.99} priceBefore={169.99} />

        <CardButton />
      </div>
    </article>
  )
}
export default Card
