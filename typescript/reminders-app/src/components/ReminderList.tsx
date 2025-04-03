import Reminder from "../types/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-decimal list-inside">
      {items.map((item) => (
        <div
          key={item.id}
          className="border flex items-center justify-start my-3 rounded"
        >
          <li className="p-2 rounded">{item.title}</li>
          <button
            className="border border-red-500 p-1 rounded-3xl"
            onClick={() => onRemoveReminder(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </ul>
  );
}

export default ReminderList;
