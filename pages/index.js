import NextLink from 'next/link'
import { 
	Button,
	Container, 
	Box,
	Image, 
	Heading,
	Link,
	SimpleGrid,
	List,
	ListItem,
	Icon,
	useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection , BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
	IoLogoTwitter,
	IoLogoInstagram,
	IoLogoGithub,
	IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
	return (
		<Layout>
		<Container>
		<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
		Hello, I&apos;m a full-stack developer from Palau!
		</Box>

		<Box display={{md: 'flex'}}>
		<Box flexGrow={1}>
		<Heading as="h2" variant="page-title">
		Joseph Anson
		</Heading>
		<p>Digital Craftzman ( Artist / Developer / Designer )</p>
		</Box>
		<Box 
		flexShrink={0} 
		mt={{ base: 4, md: 0 }} 
		ml={{ md: 6 }} 
		align="center"
		>
		<Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/joseph.jpg" alt="Profile Image" />
		</Box>
		</Box>
		
		<Section delay={0.1}>
		<Heading as="h3" variant="section-title">
		Work
		</Heading>
		<Paragraph>Joseph is a maker and developer based in Miami with a passion for adventure and making things both digital and physical.  He has a knack for solving real-life problems with code.  When away from the keyboard, he has a love for adventure and photography.  View his site here{' '}
		<NextLink href="/works/palaudiver">
		<Link>Palaudiver</Link>
		</NextLink>
		.
		</Paragraph>
		<Box align="center" my={4}>
			<NextLink href="/works">
		<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
		My portfolio
		</Button>
		</NextLink>
		</Box>
		</Section>
		<Section delay={0.2}>
			<Heading as="h3" variant="section-title" >
			Bio
		</Heading>
		<BioSection>
		<BioYear>1974</BioYear>
		Born in Staten Island
		</BioSection>
		<BioSection>
		<BioYear>1996</BioYear>
		Moved to Miami
		</BioSection>
		</Section>
		<Section delay={0.3}>
			<Heading as="h3" variant="section-title">
			I ♥
			</Heading>
		<Paragraph>
			Photography, Skydiving, Mountain Biking, Woodworking
		</Paragraph>
		</Section>

		<Section delay={0.3}>
		<Heading as="h3" variant="section-title">
		On the web
		</Heading>
		<List>
			<ListItem>
				<Link href="https://github.com/palaudiver" target="_blank">
				<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
				palaudiver
				</Button>
				</Link>
			</ListItem>
                        <ListItem>
                                <Link href="https://twitter.com/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                @palaudiver
                                </Button>
                                </Link>
                        </ListItem>
                        <ListItem>
                                <Link href="https://discordapp.com/users/palaudiver#1548/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                palaudiver#1548
                                </Button>
                                </Link>
                        </ListItem>
                        <ListItem>
                                <Link href="https://www.instagram.com/palaudiver.photography/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                palaudiver.photography
                                </Button>
                                </Link>
                        </ListItem>
		</List>
		</Section>
		</Container>
		</Layout>
	)
}

export default Page

