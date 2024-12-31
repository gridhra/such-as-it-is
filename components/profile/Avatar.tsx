import { Avatar as ChakraAvatar, Link } from "@chakra-ui/react"

type Props = {
  linkTo?: string
}


export const Avatar = ({ linkTo = '/profile' }: Props) => {
  return (
    <Link href={linkTo}>
      <ChakraAvatar size="2xl" name="Aquila Takayama" src="/aquila.jpg" />
    </Link>
  )
}
