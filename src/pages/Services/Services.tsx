import services from './services.ts';
import { Card, CardContent } from "@/components/ui/card"
const Services = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
      {services.map((service, idx) => (
        <Card key={idx} className="flex flex-col items-center p-6 bg-pink-50">
        <img
          src={service.image}
          alt={service.alt}
          className="w-72 h-36 object-cover mb-4 rounded"
        />
        <CardContent className="flex flex-col items-center">
          <span className="text-lg font-semibold mt-2">{service.name}</span>
        </CardContent>
        </Card>
      ))}
      </div>
    );
};

export default Services;
