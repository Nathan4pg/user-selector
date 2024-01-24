import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { DetailedUser } from "../types/user";

interface UserContextType {
  users: DetailedUser[];
  setUsers: (users: DetailedUser[]) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<DetailedUser[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    } else {
      fetchUsers();
    }
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch(
        "https://randomuser.me/api/?results=10&inc=name,location,email,dob,phone,cell,id,picture,nat"
      );
      const data = await res.json();
      setUsers(data.results);
      localStorage.setItem("users", JSON.stringify(data.results));
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
