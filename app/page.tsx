import Link from 'next/link';

export default function Home() {
	return (
		<main className='min-h-screen pt-16'>
			<div className='w-full md:flex'>
				<section className='w-full md:w-2/3 block md:flex bg-slate-50 p-12 md:px-24 md:h-screen items-center justify-start'>
					<div className='block'>
						<h4 className='block w-full text-4xl md:text-6xl font-bold text-center md:text-left text-slate-700 capitalize'>
							Epsilon InfoTech Solutions
						</h4>
						<p className='block w-full text-sm md:text-base text-center md:text-left font-semibold mt-3 text-slate-600 capitalize'>
							Delivering Creative Solutions for Your Business Growth
						</p>
					</div>
				</section>
				<section className='w-full md:w-1/3 block md:flex bg-blue-700 h-64 md:h-screen'></section>
			</div>
		</main>
	);
}
