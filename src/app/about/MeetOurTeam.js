export default function MeetOurTeam() {
    const team = [
      {
        id: 1,
        name: "Ravi Kant",
        role: "Head Chef",
        image: "https://i.ibb.co/cmKJYbM/image.png", // Replace with your actual images
      },
      {
        id: 2,
        name: "Gaurav Shankar",
        role: "Co-Founder & Recipe Creator",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQGcjosKmjqsNg/profile-displayphoto-shrink_400_400/B4DZPBfnd1HMAg-/0/1734118112161?e=1746662400&v=beta&t=4RLt-GZj7PJgd03m3v9yS18YXrTBj132hiu2GykJTgE",
      },
      {
        id: 3,
        name: "Saurav Shankar",
        role: "Operations Manager",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFcQjKGj_dUbw/profile-displayphoto-shrink_400_400/B56ZOw0apDGkAk-/0/1733838356829?e=1746662400&v=beta&t=NAVhKT0biGm1sMBGjvqzaaEjt_i_wQ1vswC-Zfah7PU",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 mb-10">
            Meet our passionate team of chefs and food lovers who craft every bite with perfection.
          </p>
  
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg"
                />
                <h3 className="text-lg font-semibold text-green-600 mt-4">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  