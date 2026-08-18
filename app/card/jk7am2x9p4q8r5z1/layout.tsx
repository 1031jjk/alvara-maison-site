import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Business Card",
};

export default function CardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
