
//  scrolling effect  on page 
	window.addEventListener("scroll", () => {


		var pagetop = $(document).scrollTop();
		var pagebottom = pagetop + $(window).height();
		let content = $('.rows');

		for (var i = 0; i < content.length; i++) {
			let cont = content[i];

			if ($(cont).position().top < pagebottom) {
				// cont.classList.add('active');
				$(cont).addClass('active')
			} else {
				$(cont).removeClass('active');
			}
		}

	})
