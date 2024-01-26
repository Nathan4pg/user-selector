import { DetailedUser } from "@/app/types/user";
import React from "react";

export function UserDetails({ user }: { user: DetailedUser }) {
  if (user === null) {
    return <div>User not found.</div>;
  }

  const fullName = `${user.name.first} ${user.name.last}`;

  return <div>User name is: {fullName}</div>;
}
