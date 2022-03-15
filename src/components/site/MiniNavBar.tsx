import { UserGroupIcon, AnnotationIcon } from "@heroicons/react/solid";

export default function MiniNavBar() {
  return (
    <div className="flex flex-wrap items-center justify-center text-slate-900 border-b w-full text-sm">
      <span className="flex px-3 items-center justify-center m-0 py-0">
        <UserGroupIcon className="h-7 w-7 text-orange-400 flex mx-2 " />
        (17)3269-1200
      </span>
      <span className="flex px-3 items-center justify-center m-0 py-0">
        <UserGroupIcon className="h-7 w-7 text-orange-400 flex mx-2 " />
        (17)99619-3941
      </span>
      <span className="flex px-3 items-center justify-center m-0 py-0">
        <AnnotationIcon className="h-7 w-7 text-orange-400 flex mx-2 " />
        santanaquimica@terra.com.br
      </span>
    </div>
  );
}
