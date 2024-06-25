import { useState } from "react";
import { Container, Text, VStack, Input, Textarea, Button, Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const BugTracker = () => {
  const [bugs, setBugs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBug = { title, description, status, priority, assignedTo };
    if (editingIndex !== null) {
      const updatedBugs = [...bugs];
      updatedBugs[editingIndex] = newBug;
      setBugs(updatedBugs);
      setEditingIndex(null);
    } else {
      setBugs([...bugs, newBug]);
    }
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
    setAssignedTo("");
  };

  const handleEdit = (index) => {
    const bug = bugs[index];
    setTitle(bug.title);
    setDescription(bug.description);
    setStatus(bug.status);
    setPriority(bug.priority);
    setAssignedTo(bug.assignedTo);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedBugs = bugs.filter((_, i) => i !== index);
    setBugs(updatedBugs);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Bug Tracker</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <Input placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
            <Input placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} required />
            <Input placeholder="Assigned To" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />
            <Button type="submit" colorScheme="teal" width="100%">{editingIndex !== null ? "Update Bug" : "Add Bug"}</Button>
          </VStack>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={10} mb={4}>Bug Reports</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Description</Th>
                <Th>Status</Th>
                <Th>Priority</Th>
                <Th>Assigned To</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {bugs.map((bug, index) => (
                <Tr key={index}>
                  <Td>{bug.title}</Td>
                  <Td>{bug.description}</Td>
                  <Td>{bug.status}</Td>
                  <Td>{bug.priority}</Td>
                  <Td>{bug.assignedTo}</Td>
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

export default BugTracker;