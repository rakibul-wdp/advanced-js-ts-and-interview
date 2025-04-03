import ReminderList from "./components/ReminderList";
import Reminder from "./types/reminder";

const reminders: Reminder[] = [
  {
    id: 1,
    title: "Reminder 1",
  },
];

function App() {
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
