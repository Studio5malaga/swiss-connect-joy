import { createContext, useContext, useState, ReactNode } from "react";

export type Plan = "B";
export type Profile = "senior" | "junior";
export type Pass = "4d";

type Ctx = {
  plan: Plan;
  profile: Profile;
  pass: Pass;
  setProfile: (p: Profile) => void;
};

const PlanContext = createContext<Ctx | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>("senior");
  return (
    <PlanContext.Provider value={{ plan: "B", pass: "4d", profile, setProfile }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be inside PlanProvider");
  return ctx;
}

