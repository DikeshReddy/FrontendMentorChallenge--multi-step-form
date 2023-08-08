import {userAppSelector} from "../../store/hooks";
import {CardHeader} from "../card-header/card-header";
import {PlanCard} from "../plan-card/plan-card";

type FinishUpSectionProps = {
  isPlanCard: boolean;
  isTotalCard: boolean;
  children: string;
};

const prices: Record<string, number> = {
  "Online service": 1,
  "Larger storage": 2,
  "Customizable profile": 2,
  arcade: 9,
  advanced: 12,
  pro: 15,
};

export const FinishUpSection = (): JSX.Element => {
  let paymentInterval = userAppSelector((state) => state.user.paymentInterval);
  let addOn = userAppSelector((state) => state.user.addOn);

  let plan = userAppSelector((state) => state.user.plan);

  const firstToUppercase = (word: string): string => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return capitalized;
  };

  let planPrice = prices[plan];

  const TotalCost = (): number => {
    const total = addOn.reduce(
      (accumulator, element) => accumulator + prices[element],
      planPrice
    );
    return total;
  };

  return (
    <div className="finish-up-section">
      <CardHeader title="Finishing up">
        Double-check everything looks OK before confirming.
      </CardHeader>
      <div className="finish-up-card">
        <div className="finish-up-plan">
          <div className="cost-list-card  bg-blue-400 bg-opacity-20 flex flex-col gap-[16px] p-[16px] rounded-[5px]">
            <div className="plan flex justify-between items-center">
              <div>
                <p className="plan-name font-extrabold text-blue-100">{`${firstToUppercase(
                  plan
                )}(${firstToUppercase(paymentInterval)})`}</p>
                <p className="change underline decoration-2 font-bold text-gray-100">
                  Change
                </p>
              </div>
              <p className="plan-price text-blue-100 font-extrabold">
                {paymentInterval === "monthly"
                  ? `$${planPrice}/mo`
                  : `$${planPrice * 10}/yr`}
              </p>
            </div>
            <hr />
            <div className="addOns flex gap-[16px] flex-col">
              {addOn.map((element) => (
                <div className="add-on-plan flex gap-[16px] justify-between">
                  <p className="content text-base text-gray-100">{element}</p>
                  <p className="price text-blue-100">
                    {paymentInterval === "monthly"
                      ? `+$${prices[element]}/mo`
                      : `+$${prices[element] * 10}/yr`}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="total flex justify-between p-[16px]">
            <p className="text-base text-gray-100">{`Total(per ${
              paymentInterval === "monthly" ? "month" : "year"
            })`}</p>
            <p className="total-cost text-blue-200 text-[1.25rem] font-extrabold">
              {`+${TotalCost()}/${paymentInterval === "monthly" ? "mo" : "yr"}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
