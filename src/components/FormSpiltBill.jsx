import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [billAmount, setBillAmount] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const friendShare = billAmount ? billAmount - userExpense : "";
  const [whoPaid, setwhoPaid] = useState("user");

  function handleSubmit(event) {
    event.preventDefault();
    onSplitBill(whoPaid === "user" ? friendShare : -userExpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Partagez l'addition avec {selectedFriend.name}</h2>

      <label htmlFor="bill">💰 Montant de l'addition</label>
      <input
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
        type="text"
        name="bill"
        placeholder="Montant"
      ></input>

      <label htmlFor="yourShare">🙍 Votre part</label>
      <input
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > billAmount
              ? userExpense
              : Number(e.target.value)
          )
        }
        type="text"
        name="yourShare"
      ></input>

      <label htmlFor="friendShare">🧔🏾 La part de {selectedFriend.name}</label>
      <input
        value={friendShare}
        type="text"
        name="friendShare"
        disabled
      ></input>

      <label htmlFor="whoPaid">🤑 Qui a payé ?</label>
      <select
        value={whoPaid}
        onChange={(e) => setwhoPaid(e.target.value)}
        name="whoPaid"
      >
        <option value="user">Vous</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Partager</Button>
    </form>
  );
}
