import Image from "next/image";
import InnerPeace from "../../../public/images/Rec.png";
import SideInner from "../../../public/images/in.png";

export default function () {
  return (
    <>
      <div className="grid grid-cols-3 gap-0 p-8  bg-[#FCF8F3]">
        <div className="pt-9 w-[422px] h-[224px] pl-[100px] py-[223px]">
          <h4 className="font-extrabold text-2xl">50+ Beautiful rooms inspiration</h4>
          <p className="mt-4">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <button className="mt-4 bg-[#B88E2F] h-[48px] w-[176px]  text-white rounded-md">
            Explore More
          </button>
        </div>
        <div className="slideImages">
          <Image src={InnerPeace} width={250} alt="Beautiful room inspiration" />
        </div>
        <div className="slideImages">
          <Image src={SideInner} width={250} alt="Beautiful room inspiration" />
        </div>
      </div>
    </>
  );
}
