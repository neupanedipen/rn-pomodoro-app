import AppContextProvider from "../context/AppContext";
import Home from "./Home";
import Onboarding from "./onboarding";

const Page = () => {
  return <AppContextProvider>
    <Onboarding />
  </AppContextProvider>
}

export default Page