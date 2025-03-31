import { useState } from "react";
import { Log } from "./Log/Log";
import { Home } from "./Home/Home";
import { Stats } from "./Stats/Stats";

export type Variant = "Home" | "Stats" | "Log";

export const App = () => {
  const [activeVariant, setActiveVariant] = useState<Variant>("Home");

  return (
    <div className="flex h-screen flex-row">
      <Home
        activeVariant={activeVariant}
        setFunction={() => setActiveVariant("Home")}
      />
      <Stats
        activeVariant={activeVariant}
        setFunction={() => setActiveVariant("Stats")}
      />
      <Log
        activeVariant={activeVariant}
        setFunction={() => setActiveVariant("Log")}
      />
    </div>
  );
};
