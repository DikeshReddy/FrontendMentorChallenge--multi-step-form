import {Button} from "../button/Button";

export const MobileSignupFooter = (): JSX.Element => {
  return (
    <div className="mobile-signup-footer flex flex-row p-[16px] justify-between">
      <Button bgColor="transparent" title="Go Back"></Button>
      <Button bgColor="dark-blue" title="Next Step"></Button>
    </div>
  );
};
