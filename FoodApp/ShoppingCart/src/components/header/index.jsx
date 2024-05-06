
export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <a href="/">
          <div className="ml-5">
            <h1 
            className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide"
            >
              React Redux shopp cart d
            </h1>
          </div>
        </a>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
            <a href="/">
                <li className="cursor-pointer">Home</li>
            </a>
            <a href="/cart">
                <li className="cursor-pointer">Cart</li>
            </a>
        </ul>
      </nav>
    </div>
  );
}
