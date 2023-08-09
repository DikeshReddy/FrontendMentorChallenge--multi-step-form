import {userAppSelector} from "../../store/hooks";
import {twMerge as tm} from "tailwind-merge";

export const SideBar = (): JSX.Element => {
  const step = userAppSelector((state) => state.user.step);
  return (
    <div className="lg:p-[16px] flex w-full h-full">
      <div className="sidebar flex gap-[16px] justify-center py-[34px] w-full lg:h-full lg:flex-col  lg:self-start lg:p-[32px] lg:bg-[url(./images/bg-sidebar-desktop.svg)] bg-no-repeat bg-contain  lg:justify-start flex-grow">
        <div className="flex items-center gap-[16px]">
          <div
            className={tm(
              "number 1 font-extrabold w-[33px] h-[33px] flex justify-center items-center rounded-full text-white border-[2px] border-solid border-white",
              step === 1 ? `bg-blue-400 text-blue-100 border-blue-400` : ``
            )}
          >
            1
          </div>
          <div className="hidden lg:block">
            <p className="font-thin text-white">STEP 1</p>
            <p className="font-extrabold text-white">YOUR INFO</p>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div
            className={tm(
              "number 1 font-extrabold w-[33px] h-[33px] flex justify-center items-center rounded-full text-white border-[2px] border-solid border-white",
              step === 2 ? `bg-blue-400 text-blue-100 border-blue-400` : ``
            )}
          >
            2
          </div>
          <div className="hidden lg:block">
            <p className="font-thin text-white">STEP 2</p>
            <p className="font-extrabold text-white">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div
            className={tm(
              "number 1 font-extrabold w-[33px] h-[33px] flex justify-center items-center rounded-full text-white border-[2px] border-solid border-white",
              step === 3 ? `bg-blue-400 text-blue-100 border-blue-400` : ``
            )}
          >
            3
          </div>
          <div className="hidden lg:block">
            <p className="font-thin text-white">STEP 3</p>
            <p className="font-extrabold text-white">ADD-ONS</p>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div
            className={tm(
              "number 1 font-extrabold w-[33px] h-[33px] flex justify-center items-center rounded-full text-white border-[2px] border-solid border-white",
              step === 4
                ? `bg-blue-400 text-blue-100 border-blue-400`
                : step === 5
                ? `bg-blue-400 text-blue-100 border-blue-400`
                : ""
            )}
          >
            4
          </div>
          <div className="hidden lg:block">
            <p className="font-thin text-white">STEP 4</p>
            <p className="font-extrabold text-white">SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};
