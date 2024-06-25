import { Container, Text, VStack } from "@chakra-ui/react";

const BugTracker = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Bug Tracker</Text>
        <Text>This is the Bug Tracker page.</Text>
      </VStack>
    </Container>
  );
};

export default BugTracker;