import React from 'react';
import { FileText, Calendar, CheckCircle, GraduationCap, DollarSign, Send } from 'lucide-react'

const Process: React.FC = () => {

  const steps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Adjunta tus documentos",
      description: "Completa el formulario de admisión y adjunta documentos requeridos",
      time: "15 minutos"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Pago de matricula",
      description: "Notificación oficial y proceso de matrícula",
      time: "1 hora"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Inicio academico",
      description: "Inicia tu proceso academico",
      time: "48 horas"
    }
  ];

  const requirements = [
    "Formulario de solicitud completo",
    "Certificados académicos de los últimos 2 años",
    "Carta de recomendación del colegio anterior",
    "Copia del pasaporte o documento de identidad",
    "Certificado médico y de vacunación",
    "Fotografías tamaño carnet"
  ];

  const scholarships = [
    {
      title: "Beca de Excelencia Académica",
      description: "Hasta 50% de descuento en colegiatura",
      criteria: "Promedio mínimo 9.0 y prueba de admisión"
    },
    {
      title: "Beca de Talento Especial",
      description: "Hasta 30% de descuento",
      criteria: "Destacado en deportes, artes o ciencias"
    },
    {
      title: "Beca Hermanos",
      description: "15% de descuento por hermano adicional",
      criteria: "Aplicable desde el segundo hijo"
    }
  ];

  return (

    <section id="admissions" className="">
      <section className="relative flex items-center justify-center overflow-hidden w-full max-h-[350px]">
        <img src='images/kids-full.png' className='!w-full !h-full' />

        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white absolute bottom-28">
          <h1 className="text-5xl md:text-8xl font-medium mb-6">
            PROCESO DE ADMISIÓN
          </h1>
        </div>
      </section>

      <section id="admisiones" className="py-10 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#2C3188]/10 text-[#2C3188] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Admisiones 2025 • Cupos Limitados
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Únete a Nuestra <span className="text-[#2C3188]">Comunidad</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Te acompañamos paso a paso en el proceso de admisión para formar parte de una experiencia educativa transformadora.
            </p>
          </div>

          {/* Admission Process */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Proceso de Admisión</h3>
            <div className="grid md:grid-cols-3 gap-6 items-center justify-center">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-[#2C3188] text-white w-12 h-12 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <span className="text-xs bg-[#F6E824] text-[#2C3188] px-2 py-1 rounded-full font-semibold">
                        {step.time}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#2C3188] transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-[#2C3188] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Documentos Requeridos</h3>
              </div>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{req}</span>
                  </div>
                ))}
              </div>
              <div className='mt-10 flex flex-col gap-10 p-2'>
                <a href='/' className='py-4 px-8 bg-[#2C3188] hover:bg-[#46498d] cursor-pointer text-white flex gap-5'><FileText/> Sube tus documentos aqui</a>
                <a href='https://zonapagos.com/pagosn2/informacion.aspx' target='_blank' className='py-4 px-8 bg-[#2C3188] hover:bg-[#46498d] cursor-pointer text-white flex gap-5'><DollarSign/> Si ya recibiste tu confirmación, realiza tu pago aqui</a>
              </div>
            </div>

            {/* Important Dates */}
            <div className="bg-gradient-to-br from-[#2C3188] to-[#7180A1] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">
                Para más información, contáctanos
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                      placeholder='Tu nombre'
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                      placeholder='Tu apellido'
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent"
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent">
                    <option value="" className="text-gray-800">
                      Selecciona un asunto
                    </option>
                    <option value="admissions" className="text-gray-800">
                      Admisiones
                    </option>
                    <option value="academics" className="text-gray-800">
                      Información Académica
                    </option>
                    <option value="general" className="text-gray-800">
                      Información General
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F6E824] focus:border-transparent resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#c41e3a] transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Process;