import { useState } from "react";
import { Container, Text, VStack, Input, Textarea, Button, Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Backlog = () => {
  const [backlogItems, setBacklogItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { title, description, status, priority, assignedTo };
    if (editingIndex !== null) {
      const updatedItems = [...backlogItems];
      updatedItems[editingIndex] = newItem;
      setBacklogItems(updatedItems);
      setEditingIndex(null);
    } else {
      setBacklogItems([...backlogItems, newItem]);
    }
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
    setAssignedTo("");
  };

  const handleEdit = (index) => {
    const item = backlogItems[index];
    setTitle(item.title);
    setDescription(item.description);
    setStatus(item.status);
    setPriority(item.priority);
    setAssignedTo(item.assignedTo);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItems = backlogItems.filter((_, i) => i !== index);
    setBacklogItems(updatedItems);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Backlog</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <Input placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
            <Input placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} required />
            <Input placeholder="Assigned To" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />
            <Button type="submit" colorScheme="teal" width="100%">{editingIndex !== null ? "Update Item" : "Add Item"}</Button>
          </VStack>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={10} mb={4}>Backlog Items</Heading>
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
              {backlogItems.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.title}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.status}</Td>
                  <Td>{item.priority}</Td>
                  <Td>{item.assignedTo}</Td>
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

export default Backlog;