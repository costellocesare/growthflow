import React from "react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center text-center p-6">
      {/* Hero Section */}
      <div className="max-w-3xl mt-20">
        <h1 className="text-4xl font-bold text-gray-900">
          Aumenta tus Ventas con Publicidad 100% Automatizada
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Campañas en Google y Facebook Ads gestionadas por IA, sin complicaciones.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg" onClick={() => alert("Empezar Ahora")}>Empezar Ahora</Button>
      </div>

      {/* Beneficios */}
      <div className="max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold">Optimización con IA</h3>
          <p className="text-gray-600 mt-2">Mejoramos automáticamente tus anuncios 24/7.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold">Planes Accesibles</h3>
          <p className="text-gray-600 mt-2">Desde $99/mes sin contratos complicados.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-xl">
          <h3 className="text-xl font-semibold">Resultados Garantizados</h3>
          <p className="text-gray-600 mt-2">O te devolvemos el dinero.</p>
        </div>
      </div>

      {/* Planes */}
      <div className="max-w-4xl mt-16 text-center">
        <h2 className="text-2xl font-bold">Nuestros Planes</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold">Básico</h3>
            <p className="text-gray-700">Google Ads - $99/mes</p>
            <Button className="mt-4 w-full">Seleccionar</Button>
          </div>
          <div className="p-6 bg-white shadow rounded-xl border-2 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-600">Pro</h3>
            <p className="text-gray-700">Google + Facebook Ads - $199/mes</p>
            <Button className="mt-4 w-full bg-blue-600 text-white">Seleccionar</Button>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="text-xl font-semibold">Elite</h3>
            <p className="text-gray-700">Todas las plataformas - $399/mes</p>
            <Button className="mt-4 w-full">Seleccionar</Button>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-gray-900">Empieza Hoy</h2>
        <p className="text-lg text-gray-700 mt-2">Prueba gratis por 7 días. Sin compromiso.</p>
        <Button className="mt-6 px-6 py-3 text-lg bg-green-500 text-white">Comenzar Ahora</Button>
      </div>
    </div>
  );
}
