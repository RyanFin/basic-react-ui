import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  // const step = 1;
  // create a state variable

  const [step, setStep] = useState(1); //default value 1
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      // call back function to update based on current value
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      // use setstep() setter to update the step state variable
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      {/* set isOpen to the opposite of what it currently is. ! is the negation operator in standard JS  */}
      {/* call back function to update based on current value */}
      <button className="close" onClick={() => setIsOpen((isOpn) => !isOpn)}>
        &times;
      </button>

      {/* Conditional Rendering here determines if the code within the div is displayed if 'isOpen' is true */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
