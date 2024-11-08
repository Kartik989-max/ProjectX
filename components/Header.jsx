import { SignedOut, SignInButton, SignedIn } from '@clerk/nextjs'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';
import UserMenu from './user-menu';
const Header = () => {
  return (
    <header>
      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href='/'>
        <Image src={'/logo.png'} alt='logo' width={100} height={26} className='h w-auto object-contain'/>
        </Link>
<div className='flex items-center gap-4'>
    <Link href='/project/create'>
    <Button variant='destructive' className="flex gap-2 items-center">
      <PenBox size={18}/>
      <span>Create Project</span>
    </Button>
    </Link>

      <SignedOut>
        <SignInButton forceRedirectUrl='/onboarding'>
        <Button variant='outline'>Login</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserMenu />
      </SignedIn>
</div>
      </nav>
      
    </header>
  );
};

export default Header;
