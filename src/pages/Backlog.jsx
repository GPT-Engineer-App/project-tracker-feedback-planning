import { Container, Text, VStack } from "@chakra-ui/react";

const Backlog = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Backlog</Text>
        <Text>This is the Backlog page.</Text>
      </VStack>
    </Container>
  );
};

export default Backlog;