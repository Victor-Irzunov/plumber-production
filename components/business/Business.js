"use client"
import { features } from "@/constans";
import Button from "../button/Button";

const FeatureCard = ({ title, children, handleOrderClick }) => {
  return (
    <div className="text-white mt-8 sd:text-base xz:text-xs w-full bg-white/5 pt-5 sd:px-5 xz:px-0 sd:py-10 xz:py-5">
      <table className="border-separate border border-slate-500 w-full">
        <caption className="caption-top sd:text-4xl xz:text-xl mb-4">
          {title}
        </caption>
        <thead className="bg-white/5">
          <tr>
            <th className="border border-slate-600 sd:px-2 xz:px-1">Наименование</th>
            <th className="border border-slate-600 sd:px-2 xz:px-1">инфо</th>
            <th className="border border-slate-600 sd:px-4 xz:px-2">Цена</th>
            <th className="border border-slate-700 sd:px-2 xz:px-1">Заказ</th>
          </tr>
        </thead>
        <tbody>
          {children.map((el) => (
            <FeatureItem key={el.id} title={el.title} content={el.content} price={el.price} handleOrderClick={handleOrderClick} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FeatureItem = ({ title, content, price, handleOrderClick }) => {

  return (
    <>
      <tr className="">
        <td className="border border-slate-700 sd:px-2 xz:px-1">{title}</td>
        <td className="border border-slate-700 sd:px-2 xz:px-1 text-center">{content}</td>
        <td className="border border-slate-700 sd:px-2 xz:px-1 text-center">от {price} руб.</td>
        <td className="border border-slate-700 sd:px-2 xz:px-1 text-center">
          <Button table handleOrderClick={handleOrderClick} title={title} />
        </td>
      </tr>

    </>
  );
};


const Business = ({ handleOrderClick }) => {

  return (
    <section id="service" className='sd:py-16 xz:py-3'>
      <div className='flex-1 flex justify-center items-center flex-col text-center'>
        <h2 className={`sd:text-4xl xz:text-2xl uppercase text-white font-bold`}>
          Стоимость услуг мастера
        </h2>
        <p className={`font-poppins font-normal text-white w-full mt-5 sd:text-base xz:text-sm`}>
          Консультация по телефону{' '}
          <span className="font-bold"> БЕСПЛАТНО</span>.
          Чтобы быстро устранить проблему и узнать более точную сумму,
          Вам необходимо как можно подробнее описать случившуеся поломку. Стоимость услуг зависит от объема и сложности работ. Мы предлагаем гибкую систему скидок для клиентов с крупными заказами. Обращаем Ваше внимание, что цена может незначительно измениться если появятся непредусмотренные сложности в процессе выполнения работ.
        </p>
      </div>

      <div className='flex justify-center items-center flex-col'>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} handleOrderClick={handleOrderClick} />
        ))}
      </div>
    </section>
  )
}
export default Business;
