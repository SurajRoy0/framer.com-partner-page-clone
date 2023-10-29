import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={"/partners"} className="animate-pulse font-bold text-2xl"> Click To Go &ldquo;/partners&rdquo; Page</Link>
    </main>
  );
}
