import background from '@/assets/logo.jpeg';
const Home = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <img src={background} className="absolute inset-0 object-cover blur-xs z-0" alt="Background" />
      <div className="z-1">
        <h1 className="text-4xl font-bold text-pink-600">MB Beauty Spa</h1>
        <p className="mt-4 text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  )
}

export default Home;