import { Container, VStack, Button } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {!session ? (
          <SupabaseAuthUI />
        ) : (
          <>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Login;