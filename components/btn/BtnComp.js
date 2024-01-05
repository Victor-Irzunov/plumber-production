"use client"

export const BtnComp = () => {

	const openModal = () => {
		document.getElementById("my_modal_3").showModal();
	}
	return (
		<button
			className={`btn btn-primary mt-10  rounded-lg text-lg font-semibold border-none`}
			onClick={openModal}
		>
			Заказать звонок
		</button>
	)
}
