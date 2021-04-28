import { AcademicCapIcon, ArrowsExpandIcon, CubeIcon, CubeTransparentIcon } from "@heroicons/react/outline";

const features = [
  {
    name: 'Asesorías',
    description: 'De manos de un experto podrás contar con un acompañamiento en el diseño de la arquitectura de un proyecto que se esté gestando, en la revisión del cumplimiento del Well Architected Framework de AWS o como apoyo en un proyecto ya en curso.',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Desarrollo de Software',
    description: 'Nuestra mayor experiencia radica en la utilización de tecnologías serverless para construir plataformas y productos que permitan responder a demandas elásticas, y manteniendo un presupuesto controlado.',
    icon: CubeIcon,
  },
  {
    name: 'Machine Learning',
    description: 'Usamos herramientas de Inteligencia Artificial que permitan identificar patrones de alta complejidad en una alta densidad de información.',
    icon: ArrowsExpandIcon,
  },
  {
    name: 'Laboratorios',
    description: 'Cuando lo que buscas es alguien que agilice la inmersión de tu equipo en el mundo cloud de AWS planteamos la posibilidad de desarrollar actividades donde desarrollemos un proyecto como prueba de concepto en conjunto con tu equipo técnico.',
    icon: AcademicCapIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Algunos de nuestros servicios</h2>
        <p className="mt-4 max-w-3xl text-lg text-purple-200">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit
          aliquam sit nisl euismod mattis in.
        </p>
        <div
          className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:mt-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-purple-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
