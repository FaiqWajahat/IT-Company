import Navabar from "@/Components/Navabar";
import "./globals.css";
import Footer from "@/Components/Footer";
import StickyWhatsAppButton from "@/Components/StickyWhatsAppButton";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Pixvion — Build. Design. Innovate",
  description:
    "Pixvion builds modern websites, mobile apps, and digital solutions that help businesses grow online.",
  keywords: [
    "Pixvion",
    "web development",
    "app development",
    "digital agency",
    "logo design",
    "UI/UX design",
    "software company",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pixvion — Build. Design. Innovate",
    description:
      "Pixvion builds websites and mobile apps that inspire and deliver measurable results.",
    url: "https://pixvion.com",
    siteName: "Pixvion",
    images: [
      {
        url: "https://pixvion.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pixvion — Build. Design. Innovate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixvion — Technology",
    description:
      "Pixvion builds websites and mobile apps that inspire and deliver measurable results.",
    images: ["https://pixvion.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pixvion",
    "url": "https://pixvion.com",
    "logo": "https://pixvion.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923279008806",
      "contactType": "customer service",
      "email": "info@pixvion.com",
    },
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/"
    ]
  };

  return (
    <html lang="en">
      <head>
    <meta
          name="google-site-verification"
          content="9v1JMAhTFC7LdYhMXfl4tXU36EeJhfMskAG0jTCuvK4"
        />

        {/* ✅ Structured Data (JSON-LD Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>

      <body>
        <header className="w-screen">
          <Navabar />
        </header>

        {children}
         <SpeedInsights />
          <Analytics />
        <footer>
          <Footer />
          <StickyWhatsAppButton />
        </footer>
      </body>
    </html>
  );
}
