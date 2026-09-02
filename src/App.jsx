import "./App.css";

// TODO: import components using @
import { TooltipProvider } from "./components/ui/tooltip";
import FloorForm from "./components/FloorForm";

function App() {
  return (
    <TooltipProvider>
      <main className="p-6">
        <FloorForm />
      </main>
    </TooltipProvider>
  );
}

export default App;
