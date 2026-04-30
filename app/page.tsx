import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        payapaya
      </h1>
      <p className="text-muted-foreground text-lg">
        準備中です。近日公開予定。
      </p>
      <Button
        nativeButton={false}
        render={<a href="mailto:hello@payapaya.dev" />}
      >
        お問い合わせ
      </Button>
    </main>
  );
}
