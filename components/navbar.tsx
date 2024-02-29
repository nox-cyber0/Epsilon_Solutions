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
					<Sheet className='block md:hidden'>
						<SheetTrigger className='block w-full text-right font-mono text-sm font-semibold'>
							Menu
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>
									<Image
										src={logo}
										alt='Epsilon logo'
										width={60}
										height={60}
									/>
								</SheetTitle>
								<SheetDescription>
									<div className='block mt-6 text-left'>
										<Link
											className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block mb-3'
											href='/'
										>
											Home
										</Link>
										<Link
											className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block mb-3'
											href='/services'
										>
											Services
										</Link>
										<Link
											className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block mb-3'
											href='/pricing'
										>
											Pricing
										</Link>
										<Link
											className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block mb-3'
											href='/portfolio'
										>
											Portfolio
										</Link>
										<Link
											className='text-slate-400 text-base font-semibold hover:text-slate-800 transition block mb-3'
											href='/about-us'
										>
											About Us
										</Link>
									</div>
								</SheetDescription>
							</SheetHeader>
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
							href='/pricing'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							Pricing
						</Link>
						<Link
							href='/portfolio'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							Portfolio
						</Link>
						<Link
							href='/about-us'
							className='text-sm font-semibold text-slate-400 hover:text-slate-800 transition'
						>
							About Us
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
