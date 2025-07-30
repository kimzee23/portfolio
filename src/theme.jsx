import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            100: "#f7c948", // Original yellow
            900: "#fff", // White
        },
        // Cyberpunk color palette
        matrix: {
            50: "#f0fff4",
            100: "#dcffe4",
            200: "#bef5cb",
            300: "#00ff41", // Matrix green
            400: "#00e639",
            500: "#00cc33",
            600: "#00b32d",
            700: "#008f27",
            800: "#006622",
            900: "#004d1c",
        },
        terminal: {
            bg: "#0d0208", // Darkest black
            text: "#00ff41", // Bright green
            accent: "#ff009d", // Cyberpunk pink
            border: "#008f11", // Darker green
        }
    },
    fonts: {
        heading: "'Courier New', monospace",
        body: "'Courier New', monospace",
    },
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'terminal.bg' : 'gray.50',
                color: props.colorMode === 'dark' ? 'matrix.300' : 'gray.800',
                // CRT scanline effect (only in dark mode)
                backgroundImage: props.colorMode === 'dark'
                    ? `linear-gradient(
              rgba(0, 255, 65, 0.03) 1px, 
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(0, 255, 65, 0.03) 1px, 
              transparent 1px
            )`
                    : 'none',
                backgroundSize: '20px 20px',
                // Text selection styling
                '::selection': {
                    bg: 'matrix.300',
                    color: 'terminal.bg',
                }
            },
        }),
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: 'monospace',
                fontWeight: 'normal',
                letterSpacing: '0.05em',
            },
            variants: {
                hacker: {
                    bg: 'matrix.300',
                    color: 'terminal.bg',
                    border: '1px solid',
                    borderColor: 'matrix.300',
                    _hover: {
                        bg: 'matrix.400',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 0 10px matrix.300',
                    }
                }
            }
        }
    },
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    }
});

export default theme;