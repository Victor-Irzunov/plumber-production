import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Сантехник в Минске - выезд к клиенту | Недорогие услуги',
  description: `ᐈ ⭐ Профессиональный сантехник в Минске ✫ Устранение протечек, установка сантехники, замена труб, установка унитаза, подключение бойлера, прочистка канализации, подключение посудомоечной машины, подключение стиральной машины ➤➤➤ Телефон ☎️ ${phoneNumbers.phone1} ✓ Срочный выезд 🚀 Гарантия на все виды работ 📦 Опыт более 10 лет ⚡ Доступные цены ⚡ Работаем круглосуточно`,
  keywords: `сантехник минск, услуги сантехника минск, вызвать сантехника минск, сантехнические работы, замена труб, устранение протечек, установка унитаза, ремонт сантехники минск, Подключение посудомоечной машины, Подключение стиральной машины, прочистка канализации`,
  alternates: {
    canonical: 'https://plumber-minsk.vercel.app/',
  },
  ogTitle: 'Сантехник в Минске с выездом 🚿 | Круглосуточные услуги ⭐',
  ogDescription: `ᐈ ⭐ Сантехник в Минске ✫ Все виды сантехнических работ ➤➤➤ Телефон ☎️ ${phoneNumbers.phone1} ✓ Быстрый выезд 🚀 Гарантия качества 📦 Опыт 10+ лет ⚡ Доступные цены ⚡ Работаем без выходных`,
  ogImage: 'my-app/public/logo/logo.webp',
  twitterTitle: 'Сантехник в Минске с выездом 🚿 | Круглосуточные услуги ⭐',
  twitterDescription: `ᐈ ⭐ Профессиональный сантехник в Минске ✫ Все виды работ ➤➤➤ Телефон ☎️ ${phoneNumbers.phone1} ✓ Срочный выезд 🚀 Гарантия качества 📦 Опыт 10+ лет ⚡ Честные цены ⚡ Работаем круглосуточно`,
  twitterImage: 'my-app/public/logo/logo.webp',
  ogType: 'website',
  ogUrl: 'https://plumber-minsk.vercel.app/',
  twitterCard: 'summary_large_image',
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
       <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
