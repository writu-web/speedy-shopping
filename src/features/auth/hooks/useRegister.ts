import { useMutation } from "@tanstack/react-query";
import { register } from "../api/authApi";

const useRegister = () => {
  const RegisterMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log("Registration successful:", data);
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  }); // Implement registration logic here
  return RegisterMutation;
};
export default useRegister;
