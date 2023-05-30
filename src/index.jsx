// Import statement to indicate that you need to bundle `./index.scss`
import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import "./index.scss";

// Main component (will eventually use all the others)
const CinedexApplication = () => {
  return <MainView />;
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<CinedexApplication />);
