import Reminder from "../types/reminder";

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <ul className="list-decimal list-inside ml-16">
      {items.map((item) => (
        <li className="border m-2 p-2 rounded" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
