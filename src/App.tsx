import {store} from "./store/store";
import {Provider} from "react-redux";
import {AddOnSection} from "./components/addOn-section/addOn-section";
import {FinishUpSection} from "./components/finish-up-card-section/finish-up-section";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <FinishUpSection></FinishUpSection>
    </Provider>
  );
}

export default App;
