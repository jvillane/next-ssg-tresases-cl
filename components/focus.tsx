import { EyeIcon } from "@heroicons/react/outline";

export default function Focus() {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"/>
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                    <span
                      className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <EyeIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Enfócate en tu negocio
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Queremos entregar un servicio lo suficientemente flexible para apoyar el empoderamiento y
                  crecimiento técnico del equipo, te podemos apoyar en la revisión de las mejores prácticas (el
                  famoso Well Architected Framework de AWS) o incluso puedes externalizar un desarrollo y dejarlo en
                  nuestras manos.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;El desafío del uso responsable de cualquier nube debe considerar los beneficios de la
                    alta disponibilidad en relación a sus costos. Hoy en día la apuesta por una arquitectura
                    serverless suele mantener un excelente balance entre ambos puntos.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    {/*<UserIcon className="h-6 w-6" aria-hidden="true"/>*/}
                    <div className="text-base font-medium text-gray-700">
                      Julio Villane, AWS Certified Solutions Architect Associate
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/product.jpeg"
                alt="Producto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
