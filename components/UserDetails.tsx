import { DetailedUser } from "@/app/types/user";
import { formatDate, formatPhoneNumber } from "@/app/utils/formatter";
import Image from "next/image";
import React from "react";

export async function UserDetails({ user }: { user: DetailedUser }) {
  const fullName = user
    ? `${user.name.first} ${user.name.last}`
    : "Unkown user...";
  const addressLine1 = `${user.location.street.number} ${user.location.street.name}`;
  const addressLine2 = `${user.location.city}, ${user.location.state} ${user.location.postcode}`;
  const prettyPhoneNumber = user.phone.includes("(")
    ? user.phone
    : formatPhoneNumber(user.phone);

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen m-2">
      <div
        className={`user-card hover: p-8 rounded-xl m-auto flex flex-wrap hover:bg-inherit flex-col sm:flex-row`}
      >
        <div className="sm:border-r sm:border-white/20 sm:mr-8 ">
          <div className="mr-8 sm:mb-0 mb-8">
            <Image
              alt={fullName}
              src={user.picture.large}
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <div className="font-thin text-xs">Full Name:</div>
            <div className="text-lg">{fullName}</div>
          </div>
          <div className="mb-4">
            <div className="font-thin text-xs">Age:</div>
            <div className="text-lg">{user.dob.age}</div>
          </div>
          <div className="mb-4">
            <div className="font-thin text-xs">Address:</div>
            <div className="text-lg">{addressLine1}</div>
            <div className="text-lg">{addressLine2}</div>
          </div>
          <div className="mb-4">
            <div className="font-thin text-xs">Email:</div>
            <div className="text-lg">{user.email}</div>
          </div>
          <div className="mb-4">
            <div className="font-thin text-xs">DOB:</div>
            <div className="text-lg">{formatDate(user.dob.date)}</div>
          </div>
          <div>
            <div className="font-thin text-xs">Phone:</div>
            <div className="text-lg">{prettyPhoneNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
