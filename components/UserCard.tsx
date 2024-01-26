import { DetailedUser } from "@/app/types/user";
import React from "react";
import Image from "next/image";

interface UserCardProps {
  user: DetailedUser;
}

export default function UserCard(props: UserCardProps) {
  const { user } = props;
  const fullName = `${user.name.first} ${user.name.last}`;

  return (
    <a
      className={`
        user-card p-5 rounded-xl m-5 flex basis-96 flex-wrap items-center 
        -translate-y-0 hover:-translate-y-0.5 ease-in-out transition duration-200
      `}
      href={`/user-details/${user.email}`}
    >
      <Image
        src={user.picture.thumbnail}
        alt={fullName}
        width={48} // thumbnail is 48x48px
        height={48} // thumbnail is 48x48px
        className="rounded-full h-12 w-12"
      />
      <div className="ml-5"></div>
      <div className="flex flex-col font-light">
        <div className="text-lg mb-2">{fullName}</div>
        <div className="flex">
          <div className="text-xs mr-4">
            <span className="font-bold">Age:</span> {user.dob.age}
          </div>
          <div className="text-xs">
            <span className="font-bold">City:</span> {user.location.city}
          </div>
        </div>
      </div>
    </a>
  );
}
