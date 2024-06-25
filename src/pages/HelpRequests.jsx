import { useState } from "react";
import { Container, Text, VStack, Input, Textarea, Button, Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const HelpRequests = () => {
  const [requests, setRequests] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = { title, description, status, assignedTo };
    if (editingIndex !== null) {
      const updatedRequests = [...requests];
      updatedRequests[editingIndex] = newRequest;
      setRequests(updatedRequests);
      setEditingIndex(null);
    } else {
      setRequests([...requests, newRequest]);
    }
    setTitle("");
    setDescription("");
    setStatus("");
    setAssignedTo("");
  };

  const handleEdit = (index) => {
    const request = requests[index];
    setTitle(request.title);
    setDescription(request.description);
    setStatus(request.status);
    setAssignedTo(request.assignedTo);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedRequests = requests.filter((_, i) => i !== index);
    setRequests(updatedRequests);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Help Requests</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <Input placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
            <Input placeholder="Assigned To" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />
            <Button type="submit" colorScheme="teal" width="100%">{editingIndex !== null ? "Update Request" : "Add Request"}</Button>
          </VStack>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={10} mb={4}>Help Requests</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Status</Th>
                <Th>Assigned To</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {requests.map((request, index) => (
                <Tr key={index}>
                  <Td>{request.title}</Td>
                  <Td>{request.description}</Td>
                  <Td>{request.status}</Td>
                  <Td>{request.assignedTo}</Td>
                  <Td>
                    <Flex>
                      <IconButton aria-label="Edit" icon={<FaEdit />} size="sm" mr={2} onClick={() => handleEdit(index)} />
                      <IconButton aria-label="Delete" icon={<FaTrash />} size="sm" onClick={() => handleDelete(index)} />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default HelpRequests;