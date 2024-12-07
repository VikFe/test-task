import { useRouter } from "next/router";
import { fetchUserById } from "@/utils/api";
import { User } from "../../interfaces/Users";
// import UserCard from "@/components/UserCard";
import Loader from "@/components/Loader";

interface UserPageProps {
  user: User | null;
  error?: string;
}

// Функция получения пользователя с API
export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  let user: User | null = null;
  let error = null;

  try {
    user = await fetchUserById(Number(params.id));
  } catch (err) {
    console.error(err);
    error = "Ошибка загрузки пользователя";
  }

  return {
    props: {
      user,
      error,
    },
  };
};

// Компонент страницы пользователя
const UserPage = ({ user, error }: UserPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <Loader />; // Показать загрузку, если данные еще не получены
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>UserName: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.street}, {user.address.city},{" "}
        {user.address.zipcode}
      </p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
};

export default UserPage;
