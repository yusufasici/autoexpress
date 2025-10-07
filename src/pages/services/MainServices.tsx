import React from "react";
import ServicesPage from "./ServicesPage";
import heroImage from "@/assets/hero-locksmith4.jpg";

const allServices = [
  // Automotive
  "Car Locked Out",
  "Car All Key Lost",
  "Car Key Copy",
  "Car Ignition Repair",
  "Car Key Replacement",
  "Motorcyle Locksmith",
  "Car Speare Key",
  // Residential
  "House Locked Out",
  "Lock Cahange",
  "Lock Rekeying",
  "Lock Repair",
  "Lock Installation",
  "Mailbox Lock Change",
  // Commercial
  "Businss Locked Out",
  "Master Key System",
  "Lock Cahange",
  "Lock Rekeying",
  "Lock Repair",
  "Lock Installation",
];

const MainServices: React.FC = () => (
  <ServicesPage
    title="Our Locksmith Services"
    description="Explore our full range of automotive, residential, and commercial locksmith services. Click any service below to learn more or request immediate help."
    heroImage={heroImage}
    services={allServices}
  >
    {/* Optionally add more content here */}
  </ServicesPage>
);

export default MainServices;
