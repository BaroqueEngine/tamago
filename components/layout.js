import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen w-full h-full bg-bg-color text-white">
        {children}
      </div>
      <Footer />
    </>
  );
}
