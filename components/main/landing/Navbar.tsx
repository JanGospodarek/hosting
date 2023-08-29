const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 z-10">
      <div className="dropdown m-4 z-10 dropdown-bottom dropdown-end">
        <label tabIndex={0} className="btn ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Realizacje</a>
          </li>
          <li>
            <a>Oferta</a>
          </li>

          <li>
            <a>Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
