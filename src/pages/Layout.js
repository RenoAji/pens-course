import AppNavbar from "../components/AppNavbar";
import Footer from "../components/Footer";

export default function Layout({ Page, Hero = "" }) {
  return (
    <div className="layout" style={{ minHeight: "100vh" }}>
      <header>
        <AppNavbar />
      </header>
      <main>
        {Hero}
        <Page />
      </main>
      <Footer />
    </div>
  );
}
