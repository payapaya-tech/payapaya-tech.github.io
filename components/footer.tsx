import { Kiwi_Maru } from "next/font/google";

const kiwiMaru = Kiwi_Maru({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white px-6 py-10 text-center">
      <p
        className={`${kiwiMaru.className} text-xs tracking-[0.28em] text-[#7A8A95]`}
      >
        © {year} payapaya
      </p>
    </footer>
  );
}
