import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
	return (
		<Layout title="Photography">
		<Container>
		<Title>
		Photography <Badge>2012</Badge>
		</Title>
			<P>
			Photography from adventures around the world
			</P>
		<List ml={4} my={4}>
		<ListItem>
			<Meta>Website</Meta>
			<Link href="https://palaudiver.photography/">
			https://palaudiver.photography/ <ExternalLinkIcon mx="2px" />
			</Link>
		</ListItem>
		</List>
		</Container>
		</Layout>
	)
}

export default Work
