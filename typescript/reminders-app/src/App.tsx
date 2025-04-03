import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./types/reminder";
import reminderService from "./services/reminder";

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
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
