// import "./modules/globals";
// import "./modules/Notify";

const PopupBasket = {
	_$panel: $(),

	setHeight() {
		const $panel = this._$panel;

		const windowHeight = $(window).height();
		const panelOffsetTop = $panel.offset().top - $(window).scrollTop();
		const panelBottomSpace = 10;
		const newHeight = windowHeight - panelOffsetTop - panelBottomSpace;

		$panel
			.css({
				"max-height": "none",
				"min-height": "300px",
			})
			.outerHeight(newHeight);
	},

	openPanel() {
		this._$panel.addClass("active");
		SliderBasket.refresh();
		this.setHeight();
	},

	closePanel() {
		this._$panel.removeClass("active");
	},

	_handleOpenButton(e) {
		e.preventDefault();

		if ($(e.target).closest(".js-popup-basket-panel").length) {
			return;
		}

		if (this._$panel.hasClass("active")) {
			this.closePanel();
		} else {
			this.openPanel();
		}
	},

	_handleOutsideClick(e) {
		if ($(e.target).closest(".js-popup-basket-open").length === 0) {
			this.closePanel();
		}
	},

	init() {
		this._$panel = $("#popup-basket");

		$(document).on(
			"click",
			".js-popup-basket-open",
			this._handleOpenButton.bind(this)
		);

		$(document).on("click", this._handleOutsideClick.bind(this));
	},
};

const SliderBasket = {
	_$root: $(),

	refresh() {
		this._$root.find(".slider-basket__list").slick("setPosition");
	},

	init() {
		this._$root = $("#slider-basket");

		this._$root.find(".slider-basket__list").slick({
			infinite: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: this._$root.find(".slider-basket__prev"),
			nextArrow: this._$root.find(".slider-basket__next"),
		});
	},
};

$(function () {
	SliderBasket.init();
	PopupBasket.init();
});
