import { Box, Text } from '@chakra-ui/react';
import TerminalInput from './TerminalInput';
import CommandOutput from './CommandOutput';
import { useState, useEffect } from 'react';
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

// Blinking cursor animation (now used!)
const blink = keyframes`
    from, to { opacity: 0; }
    50% { opacity: 1; }
`;

export default function Terminal() {
    const [history, setHistory] = useState([]);
    const [typedText, setTypedText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const welcomeText = "Welcome to Gazar's Portfolio Terminal";
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < welcomeText.length) {
                setTypedText(welcomeText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                // Blinking cursor effect (now uses the `blink` keyframes)
                setInterval(() => setShowCursor(prev => !prev), 500);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const handleCommand = (input) => {
        setHistory((prev) => [...prev, input]);
    };

    return (
        <Box
            bg="black"
            color="green.300"
            p={6}
            fontFamily="'Courier New', monospace"
            minH="100vh"
            border="2px solid"
            borderColor="green.500"
            borderRadius="md"
            boxShadow="0 0 10px rgba(0, 255, 0, 0.5)"
        >
            <Text
                fontSize="xl"
                fontWeight="bold"
                mb={4}
                animation={`${glitch} 2s infinite`}
            >
                {typedText}
                {/* Blinking cursor with animation */}
                {showCursor && (
                    <Text
                        as="span"
                        ml={1}
                        animation={`${blink} 1s infinite`}
                    >
                        |
                    </Text>
                )}
            </Text>


            <Box mb={4}>
                <Text>1. about - Who is Kimzee?</Text>
                <Text>2. projects - View my work</Text>
                <Text>3. skills - My tech stack</Text>
                <Text>4. contact - Get in touch</Text>
                <Text>0. exit</Text>
            </Box>

            {/* Command history/output */}
            <CommandOutput history={history} />

            {/* Input with hacker prompt */}
            <Box display="flex" alignItems="center">
                <Text color="red.400" mr={2}>root@kimzee-terminal:~$</Text>
                <TerminalInput onCommand={handleCommand} />
            </Box>
        </Box>
    );
}