import PhotoGallery from '@/components/PhotoGallery';

const galleryPhotos = [
  {
    src: '/assets/uploads/IMG_20260123_022914_736.jpg',
    alt: 'Precious moment',
  },
  {
    src: '/assets/uploads/IMG_20260123_022814_325.jpg',
    alt: 'Family photo',
  },
  {
    src: '/assets/uploads/IMG_20260123_022756_879.jpg',
    alt: 'Elegant evening',
  },
  {
    src: '/assets/uploads/IMG_20260118_135409_239.jpg',
    alt: 'Dancing together',
  },
  {
    src: '/assets/uploads/IMG_20260123_022932_300.jpg',
    alt: 'Forever together',
  },
];

export default function Page4Gallery() {
  return (
    <div className="container py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-600 mb-4">More Memories</h1>
        <p className="text-xl text-foreground/80 font-serif italic">Moments we'll cherish forever</p>
      </div>

      <PhotoGallery photos={galleryPhotos} />
    </div>
  );
}
