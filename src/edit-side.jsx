import { useState } from "react";

function LeftSide() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="left-side">
      <form action="submit">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <p>
          Your input: {firstName} {lastName}
        </p>
      </form>
    </div>
  );
}

export default LeftSide;
