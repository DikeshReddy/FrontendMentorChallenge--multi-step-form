import {forwardRef, useEffect, useState} from "react";
import {twMerge as tm} from "tailwind-merge";
import {userAppDispatch, userAppSelector} from "../../store/hooks";
import {addUser} from "../../store/signup-component-slice";

type PlanCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  price: number;
  image: "arcade" | "advanced" | "pro";
  planInterval: "monthly" | "yearly";
};

export type planCardRefType = {
  setSelected: (value: boolean) => void;
  image: string;
};

export const PlanCard = forwardRef<planCardRefType, PlanCardProps>(
  ({image, title, price, planInterval}) => {
    const [selected, setSelected] = useState<boolean>(false);
    let plan = userAppSelector((state) => state.user.plan);
    let state = userAppSelector((state) => state.user);

    useEffect(() => {
      if (plan === image) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    }, [plan]);

    const dispatch = userAppDispatch();

    const clickHandler = () => {
      dispatch(addUser({...state, plan: image}));
    };

    return (
      <div
        className={tm(
          "plan-card flex flex-col rounded-[5px] p-[16px] flex-1 lg:items-start border-solid border-[2px] border-gray-100",
          selected && "border-blue-200 bg-blue-300 bg-opacity-10"
        )}
        onClick={clickHandler}
      >
        <div className="plan-card__content lg:flex-col flex gap-[13px] items-center ">
          <img
            src={`./images/icon-${image}.svg`}
            alt=""
            className="plan-card__image w-min self-start lg:mb-[40px]"
          />
          <div className="flex flex-col ">
            <h1 className="plan-card__plan font-bold text-blue-100 text-[1.25rem]">
              {title}
            </h1>
            <p className="plan-card__prize font-thin text-gray-100">
              {planInterval === "monthly"
                ? `$${price}/mon`
                : `$${price * 10}/yr`}
            </p>
          </div>
        </div>
        <p
          className={tm(
            "free-months text-[0.95rem] text-blue-100 font-thin hidden ml-[53px] lg:ml-[0px]",
            planInterval === "yearly" ? "block" : ""
          )}
        >
          2 months free
        </p>
      </div>
    );
  }
);
