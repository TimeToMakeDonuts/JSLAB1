import Link from 'next/link';
import classes from './page.module.css';
import { Suspense } from 'react';
import { getMeal } from '../../../lib/meals';

// Generate static params for pre-rendering
export function generateStaticParams() {
    const meals = [
    'juicy-cheese-burger',
    'spicy-curry',
    'homemade-dumplings',
    'classic-mac-n-cheese',
    'authentic-pizza',
    'wiener-schnitzel',
    'fresh-tomato-salad',
  ];
  return meals.map((meal) => ({
    slug: meal,
  }));
}

async function MealDetail({ slug }) {
  const meal = await getMeal(slug);

  if (!meal) {
    return <div className={classes.error}>This meal doesn&apos;t exist!</div>;
  }

  return (
    <div className={classes.mealDetail}>
      <header className={classes.header}>
        <div className={classes.imageWrapper}>
          <img src={meal.image} alt={meal.title} className={classes.image} />
        </div>
        <div className={classes.headerText}>
          <h1 className={classes.title}>{meal.title}</h1>
          <p className={classes.summary}>{meal.summary}</p>
          <p className={classes.creator}>
            Created by: <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
        </div>
      </header>

      <section className={classes.instructionsSection}>
        <h2 className={classes.instructionsTitle}>Instructions</h2>
        <pre className={classes.instructionsText}>{meal.instructions}</pre>
      </section>
    </div>
  );
}

export default async function MealDetailPage({ params }) {
  const { slug } = params;

  return (
    <div>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meal details...</p>}>
          <MealDetail slug={slug} />
        </Suspense>
      </main>
    </div>
  );
}
