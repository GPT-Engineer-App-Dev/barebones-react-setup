import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const navigate = useNavigate();
  const { session, logout } = useSupabaseAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">Hello, World!</Text>
        <Text>Welcome to your new React app.</Text>
      {!session ? (
          <Button onClick={() => navigate("/login")}>Login</Button>
        ) : (
          <Button onClick={handleLogout}>Logout</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;