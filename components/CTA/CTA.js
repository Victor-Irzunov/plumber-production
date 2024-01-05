"use client"
export default function CTA({ handleOrderClick }) {
  return (
    <section className='py-12 md:py-24 bg-white/10 my-10' id="dostavka">
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-start'>
          <span className='flex-grow text-4xl md:text-5xl 2xl:text-6xl font-bold'>
            Хотите попробовать наш сервис прямо сейчас!
          </span>
          <button className='btn rounded-full sm:btn-lg' onClick={() => handleOrderClick("Заказать сантехника")}>
            Заказать сейчас
          </button>
        </div>
      </div>
    </section>
  )
}