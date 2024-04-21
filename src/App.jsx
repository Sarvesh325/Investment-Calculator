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

  const isInputValid = userData.duration >= 1;

  return (
    <>
      <Header />
      <UserInput sendDataUtoA={handleChange} userData={userData} />
      {!isInputValid && <p className="center">Please Select Valid Duration</p>}
      {isInputValid && <Result input={userData} />}
    </>
  );
}

export default App;
