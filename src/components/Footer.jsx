import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>RandomPokemonGenerator</span>
        Built with <a href="https://vitejs.dev//">Vite</a>
      </p>
      <p>
        Favicon provided by
        <a href="https://icons8.com/"> icons8.com</a>
      </p>
    </footer>
  );
};

export default Footer;
