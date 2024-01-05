"use client"
import Image from "next/image";
import Modal from "../modal/Modal";
import { useState } from "react";
import CTA from "../CTA/CTA";
import Business from "../business/Business";


export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };


  return (
    <>
      <section className='sd:py-10 xz:py-6' id="catalog">
        <div className='container mx-auto'>
          <Business handleOrderClick={handleOrderClick} />
          <div className='mt-0'>
            <p className='sd:text-sm xz:text-xs text-white/60'>
              *  Мы предлагаем бесплатную диагностику неисправностей вашей сантехники при условии, что вы выберете нас для последующего ремонта. Это означает, что вы можете получить полное представление о проблеме без дополнительных затрат. Наша цель - обеспечить прозрачность и доверие, поэтому мы предлагаем эту бесплатную услугу, чтобы вы могли принять информированное решение относительно ремонта. Когда вы решите сотрудничать с нами, наши опытные мастера приступят к ремонту с полным пониманием проблемы, что поможет вам сэкономить время и решить проблему более эффективно.
            </p>
          </div>
        </div>
      </section>


        <CTA handleOrderClick={handleOrderClick} />

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </>
  )
}