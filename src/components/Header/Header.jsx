const Header = ({handleTickets,posts}) => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="font-bold text-3xl cursor-pointer">Customer Support</h1>
      <div className="hidden lg:inline-block">
        <ul className="flex items-center gap-6 text-xl font-light">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">FAQ</li>
          <li className="cursor-pointer hover:text-gray-400">Changelog</li>
          <li className="cursor-pointer hover:text-gray-400">Blog</li>
          <li className="cursor-pointer hover:text-gray-400">Download</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
          <li onClick={()=>{
            handleTickets(posts)
          }} className="btn p-7 bg-linear-to-r from-blue-700 to-purple-500 text-stone-200 text-xl">
            + New Ticket
          </li>
        </ul>
      </div>
      <div className="flex-end md:flex-end lg:hidden dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 20 20"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex="-1"
          className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 right-5 p-4 shadow text-right text-lg"
        >
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">FAQ</li>
          <li className="cursor-pointer hover:text-gray-400">Changelog</li>
          <li className="cursor-pointer hover:text-gray-400">Blog</li>
          <li className="cursor-pointer hover:text-gray-400">Download</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
