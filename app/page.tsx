"use client";

import React from "react";
import Button from "../components/ui/button";



export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center text-center p-6">
      {/* Hero Section */}
      <div className="max-w-3xl mt-20">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Aumenta tus Ventas con Publicidad 100% Automatizada
        </h1>
        <p className="text-xl mt-4">
          Campañas en Google y Facebook Ads gestionadas por IA, sin complicaciones.
        </p>
        <button className="mt-6 px-8 py-4 text-lg bg-yellow-500 hover:bg-yellow-600 transition duration-300 text-white font-bold rounded-lg shadow-lg">
          Empezar Ahora
        </button>
      </div>

      {/* Beneficios */}
      <div className="max-w-4xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white text-gray-900 shadow-xl rounded-2xl">
          <h3 className="text-2xl font-bold">Optimización con IA</h3>
          <p className="text-gray-700 mt-2">Mejoramos automáticamente tus anuncios 24/7.</p>
        </div>
        <div className="p-8 bg-white text-gray-900 shadow-xl rounded-2xl">
          <h3 className="text-2xl font-bold">Planes Accesibles</h3>
          <p className="text-gray-700 mt-2">Desde $99/mes sin contratos complicados.</p>
        </div>
        <div className="p-8 bg-white text-gray-900 shadow-xl rounded-2xl">
          <h3 className="text-2xl font-bold">Resultados Garantizados</h3>
          <p className="text-gray-700 mt-2">O te devolvemos el dinero.</p>
        </div>
      </div>

      {/* Planes */}
      <div className="max-w-4xl mt-16 text-center">
        <h2 className="text-3xl font-extrabold drop-shadow-lg">Nuestros Planes</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white text-gray-900 shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold">Básico</h3>
            <p className="text-gray-700">Google Ads - $99/mes</p>
            <button className="mt-4 w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-white font-bold rounded-lg">Seleccionar</button>
          </div>
          <div className="p-8 bg-yellow-500 text-white shadow-xl rounded-2xl border-4 border-white">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p>Google + Facebook Ads - $199/mes</p>
            <button className="mt-4 w-full px-6 py-3 bg-white text-yellow-500 font-bold rounded-lg shadow-lg">Seleccionar</button>
          </div>
          <div className="p-8 bg-white text-gray-900 shadow-xl rounded-2xl">
            <h3 className="text-2xl font-bold">Elite</h3>
            <p className="text-gray-700">Todas las plataformas - $399/mes</p>
            <button className="mt-4 w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 transition text-white font-bold rounded-lg">Seleccionar</button>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="mt-16 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold drop-shadow-lg">Empieza Hoy</h2>
        <p className="text-xl mt-2">Prueba gratis por 7 días. Sin compromiso.</p>
        <button className="mt-6 px-8 py-4 text-lg bg-green-500 hover:bg-green-600 transition duration-300 text-white font-bold rounded-lg shadow-lg">
          Comenzar Ahora
        </button>
      </div>
    </div>
  );
}
