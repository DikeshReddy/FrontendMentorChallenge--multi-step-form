import {AddOnCard} from "../addOn-card/addOn-card";
import {CardHeader} from "../card-header/card-header";

export const AddOnSection = () => {
  return (
    <div className="add-on-section">
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
