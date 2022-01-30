const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const
			trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);
		
		trigger.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
			})
		})

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
		})

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.style.overflow = '';
			}
		})
	}

	function showModalByTime(selector, time) {
		setTimeout(function () {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}, time);
	}

	bindModal('.header_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	//bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
	//bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
	//showModalByTime('.popup', 60000);
}

export default modals;