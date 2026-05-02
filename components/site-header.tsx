import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[#E1EDF9] bg-white px-6 py-3">
      <div className="mx-auto flex max-w-5xl justify-center">
        <Link
          href="/"
          className="inline-flex items-center transition hover:opacity-70"
        >
          <Image
            src="/logo.png"
            alt="ぱやぱや"
            width={146}
            height={38}
            priority
            className="h-[38px] w-auto"
          />
        </Link>
      </div>
    </header>
  );
}
