// import { Box, Text } from '@chakra-ui/react';
// import { useEffect, useState } from 'react';
// import { keyframes } from '@emotion/react';
//
// const matrixChars = 'gazar1234';
// const columns = 30;
// const dropSpeed = 50;
//
// const fall = keyframes`
//   to { transform: translateY(100vh); }
// `;
//
// export default function MatrixFooter() {
//     const [drops, setDrops] = useState([]);
//
//     useEffect(() => {
//
//         const initialDrops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -100));
//         setDrops(initialDrops);
//
//         // Matrix animation loop
//         const interval = setInterval(() => {
//             setDrops(prev => prev.map((drop) =>
//                 drop > 100 ? (Math.random() > 0.95 ? 0 : -20) : drop + 1
//             ));
//         }, dropSpeed);
//
//         return () => clearInterval(interval);
//     }, []);
//
//     return (
//         <Box
//             position="fixed"
//             bottom={0}
//             left={0}
//             right={0}
//             h="100px"
//             overflow="hidden"
//             bg="black"
//             zIndex={10}
//             opacity={0.7}
//         >
//             {drops.map((drop, i) => (
//                 <Text
//                     key={i}
//                     position="absolute"
//                     top={`${drop}px`}
//                     left={`${i * 2}rem`}
//                     fontFamily="monospace"
//                     color="green.400"
//                     fontSize="lg"
//                     whiteSpace="nowrap"
//                     animation={drop >= 0 ? `${fall} ${5 + Math.random() * 5}s linear infinite` : 'none'}
//                     style={{ animationDelay: `${Math.random() * 2}s` }}
//                 >
//                     {Array(10).fill(0).map((_, j) => (
//                         <span
//                             key={j}
//                             style={{
//                                 opacity: j === 0 ? 1 : 0.7 - (j * 0.1),
//                                 color: j === 0 ? 'white' : 'inherit'
//                             }}
//                         >
//               {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
//             </span>
//                     ))}
//                 </Text>
//             ))}
//         </Box>
//     );
// }