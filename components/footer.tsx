import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "トップページ", href: "/" },
  { label: "会社概要", href: "/company" },
  { label: "決算公告", href: "/financial" },
  { label: "プライバシーポリシー", href: "/privacy" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white px-6 py-10 text-center">
      <nav aria-label="フッターナビゲーション">
        <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 text-xs tracking-[0.18em] text-[#5E7C8A]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-5 py-1.5 transition hover:bg-black/5 hover:text-[#3D5A75]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-12 flex justify-center">
        <Image
          src="/logo-mark.png"
          alt=""
          width={98}
          height={100}
          aria-hidden
          className="h-16 w-auto"
        />
      </div>
      <p className="mt-3 text-xs font-bold tracking-[0.18em] text-[#796767]">
        © {year} ぱやぱや
      </p>
    </footer>
  );
}
