"use client"
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const SliderComp = () => {
	return (
		<section className='sd:py-10 mx-7 sd:mt-10 xz:mt-0 xz:py-8' id="otzyvy">
			<div className='container mx-auto text-white'>

				<h4 className='text-center text-2xl sm:text-4xl font-bold mb-14 uppercase'>
					Что говорят о нас клиенты
				</h4>

				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={false}
					className="w-full"
				>

					<div className="carousel-item sd:p-5 xz:p-0 sd:mx-10 xz:mx-0 bg-white/15 rounded-md">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/1.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Корзун Дима
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Заказывали сантехника на дом у этой компании, и мы очень довольны результатом! Мастер пришел вовремя, быстро и профессионально устранил проблему. Отличный сервис, рекомендую!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 bg-white/15 rounded-md">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/2.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Шугля Миша
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Очень рады, что выбрали эту компанию для заказа сантехнических услуг. Мастер пришел вовремя, работал быстро и аккуратно. Вежливый персонал и качественное выполнение работы - рекомендуем!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 bg-white/15 rounded-md">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/3.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Грук Марина
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Профессионализм на высшем уровне! Заказывали у них сантехника на дом, и остались довольны. Мастер оперативно выявил проблему и устранил её без лишних хлопот для нас. Будем обращаться еще!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 bg-white/15 rounded-md">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/4.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Петрович Алексей
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Благодарим компанию за оперативность и качественное выполнение заказа! Заказывали сантехника на дом, и мастер справился с задачей на отлично. Обязательно будем рекомендовать друзьям и знакомым!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 bg-white/15 rounded-md">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/5.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Прошкин Артём
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Нам повезло обратиться в эту компанию при возникновении проблемы с засором в ванной. Мастер оперативно приехал, произвел качественное устранение засора, и даже посоветовал профилактические меры. Отличный сервис!
								</p>
							</div>
						</div>
					</div>

					<div className="carousel-item p-5 sd:mx-10 xz:mx-0 bg-white/15 rounded-md">
						<div className='flex'>
							<div className="avatar">
								<div className="w-12 h-12 rounded-full">
									<Image src='/otzyvy/6.webp' alt='Отзыв клиента заказавшего у нас услугу клининга' width={48} height={48} />
								</div>
							</div>

							<div className='ml-3'>
								<p className='font-semibold mb-2'>
									Петерсон Наташа
								</p>
								<div className="rating rating-sm">
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
									<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
								</div>
								<p className='xz:text-xs sd:text-sm mt-2'>
									Подключение стиральной машины было выполнено на высшем уровне благодаря этой компании. Мастер пришел в удобное для нас время, был опытным и вежливым. Теперь наша стиральная машина работает отлично. Спасибо за профессионализм
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</section>
	)
}

export default SliderComp