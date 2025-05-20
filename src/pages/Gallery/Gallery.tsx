import image from './gallery.ts'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Gallery = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Carousel className="w-full max-w-xs overflow-visible">
        <CarouselContent>
          {image.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-pink-50">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img src={img} alt={index.toString()}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}


export default Gallery;
