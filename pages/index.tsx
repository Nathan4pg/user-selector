import React from "react";
import { UserDashboard } from "../components/UserDashboard";
import { DetailedUser } from "@/app/types/user";
import { setCache, getCache } from "@/app/utils/cache";

export default function Home({ users }: { users: DetailedUser[] }) {
  return <UserDashboard users={users} />;
}

export async function getServerSideProps() {
  const cacheKey = "users";
  let users = getCache(cacheKey);

  if (!users || users.length === 0) {
    // Fetch data if not in cache
    const res = await fetch(
      "https://randomuser.me/api/?results=10&inc=name,location,email,dob,phone,cell,id,picture,nat"
    );
    const data = await res.json();
    const returnedUsers = data.results;

    setCache(cacheKey, returnedUsers);
    users = getCache(cacheKey);
  }

  return { props: { users: users || [] } };
}
