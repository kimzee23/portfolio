import {Box, Flex, Heading, HStack, Image, Text} from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { FaTerminal, FaCode, FaUserSecret } from 'react-icons/fa';
import { Icon } from '@chakra-ui/icons';
import { keyframes } from '@emotion/react';
import mw from '../assets/mw.png';


const glitch = keyframes`
  0% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  14% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  15% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  50% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  99% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  100% { text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff; }
`;

// Scanlines animation
const scanlines = keyframes`
  from { background-position: 0 0; }
  to { background-position: 0 10px; }
`;

export default function About() {
    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            p={8}
            gap={8}
            bg="blackAlpha.800"
            border="1px solid"
            borderColor="green.800"
            borderRadius="md"
            position="relative"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(
          rgba(0, 255, 0, 0.03) 1px,
          transparent 1px
        )`,
                backgroundSize: '100% 2px',
                animation: `${scanlines} 1s linear infinite`,
                pointerEvents: 'none',
                zIndex: 0
            }}
        >
            {/* Hacker Profile Image */}
            <Box position="relative" zIndex={1}>
                <Image
                    src={mw}
                    alt="Hacker Profile"
                    boxSize={{ base: '200px', md: '300px' }}
                    objectFit="cover"
                    borderRadius="full"
                    border="2px solid"
                    borderColor="green.500"
                    boxShadow="0 0 20px rgba(0, 255, 0, 0.3)"
                    _hover={{
                        transform: 'scale(1.03)',
                        boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)'
                    }}
                    transition="all 0.3s ease"
                />
            </Box>

            {/* Terminal Bio */}
            <Box
                color="green.300"
                fontFamily="'Courier New', monospace"
                maxW={{ md: '60%' }}
                zIndex={1}
            >
                <Flex align="center" mb={4}>
                    <Icon as={FaUserSecret} boxSize={6} color="green.500" mr={2} />
                    <Heading
                        fontSize="xl"
                        color="green.300"
                        animation={`${glitch} 2s infinite`}
                    >
                        $ ./whoami --001-mode
                    </Heading>
                </Flex>

                <Box
                    p={4}
                    bg="blackAlpha.600"
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor="green.500"
                >
                    <TypeAnimation
                        sequence={[
                            '> Initializing bio sequence...',
                            800,
                            '> Identity confirmed: Oluwagazar\n> Role: Full-stack developer\n> Specialization: UI/UX crafter',
                            1200,
                            '> Mission: Code with purpose. Design with intention.\n> Objective: Build secure, beautiful systems',
                            1500,
                            '> Skillset: React, Python, Java, Kotlin\n> Creative: Storytelling, Motion Design',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                            whiteSpace: 'pre-line',
                            display: 'block',
                            lineHeight: '1.8'
                        }}
                        repeat={Infinity}
                    />
                </Box>

                {/* Hacker Stats */}
                <Flex mt={6} wrap="wrap" gap={4}>
                    <HStack>
                        <Icon as={FaCode} color="green.400" />
                        <Text>10+ Projects</Text>
                    </HStack>
                    <HStack>
                        <Icon as={FaTerminal} color="green.400" />
                        <Text>2+ Years Coding</Text>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    );
}