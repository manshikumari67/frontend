


export default function Footer() {
    return (
            <>
              {/* Separator above the footer */}
              <div className="bg-gray-600 h-4 mt-0"></div>
        
              {/* Footer */}
              <footer className="bg-gray-800 text-white py-6 mt-0">
                <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center">
                  
                  {/* About Us Section */}
                  <div className="w-full md:w-1/3 p-4">
                    <h4 className="text-lg font-semibold">About Us</h4>
                    <p>We are committed to providing innovative solutions for water management and conservation. Join us in making a difference!</p>
                  </div>
        
                  {/* Quick Links Section */}
                  <div className="w-full md:w-1/3 p-4">
                    <h4 className="text-lg font-semibold">Quick Links</h4>
                    <ul>
                      <li><a href="#home" className="text-blue-400 hover:underline">Home</a></li>
                      <li><a href="#ask-an-expert" className="text-blue-400 hover:underline">Ask an Expert</a></li>
                      <li><a href="#about" className="text-blue-400 hover:underline">About</a></li>
                      <li><a href="#contact" className="text-blue-400 hover:underline">Contact</a></li>
                    </ul>
                  </div>
        
                  {/* Contact Us Section */}
                  <div className="w-full md:w-1/3 p-4">
                    <h4 className="text-lg font-semibold">Contact Us</h4>
                    <ul>
                      <li>Email: info@aquaveda.com</li>
                      <li>Phone: +91 8540918939</li>
                      <li>Bengal College of Engineering and Technology, Durgapur, West Bengal, India</li>
                    </ul>
                  </div>
                </div>
        
                {/* Footer Bottom */}
                <div className="text-center py-4 border-t border-gray-700">
                  &copy; 2024 Aquaveda.com | All Rights Reserved
                </div>
              </footer>
            </>
          );
        }
        
     
