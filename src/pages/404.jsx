import * as React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Window from "../components/window"
import Seo from "../components/seo"

const NotFoundPage = ({ location }) => {
  const path = location?.pathname || "/ruta-desconocida"

  return (
    <div className="site-shell">
      <Nav />
      <main className="page-wrap content-page grid place-items-center">
        <Window title="bash — 404" meta="exit 1" dotColor="var(--syn-prop)" className="w-full max-w-2xl">
          <div className="terminal-body space-y-2">
            <p className="m-0">
              <span className="prompt">~/<span className="path">antonio</span> $</span> <span className="tok-v">cd {path}</span>
            </p>
            <p className="m-0 text-[var(--syn-prop)]">bash: cd: {path}: No existe el archivo o el directorio</p>
            <p className="m-0 text-[var(--dim)]">{"// error 404 — esta página no existe o se ha movido"}</p>
            <div className="pt-6 font-sans">
              <h1 className="section-heading">Página no encontrada.</h1>
              <p className="section-lead mt-4">Puede que el enlace esté roto o que la página se haya movido.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/" className="button-primary">cd ~ <span aria-hidden="true">→</span></Link>
                <Link to="/contact" className="button-outline">Contactar</Link>
              </div>
            </div>
          </div>
        </Window>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Página no encontrada" />
