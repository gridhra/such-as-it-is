import { Box, Avatar, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react"
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa"
import { SiScrapbox } from "react-icons/si";
import { FaBook } from "react-icons/fa";

export default function Home() {
  const spacing = 8
  return (
    <Box bg="navy.700" color="white" minH="100vh" p={4}>
      <VStack spacing={spacing} align="center">
        <Avatar size="2xl" mt={spacing} name="Aquila Minakami" src="/aquila.jpg" />
        <Heading>Aquila Takayama</Heading>
        <Text fontSize="xl">IT Engineer / Scholar</Text>
        <HStack spacing={4}>
          <Link href="https://github.com/yiegle" isExternal>
            <FaGithub size="24" />
          </Link>
          <Link href="https://twitter.com/such_as_it_is" isExternal>
            <FaTwitter size="24" />
          </Link>
          <Link href="https://scrapbox.io/aquila" isExternal>
            <SiScrapbox size="24" />
          </Link>
          <Link href="https://note.com/gal_ichiro" isExternal>
            <FaBook size="24" />
          </Link>
          <Link href="https://discord.gg/ECtFgmme" isExternal>
            <FaDiscord size="24" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}
