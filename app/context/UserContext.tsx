import React, { createContext, useContext, useState, ReactNode } from "react";
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

export const UserProvider = ({
  children,
  initialUsers,
}: {
  children: ReactNode;
  initialUsers: DetailedUser[];
}) => {
  const [users, setUsers] = useState<DetailedUser[]>(initialUsers);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
