export default function OurProcess() {
    const processSteps = [
      {
        id: 1,
        title: "Sourcing the Finest Ingredients",
        description:
          "We carefully handpick high-quality ingredients from trusted farmers and suppliers.",
        icon: "🌿",
      },
      {
        id: 2,
        title: "Traditional & Hygienic Preparation",
        description:
          "Our food is crafted using authentic recipes while maintaining strict hygiene standards.",
        icon: "👨‍🍳",
      },
      {
        id: 3,
        title: "Fresh & Secure Delivery",
        description:
          "Advanced packaging techniques ensure your food stays fresh and flavorful when delivered.",
        icon: "🚚",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Process</h2>
          <p className="text-gray-600 mb-10">
            We handpick the finest ingredients, follow traditional methods, and use advanced packaging to ensure freshness.
          </p>
  
          {/* Grid Layout for Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="text-4xl">{step.icon}</div>
                <h3 className="text-xl font-semibold text-green-600 mt-4">{step.title}</h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  