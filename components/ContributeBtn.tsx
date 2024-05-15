import React, { useState } from "react";

const ContributionForm: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");

  const handleToggle = (): void => {
    setShowForm(!showForm);
  };

  const handleAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(`£${amount}`);
    // Add logic to send data to a server or handle it as required
    setShowForm(false); // Optionally close the form after submission
  };

  return (
    <div className="container" style={{ display: "inline" }}>
      <button
        onClick={handleToggle}
        className="mt-4 bg-pi-main text-black font-bold py-2 px-4 rounded transform transition duration-150 ease-in-out hover:scale-105"
      >
        Contribute
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="number"
            placeholder="Enter your contribution amount"
            value={amount}
            onChange={handleAmountChange}
            className="mr-2 px-2 py-1 border rounded"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContributionForm;
