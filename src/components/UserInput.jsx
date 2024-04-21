import React from "react";

function UserInput() {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="">INITIAL INVESTMENT</label>
            <input type="number" />
          </p>
          <p>
            <label htmlFor="">ANNUAL INVESTMENT</label>
            <input type="number" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="">DURATION EXPECTED</label>
            <input type="number" />
          </p>
          <p>
            <label htmlFor="">DUARTION</label>
            <input type="number" />
          </p>
        </div>
      </section>
    </>
  );
}

export default UserInput;
