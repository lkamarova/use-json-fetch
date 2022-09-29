import { useJsonFetch } from "../hooks/useJsonFetch";

const LoadingPage = () => {
  const [loading] = useJsonFetch("http://localhost:7070/loading", {
    metod: "GET",
  });

  return <div className="pageWrap loading">Загрузка: {loading?.status}</div>;
};

export default LoadingPage;
