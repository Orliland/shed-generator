import "./App.css";

import { TooltipProvider } from "#components/ui/tooltip";
import FloorForm from "#components/FloorForm";

function App() {
  return (
    <TooltipProvider>
      {/* TODO: ADD STYLES FOR MOBILE DEVICES */}
      <main className="p-6 grid grid-cols-2 grid-rows-1 w-full max-w-360 mx-auto h-dvh">
        <FloorForm className="w-full max-w-3xs" />
      </main>
    </TooltipProvider>
  );
}

export default App;
