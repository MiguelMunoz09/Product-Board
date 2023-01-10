import Header from "../components/Header.jsx";
import Nav from "../common/Nav.jsx";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-full">
        <Header />
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
