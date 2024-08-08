"use client";
import { usePathname, useRouter } from "next/navigation";

export default function NotFoundPage() {
  const { push, replace } = useRouter();
  const pathname = usePathname();


  return (
    <div>
      <div className="text-purple-600"> All not found, idiot</div>
      <button className="p-2 bg-lime-300" onClick={() => push("/new")}>
        Push
      </button>
      <button className="p-2 bg-red-300" onClick={() => replace("/new")}>
        Replace
      </button>
    </div>
  );
}
