const Footer = () => {
  return (
    <footer className="mt-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">

        {/* Logo */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center lg:text-left">
          Zomato
        </h1>

        {/* Footer Links */}
        <div className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-8
          sm:gap-10
        ">
          
          {/* External */}
          <div>
            <p className="text-base sm:text-lg font-semibold mb-4">
              External
            </p>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base font-medium">
              <li className="hover:text-white cursor-pointer">Zomato</li>
              <li className="hover:text-white cursor-pointer">Blinkit</li>
              <li className="hover:text-white cursor-pointer">District</li>
              <li className="hover:text-white cursor-pointer">Hyperpure</li>
              <li className="hover:text-white cursor-pointer">Feeding India</li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div>
            <p className="text-base sm:text-lg font-semibold mb-4">
              For Restaurants
            </p>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base font-medium">
              <li className="hover:text-white cursor-pointer">Partner With Us</li>
              <li className="hover:text-white cursor-pointer">Apps For You</li>
              <li className="hover:text-white cursor-pointer">Restaurant Consulting</li>
            </ul>
          </div>

          {/* For Delivery Partners */}
          <div>
            <p className="text-base sm:text-lg font-semibold mb-4">
              For Delivery Partners
            </p>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base font-medium">
              <li className="hover:text-white cursor-pointer">Partner With Us</li>
              <li className="hover:text-white cursor-pointer">Apps For You</li>
              <li className="hover:text-white cursor-pointer">Apps For Delivery</li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <p className="text-base sm:text-lg font-semibold mb-4">
              Learn More
            </p>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base font-medium">
              <li className="hover:text-white cursor-pointer">Privacy</li>
              <li className="hover:text-white cursor-pointer">Security</li>
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Help & Support</li>
              <li className="hover:text-white cursor-pointer">Report a Fraud</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-base sm:text-lg font-semibold mb-4">
              Social Links
            </p>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base font-medium">
              <li className="hover:text-white cursor-pointer">Instagram</li>
              <li className="hover:text-white cursor-pointer">Twitter</li>
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
              <li className="hover:text-white cursor-pointer">Facebook</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed text-center lg:text-left">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy,
            Privacy Policy and Content Policies. All trademarks are properties of their
            respective owners.
            <br />
            2008–2026 © Zomato™ Ltd. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
