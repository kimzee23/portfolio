import { Box, Link, Text, VStack, Heading, HStack, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { keyframes } from '@emotion/react';

// import { MdSecurity } from 'react-icons/md';


const glitch = keyframes`
  0% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  14% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  15% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  50% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  99% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  100% { text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff; }
`;

const ContactItem = ({ icon, label, value, href }) => (
    <HStack
        spacing={4}
        p={3}
        borderLeft="2px solid"
        borderColor="green.500"
        _hover={{
            bg: 'blackAlpha.500',
            transform: 'translateX(4px)',
            boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)'
        }}
        transition="all 0.3s ease"
    >
        <Icon as={icon} color="green.400" boxSize={5} />
        <Text
            fontFamily="monospace"
            color="green.200"
            flexShrink={0}
        >
            {label}:
        </Text>
        <Link
            href={href}
            isExternal
            color="teal.300"
            fontFamily="monospace"
            _hover={{
                color: 'teal.200',
                textDecoration: 'underline',
                textShadow: '0 0 5px rgba(0, 255, 255, 0.5)'
            }}
        >
            {value}
        </Link>
    </HStack>
);

export default function Contact() {
    return (
        <Box
            p={6}
            bg="blackAlpha.800"
            borderWidth="1px"
            borderColor="green.800"
            borderRadius="md"
        >
            <Heading
                size="lg"
                mb={6}
                color="green.300"
                fontFamily="'Courier New', monospace"
                animation={`${glitch} 2.5s infinite`}
            >
                $ contact --init-connection
            </Heading>

            <VStack align="start" spacing={3}>
                <ContactItem
                    icon={FaEnvelope}
                    label="[email]"
                    value="gazartechnology@gmail.com"
                    href="mailto:gazartechnology@gmail.com"
                />

                <ContactItem
                    icon={FaGithub}
                    label="[github]"
                    value="@kimzee23"
                    href="https://github.com/kimzee23"
                />

                <ContactItem
                    icon={FaLinkedin}
                    label="[linkedin]"
                    value="in/kimzee"
                    href="https://linkedin.com/in/kimzee"
                />

                <Box mt={4} pt={4} borderTop="1px dashed" borderColor="green.700">
                    <Text
                        fontFamily="monospace"
                        color="green.400"
                        fontSize="sm"
                    >
                        $ echo "Let's build something extraordinary" | nc {window.location.hostname} 1337
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
}