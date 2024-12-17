import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Sección Sobre Nosotros */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Sobre HydroData</h3>
            <p className="text-gray-300">
              Somos expertos en análisis de ecosistemas fluviales, 
              proporcionando informes técnicos detallados para la 
              gestión y conservación de los ríos de Chile.
            </p>
          </div>

          {/* Sección de Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <MapPinIcon className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Santiago, Chile</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <EnvelopeIcon className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <a href="mailto:contacto@hydrodata.cl" className="text-gray-300 hover:text-white transition-colors">
                  contacto@hydrodata.cl
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <PhoneIcon className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <a href="tel:+56912345678" className="text-gray-300 hover:text-white transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de Enlaces Rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Tipos de Informes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} HydroData. Todos los derechos reservados.
            </p>
            <p className="text-gray-400">
              Diseñado por <span className="text-blue-400 font-medium">G.Medina</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
