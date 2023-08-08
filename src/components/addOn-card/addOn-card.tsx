import {userAppDispatch, userAppSelector} from "../../store/hooks";
import {addUser} from "../../store/signup-component-slice";
import {twMerge as tm} from "tailwind-merge";

type AddonCardProps = {
  title: string;
  children: string;
  price: number;
};

export const AddOnCard = ({
  title,
  children,
  price,
}: AddonCardProps): JSX.Element => {
  let state = userAppSelector((state) => state.user);
  let planInterval = userAppSelector((state) => state.user.paymentInterval);
  let addOn = userAppSelector((state) => state.user.addOn);
  const dispatch = userAppDispatch();

  const clickHandler = () => {
    if (addOn.includes(title)) {
      addOn = addOn.filter((element) => element != title);
    } else {
      addOn = [...addOn, title];
    }
    dispatch(addUser({...state, addOn}));
  };

  const isSelected = addOn.includes(title);

  return (
    <div
      className={tm(
        "add-on-card flex border-[2px] border-gray-200 rounded-[5px] p-[15px] gap-[16px] justify-between items-center w-full",
        isSelected && "bg-blue-400 bg-opacity-20"
      )}
      onClick={clickHandler}
    >
      <div className="add-on flex gap-[16px] items-center">
        <div
          className={tm(
            "checkbox w-[20px] h-[20px] flex justify-center items-center rounded-[3px] border-[1px] border-gray-200 ",
            isSelected && "bg-blue-200"
          )}
        >
          <img
            className="checkmark object-cover"
            src="./images/icon-checkmark.svg"
            alt=""
          />
        </div>
        <div className="content ">
          <p className="content__title font-bold text-blue-100 text-[1.25rem]">
            {title}
          </p>
          <p className="content__info font-thin text-gray-100">{children}</p>
        </div>
      </div>
      <p className="price text-blue-200 justify-self-end">
        {planInterval === "monthly" ? `+$${price}/mo` : `+$${price * 10}/yr`}
      </p>
    </div>
  );
};
