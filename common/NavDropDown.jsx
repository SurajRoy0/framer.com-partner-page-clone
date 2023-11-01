export default function NavDropDown({ isOpen, items }) {
  return (
    <div
      className={`${
        isOpen ? "absolute opacity-100" : "opacity-0 hidden"
      } top-10 z-10 transition-opacity duration-200 w-[270px] bg-deepBlue rounded-xl shadow-inner shadow-neutral-800 p-2`}
    >
      {items?.map((item) => (
        <div
          className="group hover:bg-gray-900 flex items-center rounded-xl p-2 cursor-pointer"
          key={item.title}
        >
          <div className={`text-[20px] m-3 group-hover:text-white`}>
            {item.icon}
          </div>
          <div>
            <p className="text-white">{item.title}</p>
            <p className={`text-[12px] group-hover:text-white`}>
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
