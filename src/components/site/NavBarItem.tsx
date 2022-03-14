import Link from "next/link";

export default function NavBarItem(props) {
  return (
    <span className="px-1 text-sm">
      <Link href={props.link}>{props.name}</Link>
    </span>
  );
}
