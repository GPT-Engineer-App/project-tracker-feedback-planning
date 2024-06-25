import { useState } from "react";
import { Container, Text, VStack, Input, Textarea, Button, Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const DealTracker = () => {
  const [deals, setDeals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDeal = { title, description, status, priority, assignedTo };
    if (editingIndex !== null) {
      const updatedDeals = [...deals];
      updatedDeals[editingIndex] = newDeal;
      setDeals(updatedDeals);
      setEditingIndex(null);
    } else {
      setDeals([...deals, newDeal]);
    }
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
    setAssignedTo("");
  };

  const handleEdit = (index) => {
    const deal = deals[index];
    setTitle(deal.title);
    setDescription(deal.description);
    setStatus(deal.status);
    setPriority(deal.priority);
    setAssignedTo(deal.assignedTo);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedDeals = deals.filter((_, i) => i !== index);
    setDeals(updatedDeals);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Deal Tracker</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <Input placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} required />
            <Input placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} required />
            <Input placeholder="Assigned To" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} required />
            <Button type="submit" colorScheme="teal" width="100%">{editingIndex !== null ? "Update Deal" : "Add Deal"}</Button>
          </VStack>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={10} mb={4}>Deals</Heading>
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
              {deals.map((deal, index) => (
                <Tr key={index}>
                  <Td>{deal.title}</Td>
                  <Td>{deal.description}</Td>
                  <Td>{deal.status}</Td>
                  <Td>{deal.priority}</Td>
                  <Td>{deal.assignedTo}</Td>
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

export default DealTracker;