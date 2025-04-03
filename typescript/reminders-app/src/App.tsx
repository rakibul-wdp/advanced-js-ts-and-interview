import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  return (
    <div className="w-[80%] mx-auto my-5">
      <NewReminder />
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
