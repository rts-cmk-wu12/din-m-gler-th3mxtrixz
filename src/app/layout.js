import Header from "../components/Header"
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100vh]">
        <Header/>
        {children}
      </body>
    </html>
  );
}
