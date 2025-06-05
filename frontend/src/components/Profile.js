import React from "react";

function Profile() {
  // Placeholder user data
  const user = { name: "Jane Doe", email: "jane@example.com", bookings: ["Skydiving", "Wine Tasting"] };

  return (
    <section>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <h3>Booking History</h3>
      <ul>
        {user.bookings.map((b, idx) => <li key={idx}>{b}</li>)}
      </ul>
    </section>
  );
}

export default Profile;