import { useJsonFetch } from "../hooks/useJsonFetch";

const ErrorPage = () => {
  const [error] = useJsonFetch("http://localhost:7070/error", { metod: "GET" });

  return <div className="pageWrap error">Ошибка: {error?.status}</div>;
};

export default ErrorPage;
