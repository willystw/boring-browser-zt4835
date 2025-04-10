import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [personalTip, setPersonalTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function handleReset() {
    setBill(0);
    setPersonalTip(0);
    setFriendTip(0);
  }

  const tip = (bill * (Number(personalTip) + Number(friendTip))) / 2 / 100;
  return (
    <div>
      <BillInput onChange={setBill} value={bill}>
        <span>How much is the bill? </span>
      </BillInput>
      <TipSelector val={personalTip} onChange={setPersonalTip}>
        How did you like the service?
      </TipSelector>
      <TipSelector val={friendTip} onChange={setFriendTip}>
        How did your friend like the service?
      </TipSelector>
      <BillDisplay bill={bill} tip={tip} />
      <Reset handleReset={handleReset} />
    </div>
  );
}

function BillInput({ children, value, onChange }) {
  return (
    <div class="bill">
      {children}
      <input
        type="number"
        value={value}
        name="bill"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function TipSelector({ children, onChange, val }) {
  return (
    <div className="tip">
      <span>{children}</span>
      <select
        value={val}
        name="value"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing!! (20%)</option>
      </select>
    </div>
  );
}

function BillDisplay({ bill, tip }) {
  let b = Number(bill);
  return (
    <h2>
      You pay ${b + tip} (${b} + ${tip} tip)
    </h2>
  );
}

function Reset({ handleReset }) {
  return (
    <button type="button" onClick={handleReset}>
      Reset
    </button>
  );
}
