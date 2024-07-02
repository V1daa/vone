import Link from "next/link";

export default function NavBar() {
  return (
    <div className="p-5 fixed top-0 w-screen">
      <div className="flex justify-between">
        <Link href="/">Home la la home de la home</Link>
        <Link href="/col">Colors</Link>
        <Link href="/books">Books Tracker</Link>
      </div>
    </div>
  );
}
