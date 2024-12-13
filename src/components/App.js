import Button from "./Button";
import FriendsList from "./FriendList";
import Header from "./Header";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSpiltBill";
import { useState } from "react";
import Footer from "./Footer";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [openAddfriend, setOpenAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setOpenAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend)); // le ? est l'opérateur optionel qui permet d'éviter une erreur en cas de curr Null
    setOpenAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <>
      <Header />
      <main className="app">
        <aside className="sidebar">
          <FriendsList
            friends={friends}
            onSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />

          {openAddfriend && <FormAddFriend OnAddFriend={handleAddFriend} />}
          <Button onClick={() => setOpenAddFriend(!openAddfriend)}>
            {openAddfriend ? "Fermer" : "Ajouter un ami"}
          </Button>
        </aside>

        {selectedFriend && (
          <FormSplitBill
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
