export default function Proficiency() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Contamos con un equipo altamente capacitado
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-36" src="/aws/AWS-Certified_Solutions-Architect_Associate_512x512.png"
                 alt="Certified Solutions Architect Associate"/>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-36" src="/aws/AWS-Certified_Sysops-Administrator_Associate_512x512.png"
                 alt="Certified Sysops Administrator Associate"/>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-36"
              src="/aws/AWS-Certified_Developer_Associate_512x512.png"
              alt="Certified Developer Associate"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <img
              className="h-36"
              src="/aws/AWS-Certified_Security_Specialty_512x512.png"
              alt="Certified Security Specialty"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
            <img
              className="h-36"
              src="/aws/AWS-Certified_Cloud-Practitioner_512x512.png"
              alt="Certified Cloud Practitioner"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
