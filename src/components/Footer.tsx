import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t mt-10 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left side - Copyright */}
        <div>© {new Date().getFullYear()} <span className="font-semibold text-white">FAM-TEK</span>. All rights reserved.</div>
        
        {/* Center - Links */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Help</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
        
        {/* Right side - Social Media */}
        <div className="flex gap-4">
          <a
            href="https://web.facebook.com/search/top?q=fam-tek%20gadgets"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-blue-600 transition"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-sky-500 transition"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/famtek_global_ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-pink-500 transition"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-blue-700 transition"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
