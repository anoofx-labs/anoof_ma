import { ModelCard } from '../components/ModelCard';
import { models } from '../utils/modelsData';

export const Gallery = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">3D Model Gallery</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our collection of interactive 3D models. Click on any model to view it in full screen with advanced controls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>

        <div className="mt-16 bg-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Interactive Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">🖱️ Rotate</h3>
              <p className="text-gray-400">Click and drag to rotate the model</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">🔍 Zoom</h3>
              <p className="text-gray-400">Scroll or pinch to zoom in/out</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">👆 Pan</h3>
              <p className="text-gray-400">Right-click and drag to pan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
