import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import communityImg from '@/assets/icons/community.png';
import eventsImg from '@/assets/icons/events.png';
import mealImg from '@/assets/icons/meal.png';
import classes from './main-header.module.css';
import Image from 'next/image'

export default function MainHeader() {
  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <Image  src={logoImg.src} alt='A plate with food on it' width={50} height={50}/>
            NextLevel Food
        </Link>
        <nav>
        <ul>
            <li><Link  href="/meals" > 
                Meals <Image  src={mealImg.src} alt='A plate with food on it' width={30} height={30}/>
            </Link></li>
            <li><Link href="/meals/share">
            Share a Meal<Image  src={eventsImg.src} alt='people making meal' width={30} height={30}/>
            </Link></li>
            <li><Link href="/community">
            Foodies Community<Image  src={communityImg.src} alt='people talking in kitchen' width={30} height={30}/>
            </Link></li>
        </ul>
        </nav>
    </header>
  );
}
