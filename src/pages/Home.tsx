import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            <span className="gradient-text">3D Portfolio</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            Anoof MA - CEO & Visionary Leader
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Explore interactive 3D models showcasing cutting-edge web technologies
            and immersive digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/gallery"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-blue-500/50"
            >
              View Gallery
            </Link>
            <a
              href="#about"
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">About</span>
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">About Anoof MA</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Anoof MA is a visionary leader and the driving force behind thiscompany. 
              With a passion for innovation and a commitment to excellence, Anoof has 
              transformed the company into a leader in its field.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This portfolio showcases the intersection of technology and creativity, 
              featuring interactive 3D models built with industry-leading web technologies 
              including React, TypeScript, Three.js, and React Three Fiber.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="text-lg font-semibold mb-2">High Performance</h4>
              <p className="text-gray-400 text-sm">
                Optimized 3D rendering for smooth 60fps experiences
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="text-lg font-semibold mb-2">Responsive Design</h4>
              <p className="text-gray-400 text-sm">
                Seamless experience across all devices and screen sizes
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="text-lg font-semibold mb-2">Modern Stack</h4>
              <p className="text-gray-400 text-sm">
                Built with React, TypeScript, Three.js, and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
