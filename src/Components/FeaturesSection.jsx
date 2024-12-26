import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const FeaturesSection = () => {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Why Choose Our Q&A Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div data-aos="fade-right" data-aos-duration="2000" className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-5xl text-indigo-600 mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Get Expert Answers
              </h3>
              <p className="text-gray-600">
                Connect with verified experts to receive accurate and detailed answers to your questions.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000" className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-5xl text-purple-600 mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community-Driven
              </h3>
              <p className="text-gray-600">
                Join a global community of contributors who provide insights, share experiences, and engage in discussions.
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-5xl text-green-600 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Find Your Answers Quickly
              </h3>
              <p className="text-gray-600">
                Use advanced search and filtering options to discover relevant answers in no time.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default FeaturesSection;
