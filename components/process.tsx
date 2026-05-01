import Image from "next/image";
import { Kiwi_Maru } from "next/font/google";
import {
  Laptop,
  HouseLine,
  Sparkle,
  Lightning,
  type Icon,
} from "@phosphor-icons/react/dist/ssr";
import { FadeIn } from "@/components/fade-in";

const kiwiMaru = Kiwi_Maru({
  weight: ["300", "500"],
  subsets: ["latin"],
  display: "swap",
});

type Capability = {
  icon: Icon;
  title: string;
  description: string;
};

const capabilities: Capability[] = [
  {
    icon: Laptop,
    title: "SESエンジニアリング",
    description: "常駐 / 準委任での開発参画。\nフロント・バックエンド問わず対応します。",
  },
  {
    icon: HouseLine,
    title: "フルリモート",
    description: "全国どこからでもご一緒できます。\n遠方でも変わらない品質で。",
  },
  {
    icon: Sparkle,
    title: "主体的に行動",
    description: "指示待ちではなく、自ら課題を\n見つけて動きにいきます。",
  },
  {
    icon: Lightning,
    title: "即戦力として参画",
    description: "立ち上がりが早く、初日から\n開発を前に進める動きをします。",
  },
];

export function Process() {
  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-[#E8F0F7] to-[#EFF3F5] px-6 pt-20 pb-48 text-[#3F484E] sm:pt-24 sm:pb-56">
      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.32em] text-[#7E96A1] uppercase">
              What We Do
            </p>
            <h2
              className={`${kiwiMaru.className} mt-3 text-2xl font-light tracking-[0.22em] sm:text-3xl`}
            >
              出来ること
            </h2>
          </div>
        </FadeIn>

        <div className="relative mt-20">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[168px] sm:block"
            aria-hidden
          >
            <div className="absolute top-1/2 left-[10%] -mt-2.5 -ml-[18px] w-[27px] -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/process/icon.png"
                alt=""
                width={420}
                height={315}
                className="block h-auto w-full"
              />
            </div>
            <svg
              className="absolute inset-0 block h-full w-full"
              viewBox="0 0 1000 168"
              preserveAspectRatio="none"
            >
              <path
                d="M 100 84 C 170 84 170 36 240 36 C 350 36 350 132 460 132 C 570 132 570 36 680 36 C 790 36 790 132 900 132"
                stroke="#BCD4E5"
                strokeWidth="2"
                strokeDasharray="3 9"
                strokeLinecap="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <ul className="relative grid grid-cols-1 gap-14 sm:grid-cols-4 sm:gap-6 sm:pl-[14%]">
            {capabilities.map((cap, i) => (
              <FadeIn
                key={cap.title}
                as="li"
                delay={i * 130}
                className={i % 2 === 1 ? "sm:mt-24" : ""}
              >
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-[3px] border-[#BCD4E5] bg-white shadow-[0_8px_20px_rgba(88,103,120,0.10)]">
                    <cap.icon size={32} weight="duotone" color="#4A6680" />
                  </div>
                  <h3
                    className={`${kiwiMaru.className} mt-6 text-base tracking-[0.18em]`}
                  >
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[2] tracking-[0.10em] whitespace-pre-line text-[#5A6670]">
                    {cap.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
