import DataPage from "./components/DataPage";
import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoadingPage />
      <DataPage />
      <ErrorPage />
    </div>
  );
}

export default App;
