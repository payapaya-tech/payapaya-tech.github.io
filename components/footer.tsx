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
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs tracking-[0.18em] text-[#5E7C8A]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition hover:text-[#3D5A75]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="mt-6 text-xs tracking-[0.18em] text-[#7A8A95]">
        © {year} ぱやぱや
      </p>
    </footer>
  );
}
