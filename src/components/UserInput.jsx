import React from "react";

function UserInput({ sendDataUtoA, userData }) {
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
                sendDataUtoA("initialInvestment", e.target.value)
              }
            />
          </p>
          <p>
            <label htmlFor="">ANNUAL INVESTMENT</label>
            <input
              type="number"
              required
              value={userData.annualInvestment}
              onChange={(e) => sendDataUtoA("annualInvestment", e.target.value)}
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
              onChange={(e) => sendDataUtoA("expectedReturn", e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="">DUARTION</label>
            <input
              type="number"
              required
              value={userData.duration}
              onChange={(e) => sendDataUtoA("duration", e.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}

export default UserInput;
