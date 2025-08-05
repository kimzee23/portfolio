import { Box, Image, Text, VStack, Heading, Link, HStack } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import near from  '../assets/near.png'


const glitch = keyframes`
  0% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  14% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  15% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  50% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  99% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  100% { text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff; }
`;

const projects = [
    {
        title: 'Expense Tracker',
        image: '/images/expense-tracker.png',
        description: 'Track your expenses, budgets, and reports using Flask + MongoDB.',
        github: 'https://github.com/your-username/expense-tracker',
        demo: 'https://your-expense-tracker-demo.com',
        tech: ['Python', 'Flask', 'MongoDB']
    },
    {
        title: 'Menstruation App',
        image: '/images/menstruation-app.png',
        description: 'A smart cycle tracker built in Java with custom logic.',
        github: 'https://github.com/your-username/menstruation-app',
        demo: 'https://your-menstruation-demo.com',
        tech: ['Java', 'Android SDK', 'SQLite']
    },
    {
        title: 'Innerverse Wellness Game',
        image: '/images/innerverse.png',
        description: 'A gamified mental wellness platform for Gen Z with art, music, and storytelling.',
        github: 'https://github.com/your-username/innerverse',
        demo: 'https://innerverse.app',
        tech: ['React', 'Three.js', 'Node.js']
    },
    {
        title: 'Near by shop',
        image: near,
        description: 'Where you day Cloth,Food stuff,e.t.c.',
        github: 'https://github.com/kimzee23/near-by-shop',
        demo: 'https://nearbyshopit.netlify.app/',
        tech: ['React', 'Three.js', 'Chakara UI']
    },
];

export default function Projects() {
    return (
        <VStack align="start" spacing={8} w="100%">
            <Heading
                size="lg"
                color="green.300"
                fontFamily="'Courier New', monospace"
                animation={`${glitch} 2.5s infinite`}
            >
                $ ./projects --Get D Job-mode
            </Heading>

            {projects.map((project, index) => (
                <Box
                    key={index}
                    borderLeft="4px solid"
                    borderColor="green.500"
                    p={4}
                    w="100%"
                    bg="blackAlpha.800"
                    _hover={{
                        transform: 'translateX(4px)',
                        boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)'
                    }}
                    transition="all 0.3s ease"
                >
                    <HStack align="flex-start" spacing={6}>
                        <Box flexShrink={0}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                w="180px"
                                h="120px"
                                objectFit="cover"
                                borderRadius="sm"
                                border="1px solid"
                                borderColor="green.700"
                            />
                        </Box>

                        <VStack align="start" spacing={2}>
                            <Text
                                fontFamily="monospace"
                                color="green.200"
                                fontWeight="bold"
                                fontSize="lg"
                            >
                                {project.title}
                            </Text>

                            <Text color="green.400" fontSize="sm">
                                {project.description}
                            </Text>

                            <HStack spacing={2} wrap="wrap">
                                {project.tech.map((tech, i) => (
                                    <Text
                                        key={i}
                                        fontSize="xs"
                                        color="green.600"
                                        fontFamily="monospace"
                                    >
                                        [{tech}]
                                    </Text>
                                ))}
                            </HStack>

                            <HStack spacing={4} pt={2}>
                                <Link
                                    href={project.github}
                                    isExternal
                                    color="teal.300"
                                    fontFamily="monospace"
                                    fontSize="sm"
                                    _hover={{
                                        textDecoration: 'underline',
                                        color: 'teal.200'
                                    }}
                                >
                                    $ view-source
                                </Link>
                                <Link
                                    href={project.demo}
                                    isExternal
                                    color="blue.300"
                                    fontFamily="monospace"
                                    fontSize="sm"
                                    _hover={{
                                        textDecoration: 'underline',
                                        color: 'blue.200'
                                    }}
                                >
                                    $ run-demo
                                </Link>
                            </HStack>
                        </VStack>
                    </HStack>
                </Box>
            ))}
        </VStack>
    );
}