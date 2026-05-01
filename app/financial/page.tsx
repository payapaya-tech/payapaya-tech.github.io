import type { Metadata } from "next";
import { SubpageLayout } from "@/components/subpage-layout";

export const metadata: Metadata = {
  title: "決算公告 | ぱやぱや",
  description: "ぱやぱやの決算公告",
};

export default function FinancialPage() {
  return (
    <SubpageLayout title="決算公告" background="bg-white">
      <p>当社の決算公告は、本ページにて掲載いたします。</p>
      <p className="mt-6 text-[#5E7C8A]">1期目につき掲載する公告はありません。</p>
    </SubpageLayout>
  );
}
