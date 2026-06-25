import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/userApi";

const useUsers = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  return { data, isPending, error };
};
export default useUsers;
