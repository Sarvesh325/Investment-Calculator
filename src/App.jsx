import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(identifier, newValue) {
    setUserData((prevUserInput) => {
      return {
        ...prevUserInput,
        [identifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput sendDataUtoA={handleChange} userData={userData} />
      <Result input={userData} />
    </>
  );
}

export default App;
