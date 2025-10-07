import React from "react";
import ServicesPage from "./ServicesPage";
import heroBusiness from "@/assets/hero-locksmith6.jpg";

const commercialServices = [
  "Business Locked Out",
  "Master Key System",
  "Lock Change",
  "Lock Rekeying",
  "Lock Repair",
  "Lock Installation",
];

const Commercial: React.FC = () => (
  <ServicesPage
    title="Commercial Locksmith Services"
    description="Business lockouts, master key systems, access control, and security solutions for offices, retail, and industrial properties."
    heroImage={heroBusiness}
    services={commercialServices}
  >
  </ServicesPage>
);

export default Commercial;
