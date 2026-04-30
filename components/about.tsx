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
    <section className="relative overflow-x-clip bg-gradient-to-b from-[#E1EDF9] to-[#E8F0F7] text-[#584C4F]">
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
      <div className="px-6 pb-12 pt-40 sm:pb-16 sm:pt-56">
        <div className="relative mx-auto max-w-3xl">
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 block h-[360px] w-[800px] -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 800 360"
            aria-hidden
          >
            <g fill="#FFFFFF">
              <rect x="120" y="100" width="560" height="160" />
              <circle cx="165" cy="180" r="130" />
              <circle cx="280" cy="110" r="110" />
              <circle cx="465" cy="135" r="125" />
              <circle cx="615" cy="95" r="95" />
              <circle cx="655" cy="205" r="120" />
              <circle cx="255" cy="210" r="145" />
              <circle cx="480" cy="220" r="140" />
            </g>
          </svg>

          <div className="relative px-2 pb-6 pt-8 text-center sm:px-8 sm:pb-10 sm:pt-14">
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
      </div>
    </section>
  );
}
