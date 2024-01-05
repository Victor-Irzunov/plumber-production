import Image from "next/image"


const BannerSection = () => {
	return (
		<section className="sd:py-12 xz:py-5">
			<div className='container mx-auto'>
				<div className='bg-white sd:px-8 xz:px-4 py-8 rounded-tl-xl rounded-br-xl'>
					<div className='flex sd:flex-row justify-between flex-col'>
						<div className='flex items-center'>
							<div className=''>
								<p className='sd:text-5xl xz:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
									Вы сделали правильный выбор компании, которой доверяют
								</p>
								<p className='mt-7 sd:text-base xz:text-sm'>
									Наши опытные сантехники готовы решить любые задачи сантехнического характера для вас. Мы ценим каждого клиента и работаем для вашего комфорта и уверенности в надежности наших услуг.
								</p>
							</div>
						</div>
						<div className='sd:w-1/2 xz:w-full sd:ml-10 xz:ml-0 sd:mt-0 xz:mt-3'>
							<Image src='/banner.webp' alt='Услуги сантехника' width={350} height={350} />
						</div>
					</div>
					<div className='flex sd:flex-row justify-around flex-col sd:mt-10 xz:mt-5 sd:text-2xl xz:text-xl'>
						<p className='mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
							<span className="text-4xl">100+ </span> выполненных работ
						</p>
						<p className='mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
						<span className="text-4xl">15+ </span> лет опыта
						</p>
						<p className='mt-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'>
						<span className="text-4xl">10%+ </span> скидки постоянным клиентам
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default BannerSection