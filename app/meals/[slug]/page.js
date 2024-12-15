'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

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
}
