import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    age: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        url: input.url,
        age: parseInt(input.age),
        notes: input.notes,
      },
    ]);

    setInput({
      name: "",
      url: "",
      age: "",
      notes: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      ></input>
      <input
        type="text"
        placeholder="url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      ></input>
      <input
        type="number"
        placeholder="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      ></input>
      <textarea
        placeholder="notes"
        className="AddToList-input"
        value={input.notes}
        name="notes"
        onChange={handleChange}
      ></textarea>
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;
