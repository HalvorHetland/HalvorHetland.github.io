import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { MapPin, Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import travel images
import travelImage1 from "../../assets/Attached_image.png"; // Young man on waterfront
import travelImage2 from "../../assets/Attached_image2.png"; // Torii gates
import travelImage3 from "../../assets/Attached_image3.png"; // Temple with lanterns
import travelImage4 from "../../assets/Attached_image4.png";
import travelImage5 from "../../assets/Attached_image5.png";
import travelImage6 from "../../assets/Attached_image6.png";
import travelImage7 from "../../assets/Attached_image7.png"; // Cityscape

const travelPhotos = [
  {
    id: 1,
    image: travelImage7, // San Francisco image for Mediterranean Coast title
    location: "Mediterranean Coast",
    description: "Exploring beautiful coastal towns"
  },
  {
    id: 2,
    image: travelImage2, // Fushimi Inari image for third Travel Destination
    location: "Safari in Tanzania",
    description: "Wildlife encounters and nature photography"
  },
  {
    id: 3,
    image: travelImage3, // East Asian Temple image for second Travel Destination
    location: "Safari in Tanzania",
    description: "Wildlife encounters and nature photography"
  },
  {
    id: 4,
    image: travelImage4,
    location: "Safari in Tanzania",
    description: "Wildlife encounters and nature photography"
  },
  {
    id: 5,
    image: travelImage5, // Second Travel Destination image for East Asian Temple
    location: "East Asian Temple",
    description: "Traditional architecture and lanterns"
  },
  {
    id: 6,
    image: travelImage6, // Third Travel Destination image for Fushimi Inari
    location: "Fushimi Inari, Japan",
    description: "Walking through the iconic torii gates"
  },
  {
    id: 7,
    image: travelImage1, // Mediterranean Coast image for San Francisco
    location: "San Francisco, USA",
    description: "Urban landscapes and city views"
  }
];

export function Travel() {
  return (
    <section id="travel" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Travel & Photography
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Exploring the world, one destination at a time. Here are some of my favorite travel moments and photographs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200 group h-full">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 relative">
                  <ImageWithFallback 
                    src={photo.image} 
                    alt={photo.location}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4" />
                      <span className="font-semibold text-sm">{photo.location}</span>
                    </div>
                    <p className="text-xs text-gray-200">{photo.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
