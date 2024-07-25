import { ReactNode } from "react"

type CardDescriptionProps = {
  children: ReactNode
}

const CardDescription = ({ children }: CardDescriptionProps) => {
  return (
    <p className="text-fem-aurometal-saurus font-medium text-sm leading-[1.6] sm:pt-6">
      {children}
    </p>
  )
}
export default CardDescription
