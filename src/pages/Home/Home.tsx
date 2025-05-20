import { Phone, Mail, MapPin } from 'lucide-react';
import background from '@/assets/background.jpeg';
import logo from '@/assets/logo.png'
const Home = () => {
  return (
    <div className="items-center overflow-y-auto">
      <img src={background} alt="Background" className="w-full h-50" />
      <div className="flex flex-col px-10 py-3 mt-5 md-5 bg-pink-200 rounded-lg shadow-lg max-w-xl overflow-y-auto overflow-x-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-pink-600 great-vibes-regular">MB Beauty Spa</h1>
          <img src={logo} alt="logo" className="h-16 w-auto" />
        </div>
        <div className="mt-4 text-lg text-gray-700">
          <p className="">
            ¡Bienvenida a MB Beauty Spa! Nos especializamos en una variedad de servicios personalizados de belleza y bienestar diseñados para ayudarte a lucir y sentirte bella. Ofrecemos servicios de:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Depilación</li>
            <li>Limpieza facial con tratamientos anti-envejecimientoy anti-Acné</li>
            <li>Manicura</li>
            <li>Pedicura</li>
            <li>Diseños de cejas semipermanentes con Henna.</li>
          </ul>
          <p className="mb-4">
            Contamos con personal de experiencia y una verdadera pasión por el cuidado personal, nos comprometemos a brindarte un ambiente cómodo, relajante y acogedor. En MB Beauty Spa, no se trata solo de ofrecerte un excelente servicio, sino de brindarte la mejor experiencia . Nos enfocamos en cada detalle para asegurarnos de que tu visita supere tus expectativas y te deje renovada, confiada y complacida.
          </p>
          <p className="mb-4">
            Déjanos ayudarte a descubrir tu brillo… lo esencial y bello de un tratamiento a la vez.
          </p>
          <div className="">
            <div className="flex items-center">
              <Phone className="mr-2"/>
              <p>{'+1 (832) 897-0847'}</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2"/>
              <p>mbbeauty24@gmail.com</p>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2"/>
              <p>Rosharon, TX, USA, 77583</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;