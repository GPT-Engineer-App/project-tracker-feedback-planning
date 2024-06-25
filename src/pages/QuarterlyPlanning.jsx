import { useState } from "react";
import { Container, Text, VStack, Input, Textarea, Button, Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Flex, IconButton } from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

const QuarterlyPlanning = () => {
  const [plans, setPlans] = useState([]);
  const [goal, setGoal] = useState("");
  const [objective, setObjective] = useState("");
  const [keyResult, setKeyResult] = useState("");
  const [timeline, setTimeline] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = { goal, objective, keyResult, timeline };
    if (editingIndex !== null) {
      const updatedPlans = [...plans];
      updatedPlans[editingIndex] = newPlan;
      setPlans(updatedPlans);
      setEditingIndex(null);
    } else {
      setPlans([...plans, newPlan]);
    }
    setGoal("");
    setObjective("");
    setKeyResult("");
    setTimeline("");
  };

  const handleEdit = (index) => {
    const plan = plans[index];
    setGoal(plan.goal);
    setObjective(plan.objective);
    setKeyResult(plan.keyResult);
    setTimeline(plan.timeline);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPlans = plans.filter((_, i) => i !== index);
    setPlans(updatedPlans);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Quarterly Planning</Heading>
        <Box as="form" onSubmit={handleSubmit} width="100%">
          <VStack spacing={4}>
            <Input placeholder="Goal" value={goal} onChange={(e) => setGoal(e.target.value)} required />
            <Input placeholder="Objective" value={objective} onChange={(e) => setObjective(e.target.value)} required />
            <Input placeholder="Key Result" value={keyResult} onChange={(e) => setKeyResult(e.target.value)} required />
            <Input placeholder="Timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} required />
            <Button type="submit" colorScheme="teal" width="100%">{editingIndex !== null ? "Update Plan" : "Add Plan"}</Button>
          </VStack>
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={10} mb={4}>Quarterly Plans</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Goal</Th>
                <Th>Objective</Th>
                <Th>Key Result</Th>
                <Th>Timeline</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {plans.map((plan, index) => (
                <Tr key={index}>
                  <Td>{plan.goal}</Td>
                  <Td>{plan.objective}</Td>
                  <Td>{plan.keyResult}</Td>
                  <Td>{plan.timeline}</Td>
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

export default QuarterlyPlanning;