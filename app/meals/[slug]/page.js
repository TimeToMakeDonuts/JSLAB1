'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

export async function generateStaticParams() {
    // Tutaj powinno być dynamiczne generowanie slugów
    const meals = ['burger', 'curry', 'dumplings', 'macncheese', 'pizza', 'schintzel', 'tomato-salad'];
    return meals.map(meal => ({
        slug: meal
    }));
}

function MealDetailPage() {
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

export default MealDetailPage; // Eksportujemy domyślnie MealDetailPage
