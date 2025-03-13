export default function OurStory() {
    return (
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 text-center mb-10 leading-relaxed">
            Our journey began in **2015**, with a simple yet powerful dream – to bring the taste of **authentic, homemade** 
            food to every table. What started as a small kitchen with a handful of traditional recipes soon turned into 
            a **beloved brand**, cherished by food lovers across the country.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co/BVnSv34m/image.png" 
                alt="Our Story"
                className="w-full max-w-md rounded-lg shadow-lg"
              />
            </div>
  
            {/* Right - Text */}
            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-4">What Makes Us Special?</h3>
              <p className="text-gray-700 mb-4">
                At the heart of our brand is a commitment to **quality, tradition, and innovation**. Every dish we create 
                carries the warmth of **home-cooked meals**, made with handpicked ingredients and a deep respect for flavors 
                that have stood the test of time.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>💚 **Authentic Recipes** – Passed down through generations, bringing the **true essence of homemade food**.</li>
                <li>🌿 **Premium Ingredients** – We source only the **freshest and finest ingredients** to ensure top-notch quality.</li>
                <li>🚀 **Innovation & Passion** – Blending traditional flavors with modern techniques for **unforgettable taste**.</li>
              </ul>
            </div>
          </div>
  
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-4">More Than Just Food – A Promise of Happiness</h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We believe that food is more than just sustenance – it's an **experience**. It’s the joy of sharing a meal with loved ones, 
              the comfort of familiar flavors, and the excitement of trying something new. Our mission is to bring **delight to every bite**, 
              ensuring that every product you receive is crafted with **love, care, and dedication**.
            </p>
          </div>
        </div>
      </section>
    );
  }
  