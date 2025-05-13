
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-4xl font-bold text-pink-600"> MB Beauty Spa</h1>
      <div className="mt-4 text-lg text-gray-700">
        <p className="mb-4">
          ¡Bienvenida a MB Beauty Spa! Mi nombre es Maria Batista y me especializo en una variedad de servicios personalizados de belleza y bienestar diseñados para ayudarte a lucir y sentirte espectacular. Ofrezco depilación, limpieza facial, tratamientos anti-envejecimiento, cuidado antiacné, manicura, pedicura y diseños de cejas semipermanentes con Henna.
        </p>
        <p className="mb-4">
          Con años de experiencia y una verdadera pasión por el cuidado personal, me comprometo a brindarte un ambiente cómodo, relajante y acogedor. En MB Beauty Spa, no se trata solo de los servicios, sino de toda la experiencia. Me enfoco en cada detalle para asegurarme de que tu visita supere tus expectativas y te deje renovada, confiada y bien atendida.
        </p>
        <p className="mb-4">
          Déjame ayudarte a descubrir tu brillo… un tratamiento a la vez.Let me help you discover your glow—one treatment at a time.
        </p>
        <p>
          {/*Change All the english for symbols representing the thing using lucide react*/}
          <strong>Contact Information:</strong><br />
          Phone: +1 (832) 897-0847<br />
          Email: mbbeauty24@gmail.com<br />
          Address: Rosharon, TX, USA, 77583
        </p>
      </div>
    </div>
  )
}

export default Home;