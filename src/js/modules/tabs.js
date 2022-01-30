const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
	const
		header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelectorAll(contentSelector);

	function hideTabContent() {
		content.forEach(item => {
			item.style.display = 'none';
		});
		tab.forEach(item => {
			item.classList.remove(activeClass)
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = 'block';
		tab[i].classList.add(activeClass);
	}

	hideTabContent();
	showTabContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if (target.classList.contains(tabSelector.replace(/\./, '')) ||
			target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
			tab.forEach((item, i) => {
				if (target === item || target.parentNode === item) {
					hideTabContent();
					showTabContent(i);
				}
			})
		}
	});

	/*
	const
		glazingBlock = document.querySelectorAll('.glazing_block'),
		glazingContent = document.querySelectorAll('.glazing_content'),
		balconIconsImg = document.querySelectorAll('.balcon_icons_img'),
		bigImg = document.querySelectorAll('.big_img img');
	
	
	glazingBlock.forEach((item, i) => {
		item.addEventListener('click', () => {
			removeClassActive();
			hiddenGlazingContent();
			item.childNodes[3].classList.add('active');
			glazingContent[i].style.display = 'block';
		})
	})

	function hiddenGlazingContent() {
		glazingContent.forEach((item) => {
			item.style.display = 'none';
		})
	}

	function removeClassActive() {
		glazingBlock.forEach((item) => {
			item.childNodes[3].classList.remove('active');
		})
	}

	function removeClassBalconImg() {
		balconIconsImg.forEach((item) => {
			item.classList.remove('do_image_more');
		})
		bigImg.forEach((item) => {
			item.style.display = 'none';
		})
	}

	balconIconsImg.forEach((item, i) => {
		item.style.cursor = 'pointer';
		item.addEventListener('click', () => {
			removeClassBalconImg();
			item.classList.toggle('do_image_more');
			bigImg[i].style.display = 'block';
			bigImg[i].style.margin = '0 auto';
		})
	});
	balconIconsImg[1].classList.add('do_image_more')
*/
};

export default tabs;