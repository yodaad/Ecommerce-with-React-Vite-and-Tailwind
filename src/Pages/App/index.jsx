import { AppUI } from "../../Components/AppUI";
import { CartCountProvider } from "../../Context";
import "./App.css";

const App = () => {
  return (
    <CartCountProvider>
      <AppUI />
    </CartCountProvider>
  );
};

export default App;
