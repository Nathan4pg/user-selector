import React from "react";
import UserCard from "./UserCard";
import { Raleway } from "next/font/google";
import { DetailedUser } from "@/app/types/user";

const raleway = Raleway({ subsets: ["latin"] });

interface UserDashboardProps {
  users: DetailedUser[];
}

export function UserDashboard({ users }: UserDashboardProps) {
  return (
    <div>
      <h1
        className={`
          text-5xl py-8 px-4 mb-8 text-center 
          ${raleway.className} font-light 
          leading-snug user-dashboard-title
        `}
      >
        User Dashboard
      </h1>
      <div className="flex items-center justify-center flex-wrap mb-8 max-w-7xl mx-auto">
        {users &&
          users.map((user) => <UserCard key={user.email} user={user} />)}
      </div>
    </div>
  );
}
