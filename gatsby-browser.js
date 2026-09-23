import './src/styles/global.css';

const measurementId = "G-Y35L2Y76M9"

export const onRouteUpdate = ({ location }) => {
  if (typeof window.gtag !== "function") return

  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: `${location.pathname}${location.search}${location.hash}`,
    page_title: document.title,
    send_to: measurementId,
  })
}
