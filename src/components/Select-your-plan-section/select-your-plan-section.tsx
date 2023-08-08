import {useRef} from "react";
import {userAppSelector} from "../../store/hooks";
import {CardHeader} from "../card-header/card-header";
import {PlanCard, planCardRefType} from "../plan-card/plan-card";
import {PlanIntervalSwitcher} from "../plan-interval-switcher/plan-interval-switcher";

export const PlanSection = (): JSX.Element => {
  const planInterval = userAppSelector((state) => state.user.paymentInterval);
  const planCardRef = useRef<planCardRefType[]>([]);

  return (
    <div className="plan-selection-section">
      <CardHeader title="Select your plan">
        you have the option of monthly otr yearly billing
      </CardHeader>
      <PlanCard
        image="arcade"
        price={9}
        planInterval={planInterval}
        title="Arcade"
        ref={(el) => planCardRef.current[0] === el}
      ></PlanCard>
      <PlanCard
        image="advanced"
        price={12}
        planInterval={planInterval}
        title="Advanced"
        ref={(el) => planCardRef.current[0] === el}
      ></PlanCard>
      <PlanCard
        image="pro"
        price={15}
        planInterval={planInterval}
        title="Pro"
        ref={(el) => planCardRef.current[0] === el}
      ></PlanCard>
      <PlanIntervalSwitcher></PlanIntervalSwitcher>
    </div>
  );
};
