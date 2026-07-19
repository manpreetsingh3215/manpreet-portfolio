import "./globals.css";

export const metadata = {
  title: "Manpreet Singh | Senior Mobile & Frontend Engineer",
  description:
    "Senior Mobile & Frontend Engineer specializing in React Native, Expo, React.js, Next.js, AI/LLM integrations, WebRTC, and cross-platform architecture.",
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
