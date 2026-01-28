import "./globals.css";

export const metadata = {
  title: "Ana Paula Bordados",
  description: "Arte em cada ponto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
