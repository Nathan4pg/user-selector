import { DetailedUser } from "@/app/types/user";
import { UserDetails } from "@/components/UserDetails";
import { Metadata } from "next";
import React from "react";

async function fetchUsers() {
  const res = await fetch(
    "https://randomuser.me/api/?results=10&inc=name,location,email,dob,phone,cell,id,picture,nat"
  ).then((res) => res.json());
  const users: DetailedUser[] = res.results;

  return users;
}

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  return {
    title: id,
    description: `${id} user details page.`,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const users = await fetchUsers();
  const matchingUser = users.find((user) => {
    return user.email === params.id.replace("%40", "@");
  });

  if (!params.id || !matchingUser) {
    return <div>Shit is broke, yo!!!</div>;
  }

  return <UserDetails user={matchingUser} />;
}
