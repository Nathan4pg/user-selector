import { useUsers } from "@/app/context/UserContext";
import { DetailedUser } from "@/app/types/user";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export function UserDetails() {
  const { users } = useUsers();
  const [user, setUser] = useState<DetailedUser>();
  const router = useRouter();
  const { email } = router.query;
  const fullName = `${user?.name.first} ${user?.name.last}`;

  useEffect(() => {
    if (email && users) {
      const foundUser = users.find((u) => u.email === email);
      console.log("found user: ", foundUser);
      setUser(foundUser);
    }
  }, [email, users]);

  return <div>User name is: {fullName}</div>;
}
