import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="group relative bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite] transform -translate-x-full group-hover:translate-x-full" />
      </div>

      <div className="relative z-10 space-y-4">
        {/* Icono */}
        <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-400 transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>

        {/* Título */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        {/* Lista de características */}
        <ul className="space-y-2 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
              <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
