import { useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Reminder 1",
    },
  ]);

  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
