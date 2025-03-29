export function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: `${params.slug.replace(/-/g, ' ')} | Skillnet Exam Hub`,
		description: `Explore ${params.slug.replace(
			/-/g,
			' '
		)} on Skillnet Exam Hub, the decentralized platform for skill learning and certification.`,
		openGraph: {
			title: `${params.slug.replace(/-/g, ' ')} | Skillnet Exam Hub`,
			description: `Discover ${params.slug.replace(
				/-/g,
				' '
			)} on Skillnet Exam Hub, a blockchain-powered learning and certification platform.`,
			images: [`/og-${params.slug}.png`], // Ensure the image exists or provide a fallback
		},
	};
}