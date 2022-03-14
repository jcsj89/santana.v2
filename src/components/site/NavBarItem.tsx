import Link from "next/link";

export default function NavBarItem(props) {
  return (
    <span className="px-2 text-sm font-['Open Sans']">
      <Link href={props.link}>{props.name}</Link>
    </span>
  );
}
