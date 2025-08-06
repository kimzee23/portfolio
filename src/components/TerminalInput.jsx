import { Input, Box, Text } from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { keyframes } from '@emotion/react';


const blink = keyframes`
  from, to { opacity: 0; }
  50% { opacity: 1; }
`;

export default function TerminalInput({ onCommand }) {
    const [value, setValue] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const inputRef = useRef(null);

    const handleKeyDown = (e) => {
        // Command history navigation (Up/Down arrows)
        if (e.key === 'ArrowUp' && commandHistory.length > 0) {
            e.preventDefault();
            const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
            setHistoryIndex(newIndex);
            setValue(commandHistory[commandHistory.length - 1 - newIndex] || '');
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newIndex = Math.max(historyIndex - 1, -1);
            setHistoryIndex(newIndex);
            setValue(newIndex === -1 ? '' : commandHistory[commandHistory.length - 1 - newIndex]);
        }
        // Submit command
        else if (e.key === 'Enter' && value.trim()) {
            onCommand(value);
            setCommandHistory(prev => [...prev, value]);
            setValue('');
            setHistoryIndex(-1);
        }
    };

    // Auto-focus input
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <Box display="flex" alignItems="center" pos="relative">
            {/* Terminal prompt */}
            <Text color="red.400" mr={2} userSelect="none">
                root@portfolio:~$
            </Text>

            {/* Input with custom styling */}
            <Box pos="relative" flex={1}>
                <Input
                    ref={inputRef}
                    variant="unstyled"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    color="green.300"
                    fontFamily="'Courier New', monospace"
                    letterSpacing="0.5px"
                    spellCheck={false}
                    _focus={{ outline: 'none' }}
                    pr="1.5rem" // Space for cursor
                />

                {/* Blinking cursor when input is empty */}
                {!value && (
                    <Text
                        as="span"
                        pos="absolute"
                        left="0"
                        top="0"
                        h="100%"
                        animation={`${blink} 1s infinite`}
                        pointerEvents="none"
                    >
                        █
                    </Text>
                )}
            </Box>
        </Box>
    );
}