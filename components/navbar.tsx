import Link from 'next/link';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';

export default function Navbar() {
	const logo = '/assets/logo.svg';

	return (
		<header className='w-full'>
			<nav className='fixed w-full bg-slate-50 shadow-sm shadow-slate-300 py-4'>
				<div className='flex w-full justify-between md:hidden px-6'>
					<Link href='/'>
						<Image
							src={logo}
							width={30}
							height={30}
							alt='Epsilon logo'
						/>
					</Link>
					<Sheet>
						<SheetTrigger>
							<span className='block w-full text-right font-mono text-sm font-semibold'>
								Menu
							</span>
						</SheetTrigger>
						<SheetContent>
							<h3>
								<Image
									src={logo}
									alt='Epsilon logo'
									width={50}
									height={50}
								/>
							</h3>
							<div className='block mt-6 text-left'>
								<hr className='text-slate-400' />
								<Link
									className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block my-3'
									href='/'
								>
									Home
								</Link>
								<hr className='text-slate-400' />
								<Link
									className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block my-3'
									href='/services'
								>
									Services
								</Link>
								<hr className='text-slate-400' />
								<Link
									className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block my-3'
									href='/portfolio'
								>
									Portfolio
								</Link>
								<hr className='text-slate-400' />
								<Link
									className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block my-3'
									href='/about-us'
								>
									About Us
								</Link>
								<hr className='text-slate-400' />
								<Link
									className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block my-3'
									href='/contact'
								>
									Contact Us
								</Link>
								<hr className='text-slate-400' />
								<Link
									href='/'
									className='bg-blue-700 text-white hover:bg-blue-800 rounded-md p-2.5 text-xs font-semibold uppercase transition w-full block text-center my-3'
								>
									Get a quote
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</div>
				<div className='hidden md:flex justify-around items-center'>
					<Link href='/'>
						<Image
							src={logo}
							width={30}
							height={30}
							alt='Epsilon logo'
						/>
					</Link>
					<div className='flex gap-8'>
						<Link
							href='/'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							Home
						</Link>
						<Link
							href='/services'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							Services
						</Link>
						<Link
							href='/portfolio'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							Portfolio
						</Link>
						<Link
							href='/pricing'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							Pricing
						</Link>
						<Link
							href='/about-us'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							About Us
						</Link>
						<Link
							href='/contact'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							Contact Us
						</Link>
					</div>
					<Link
						href='/'
						className='bg-blue-700 text-white hover:bg-blue-800 rounded-md p-2.5 text-xs font-semibold uppercase transition'
					>
						Get a quote
					</Link>
				</div>
			</nav>
		</header>
	);
}
