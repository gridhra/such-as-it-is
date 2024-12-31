import { Box, VStack, HStack, Link } from "@chakra-ui/react"
import { FaGithub, FaTwitter, FaRegCalendarAlt } from "react-icons/fa"
import { SiScrapbox } from "react-icons/si";
import { Avatar } from '@/components/profile/Avatar'
import { gitHubUrl, scrapboxUrl, timerexUrl, twitterUrl } from "@/config/Links";
import { NameAndTitleAsHeader } from "@/components/profile/NameAndTitleAsHeader";

export default function Home() {
  const spacing = 8
  return (
    <Box bg="navy.700" color="white" minH="100vh" p={4}>
      <VStack spacing={spacing} align="center">
        <Box mt={spacing}>
          <Avatar linkTo="/" />
        </Box>
        <NameAndTitleAsHeader />
        <HStack spacing={4}>
          <Link href={gitHubUrl} isExternal aria-label="GitHub">
            <FaGithub size="24" />
          </Link>
          <Link href={twitterUrl} isExternal aria-label="Twitter">
            <FaTwitter size="24" />
          </Link>
          <Link href={scrapboxUrl} isExternal aria-label="Cosense">
            <SiScrapbox size="24" />
          </Link>
          <Link href={timerexUrl} isExternal aria-label="Timerex（予定調整）">
            <FaRegCalendarAlt size="24" />
          </Link>
        </HStack>
      </VStack>
    </Box>
  )
}
