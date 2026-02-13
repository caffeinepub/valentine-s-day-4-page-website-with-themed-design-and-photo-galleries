import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function Page1Landing() {
  return (
    <div className="container py-12 max-w-5xl">
      <div className="text-center mb-12 space-y-4">
        <div className="flex justify-center gap-2 mb-4">
          <Heart className="h-12 w-12 text-rose-500 fill-rose-500 animate-pulse" />
          <Heart className="h-12 w-12 text-rose-400 fill-rose-400 animate-pulse delay-100" />
          <Heart className="h-12 w-12 text-rose-500 fill-rose-500 animate-pulse delay-200" />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-rose-600 mb-6">
          Happy Valentine's Day Ponnnaaa
        </h1>
      </div>

      <Card className="mb-12 border-rose-200 shadow-xl bg-gradient-to-br from-rose-50/50 to-pink-50/50">
        <CardContent className="p-8 md:p-12">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-serif whitespace-pre-wrap">
            I love you sooo much ponnnaaa I am Soo happy that u r a part of my messy life inele nee parenjilleee
            namoke abbasiya vite poite thiriche verumbol ore home ene feeling ondavum ene enikee ninte kude nine
            ketii pidikumbol ninte edethe skin to skin contact vane irikumbol athe ahhh thonenee like u r the home
            the I have the only place I can be angry, sad , happy , cling , romantic , sexual and say what I want I
            love you soooo muchhh ponnnaaa u r my emotional physical mental and spiritual soul......
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden border-rose-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-0">
            <img
              src="/assets/uploads/IMG_20260123_022920_162.jpg"
              alt="Beautiful moment together"
              className="w-full h-auto object-cover aspect-[3/4]"
            />
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-rose-200 shadow-lg hover:shadow-xl transition-shadow">
          <CardContent className="p-0">
            <img
              src="/assets/uploads/IMG_20260123_022853_008.jpg"
              alt="Cherished memory"
              className="w-full h-auto object-cover aspect-[3/4]"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
