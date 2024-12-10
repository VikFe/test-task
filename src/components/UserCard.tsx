import * as React from "react";
import Link from "next/link";

// import { Button } from "@/components/ui/button";
import {
  Card as UIDCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "../interfaces/Users";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <UIDCard className="outline-double outline-3 outline-offset-2 outline-blue-500/50 drop-shadow-xl font-mono ...">
      <CardHeader className="border-2 border-y-zinc-300...">
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>Email: {user.email}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <p>
          Address: {user.address.suite}, {user.address.street},{" "}
          {user.address.city}, {user.address.zipcode}
        </p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Company: {user.company.name}</p>
        <p>Catchphrase: {user.company.catchPhrase}</p>
        <p>BS: {user.company.bs}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/user/${user.id}`}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 drop-shadow-xl"
        >
          View Details
        </Link>
      </CardFooter>
    </UIDCard>
  );
};

export default UserCard;
