type CardPriceProps = {
  priceNow: number
  priceBefore: number
}

const CardPrice = ({ priceNow, priceBefore }: CardPriceProps) => {
  return (
    <div className="flex items-center gap-4 pt-4 pb-2">
      <span className="text-fem-deep-aquamarine font-fraunces font-bold text-[2rem]">
        ${priceNow}
      </span>
      <span className="line-through text-fem-aurometal-saurus text-[13px] font-medium">
        ${priceBefore}
      </span>
    </div>
  )
}
export default CardPrice
