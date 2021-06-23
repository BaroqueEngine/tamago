import Link from "next/link";

export default function Header() {
  return (
    <h2 className="absolute w-full z-10 bg-gray-700 bg-opacity-90 font-index text-lg text-gray-300 py-4 px-7">
      <Link href="/">
        <a>つむぎスケッチ</a>
      </Link>
    </h2>
  );
}
