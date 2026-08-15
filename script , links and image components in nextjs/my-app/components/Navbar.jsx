const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5">
      <h1 className="text-2xl font-bold">
        Logo
      </h1>

      <ul className="flex gap-6">
        <a href="/">
          <li>Home</li>
        </a>

        <a href="/about">
          <li>About</li>
        </a>

        <a href="/services">
          <li>Services</li>
        </a>

        <a href="/contact">
          <li>Contact</li>
        </a>
      </ul>

      <button className="px-4 py-2 rounded bg-blue-500 text-white">
        Login
      </button>
    </nav>
  );
};

export default Navbar;