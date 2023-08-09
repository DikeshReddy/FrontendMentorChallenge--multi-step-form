import {useEffect} from "react";
import {userAppDispatch, userAppSelector} from "../../store/hooks";
import {addUser} from "../../store/signup-component-slice";
import {changeStepFunction} from "../../store/step-functions-slice";
import {AddOnCard} from "../addOn-card/addOn-card";
import {CardHeader} from "../card-header/card-header";

export const AddOnSection = () => {
  const user = userAppSelector((state) => state.user);
  const dispatch = userAppDispatch();
  const backHandler = () => {
    dispatch(addUser({...user, step: 2}));
  };
  const nextHandler = () => {
    dispatch(addUser({...user, step: 4}));
  };

  let stepFunctionState = userAppSelector((state) => state.stepFunction);

  useEffect(() => {
    dispatch(
      changeStepFunction({
        ...stepFunctionState,
        nextFunction: nextHandler,
        backFunction: backHandler,
      })
    );
  }, []);

  return (
    <div className="add-on-section flex flex-col gap-[12px]">
      <CardHeader title="Pick add-ons">
        Add-ons help enhance your gaming experience.
      </CardHeader>
      <AddOnCard title="Online service" price={1}>
        Access to multiplayer games
      </AddOnCard>
      <AddOnCard title="Larger storage" price={2}>
        Extra 1TB of cloud save
      </AddOnCard>
      <AddOnCard title="Customizable profile" price={2}>
        Custom theme on your profile
      </AddOnCard>
    </div>
  );
};
