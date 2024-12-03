// components/DefyingReality.js
export default function DefyingReality() {
    return (
      <div className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">01</h3>
              <p className="text-lg">In-house production</p>
            </div>
            {/* Card 2 */}
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">02</h3>
              <p className="text-lg">Technical support</p>
            </div>
            {/* Card 3 */}
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">03</h3>
              <p className="text-lg">Available around the world</p>
            </div>
            {/* Card 4 */}
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold mb-2">04</h3>
              <p className="text-lg">5,000+ safe flights</p>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Text */}
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-12">
              <h2 className="text-3xl font-bold mb-4">
                More than 10 years <br />
                defying reality
              </h2>
            </div>
  
            {/* Right Text */}
            <div className="lg:w-1/2">
              <p className="text-gray-700 mb-6">
                One of the keys to our success is our in-house production. As a
                result of our investments in R&D and our expert team, we are able
                to manufacture hyper-realistic flying replicas of all shapes and
                sizes and deliver them anywhere in the world. With over 10 years
                of providing a dedicated, high-quality service and over 5,000
                successful flights, we have established ourselves as a world
                leader.
              </p>
  
              {/* Button */}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  