import { getMeal } from '@/lib/meals';
import styles from './page.module.css';
import { Suspense } from 'react';

export default async function MealDetailPage({ params }) {
  const { slug } = await params;
  const meal = await getMeal(slug);

  if (!meal) {
    return <div>This meal does not exist!</div>;
  }

  return (
      <div className={styles.container}>
        {/* Sekcja nagłówka */}
        <header className={styles.header}>
          <div className={styles.imageWrapper}>
            <img src={meal.image} alt={meal.title} className={styles.image} />
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.title}>{meal.title}</h1>
            <p className={styles.summary}>{meal.summary}</p>
            <p className={styles.creator}>
              Created by: <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
          </div>
        </header>

        {/* Sekcja instrukcji */}
        <section className={styles.instructionsSection}>
          <h2 className={styles.instructionsTitle}>Instructions</h2>
          <pre className={styles.instructionsText}>{meal.instructions}</pre>
        </section>
      </div>
  );

}

