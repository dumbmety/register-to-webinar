import { useEffect } from "react"
import Helmet from "react-helmet"
import SimpleBar from "simplebar-react"

import Main from "../components/Main"
import Sidebar from "../components/Sidebar"

const English = ({ handleChangeLocale }) => {
  useEffect(() => {
    handleChangeLocale("en")
  }, [])

  return (
    <>
      <Helmet>
        <title>Register to Webinar</title>
        <meta
          property="og:title"
          content="The help of Augmented Reality and Holograms."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://register-to-webinar.netlify.app"
        />
        <meta
          property="og:image"
          content="https://register-to-webinar.netlify.app/img/screenshot.png"
        />
        <meta
          property="og:description"
          content="Use Augmented Reality to keep students engaged and provide detailed explanations of models and course material. In a 3D, AR Lab, students can pinch, zoom, and rotate equipment related to the course, for a fully immersive learning experienc"
        />
      </Helmet>
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <div className="layout">
          <Main />
          <Sidebar />
        </div>
      </SimpleBar>
    </>
  )
}

export default English
