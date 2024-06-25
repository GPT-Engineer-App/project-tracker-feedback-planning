import { Container, Text, VStack, Box, Heading, SimpleGrid, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Welcome to the Project Management Dashboard</Heading>
        <Text fontSize="lg" textAlign="center">Manage your projects, track feedback, plan quarterly, and more!</Text>
        <SimpleGrid columns={[1, null, 2]} spacing={10} width="100%">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Project Tracker</Heading>
            <Text mt={4}>Keep track of all your projects in one place.</Text>
            <NavLink to="/project-tracker">
              <Link color="teal.500" mt={2} display="block">Go to Project Tracker</Link>
            </NavLink>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Feedback</Heading>
            <Text mt={4}>Collect and analyze feedback from your team.</Text>
            <NavLink to="/feedback">
              <Link color="teal.500" mt={2} display="block">Go to Feedback</Link>
            </NavLink>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Quarterly Planning</Heading>
            <Text mt={4}>Plan your goals and objectives for the quarter.</Text>
            <NavLink to="/quarterly-planning">
              <Link color="teal.500" mt={2} display="block">Go to Quarterly Planning</Link>
            </NavLink>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Help Requests</Heading>
            <Text mt={4}>Manage and track help requests from your team.</Text>
            <NavLink to="/help-requests">
              <Link color="teal.500" mt={2} display="block">Go to Help Requests</Link>
            </NavLink>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Bug Tracker</Heading>
            <Text mt={4}>Track and resolve bugs in your projects.</Text>
            <NavLink to="/bug-tracker">
              <Link color="teal.500" mt={2} display="block">Go to Bug Tracker</Link>
            </NavLink>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Backlog</Heading>
            <Text mt={4}>Manage your project backlog efficiently.</Text>
            <NavLink to="/backlog">
              <Link color="teal.500" mt={2} display="block">Go to Backlog</Link>
            </NavLink>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading fontSize="xl">Deal Tracker</Heading>
            <Text mt={4}>Track and manage your deals effectively.</Text>
            <NavLink to="/deal-tracker">
              <Link color="teal.500" mt={2} display="block">Go to Deal Tracker</Link>
            </NavLink>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;