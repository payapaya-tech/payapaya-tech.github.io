import { Kiwi_Maru } from "next/font/google";
import { FadeIn } from "@/components/fade-in";

const kiwiMaru = Kiwi_Maru({
  weight: ["300", "500"],
  subsets: ["latin"],
  display: "swap",
});

type Step = {
  num: string;
  title: string;
  description: string;
  emoji: string;
};

const steps: Step[] = [
  {
    num: "01",
    title: "お話を聞く",
    description: "まずは気軽にご相談を。\n背景や課題から伺います。",
    emoji: "👂",
  },
  {
    num: "02",
    title: "ご提案",
    description: "適した進め方や規模感を\n一緒に組み立てます。",
    emoji: "✏️",
  },
  {
    num: "03",
    title: "開発・実装",
    description: "こまめに共有しながら、\n少しずつ形にしていきます。",
    emoji: "🛠",
  },
  {
    num: "04",
    title: "リリースと、その先へ",
    description: "公開後の改善や運用も\n伴走します。",
    emoji: "🌿",
  },
];

export function Process() {
  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-[#E8F0F7] to-[#EFF3F5] px-6 pt-20 pb-48 text-[#3F484E] sm:pt-24 sm:pb-56">
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.32em] text-[#7E96A1] uppercase">
              Process
            </p>
            <h2
              className={`${kiwiMaru.className} mt-3 text-2xl font-light tracking-[0.22em] sm:text-3xl`}
            >
              進め方
            </h2>
          </div>
        </FadeIn>

        <ol className="relative mt-20 grid gap-14 sm:grid-cols-4 sm:gap-6">
          <span
            className="pointer-events-none absolute top-9 right-[12%] left-[12%] hidden border-t-2 border-dashed border-[#B5D5E8] sm:block"
            aria-hidden
          />
          {steps.map((step, i) => (
            <FadeIn key={step.num} as="li" delay={i * 130}>
              <div className="relative text-center">
                <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#A8D3D3] bg-white shadow-[0_8px_20px_rgba(88,103,120,0.10)]">
                  <span
                    className={`${kiwiMaru.className} text-base font-medium tracking-[0.10em] text-[#4A6680]`}
                  >
                    {step.num}
                  </span>
                  <span
                    className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base shadow-[0_4px_10px_rgba(88,103,120,0.14)]"
                    aria-hidden
                  >
                    {step.emoji}
                  </span>
                </div>
                <h3
                  className={`${kiwiMaru.className} mt-6 text-base tracking-[0.18em]`}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[2] tracking-[0.10em] whitespace-pre-line text-[#5A6670]">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
