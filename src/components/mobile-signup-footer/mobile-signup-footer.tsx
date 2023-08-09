import {userAppSelector} from "../../store/hooks";
import {Button} from "../button/Button";
import {twMerge as tm} from "tailwind-merge";
type MobileSignupFooterProps = {
  GoBackButtonHandler?: () => void;
  NextStepButtonHandler?: () => void;
  className?: string;
};

export const MobileSignupFooter = ({
  GoBackButtonHandler,
  NextStepButtonHandler,
  className,
}: MobileSignupFooterProps): JSX.Element => {
  const step = userAppSelector((state) => state.user.step);

  return (
    <div
      className={tm(
        "mobile-signup-footer  flex-row p-[16px] lg:px-[0px] w-full mt-auto justify-between hidden lg:flex ",
        className,
        step === 5 ? `hidden` : ``
      )}
    >
      <Button
        className={`${step === 1 ? "hidden" : "block"}`}
        onClick={GoBackButtonHandler}
        bgColor="transparent"
        title="Go Back"
      ></Button>
      <Button
        className="ml-auto"
        onClick={NextStepButtonHandler}
        bgColor="dark-blue"
        title="Next Step"
      ></Button>
    </div>
  );
};
