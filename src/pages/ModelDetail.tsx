import { useParams, Link, useNavigate } from 'react-router-dom';
import { ModelViewer } from '../components/ModelViewer';
import { models } from '../utils/modelsData';

export const ModelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const model = models.find((m) => m.id === id);

  if (!model) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Model Not Found</h1>
          <Link to="/gallery" className="text-blue-400 hover:text-blue-300">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = models.findIndex((m) => m.id === id);
  const prevModel = currentIndex > 0 ? models[currentIndex - 1] : null;
  const nextModel = currentIndex < models.length - 1 ? models[currentIndex + 1] : null;

  return (
    <div className="min-h-screen pt-16">
      <div className="h-screen flex flex-col">
        <div className="flex-1 relative">
          <ModelViewer model={model} enableControls={true} autoRotate={false} />
          
          <button
            onClick={() => navigate('/gallery')}
            className="absolute top-4 left-4 z-10 px-4 py-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <span>←</span> Back to Gallery
          </button>

          <div className="absolute top-4 right-4 z-10 flex gap-2">
            {prevModel && (
              <Link
                to={`/model/${prevModel.id}`}
                className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 rounded-lg transition-colors"
                title={`Previous: ${prevModel.name}`}
              >
                ←
              </Link>
            )}
            {nextModel && (
              <Link
                to={`/model/${nextModel.id}`}
                className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 rounded-lg transition-colors"
                title={`Next: ${nextModel.name}`}
              >
                →
              </Link>
            )}
          </div>
        </div>

        <div className="bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 p-6">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{model.name}</h1>
                <p className="text-gray-400 mb-4">{model.description}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
                    Type: {model.type}
                  </span>
                  <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                    Metalness: {model.metalness ?? 0.5}
                  </span>
                  <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                    Roughness: {model.roughness ?? 0.5}
                  </span>
                  {model.wireframe && (
                    <span className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full">
                      Wireframe Mode
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-400">
                  <p>🖱️ Left click + drag to rotate</p>
                  <p>🔍 Scroll to zoom</p>
                  <p>👆 Right click + drag to pan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
