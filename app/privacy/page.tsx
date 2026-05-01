import type { Metadata } from "next";
import { SubpageLayout } from "@/components/subpage-layout";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ぱやぱや",
  description:
    "ぱやぱやのプライバシーポリシー。Google Analytics および Google フォームの利用について。",
};

const sections: { heading: string; body: React.ReactNode }[] = [
  {
    heading: "1. アクセス解析ツール（Google Analytics）について",
    body: (
      <>
        <p>
          本サイトでは、サイトの利用状況を把握するために Google LLC が提供する
          Google Analytics を利用しています。Google Analytics は Cookie
          を用いてアクセス情報を収集しますが、これらの情報は匿名で収集されており、個人を特定するものではありません。
        </p>
        <p className="mt-4">
          Google Analytics の利用規約およびプライバシーポリシーの詳細は、Google
          のサイトをご確認ください。ブラウザの設定により Cookie
          を無効にすることで、データの収集を拒否することができます。
        </p>
      </>
    ),
  },
  {
    heading: "2. お問い合わせフォーム（Google フォーム）について",
    body: (
      <>
        <p>
          本サイトのお問い合わせには Google LLC が提供する Google
          フォームを利用しています。フォームを通じて取得した情報（お名前、メールアドレス、お問い合わせ内容等）は、お問い合わせへの回答および本サービスの提供のためのみに利用し、ご本人の同意なく第三者に提供することはありません。
        </p>
        <p className="mt-4">
          Google フォームによる情報の取扱いについては、Google
          のプライバシーポリシーが適用されます。
        </p>
      </>
    ),
  },
  {
    heading: "3. 個人情報の利用目的",
    body: (
      <ul className="list-disc space-y-2 pl-6">
        <li>お問い合わせへの回答</li>
        <li>本サービスに関するご連絡</li>
        <li>法令に基づく対応</li>
      </ul>
    ),
  },
  {
    heading: "4. 第三者提供",
    body: (
      <p>
        法令に基づく場合およびご本人の同意がある場合を除き、取得した個人情報を第三者に提供することはありません。
      </p>
    ),
  },
  {
    heading: "5. ポリシーの改定",
    body: (
      <p>
        本ポリシーは、必要に応じて改定することがあります。最新の内容は本ページにてお知らせします。
      </p>
    ),
  },
  {
    heading: "6. お問い合わせ窓口",
    body: (
      <p>
        本ポリシーに関するお問い合わせは、本サイトのお問い合わせフォームよりご連絡ください。
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <SubpageLayout title="プライバシーポリシー" background="bg-white">
      <p>
        ぱやぱや株式会社（以下「当社」）は、本ウェブサイト（以下「本サイト」）における利用者の個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。
      </p>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-base tracking-[0.16em] text-[#3F484E] sm:text-lg">
              {section.heading}
            </h2>
            <div className="mt-4">{section.body}</div>
          </section>
        ))}
      </div>

      <p className="mt-16 text-xs tracking-[0.18em] text-[#5E7C8A]">
        制定日: 2026 年 5 月 1 日
      </p>
    </SubpageLayout>
  );
}
