import { User } from "../interfaces/Users";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch('http://jsonplaceholder.typicode.com/users', {
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Пользователи не найдены (404)');
      } else if (res.status >= 500) {
        throw new Error('Ошибка сервера (500)');
      } else {
        throw new Error('Ошибка загрузки пользователей');
      }
    }

    return res.json();
  } catch (error) {
    console.error('Ошибка при выполнении fetch:', error);
    throw error; // Пробрасываем ошибку дальше для обработки в компонентах
  }
};

export const fetchUserById = async (id: number): Promise<User> => {
  try {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`Пользователь с ID ${id} не найден (404)`);
      } else if (res.status >= 500) {
        throw new Error('Ошибка сервера (500)');
      } else {
        throw new Error('Ошибка загрузки пользователя');
      }
    }
    

    return res.json();
  } catch (error) {
    console.error(`Ошибка при выполнении fetch для пользователя с ID ${id}:`, error);
    throw error; // Пробрасываем ошибку дальше для обработки в компонентах
  }
};