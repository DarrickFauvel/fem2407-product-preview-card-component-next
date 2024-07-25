import { ReactNode } from "react"

type CardCategoryTitleProps = {
  children: ReactNode
}

const CardCategoryTitle = ({ children }: CardCategoryTitleProps) => {
  return (
    <h2 className="text-xs text-fem-aurometal-saurus tracking-[5px] uppercase font-medium">
      {children}
    </h2>
  )
}
export default CardCategoryTitle
