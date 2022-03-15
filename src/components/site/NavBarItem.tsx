import Link from "next/link";

export default function NavBarItem(props) {
  return (
    <span className="px-2 text-sm font-['Open Sans'] leading-5 hover:text-sky-800 visited:text-sky-500">
      <Link href={props.link}>{props.name}</Link>
    </span>
  );
}
