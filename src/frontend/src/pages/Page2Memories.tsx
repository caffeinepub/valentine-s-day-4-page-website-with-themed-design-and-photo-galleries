import PhotoGallery from '@/components/PhotoGallery';

const memoryPhotos = [
  {
    src: '/assets/uploads/IMG_20260110_001106_333.jpg',
    alt: 'Childhood memories',
  },
  {
    src: '/assets/uploads/IMG_20260123_022956_194.jpg',
    alt: 'Beautiful moment',
  },
  {
    src: '/assets/uploads/IMG_20260123_022822_917.jpg',
    alt: 'Sweet memory',
  },
  {
    src: '/assets/uploads/IMG_20260123_023006_342.jpg',
    alt: 'Special time together',
  },
];

export default function Page2Memories() {
  return (
    <div className="container py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-600 mb-4">Our Memories</h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-serif italic">
          some of the countless memories that we had in the last 8 months
        </p>
      </div>

      <PhotoGallery photos={memoryPhotos} />
    </div>
  );
}
