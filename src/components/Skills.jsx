import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    List,
    ListItem,
    Progress,
    Tag
} from '@chakra-ui/react';
import { FaTerminal, FaCode, FaServer, FaPalette, FaDatabase } from 'react-icons/fa';
import { keyframes } from '@emotion/react';


const glitch = keyframes`
  0% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  14% { text-shadow: 0.05em 0 0 #00fffc, -0.05em -0.025em 0 #fc00ff; }
  15% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  49% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.025em 0 #fc00ff; }
  50% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  99% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff; }
  100% { text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff; }
`;

const SkillCategory = ({ icon, title, children }) => (
    <Box mb={6}>
        <HStack mb={3}>
            <Box color="green.400">{icon}</Box>
            <Heading
                fontSize="lg"
                color="green.300"
                fontFamily="'Courier New', monospace"
            >
                {title}
            </Heading>
        </HStack>
        {children}
    </Box>
);

const SkillBar = ({ name, level, color = "green" }) => (
    <Box mb={3}>
        <HStack justify="space-between" mb={1}>
            <Text
                fontFamily="monospace"
                color="green.200"
                fontSize="sm"
            >
                {name}
            </Text>
            <Text
                color={`${color}.300`}
                fontFamily="monospace"
                fontSize="xs"
            >
                {level}/10
            </Text>
        </HStack>
        <Progress
            value={level * 10}
            colorScheme={color}
            height="6px"
            borderRadius="full"
            bg="blackAlpha.400"
        />
    </Box>
);

export default function Skills() {
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
                $ skills --show-all --hacker-mode
            </Heading>

            <VStack align="start" spacing={8}>
                <SkillCategory
                    icon={<FaCode />}
                    title="Languages & Core"
                >
                    <SkillBar name="Python" level={10} color="green" />
                    <SkillBar name="Java" level={8} color="teal" />
                    <SkillBar name="JavaScript" level={8} color="blue" />
                    <SkillBar name="Kotlin" level={7} color="purple" />
                </SkillCategory>

                <SkillCategory
                    icon={<FaTerminal />}
                    title="Frontend Tech"
                >
                    <HStack spacing={2} wrap="wrap">
                        {['React',  'Chakra UI', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                            <Tag
                                key={skill}
                                variant="outline"
                                colorScheme="green"
                                fontFamily="monospace"
                            >
                                {skill}
                            </Tag>
                        ))}
                    </HStack>
                </SkillCategory>

                <SkillCategory
                    icon={<FaServer />}
                    title="Backend & DevOps"
                >
                    <HStack spacing={2} wrap="wrap">
                        {['Django', 'Flask', 'JAva', 'Docker', 'AWS', 'CI/CD'].map(skill => (
                            <Tag
                                key={skill}
                                variant="outline"
                                colorScheme="teal"
                                fontFamily="monospace"
                            >
                                {skill}
                            </Tag>
                        ))}
                    </HStack>
                </SkillCategory>

                <SkillCategory
                    icon={<FaDatabase />}
                    title="Databases"
                >
                    <List spacing={2} fontFamily="monospace">
                        {['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'].map(db => (
                            <ListItem key={db} color="green.200">
                                <Text as="span" color="green.400">$ </Text>
                                {db}
                            </ListItem>
                        ))}
                    </List>
                </SkillCategory>

                <SkillCategory
                    icon={<FaPalette />}
                    title="Creative Skills"
                >
                    <HStack spacing={2} wrap="wrap">
                        {['UI/UX Design', 'Motion Graphics', 'Storytelling', 'Illustration'].map(skill => (
                            <Tag
                                key={skill}
                                variant="subtle"
                                colorScheme="pink"
                                fontFamily="monospace"
                            >
                                {skill}
                            </Tag>
                        ))}
                    </HStack>
                </SkillCategory>
            </VStack>
        </Box>
    );
}