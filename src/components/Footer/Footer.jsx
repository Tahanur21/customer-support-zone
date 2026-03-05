import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-10 py-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 border-b pb-10">

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Customer Support Zone</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Customer Support Zone is a modern platform designed to manage customer
            support tickets efficiently. It helps teams track issues, respond quickly
            to customers, and organize support requests in one place to deliver better
            service and faster solutions.
          </p>
        </div>

        <div className="space-y-3">
          <h6 className="text-white font-semibold">Company</h6>
          <a className="block hover:text-white">About Us</a>
          <a className="block hover:text-white">Our Mission</a>
          <a className="block hover:text-white">Contact Sales</a>
        </div>

        <div className="space-y-3">
          <h6 className="text-white font-semibold">Services</h6>
          <a className="block hover:text-white">Ticket Management</a>
          <a className="block hover:text-white">Customer Support Tools</a>
          <a className="block hover:text-white">Help Center</a>
        </div>

        <div className="space-y-3">
          <h6 className="text-white font-semibold">Information</h6>
          <a className="block hover:text-white">Privacy Policy</a>
          <a className="block hover:text-white">Terms & Conditions</a>
          <a className="block hover:text-white">Join Our Team</a>
        </div>

        <div className="space-y-3">
          <h6 className="text-white font-semibold">Social Links</h6>

          <div className="flex items-center gap-3">
            <FaXTwitter />
            <span>@CustomerSupportZone</span>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedinIn />
            <span>Customer Support Zone</span>
          </div>

          <div className="flex items-center gap-3">
            <FaFacebookF />
            <span>Customer Support Zone</span>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail />
            <span>support@customersupportzone.com</span>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-400 pt-6">
        © 2025 Customer Support Zone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;