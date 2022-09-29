import { useJsonFetch } from "../hooks/useJsonFetch";

const DataPage = () => {
  const [data] = useJsonFetch("http://localhost:7070/data", { metod: "GET" });

  return (
    <div className="pageWrap data">
      Загрузка данных прошла успешно: {data?.status}
    </div>
  );
};

export default DataPage;
