import Image from "next/image";
import Link from "next/link";
import { Kiwi_Maru } from "next/font/google";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const kiwiMaru = Kiwi_Maru({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export function SubpageLayout({
  title,
  children,
  background = "bg-gradient-to-b from-[#E1EDF9] to-[#E8F0F7]",
}: {
  title: string;
  children: React.ReactNode;
  background?: string;
}) {
  return (
    <>
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
      <section className="relative flex h-40 items-center justify-center overflow-x-clip bg-gradient-to-br from-[#F0F6FC] via-[#E1EDF9] to-[#C5DAEC] px-6 text-[#3F484E] sm:h-44">
        <span
          className="pointer-events-none absolute -top-24 left-[4%] block h-80 w-80 rounded-full bg-white/35"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -right-10 -bottom-10 block h-[28rem] w-[28rem] rounded-full bg-white/25"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-[20%] -bottom-32 block h-56 w-56 rounded-full bg-white/30"
          aria-hidden
        />
        <h1
          className={`${kiwiMaru.className} relative text-2xl font-light tracking-[0.20em] sm:text-3xl`}
        >
          {title}
        </h1>
      </section>
      <main
        className={`flex-1 ${background} px-6 pt-16 pb-40 text-[#3F484E] sm:pt-24 sm:pb-56`}
      >
        <div className="mx-auto max-w-3xl text-sm leading-[2] tracking-[0.08em] sm:text-base">
          {children}
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
