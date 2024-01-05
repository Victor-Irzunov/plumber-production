import CTA from '@/components/CTA/CTA';
import Catalog from '@/components/Catalog/Catalog';
import Preimushestva from '@/components/Preimushestva/Preimushestva';
import { AboutSection } from '@/components/about/AboutSection';
import BannerSection from '@/components/bannerSection/BannerSection';
import SliderComp from '@/components/sliderComp/SliderComp';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="xz:pt-20 sd:pt-0 sd:pb-24 xz:pb-10" style={{ background: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)' }}>
      <section className="hero">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <Image src="/fon/fon2.webp" alt='Услуги сантехника' width={200} height={533} className="" />
          <div className='sd:mr-20 xz:mr-0'>
            <h1 className="sd:text-5xl xz:text-3xl font-bold text-white">
              Услуги сантехника
              <span className='block'>
                с выездом к клиенту
              </span>
            </h1>
            <p className="py-6 sd:w-[60vw] xz:w-full sd:text-base xz:text-xs text-white/60">
              Наша команда профессиональных сантехников предоставляет полный спектр услуг для ремонта и обслуживания сантехнических систем в домах и офисах. Мы гарантируем высокое качество при выполнении работ по установке, ремонту и обслуживанию водопровода, канализации, а также сантехнической техники.
            </p>
            <button className={`btn border-none text-white mt-5`} style={{ background: 'linear-gradient(to right, #f12711, #f5af19)' }}>
              Оставить заявку
            </button>
          </div>
        </div>
      </section>

      <BannerSection />

      <Catalog />

      <SliderComp />

      <Preimushestva />

     <AboutSection/>
    </main>
  );
}
