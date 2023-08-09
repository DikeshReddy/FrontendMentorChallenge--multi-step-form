import {useEffect} from "react";
import {userAppDispatch, userAppSelector} from "../../store/hooks";
import {CardHeader} from "../card-header/card-header";
import {PlanCard} from "../plan-card/plan-card";
import {PlanIntervalSwitcher} from "../plan-interval-switcher/plan-interval-switcher";
import {addUser} from "../../store/signup-component-slice";
import {changeStepFunction} from "../../store/step-functions-slice";

export const PlanSection = (): JSX.Element => {
  const planInterval = userAppSelector((state) => state.user.paymentInterval);

  const user = userAppSelector((state) => state.user);
  const dispatch = userAppDispatch();

  const backHandler = () => {
    dispatch(addUser({...user, step: 1}));
  };
  const nextHandler = () => {
    dispatch(addUser({...user, step: 3}));
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
    <div className="plan-selection-section">
      <CardHeader title="Select your plan">
        you have the option of monthly otr yearly billing
      </CardHeader>
      <div className="plan-cards flex flex-col gap-[11px] py-[23px] lg:flex-row">
        <PlanCard
          image="arcade"
          price={9}
          planInterval={planInterval}
          title="Arcade"
        ></PlanCard>
        <PlanCard
          image="advanced"
          price={12}
          planInterval={planInterval}
          title="Advanced"
        ></PlanCard>
        <PlanCard
          image="pro"
          price={15}
          planInterval={planInterval}
          title="Pro"
        ></PlanCard>
      </div>
      <PlanIntervalSwitcher></PlanIntervalSwitcher>
    </div>
  );
};
