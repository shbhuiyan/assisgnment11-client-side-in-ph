import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import Swal from "sweetalert2";
import RecommendationCard from "../Components/cards/RecommendationCard";

const QueryDetails = () => {
  const [recommendations , setRecommendations] = useState([])

  const { user } = useContext(AuthContext);
  const queryDetails = useLoaderData()

  const {productName , productBrand , productImageUrl , queryTitle , boycottingReasonDetails , userEmail , userName , currentDateTime , _id} = queryDetails[0]

  // add recommendations
  const handleAddRecommendation = e => {
    e.preventDefault()

    const form = new FormData(e.target)
    const recommendationTitle = form.get('recommendationTitle')
    const recommendedProductName = form.get('recommendedProductName')
    const recommendedImageUrl = form.get('recommendedImageUrl')
    const recommendationReason = form.get('recommendationReason')
    const queryId = _id
    const itemTitle = queryTitle
    const itemName = productName
    const creatorEmail = userEmail
    const creator = userName
    const currentUserEmail = user?.email
    const currentUserName = user?.displayName
    const currentDateTime = moment().format('DD-MM-YYYY, h:mm a');

    const recommendation = {recommendationTitle , recommendedProductName , recommendedImageUrl , recommendationReason , queryId , itemTitle , itemName , creatorEmail , creator , currentUserEmail , currentUserName , currentDateTime};

    axios.post('http://localhost:5000/recommendations' , recommendation)
    .then(res => {
      if(res.data.insertedId){
                    Swal.fire({
                      title: "Successfully Added Your Recommendation!",
                      icon: "success",
                      // draggable: true
                    });
                  }
    })

    e.target.reset();
    // after submitting modal close 
    const modal = document.getElementById("my_modal_3")
    modal.close();

  }


  // get recommendation api with useEffect
  useEffect(() => {
    axios.get(`http://localhost:5000/recommendations/${_id}`)
    .then(res => {
      setRecommendations(res.data);
    })
  },[_id])

  return (
    <div>
      {/* Query Details */}
        <h1 className="text-4xl text-center font-bold my-6">Query Details</h1>
        {/* details section */}
      <section className="max-w-4xl mx-auto p-6 bg-white shadow-md my-8 rounded-lg border flex max-md:flex-col gap-10 items-center">
        <div className="rounded-lg">
            <img className="w-48 rounded-lg" src={productImageUrl} alt={productName} />
        </div>
        <div className="flex items-end">
            <div className="space-y-2">
                <p>
                  <span className="font-semibold">Product Name : </span> {productName}
                </p>
                <p>
                  <span className="font-semibold">Product Brand : </span> {productBrand}
                </p>
                <p>
                  <span className="font-semibold">Description : </span> {queryTitle}
                </p>
                <p>
                  <span className="font-semibold">Boycott Reason : </span> {boycottingReasonDetails}
                </p>
                <p>
                  <span className="font-semibold">Posted Time : </span> {currentDateTime}
                </p>
                <p>
                  <span className="font-semibold">Posted By : </span> {userName}
                </p>
                <p>
                  <span className="font-semibold">Email : </span> {userEmail}
                </p>
            </div>
                <button className="btn btn-outline btn-secondary text-base" onClick={()=>document.getElementById('my_modal_3').showModal()}>Add Recommendation</button>
        </div>
      </section>
      
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="ring ring-red-500 text-red-500 btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>

          {/* Add A Recommendation */}
        <section className="py-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Add A Recommendation</h2>
          <form onSubmit={handleAddRecommendation} className="space-y-4">
            <div>
              <label
                className="block font-semibold mb-2"
                htmlFor="recommendation-title"
              >
                Recommendation Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="recommendation-title"
                name="recommendationTitle"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2"
                htmlFor="recommended-product-name"
              >
                Recommended Product Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="recommended-product-name"
                name="recommendedProductName"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2"
                htmlFor="recommended-image-url"
              >
                Recommended Product Image URL <span className="text-red-600">*</span>
              </label>
              <input
                type="url"
                id="recommended-image-url"
                name="recommendedImageUrl"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2"
                htmlFor="recommendation-reason"
              >
                Recommendation Reason <span className="text-red-600">*</span>
              </label>
              <textarea
                id="recommendation-reason"
                name="recommendationReason"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                Add Recommendation
              </button>
            </div>
          </form>
        </section>

        </div>
      </dialog>


      {/* Show Recommendations */}
      <section className="my-20">
        <h1 className="text-3xl text-center font-bold my-10">Recommendation For This Product</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            recommendations.map(recommend => <RecommendationCard key={recommend._id} recommend={recommend} /> )
          }
        </div>
      </section>

      {/* All Recommendations */}
      {/* <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">All Recommendations</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Best Performance Laptop</h3>
            <p>
              <span className="font-semibold">Product Name:</span> ASUS ROG
              Zephyrus G14
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Recommended Product"
              className="my-2 w-32 h-32 object-cover rounded-lg"
            />
            <p>
              <span className="font-semibold">Reason:</span> This laptop offers
              the best performance for gaming within the budget.
            </p>
            <p>
              <span className="font-semibold">Recommended By:</span> Alice Smith
            </p>
            <p>
              <span className="font-semibold">Date:</span> 2024-12-24
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-lg">Value for Money</h3>
            <p>
              <span className="font-semibold">Product Name:</span> Acer Nitro 5
            </p>
            <img
              src="https://via.placeholder.com/150"
              alt="Recommended Product"
              className="my-2 w-32 h-32 object-cover rounded-lg"
            />
            <p>
              <span className="font-semibold">Reason:</span> Affordable and
              efficient for mid-range gaming.
            </p>
            <p>
              <span className="font-semibold">Recommended By:</span> Bob
              Johnson
            </p>
            <p>
              <span className="font-semibold">Date:</span> 2024-12-23
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};


export default QueryDetails;