function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        <div className="flex items-center gap-2">

          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png"
            alt="logo"
            className="w-8 h-8"
          />

          <h1 className="text-2xl font-bold text-indigo-600">
            YOLO
          </h1>

        </div>

        <div className="flex gap-8 font-medium">

          <a href="#home" className="hover:text-indigo-600 transition">Home</a>
          <a href="#packages" className="hover:text-indigo-600 transition">Packages</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#book" className="hover:text-indigo-600 transition">Book</a>
          <a href="#faq" className="hover:text-indigo-600 transition">FAQ</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;