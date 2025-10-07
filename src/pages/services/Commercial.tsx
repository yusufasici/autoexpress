import React from "react";
import ServicesPage from "./ServicesPage";
import heroBusiness from "@/assets/hero-locksmith6.jpg";

const Commercial: React.FC = () => (
  <ServicesPage
    title="Commercial Locksmith Services"
    description="Business lockouts, master key systems, access control, and security solutions for offices, retail, and industrial properties."
    heroImage={heroBusiness}
  >
    {/* Add detailed commercial locksmith content here */}
    <div className="prose mx-auto">
      <h2>Our Commercial Locksmith Services</h2>
      <ul>
        <li>Business & office lockouts</li>
        <li>Master key systems</li>
        <li>High-security lock installation</li>
        <li>Access control systems</li>
        <li>Door closer & panic bar repair</li>
        <li>File cabinet & mailbox locks</li>
      </ul>
      <p>We help secure your business with modern solutions and fast response times. Custom security plans available for all property types.</p>
    </div>
  </ServicesPage>
);

export default Commercial;
