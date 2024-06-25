import { Container, Table, Thead, Tbody, Tr, Th, Td, VStack, Text } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Text fontSize="3xl" fontWeight="bold">Projects</Text>

        {/* Project Table */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Project Name</Th>
              <Th>Description</Th>
              <Th>Start Date</Th>
              <Th>End Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Project A</Td>
              <Td>Project A Description</Td>
              <Td>2023-01-01</Td>
              <Td>2023-12-31</Td>
              <Td>Active</Td>
            </Tr>
            {/* Add more project rows as needed */}
          </Tbody>
        </Table>

        {/* Task Table */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Task Name</Th>
              <Th>Description</Th>
              <Th>Assigned To</Th>
              <Th>Status</Th>
              <Th>Priority</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Task 1</Td>
              <Td>Task 1 Description</Td>
              <Td>John Doe</Td>
              <Td>In Progress</Td>
              <Td>High</Td>
            </Tr>
            {/* Add more task rows as needed */}
          </Tbody>
        </Table>

        {/* TeamMember Table */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Role</Th>
              <Th>Contact</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>John Doe</Td>
              <Td>Developer</Td>
              <Td>john.doe@example.com</Td>
            </Tr>
            {/* Add more team member rows as needed */}
          </Tbody>
        </Table>

        {/* Milestone Table */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Milestone</Th>
              <Th>Description</Th>
              <Th>Due Date</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Milestone 1</Td>
              <Td>Milestone 1 Description</Td>
              <Td>2023-06-30</Td>
              <Td>Completed</Td>
            </Tr>
            {/* Add more milestone rows as needed */}
          </Tbody>
        </Table>

        {/* Resource Table */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Resource Type</Th>
              <Th>Quantity</Th>
              <Th>Allocation Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Resource 1</Td>
              <Td>10</Td>
              <Td>2023-01-15</Td>
            </Tr>
            {/* Add more resource rows as needed */}
          </Tbody>
        </Table>

        {/* Communication Table */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sender</Th>
              <Th>Receiver</Th>
              <Th>Message</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>John Doe</Td>
              <Td>Jane Smith</Td>
              <Td>Project update message</Td>
              <Td>2023-02-01</Td>
            </Tr>
            {/* Add more communication rows as needed */}
          </Tbody>
        </Table>
      </VStack>
    </Container>
  );
};

export default Projects;