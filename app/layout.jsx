import "./globals.css";

export const metadata = {
  title: "Friends of Scouting",
  description:
    "Supporting youth, leadership, conservation, and outdoor adventure through Scouting.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
