import {useRef} from "react";
import {CardHeader} from "../card-header/card-header";
import {InputField} from "../input-field/input-field";
import {userAppDispatch, userAppSelector} from "../../store/hooks";
import {MobileSignupFooter} from "../mobile-signup-footer/mobile-signup-footer";

import type {InputStateHandle} from "../input-field/input-field";
import {addUser} from "../../store/signup-component-slice";

export const PersonalInfoSection = (): JSX.Element => {
  const inputRef = useRef<InputStateHandle[]>([]);
  let userState = userAppSelector((state) => state.user);
  const dispatch = userAppDispatch();

  const onNextClick = (): void => {
    inputRef.current.map((element, index) => {
      if (element.value.length === 0) {
        element.setIsEmpty(true);
      } else {
        element.setIsEmpty(false);
      }
      if (index === 0) {
        userState = {...userState, name: element.value};
        dispatch(addUser(userState));
      }
      if (index === 1) {
        userState = {...userState, email: element.value};
        dispatch(addUser(userState));
      }
      if (index === 2) {
        userState = {...userState, number: element.value};
        dispatch(addUser(userState));
      }
    });
  };

  return (
    <div className="personal-info-section flex flex-col gap-[30px] ">
      <CardHeader title="Personal Info">
        Please provide your name, email address, and phone number.
      </CardHeader>
      <form action="POST" className="personal-info flex flex-col gap-[17px]">
        <InputField
          ref={(el: InputStateHandle) => (inputRef.current[0] = el)}
          type="text"
          id="name"
          label="Name"
          placeholder="e.g.Stephen King"
        ></InputField>
        <InputField
          ref={(el: InputStateHandle) => (inputRef.current[1] = el)}
          type="email"
          id="email"
          label="Email Address"
          placeholder="e.g.stephenking@lorem.com"
        ></InputField>
        <InputField
          ref={(el: InputStateHandle) => (inputRef.current[2] = el)}
          type="text"
          id="phone-number"
          label="Phone Number"
          placeholder="e.g.+1 234 567 890"
        ></InputField>
      </form>
      <MobileSignupFooter
        NextStepButtonHandler={onNextClick}
      ></MobileSignupFooter>
    </div>
  );
};
