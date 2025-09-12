"use client";

import "./styles.css";

const USER_DATA = {
  name: "Ben Adam",
  img: "https://avatars.githubusercontent.com/u/6645985",
  handle: "benadam11",
};
function Avatar() {
  return <img src={``} alt={``} />;
}

function Name() {
  return <h4>name</h4>;
}

function Handle() {
  return <p>@HANDLE</p>;
}

function Badge() {
  return (
    <div style="">
      <Avatar />
      <div>
        <Name />
        <Handle />
        {/* Ajouter le children ici */}
        <button onClick={() => {}}>Add Friend</button>
      </div>
    </div>
  );
}

export default function App() {
  const handleAddFriend = () => alert("Added");

  return (
    <Badge
      user={USER_DATA}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--beige-10)",
        borderRadius: 8,
        backgroundColor: "beige",
        color: "black",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center",
      }}
      addFriend={() => alert("Added!")}
    >
      <p>
        Ben enjoys running, surfing, and binge watching the Twilight series.
      </p>
      <button onClick={handleAddFriend}>Add Friend</button>
    </Badge>
  );
}
