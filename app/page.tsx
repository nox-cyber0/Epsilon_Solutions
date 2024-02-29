import Link from 'next/link';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<div className='w-full flex'>
				<section className='w-2/3 flex bg-slate-50 p-12 md:pl-20 h-screen items-center justify-start'>
					<div className='block'>
						<h4 className='block w-full text-6xl font-bold text-left text-slate-700 capitalize'>
							Epsilon InfoTech Solutions
						</h4>
						<p className='block w-full text-base font-semibold mt-3 text-slate-600 capitalize'>
							Delivering Creative Solutions for Your Business Growth
						</p>
					</div>
				</section>
				<section className='w-1/3 flex bg-blue-700 h-screen'></section>
			</div>
		</main>
	);
}
