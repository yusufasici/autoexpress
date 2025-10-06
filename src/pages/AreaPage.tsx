import React from "react";

interface AreaPageProps {
  city: string;
  phone?: string;
}

const AreaPage: React.FC<AreaPageProps> = ({ city, phone = "(647) 906-8124" }) => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Locksmith {city} – 24/7 Local Locksmith Services
      </h1>
      <p className="mb-6 text-lg text-muted-foreground">
        Need a locksmith in {city}? AutoKey Express offers fast, reliable, and professional locksmith services for vehicles, homes, and businesses across {city}. Whether you’re locked out, need a key replacement, or want to upgrade your security, our mobile team is ready to help 24/7.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Car, home, and business lockouts</li>
        <li>Key replacement & duplication</li>
        <li>Lock rekeying & installation</li>
        <li>Ignition repair</li>
        <li>Emergency locksmith service</li>
      </ul>
      <p className="mb-4">
        Serving all neighborhoods in {city}. Call us now for immediate assistance!
      </p>
      <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
        Call {phone}
      </a>
    </div>
  </section>
);

export default AreaPage;
