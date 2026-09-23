import * as React from "react"
import Body from "../components/body"
const IndexPage = () => {
  return (
    <div >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
      <link href="../components/google.html" rel="preload" as="html" />
      <Body  />
      
    </div>
    
  )
}
export default IndexPage

export const Head = () => (
  <>
    <title>Antonio Ortega - Portafolio</title>
    <link rel="icon" href="/fluent-mdl2--code.svg" type="image/svg+xml" />
  </>
)
