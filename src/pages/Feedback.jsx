import { Container, Text, VStack } from "@chakra-ui/react";

const Feedback = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Feedback</Text>
        <Text>This is the Feedback page.</Text>
      </VStack>
    </Container>
  );
};

export default Feedback;