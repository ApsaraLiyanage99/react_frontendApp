import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";

// import React from 'react'

function StandardLayout({ children }) {
  return (
    <div>
      {/* header */}
      <Navbar />

      {/* page content */}
      <div className="pt-[55px]">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default StandardLayout;
