import React from "react";
import { DetailedUser } from "../app/types/user";
import { UserDashboard } from "../components/UserDashboard";
import { UserProvider } from "@/app/context/UserContext";

export default function UsersDashboard({ users }: { users: DetailedUser[] }) {
  return (
    <UserProvider initialUsers={users}>
      <UserDashboard />
    </UserProvider>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://randomuser.me/api/?results=10&inc=name,location,email,dob,phone,cell,id,picture,nat`
  );
  const data = await res.json();
  const users: DetailedUser[] = data.results ?? [];

  return { props: { users } };
}
