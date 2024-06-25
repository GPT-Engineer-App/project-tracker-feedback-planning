import { Container, Text, VStack } from "@chakra-ui/react";

const QuarterlyPlanning = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Quarterly Planning</Text>
        <Text>This is the Quarterly Planning page.</Text>
      </VStack>
    </Container>
  );
};

export default QuarterlyPlanning;