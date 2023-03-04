import Image from "next/image";

function InfoCard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="overflow-hidden rounded-full border border-[#FFC576] w-[100px] h-[100px] flex justify-center items-center">
        <Image
          src="/image/mehedi.png"
          width={100}
          height={100}
          alt="i am mehedi"
        />
      </div>
      <p className="text-white text-center text-[32px] font-League font-bold ">
        <span className="text-[#FFC576] text-[32px] font-League mr-2">
          Hello
        </span>
        I'm
      </p>
      <h1 className="text-white text-center text-[48px] font-League font-semibold">
        Mehedi Hasan
      </h1>
      <p className="text-white text-center text-[28px] font-League font-medium leading-7">
        Product Designer
      </p>
    </div>
  );
}

export default InfoCard;
