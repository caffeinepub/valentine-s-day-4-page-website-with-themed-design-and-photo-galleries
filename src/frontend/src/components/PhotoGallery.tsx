import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface Photo {
  src: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <Card className="overflow-hidden border-rose-200 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
              <CardContent className="p-0">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full p-0 border-rose-200">
            <img src={photo.src} alt={photo.alt} className="w-full h-auto object-contain max-h-[90vh]" />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
