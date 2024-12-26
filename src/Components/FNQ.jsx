
const FNQ = () => {
    return (
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Queries
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How do I submit a query?
              </h3>
              <p className="text-gray-600">
                To submit a query, log in to your account, navigate to the &quot;Submit
                Query&quot; page, and fill out the form with your question.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Can I update my queries later?
              </h3>
              <p className="text-gray-600">
                Yes, you can edit or delete your queries at any time by visiting
                your dashboard and selecting the query you want to modify.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How are recommendations provided?
              </h3>
              <p className="text-gray-600">
                Recommendations are provided based on the input from our
                community and verified experts, ensuring reliable advice tailored
                to your needs.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Is the platform secure?
              </h3>
              <p className="text-gray-600">
                Yes, we use advanced security measures to protect your data and
                ensure a safe browsing experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default FNQ;