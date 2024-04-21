import React, { useState } from "react";

function UserInput() {
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
        [identifier]: newValue,
      };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="">INITIAL INVESTMENT</label>
            <input
              type="number"
              required
              value={userData.initialInvestment}
              onChange={(e) =>
                handleChange("initialInvestment", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="">ANNUAL INVESTMENT</label>
            <input
              type="number"
              required
              value={userData.annualInvestment}
              onChange={(e) => handleChange("annualInvestment", e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor=""> EXPECTED RETURN</label>
            <input
              type="number"
              required
              value={userData.expectedReturn}
              onChange={(e) => handleChange("expectedReturn", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="">DUARTION</label>
            <input
              type="number"
              required
              value={userData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}

export default UserInput;
