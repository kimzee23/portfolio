import { Box } from '@chakra-ui/react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function CommandOutput({ history }) {
    return (
        <Box w="full">
            {history.map((cmd, index) => {
                if (typeof cmd !== 'string') {
                    return (
                        <Box key={index} color="red.300">
                            Invalid command
                        </Box>
                    );
                }

                const lowerCmd = cmd.trim().toLowerCase();

                switch (lowerCmd) {
                    case '1':
                    case 'about':
                        return <About key={index} />;
                    case '2':
                    case 'projects':
                        return <Projects key={index} />;
                    case '3':
                    case 'skills':
                        return <Skills key={index} />;
                    case '4':
                    case 'contact':
                        return <Contact key={index} />;
                    case '0':
                    case 'exit':
                        return (
                            <Box key={index} color="gray.500">
                                Exiting terminal... (You can refresh to restart)
                            </Box>
                        );
                    default:
                        return (
                            <Box key={index} color="yellow.300">
                                &gt; {cmd}
                                <br />
                                Unknown command. Please type <strong>1–4</strong> or <strong>0</strong> to exit.
                            </Box>
                        );
                }
            })}
        </Box>
    );
}
