import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import RandomTopicButton from "@/components/RandomTopicButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deutsch Mindmap | Ôn tập tiếng Đức B2",
  description:
    "Hệ thống mindmap học tiếng Đức theo chủ đề: từ vựng, đồng nghĩa, ghi chú và bài tập điền từ cho trình độ B2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface)]/85 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 sm:px-5 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)] text-white text-sm">
                DE
              </span>
              <span className="truncate">
                Deutsch <span className="text-[var(--brand)]">Mindmap</span>
              </span>
            </Link>
            <nav className="flex items-center gap-3 sm:gap-5 text-sm font-medium text-neutral-500">
              <Link href="/" className="hidden sm:inline hover:text-[var(--brand)] transition-colors">
                Chủ đề
              </Link>
              <a
                href="https://github.com/HuynhHoangvu/German_study"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline hover:text-[var(--brand)] transition-colors"
              >
                GitHub
              </a>
              <RandomTopicButton />
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--border)] py-6 text-center text-xs text-neutral-400">
          Deutsch Mindmap · Tài liệu tự tổng hợp phục vụ ôn luyện tiếng Đức B2
        </footer>
      </body>
    </html>
  );
}
