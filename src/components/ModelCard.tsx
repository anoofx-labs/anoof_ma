import { Link } from 'react-router-dom';
import { ModelViewer } from './ModelViewer';
import { Model3D } from '../types/model';

interface ModelCardProps {
  model: Model3D;
}

export const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <Link to={`/model/${model.id}`}>
      <div className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="h-64 bg-gray-900">
          <ModelViewer 
            model={model} 
            enableControls={false} 
            autoRotate={true}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {model.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {model.description}
          </p>
          <div className="mt-4 flex gap-2">
            <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full">
              {model.type}
            </span>
            {model.wireframe && (
              <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full">
                Wireframe
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
