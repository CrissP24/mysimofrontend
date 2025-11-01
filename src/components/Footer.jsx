export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-50 border-t">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-xl text-primary">mysimo</div>
          <p className="mt-2 text-sm text-gray-600">Encuentra al médico que necesitas.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Enlaces rápidos</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/">Inicio</a></li>
            <li><a href="/doctores">Directorio de médicos</a></li>
            <li><a href="https://mysimo.ai" target="_blank" rel="noreferrer">¿Quiénes somos?</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Contacto</div>
          <p className="text-sm">Ecuador · Tel: +593 99 999 9999</p>
          <div className="mt-3 flex gap-3 text-sm">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} mysimo</div>
    </footer>
  )
}

