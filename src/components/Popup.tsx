interface Props {
  show: boolean;
  onClose: () => void;
  routes: { id: number; name: string }[];
}

function Popup({ show, onClose, routes }: Props) {
  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full min-h-screen flex justify-center items-center   bg-black bg-opacity-70 ${
        show ? "" : "hidden"
      }`}
    >
      <div className="w-1/2  mx-auto rounded-lg py-40 flex justify-center items-center flex-col bg-white bg-opacity-50">
        <ul>
          {routes.map((route) => (
            <li
              key={route.id}
              className="mb-2 text-black cursor-pointer font-League font-bold text-lg text-center"
            >
              {route.name}
            </li>
          ))}
        </ul>
        <button
          className="bg-[#FFC576] text-black font-bold py-2 px-4 rounded focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
