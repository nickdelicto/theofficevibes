import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us - The Office Vibes",
  description: "Partner with The Office Vibes to reach over 1M+ engaged office workers monthly with authentic, relatable content.",
  openGraph: {
    title: "Work With Us - The Office Vibes",
    description: "Partner with The Office Vibes to reach 1M+ engaged office workers monthly.",
  },
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

