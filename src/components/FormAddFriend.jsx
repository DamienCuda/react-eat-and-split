import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ OnAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?u=${id}`,
      balance: 0,
      id,
    };
    OnAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");

    console.log(newFriend);
  }
  return (
    <form className="form-add-friend" on onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="friend-name">👫 Nom</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="friend-name"
      />

      <label htmlFor="avatar">🥸 Avatar URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        name="avatar"
      ></input>
      <Button>Ajouter</Button>
    </form>
  );
}
