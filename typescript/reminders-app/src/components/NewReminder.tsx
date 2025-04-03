import { JSX, useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const submitFrom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };

  return (
    <form className="w-full" onSubmit={submitFrom}>
      <label htmlFor="title"></label>
      <input
        className="border w-full rounded p-2"
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
