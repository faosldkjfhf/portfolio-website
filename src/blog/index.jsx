import Footer from "../footer";
import NavBar from "../nav-bar";

function Blog() {
  return (
    <>
      <NavBar />
      <div className="text-white text-9xl overflow-hidden font-bold">Blog</div>
      <div className="fixed bottom-0">
        <Footer />
      </div>
    </>
  );
}

export default Blog;
