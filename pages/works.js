import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item.js'
import Layout from '../components/layouts/article'

import thumbPalauDiver from '../public/images/works/palaudiver.png'
import thumbpdwoodworking from '../public/images/works/pdwood.png'
const Works = () => {
	return (
		<Layout>
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
			Works
			</Heading>

		<SimpleGrid columns={[1,1,2]} gap={6}>
		<Section>
		<WorkGridItem id="pdphotography" title="Palaudiver Photography" thumbnail={thumbPalauDiver}>
		Beautiful Photos from Adventures Around the World
		</WorkGridItem>
		</Section>
		<Section>
		<WorkGridItem 
		id="pdwoodworking" 
		title="Palaudiver Woodworking" 
		thumbnail={thumbpdwoodworking}
		>
		Beautiful Woodworking
		</WorkGridItem>
		</Section>
		</SimpleGrid>
		</Container>
		</Layout>
	)
}

export default Works
