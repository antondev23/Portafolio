import React from "react"

const WhatsAppCTA = () => {
    const phoneNumber = "34678244907"
    const message = "Hola, me gustaría hablar sobre un proyecto contigo."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-start gap-4 max-w-xl mx-auto mt-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-600 shrink-0 mt-1"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.534 5.876L0 24l6.29-1.512A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.733.897.944-3.64-.235-.374A9.818 9.818 0 1112 21.818z" />
            </svg>
            <div>
                <p className="text-sm font-medium text-gray-900 mb-1">
                    ¿No sabes por dónde empezar? Normal.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    A veces las mejores ideas necesitan una conversación para tomar forma.
                    Escríbeme por WhatsApp y en una llamada lo dejamos claro.
                </p>
                <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-green-700 border border-green-700 rounded-lg px-4 py-2 hover:bg-green-50 transition-colors duration-200"
        >
                Hablemos por WhatsApp
            </a>
        </div>
    </div >
  )
}

export default WhatsAppCTA
