import React from "react";
import ServicesPage from "./ServicesPage";
import heroAuto from "@/assets/hero-locksmith.jpg";

const automotiveServices = [
  "Car Locked Out",
  "Car All Key Lost",
  "Car Key Copy",
  "Car Ignition Repair",
  "Car Key Replacement",
];

const Automotive: React.FC = () => (
  <ServicesPage
    title="Automotive Locksmith Services"
    description="Fast, reliable car key replacement, lockout help, ignition repair, and more for all makes and models. 24/7 mobile service across the GTA."
    heroImage={heroAuto}
    services={automotiveServices}
  >
  </ServicesPage>
);

export default Automotive;
