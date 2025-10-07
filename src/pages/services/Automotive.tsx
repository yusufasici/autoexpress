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
    {/* Add detailed automotive locksmith content here */}
    <div className="prose mx-auto">
      <h2>Our Automotive Locksmith Services</h2>
      <ul>
        <li>Car key replacement & programming</li>
        <li>Emergency vehicle lockout</li>
        <li>Ignition repair & replacement</li>
        <li>Broken key extraction</li>
        <li>Remote & fob programming</li>
        <li>Trunk unlocking</li>
      </ul>
      <p>We service all makes and models, including luxury and high-security vehicles. Our mobile team comes to you, day or night.</p>
    </div>
  </ServicesPage>
);

export default Automotive;
