import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import { UserProvider } from "@/app/context/UserContext";
import { DetailedUser } from "@/app/types/user"; // Adjust the path as needed

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
  initialUsers?: DetailedUser[]; // Optional prop for initial user data
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <UserProvider>
      <div className={inter.className}>{children}</div>
    </UserProvider>
  );
};

export default RootLayout;
