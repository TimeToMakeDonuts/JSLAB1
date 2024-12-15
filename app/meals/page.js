import Link from 'next/link';

export default function MealsPage() {
    return (
        <div>
            <h1>Witaj w Meals!</h1>
            <nav>
                <ul>
                    <li><Link href="/meals/burger">Burger</Link></li>
                    <li><Link href="/meals/curry">Curry</Link></li>
                    <li><Link href="/meals/dumplings">Dumplings</Link></li>
                    <li><Link href="/meals/macncheese">Mac & Cheese</Link></li>
                    <li><Link href="/meals/pizza">Pizza</Link></li>
                    <li><Link href="/meals/schintzel">Schintzel</Link></li>
                    <li><Link href="/meals/tomato-salad">Tomato Salad</Link></li>
                </ul>
            </nav>
        </div>
    );
}