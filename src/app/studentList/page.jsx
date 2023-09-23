import Link from "next/link";

export default function StudentList() {
  const names = ["Arvind", "Anil", "Peter", "Bhaskar", "Antman"];
  return (
    <div style={{ margin: "30px " }}>
      <h1>Student List</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            <Link href={`/studentList/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <Link href={"/"}>back to Home 🔥</Link>
    </div>
  );
}
