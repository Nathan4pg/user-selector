import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import { DetailedUser } from "@/app/types/user";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
  initialUsers?: DetailedUser[];
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return <div className={inter.className}>{children}</div>;
};

export default RootLayout;
