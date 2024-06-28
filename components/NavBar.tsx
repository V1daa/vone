import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-5 fixed top-0 w-screen">
      <div className="flex justify-between">
        <Link href="/">Home la la home de la home</Link>
        <Link href="/chess">Chessa</Link>
      </div>
    </div>
  );
}
