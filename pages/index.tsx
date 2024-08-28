import { Box, Avatar, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react"
import { FaDiscord, FaGithub, FaTwitter, FaRegCalendarAlt } from "react-icons/fa"
import { SiScrapbox } from "react-icons/si";
import { discordUrl, gitHubUrl, scrapboxUrl, timerexUrl, twitterUrl } from "@/config/Links";

export default function Home() {
  const spacing = 8
  return (
    <Box bg="navy.700" color="white" minH="100vh" p={4}>
      <VStack spacing={spacing} align="center">
        <Avatar size="2xl" mt={spacing} name="Aquila Minakami" src="/aquila.jpg" />
        <Heading>Aquila Takayama</Heading>
        <Text fontSize="xl">IT Engineer / Scholar</Text>
        <HStack spacing={4}>
          <Link href={gitHubUrl} isExternal>
            <FaGithub size="24" />
          </Link>
          <Link href={twitterUrl} isExternal>
            <FaTwitter size="24" />
          </Link>
          <Link href={scrapboxUrl} isExternal>
            <SiScrapbox size="24" />
          </Link>
          <Link href={discordUrl} isExternal>
            <FaDiscord size="24" />
          </Link>
          <Link href={timerexUrl} isExternal>
            <FaRegCalendarAlt size="24" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}
