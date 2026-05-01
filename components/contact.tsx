import { Kiwi_Maru } from "next/font/google";
import { FadeIn } from "@/components/fade-in";

const kiwiMaru = Kiwi_Maru({
  weight: ["300", "500"],
  subsets: ["latin"],
  display: "swap",
});

export function Contact() {
  return (
    <section className="relative overflow-x-clip bg-gradient-to-br from-[#E1EDF9] via-[#EFF8F8] to-[#D3EBEB] px-6 py-32 text-[#3F484E] sm:py-40">
      <svg
        className="pointer-events-none absolute left-1/2 block w-full -translate-x-1/2"
        style={{ top: -70, height: 70, minWidth: 1440 }}
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="contact-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E1EDF9" />
            <stop offset="100%" stopColor="#EFF8F8" />
          </linearGradient>
        </defs>
        <path
          d="M 0 35 C 240 35, 240 55, 480 55 C 720 55, 720 15, 960 15 C 1200 15, 1200 35, 1440 35 L 1440 70 L 0 70 Z"
          fill="url(#contact-wave)"
        />
      </svg>
      <span
        className="float-fast pointer-events-none absolute top-3 left-[24%] block h-7 w-7 rounded-full bg-white opacity-90"
        aria-hidden
      />
      <span
        className="float-medium pointer-events-none absolute top-1 right-[18%] block h-10 w-10 rounded-full bg-[#A8D3D3] opacity-85"
        aria-hidden
      />

      <span
        className="float-slow pointer-events-none absolute top-44 left-[12%] block h-24 w-24 rounded-full bg-white/60"
        aria-hidden
      />
      <span
        className="float-medium pointer-events-none absolute top-28 right-[10%] block h-16 w-16 rounded-full bg-[#A8D3D3]/60"
        aria-hidden
      />
      <span
        className="float-fast pointer-events-none absolute bottom-20 left-[20%] block h-10 w-10 rounded-full bg-[#B5D5E8]/70"
        aria-hidden
      />
      <span
        className="float-slow pointer-events-none absolute right-[16%] bottom-24 block h-14 w-14 rounded-full bg-white/70"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <FadeIn>
          <p className="text-[11px] tracking-[0.32em] text-[#5E7C8A] uppercase">
            Contact
          </p>
          <h2
            className={`${kiwiMaru.className} mt-3 text-2xl font-light tracking-[0.22em] sm:text-3xl`}
          >
            お問い合わせ
          </h2>
          <p className="mx-auto mt-10 max-w-md text-sm leading-[2.1] tracking-[0.15em] text-[#4F5E6A]">
            お仕事のご依頼はこちらから。
            <br />
            まずはお話を伺うところから始めます。
          </p>
          <a
            href="https://forms.gle/REPLACE_ME"
            target="_blank"
            rel="noopener noreferrer"
            className={`${kiwiMaru.className} group mt-12 inline-flex items-center gap-3 rounded-full bg-[#4A6680] px-12 py-5 text-sm tracking-[0.22em] text-white shadow-[0_10px_28px_rgba(74,102,128,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3D5A75] hover:shadow-[0_16px_36px_rgba(74,102,128,0.42)]`}
          >
            <span>お問い合わせフォーム</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
