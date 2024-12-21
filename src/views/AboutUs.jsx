import React from "react";

const AboutUs = () => {
  const teamMembers = [
    { name: "Bob Doe", role: "Director" },
    { name: "Jane Smith", role: "Director" },
    { name: "Alice Brown", role: "Director" },
  ];


  return (
    <section className="about-us">
      <h2 className="text-center">Our mission</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h2 className="text-center mt-5">Our history</h2>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h2 className="text-center mt-5">Our team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member-photo"></div>
            <div className="team-member-info">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
