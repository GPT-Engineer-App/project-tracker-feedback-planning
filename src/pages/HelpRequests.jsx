import { Container, Text, VStack } from "@chakra-ui/react";

const HelpRequests = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Help Requests</Text>
        <Text>This is the Help Requests page.</Text>
      </VStack>
    </Container>
  );
};

export default HelpRequests;