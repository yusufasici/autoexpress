import React from "react";
import ServicesPage from "./ServicesPage";

const Residential: React.FC = () => (
  <ServicesPage
    title="Residential Locksmith Services"
    description="Home lockouts, rekeying, lock installation, and security upgrades. Protect your family and property with trusted local experts."
  >
    {/* Add detailed residential locksmith content here */}
    <div className="prose mx-auto">
      <h2>Our Residential Locksmith Services</h2>
      <ul>
        <li>Home lockout assistance</li>
        <li>Lock rekeying & replacement</li>
        <li>Deadbolt & smart lock installation</li>
        <li>Door repair & reinforcement</li>
        <li>Mailbox & safe opening</li>
        <li>Security consultations</li>
      </ul>
      <p>We use only high-quality hardware and offer same-day service for urgent needs. Your safety is our top priority.</p>
    </div>
  </ServicesPage>
);

export default Residential;
