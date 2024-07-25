import { ReactNode } from "react"

type CardTitleProps = {
  children: ReactNode
}

const CardTitle = ({ children }: CardTitleProps) => {
  return (
    <h3 className="text-[2rem] sm:pt-5 leading-8 text-fem-gunmetal text-balance font-fraunces font-bold">
      {children}
    </h3>
  )
}
export default CardTitle
