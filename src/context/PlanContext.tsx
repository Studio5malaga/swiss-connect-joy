import { createContext, useContext, useState, ReactNode } from "react";

export type Plan = "A" | "B";
export type Profile = "senior" | "junior";
export type Pass = "4d" | "3d";

type Ctx = {
  plan: Plan;
  profile: Profile;
  pass: Pass;
  setPlan: (p: Plan) => void;
  setProfile: (p: Profile) => void;
  setPass: (p: Pass) => void;
};

const PlanContext = createContext<Ctx | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Plan>("A");
  const [profile, setProfile] = useState<Profile>("senior");
  const [pass, setPass] = useState<Pass>("4d");
  return (
    <PlanContext.Provider value={{ plan, profile, pass, setPlan, setProfile, setPass }}>
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be inside PlanProvider");
  return ctx;
}
