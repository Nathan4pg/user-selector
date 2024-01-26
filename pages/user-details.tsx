import React from "react";
import { UserDetails } from "../components/UserDetails";
import { DetailedUser } from "@/app/types/user";
import { getCache } from "@/app/utils/cache";

export default function UserDetailsPage({
  matchingUser,
}: {
  matchingUser: DetailedUser;
}) {
  return <UserDetails user={matchingUser} />;
}

export async function getServerSideProps(context: { query: any }) {
  const cacheKey = "users";
  let users = await getCache(cacheKey);

  const { query } = context;
  const email = query.email as string;
  const matchingUser: DetailedUser | null = users
    ? users.find((x: DetailedUser) => {
        return x.email === email;
      })
    : null;

  return { props: { matchingUser } };
}
