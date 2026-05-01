import Image from "next/image";
import { Kiwi_Maru } from "next/font/google";
import { FadeIn } from "@/components/fade-in";

const kiwiMaru = Kiwi_Maru({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const BG = "#FFFFFF";

type Member = {
  name: string;
  yomi: string;
  skills: string[];
  bio: string;
  avatar: string;
};

const members: Member[] = [
  {
    name: "中山 かおり",
    yomi: "Kaori Nakayama",
    skills: ["AWS"],
    bio: "ダミーテキスト。ダミーテキスト、ダミーテキスト。ダミーテキスト・ダミーテキスト、ダミーテキスト。",
    avatar: "/members/kaori.svg",
  },
  {
    name: "中山 勝則",
    yomi: "Katsunori Nakayama",
    skills: ["フロントエンド", "EM"],
    bio: "開発者歴 15 年以上。BtoB / BtoC を問わずフロントエンドを軸に、EM などのマネジメントも担当。規模やフェーズの異なるチームに関わってきました。技術と組織の両面から、働きやすい環境づくりを大切にしています。",
    avatar: "/members/katsunori.svg",
  },
];

export function Members() {
  return (
    <section
      className="relative overflow-x-clip px-6 pt-24 pb-32 text-[#2F4046] sm:pt-32 sm:pb-40"
      style={{ backgroundColor: BG }}
    >
      <svg
        className="pointer-events-none absolute left-1/2 block w-full -translate-x-1/2"
        style={{ top: -70, height: 70, minWidth: 1440 }}
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M 0 35 C 240 35, 240 55, 480 55 C 720 55, 720 15, 960 15 C 1200 15, 1200 35, 1440 35 L 1440 70 L 0 70 Z"
          fill={BG}
        />
      </svg>
      <div className="relative mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.32em] text-[#3D6A70] uppercase">
              Members
            </p>
            <h2
              className={`${kiwiMaru.className} mt-3 text-2xl font-light tracking-[0.22em] sm:text-3xl`}
            >
              メンバー
            </h2>
            <p
              className={`${kiwiMaru.className} mt-6 inline-block rounded-full bg-[#EFF3F5] px-5 py-1.5 text-xs tracking-[0.22em] text-[#3D6A70] shadow-[0_4px_12px_rgba(46,86,90,0.08)]`}
            >
              夫婦ふたりで運営しています
            </p>
          </div>
        </FadeIn>

        <ul className="mx-auto mt-20 max-w-4xl space-y-20 sm:mt-28 sm:space-y-28">
          {members.map((m, i) => (
            <FadeIn key={m.name} as="li" delay={i * 200}>
              <div
                className={`flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-16 ${
                  i === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <article className="shrink-0 rounded-full bg-white p-3 shadow-[0_18px_36px_rgba(46,86,90,0.14)]">
                  <div className="overflow-hidden rounded-full bg-[#EFF8F8]">
                    <Image
                      src={m.avatar}
                      alt=""
                      width={180}
                      height={180}
                      className="block aspect-square w-[140px] sm:w-[180px]"
                    />
                  </div>
                </article>
                <div className="w-full max-w-md text-center sm:pt-6 sm:text-left">
                  <p className="text-[10px] tracking-[0.30em] text-[#3D6A70]/70 uppercase">
                    {m.yomi}
                  </p>
                  <h3
                    className={`${kiwiMaru.className} mt-1 text-xl font-light tracking-[0.18em]`}
                  >
                    {m.name}
                  </h3>
                  <ul className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {m.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-[#2F4046]/20 bg-white px-4 py-1.5 text-xs tracking-[0.10em] text-[#2F4046]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm leading-[2] tracking-[0.12em] text-[#46606A]">
                    {m.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
