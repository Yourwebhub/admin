
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-light dark:bg-dark text-gray-900 dark:text-light px-6 py-12 transition-colors duration-200">
      <div className=" md:px-12  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Column */}
          <div className="space-y-6">
            <div className="relative">
              {/* Light mode logo */}
              <img
                src="/your-hub.png"
                alt="Jaidoo Empire Logo"
                width={200}
                height={80}
                className="mb-4 dark:hidden"
              />
              {/* Dark mode logo - using the same logo as it's already suitable for dark mode */}
              <img
                src="/your-hub.png"
                alt="Jaidoo Empire Logo"
                width={200}
                height={80}
                className="mb-4 hidden dark:block"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-200">
              At <b>Your Web Hub</b>, we provide custom software development and IT services designed to elevate your business. Our team delivers innovative solutions with expertise and reliability.
            </p>
            <div className="flex gap-4">
              <Link 
              target="_blank" 
                href="https://www.facebook.com/share/1A1VpbLS96/" 
                className="bg-bllue dark:bg-blue-700 p-2 rounded-full hover:bg-blue-700 dark:hover:bg-bllue transition-colors"
              >
                <Facebook className="w-5 h-5 text-light" />
              </Link>
              <Link 
              target="_blank" 
                href="https://www.instagram.com/your_webhub/?igsh=MXJwdHc5Nms2bDkzNQ%3D%3D#" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-full hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-5 h-5 text-light" />
              </Link>
              <Link
              target="_blank" 
                href="https://www.linkedin.com/company/your-web-hub" 
                className="bg-bllue dark:bg-blue-700 p-2 rounded-full hover:bg-blue-700 dark:hover:bg-bllue transition-colors"
              >
                <Linkedin className="w-5 h-5 text-light" />
              </Link>
              <Link
                href="mailto:mitraroni15@gmail.com" 
                className="bg-blue-400 dark:bg-blue-500 p-2 rounded-full hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
              >
                <Send className="w-5 h-5 text-light" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-bllue dark:text-blue-400 text-xl font-semibold mb-4 transition-colors duration-200">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                {service:"Web Development",url:"/service/web-development"},
                {service:"App Development",url:"/service/app-development"},
                {service:"SEO",url:"/service/seo"},
                {service:"Wordpress",url:"/service/wordpress"},
                {service:"Social Media Marketing",url:"/service/marketing"},
              ].map(({service,url}) => (
                <li key={service}>
                  <Link 
                    href={url}
                    className="text-gray-600 dark:text-gray-400 hover:text-bllue dark:hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages Column */}
          <div>
            <h4 className="text-bllue dark:text-blue-400 text-xl font-semibold mb-4 transition-colors duration-200">
              Our Pages
            </h4>
            <ul className="space-y-3">
              {[
                "team",
                "about",
                "contact",
                "service",
                "projects",
                "proposal",
                "blog",
              ].map((page) => (
                <li key={page}>
                  <Link 
                    href={`/${page}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-bllue dark:hover:text-blue-400 transition-colors capitalize"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Freelancing Platforms Column */}
          <div>
            <h4 className="text-bllue dark:text-blue-400 text-xl font-semibold mb-4 transition-colors duration-200">
              Freelancing Platforms
            </h4>
            <ul className="space-y-3">
  {[
    { platform: "Upwork", url: "https://www.upwork.com" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/your-web-hub" },
    { platform: "Fiverr", url: "https://www.fiverr.com" },
    { platform: "Freelancer", url: "https://www.freelancer.com" },
  ].map(({ platform, url }) => (
    <li key={platform}>
      <Link 
        href={url} 
        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {platform}
      </Link>
    </li>
  ))}
</ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400 transition-colors duration-200">
          Powered By  <span className=" font-bold">Your web hub</span> &copy; 2025. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
