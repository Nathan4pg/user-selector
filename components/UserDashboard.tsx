import React from "react";
import { useUsers } from "../app/context/UserContext"; // Adjust the path as needed
import UserCard from "./UserCard";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export function UserDashboard() {
  const { users } = useUsers();

  return (
    <div>
      <h1
        className={`text-5xl py-8 px-4 mb-8 text-center ${raleway.className} font-light leading-snug user-dashboard-title`}
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
