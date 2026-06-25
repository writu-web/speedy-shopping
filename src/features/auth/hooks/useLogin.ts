import { useMutation } from "@tanstack/react-query";
import { login } from "../api/authApi";
import { useDispatch } from "react-redux";
import { setToken } from "../authSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      dispatch(setToken(data));
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
  return loginMutation;
};

export default useLogin;
