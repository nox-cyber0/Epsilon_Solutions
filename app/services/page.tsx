import { Metadata } from 'next';

const metadata: Metadata = {
	title: 'Services',
};

const Services = () => {
	return (
		<section className='min-h-screen flex'>
			<div className='bg-slate-700 flex w-3/4 h-screen p-20'>
				<div>
					<h3 className='text-2xl font-bold text-white text-left mb-6'>
						What We Offer
					</h3>
					<div className='mt-3 grid grid-cols-2 gap-6 text-slate-100 text-sm'>
						<div>
							<div className='bg-purple-700 text-white text-center p-2.5 rounded-full mr-1.5 mb-2 w-10 h-7'></div>
							<h4>Web Development Solutions</h4>
							<br />
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
							vel inventore dignissimos assumenda unde quas voluptates, labore
							ratione officia et quibusdam mollitia excepturi eius est soluta
							odio quisquam sapiente cupiditate.
						</div>
						<div>
							<div className='bg-purple-700 text-white text-center p-2.5 rounded-full mr-1.5 mb-2 w-10 h-7'></div>
							<h4>Graphic Designing</h4>
							<br />
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
							voluptatibus, illo sunt perspiciatis nihil laboriosam molestias
							numquam? Corrupti cum reiciendis architecto iusto, amet, similique
							quam iure deserunt, quo facilis obcaecati.
						</div>
						<div className='col-span-2'>
							<div className='bg-purple-700 text-white text-center p-2.5 rounded-full mr-1.5 mb-2 w-10 h-7'></div>
							<h4>CMS</h4>
							<br />
							<div>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Placeat voluptatibus, illo sunt perspiciatis nihil laboriosam
								molestias numquam? Corrupti cum reiciendis architecto iusto,
								amet, similique quam iure deserunt, quo facilis obcaecati.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-purple-700 flex w-1/4 h-screen'></div>
		</section>
	);
};

export default Services;
