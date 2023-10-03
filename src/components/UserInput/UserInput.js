import { useState } from "react";
import styles from "./UserInput.module.css";
const UserInput = (props) => {
  const d = "duration";
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    [d]: 10,
  };
  //setting state
  const [userInput, setUserInput] = useState(initialUserInput);

  //form submit
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  //reseting values
  const resetHandler = (e) => {
    setUserInput(initialUserInput);
  };

  //input feild updating
  const inputChangeHandler = (identifier, value) => {
    setUserInput((prev) => ({ ...prev, [identifier]: value }));
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button
          onClick={resetHandler}
          type="reset"
          className={styles["buttonAlt"]}
        >
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};
export default UserInput;
