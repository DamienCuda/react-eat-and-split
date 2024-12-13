import Button from "./Button";

export default function Friend({ friend, onSelectedFriend, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Vous devez {Math.abs(friend.balance)}€ à {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} vous doit {friend.balance}€
        </p>
      )}
      {friend.balance === 0 && <p>Vous et {friend.name} êtes égaux</p>}

      <Button onClick={() => onSelectedFriend(friend)}>
        {isSelected ? "Fermer" : "Choisir"}
      </Button>
    </li>
  );
}
