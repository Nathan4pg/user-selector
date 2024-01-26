import { UserDashboard } from "@/components/UserDashboard";
import { DetailedUser } from "./types/user";
import { Metadata } from "next";

async function fetchUsers() {
  const res = await fetch(
    "https://randomuser.me/api/?results=10&inc=name,location,email,dob,phone,cell,id,picture,nat"
  ).then((res) => res.json());
  const users: DetailedUser[] = res.results;

  if (users) {
    generateStaticParams(users);
  }

  return users;
}

async function generateStaticParams(users: DetailedUser[]) {
  return users.map((user) => ({
    params: {
      id: user.email,
    },
  }));
}

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "A dashboard of users to slect from for more information.",
};

export default async function Page() {
  const users = await fetchUsers();

  return (
    <>
      <UserDashboard users={users} />
    </>
  );
}
