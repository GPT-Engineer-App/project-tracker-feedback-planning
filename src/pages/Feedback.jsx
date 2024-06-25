import { useState } from "react";
import { Container, Text, VStack, Input, Textarea, Button, Table, Thead, Tbody, Tr, Th, Td, Box, Heading } from "@chakra-ui/react";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { name, email, message, date: new Date().toLocaleString() };
    setFeedbacks([...feedbacks, newFeedback]);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Feedback</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            <Button type="submit" colorScheme="teal" width="100%">Submit Feedback</Button>
          </VStack>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={10} mb={4}>Submitted Feedback</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Message</Th>
                <Th>Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {feedbacks.map((feedback, index) => (
                <Tr key={index}>
                  <Td>{feedback.name}</Td>
                  <Td>{feedback.email}</Td>
                  <Td>{feedback.message}</Td>
                  <Td>{feedback.date}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={10} mb={4}>Feedback Analysis</Heading>
          <Text>Analysis of the feedback will be displayed here.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Feedback;