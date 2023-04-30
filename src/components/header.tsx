import Link from "next/link";

const Header = () => {
  return (
    <header className="flex sticky top-0 left-0 gap-6 justify-center py-4 w-full font-semibold items center bg-slate-900 text-slate-100">
      <Link href="/">Home</Link>
      <Link href="/gallery">Gallery</Link>
    </header>
  );
};

export default Header;
