import Navabar from "@/Components/Navabar";
import "./globals.css";
import Footer from "@/Components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="w-screen">
          <Navabar />
        </header>

        {children}

        <Footer>
          <Footer/>
        </Footer>
      </body>

    </html>
  );
}
