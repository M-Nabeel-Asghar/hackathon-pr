
import Image from "next/image";
import InnerPeace from "../../../public/images/Rec.png";
import SideInner from "../../../public/images/in.png";

const Hero = () => {
  return (
    <>
      <div className="flex  gap-3 p-8  bg-[#FCF8F3]">
        <div className="pt-[223px] w-[422px] h-[224px] pl-[100px] py-[223px]">
          <h4 className="font-extrabold text-3xl">50+ Beautiful rooms inspiration</h4>
          <p className="mt-2">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <button className="mt-4 bg-[#B88E2F] h-[48px] w-[176px]  text-white rounded-md hover:bg-[#dfaf40]">
            Explore More
          </button>
        </div>
        <div className="">
          <Image src={SideInner} width={404} height={582} alt="Beautiful room inspiration" />
        </div>
        <div className="">
          <Image src={InnerPeace} width={372} height={486} alt="Beautiful room inspiration" />
        </div>
        
      </div>
    </>
  );
}
export default Hero;
