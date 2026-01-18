import { useState } from "react";

function LeftSide() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
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
          <br />
          <input
            type="phone"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </form>
      </div>
      <div className="display-side">
        <p>
          {firstName} {lastName} <br />
          {phoneNumber && `📱${phoneNumber}`} <br />
          {email && `📧 ${email}`} <br />
          {location && ` 📍 ${location}`}
        </p>
      </div>
    </>
  );
}

export default LeftSide;
