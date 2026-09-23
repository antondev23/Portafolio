const React = require("react")

const measurementId = "G-Y35L2Y76M9"

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "google-tag-manager",
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
    }),
    React.createElement("script", {
      key: "google-tag-config",
      dangerouslySetInnerHTML: {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `,
      },
    }),
  ])
}
