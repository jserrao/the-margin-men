import '../app.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>The Margin Men - Defending Your Margins From AI</title>
        <meta
          name="description"
          content="The Margin Men, John Serrao and Jeffrey Hoffman, help SaaS companies defend their margins from AI disruption through deep analysis, product optimization, and executive training."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.themarginmen.com" />
        <meta
          property="og:title"
          content="The Margin Men - Defending Your Margins From AI"
        />
        <meta
          property="og:description"
          content="The Margin Men, John Serrao and Jeffrey Hoffman, help SaaS companies defend their margins from AI disruption through deep analysis, product optimization, and executive training."
        />
        <meta
          property="og:image"
          content="https://www.themarginmen.com/images/the-margin-men-og.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.themarginmen.com" />
        <meta
          name="twitter:title"
          content="The Margin Men - Defending Your Margins From AI"
        />
        <meta
          name="twitter:description"
          content="The Margin Men, John Serrao and Jeffrey Hoffman, help SaaS companies defend their margins from AI disruption through deep analysis, product optimization, and executive training."
        />
        <meta
          name="twitter:image"
          content="https://www.themarginmen.com/images/the-margin-men-og.jpg"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
      </head>
      <body className="bg-[#050505] text-neutral-300 font-[Inter] antialiased selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
