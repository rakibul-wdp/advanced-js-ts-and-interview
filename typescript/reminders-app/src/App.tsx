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

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="w-[80%] mx-auto my-5">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
