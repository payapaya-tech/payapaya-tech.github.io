import Image from "next/image";
import { Kiwi_Maru } from "next/font/google";

const kiwiMaru = Kiwi_Maru({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const u = (n: number) => `calc(${n} * var(--hero-u))`;

export function Hero() {
  return (
    <article
      className="hero-scale relative overflow-hidden"
      style={{ height: u(615) }}
    >
      <h1
        className={`${kiwiMaru.className} absolute left-1/2 z-10 font-light whitespace-nowrap text-[#584C4F]`}
        style={{
          top: u(237),
          transform: `translateX(${u(-473)})`,
          fontSize: u(28),
          lineHeight: 2.47,
          letterSpacing: "0.20em",
        }}
      >
        <span>ひとつの輪の中で、さりげ</span>
        <span style={{ marginLeft: u(80) }}>なく寄り添う</span>
      </h1>
      <p
        className="absolute left-1/2 z-10 text-[#584C4F]"
        style={{
          top: u(327),
          transform: `translateX(${u(-469)})`,
          fontSize: u(17),
          lineHeight: 2.47,
          letterSpacing: "0.23em",
        }}
      >
        ひとつひとつの関係を大切な輪として捉え
        <br />
        気配りと柔軟さをもって接しています。
      </p>
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <Image
          src="/hero/bg.png"
          width={1681}
          height={615}
          alt=""
          priority
          style={{ width: u(1681), height: u(615), maxWidth: "none" }}
        />
      </div>
    </article>
  );
}
