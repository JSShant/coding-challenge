import FinancialAnalysis from "./components/FinancialAnalysis";
import dataYes from "./data/data.json";

function App() {
  return (
    <>
      <h1 className="d-flex justify-content-center align-items-center">
        Financial Analysis
      </h1>
      <FinancialAnalysis data={dataYes} />
    </>
  );
}

export default App;
