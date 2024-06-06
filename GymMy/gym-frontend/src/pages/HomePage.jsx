import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <div
        className="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
        style={{ backgroundImage: 'url("http://example.com/your-image.jpg")' }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm uppercase">Services</p>
          <p className="text-3xl font-bold">Hello world</p>
          <p className="text-2xl mb-10 leading-none">Join our team</p>
          <a
            href="#"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-700"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* <!-- Posts and Testimonials --> */}
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-4">
            {/* <!-- Posts --> */}
            <div className="col-span-2">
                {/* <!-- Post 1 --> */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
                    <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2">#winter</span>
                    </div>
                </div>
                {/* <!-- Post 2 --> */}
                {/* <!-- Add more posts here --> */}
            </div>
            {/* <!-- Testimonials --> */}
            <div className="col-span-1">
                <div className="rounded overflow-hidden shadow-lg my-2">
                    <div className="px-6 py-4">
                        <p className="text-gray-700 text-base italic">
                        "Best gym experience ever. Great facilities and staff."
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <p className="text-sm font-semibold text-gray-700">- John Doe</p>
                    </div>
                </div>
                {/* <!-- More testimonials here --> */}
            </div>
        </div>
    </div>
    </div>
  );
};

export default HomePage;
