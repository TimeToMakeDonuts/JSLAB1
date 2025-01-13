export function generateStaticParams() {
    const meals = ['burger', 'curry', 'dumplings', 'macncheese', 'pizza', 'schintzel', 'tomato-salad'];
    return meals.map(meal => ({
      slug: meal
    }));
  }
  