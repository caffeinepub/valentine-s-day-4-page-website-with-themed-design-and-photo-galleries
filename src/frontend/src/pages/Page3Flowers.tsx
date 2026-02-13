import { Card, CardContent } from '@/components/ui/card';
import { Flower2 } from 'lucide-react';

export default function Page3Flowers() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Flower2 className="h-12 w-12 text-rose-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-600 mb-6">Treasured Gifts</h1>
      </div>

      <Card className="overflow-hidden border-rose-200 shadow-xl mb-8">
        <CardContent className="p-0">
          <img
            src="/assets/generated/flowers.dim_1200x800.png"
            alt="Beautiful flowers"
            className="w-full h-auto object-cover"
          />
        </CardContent>
      </Card>

      <Card className="border-rose-200 shadow-xl bg-gradient-to-br from-rose-50/50 to-pink-50/50">
        <CardContent className="p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl leading-relaxed text-foreground/90 font-serif italic">
            I will always have all the gift that u gave Mee in my heart
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
