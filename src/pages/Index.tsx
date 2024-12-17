import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import MapSection from "../components/MapSection";
import ReportSelector, { Report } from "../components/ReportSelector";
import PaymentForm from "../components/PaymentForm";
import ServiceCard from "../components/ServiceCard";
import { toast } from "../components/ui/use-toast";
import { Button } from "../components/ui/button";
import { 
  MapPinIcon, 
  DocumentTextIcon, 
  CreditCardIcon,
  ChartBarIcon,
  BeakerIcon,
  DocumentMagnifyingGlassIcon
} from "@heroicons/react/24/outline";

interface Coordinates {
  lat: string;
  lng: string;
}

const WorkflowStep = ({ 
  icon: Icon, 
  title, 
  description, 
  number 
}: { 
  icon: React.ComponentType<{ className?: string }>, 
  title: string, 
  description: string, 
  number: number 
}) => (
  <div className="group flex flex-col items-center text-center space-y-4 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/10">
    <div className="relative">
      <div className="absolute -top-3 -left-3 bg-blue-600/30 w-12 h-12 rounded-full transition-transform duration-500 group-hover:scale-110"></div>
      <div className="relative z-10 bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg transition-transform duration-500 group-hover:scale-110">
        <span className="text-2xl font-bold">{number}</span>
      </div>
    </div>
    <Icon className="w-12 h-12 text-blue-300 mb-4 transition-transform duration-500 group-hover:scale-110" />
    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">{title}</h3>
    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{description}</p>
  </div>
);

const Index = () => {
  const [selectedCoordinates, setSelectedCoordinates] = useState<Coordinates | null>(null);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const handleCoordinatesSelect = (coords: Coordinates) => {
    setSelectedCoordinates(coords);
    toast({
      title: "Ubicación seleccionada",
      description: `Coordenadas: ${coords.lat}, ${coords.lng}`,
    });
  };

  const handleReportSelect = (report: Report) => {
    setSelectedReport(report);
    toast({
      title: "Informe seleccionado",
      description: `${report.name} - $${report.price.toLocaleString("es-CL")}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      ></div>
      <Header />
      <main className="container mx-auto px-4 py-8 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="hero-content space-y-8 py-24 px-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/20 relative overflow-hidden">
            <HeroCarousel />
            
            <div className="relative animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-teal-300 mb-6 leading-tight">
                HydroInformes Chile
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-8 max-w-4xl mx-auto tracking-wide">
                Análisis Técnico Profesional de Ecosistemas Fluviales
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explorar Informes
              </Button>
              <Button 
                variant="default" 
                size="lg" 
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Solicitar Consultoría
              </Button>
            </div>
          </div>
        </div>

        {/* Sección de servicios */}
        <section className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 mb-16">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<ChartBarIcon className="w-8 h-8" />}
              title="Análisis de Calidad"
              description="Evaluación completa de la calidad del agua y sus parámetros críticos"
              features={[
                "Medición de pH y temperatura",
                "Análisis de sedimentos",
                "Evaluación de contaminantes",
                "Reportes detallados"
              ]}
            />
            <ServiceCard
              icon={<BeakerIcon className="w-8 h-8" />}
              title="Estudios Ecológicos"
              description="Investigación profunda del ecosistema fluvial y su biodiversidad"
              features={[
                "Biodiversidad acuática",
                "Flora ribereña",
                "Especies en riesgo",
                "Recomendaciones de conservación"
              ]}
            />
            <ServiceCard
              icon={<DocumentMagnifyingGlassIcon className="w-8 h-8" />}
              title="Informes Técnicos"
              description="Documentación especializada para proyectos y gestión ambiental"
              features={[
                "Certificaciones ambientales",
                "Estudios de impacto",
                "Planes de manejo",
                "Asesoría legal ambiental"
              ]}
            />
          </div>
        </section>

        <section className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300 mb-16">
            Cómo Obtener tu Informe Técnico
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <WorkflowStep 
              icon={MapPinIcon}
              number={1}
              title="Selecciona Ubicación"
              description="Usa nuestro mapa interactivo para elegir el punto exacto del río que deseas analizar."
            />
            <WorkflowStep 
              icon={DocumentTextIcon}
              number={2}
              title="Elige Tipo de Informe"
              description="Selecciona entre diferentes tipos de informes técnicos según tus necesidades específicas."
            />
            <WorkflowStep 
              icon={CreditCardIcon}
              number={3}
              title="Realiza el Pago"
              description="Completa tu compra de manera segura y recibe tu informe técnico detallado."
            />
          </div>
        </section>

        <div className="mt-16">
          <MapSection onCoordinatesSelect={handleCoordinatesSelect} />
          <ReportSelector onReportSelect={handleReportSelect} />
          {selectedCoordinates && selectedReport && (
            <PaymentForm />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
