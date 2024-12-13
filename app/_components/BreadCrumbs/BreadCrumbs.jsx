import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = () => {
  return (
    <>
      <nav
        className="mt-6 flex items-center border-y border-[#1F1F1F1A] py-2.5 text-sm"
        aria-label="Breadcrumb"
      >
        <ul className="container inline-flex items-center gap-3">
          {/* Home */}
          <li>
            <a href="/" className="text-pinkRose hover:underline">
              Home
            </a>
          </li>
          <li>
            <MdKeyboardArrowRight className="text-lg text-[#1F1F1F80]" />
          </li>
          {/* Products */}
          <li>
            <a href="/products" className="text-pinkRose hover:underline">
              Products
            </a>
          </li>
          <li>
            <MdKeyboardArrowRight className="text-lg text-[#1F1F1F80]" />
          </li>
          {/* Current Page */}
          <li>
            <span className="font-medium text-[#1F1F1F80]">
              Evenflo EveryStage LX All-In-One Car Seat
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Breadcrumb;
