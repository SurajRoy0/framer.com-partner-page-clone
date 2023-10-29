import Avatar from "@/common/Avatar";
import Wrapper from "@/common/Wrapper";
import { AiFillYoutube } from "react-icons/ai";

export default function Video() {
  return (
    <Wrapper
      styles={`flex flex-col text-start gap-7 p-8`}
      background={`bg-gradient-to-b from-orange-500 to-red-700`}
      title={`Video`}
      paragraph={`Create tutorial, comparison, or walkthrough videos and add your referral link to the description.`}
    >
      <div className="relative">
        <div
          className={`w-[1000px] h-[700px] rounded-2xl bg-white shadow-lg overflow-hidden shadow-black absolute top-6 `}
        >
          <div className="bg-white w-full px-4 py-2 border-gray-100 gap-4 text-start">
            <div className="flex justify-start items-center gap-3 my-3">
              <Avatar
                url="https://framerusercontent.com/images/Xy2itiixuUlWhLJ6K4clQ9f58E.png"
                styles={`w-12 h-12`}
              />
              <div className="text-start">
                <p className="text-black font-semibold">Oliur Online</p>
                <p className="text-gray-400 font-light text-sm">
                  57k subscribers
                </p>
              </div>
            </div>

            <div className="py-1 font-normal text-black flex-grow text-left text-[12px] sm:text-sm">
              Create your website in no-time:{" "}
              <span className="text-orange-600 font-semibold">
                https://framer.com/
              </span>
              <span className=" ml-1 rounded-md bg-gradient-to-l from-violet-500 to-red-400 p-1 text-white">
                &via=huseyin
              </span>
            </div>
          </div>
          <div className="px-4">
            <div className="flex justify-start items-start gap-10">
              <div className="rounded-xl overflow-hidden w-[438px] shadow-gray-800 shadow-lg relative">
                <img
                  className="cursor-pointer w-full"
                  src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp"
                  alt="template"
                />
                <div className=" absolute top-24 left-52">
                  <AiFillYoutube size={60} className="text-black opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
