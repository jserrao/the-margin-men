import '../app.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nexus AI Consulting</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </head>
      <body className="bg-[#050505] text-neutral-300 font-[Inter] antialiased selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

