import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <NavLink to="/" exact>
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Home
            </Link>
          </NavLink>
          <NavLink to="/project-tracker">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Project Tracker
            </Link>
          </NavLink>
          <NavLink to="/feedback">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Feedback
            </Link>
          </NavLink>
          <NavLink to="/quarterly-planning">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Quarterly Planning
            </Link>
          </NavLink>
          <NavLink to="/help-requests">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Help Requests
            </Link>
          </NavLink>
          <NavLink to="/bug-tracker">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Bug Tracker
            </Link>
          </NavLink>
          <NavLink to="/backlog">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Backlog
            </Link>
          </NavLink>
          <NavLink to="/deal-tracker">
            <Link px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "teal.700" }} color="white">
              Deal Tracker
            </Link>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;