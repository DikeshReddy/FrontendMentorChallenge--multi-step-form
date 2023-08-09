import {useRef} from "react";
import {userAppDispatch, userAppSelector} from "../../store/hooks";
import {decrementStep, incrementStep} from "../../store/signup-component-slice";
import {PlanSection} from "../Select-your-plan-section/select-your-plan-section";
import {AddOnSection} from "../addOn-section/addOn-section";
import {FinishUpSection} from "../finish-up-card-section/finish-up-section";
import {MobileSignupFooter} from "../mobile-signup-footer/mobile-signup-footer";
import {PersonalInfoSection} from "../personal-info-section/personal-info-section";
import {SideBar} from "../sidebar/sidebar";
import {ThankYouSection} from "../thank-you-section/thank-you-section";
import {twMerge as tm} from "tailwind-merge";
import type {PersonalInfoRefType} from "../personal-info-section/personal-info-section";

export const MultiStepFormCard = (): JSX.Element => {
  const dispatch = userAppDispatch();
  const step = userAppSelector((state) => state.user.step);
  const infoStep = userAppSelector((state) => state.stepFunction.nextFunction);
  console.log(infoStep);
  const nextFunction = () => {
    dispatch(incrementStep());
  };
  const backFunction = () => {
    dispatch(decrementStep());
  };

  const infoStepFunction = useRef<PersonalInfoRefType>();

  return (
    <div className="form-section  lg:flex h-[100vh] lg:justify-center lg:items-center ">
      <img
        src="./images/bg-sidebar-mobile.svg"
        alt=""
        className="mobile-bg w-full lg:hidden  "
      />
      <div className="form-card lg:shadow-lg lg:h-[600px]   flex flex-col items-center absolute rounded-[16px] top-0 w-full lg:max-w-[940px] lg:grid grid-cols-3 lg:bg-white lg:relative">
        <SideBar></SideBar>
        <div
          className={tm(
            "form shadow-lg bg-white px-[26px] lg:shadow-none lg:px-[50px] h-full flex flex-col justify-between  py-[35px] w-[90%] rounded-[8px] lg:col-span-2 place-self-center ",
            step === 5 ? `justify-center` : ``
          )}
        >
          {step === 1 ? (
            <PersonalInfoSection
              ref={(ele: PersonalInfoRefType) =>
                (infoStepFunction.current = ele)
              }
            ></PersonalInfoSection>
          ) : step === 2 ? (
            <PlanSection></PlanSection>
          ) : step === 3 ? (
            <AddOnSection></AddOnSection>
          ) : step === 4 ? (
            <FinishUpSection></FinishUpSection>
          ) : (
            <ThankYouSection></ThankYouSection>
          )}
          {step != 5 ? (
            <MobileSignupFooter
              NextStepButtonHandler={
                step === 1
                  ? infoStepFunction.current?.onNextClick
                  : nextFunction
              }
              GoBackButtonHandler={backFunction}
            ></MobileSignupFooter>
          ) : (
            ""
          )}
        </div>
      </div>
      <MobileSignupFooter
        className="flex justify-between w-full absolute bottom-0 bg-white lg:hidden"
        NextStepButtonHandler={
          step === 1 ? infoStepFunction.current?.onNextClick : nextFunction
        }
        GoBackButtonHandler={backFunction}
      ></MobileSignupFooter>
    </div>
  );
};
