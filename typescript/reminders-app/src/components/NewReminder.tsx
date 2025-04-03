import { JSX, useState } from "react";

function NewReminder(): JSX.Element {
  const [title, setTitle] = useState("");

  return (
    <form className="w-full">
      <label htmlFor="title"></label>
      <input
        className="border w-full rounded py-2"
        type="text"
        name=""
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-3xl my-3"
      >
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
