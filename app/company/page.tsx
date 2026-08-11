import type { Metadata } from "next";
import { SubpageLayout } from "@/components/subpage-layout";

export const metadata: Metadata = {
  title: "会社概要 | ぱやぱや",
  description: "ぱやぱやの会社概要",
};

const items: { label: string; value: React.ReactNode }[] = [
  { label: "会社名", value: "ぱやぱや株式会社" },
  { label: "代表者", value: "中山 かおり" },
  { label: "取締役", value: "中山 勝則" },
  { label: "設立", value: "2026年4月" },
  { label: "資本金", value: "100万円" },
  { label: "所在地", value: "神奈川県秦野市" },
  {
    label: "事業内容",
    value: (
      <>
        SES・ソフトウェア開発・技術支援・
        <a
          href="https://hadano-hp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-[#5E7C8A]"
        >
          秦野市のホームページ制作・運営サービス
        </a>
      </>
    ),
  },
];

export default function CompanyPage() {
  return (
    <SubpageLayout title="会社概要" background="bg-white">
      <dl className="divide-y divide-[#CFE0EE]">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-6"
          >
            <dt className="text-xs tracking-[0.24em] text-[#5E7C8A] sm:text-sm">
              {item.label}
            </dt>
            <dd className="text-[#3F484E]">{item.value}</dd>
          </div>
        ))}
      </dl>
    </SubpageLayout>
  );
}
