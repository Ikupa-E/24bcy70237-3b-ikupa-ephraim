import "./globals.css";

export const metadata = {
  title: "Library Management System",
  description: "React Library Management System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
