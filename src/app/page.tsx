"use client";

import React, { useEffect, useState } from "react";
import { fetchUsers } from "@/utils/api";
import UserCard from "@/components/UserCard";
import { User } from "../interfaces/Users";
import Loader from "@/components/Loader";

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Ошибка загрузки пользователей");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  if (!users.length) return <div>Пользователи не найдены</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default HomePage;
