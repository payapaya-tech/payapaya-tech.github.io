import { Kiwi_Maru } from "next/font/google";

const kiwiMaru = Kiwi_Maru({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const ARC_DEPTH = 80;
const ARC_WIDTH = 1440;

export function About() {
  return (
    <section className="relative overflow-x-clip bg-[#E1EDF9] text-[#584C4F]">
      <svg
        className="pointer-events-none absolute left-1/2 block w-full -translate-x-1/2"
        style={{
          top: -ARC_DEPTH,
          height: ARC_DEPTH,
          minWidth: ARC_WIDTH,
        }}
        viewBox={`0 0 ${ARC_WIDTH} ${ARC_DEPTH}`}
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={`M 0 0 Q ${ARC_WIDTH / 2} ${ARC_DEPTH * 2} ${ARC_WIDTH} 0 L ${ARC_WIDTH} ${ARC_DEPTH} L 0 ${ARC_DEPTH} Z`}
          fill="#E1EDF9"
        />
      </svg>
      <div className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className={`${kiwiMaru.className} text-2xl font-light tracking-[0.20em] sm:text-3xl`}
          >
            ぱやぱやについて
          </h2>
          <p className="mt-12 text-sm leading-[2] tracking-[0.23em] sm:text-base">
            夫婦でエンジニアをしています。
            <br />
            プロジェクトに応じた技術支援を通じて、
            <br />
            クライアントのビジネスニーズに応えます。
          </p>
        </div>
      </div>
    </section>
  );
}
