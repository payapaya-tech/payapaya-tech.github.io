"use client";

import Image from "next/image";
import { Kiwi_Maru } from "next/font/google";
import {
  Laptop,
  HouseLine,
  Sparkle,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
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
    description: "SES形式での開発参画にお応えします。",
  },
  {
    icon: HouseLine,
    title: "フルリモート",
    description: "全国どこでもご一緒できます。遠方でも変わらない品質で。",
  },
  {
    icon: Sparkle,
    title: "主体的に行動",
    description: "指示待ちではなく、自ら課題を見つけて動きにいきます。",
  },
  {
    icon: Lightning,
    title: "即戦力として参画",
    description: "立ち上がりが早く、初日から開発を前に進める動きをします。",
  },
];

const PATH_D =
  "M 100 84 C 170 84 170 36 240 36 C 350 36 350 132 460 132 C 570 132 570 36 680 36 C 790 36 790 132 900 132";
// 上記パスの始終点・制御点を逆順にしたもの。mask を「終点 → 始点」方向に描画するために使う。
const REVERSED_PATH_D =
  "M 900 132 C 790 132 790 36 680 36 C 570 36 570 132 460 132 C 350 132 350 36 240 36 C 170 36 170 84 100 84";
const VIEWBOX_W = 1000;
const VIEWBOX_H = 168;
const FLY_DURATION = 3600;

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null);
  const birdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const path = pathRef.current;
    const maskPath = maskPathRef.current;
    const bird = birdRef.current;
    if (!track || !path || !maskPath || !bird) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const setBirdAt = (progress: number) => {
      const total = path.getTotalLength();
      // progress=0 → 終点(右), progress=1 → 始点(左)
      const dist = (1 - progress) * total;
      const pt = path.getPointAtLength(dist);
      bird.style.left = `${(pt.x / VIEWBOX_W) * 100}%`;
      bird.style.top = `${pt.y}px`;
    };

    if (reduce) {
      maskPath.style.strokeDashoffset = "0";
      setBirdAt(1);
      bird.style.opacity = "1";
      return;
    }

    setBirdAt(0);
    maskPath.style.strokeDashoffset = "100";

    let rafId = 0;
    let started = false;

    const ease = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const start = () => {
      if (started) return;
      started = true;
      bird.style.opacity = "1";
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - t0) / FLY_DURATION, 1);
        const e = ease(t);
        setBirdAt(e);
        maskPath.style.strokeDashoffset = String(100 * (1 - e));
        if (t < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(track);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

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
            ref={trackRef}
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[168px] sm:block"
            aria-hidden
          >
            <div
              ref={birdRef}
              className="absolute -mt-2.5 -ml-[18px] w-[27px] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500"
              style={{ left: "90%", top: `${VIEWBOX_H * 0.79}px` }}
            >
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
              viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
              preserveAspectRatio="none"
            >
              <defs>
                <mask
                  id="process-trail-mask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width={VIEWBOX_W}
                  height={VIEWBOX_H}
                >
                  <rect width={VIEWBOX_W} height={VIEWBOX_H} fill="black" />
                  <path
                    ref={maskPathRef}
                    d={REVERSED_PATH_D}
                    stroke="white"
                    strokeWidth="30"
                    strokeLinecap="round"
                    fill="none"
                    pathLength={100}
                    strokeDasharray="100 100"
                    strokeDashoffset={100}
                  />
                </mask>
              </defs>
              <path
                ref={pathRef}
                d={PATH_D}
                stroke="#BCD4E5"
                strokeWidth="2"
                strokeDasharray="3 9"
                strokeLinecap="round"
                fill="none"
                mask="url(#process-trail-mask)"
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
                  <p className="mt-3 text-sm leading-[2] tracking-[0.10em] text-[#5A6670]">
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
