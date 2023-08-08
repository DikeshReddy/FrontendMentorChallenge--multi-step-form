import {Button} from "../button/Button";

type MobileSignupFooterProps = {
  GoBackButtonHandler?: () => void;
  NextStepButtonHandler?: () => void;
};

export const MobileSignupFooter = ({
  GoBackButtonHandler,
  NextStepButtonHandler,
}: MobileSignupFooterProps): JSX.Element => {
  return (
    <div className="mobile-signup-footer flex flex-row p-[16px] justify-between">
      <Button
        onClick={GoBackButtonHandler}
        bgColor="transparent"
        title="Go Back"
      ></Button>
      <Button
        onClick={NextStepButtonHandler}
        bgColor="dark-blue"
        title="Next Step"
      ></Button>
    </div>
  );
};
