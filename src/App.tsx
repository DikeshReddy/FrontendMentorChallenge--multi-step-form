import {store} from "./store/store";
import {Provider} from "react-redux";
import {MultiStepFormCard} from "./components/multi-step-form-card/multi-step-form-card";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <MultiStepFormCard />
    </Provider>
  );
}

export default App;
