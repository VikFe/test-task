import { fetchUsers } from "@/utils/api";
import UserCard from "@/components/UserCard";
import { User } from "../interfaces/Users";
import Loader from "@/components/Loader";

const HomePage = async () => {
  let users: User[] | null = null;
  let error = null;

  try {
    users = await fetchUsers();
  } catch (err) {
    console.error(err);
    error = "Ошибка загрузки пользователей";
  }

  if (error) return <div>{error}</div>;
  if (!users) return <Loader />;

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
