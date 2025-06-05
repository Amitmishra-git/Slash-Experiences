import React from "react";

function ExperienceCatalog() {
  // Placeholder data
  const experiences = [
    { title: "Skydiving", price: 200, location: "NY", tags: ["adventure"] },
    { title: "Wine Tasting", price: 50, location: "CA", tags: ["relax"] },
  ];

  return (
    <section>
      <h2>Experience Catalog</h2>
      <input placeholder="Search experiences..." />
      <div>
        {experiences.map((exp, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
            <h3>{exp.title}</h3>
            <p>Price: ${exp.price}</p>
            <p>Location: {exp.location}</p>
            <p>Tags: {exp.tags.join(", ")}</p>
            <button>Book</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceCatalog;