import {Container, 
    Box, 
    Image, 
    Heading, 
    Button, 
    Text, 
    Flex,
    Link,
    useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
      <Link
        as={NextLink}
        href={href}
        scroll={false}
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    )
  }

  const Survey = () => {
    return (
        <Container>
        <Box borderRadius="lg">
        
        <Image
            borderRadius={16}
            src="https://i.imgur.com/sa6eHtZ.png"
            alt="Logo Banorte"
            href="/index"
            />
        <h>
        ‎
        </h>
        <Heading as="h2">
        Hola, Oscar! 👋
        </Heading>
        </Box>
        <h>
        ‎
        </h>
        </Container>
    )
}

export default Survey
