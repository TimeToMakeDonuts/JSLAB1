//Github pages musi użyć funckji generateStaticParams, ale powoduje to konflikt z'use client'
//dlatego daje kod zakomentowany tak jak powinien on wyglądać z użyciem UseParams a strona będzie postawiona za pomocą
//generateStaticParams
/*
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { generateStaticParams } from './generateStaticParams';

export default function MealDetailPage() {
    const { slug } = useParams(); // Pobieramy slug z URL
    const imagePath = `/images/${slug}.jpg`; // Ścieżka obrazka z public/images

    return (
        <div>
            <h1>{slug.replace('-', ' ')}</h1>
            <Image 
                src={imagePath} 
                alt={`${slug} Image`} 
                width={300} 
                height={300}
            />
        </div>
    );
*/ 


import Image from 'next/image';

export async function generateStaticParams() {
  const meals = ['burger', 'curry', 'dumplings', 'macncheese', 'pizza', 'schintzel', 'tomato-salad'];
  return meals.map(meal => ({
    slug: meal
  }));
}

export default async function MealDetailPage({ params }) {
    const { slug } = await params;  // Awaiting params
    const imagePath = `/images/${slug}.jpg`; // Ścieżka obrazka z public/images

    return (
        <div>
            <h1>{slug.replace('-', ' ')}</h1>
            <Image 
                src={imagePath} 
                alt={`${slug} Image`} 
                width={300} 
                height={300}
            />
        </div>
    );
}
