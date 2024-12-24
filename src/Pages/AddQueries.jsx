import moment from "moment/moment";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddQueries = () => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddQueries = e => {
        e.preventDefault()

        const form = new FormData(e.target);
        const productName = form.get('productName');
        const productBrand = form.get('productBrand');
        const productImageUrl = form.get('productImageUrl');
        const queryTitle = form.get('queryTitle');
        const boycottingReasonDetails = form.get('boycottingReasonDetails');
        const currentDateTime = moment().format('DD-MM-YYYY, h:mm a');
        const recommendationCount = 0
        const userEmail = user.email
        const userName = user.displayName
        const userProfileImage  = user.photoURL

        const newQueries = {productName , productBrand , productImageUrl , queryTitle , boycottingReasonDetails , currentDateTime , recommendationCount , userEmail , userName , userProfileImage}
        
        axios.post('http://localhost:5000/queries' , newQueries)
        .then(res => {
            console.log(res.data);
            Swal.fire({
              title: "Successfully Added Your Queries!",
              icon: "success",
              draggable: true
            });
            navigate('/myQueries')
        })

        e.target.reset()
    }


    return (
      <div className="max-w-3xl mx-auto p-6 my-20 bg-white shadow-lg rounded-lg">
        <h2 className="text-4xl text-center font-semibold text-gray-800 mb-10">Added Your Query</h2>
        <form onSubmit={handleAddQueries}>
          {/* Product Name */}
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">Product Name <span className="text-red-600">*</span></label>
            <input 
              type="text" 
              id="productName" 
              name="productName"
              required
              placeholder="Enter product name" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
  
          {/* Product Brand */}
          <div className="mb-4">
            <label htmlFor="productBrand" className="block text-sm font-medium text-gray-700 mb-2">Product Brand <span className="text-red-600">*</span></label>
            <input 
              type="text" 
              id="productBrand" 
              name="productBrand"
              required
              placeholder="Enter product brand" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
  
          {/* Product Image URL */}
          <div className="mb-4">
            <label htmlFor="productImageUrl" className="block text-sm font-medium text-gray-700 mb-2">Product Image URL <span className="text-red-600">*</span></label>
            <input 
              type="text" 
              id="productImageUrl" 
              name="productImageUrl"
              required
              placeholder="Enter image URL" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
  
          {/* Query Title */}
          <div className="mb-4">
            <label htmlFor="queryTitle" className="block text-sm font-medium text-gray-700 mb-2">Query Title <span className="text-red-600">*</span></label>
            <input 
              type="text" 
              id="queryTitle" 
              name="queryTitle"
              required
              placeholder="Enter your query title" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
  
          {/* Boycotting Reason Details */}
          <div className="mb-4">
            <label htmlFor="boycottingReasonDetails" className="block text-sm font-medium text-gray-700 mb-2">Boycotting Reason Details <span className="text-red-600">*</span></label>
            <textarea 
              id="boycottingReasonDetails" 
              name="boycottingReasonDetails"
              rows="4" 
              required
              placeholder="Explain your reasons here" 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
  
          {/* Add Query Button */}
          <div className="text-right">
            <button 
              type="submit" 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Query
            </button>
          </div>
        </form>
      </div>
    );
  };
  
export default AddQueries;