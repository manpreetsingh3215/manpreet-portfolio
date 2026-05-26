import "./globals.css";

export const metadata = {
  title: "Manpreet Singh",
  description:
    "Senior Frontend Engineer specializing in React Native, React.js, Next.js, AI integrations, and cross-platform architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
