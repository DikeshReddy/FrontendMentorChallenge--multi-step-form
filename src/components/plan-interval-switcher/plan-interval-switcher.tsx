import {userAppDispatch, userAppSelector} from "../../store/hooks";
import {twMerge as tm} from "tailwind-merge";
import {addUser} from "../../store/signup-component-slice";

export const PlanIntervalSwitcher = (): JSX.Element => {
  const payInterval = userAppSelector((state) => state.user.paymentInterval);
  const state = userAppSelector((state) => state.user);
  const dispatch = userAppDispatch();

  const clickHandler = (): void => {
    if (payInterval === "monthly") {
      dispatch(addUser({...state, paymentInterval: "yearly"}));
    } else {
      dispatch(addUser({...state, paymentInterval: "monthly"}));
    }
  };

  return (
    <div className="plan-interval-switcher flex p-[14px] gap-[24px] bg-blue-400 justify-center items-center rounded-[5px] bg-opacity-20">
      <p
        className={tm(
          "monthly text-base text-gray-100 font-bold",
          payInterval === "monthly" && "text-blue-100"
        )}
      >
        Monthly
      </p>
      <div
        className={tm(
          "switcher w-[40px] h-[20px] bg-blue-100 rounded-[10px] flex items-center px-[3px]",
          payInterval === "monthly" ? "justify-start" : "justify-end"
        )}
        onClick={clickHandler}
      >
        <div className="circle w-[12px] h-[12px] rounded-full bg-white "></div>
      </div>
      <p
        className={tm(
          "monthly text-base text-gray-100 font-bold",
          payInterval === "yearly" && "text-blue-100"
        )}
      >
        Yearly
      </p>
    </div>
  );
};
