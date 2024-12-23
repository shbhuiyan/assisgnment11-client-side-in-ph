import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from "../../Assets/banner1.jpg"
import banner2 from "../../Assets/Banner2.png"
import banner3 from "../../Assets/banner3.png"



const Banner = () => {
    return (
            <>
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper mt-10 max-md:text-center"
              >
                {/* slider - 1 */}
                    <SwiperSlide>
                       <div className="flex max-md:flex-col items-center gap-6">
                        <div className="space-y-4">
                         <h1 className="text-4xl md:text-7xl font-bold">Personalized Recommendations, Just for You</h1>
                         <p className="text-lg md:text-xl">Find the perfect product based on your preferences and needs. We make shopping smarter and easier.</p>
                        </div>
                        <div className="max-w-3xl">
                         <img src={banner1} alt="" />
                        </div>
                       </div>
                    </SwiperSlide>

                    {/* slider - 2 */}
                    <SwiperSlide>
                       <div className="flex max-md:flex-col items-center gap-6">
                        <div className="space-y-4 md:w-1/2">
                         <h1 className="text-4xl md:text-7xl font-bold">Real Queries, Real Answers</h1>
                         <p className="text-lg md:text-xl">Post your queries and get tailored recommendations from our community and experts.</p>
                        </div>
                        <div className="">
                         <img src={banner2} alt="" />
                        </div>
                       </div>
                    </SwiperSlide>

                    {/* slider - 3 */}
                    <SwiperSlide>
                       <div className="flex max-md:flex-col items-center gap-6">
                        <div className="space-y-4 md:w-1/2">
                         <h1 className="text-4xl md:text-7xl font-bold">Secure and Seamless Experience</h1>
                         <p className="text-lg md:text-xl">Enjoy a secure, intuitive platform built to help you make the best choices effortlessly.</p>
                        </div>
                        <div className="max-w-4xl">
                         <img src={banner3} alt="" />
                        </div>
                       </div>
                    </SwiperSlide>
                    
              </Swiper>
            </>
    );
};

export default Banner;