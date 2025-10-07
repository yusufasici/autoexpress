import React from "react";
import ServicesPage from "./ServicesPage";
import heroHome from "@/assets/residential-lock.jpg";

const residentialServices = [
  "House Locked Out",
  "Lock Change",
  "Lock Rekeying",
  "Lock Repair",
  "Lock Installation",
  "Mailbox Lock Change",
];

const Residential: React.FC = () => (
  <ServicesPage
    title="Residential Locksmith Services"
    description="Home lockouts, rekeying, lock installation, and security upgrades. Protect your family and property with trusted local experts."
    heroImage={heroHome}
    services={residentialServices}
  >
  </ServicesPage>
);

export default Residential;
