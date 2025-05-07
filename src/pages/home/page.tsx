import banner from '../../../src/assets/banner.png';
import logo from '../../../src/assets/logo.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 relative">
      <div className="absolute top-4 right-4">
        <img src={logo} alt="Kyro Logo" className="h-12 w-auto" />
      </div>
      
      <div className="flex flex-col justify-center items-center">
        <img src={banner} className="w-1/2" alt="banner" />
        <p className="text-lg text-gray-700">Kyro Industries, the change the industry needs.</p>
        <span className="text-sm text-gray-500 font-bold">No Bull Shit, Just Results</span>
      </div>
      <div className="text-center mt-52">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Kyro. All rights reserved.</p>
      </div>
    </div>
  );
}