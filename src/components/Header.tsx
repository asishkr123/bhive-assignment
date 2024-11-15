import PhoneSVG from "../assets/phone.svg";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="bg-white shadow max-sm:px-8 py-4 sm:px-4 md:px-12 xl:px-20 flex justify-between items-center">
      <img
        src="images/logo.png"
        alt="Host meeting illustration"
        className="w-full h-auto max-w-32"
      />
      <div className="border-[1px] border-[solid] border-[#F2B304] p-[10px] rounded-[4px]">
        <img
          src={PhoneSVG}
          alt="Host meeting illustration"
          className="w-full h-auto max-w-32"
        />
      </div>
    </header>
  );
};

export default Header;
