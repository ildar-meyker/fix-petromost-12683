/* Start:"a:4:{s:4:"full";s:92:"/bitrix/templates/main_adaptive_new/js/jquery.mCustomScrollbar.concat.min.js?158106192045479";s:6:"source";s:76:"/bitrix/templates/main_adaptive_new/js/jquery.mCustomScrollbar.concat.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!(function (a) {
	"function" == typeof define && define.amd
		? define(["jquery"], a)
		: "object" == typeof exports
		? (module.exports = a)
		: a(jQuery);
})(function (a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (
			((b = a.event.fix(g)),
			(b.type = "mousewheel"),
			"detail" in g && (m = -1 * g.detail),
			"wheelDelta" in g && (m = g.wheelDelta),
			"wheelDeltaY" in g && (m = g.wheelDeltaY),
			"wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
			"axis" in g &&
				g.axis === g.HORIZONTAL_AXIS &&
				((l = -1 * m), (m = 0)),
			(j = 0 === m ? l : m),
			"deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
			"deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
			0 !== m || 0 !== l)
		) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				(j *= q), (m *= q), (l *= q);
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				(j *= r), (m *= r), (l *= r);
			}
			if (
				((n = Math.max(Math.abs(m), Math.abs(l))),
				(!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
				d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
				(j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
				(l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
				(m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
				k.settings.normalizeOffset && this.getBoundingClientRect)
			) {
				var s = this.getBoundingClientRect();
				(o = b.clientX - s.left), (p = b.clientY - s.top);
			}
			return (
				(b.deltaX = l),
				(b.deltaY = m),
				(b.deltaFactor = f),
				(b.offsetX = o),
				(b.offsetY = p),
				(b.deltaMode = 0),
				h.unshift(b, j, l, m),
				e && clearTimeout(e),
				(e = setTimeout(c, 200)),
				(a.event.dispatch || a.event.handle).apply(this, h)
			);
		}
	}
	function c() {
		f = null;
	}
	function d(a, b) {
		return (
			k.settings.adjustOldDeltas &&
			"mousewheel" === a.type &&
			b % 120 === 0
		);
	}
	var e,
		f,
		g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h =
			"onwheel" in document || document.documentMode >= 9
				? ["wheel"]
				: ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j; )
			a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = (a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function () {
			if (this.addEventListener)
				for (var c = h.length; c; )
					this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
				a.data(this, "mousewheel-page-height", k.getPageHeight(this));
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var c = h.length; c; )
					this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"),
				a.removeData(this, "mousewheel-page-height");
		},
		getLineHeight: function (b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return (
				d.length || (d = a("body")),
				parseInt(d.css("fontSize"), 10) ||
					parseInt(c.css("fontSize"), 10) ||
					16
			);
		},
		getPageHeight: function (b) {
			return a(b).height();
		},
		settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
	});
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a);
		},
	});
});
!(function (a) {
	"function" == typeof define && define.amd
		? define(["jquery"], a)
		: "object" == typeof exports
		? (module.exports = a)
		: a(jQuery);
})(function (a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (
			((b = a.event.fix(g)),
			(b.type = "mousewheel"),
			"detail" in g && (m = -1 * g.detail),
			"wheelDelta" in g && (m = g.wheelDelta),
			"wheelDeltaY" in g && (m = g.wheelDeltaY),
			"wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
			"axis" in g &&
				g.axis === g.HORIZONTAL_AXIS &&
				((l = -1 * m), (m = 0)),
			(j = 0 === m ? l : m),
			"deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
			"deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
			0 !== m || 0 !== l)
		) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				(j *= q), (m *= q), (l *= q);
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				(j *= r), (m *= r), (l *= r);
			}
			if (
				((n = Math.max(Math.abs(m), Math.abs(l))),
				(!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
				d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
				(j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
				(l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
				(m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
				k.settings.normalizeOffset && this.getBoundingClientRect)
			) {
				var s = this.getBoundingClientRect();
				(o = b.clientX - s.left), (p = b.clientY - s.top);
			}
			return (
				(b.deltaX = l),
				(b.deltaY = m),
				(b.deltaFactor = f),
				(b.offsetX = o),
				(b.offsetY = p),
				(b.deltaMode = 0),
				h.unshift(b, j, l, m),
				e && clearTimeout(e),
				(e = setTimeout(c, 200)),
				(a.event.dispatch || a.event.handle).apply(this, h)
			);
		}
	}
	function c() {
		f = null;
	}
	function d(a, b) {
		return (
			k.settings.adjustOldDeltas &&
			"mousewheel" === a.type &&
			b % 120 === 0
		);
	}
	var e,
		f,
		g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h =
			"onwheel" in document || document.documentMode >= 9
				? ["wheel"]
				: ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j; )
			a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = (a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function () {
			if (this.addEventListener)
				for (var c = h.length; c; )
					this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
				a.data(this, "mousewheel-page-height", k.getPageHeight(this));
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var c = h.length; c; )
					this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"),
				a.removeData(this, "mousewheel-page-height");
		},
		getLineHeight: function (b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return (
				d.length || (d = a("body")),
				parseInt(d.css("fontSize"), 10) ||
					parseInt(c.css("fontSize"), 10) ||
					16
			);
		},
		getPageHeight: function (b) {
			return a(b).height();
		},
		settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
	});
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a);
		},
	});
});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!(function (e) {
	"function" == typeof define && define.amd
		? define(["jquery"], e)
		: "undefined" != typeof module && module.exports
		? (module.exports = e)
		: e(jQuery, window, document);
})(function (e) {
	!(function (t) {
		var o = "function" == typeof define && define.amd,
			a = "undefined" != typeof module && module.exports,
			n = "https:" == document.location.protocol ? "https:" : "http:",
			i =
				"cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
		o ||
			(a
				? require("jquery-mousewheel")(e)
				: e.event.special.mousewheel ||
				  e("head").append(
						decodeURI(
							"%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"
						)
				  )),
			t();
	})(function () {
		var t,
			o = "mCustomScrollbar",
			a = "mCS",
			n = ".mCustomScrollbar",
			i = {
				setTop: 0,
				setLeft: 0,
				axis: "y",
				scrollbarPosition: "inside",
				scrollInertia: 950,
				autoDraggerLength: !0,
				alwaysShowScrollbar: 0,
				snapOffset: 0,
				mouseWheel: {
					enable: !0,
					scrollAmount: "auto",
					axis: "y",
					deltaFactor: "auto",
					disableOver: [
						"select",
						"option",
						"keygen",
						"datalist",
						"textarea",
					],
				},
				scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
				keyboard: {
					enable: !0,
					scrollType: "stepless",
					scrollAmount: "auto",
				},
				contentTouchScroll: 25,
				documentTouchScroll: !0,
				advanced: {
					autoScrollOnFocus:
						"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
					updateOnContentResize: !0,
					updateOnImageLoad: "auto",
					autoUpdateTimeout: 60,
				},
				theme: "light",
				callbacks: {
					onTotalScrollOffset: 0,
					onTotalScrollBackOffset: 0,
					alwaysTriggerOffsets: !0,
				},
			},
			r = 0,
			l = {},
			s = window.attachEvent && !window.addEventListener ? 1 : 0,
			c = !1,
			d = [
				"mCSB_dragger_onDrag",
				"mCSB_scrollTools_onDrag",
				"mCS_img_loaded",
				"mCS_disabled",
				"mCS_destroyed",
				"mCS_no_scrollbar",
				"mCS-autoHide",
				"mCS-dir-rtl",
				"mCS_no_scrollbar_y",
				"mCS_no_scrollbar_x",
				"mCS_y_hidden",
				"mCS_x_hidden",
				"mCSB_draggerContainer",
				"mCSB_buttonUp",
				"mCSB_buttonDown",
				"mCSB_buttonLeft",
				"mCSB_buttonRight",
			],
			u = {
				init: function (t) {
					var t = e.extend(!0, {}, i, t),
						o = f.call(this);
					if (t.live) {
						var s = t.liveSelector || this.selector || n,
							c = e(s);
						if ("off" === t.live) return void m(s);
						l[s] = setTimeout(function () {
							c.mCustomScrollbar(t),
								"once" === t.live && c.length && m(s);
						}, 500);
					} else m(s);
					return (
						(t.setWidth = t.set_width ? t.set_width : t.setWidth),
						(t.setHeight = t.set_height
							? t.set_height
							: t.setHeight),
						(t.axis = t.horizontalScroll ? "x" : p(t.axis)),
						(t.scrollInertia =
							t.scrollInertia > 0 && t.scrollInertia < 17
								? 17
								: t.scrollInertia),
						"object" != typeof t.mouseWheel &&
							1 == t.mouseWheel &&
							(t.mouseWheel = {
								enable: !0,
								scrollAmount: "auto",
								axis: "y",
								preventDefault: !1,
								deltaFactor: "auto",
								normalizeDelta: !1,
								invert: !1,
							}),
						(t.mouseWheel.scrollAmount = t.mouseWheelPixels
							? t.mouseWheelPixels
							: t.mouseWheel.scrollAmount),
						(t.mouseWheel.normalizeDelta = t.advanced
							.normalizeMouseWheelDelta
							? t.advanced.normalizeMouseWheelDelta
							: t.mouseWheel.normalizeDelta),
						(t.scrollButtons.scrollType = g(
							t.scrollButtons.scrollType
						)),
						h(t),
						e(o).each(function () {
							var o = e(this);
							if (!o.data(a)) {
								o.data(a, {
									idx: ++r,
									opt: t,
									scrollRatio: { y: null, x: null },
									overflowed: null,
									contentReset: { y: null, x: null },
									bindEvents: !1,
									tweenRunning: !1,
									sequential: {},
									langDir: o.css("direction"),
									cbOffsets: null,
									trigger: null,
									poll: {
										size: { o: 0, n: 0 },
										img: { o: 0, n: 0 },
										change: { o: 0, n: 0 },
									},
								});
								var n = o.data(a),
									i = n.opt,
									l = o.data("mcs-axis"),
									s = o.data("mcs-scrollbar-position"),
									c = o.data("mcs-theme");
								l && (i.axis = l),
									s && (i.scrollbarPosition = s),
									c && ((i.theme = c), h(i)),
									v.call(this),
									n &&
										i.callbacks.onCreate &&
										"function" ==
											typeof i.callbacks.onCreate &&
										i.callbacks.onCreate.call(this),
									e(
										"#mCSB_" +
											n.idx +
											"_container img:not(." +
											d[2] +
											")"
									).addClass(d[2]),
									u.update.call(null, o);
							}
						})
					);
				},
				update: function (t, o) {
					var n = t || f.call(this);
					return e(n).each(function () {
						var t = e(this);
						if (t.data(a)) {
							var n = t.data(a),
								i = n.opt,
								r = e("#mCSB_" + n.idx + "_container"),
								l = e("#mCSB_" + n.idx),
								s = [
									e("#mCSB_" + n.idx + "_dragger_vertical"),
									e("#mCSB_" + n.idx + "_dragger_horizontal"),
								];
							if (!r.length) return;
							n.tweenRunning && Q(t),
								o &&
									n &&
									i.callbacks.onBeforeUpdate &&
									"function" ==
										typeof i.callbacks.onBeforeUpdate &&
									i.callbacks.onBeforeUpdate.call(this),
								t.hasClass(d[3]) && t.removeClass(d[3]),
								t.hasClass(d[4]) && t.removeClass(d[4]),
								l.css("max-height", "none"),
								l.height() !== t.height() &&
									l.css("max-height", t.height()),
								_.call(this),
								"y" === i.axis ||
									i.advanced.autoExpandHorizontalScroll ||
									r.css("width", x(r)),
								(n.overflowed = y.call(this)),
								M.call(this),
								i.autoDraggerLength && S.call(this),
								b.call(this),
								T.call(this);
							var c = [
								Math.abs(r[0].offsetTop),
								Math.abs(r[0].offsetLeft),
							];
							"x" !== i.axis &&
								(n.overflowed[0]
									? s[0].height() > s[0].parent().height()
										? B.call(this)
										: (G(t, c[0].toString(), {
												dir: "y",
												dur: 0,
												overwrite: "none",
										  }),
										  (n.contentReset.y = null))
									: (B.call(this),
									  "y" === i.axis
											? k.call(this)
											: "yx" === i.axis &&
											  n.overflowed[1] &&
											  G(t, c[1].toString(), {
													dir: "x",
													dur: 0,
													overwrite: "none",
											  }))),
								"y" !== i.axis &&
									(n.overflowed[1]
										? s[1].width() > s[1].parent().width()
											? B.call(this)
											: (G(t, c[1].toString(), {
													dir: "x",
													dur: 0,
													overwrite: "none",
											  }),
											  (n.contentReset.x = null))
										: (B.call(this),
										  "x" === i.axis
												? k.call(this)
												: "yx" === i.axis &&
												  n.overflowed[0] &&
												  G(t, c[0].toString(), {
														dir: "y",
														dur: 0,
														overwrite: "none",
												  }))),
								o &&
									n &&
									(2 === o &&
									i.callbacks.onImageLoad &&
									"function" == typeof i.callbacks.onImageLoad
										? i.callbacks.onImageLoad.call(this)
										: 3 === o &&
										  i.callbacks.onSelectorChange &&
										  "function" ==
												typeof i.callbacks
													.onSelectorChange
										? i.callbacks.onSelectorChange.call(
												this
										  )
										: i.callbacks.onUpdate &&
										  "function" ==
												typeof i.callbacks.onUpdate &&
										  i.callbacks.onUpdate.call(this)),
								N.call(this);
						}
					});
				},
				scrollTo: function (t, o) {
					if ("undefined" != typeof t && null != t) {
						var n = f.call(this);
						return e(n).each(function () {
							var n = e(this);
							if (n.data(a)) {
								var i = n.data(a),
									r = i.opt,
									l = {
										trigger: "external",
										scrollInertia: r.scrollInertia,
										scrollEasing: "mcsEaseInOut",
										moveDragger: !1,
										timeout: 60,
										callbacks: !0,
										onStart: !0,
										onUpdate: !0,
										onComplete: !0,
									},
									s = e.extend(!0, {}, l, o),
									c = Y.call(this, t),
									d =
										s.scrollInertia > 0 &&
										s.scrollInertia < 17
											? 17
											: s.scrollInertia;
								(c[0] = X.call(this, c[0], "y")),
									(c[1] = X.call(this, c[1], "x")),
									s.moveDragger &&
										((c[0] *= i.scrollRatio.y),
										(c[1] *= i.scrollRatio.x)),
									(s.dur = ne() ? 0 : d),
									setTimeout(function () {
										null !== c[0] &&
											"undefined" != typeof c[0] &&
											"x" !== r.axis &&
											i.overflowed[0] &&
											((s.dir = "y"),
											(s.overwrite = "all"),
											G(n, c[0].toString(), s)),
											null !== c[1] &&
												"undefined" != typeof c[1] &&
												"y" !== r.axis &&
												i.overflowed[1] &&
												((s.dir = "x"),
												(s.overwrite = "none"),
												G(n, c[1].toString(), s));
									}, s.timeout);
							}
						});
					}
				},
				stop: function () {
					var t = f.call(this);
					return e(t).each(function () {
						var t = e(this);
						t.data(a) && Q(t);
					});
				},
				disable: function (t) {
					var o = f.call(this);
					return e(o).each(function () {
						var o = e(this);
						if (o.data(a)) {
							o.data(a);
							N.call(this, "remove"),
								k.call(this),
								t && B.call(this),
								M.call(this, !0),
								o.addClass(d[3]);
						}
					});
				},
				destroy: function () {
					var t = f.call(this);
					return e(t).each(function () {
						var n = e(this);
						if (n.data(a)) {
							var i = n.data(a),
								r = i.opt,
								l = e("#mCSB_" + i.idx),
								s = e("#mCSB_" + i.idx + "_container"),
								c = e(".mCSB_" + i.idx + "_scrollbar");
							r.live && m(r.liveSelector || e(t).selector),
								N.call(this, "remove"),
								k.call(this),
								B.call(this),
								n.removeData(a),
								$(this, "mcs"),
								c.remove(),
								s.find("img." + d[2]).removeClass(d[2]),
								l.replaceWith(s.contents()),
								n
									.removeClass(
										o +
											" _" +
											a +
											"_" +
											i.idx +
											" " +
											d[6] +
											" " +
											d[7] +
											" " +
											d[5] +
											" " +
											d[3]
									)
									.addClass(d[4]);
						}
					});
				},
			},
			f = function () {
				return "object" != typeof e(this) || e(this).length < 1
					? n
					: this;
			},
			h = function (t) {
				var o = [
						"rounded",
						"rounded-dark",
						"rounded-dots",
						"rounded-dots-dark",
					],
					a = [
						"rounded-dots",
						"rounded-dots-dark",
						"3d",
						"3d-dark",
						"3d-thick",
						"3d-thick-dark",
						"inset",
						"inset-dark",
						"inset-2",
						"inset-2-dark",
						"inset-3",
						"inset-3-dark",
					],
					n = ["minimal", "minimal-dark"],
					i = ["minimal", "minimal-dark"],
					r = ["minimal", "minimal-dark"];
				(t.autoDraggerLength =
					e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength),
					(t.autoExpandScrollbar =
						e.inArray(t.theme, a) > -1
							? !1
							: t.autoExpandScrollbar),
					(t.scrollButtons.enable =
						e.inArray(t.theme, n) > -1
							? !1
							: t.scrollButtons.enable),
					(t.autoHideScrollbar =
						e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar),
					(t.scrollbarPosition =
						e.inArray(t.theme, r) > -1
							? "outside"
							: t.scrollbarPosition);
			},
			m = function (e) {
				l[e] && (clearTimeout(l[e]), $(l, e));
			},
			p = function (e) {
				return "yx" === e || "xy" === e || "auto" === e
					? "yx"
					: "x" === e || "horizontal" === e
					? "x"
					: "y";
			},
			g = function (e) {
				return "stepped" === e ||
					"pixels" === e ||
					"step" === e ||
					"click" === e
					? "stepped"
					: "stepless";
			},
			v = function () {
				var t = e(this),
					n = t.data(a),
					i = n.opt,
					r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
					l = [
						"<div id='mCSB_" +
							n.idx +
							"_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
							n.idx +
							"_scrollbar mCS-" +
							i.theme +
							" mCSB_scrollTools_vertical" +
							r +
							"'><div class='" +
							d[12] +
							"'><div id='mCSB_" +
							n.idx +
							"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
						"<div id='mCSB_" +
							n.idx +
							"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
							n.idx +
							"_scrollbar mCS-" +
							i.theme +
							" mCSB_scrollTools_horizontal" +
							r +
							"'><div class='" +
							d[12] +
							"'><div id='mCSB_" +
							n.idx +
							"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
					],
					s =
						"yx" === i.axis
							? "mCSB_vertical_horizontal"
							: "x" === i.axis
							? "mCSB_horizontal"
							: "mCSB_vertical",
					c =
						"yx" === i.axis
							? l[0] + l[1]
							: "x" === i.axis
							? l[1]
							: l[0],
					u =
						"yx" === i.axis
							? "<div id='mCSB_" +
							  n.idx +
							  "_container_wrapper' class='mCSB_container_wrapper' />"
							: "",
					f = i.autoHideScrollbar ? " " + d[6] : "",
					h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
				i.setWidth && t.css("width", i.setWidth),
					i.setHeight && t.css("height", i.setHeight),
					(i.setLeft =
						"y" !== i.axis && "rtl" === n.langDir
							? "989999px"
							: i.setLeft),
					t
						.addClass(o + " _" + a + "_" + n.idx + f + h)
						.wrapInner(
							"<div id='mCSB_" +
								n.idx +
								"' class='mCustomScrollBox mCS-" +
								i.theme +
								" " +
								s +
								"'><div id='mCSB_" +
								n.idx +
								"_container' class='mCSB_container' style='position:relative; top:" +
								i.setTop +
								"; left:" +
								i.setLeft +
								";' dir='" +
								n.langDir +
								"' /></div>"
						);
				var m = e("#mCSB_" + n.idx),
					p = e("#mCSB_" + n.idx + "_container");
				"y" === i.axis ||
					i.advanced.autoExpandHorizontalScroll ||
					p.css("width", x(p)),
					"outside" === i.scrollbarPosition
						? ("static" === t.css("position") &&
								t.css("position", "relative"),
						  t.css("overflow", "visible"),
						  m.addClass("mCSB_outside").after(c))
						: (m.addClass("mCSB_inside").append(c), p.wrap(u)),
					w.call(this);
				var g = [
					e("#mCSB_" + n.idx + "_dragger_vertical"),
					e("#mCSB_" + n.idx + "_dragger_horizontal"),
				];
				g[0].css("min-height", g[0].height()),
					g[1].css("min-width", g[1].width());
			},
			x = function (t) {
				var o = [
						t[0].scrollWidth,
						Math.max.apply(
							Math,
							t
								.children()
								.map(function () {
									return e(this).outerWidth(!0);
								})
								.get()
						),
					],
					a = t.parent().width();
				return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%";
			},
			_ = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e("#mCSB_" + o.idx + "_container");
				if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) {
					i.css({
						width: "auto",
						"min-width": 0,
						"overflow-x": "scroll",
					});
					var r = Math.ceil(i[0].scrollWidth);
					3 === n.advanced.autoExpandHorizontalScroll ||
					(2 !== n.advanced.autoExpandHorizontalScroll &&
						r > i.parent().width())
						? i.css({
								width: r,
								"min-width": "100%",
								"overflow-x": "inherit",
						  })
						: i
								.css({
									"overflow-x": "inherit",
									position: "absolute",
								})
								.wrap(
									"<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
								)
								.css({
									width:
										Math.ceil(
											i[0].getBoundingClientRect().right +
												0.4
										) -
										Math.floor(
											i[0].getBoundingClientRect().left
										),
									"min-width": "100%",
									position: "relative",
								})
								.unwrap();
				}
			},
			w = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e(".mCSB_" + o.idx + "_scrollbar:first"),
					r = oe(n.scrollButtons.tabindex)
						? "tabindex='" + n.scrollButtons.tabindex + "'"
						: "",
					l = [
						"<a href='#' class='" + d[13] + "' " + r + " />",
						"<a href='#' class='" + d[14] + "' " + r + " />",
						"<a href='#' class='" + d[15] + "' " + r + " />",
						"<a href='#' class='" + d[16] + "' " + r + " />",
					],
					s = [
						"x" === n.axis ? l[2] : l[0],
						"x" === n.axis ? l[3] : l[1],
						l[2],
						l[3],
					];
				n.scrollButtons.enable &&
					i
						.prepend(s[0])
						.append(s[1])
						.next(".mCSB_scrollTools")
						.prepend(s[2])
						.append(s[3]);
			},
			S = function () {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = [
						e("#mCSB_" + o.idx + "_dragger_vertical"),
						e("#mCSB_" + o.idx + "_dragger_horizontal"),
					],
					l = [
						n.height() / i.outerHeight(!1),
						n.width() / i.outerWidth(!1),
					],
					c = [
						parseInt(r[0].css("min-height")),
						Math.round(l[0] * r[0].parent().height()),
						parseInt(r[1].css("min-width")),
						Math.round(l[1] * r[1].parent().width()),
					],
					d = s && c[1] < c[0] ? c[0] : c[1],
					u = s && c[3] < c[2] ? c[2] : c[3];
				r[0]
					.css({
						height: d,
						"max-height": r[0].parent().height() - 10,
					})
					.find(".mCSB_dragger_bar")
					.css({ "line-height": c[0] + "px" }),
					r[1].css({
						width: u,
						"max-width": r[1].parent().width() - 10,
					});
			},
			b = function () {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = [
						e("#mCSB_" + o.idx + "_dragger_vertical"),
						e("#mCSB_" + o.idx + "_dragger_horizontal"),
					],
					l = [
						i.outerHeight(!1) - n.height(),
						i.outerWidth(!1) - n.width(),
					],
					s = [
						l[0] / (r[0].parent().height() - r[0].height()),
						l[1] / (r[1].parent().width() - r[1].width()),
					];
				o.scrollRatio = { y: s[0], x: s[1] };
			},
			C = function (e, t, o) {
				var a = o ? d[0] + "_expanded" : "",
					n = e.closest(".mCSB_scrollTools");
				"active" === t
					? (e.toggleClass(d[0] + " " + a),
					  n.toggleClass(d[1]),
					  (e[0]._draggable = e[0]._draggable ? 0 : 1))
					: e[0]._draggable ||
					  ("hide" === t
							? (e.removeClass(d[0]), n.removeClass(d[1]))
							: (e.addClass(d[0]), n.addClass(d[1])));
			},
			y = function () {
				var t = e(this),
					o = t.data(a),
					n = e("#mCSB_" + o.idx),
					i = e("#mCSB_" + o.idx + "_container"),
					r = null == o.overflowed ? i.height() : i.outerHeight(!1),
					l = null == o.overflowed ? i.width() : i.outerWidth(!1),
					s = i[0].scrollHeight,
					c = i[0].scrollWidth;
				return (
					s > r && (r = s),
					c > l && (l = c),
					[r > n.height(), l > n.width()]
				);
			},
			B = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = e("#mCSB_" + o.idx),
					r = e("#mCSB_" + o.idx + "_container"),
					l = [
						e("#mCSB_" + o.idx + "_dragger_vertical"),
						e("#mCSB_" + o.idx + "_dragger_horizontal"),
					];
				if (
					(Q(t),
					(("x" !== n.axis && !o.overflowed[0]) ||
						("y" === n.axis && o.overflowed[0])) &&
						(l[0].add(r).css("top", 0), G(t, "_resetY")),
					("y" !== n.axis && !o.overflowed[1]) ||
						("x" === n.axis && o.overflowed[1]))
				) {
					var s = (dx = 0);
					"rtl" === o.langDir &&
						((s = i.width() - r.outerWidth(!1)),
						(dx = Math.abs(s / o.scrollRatio.x))),
						r.css("left", s),
						l[1].css("left", dx),
						G(t, "_resetX");
				}
			},
			T = function () {
				function t() {
					r = setTimeout(function () {
						e.event.special.mousewheel
							? (clearTimeout(r), W.call(o[0]))
							: t();
					}, 100);
				}
				var o = e(this),
					n = o.data(a),
					i = n.opt;
				if (!n.bindEvents) {
					if (
						(I.call(this),
						i.contentTouchScroll && D.call(this),
						E.call(this),
						i.mouseWheel.enable)
					) {
						var r;
						t();
					}
					P.call(this),
						U.call(this),
						i.advanced.autoScrollOnFocus && H.call(this),
						i.scrollButtons.enable && F.call(this),
						i.keyboard.enable && q.call(this),
						(n.bindEvents = !0);
				}
			},
			k = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = a + "_" + o.idx,
					r = ".mCSB_" + o.idx + "_scrollbar",
					l = e(
						"#mCSB_" +
							o.idx +
							",#mCSB_" +
							o.idx +
							"_container,#mCSB_" +
							o.idx +
							"_container_wrapper," +
							r +
							" ." +
							d[12] +
							",#mCSB_" +
							o.idx +
							"_dragger_vertical,#mCSB_" +
							o.idx +
							"_dragger_horizontal," +
							r +
							">a"
					),
					s = e("#mCSB_" + o.idx + "_container");
				n.advanced.releaseDraggableSelectors &&
					l.add(e(n.advanced.releaseDraggableSelectors)),
					n.advanced.extraDraggableSelectors &&
						l.add(e(n.advanced.extraDraggableSelectors)),
					o.bindEvents &&
						(e(document)
							.add(e(!A() || top.document))
							.unbind("." + i),
						l.each(function () {
							e(this).unbind("." + i);
						}),
						clearTimeout(t[0]._focusTimeout),
						$(t[0], "_focusTimeout"),
						clearTimeout(o.sequential.step),
						$(o.sequential, "step"),
						clearTimeout(s[0].onCompleteTimeout),
						$(s[0], "onCompleteTimeout"),
						(o.bindEvents = !1));
			},
			M = function (t) {
				var o = e(this),
					n = o.data(a),
					i = n.opt,
					r = e("#mCSB_" + n.idx + "_container_wrapper"),
					l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
					s = [
						e("#mCSB_" + n.idx + "_scrollbar_vertical"),
						e("#mCSB_" + n.idx + "_scrollbar_horizontal"),
					],
					c = [
						s[0].find(".mCSB_dragger"),
						s[1].find(".mCSB_dragger"),
					];
				"x" !== i.axis &&
					(n.overflowed[0] && !t
						? (s[0]
								.add(c[0])
								.add(s[0].children("a"))
								.css("display", "block"),
						  l.removeClass(d[8] + " " + d[10]))
						: (i.alwaysShowScrollbar
								? (2 !== i.alwaysShowScrollbar &&
										c[0].css("display", "none"),
								  l.removeClass(d[10]))
								: (s[0].css("display", "none"),
								  l.addClass(d[10])),
						  l.addClass(d[8]))),
					"y" !== i.axis &&
						(n.overflowed[1] && !t
							? (s[1]
									.add(c[1])
									.add(s[1].children("a"))
									.css("display", "block"),
							  l.removeClass(d[9] + " " + d[11]))
							: (i.alwaysShowScrollbar
									? (2 !== i.alwaysShowScrollbar &&
											c[1].css("display", "none"),
									  l.removeClass(d[11]))
									: (s[1].css("display", "none"),
									  l.addClass(d[11])),
							  l.addClass(d[9]))),
					n.overflowed[0] || n.overflowed[1]
						? o.removeClass(d[5])
						: o.addClass(d[5]);
			},
			O = function (t) {
				var o = t.type,
					a =
						t.target.ownerDocument !== document &&
						null !== frameElement
							? [
									e(frameElement).offset().top,
									e(frameElement).offset().left,
							  ]
							: null,
					n =
						A() &&
						t.target.ownerDocument !== top.document &&
						null !== frameElement
							? [
									e(t.view.frameElement).offset().top,
									e(t.view.frameElement).offset().left,
							  ]
							: [0, 0];
				switch (o) {
					case "pointerdown":
					case "MSPointerDown":
					case "pointermove":
					case "MSPointerMove":
					case "pointerup":
					case "MSPointerUp":
						return a
							? [
									t.originalEvent.pageY - a[0] + n[0],
									t.originalEvent.pageX - a[1] + n[1],
									!1,
							  ]
							: [
									t.originalEvent.pageY,
									t.originalEvent.pageX,
									!1,
							  ];
					case "touchstart":
					case "touchmove":
					case "touchend":
						var i =
								t.originalEvent.touches[0] ||
								t.originalEvent.changedTouches[0],
							r =
								t.originalEvent.touches.length ||
								t.originalEvent.changedTouches.length;
						return t.target.ownerDocument !== document
							? [i.screenY, i.screenX, r > 1]
							: [i.pageY, i.pageX, r > 1];
					default:
						return a
							? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1]
							: [t.pageY, t.pageX, !1];
				}
			},
			I = function () {
				function t(e, t, a, n) {
					if (
						((h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0),
						o.attr("id") === f[1])
					)
						var i = "x",
							s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
					else
						var i = "y",
							s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
					G(r, s.toString(), { dir: i, drag: !0 });
				}
				var o,
					n,
					i,
					r = e(this),
					l = r.data(a),
					d = l.opt,
					u = a + "_" + l.idx,
					f = [
						"mCSB_" + l.idx + "_dragger_vertical",
						"mCSB_" + l.idx + "_dragger_horizontal",
					],
					h = e("#mCSB_" + l.idx + "_container"),
					m = e("#" + f[0] + ",#" + f[1]),
					p = d.advanced.releaseDraggableSelectors
						? m.add(e(d.advanced.releaseDraggableSelectors))
						: m,
					g = d.advanced.extraDraggableSelectors
						? e(!A() || top.document).add(
								e(d.advanced.extraDraggableSelectors)
						  )
						: e(!A() || top.document);
				m
					.bind("contextmenu." + u, function (e) {
						e.preventDefault();
					})
					.bind(
						"mousedown." +
							u +
							" touchstart." +
							u +
							" pointerdown." +
							u +
							" MSPointerDown." +
							u,
						function (t) {
							if (
								(t.stopImmediatePropagation(),
								t.preventDefault(),
								ee(t))
							) {
								(c = !0),
									s &&
										(document.onselectstart = function () {
											return !1;
										}),
									L.call(h, !1),
									Q(r),
									(o = e(this));
								var a = o.offset(),
									l = O(t)[0] - a.top,
									u = O(t)[1] - a.left,
									f = o.height() + a.top,
									m = o.width() + a.left;
								f > l &&
									l > 0 &&
									m > u &&
									u > 0 &&
									((n = l), (i = u)),
									C(o, "active", d.autoExpandScrollbar);
							}
						}
					)
					.bind("touchmove." + u, function (e) {
						e.stopImmediatePropagation(), e.preventDefault();
						var a = o.offset(),
							r = O(e)[0] - a.top,
							l = O(e)[1] - a.left;
						t(n, i, r, l);
					}),
					e(document)
						.add(g)
						.bind(
							"mousemove." +
								u +
								" pointermove." +
								u +
								" MSPointerMove." +
								u,
							function (e) {
								if (o) {
									var a = o.offset(),
										r = O(e)[0] - a.top,
										l = O(e)[1] - a.left;
									if (n === r && i === l) return;
									t(n, i, r, l);
								}
							}
						)
						.add(p)
						.bind(
							"mouseup." +
								u +
								" touchend." +
								u +
								" pointerup." +
								u +
								" MSPointerUp." +
								u,
							function () {
								o &&
									(C(o, "active", d.autoExpandScrollbar),
									(o = null)),
									(c = !1),
									s && (document.onselectstart = null),
									L.call(h, !0);
							}
						);
			},
			D = function () {
				function o(e) {
					if (!te(e) || c || O(e)[2]) return void (t = 0);
					(t = 1),
						(b = 0),
						(C = 0),
						(d = 1),
						y.removeClass("mCS_touch_action");
					var o = I.offset();
					(u = O(e)[0] - o.top),
						(f = O(e)[1] - o.left),
						(z = [O(e)[0], O(e)[1]]);
				}
				function n(e) {
					if (
						te(e) &&
						!c &&
						!O(e)[2] &&
						(T.documentTouchScroll || e.preventDefault(),
						e.stopImmediatePropagation(),
						(!C || b) && d)
					) {
						g = K();
						var t = M.offset(),
							o = O(e)[0] - t.top,
							a = O(e)[1] - t.left,
							n = "mcsLinearOut";
						if (
							(E.push(o),
							W.push(a),
							(z[2] = Math.abs(O(e)[0] - z[0])),
							(z[3] = Math.abs(O(e)[1] - z[1])),
							B.overflowed[0])
						)
							var i = D[0].parent().height() - D[0].height(),
								r =
									u - o > 0 &&
									o - u > -(i * B.scrollRatio.y) &&
									(2 * z[3] < z[2] || "yx" === T.axis);
						if (B.overflowed[1])
							var l = D[1].parent().width() - D[1].width(),
								h =
									f - a > 0 &&
									a - f > -(l * B.scrollRatio.x) &&
									(2 * z[2] < z[3] || "yx" === T.axis);
						r || h
							? (U || e.preventDefault(), (b = 1))
							: ((C = 1), y.addClass("mCS_touch_action")),
							U && e.preventDefault(),
							(w =
								"yx" === T.axis
									? [u - o, f - a]
									: "x" === T.axis
									? [null, f - a]
									: [u - o, null]),
							(I[0].idleTimer = 250),
							B.overflowed[0] && s(w[0], R, n, "y", "all", !0),
							B.overflowed[1] && s(w[1], R, n, "x", L, !0);
					}
				}
				function i(e) {
					if (!te(e) || c || O(e)[2]) return void (t = 0);
					(t = 1), e.stopImmediatePropagation(), Q(y), (p = K());
					var o = M.offset();
					(h = O(e)[0] - o.top),
						(m = O(e)[1] - o.left),
						(E = []),
						(W = []);
				}
				function r(e) {
					if (te(e) && !c && !O(e)[2]) {
						(d = 0),
							e.stopImmediatePropagation(),
							(b = 0),
							(C = 0),
							(v = K());
						var t = M.offset(),
							o = O(e)[0] - t.top,
							a = O(e)[1] - t.left;
						if (!(v - g > 30)) {
							_ = 1e3 / (v - p);
							var n = "mcsEaseOut",
								i = 2.5 > _,
								r = i
									? [E[E.length - 2], W[W.length - 2]]
									: [0, 0];
							x = i ? [o - r[0], a - r[1]] : [o - h, a - m];
							var u = [Math.abs(x[0]), Math.abs(x[1])];
							_ = i
								? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)]
								: [_, _];
							var f = [
								Math.abs(I[0].offsetTop) -
									x[0] * l(u[0] / _[0], _[0]),
								Math.abs(I[0].offsetLeft) -
									x[1] * l(u[1] / _[1], _[1]),
							];
							(w =
								"yx" === T.axis
									? [f[0], f[1]]
									: "x" === T.axis
									? [null, f[1]]
									: [f[0], null]),
								(S = [
									4 * u[0] + T.scrollInertia,
									4 * u[1] + T.scrollInertia,
								]);
							var y = parseInt(T.contentTouchScroll) || 0;
							(w[0] = u[0] > y ? w[0] : 0),
								(w[1] = u[1] > y ? w[1] : 0),
								B.overflowed[0] && s(w[0], S[0], n, "y", L, !1),
								B.overflowed[1] && s(w[1], S[1], n, "x", L, !1);
						}
					}
				}
				function l(e, t) {
					var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
					return e > 90
						? t > 4
							? o[0]
							: o[3]
						: e > 60
						? t > 3
							? o[3]
							: o[2]
						: e > 30
						? t > 8
							? o[1]
							: t > 6
							? o[0]
							: t > 4
							? t
							: o[2]
						: t > 8
						? t
						: o[3];
				}
				function s(e, t, o, a, n, i) {
					e &&
						G(y, e.toString(), {
							dur: t,
							scrollEasing: o,
							dir: a,
							overwrite: n,
							drag: i,
						});
				}
				var d,
					u,
					f,
					h,
					m,
					p,
					g,
					v,
					x,
					_,
					w,
					S,
					b,
					C,
					y = e(this),
					B = y.data(a),
					T = B.opt,
					k = a + "_" + B.idx,
					M = e("#mCSB_" + B.idx),
					I = e("#mCSB_" + B.idx + "_container"),
					D = [
						e("#mCSB_" + B.idx + "_dragger_vertical"),
						e("#mCSB_" + B.idx + "_dragger_horizontal"),
					],
					E = [],
					W = [],
					R = 0,
					L = "yx" === T.axis ? "none" : "all",
					z = [],
					P = I.find("iframe"),
					H = [
						"touchstart." +
							k +
							" pointerdown." +
							k +
							" MSPointerDown." +
							k,
						"touchmove." +
							k +
							" pointermove." +
							k +
							" MSPointerMove." +
							k,
						"touchend." +
							k +
							" pointerup." +
							k +
							" MSPointerUp." +
							k,
					],
					U =
						void 0 !== document.body.style.touchAction &&
						"" !== document.body.style.touchAction;
				I.bind(H[0], function (e) {
					o(e);
				}).bind(H[1], function (e) {
					n(e);
				}),
					M.bind(H[0], function (e) {
						i(e);
					}).bind(H[2], function (e) {
						r(e);
					}),
					P.length &&
						P.each(function () {
							e(this).bind("load", function () {
								A(this) &&
									e(
										this.contentDocument ||
											this.contentWindow.document
									)
										.bind(H[0], function (e) {
											o(e), i(e);
										})
										.bind(H[1], function (e) {
											n(e);
										})
										.bind(H[2], function (e) {
											r(e);
										});
							});
						});
			},
			E = function () {
				function o() {
					return window.getSelection
						? window.getSelection().toString()
						: document.selection &&
						  "Control" != document.selection.type
						? document.selection.createRange().text
						: 0;
				}
				function n(e, t, o) {
					(d.type = o && i ? "stepped" : "stepless"),
						(d.scrollAmount = 10),
						j(r, e, t, "mcsLinearOut", o ? 60 : null);
				}
				var i,
					r = e(this),
					l = r.data(a),
					s = l.opt,
					d = l.sequential,
					u = a + "_" + l.idx,
					f = e("#mCSB_" + l.idx + "_container"),
					h = f.parent();
				f.bind("mousedown." + u, function () {
					t || i || ((i = 1), (c = !0));
				})
					.add(document)
					.bind("mousemove." + u, function (e) {
						if (!t && i && o()) {
							var a = f.offset(),
								r = O(e)[0] - a.top + f[0].offsetTop,
								c = O(e)[1] - a.left + f[0].offsetLeft;
							r > 0 && r < h.height() && c > 0 && c < h.width()
								? d.step && n("off", null, "stepped")
								: ("x" !== s.axis &&
										l.overflowed[0] &&
										(0 > r
											? n("on", 38)
											: r > h.height() && n("on", 40)),
								  "y" !== s.axis &&
										l.overflowed[1] &&
										(0 > c
											? n("on", 37)
											: c > h.width() && n("on", 39)));
						}
					})
					.bind("mouseup." + u + " dragend." + u, function () {
						t || (i && ((i = 0), n("off", null)), (c = !1));
					});
			},
			W = function () {
				function t(t, a) {
					if ((Q(o), !z(o, t.target))) {
						var r =
								"auto" !== i.mouseWheel.deltaFactor
									? parseInt(i.mouseWheel.deltaFactor)
									: s && t.deltaFactor < 100
									? 100
									: t.deltaFactor || 100,
							d = i.scrollInertia;
						if ("x" === i.axis || "x" === i.mouseWheel.axis)
							var u = "x",
								f = [
									Math.round(r * n.scrollRatio.x),
									parseInt(i.mouseWheel.scrollAmount),
								],
								h =
									"auto" !== i.mouseWheel.scrollAmount
										? f[1]
										: f[0] >= l.width()
										? 0.9 * l.width()
										: f[0],
								m = Math.abs(
									e("#mCSB_" + n.idx + "_container")[0]
										.offsetLeft
								),
								p = c[1][0].offsetLeft,
								g = c[1].parent().width() - c[1].width(),
								v =
									"y" === i.mouseWheel.axis
										? t.deltaY || a
										: t.deltaX;
						else
							var u = "y",
								f = [
									Math.round(r * n.scrollRatio.y),
									parseInt(i.mouseWheel.scrollAmount),
								],
								h =
									"auto" !== i.mouseWheel.scrollAmount
										? f[1]
										: f[0] >= l.height()
										? 0.9 * l.height()
										: f[0],
								m = Math.abs(
									e("#mCSB_" + n.idx + "_container")[0]
										.offsetTop
								),
								p = c[0][0].offsetTop,
								g = c[0].parent().height() - c[0].height(),
								v = t.deltaY || a;
						("y" === u && !n.overflowed[0]) ||
							("x" === u && !n.overflowed[1]) ||
							((i.mouseWheel.invert ||
								t.webkitDirectionInvertedFromDevice) &&
								(v = -v),
							i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
							((v > 0 && 0 !== p) ||
								(0 > v && p !== g) ||
								i.mouseWheel.preventDefault) &&
								(t.stopImmediatePropagation(),
								t.preventDefault()),
							t.deltaFactor < 5 &&
								!i.mouseWheel.normalizeDelta &&
								((h = t.deltaFactor), (d = 17)),
							G(o, (m - v * h).toString(), { dir: u, dur: d }));
					}
				}
				if (e(this).data(a)) {
					var o = e(this),
						n = o.data(a),
						i = n.opt,
						r = a + "_" + n.idx,
						l = e("#mCSB_" + n.idx),
						c = [
							e("#mCSB_" + n.idx + "_dragger_vertical"),
							e("#mCSB_" + n.idx + "_dragger_horizontal"),
						],
						d = e("#mCSB_" + n.idx + "_container").find("iframe");
					d.length &&
						d.each(function () {
							e(this).bind("load", function () {
								A(this) &&
									e(
										this.contentDocument ||
											this.contentWindow.document
									).bind("mousewheel." + r, function (e, o) {
										t(e, o);
									});
							});
						}),
						l.bind("mousewheel." + r, function (e, o) {
							t(e, o);
						});
				}
			},
			R = new Object(),
			A = function (t) {
				var o = !1,
					a = !1,
					n = null;
				if (
					(void 0 === t
						? (a = "#empty")
						: void 0 !== e(t).attr("id") && (a = e(t).attr("id")),
					a !== !1 && void 0 !== R[a])
				)
					return R[a];
				if (t) {
					try {
						var i = t.contentDocument || t.contentWindow.document;
						n = i.body.innerHTML;
					} catch (r) {}
					o = null !== n;
				} else {
					try {
						var i = top.document;
						n = i.body.innerHTML;
					} catch (r) {}
					o = null !== n;
				}
				return a !== !1 && (R[a] = o), o;
			},
			L = function (e) {
				var t = this.find("iframe");
				if (t.length) {
					var o = e ? "auto" : "none";
					t.css("pointer-events", o);
				}
			},
			z = function (t, o) {
				var n = o.nodeName.toLowerCase(),
					i = t.data(a).opt.mouseWheel.disableOver,
					r = ["select", "textarea"];
				return (
					e.inArray(n, i) > -1 &&
					!(e.inArray(n, r) > -1 && !e(o).is(":focus"))
				);
			},
			P = function () {
				var t,
					o = e(this),
					n = o.data(a),
					i = a + "_" + n.idx,
					r = e("#mCSB_" + n.idx + "_container"),
					l = r.parent(),
					s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
				s.bind(
					"mousedown." +
						i +
						" touchstart." +
						i +
						" pointerdown." +
						i +
						" MSPointerDown." +
						i,
					function (o) {
						(c = !0),
							e(o.target).hasClass("mCSB_dragger") || (t = 1);
					}
				)
					.bind(
						"touchend." +
							i +
							" pointerup." +
							i +
							" MSPointerUp." +
							i,
						function () {
							c = !1;
						}
					)
					.bind("click." + i, function (a) {
						if (
							t &&
							((t = 0),
							e(a.target).hasClass(d[12]) ||
								e(a.target).hasClass("mCSB_draggerRail"))
						) {
							Q(o);
							var i = e(this),
								s = i.find(".mCSB_dragger");
							if (
								i.parent(".mCSB_scrollTools_horizontal")
									.length > 0
							) {
								if (!n.overflowed[1]) return;
								var c = "x",
									u = a.pageX > s.offset().left ? -1 : 1,
									f =
										Math.abs(r[0].offsetLeft) -
										u * (0.9 * l.width());
							} else {
								if (!n.overflowed[0]) return;
								var c = "y",
									u = a.pageY > s.offset().top ? -1 : 1,
									f =
										Math.abs(r[0].offsetTop) -
										u * (0.9 * l.height());
							}
							G(o, f.toString(), {
								dir: c,
								scrollEasing: "mcsEaseInOut",
							});
						}
					});
			},
			H = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = a + "_" + o.idx,
					r = e("#mCSB_" + o.idx + "_container"),
					l = r.parent();
				r.bind("focusin." + i, function () {
					var o = e(document.activeElement),
						a = r.find(".mCustomScrollBox").length,
						i = 0;
					o.is(n.advanced.autoScrollOnFocus) &&
						(Q(t),
						clearTimeout(t[0]._focusTimeout),
						(t[0]._focusTimer = a ? (i + 17) * a : 0),
						(t[0]._focusTimeout = setTimeout(function () {
							var e = [ae(o)[0], ae(o)[1]],
								a = [r[0].offsetTop, r[0].offsetLeft],
								s = [
									a[0] + e[0] >= 0 &&
										a[0] + e[0] <
											l.height() - o.outerHeight(!1),
									a[1] + e[1] >= 0 &&
										a[0] + e[1] <
											l.width() - o.outerWidth(!1),
								],
								c =
									"yx" !== n.axis || s[0] || s[1]
										? "all"
										: "none";
							"x" === n.axis ||
								s[0] ||
								G(t, e[0].toString(), {
									dir: "y",
									scrollEasing: "mcsEaseInOut",
									overwrite: c,
									dur: i,
								}),
								"y" === n.axis ||
									s[1] ||
									G(t, e[1].toString(), {
										dir: "x",
										scrollEasing: "mcsEaseInOut",
										overwrite: c,
										dur: i,
									});
						}, t[0]._focusTimer)));
				});
			},
			U = function () {
				var t = e(this),
					o = t.data(a),
					n = a + "_" + o.idx,
					i = e("#mCSB_" + o.idx + "_container").parent();
				i.bind("scroll." + n, function () {
					(0 === i.scrollTop() && 0 === i.scrollLeft()) ||
						e(".mCSB_" + o.idx + "_scrollbar").css(
							"visibility",
							"hidden"
						);
				});
			},
			F = function () {
				var t = e(this),
					o = t.data(a),
					n = o.opt,
					i = o.sequential,
					r = a + "_" + o.idx,
					l = ".mCSB_" + o.idx + "_scrollbar",
					s = e(l + ">a");
				s.bind("contextmenu." + r, function (e) {
					e.preventDefault();
				}).bind(
					"mousedown." +
						r +
						" touchstart." +
						r +
						" pointerdown." +
						r +
						" MSPointerDown." +
						r +
						" mouseup." +
						r +
						" touchend." +
						r +
						" pointerup." +
						r +
						" MSPointerUp." +
						r +
						" mouseout." +
						r +
						" pointerout." +
						r +
						" MSPointerOut." +
						r +
						" click." +
						r,
					function (a) {
						function r(e, o) {
							(i.scrollAmount = n.scrollButtons.scrollAmount),
								j(t, e, o);
						}
						if ((a.preventDefault(), ee(a))) {
							var l = e(this).attr("class");
							switch (
								((i.type = n.scrollButtons.scrollType), a.type)
							) {
								case "mousedown":
								case "touchstart":
								case "pointerdown":
								case "MSPointerDown":
									if ("stepped" === i.type) return;
									(c = !0), (o.tweenRunning = !1), r("on", l);
									break;
								case "mouseup":
								case "touchend":
								case "pointerup":
								case "MSPointerUp":
								case "mouseout":
								case "pointerout":
								case "MSPointerOut":
									if ("stepped" === i.type) return;
									(c = !1), i.dir && r("off", l);
									break;
								case "click":
									if ("stepped" !== i.type || o.tweenRunning)
										return;
									r("on", l);
							}
						}
					}
				);
			},
			q = function () {
				function t(t) {
					function a(e, t) {
						(r.type = i.keyboard.scrollType),
							(r.scrollAmount = i.keyboard.scrollAmount),
							("stepped" === r.type && n.tweenRunning) ||
								j(o, e, t);
					}
					switch (t.type) {
						case "blur":
							n.tweenRunning && r.dir && a("off", null);
							break;
						case "keydown":
						case "keyup":
							var l = t.keyCode ? t.keyCode : t.which,
								s = "on";
							if (
								("x" !== i.axis && (38 === l || 40 === l)) ||
								("y" !== i.axis && (37 === l || 39 === l))
							) {
								if (
									((38 === l || 40 === l) &&
										!n.overflowed[0]) ||
									((37 === l || 39 === l) && !n.overflowed[1])
								)
									return;
								"keyup" === t.type && (s = "off"),
									e(document.activeElement).is(u) ||
										(t.preventDefault(),
										t.stopImmediatePropagation(),
										a(s, l));
							} else if (33 === l || 34 === l) {
								if (
									((n.overflowed[0] || n.overflowed[1]) &&
										(t.preventDefault(),
										t.stopImmediatePropagation()),
									"keyup" === t.type)
								) {
									Q(o);
									var f = 34 === l ? -1 : 1;
									if (
										"x" === i.axis ||
										("yx" === i.axis &&
											n.overflowed[1] &&
											!n.overflowed[0])
									)
										var h = "x",
											m =
												Math.abs(c[0].offsetLeft) -
												f * (0.9 * d.width());
									else
										var h = "y",
											m =
												Math.abs(c[0].offsetTop) -
												f * (0.9 * d.height());
									G(o, m.toString(), {
										dir: h,
										scrollEasing: "mcsEaseInOut",
									});
								}
							} else if (
								(35 === l || 36 === l) &&
								!e(document.activeElement).is(u) &&
								((n.overflowed[0] || n.overflowed[1]) &&
									(t.preventDefault(),
									t.stopImmediatePropagation()),
								"keyup" === t.type)
							) {
								if (
									"x" === i.axis ||
									("yx" === i.axis &&
										n.overflowed[1] &&
										!n.overflowed[0])
								)
									var h = "x",
										m =
											35 === l
												? Math.abs(
														d.width() -
															c.outerWidth(!1)
												  )
												: 0;
								else
									var h = "y",
										m =
											35 === l
												? Math.abs(
														d.height() -
															c.outerHeight(!1)
												  )
												: 0;
								G(o, m.toString(), {
									dir: h,
									scrollEasing: "mcsEaseInOut",
								});
							}
					}
				}
				var o = e(this),
					n = o.data(a),
					i = n.opt,
					r = n.sequential,
					l = a + "_" + n.idx,
					s = e("#mCSB_" + n.idx),
					c = e("#mCSB_" + n.idx + "_container"),
					d = c.parent(),
					u =
						"input,textarea,select,datalist,keygen,[contenteditable='true']",
					f = c.find("iframe"),
					h = ["blur." + l + " keydown." + l + " keyup." + l];
				f.length &&
					f.each(function () {
						e(this).bind("load", function () {
							A(this) &&
								e(
									this.contentDocument ||
										this.contentWindow.document
								).bind(h[0], function (e) {
									t(e);
								});
						});
					}),
					s.attr("tabindex", "0").bind(h[0], function (e) {
						t(e);
					});
			},
			j = function (t, o, n, i, r) {
				function l(e) {
					u.snapAmount &&
						(f.scrollAmount =
							u.snapAmount instanceof Array
								? "x" === f.dir[0]
									? u.snapAmount[1]
									: u.snapAmount[0]
								: u.snapAmount);
					var o = "stepped" !== f.type,
						a = r ? r : e ? (o ? p / 1.5 : g) : 1e3 / 60,
						n = e ? (o ? 7.5 : 40) : 2.5,
						s = [
							Math.abs(h[0].offsetTop),
							Math.abs(h[0].offsetLeft),
						],
						d = [
							c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y,
							c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x,
						],
						m =
							"x" === f.dir[0]
								? s[1] + f.dir[1] * (d[1] * n)
								: s[0] + f.dir[1] * (d[0] * n),
						v =
							"x" === f.dir[0]
								? s[1] + f.dir[1] * parseInt(f.scrollAmount)
								: s[0] + f.dir[1] * parseInt(f.scrollAmount),
						x = "auto" !== f.scrollAmount ? v : m,
						_ = i
							? i
							: e
							? o
								? "mcsLinearOut"
								: "mcsEaseInOut"
							: "mcsLinear",
						w = !!e;
					return (
						e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]),
						G(t, x.toString(), {
							dir: f.dir[0],
							scrollEasing: _,
							dur: a,
							onComplete: w,
						}),
						e
							? void (f.dir = !1)
							: (clearTimeout(f.step),
							  void (f.step = setTimeout(function () {
									l();
							  }, a)))
					);
				}
				function s() {
					clearTimeout(f.step), $(f, "step"), Q(t);
				}
				var c = t.data(a),
					u = c.opt,
					f = c.sequential,
					h = e("#mCSB_" + c.idx + "_container"),
					m = "stepped" === f.type,
					p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
					g = u.scrollInertia < 1 ? 17 : u.scrollInertia;
				switch (o) {
					case "on":
						if (
							((f.dir = [
								n === d[16] ||
								n === d[15] ||
								39 === n ||
								37 === n
									? "x"
									: "y",
								n === d[13] ||
								n === d[15] ||
								38 === n ||
								37 === n
									? -1
									: 1,
							]),
							Q(t),
							oe(n) && "stepped" === f.type)
						)
							return;
						l(m);
						break;
					case "off":
						s(), (m || (c.tweenRunning && f.dir)) && l(!0);
				}
			},
			Y = function (t) {
				var o = e(this).data(a).opt,
					n = [];
				return (
					"function" == typeof t && (t = t()),
					t instanceof Array
						? (n =
								t.length > 1
									? [t[0], t[1]]
									: "x" === o.axis
									? [null, t[0]]
									: [t[0], null])
						: ((n[0] = t.y
								? t.y
								: t.x || "x" === o.axis
								? null
								: t),
						  (n[1] = t.x
								? t.x
								: t.y || "y" === o.axis
								? null
								: t)),
					"function" == typeof n[0] && (n[0] = n[0]()),
					"function" == typeof n[1] && (n[1] = n[1]()),
					n
				);
			},
			X = function (t, o) {
				if (null != t && "undefined" != typeof t) {
					var n = e(this),
						i = n.data(a),
						r = i.opt,
						l = e("#mCSB_" + i.idx + "_container"),
						s = l.parent(),
						c = typeof t;
					o || (o = "x" === r.axis ? "x" : "y");
					var d =
							"x" === o
								? l.outerWidth(!1) - s.width()
								: l.outerHeight(!1) - s.height(),
						f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
						h = "x" === o ? "left" : "top";
					switch (c) {
						case "function":
							return t();
						case "object":
							var m = t.jquery ? t : e(t);
							if (!m.length) return;
							return "x" === o ? ae(m)[1] : ae(m)[0];
						case "string":
						case "number":
							if (oe(t)) return Math.abs(t);
							if (-1 !== t.indexOf("%"))
								return Math.abs((d * parseInt(t)) / 100);
							if (-1 !== t.indexOf("-="))
								return Math.abs(f - parseInt(t.split("-=")[1]));
							if (-1 !== t.indexOf("+=")) {
								var p = f + parseInt(t.split("+=")[1]);
								return p >= 0 ? 0 : Math.abs(p);
							}
							if (-1 !== t.indexOf("px") && oe(t.split("px")[0]))
								return Math.abs(t.split("px")[0]);
							if ("top" === t || "left" === t) return 0;
							if ("bottom" === t)
								return Math.abs(s.height() - l.outerHeight(!1));
							if ("right" === t)
								return Math.abs(s.width() - l.outerWidth(!1));
							if ("first" === t || "last" === t) {
								var m = l.find(":" + t);
								return "x" === o ? ae(m)[1] : ae(m)[0];
							}
							return e(t).length
								? "x" === o
									? ae(e(t))[1]
									: ae(e(t))[0]
								: (l.css(h, t), void u.update.call(null, n[0]));
					}
				}
			},
			N = function (t) {
				function o() {
					return (
						clearTimeout(f[0].autoUpdate),
						0 === l.parents("html").length
							? void (l = null)
							: void (f[0].autoUpdate = setTimeout(function () {
									return c.advanced.updateOnSelectorChange &&
										((s.poll.change.n = i()),
										s.poll.change.n !== s.poll.change.o)
										? ((s.poll.change.o = s.poll.change.n),
										  void r(3))
										: c.advanced.updateOnContentResize &&
										  ((s.poll.size.n =
												l[0].scrollHeight +
												l[0].scrollWidth +
												f[0].offsetHeight +
												l[0].offsetHeight +
												l[0].offsetWidth),
										  s.poll.size.n !== s.poll.size.o)
										? ((s.poll.size.o = s.poll.size.n),
										  void r(1))
										: !c.advanced.updateOnImageLoad ||
										  ("auto" ===
												c.advanced.updateOnImageLoad &&
												"y" === c.axis) ||
										  ((s.poll.img.n =
												f.find("img").length),
										  s.poll.img.n === s.poll.img.o)
										? void (
												(c.advanced
													.updateOnSelectorChange ||
													c.advanced
														.updateOnContentResize ||
													c.advanced
														.updateOnImageLoad) &&
												o()
										  )
										: ((s.poll.img.o = s.poll.img.n),
										  void f.find("img").each(function () {
												n(this);
										  }));
							  }, c.advanced.autoUpdateTimeout))
					);
				}
				function n(t) {
					function o(e, t) {
						return function () {
							return t.apply(e, arguments);
						};
					}
					function a() {
						(this.onload = null), e(t).addClass(d[2]), r(2);
					}
					if (e(t).hasClass(d[2])) return void r();
					var n = new Image();
					(n.onload = o(n, a)), (n.src = t.src);
				}
				function i() {
					c.advanced.updateOnSelectorChange === !0 &&
						(c.advanced.updateOnSelectorChange = "*");
					var e = 0,
						t = f.find(c.advanced.updateOnSelectorChange);
					return (
						c.advanced.updateOnSelectorChange &&
							t.length > 0 &&
							t.each(function () {
								e += this.offsetHeight + this.offsetWidth;
							}),
						e
					);
				}
				function r(e) {
					clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e);
				}
				var l = e(this),
					s = l.data(a),
					c = s.opt,
					f = e("#mCSB_" + s.idx + "_container");
				return t
					? (clearTimeout(f[0].autoUpdate),
					  void $(f[0], "autoUpdate"))
					: void o();
			},
			V = function (e, t, o) {
				return Math.round(e / t) * t - o;
			},
			Q = function (t) {
				var o = t.data(a),
					n = e(
						"#mCSB_" +
							o.idx +
							"_container,#mCSB_" +
							o.idx +
							"_container_wrapper,#mCSB_" +
							o.idx +
							"_dragger_vertical,#mCSB_" +
							o.idx +
							"_dragger_horizontal"
					);
				n.each(function () {
					Z.call(this);
				});
			},
			G = function (t, o, n) {
				function i(e) {
					return (
						s &&
						c.callbacks[e] &&
						"function" == typeof c.callbacks[e]
					);
				}
				function r() {
					return [
						c.callbacks.alwaysTriggerOffsets || w >= S[0] + y,
						c.callbacks.alwaysTriggerOffsets || -B >= w,
					];
				}
				function l() {
					var e = [h[0].offsetTop, h[0].offsetLeft],
						o = [x[0].offsetTop, x[0].offsetLeft],
						a = [h.outerHeight(!1), h.outerWidth(!1)],
						i = [f.height(), f.width()];
					t[0].mcs = {
						content: h,
						top: e[0],
						left: e[1],
						draggerTop: o[0],
						draggerLeft: o[1],
						topPct: Math.round(
							(100 * Math.abs(e[0])) / (Math.abs(a[0]) - i[0])
						),
						leftPct: Math.round(
							(100 * Math.abs(e[1])) / (Math.abs(a[1]) - i[1])
						),
						direction: n.dir,
					};
				}
				var s = t.data(a),
					c = s.opt,
					d = {
						trigger: "internal",
						dir: "y",
						scrollEasing: "mcsEaseOut",
						drag: !1,
						dur: c.scrollInertia,
						overwrite: "all",
						callbacks: !0,
						onStart: !0,
						onUpdate: !0,
						onComplete: !0,
					},
					n = e.extend(d, n),
					u = [n.dur, n.drag ? 0 : n.dur],
					f = e("#mCSB_" + s.idx),
					h = e("#mCSB_" + s.idx + "_container"),
					m = h.parent(),
					p = c.callbacks.onTotalScrollOffset
						? Y.call(t, c.callbacks.onTotalScrollOffset)
						: [0, 0],
					g = c.callbacks.onTotalScrollBackOffset
						? Y.call(t, c.callbacks.onTotalScrollBackOffset)
						: [0, 0];
				if (
					((s.trigger = n.trigger),
					(0 === m.scrollTop() && 0 === m.scrollLeft()) ||
						(e(".mCSB_" + s.idx + "_scrollbar").css(
							"visibility",
							"visible"
						),
						m.scrollTop(0).scrollLeft(0)),
					"_resetY" !== o ||
						s.contentReset.y ||
						(i("onOverflowYNone") &&
							c.callbacks.onOverflowYNone.call(t[0]),
						(s.contentReset.y = 1)),
					"_resetX" !== o ||
						s.contentReset.x ||
						(i("onOverflowXNone") &&
							c.callbacks.onOverflowXNone.call(t[0]),
						(s.contentReset.x = 1)),
					"_resetY" !== o && "_resetX" !== o)
				) {
					if (
						((!s.contentReset.y && t[0].mcs) ||
							!s.overflowed[0] ||
							(i("onOverflowY") &&
								c.callbacks.onOverflowY.call(t[0]),
							(s.contentReset.x = null)),
						(!s.contentReset.x && t[0].mcs) ||
							!s.overflowed[1] ||
							(i("onOverflowX") &&
								c.callbacks.onOverflowX.call(t[0]),
							(s.contentReset.x = null)),
						c.snapAmount)
					) {
						var v =
							c.snapAmount instanceof Array
								? "x" === n.dir
									? c.snapAmount[1]
									: c.snapAmount[0]
								: c.snapAmount;
						o = V(o, v, c.snapOffset);
					}
					switch (n.dir) {
						case "x":
							var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
								_ = "left",
								w = h[0].offsetLeft,
								S = [
									f.width() - h.outerWidth(!1),
									x.parent().width() - x.width(),
								],
								b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
								y = p[1],
								B = g[1],
								T = y > 0 ? y / s.scrollRatio.x : 0,
								k = B > 0 ? B / s.scrollRatio.x : 0;
							break;
						case "y":
							var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
								_ = "top",
								w = h[0].offsetTop,
								S = [
									f.height() - h.outerHeight(!1),
									x.parent().height() - x.height(),
								],
								b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
								y = p[0],
								B = g[0],
								T = y > 0 ? y / s.scrollRatio.y : 0,
								k = B > 0 ? B / s.scrollRatio.y : 0;
					}
					b[1] < 0 || (0 === b[0] && 0 === b[1])
						? (b = [0, 0])
						: b[1] >= S[1]
						? (b = [S[0], S[1]])
						: (b[0] = -b[0]),
						t[0].mcs ||
							(l(), i("onInit") && c.callbacks.onInit.call(t[0])),
						clearTimeout(h[0].onCompleteTimeout),
						J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
						(!s.tweenRunning &&
							((0 === w && b[0] >= 0) ||
								(w === S[0] && b[0] <= S[0]))) ||
							J(
								h[0],
								_,
								Math.round(b[0]),
								u[0],
								n.scrollEasing,
								n.overwrite,
								{
									onStart: function () {
										n.callbacks &&
											n.onStart &&
											!s.tweenRunning &&
											(i("onScrollStart") &&
												(l(),
												c.callbacks.onScrollStart.call(
													t[0]
												)),
											(s.tweenRunning = !0),
											C(x),
											(s.cbOffsets = r()));
									},
									onUpdate: function () {
										n.callbacks &&
											n.onUpdate &&
											i("whileScrolling") &&
											(l(),
											c.callbacks.whileScrolling.call(
												t[0]
											));
									},
									onComplete: function () {
										if (n.callbacks && n.onComplete) {
											"yx" === c.axis &&
												clearTimeout(
													h[0].onCompleteTimeout
												);
											var e = h[0].idleTimer || 0;
											h[0].onCompleteTimeout = setTimeout(
												function () {
													i("onScroll") &&
														(l(),
														c.callbacks.onScroll.call(
															t[0]
														)),
														i("onTotalScroll") &&
															b[1] >= S[1] - T &&
															s.cbOffsets[0] &&
															(l(),
															c.callbacks.onTotalScroll.call(
																t[0]
															)),
														i(
															"onTotalScrollBack"
														) &&
															b[1] <= k &&
															s.cbOffsets[1] &&
															(l(),
															c.callbacks.onTotalScrollBack.call(
																t[0]
															)),
														(s.tweenRunning = !1),
														(h[0].idleTimer = 0),
														C(x, "hide");
												},
												e
											);
										}
									},
								}
							);
				}
			},
			J = function (e, t, o, a, n, i, r) {
				function l() {
					S.stop ||
						(x || m.call(),
						(x = K() - v),
						s(),
						x >= S.time &&
							((S.time =
								x > S.time ? x + f - (x - S.time) : x + f - 1),
							S.time < x + 1 && (S.time = x + 1)),
						S.time < a ? (S.id = h(l)) : g.call());
				}
				function s() {
					a > 0
						? ((S.currVal = u(S.time, _, b, a, n)),
						  (w[t] = Math.round(S.currVal) + "px"))
						: (w[t] = o + "px"),
						p.call();
				}
				function c() {
					(f = 1e3 / 60),
						(S.time = x + f),
						(h = window.requestAnimationFrame
							? window.requestAnimationFrame
							: function (e) {
									return s(), setTimeout(e, 0.01);
							  }),
						(S.id = h(l));
				}
				function d() {
					null != S.id &&
						(window.requestAnimationFrame
							? window.cancelAnimationFrame(S.id)
							: clearTimeout(S.id),
						(S.id = null));
				}
				function u(e, t, o, a, n) {
					switch (n) {
						case "linear":
						case "mcsLinear":
							return (o * e) / a + t;
						case "mcsLinearOut":
							return (e /= a), e--, o * Math.sqrt(1 - e * e) + t;
						case "easeInOutSmooth":
							return (
								(e /= a / 2),
								1 > e
									? (o / 2) * e * e + t
									: (e--, (-o / 2) * (e * (e - 2) - 1) + t)
							);
						case "easeInOutStrong":
							return (
								(e /= a / 2),
								1 > e
									? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
									: (e--,
									  (o / 2) * (-Math.pow(2, -10 * e) + 2) + t)
							);
						case "easeInOut":
						case "mcsEaseInOut":
							return (
								(e /= a / 2),
								1 > e
									? (o / 2) * e * e * e + t
									: ((e -= 2), (o / 2) * (e * e * e + 2) + t)
							);
						case "easeOutSmooth":
							return (e /= a), e--, -o * (e * e * e * e - 1) + t;
						case "easeOutStrong":
							return o * (-Math.pow(2, (-10 * e) / a) + 1) + t;
						case "easeOut":
						case "mcsEaseOut":
						default:
							var i = (e /= a) * e,
								r = i * e;
							return (
								t +
								o *
									(0.499999999999997 * r * i +
										-2.5 * i * i +
										5.5 * r +
										-6.5 * i +
										4 * e)
							);
					}
				}
				e._mTween || (e._mTween = { top: {}, left: {} });
				var f,
					h,
					r = r || {},
					m = r.onStart || function () {},
					p = r.onUpdate || function () {},
					g = r.onComplete || function () {},
					v = K(),
					x = 0,
					_ = e.offsetTop,
					w = e.style,
					S = e._mTween[t];
				"left" === t && (_ = e.offsetLeft);
				var b = o - _;
				(S.stop = 0), "none" !== i && d(), c();
			},
			K = function () {
				return window.performance && window.performance.now
					? window.performance.now()
					: window.performance && window.performance.webkitNow
					? window.performance.webkitNow()
					: Date.now
					? Date.now()
					: new Date().getTime();
			},
			Z = function () {
				var e = this;
				e._mTween || (e._mTween = { top: {}, left: {} });
				for (var t = ["top", "left"], o = 0; o < t.length; o++) {
					var a = t[o];
					e._mTween[a].id &&
						(window.requestAnimationFrame
							? window.cancelAnimationFrame(e._mTween[a].id)
							: clearTimeout(e._mTween[a].id),
						(e._mTween[a].id = null),
						(e._mTween[a].stop = 1));
				}
			},
			$ = function (e, t) {
				try {
					delete e[t];
				} catch (o) {
					e[t] = null;
				}
			},
			ee = function (e) {
				return !(e.which && 1 !== e.which);
			},
			te = function (e) {
				var t = e.originalEvent.pointerType;
				return !(t && "touch" !== t && 2 !== t);
			},
			oe = function (e) {
				return !isNaN(parseFloat(e)) && isFinite(e);
			},
			ae = function (e) {
				var t = e.parents(".mCSB_container");
				return [
					e.offset().top - t.offset().top,
					e.offset().left - t.offset().left,
				];
			},
			ne = function () {
				function e() {
					var e = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var t = 0; t < e.length; t++)
						if (e[t] + "Hidden" in document) return e[t] + "Hidden";
					return null;
				}
				var t = e();
				return t ? document[t] : !1;
			};
		(e.fn[o] = function (t) {
			return u[t]
				? u[t].apply(this, Array.prototype.slice.call(arguments, 1))
				: "object" != typeof t && t
				? void e.error("Method " + t + " does not exist")
				: u.init.apply(this, arguments);
		}),
			(e[o] = function (t) {
				return u[t]
					? u[t].apply(this, Array.prototype.slice.call(arguments, 1))
					: "object" != typeof t && t
					? void e.error("Method " + t + " does not exist")
					: u.init.apply(this, arguments);
			}),
			(e[o].defaults = i),
			(window[o] = !0),
			e(window).bind("load", function () {
				e(n)[o](),
					e.extend(e.expr[":"], {
						mcsInView:
							e.expr[":"].mcsInView ||
							function (t) {
								var o,
									a,
									n = e(t),
									i = n.parents(".mCSB_container");
								if (i.length)
									return (
										(o = i.parent()),
										(a = [i[0].offsetTop, i[0].offsetLeft]),
										a[0] + ae(n)[0] >= 0 &&
											a[0] + ae(n)[0] <
												o.height() -
													n.outerHeight(!1) &&
											a[1] + ae(n)[1] >= 0 &&
											a[1] + ae(n)[1] <
												o.width() - n.outerWidth(!1)
									);
							},
						mcsInSight:
							e.expr[":"].mcsInSight ||
							function (t, o, a) {
								var n,
									i,
									r,
									l,
									s = e(t),
									c = s.parents(".mCSB_container"),
									d =
										"exact" === a[3]
											? [
													[1, 0],
													[1, 0],
											  ]
											: [
													[0.9, 0.1],
													[0.6, 0.4],
											  ];
								if (c.length)
									return (
										(n = [
											s.outerHeight(!1),
											s.outerWidth(!1),
										]),
										(r = [
											c[0].offsetTop + ae(s)[0],
											c[0].offsetLeft + ae(s)[1],
										]),
										(i = [
											c.parent()[0].offsetHeight,
											c.parent()[0].offsetWidth,
										]),
										(l = [
											n[0] < i[0] ? d[0] : d[1],
											n[1] < i[1] ? d[0] : d[1],
										]),
										r[0] - i[0] * l[0][0] < 0 &&
											r[0] + n[0] - i[0] * l[0][1] >= 0 &&
											r[1] - i[1] * l[1][0] < 0 &&
											r[1] + n[1] - i[1] * l[1][1] >= 0
									);
							},
						mcsOverflow:
							e.expr[":"].mcsOverflow ||
							function (t) {
								var o = e(t).data(a);
								if (o)
									return o.overflowed[0] || o.overflowed[1];
							},
					});
			});
	});
}); /* Start:"a:4:{s:4:"full";s:93:"/bitrix/templates/main_adaptive_new/js/fancybox/jquery.fancybox-1.3.4.pack.js?158106192015624";s:6:"source";s:77:"/bitrix/templates/main_adaptive_new/js/fancybox/jquery.fancybox-1.3.4.pack.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 *
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 *
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function (b) {
	var m,
		t,
		u,
		f,
		D,
		j,
		E,
		n,
		z,
		A,
		q = 0,
		e = {},
		o = [],
		p = 0,
		d = {},
		l = [],
		G = null,
		v = new Image(),
		J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
		W = /[^\.]\.(swf)\s*$/i,
		K,
		L = 1,
		y = 0,
		s = "",
		r,
		i,
		h = false,
		B = b.extend(b("<div/>")[0], { prop: 0 }),
		M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest,
		N = function () {
			t.hide();
			v.onerror = v.onload = null;
			G && G.abort();
			m.empty();
		},
		O = function () {
			if (false === e.onError(o, q, e)) {
				t.hide();
				h = false;
			} else {
				e.titleShow = false;
				e.width = "auto";
				e.height = "auto";
				m.html(
					'<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'
				);
				F();
			}
		},
		I = function () {
			var a = o[q],
				c,
				g,
				k,
				C,
				P,
				w;
			N();
			e = b.extend(
				{},
				b.fn.fancybox.defaults,
				typeof b(a).data("fancybox") == "undefined"
					? e
					: b(a).data("fancybox")
			);
			w = e.onStart(o, q, e);
			if (w === false) h = false;
			else {
				if (typeof w == "object") e = b.extend(e, w);
				k =
					e.title ||
					(a.nodeName ? b(a).attr("title") : a.title) ||
					"";
				if (a.nodeName && !e.orig)
					e.orig = b(a).children("img:first").length
						? b(a).children("img:first")
						: b(a);
				if (k === "" && e.orig && e.titleFromAlt)
					k = e.orig.attr("alt");
				c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null;
				if (/^(?:javascript)/i.test(c) || c == "#") c = null;
				if (e.type) {
					g = e.type;
					if (!c) c = e.content;
				} else if (e.content) g = "html";
				else if (c)
					g = c.match(J)
						? "image"
						: c.match(W)
						? "swf"
						: b(a).hasClass("iframe")
						? "iframe"
						: c.indexOf("#") === 0
						? "inline"
						: "ajax";
				if (g) {
					if (g == "inline") {
						a = c.substr(c.indexOf("#"));
						g = b(a).length > 0 ? "inline" : "ajax";
					}
					e.type = g;
					e.href = c;
					e.title = k;
					if (e.autoDimensions)
						if (
							e.type == "html" ||
							e.type == "inline" ||
							e.type == "ajax"
						) {
							e.width = "auto";
							e.height = "auto";
						} else e.autoDimensions = false;
					if (e.modal) {
						e.overlayShow = true;
						e.hideOnOverlayClick = false;
						e.hideOnContentClick = false;
						e.enableEscapeButton = false;
						e.showCloseButton = false;
					}
					e.padding = parseInt(e.padding, 10);
					e.margin = parseInt(e.margin, 10);
					m.css("padding", e.padding + e.margin);
					b(".fancybox-inline-tmp")
						.unbind("fancybox-cancel")
						.bind("fancybox-change", function () {
							b(this).replaceWith(j.children());
						});
					switch (g) {
						case "html":
							m.html(e.content);
							F();
							break;
						case "inline":
							if (
								b(a).parent().is("#fancybox-content") === true
							) {
								h = false;
								break;
							}
							b('<div class="fancybox-inline-tmp" />')
								.hide()
								.insertBefore(b(a))
								.bind("fancybox-cleanup", function () {
									b(this).replaceWith(j.children());
								})
								.bind("fancybox-cancel", function () {
									b(this).replaceWith(m.children());
								});
							b(a).appendTo(m);
							F();
							break;
						case "image":
							h = false;
							b.fancybox.showActivity();
							v = new Image();
							v.onerror = function () {
								O();
							};
							v.onload = function () {
								h = true;
								v.onerror = v.onload = null;
								e.width = v.width;
								e.height = v.height;
								b("<img />")
									.attr({
										id: "fancybox-img",
										src: v.src,
										alt: e.title,
									})
									.appendTo(m);
								Q();
							};
							v.src = c;
							break;
						case "swf":
							e.scrolling = "no";
							C =
								'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' +
								e.width +
								'" height="' +
								e.height +
								'"><param name="movie" value="' +
								c +
								'"></param>';
							P = "";
							b.each(e.swf, function (x, H) {
								C +=
									'<param name="' +
									x +
									'" value="' +
									H +
									'"></param>';
								P += " " + x + '="' + H + '"';
							});
							C +=
								'<embed src="' +
								c +
								'" type="application/x-shockwave-flash" width="' +
								e.width +
								'" height="' +
								e.height +
								'"' +
								P +
								"></embed></object>";
							m.html(C);
							F();
							break;
						case "ajax":
							h = false;
							b.fancybox.showActivity();
							e.ajax.win = e.ajax.success;
							G = b.ajax(
								b.extend({}, e.ajax, {
									url: c,
									data: e.ajax.data || {},
									error: function (x) {
										x.status > 0 && O();
									},
									success: function (x, H, R) {
										if (
											(typeof R == "object" ? R : G)
												.status == 200
										) {
											if (
												typeof e.ajax.win == "function"
											) {
												w = e.ajax.win(c, x, H, R);
												if (w === false) {
													t.hide();
													return;
												} else if (
													typeof w == "string" ||
													typeof w == "object"
												)
													x = w;
											}
											m.html(x);
											F();
										}
									},
								})
							);
							break;
						case "iframe":
							Q();
					}
				} else O();
			}
		},
		F = function () {
			var a = e.width,
				c = e.height;
			a =
				a.toString().indexOf("%") > -1
					? parseInt(
							((b(window).width() - e.margin * 2) *
								parseFloat(a)) /
								100,
							10
					  ) + "px"
					: a == "auto"
					? "auto"
					: a + "px";
			c =
				c.toString().indexOf("%") > -1
					? parseInt(
							((b(window).height() - e.margin * 2) *
								parseFloat(c)) /
								100,
							10
					  ) + "px"
					: c == "auto"
					? "auto"
					: c + "px";
			m.wrapInner(
				'<div style="width:' +
					a +
					";height:" +
					c +
					";overflow: " +
					(e.scrolling == "auto"
						? "auto"
						: e.scrolling == "yes"
						? "scroll"
						: "hidden") +
					';position:relative;"></div>'
			);
			e.width = m.width();
			e.height = m.height();
			Q();
		},
		Q = function () {
			var a, c;
			t.hide();
			if (f.is(":visible") && false === d.onCleanup(l, p, d)) {
				b.event.trigger("fancybox-cancel");
				h = false;
			} else {
				h = true;
				b(j.add(u)).unbind();
				b(window).unbind("resize.fb scroll.fb");
				b(document).unbind("keydown.fb");
				f.is(":visible") &&
					d.titlePosition !== "outside" &&
					f.css("height", f.height());
				l = o;
				p = q;
				d = e;
				if (d.overlayShow) {
					u.css({
						"background-color": d.overlayColor,
						opacity: d.overlayOpacity,
						cursor: d.hideOnOverlayClick ? "pointer" : "auto",
						height: b(document).height(),
					});
					if (!u.is(":visible")) {
						M &&
							b("select:not(#fancybox-tmp select)")
								.filter(function () {
									return this.style.visibility !== "hidden";
								})
								.css({ visibility: "hidden" })
								.one("fancybox-cleanup", function () {
									this.style.visibility = "inherit";
								});
						u.show();
					}
				} else u.hide();
				i = X();
				s = d.title || "";
				y = 0;
				n.empty().removeAttr("style").removeClass();
				if (d.titleShow !== false) {
					if (b.isFunction(d.titleFormat))
						a = d.titleFormat(s, l, p, d);
					else
						a =
							s && s.length
								? d.titlePosition == "float"
									? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' +
									  s +
									  '</td><td id="fancybox-title-float-right"></td></tr></table>'
									: '<div id="fancybox-title-' +
									  d.titlePosition +
									  '">' +
									  s +
									  "</div>"
								: false;
					s = a;
					if (!(!s || s === "")) {
						n.addClass("fancybox-title-" + d.titlePosition)
							.html(s)
							.appendTo("body")
							.show();
						switch (d.titlePosition) {
							case "inside":
								n.css({
									width: i.width - d.padding * 2,
									marginLeft: d.padding,
									marginRight: d.padding,
								});
								y = n.outerHeight(true);
								n.appendTo(D);
								i.height += y;
								break;
							case "over":
								n.css({
									marginLeft: d.padding,
									width: i.width - d.padding * 2,
									bottom: d.padding,
								}).appendTo(D);
								break;
							case "float":
								n.css(
									"left",
									parseInt(
										(n.width() - i.width - 40) / 2,
										10
									) * -1
								).appendTo(f);
								break;
							default:
								n.css({
									width: i.width - d.padding * 2,
									paddingLeft: d.padding,
									paddingRight: d.padding,
								}).appendTo(f);
						}
					}
				}
				n.hide();
				if (f.is(":visible")) {
					b(E.add(z).add(A)).hide();
					a = f.position();
					r = {
						top: a.top,
						left: a.left,
						width: f.width(),
						height: f.height(),
					};
					c = r.width == i.width && r.height == i.height;
					j.fadeTo(d.changeFade, 0.3, function () {
						var g = function () {
							j.html(m.contents()).fadeTo(d.changeFade, 1, S);
						};
						b.event.trigger("fancybox-change");
						j.empty()
							.removeAttr("filter")
							.css({
								"border-width": d.padding,
								width: i.width - d.padding * 2,
								height: e.autoDimensions
									? "auto"
									: i.height - y - d.padding * 2,
							});
						if (c) g();
						else {
							B.prop = 0;
							b(B).animate(
								{ prop: 1 },
								{
									duration: d.changeSpeed,
									easing: d.easingChange,
									step: T,
									complete: g,
								}
							);
						}
					});
				} else {
					f.removeAttr("style");
					j.css("border-width", d.padding);
					if (d.transitionIn == "elastic") {
						r = V();
						j.html(m.contents());
						f.show();
						if (d.opacity) i.opacity = 0;
						B.prop = 0;
						b(B).animate(
							{ prop: 1 },
							{
								duration: d.speedIn,
								easing: d.easingIn,
								step: T,
								complete: S,
							}
						);
					} else {
						d.titlePosition == "inside" && y > 0 && n.show();
						j.css({
							width: i.width - d.padding * 2,
							height: e.autoDimensions
								? "auto"
								: i.height - y - d.padding * 2,
						}).html(m.contents());
						f.css(i).fadeIn(
							d.transitionIn == "none" ? 0 : d.speedIn,
							S
						);
					}
				}
			}
		},
		Y = function () {
			if (d.enableEscapeButton || d.enableKeyboardNav)
				b(document).bind("keydown.fb", function (a) {
					if (a.keyCode == 27 && d.enableEscapeButton) {
						a.preventDefault();
						b.fancybox.close();
					} else if (
						(a.keyCode == 37 || a.keyCode == 39) &&
						d.enableKeyboardNav &&
						a.target.tagName !== "INPUT" &&
						a.target.tagName !== "TEXTAREA" &&
						a.target.tagName !== "SELECT"
					) {
						a.preventDefault();
						b.fancybox[a.keyCode == 37 ? "prev" : "next"]();
					}
				});
			if (d.showNavArrows) {
				if ((d.cyclic && l.length > 1) || p !== 0) z.show();
				if ((d.cyclic && l.length > 1) || p != l.length - 1) A.show();
			} else {
				z.hide();
				A.hide();
			}
		},
		S = function () {
			if (!b.support.opacity) {
				j.get(0).style.removeAttribute("filter");
				f.get(0).style.removeAttribute("filter");
			}
			e.autoDimensions && j.css("height", "auto");
			f.css("height", "auto");
			s && s.length && n.show();
			d.showCloseButton && E.show();
			Y();
			d.hideOnContentClick && j.bind("click", b.fancybox.close);
			d.hideOnOverlayClick && u.bind("click", b.fancybox.close);
			b(window).bind("resize.fb", b.fancybox.resize);
			d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center);
			if (d.type == "iframe")
				b(
					'<iframe id="fancybox-frame" name="fancybox-frame' +
						new Date().getTime() +
						'" frameborder="0" hspace="0" ' +
						(b.browser.msie ? 'allowtransparency="true""' : "") +
						' scrolling="' +
						e.scrolling +
						'" src="' +
						d.href +
						'"></iframe>'
				).appendTo(j);
			f.show();
			h = false;
			b.fancybox.center();
			d.onComplete(l, p, d);
			var a, c;
			if (l.length - 1 > p) {
				a = l[p + 1].href;
				if (typeof a !== "undefined" && a.match(J)) {
					c = new Image();
					c.src = a;
				}
			}
			if (p > 0) {
				a = l[p - 1].href;
				if (typeof a !== "undefined" && a.match(J)) {
					c = new Image();
					c.src = a;
				}
			}
		},
		T = function (a) {
			var c = {
				width: parseInt(r.width + (i.width - r.width) * a, 10),
				height: parseInt(r.height + (i.height - r.height) * a, 10),
				top: parseInt(r.top + (i.top - r.top) * a, 10),
				left: parseInt(r.left + (i.left - r.left) * a, 10),
			};
			if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a;
			f.css(c);
			j.css({
				width: c.width - d.padding * 2,
				height: c.height - y * a - d.padding * 2,
			});
		},
		U = function () {
			return [
				b(window).width() - d.margin * 2,
				b(window).height() - d.margin * 2,
				b(document).scrollLeft() + d.margin,
				b(document).scrollTop() + d.margin,
			];
		},
		X = function () {
			var a = U(),
				c = {},
				g = d.autoScale,
				k = d.padding * 2;
			c.width =
				d.width.toString().indexOf("%") > -1
					? parseInt((a[0] * parseFloat(d.width)) / 100, 10)
					: d.width + k;
			c.height =
				d.height.toString().indexOf("%") > -1
					? parseInt((a[1] * parseFloat(d.height)) / 100, 10)
					: d.height + k;
			if (g && (c.width > a[0] || c.height > a[1]))
				if (e.type == "image" || e.type == "swf") {
					g = d.width / d.height;
					if (c.width > a[0]) {
						c.width = a[0];
						c.height = parseInt((c.width - k) / g + k, 10);
					}
					if (c.height > a[1]) {
						c.height = a[1];
						c.width = parseInt((c.height - k) * g + k, 10);
					}
				} else {
					c.width = Math.min(c.width, a[0]);
					c.height = Math.min(c.height, a[1]);
				}
			c.top = parseInt(
				Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5),
				10
			);
			c.left = parseInt(
				Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5),
				10
			);
			return c;
		},
		V = function () {
			var a = e.orig ? b(e.orig) : false,
				c = {};
			if (a && a.length) {
				c = a.offset();
				c.top += parseInt(a.css("paddingTop"), 10) || 0;
				c.left += parseInt(a.css("paddingLeft"), 10) || 0;
				c.top += parseInt(a.css("border-top-width"), 10) || 0;
				c.left += parseInt(a.css("border-left-width"), 10) || 0;
				c.width = a.width();
				c.height = a.height();
				c = {
					width: c.width + d.padding * 2,
					height: c.height + d.padding * 2,
					top: c.top - d.padding - 20,
					left: c.left - d.padding - 20,
				};
			} else {
				a = U();
				c = {
					width: d.padding * 2,
					height: d.padding * 2,
					top: parseInt(a[3] + a[1] * 0.5, 10),
					left: parseInt(a[2] + a[0] * 0.5, 10),
				};
			}
			return c;
		},
		Z = function () {
			if (t.is(":visible")) {
				b("div", t).css("top", L * -40 + "px");
				L = (L + 1) % 12;
			} else clearInterval(K);
		};
	b.fn.fancybox = function (a) {
		if (!b(this).length) return this;
		b(this)
			.data(
				"fancybox",
				b.extend({}, a, b.metadata ? b(this).metadata() : {})
			)
			.unbind("click.fb")
			.bind("click.fb", function (c) {
				c.preventDefault();
				if (!h) {
					h = true;
					b(this).blur();
					o = [];
					q = 0;
					c = b(this).attr("rel") || "";
					if (!c || c == "" || c === "nofollow") o.push(this);
					else {
						o = b("a[rel=" + c + "], area[rel=" + c + "]");
						q = o.index(this);
					}
					I();
				}
			});
		return this;
	};
	b.fancybox = function (a, c) {
		var g;
		if (!h) {
			h = true;
			g = typeof c !== "undefined" ? c : {};
			o = [];
			q = parseInt(g.index, 10) || 0;
			if (b.isArray(a)) {
				for (var k = 0, C = a.length; k < C; k++)
					if (typeof a[k] == "object")
						b(a[k]).data("fancybox", b.extend({}, g, a[k]));
					else
						a[k] = b({}).data(
							"fancybox",
							b.extend({ content: a[k] }, g)
						);
				o = jQuery.merge(o, a);
			} else {
				if (typeof a == "object")
					b(a).data("fancybox", b.extend({}, g, a));
				else a = b({}).data("fancybox", b.extend({ content: a }, g));
				o.push(a);
			}
			if (q > o.length || q < 0) q = 0;
			I();
		}
	};
	b.fancybox.showActivity = function () {
		clearInterval(K);
		t.show();
		K = setInterval(Z, 66);
	};
	b.fancybox.hideActivity = function () {
		t.hide();
	};
	b.fancybox.next = function () {
		return b.fancybox.pos(p + 1);
	};
	b.fancybox.prev = function () {
		return b.fancybox.pos(p - 1);
	};
	b.fancybox.pos = function (a) {
		if (!h) {
			a = parseInt(a);
			o = l;
			if (a > -1 && a < l.length) {
				q = a;
				I();
			} else if (d.cyclic && l.length > 1) {
				q = a >= l.length ? 0 : l.length - 1;
				I();
			}
		}
	};
	b.fancybox.cancel = function () {
		if (!h) {
			h = true;
			b.event.trigger("fancybox-cancel");
			N();
			e.onCancel(o, q, e);
			h = false;
		}
	};
	b.fancybox.close = function () {
		function a() {
			u.fadeOut("fast");
			n.empty().hide();
			f.hide();
			b.event.trigger("fancybox-cleanup");
			j.empty();
			d.onClosed(l, p, d);
			l = e = [];
			p = q = 0;
			d = e = {};
			h = false;
		}
		if (!(h || f.is(":hidden"))) {
			h = true;
			if (d && false === d.onCleanup(l, p, d)) h = false;
			else {
				N();
				b(E.add(z).add(A)).hide();
				b(j.add(u)).unbind();
				b(window).unbind("resize.fb scroll.fb");
				b(document).unbind("keydown.fb");
				j.find("iframe").attr(
					"src",
					M && /^https/i.test(window.location.href || "")
						? "javascript:void(false)"
						: "about:blank"
				);
				d.titlePosition !== "inside" && n.empty();
				f.stop();
				if (d.transitionOut == "elastic") {
					r = V();
					var c = f.position();
					i = {
						top: c.top,
						left: c.left,
						width: f.width(),
						height: f.height(),
					};
					if (d.opacity) i.opacity = 1;
					n.empty().hide();
					B.prop = 1;
					b(B).animate(
						{ prop: 0 },
						{
							duration: d.speedOut,
							easing: d.easingOut,
							step: T,
							complete: a,
						}
					);
				} else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a);
			}
		}
	};
	b.fancybox.resize = function () {
		u.is(":visible") && u.css("height", b(document).height());
		b.fancybox.center(true);
	};
	b.fancybox.center = function (a) {
		var c, g;
		if (!h) {
			g = a === true ? 1 : 0;
			c = U();
			(!g && (f.width() > c[0] || f.height() > c[1])) ||
				f.stop().animate(
					{
						top: parseInt(
							Math.max(
								c[3] - 20,
								c[3] +
									(c[1] - j.height() - 40) * 0.5 -
									d.padding
							)
						),
						left: parseInt(
							Math.max(
								c[2] - 20,
								c[2] + (c[0] - j.width() - 40) * 0.5 - d.padding
							)
						),
					},
					typeof a == "number" ? a : 200
				);
		}
	};
	b.fancybox.init = function () {
		if (!b("#fancybox-wrap").length) {
			b("body").append(
				(m = b('<div id="fancybox-tmp"></div>')),
				(t = b('<div id="fancybox-loading"><div></div></div>')),
				(u = b('<div id="fancybox-overlay"></div>')),
				(f = b('<div id="fancybox-wrap"></div>'))
			);
			D = b('<div id="fancybox-outer"></div>')
				.append(
					'<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>'
				)
				.appendTo(f);
			D.append(
				(j = b('<div id="fancybox-content"></div>')),
				(E = b('<a id="fancybox-close"></a>')),
				(n = b('<div id="fancybox-title"></div>')),
				(z = b(
					'<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'
				)),
				(A = b(
					'<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'
				))
			);
			E.click(b.fancybox.close);
			t.click(b.fancybox.cancel);
			z.click(function (a) {
				a.preventDefault();
				b.fancybox.prev();
			});
			A.click(function (a) {
				a.preventDefault();
				b.fancybox.next();
			});
			b.fn.mousewheel &&
				f.bind("mousewheel.fb", function (a, c) {
					if (h) a.preventDefault();
					else if (
						b(a.target).get(0).clientHeight == 0 ||
						b(a.target).get(0).scrollHeight ===
							b(a.target).get(0).clientHeight
					) {
						a.preventDefault();
						b.fancybox[c > 0 ? "prev" : "next"]();
					}
				});
			b.support.opacity || f.addClass("fancybox-ie");
			if (M) {
				t.addClass("fancybox-ie6");
				f.addClass("fancybox-ie6");
				b(
					'<iframe id="fancybox-hide-sel-frame" src="' +
						(/^https/i.test(window.location.href || "")
							? "javascript:void(false)"
							: "about:blank") +
						'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>'
				).prependTo(D);
			}
		}
	};
	b.fn.fancybox.defaults = {
		padding: 10,
		margin: 40,
		opacity: false,
		modal: false,
		cyclic: false,
		scrolling: "auto",
		width: 560,
		height: 340,
		autoScale: true,
		autoDimensions: true,
		centerOnScroll: false,
		ajax: {},
		swf: { wmode: "transparent" },
		hideOnOverlayClick: true,
		hideOnContentClick: false,
		overlayShow: true,
		overlayOpacity: 0.7,
		overlayColor: "#777",
		titleShow: true,
		titlePosition: "float",
		titleFormat: null,
		titleFromAlt: false,
		transitionIn: "fade",
		transitionOut: "fade",
		speedIn: 300,
		speedOut: 300,
		changeSpeed: 300,
		changeFade: "fast",
		easingIn: "swing",
		easingOut: "swing",
		showCloseButton: true,
		showNavArrows: true,
		enableEscapeButton: true,
		enableKeyboardNav: true,
		onStart: function () {},
		onCancel: function () {},
		onComplete: function () {},
		onCleanup: function () {},
		onClosed: function () {},
		onError: function () {},
	};
	b(document).ready(function () {
		b.fancybox.init();
	});
})(
	jQuery
); /* Start:"a:4:{s:4:"full";s:70:"/bitrix/templates/main_adaptive_new/js/jquery.cookie.js?15810619203121";s:6:"source";s:55:"/bitrix/templates/main_adaptive_new/js/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		// AMD
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		// CommonJS
		factory(require("jquery"));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($) {
	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\");
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, " "));
			return config.json ? JSON.parse(s) : s;
		} catch (e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = ($.cookie = function (key, value, options) {
		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === "number") {
				var days = options.expires,
					t = (options.expires = new Date());
				t.setTime(+t + days * 864e5);
			}

			return (document.cookie = [
				encode(key),
				"=",
				stringifyCookieValue(value),
				options.expires
					? "; expires=" + options.expires.toUTCString()
					: "", // use expires attribute, max-age is not supported by IE
				options.path ? "; path=" + options.path : "",
				options.domain ? "; domain=" + options.domain : "",
				options.secure ? "; secure" : "",
			].join(""));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split("; ") : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split("=");
			var name = decode(parts.shift());
			var cookie = parts.join("=");

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	});

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, "", $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};
}); /* Start:"a:4:{s:4:"full";s:79:"/bitrix/templates/main_adaptive_new/js/jquery.flexslider-min.js?158106192016662";s:6:"source";s:63:"/bitrix/templates/main_adaptive_new/js/jquery.flexslider-min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

/* End */
/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
(function (d) {
	d.flexslider = function (i, k) {
		var a = d(i),
			c = d.extend({}, d.flexslider.defaults, k),
			e = c.namespace,
			p =
				"ontouchstart" in window ||
				(window.DocumentTouch && document instanceof DocumentTouch),
			t = p ? "touchend" : "click",
			l = "vertical" === c.direction,
			m = c.reverse,
			h = 0 < c.itemWidth,
			r = "fade" === c.animation,
			s = "" !== c.asNavFor,
			f = {};
		d.data(i, "flexslider", a);
		f = {
			init: function () {
				a.animating = !1;
				a.currentSlide = c.startAt;
				a.animatingTo = a.currentSlide;
				a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
				a.containerSelector = c.selector.substr(
					0,
					c.selector.search(" ")
				);
				a.slides = d(c.selector, a);
				a.container = d(a.containerSelector, a);
				a.count = a.slides.length;
				a.syncExists = 0 < d(c.sync).length;
				"slide" === c.animation && (c.animation = "swing");
				a.prop = l ? "top" : "marginLeft";
				a.args = {};
				a.manualPause = !1;
				var b = a,
					g;
				if ((g = !c.video))
					if ((g = !r))
						if ((g = c.useCSS))
							a: {
								g = document.createElement("div");
								var n = [
										"perspectiveProperty",
										"WebkitPerspective",
										"MozPerspective",
										"OPerspective",
										"msPerspective",
									],
									e;
								for (e in n)
									if (void 0 !== g.style[n[e]]) {
										a.pfx = n[e]
											.replace("Perspective", "")
											.toLowerCase();
										a.prop = "-" + a.pfx + "-transform";
										g = !0;
										break a;
									}
								g = !1;
							}
				b.transitions = g;
				"" !== c.controlsContainer &&
					(a.controlsContainer =
						0 < d(c.controlsContainer).length &&
						d(c.controlsContainer));
				"" !== c.manualControls &&
					(a.manualControls =
						0 < d(c.manualControls).length && d(c.manualControls));
				c.randomize &&
					(a.slides.sort(function () {
						return Math.round(Math.random()) - 0.5;
					}),
					a.container.empty().append(a.slides));
				a.doMath();
				s && f.asNav.setup();
				a.setup("init");
				c.controlNav && f.controlNav.setup();
				c.directionNav && f.directionNav.setup();
				c.keyboard &&
					(1 === d(a.containerSelector).length ||
						c.multipleKeyboard) &&
					d(document).bind("keyup", function (b) {
						b = b.keyCode;
						if (!a.animating && (39 === b || 37 === b))
							(b =
								39 === b
									? a.getTarget("next")
									: 37 === b
									? a.getTarget("prev")
									: !1),
								a.flexAnimate(b, c.pauseOnAction);
					});
				c.mousewheel &&
					a.bind("mousewheel", function (b, g) {
						b.preventDefault();
						var d =
							0 > g ? a.getTarget("next") : a.getTarget("prev");
						a.flexAnimate(d, c.pauseOnAction);
					});
				c.pausePlay && f.pausePlay.setup();
				c.slideshow &&
					(c.pauseOnHover &&
						a.hover(
							function () {
								!a.manualPlay && !a.manualPause && a.pause();
							},
							function () {
								!a.manualPause && !a.manualPlay && a.play();
							}
						),
					0 < c.initDelay
						? setTimeout(a.play, c.initDelay)
						: a.play());
				p && c.touch && f.touch();
				(!r || (r && c.smoothHeight)) &&
					d(window).bind("resize focus", f.resize);
				setTimeout(function () {
					c.start(a);
				}, 200);
			},
			asNav: {
				setup: function () {
					a.asNav = !0;
					a.animatingTo = Math.floor(a.currentSlide / a.move);
					a.currentItem = a.currentSlide;
					a.slides
						.removeClass(e + "active-slide")
						.eq(a.currentItem)
						.addClass(e + "active-slide");
					a.slides.click(function (b) {
						b.preventDefault();
						var b = d(this),
							g = b.index();
						!d(c.asNavFor).data("flexslider").animating &&
							!b.hasClass("active") &&
							((a.direction =
								a.currentItem < g ? "next" : "prev"),
							a.flexAnimate(g, c.pauseOnAction, !1, !0, !0));
					});
				},
			},
			controlNav: {
				setup: function () {
					a.manualControls
						? f.controlNav.setupManual()
						: f.controlNav.setupPaging();
				},
				setupPaging: function () {
					var b = 1,
						g;
					a.controlNavScaffold = d(
						'<ol class="' +
							e +
							"control-nav " +
							e +
							("thumbnails" === c.controlNav
								? "control-thumbs"
								: "control-paging") +
							'"></ol>'
					);
					if (1 < a.pagingCount)
						for (var n = 0; n < a.pagingCount; n++)
							(g =
								"thumbnails" === c.controlNav
									? '<img src="' +
									  a.slides.eq(n).attr("data-thumb") +
									  '"/>'
									: "<a>" + b + "</a>"),
								a.controlNavScaffold.append(
									"<li>" + g + "</li>"
								),
								b++;
					a.controlsContainer
						? d(a.controlsContainer).append(a.controlNavScaffold)
						: a.append(a.controlNavScaffold);
					f.controlNav.set();
					f.controlNav.active();
					a.controlNavScaffold.delegate("a, img", t, function (b) {
						b.preventDefault();
						var b = d(this),
							g = a.controlNav.index(b);
						b.hasClass(e + "active") ||
							((a.direction =
								g > a.currentSlide ? "next" : "prev"),
							a.flexAnimate(g, c.pauseOnAction));
					});
					p &&
						a.controlNavScaffold.delegate(
							"a",
							"click touchstart",
							function (a) {
								a.preventDefault();
							}
						);
				},
				setupManual: function () {
					a.controlNav = a.manualControls;
					f.controlNav.active();
					a.controlNav.live(t, function (b) {
						b.preventDefault();
						var b = d(this),
							g = a.controlNav.index(b);
						b.hasClass(e + "active") ||
							(g > a.currentSlide
								? (a.direction = "next")
								: (a.direction = "prev"),
							a.flexAnimate(g, c.pauseOnAction));
					});
					p &&
						a.controlNav.live("click touchstart", function (a) {
							a.preventDefault();
						});
				},
				set: function () {
					a.controlNav = d(
						"." +
							e +
							"control-nav li " +
							("thumbnails" === c.controlNav ? "img" : "a"),
						a.controlsContainer ? a.controlsContainer : a
					);
				},
				active: function () {
					a.controlNav
						.removeClass(e + "active")
						.eq(a.animatingTo)
						.addClass(e + "active");
				},
				update: function (b, c) {
					1 < a.pagingCount && "add" === b
						? a.controlNavScaffold.append(
								d("<li><a>" + a.count + "</a></li>")
						  )
						: 1 === a.pagingCount
						? a.controlNavScaffold.find("li").remove()
						: a.controlNav.eq(c).closest("li").remove();
					f.controlNav.set();
					1 < a.pagingCount && a.pagingCount !== a.controlNav.length
						? a.update(c, b)
						: f.controlNav.active();
				},
			},
			directionNav: {
				setup: function () {
					var b = d(
						'<ul class="' +
							e +
							'direction-nav"><li><a class="' +
							e +
							'prev" href="#">' +
							c.prevText +
							'</a></li><li><a class="' +
							e +
							'next" href="#">' +
							c.nextText +
							"</a></li></ul>"
					);
					a.controlsContainer
						? (d(a.controlsContainer).append(b),
						  (a.directionNav = d(
								"." + e + "direction-nav li a",
								a.controlsContainer
						  )))
						: (a.append(b),
						  (a.directionNav = d(
								"." + e + "direction-nav li a",
								a
						  )));
					f.directionNav.update();
					a.directionNav.bind(t, function (b) {
						b.preventDefault();
						b = d(this).hasClass(e + "next")
							? a.getTarget("next")
							: a.getTarget("prev");
						a.flexAnimate(b, c.pauseOnAction);
					});
					p &&
						a.directionNav.bind("click touchstart", function (a) {
							a.preventDefault();
						});
				},
				update: function () {
					var b = e + "disabled";
					1 === a.pagingCount
						? a.directionNav.addClass(b)
						: c.animationLoop
						? a.directionNav.removeClass(b)
						: 0 === a.animatingTo
						? a.directionNav
								.removeClass(b)
								.filter("." + e + "prev")
								.addClass(b)
						: a.animatingTo === a.last
						? a.directionNav
								.removeClass(b)
								.filter("." + e + "next")
								.addClass(b)
						: a.directionNav.removeClass(b);
				},
			},
			pausePlay: {
				setup: function () {
					var b = d('<div class="' + e + 'pauseplay"><a></a></div>');
					a.controlsContainer
						? (a.controlsContainer.append(b),
						  (a.pausePlay = d(
								"." + e + "pauseplay a",
								a.controlsContainer
						  )))
						: (a.append(b),
						  (a.pausePlay = d("." + e + "pauseplay a", a)));
					f.pausePlay.update(c.slideshow ? e + "pause" : e + "play");
					a.pausePlay.bind(t, function (b) {
						b.preventDefault();
						d(this).hasClass(e + "pause")
							? ((a.manualPause = !0),
							  (a.manualPlay = !1),
							  a.pause())
							: ((a.manualPause = !1),
							  (a.manualPlay = !0),
							  a.play());
					});
					p &&
						a.pausePlay.bind("click touchstart", function (a) {
							a.preventDefault();
						});
				},
				update: function (b) {
					"play" === b
						? a.pausePlay
								.removeClass(e + "pause")
								.addClass(e + "play")
								.text(c.playText)
						: a.pausePlay
								.removeClass(e + "play")
								.addClass(e + "pause")
								.text(c.pauseText);
				},
			},
			touch: function () {
				function b(b) {
					j = l ? d - b.touches[0].pageY : d - b.touches[0].pageX;
					p = l
						? Math.abs(j) < Math.abs(b.touches[0].pageX - e)
						: Math.abs(j) < Math.abs(b.touches[0].pageY - e);
					if (!p || 500 < Number(new Date()) - k)
						b.preventDefault(),
							!r &&
								a.transitions &&
								(c.animationLoop ||
									(j /=
										(0 === a.currentSlide && 0 > j) ||
										(a.currentSlide === a.last && 0 < j)
											? Math.abs(j) / q + 2
											: 1),
								a.setProps(f + j, "setTouch"));
				}
				function g() {
					i.removeEventListener("touchmove", b, !1);
					if (a.animatingTo === a.currentSlide && !p && null !== j) {
						var h = m ? -j : j,
							l =
								0 < h
									? a.getTarget("next")
									: a.getTarget("prev");
						a.canAdvance(l) &&
						((550 > Number(new Date()) - k && 50 < Math.abs(h)) ||
							Math.abs(h) > q / 2)
							? a.flexAnimate(l, c.pauseOnAction)
							: r ||
							  a.flexAnimate(
									a.currentSlide,
									c.pauseOnAction,
									!0
							  );
					}
					i.removeEventListener("touchend", g, !1);
					f = j = e = d = null;
				}
				var d,
					e,
					f,
					q,
					j,
					k,
					p = !1;
				i.addEventListener(
					"touchstart",
					function (j) {
						a.animating
							? j.preventDefault()
							: 1 === j.touches.length &&
							  (a.pause(),
							  (q = l ? a.h : a.w),
							  (k = Number(new Date())),
							  (f =
									h && m && a.animatingTo === a.last
										? 0
										: h && m
										? a.limit -
										  (a.itemW + c.itemMargin) *
												a.move *
												a.animatingTo
										: h && a.currentSlide === a.last
										? a.limit
										: h
										? (a.itemW + c.itemMargin) *
										  a.move *
										  a.currentSlide
										: m
										? (a.last -
												a.currentSlide +
												a.cloneOffset) *
										  q
										: (a.currentSlide + a.cloneOffset) * q),
							  (d = l ? j.touches[0].pageY : j.touches[0].pageX),
							  (e = l ? j.touches[0].pageX : j.touches[0].pageY),
							  i.addEventListener("touchmove", b, !1),
							  i.addEventListener("touchend", g, !1));
					},
					!1
				);
			},
			resize: function () {
				!a.animating &&
					a.is(":visible") &&
					(h || a.doMath(),
					r
						? f.smoothHeight()
						: h
						? (a.slides.width(a.computedW),
						  a.update(a.pagingCount),
						  a.setProps())
						: l
						? (a.viewport.height(a.h), a.setProps(a.h, "setTotal"))
						: (c.smoothHeight && f.smoothHeight(),
						  a.newSlides.width(a.computedW),
						  a.setProps(a.computedW, "setTotal")));
			},
			smoothHeight: function (b) {
				if (!l || r) {
					var c = r ? a : a.viewport;
					b
						? c.animate(
								{ height: a.slides.eq(a.animatingTo).height() },
								b
						  )
						: c.height(a.slides.eq(a.animatingTo).height());
				}
			},
			sync: function (b) {
				var g = d(c.sync).data("flexslider"),
					e = a.animatingTo;
				switch (b) {
					case "animate":
						g.flexAnimate(e, c.pauseOnAction, !1, !0);
						break;
					case "play":
						!g.playing && !g.asNav && g.play();
						break;
					case "pause":
						g.pause();
				}
			},
		};
		a.flexAnimate = function (b, g, n, i, k) {
			s &&
				1 === a.pagingCount &&
				(a.direction = a.currentItem < b ? "next" : "prev");
			if (!a.animating && (a.canAdvance(b, k) || n) && a.is(":visible")) {
				if (s && i)
					if (
						((n = d(c.asNavFor).data("flexslider")),
						(a.atEnd = 0 === b || b === a.count - 1),
						n.flexAnimate(b, !0, !1, !0, k),
						(a.direction = a.currentItem < b ? "next" : "prev"),
						(n.direction = a.direction),
						Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide &&
							0 !== b)
					)
						(a.currentItem = b),
							a.slides
								.removeClass(e + "active-slide")
								.eq(b)
								.addClass(e + "active-slide"),
							(b = Math.floor(b / a.visible));
					else
						return (
							(a.currentItem = b),
							a.slides
								.removeClass(e + "active-slide")
								.eq(b)
								.addClass(e + "active-slide"),
							!1
						);
				a.animating = !0;
				a.animatingTo = b;
				c.before(a);
				g && a.pause();
				a.syncExists && !k && f.sync("animate");
				c.controlNav && f.controlNav.active();
				h ||
					a.slides
						.removeClass(e + "active-slide")
						.eq(b)
						.addClass(e + "active-slide");
				a.atEnd = 0 === b || b === a.last;
				c.directionNav && f.directionNav.update();
				b === a.last && (c.end(a), c.animationLoop || a.pause());
				if (r)
					p
						? (a.slides
								.eq(a.currentSlide)
								.css({ opacity: 0, zIndex: 1 }),
						  a.slides.eq(b).css({ opacity: 1, zIndex: 2 }),
						  (a.animating = !1),
						  (a.currentSlide = a.animatingTo))
						: (a.slides
								.eq(a.currentSlide)
								.fadeOut(c.animationSpeed, c.easing),
						  a.slides
								.eq(b)
								.fadeIn(c.animationSpeed, c.easing, a.wrapup));
				else {
					var q = l
						? a.slides.filter(":first").height()
						: a.computedW;
					h
						? ((b =
								c.itemWidth > a.w
									? 2 * c.itemMargin
									: c.itemMargin),
						  (b = (a.itemW + b) * a.move * a.animatingTo),
						  (b = b > a.limit && 1 !== a.visible ? a.limit : b))
						: (b =
								0 === a.currentSlide &&
								b === a.count - 1 &&
								c.animationLoop &&
								"next" !== a.direction
									? m
										? (a.count + a.cloneOffset) * q
										: 0
									: a.currentSlide === a.last &&
									  0 === b &&
									  c.animationLoop &&
									  "prev" !== a.direction
									? m
										? 0
										: (a.count + 1) * q
									: m
									? (a.count - 1 - b + a.cloneOffset) * q
									: (b + a.cloneOffset) * q);
					a.setProps(b, "", c.animationSpeed);
					if (a.transitions) {
						if (!c.animationLoop || !a.atEnd)
							(a.animating = !1),
								(a.currentSlide = a.animatingTo);
						a.container.unbind("webkitTransitionEnd transitionend");
						a.container.bind(
							"webkitTransitionEnd transitionend",
							function () {
								a.wrapup(q);
							}
						);
					} else
						a.container.animate(
							a.args,
							c.animationSpeed,
							c.easing,
							function () {
								a.wrapup(q);
							}
						);
				}
				c.smoothHeight && f.smoothHeight(c.animationSpeed);
			}
		};
		a.wrapup = function (b) {
			!r &&
				!h &&
				(0 === a.currentSlide &&
				a.animatingTo === a.last &&
				c.animationLoop
					? a.setProps(b, "jumpEnd")
					: a.currentSlide === a.last &&
					  0 === a.animatingTo &&
					  c.animationLoop &&
					  a.setProps(b, "jumpStart"));
			a.animating = !1;
			a.currentSlide = a.animatingTo;
			c.after(a);
		};
		a.animateSlides = function () {
			a.animating || a.flexAnimate(a.getTarget("next"));
		};
		a.pause = function () {
			clearInterval(a.animatedSlides);
			a.playing = !1;
			c.pausePlay && f.pausePlay.update("play");
			a.syncExists && f.sync("pause");
		};
		a.play = function () {
			a.animatedSlides = setInterval(a.animateSlides, c.slideshowSpeed);
			a.playing = !0;
			c.pausePlay && f.pausePlay.update("pause");
			a.syncExists && f.sync("play");
		};
		a.canAdvance = function (b, g) {
			var d = s ? a.pagingCount - 1 : a.last;
			return g
				? !0
				: s &&
				  a.currentItem === a.count - 1 &&
				  0 === b &&
				  "prev" === a.direction
				? !0
				: s &&
				  0 === a.currentItem &&
				  b === a.pagingCount - 1 &&
				  "next" !== a.direction
				? !1
				: b === a.currentSlide && !s
				? !1
				: c.animationLoop
				? !0
				: a.atEnd &&
				  0 === a.currentSlide &&
				  b === d &&
				  "next" !== a.direction
				? !1
				: a.atEnd &&
				  a.currentSlide === d &&
				  0 === b &&
				  "next" === a.direction
				? !1
				: !0;
		};
		a.getTarget = function (b) {
			a.direction = b;
			return "next" === b
				? a.currentSlide === a.last
					? 0
					: a.currentSlide + 1
				: 0 === a.currentSlide
				? a.last
				: a.currentSlide - 1;
		};
		a.setProps = function (b, g, d) {
			var e,
				f = b ? b : (a.itemW + c.itemMargin) * a.move * a.animatingTo;
			e =
				-1 *
					(function () {
						if (h)
							return "setTouch" === g
								? b
								: m && a.animatingTo === a.last
								? 0
								: m
								? a.limit -
								  (a.itemW + c.itemMargin) *
										a.move *
										a.animatingTo
								: a.animatingTo === a.last
								? a.limit
								: f;
						switch (g) {
							case "setTotal":
								return m
									? (a.count -
											1 -
											a.currentSlide +
											a.cloneOffset) *
											b
									: (a.currentSlide + a.cloneOffset) * b;
							case "setTouch":
								return b;
							case "jumpEnd":
								return m ? b : a.count * b;
							case "jumpStart":
								return m ? a.count * b : b;
							default:
								return b;
						}
					})() +
				"px";
			a.transitions &&
				((e = l
					? "translate3d(0," + e + ",0)"
					: "translate3d(" + e + ",0,0)"),
				(d = void 0 !== d ? d / 1e3 + "s" : "0s"),
				a.container.css("-" + a.pfx + "-transition-duration", d));
			a.args[a.prop] = e;
			(a.transitions || void 0 === d) && a.container.css(a.args);
		};
		a.setup = function (b) {
			if (r)
				a.slides.css({
					width: "100%",
					float: "left",
					marginRight: "-100%",
					position: "relative",
				}),
					"init" === b &&
						(p
							? a.slides
									.css({
										opacity: 0,
										display: "block",
										webkitTransition:
											"opacity " +
											c.animationSpeed / 1e3 +
											"s ease",
										zIndex: 1,
									})
									.eq(a.currentSlide)
									.css({ opacity: 1, zIndex: 2 })
							: a.slides
									.eq(a.currentSlide)
									.fadeIn(c.animationSpeed, c.easing)),
					c.smoothHeight && f.smoothHeight();
			else {
				var g, n;
				"init" === b &&
					((a.viewport = d('<div class="' + e + 'viewport"></div>')
						.css({ overflow: "hidden", position: "relative" })
						.appendTo(a)
						.append(a.container)),
					(a.cloneCount = 0),
					(a.cloneOffset = 0),
					m &&
						((n = d.makeArray(a.slides).reverse()),
						(a.slides = d(n)),
						a.container.empty().append(a.slides)));
				c.animationLoop &&
					!h &&
					((a.cloneCount = 2),
					(a.cloneOffset = 1),
					"init" !== b && a.container.find(".clone").remove(),
					a.container
						.append(a.slides.first().clone().addClass("clone"))
						.prepend(a.slides.last().clone().addClass("clone")));
				a.newSlides = d(c.selector, a);
				g = m
					? a.count - 1 - a.currentSlide + a.cloneOffset
					: a.currentSlide + a.cloneOffset;
				l && !h
					? (a.container
							.height(200 * (a.count + a.cloneCount) + "%")
							.css("position", "absolute")
							.width("100%"),
					  setTimeout(
							function () {
								a.newSlides.css({ display: "block" });
								a.doMath();
								a.viewport.height(a.h);
								a.setProps(g * a.h, "init");
							},
							"init" === b ? 100 : 0
					  ))
					: (a.container.width(200 * (a.count + a.cloneCount) + "%"),
					  a.setProps(g * a.computedW, "init"),
					  setTimeout(
							function () {
								a.doMath();
								a.newSlides.css({
									width: a.computedW,
									float: "left",
									display: "block",
								});
								c.smoothHeight && f.smoothHeight();
							},
							"init" === b ? 100 : 0
					  ));
			}
			h ||
				a.slides
					.removeClass(e + "active-slide")
					.eq(a.currentSlide)
					.addClass(e + "active-slide");
		};
		a.doMath = function () {
			var b = a.slides.first(),
				d = c.itemMargin,
				e = c.minItems,
				f = c.maxItems;
			a.w = a.width();
			a.h = b.height();
			a.boxPadding = b.outerWidth() - b.width();
			h
				? ((a.itemT = c.itemWidth + d),
				  (a.minW = e ? e * a.itemT : a.w),
				  (a.maxW = f ? f * a.itemT : a.w),
				  (a.itemW =
						a.minW > a.w
							? (a.w - d * e) / e
							: a.maxW < a.w
							? (a.w - d * f) / f
							: c.itemWidth > a.w
							? a.w
							: c.itemWidth),
				  (a.visible = Math.floor(a.w / (a.itemW + d))),
				  (a.move =
						0 < c.move && c.move < a.visible ? c.move : a.visible),
				  (a.pagingCount = Math.ceil(
						(a.count - a.visible) / a.move + 1
				  )),
				  (a.last = a.pagingCount - 1),
				  (a.limit =
						1 === a.pagingCount
							? 0
							: c.itemWidth > a.w
							? (a.itemW + 2 * d) * a.count - a.w - d
							: (a.itemW + d) * a.count - a.w - d))
				: ((a.itemW = a.w),
				  (a.pagingCount = a.count),
				  (a.last = a.count - 1));
			a.computedW = a.itemW - a.boxPadding;
		};
		a.update = function (b, d) {
			a.doMath();
			h ||
				(b < a.currentSlide
					? (a.currentSlide += 1)
					: b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1),
				(a.animatingTo = a.currentSlide));
			if (c.controlNav && !a.manualControls)
				if (("add" === d && !h) || a.pagingCount > a.controlNav.length)
					f.controlNav.update("add");
				else if (
					("remove" === d && !h) ||
					a.pagingCount < a.controlNav.length
				)
					h &&
						a.currentSlide > a.last &&
						((a.currentSlide -= 1), (a.animatingTo -= 1)),
						f.controlNav.update("remove", a.last);
			c.directionNav && f.directionNav.update();
		};
		a.addSlide = function (b, e) {
			var f = d(b);
			a.count += 1;
			a.last = a.count - 1;
			l && m
				? void 0 !== e
					? a.slides.eq(a.count - e).after(f)
					: a.container.prepend(f)
				: void 0 !== e
				? a.slides.eq(e).before(f)
				: a.container.append(f);
			a.update(e, "add");
			a.slides = d(c.selector + ":not(.clone)", a);
			a.setup();
			c.added(a);
		};
		a.removeSlide = function (b) {
			var e = isNaN(b) ? a.slides.index(d(b)) : b;
			a.count -= 1;
			a.last = a.count - 1;
			isNaN(b)
				? d(b, a.slides).remove()
				: l && m
				? a.slides.eq(a.last).remove()
				: a.slides.eq(b).remove();
			a.doMath();
			a.update(e, "remove");
			a.slides = d(c.selector + ":not(.clone)", a);
			a.setup();
			c.removed(a);
		};
		f.init();
	};
	d.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 7e3,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "Previous",
		nextText: "Next",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 0,
		maxItems: 0,
		move: 0,
		start: function () {},
		before: function () {},
		after: function () {},
		end: function () {},
		added: function () {},
		removed: function () {},
	};
	d.fn.flexslider = function (i) {
		void 0 === i && (i = {});
		if ("object" === typeof i)
			return this.each(function () {
				var a = d(this),
					c = a.find(i.selector ? i.selector : ".slides > li");
				1 === c.length
					? (c.fadeIn(400), i.start && i.start(a))
					: void 0 === a.data("flexslider") &&
					  new d.flexslider(this, i);
			});
		var k = d(this).data("flexslider");
		switch (i) {
			case "play":
				k.play();
				break;
			case "pause":
				k.pause();
				break;
			case "next":
				k.flexAnimate(k.getTarget("next"), !0);
				break;
			case "prev":
			case "previous":
				k.flexAnimate(k.getTarget("prev"), !0);
				break;
			default:
				"number" === typeof i && k.flexAnimate(i, !0);
		}
	};
})(
	jQuery
); /* Start:"a:4:{s:4:"full";s:64:"/bitrix/templates/main_adaptive_new/js/scripts.js?15958604075909";s:6:"source";s:49:"/bitrix/templates/main_adaptive_new/js/scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
var ptrm = {
	updateQuan: function (quanInput, isWeight) {
		if (isWeight) {
			$(quanInput + "_hidden").val(
				parseFloat($(quanInput).val() / 1000).toFixed(1)
			);
		} else {
			$(quanInput + "_hidden").val(
				parseFloat($(quanInput).val()).toFixed(1)
			);
		}
	},
	plusWeightQuan: function (quanInput) {
		$(quanInput).val($(quanInput).val() * 1 + 100);
		$(quanInput + "_hidden").val(
			(parseFloat($(quanInput + "_hidden").val()) + 0.1).toFixed(1)
		);
	},
	minusWeightQuan: function (quanInput) {
		if ($(quanInput).val() * 1 > 100) {
			$(quanInput).val($(quanInput).val() * 1 - 100);
			$(quanInput + "_hidden").val(
				(parseFloat($(quanInput + "_hidden").val()) - 0.1).toFixed(1)
			);
		}
	},
	plusQuan: function (quanInput) {
		$(quanInput).val($(quanInput).val() * 1 + 1);
		$(quanInput + "_hidden").val(
			(parseFloat($(quanInput + "_hidden").val()) + 1).toFixed(1)
		);
	},
	minusQuan: function (quanInput) {
		if ($(quanInput).val() * 1 > 1) {
			$(quanInput).val($(quanInput).val() * 1 - 1);
			$(quanInput + "_hidden").val(
				(parseFloat($(quanInput + "_hidden").val()) - 1).toFixed(1)
			);
		}
	},
	smallCartMinusWeightQuan: function (id, price) {
		if ($("#quant" + id).val() * 1 > 100) {
			$("#quant" + id).val($("#quant" + id).val() * 1 - 100);
			$("#quant" + id + "_hidden").val(
				(parseFloat($("#quant" + id).val()) - 0.1).toFixed(1)
			);
			$(".full_summ" + id).text(
				parseFloat(
					price * parseFloat($("#quant" + id).val() / 1000).toFixed(2)
				).toFixed(1)
			);
			$(".Large").text(
				parseFloat(parseFloat($(".Large").text()) - price).toFixed(1)
			);
		}
	},
	cartUpdate: function (id, price) {
		var quant = parseFloat($("#qua" + id + "_hidden").val());
		$(".full_summ" + id).text((quant * price).toFixed(2));
		console.log($(".full_summ" + id), quant, price);
		var totalPrice = 0;
		$.each($(".full_summ"), function () {
			totalPrice += parseFloat($(this).text());
		});
		$(".full_price").text(totalPrice.toFixed(2));
	},
};
$(document).ready(function () {
	$(function () {
		$("form").each(function (i, form) {
			$(form).submit(function () {
				var valid = true;

				$(form)
					.find(
						":input:visible:not(input[type=image], input[type=submit])"
					)
					.each(function (j, field) {
						$(field).removeClass("field_error");
						$(field).parent().find(".field_error_icon").remove();
						if (
							($(field).is(".required") && $(field).val() == 0) ||
							($(field).is(".required") &&
								$(field).is(":checkbox") &&
								$(field).is(":checked") == false)
						) {
							valid = false;
							$(field)
								.addClass("field_error")
								.parent()
								.find(".field_error_icon")
								.remove()
								.end()
								.append('<i class="field_error_icon"></i>');
						}
					});

				if (!valid) {
					//var body = $("html, body");
					//body.stop().animate({scrollTop: $(".field_error").offset().top}, 500, 'swing');
					//jQuery.scrollTo(".field_error");
					//alert("ÐÐµ Ð²ÑÐµ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ð¿Ð¾Ð»Ñ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ñ‹");
					//return false;
				}
			});
		});
	});

	$(".confirmorder_checkbox").change(function () {
		if ($(".confirmperson_checkbox").attr("checked") == "checked")
			$(".add_recipe").toggleClass("inactive");
	});

	$(".confirmperson_checkbox").change(function () {
		if ($(".confirmorder_checkbox").attr("checked") == "checked")
			$(".add_recipe").toggleClass("inactive");
	});

	$("a.selectCity").click(function () {
		$(".popupSelectCity").show();
	});

	$(".closeSelectCity, .hovSelectCity").click(function () {
		$(".popupSelectCity").hide();
	});

	$(".form_confirmperson_checkbox").change(function () {
		confirmPersonForm();
	});
	confirmPersonForm();

	$(document).on("click", ".card_btn", function (e) {
		e.preventDefault();
		showLoader();
		$.ajax({
			url: templateFolder + "/ajax/card_action.php",
			dataType: "json",
			type: "post",
			data: { card: $('[name="CARD_NUMBER"]').val(), siteId: siteId },
			success: function (data) {
				endLoader();
				if (data.error) {
					alert(data.text);
				} else {
				}
				if (data.redirect) window.location.reload();
			},
		});
	});

	$(document).on("click", ".js-popup-mobile-close", function (e) {
		e.stopPropagation();
		$(this).parents(".popup-mobile").addClass("closed");
		$("body").removeClass("mod-overflow");
		$("html").removeClass("mod-overflow");

		$.cookie("NEW_MOBILE_BANNER", "N", { path: "/", expires: 1 });
	});
});

function confirmPersonForm() {
	if ($(".form_confirmperson_checkbox").length > 0) {
		if ($(".form_confirmperson_checkbox").prop("checked")) {
			$(".add_recipe").removeClass("inactive");
			$(".add_recipe").prop("disabled", false);
		} else {
			$(".add_recipe").addClass("inactive");
			$(".add_recipe").prop("disabled", true);
		}
	}
} /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/main_adaptive_new/js/back-to-top.js?15810619203445";s:6:"source";s:53:"/bitrix/templates/main_adaptive_new/js/back-to-top.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

/* End */
var scrolltotop = {
	//startline: Integer. Number of pixels from top of doc scrollbar is scrolled before showing control
	//scrollto: Keyword (Integer, or "Scroll_to_Element_ID"). How far to scroll document up when control is clicked on (0=top).
	setting: {
		startline: 100,
		scrollto: 0,
		scrollduration: 1000,
		fadeduration: [500, 100],
	},
	controlHTML:
		'<img src="/images/back_to_top.png" style="width:48px; height:48px" />', //HTML for control, which is auto wrapped in DIV w/ ID="topcontrol"
	controlattrs: { offsetx: 5, offsety: 5 }, //offset of control relative to right/ bottom of window corner
	anchorkeyword: "#top", //Enter href value of HTML anchors on the page that should also act as "Scroll Up" links

	state: { isvisible: false, shouldvisible: false },

	scrollup: function () {
		if (!this.cssfixedsupport)
			//if control is positioned using JavaScript
			this.$control.css({ opacity: 0 }); //hide control immediately after clicking it
		var dest = isNaN(this.setting.scrollto)
			? this.setting.scrollto
			: parseInt(this.setting.scrollto);
		if (typeof dest == "string" && jQuery("#" + dest).length == 1)
			//check element set by string exists
			dest = jQuery("#" + dest).offset().top;
		else dest = 0;
		this.$body.animate({ scrollTop: dest }, this.setting.scrollduration);
	},

	keepfixed: function () {
		var $window = jQuery(window);
		var controlx =
			$window.scrollLeft() +
			$window.width() -
			this.$control.width() -
			this.controlattrs.offsetx;
		var controly =
			$window.scrollTop() +
			$window.height() -
			this.$control.height() -
			this.controlattrs.offsety;
		this.$control.css({ left: controlx + "px", top: controly + "px" });
	},

	togglecontrol: function () {
		var scrolltop = jQuery(window).scrollTop();
		if (!this.cssfixedsupport) this.keepfixed();
		this.state.shouldvisible =
			scrolltop >= this.setting.startline ? true : false;
		if (this.state.shouldvisible && !this.state.isvisible) {
			this.$control
				.stop()
				.animate({ opacity: 1 }, this.setting.fadeduration[0]);
			this.state.isvisible = true;
		} else if (this.state.shouldvisible == false && this.state.isvisible) {
			this.$control
				.stop()
				.animate({ opacity: 0 }, this.setting.fadeduration[1]);
			this.state.isvisible = false;
		}
	},

	init: function () {
		jQuery(document).ready(function ($) {
			var mainobj = scrolltotop;
			var iebrws = document.all;
			mainobj.cssfixedsupport =
				!iebrws ||
				(iebrws &&
					document.compatMode == "CSS1Compat" &&
					window.XMLHttpRequest); //not IE or IE7+ browsers in standards mode
			mainobj.$body = window.opera
				? document.compatMode == "CSS1Compat"
					? $("html")
					: $("body")
				: $("html,body");
			mainobj.$control = $(
				'<div id="topcontrol">' + mainobj.controlHTML + "</div>"
			)
				.css({
					position: mainobj.cssfixedsupport ? "fixed" : "absolute",
					bottom: mainobj.controlattrs.offsety,
					right: mainobj.controlattrs.offsetx,
					opacity: 0,
					cursor: "pointer",
				})
				.attr({ title: "Ð’Ð²ÐµÑ€Ñ…" })
				.click(function () {
					mainobj.scrollup();
					return false;
				})
				.appendTo("body");
			if (
				document.all &&
				!window.XMLHttpRequest &&
				mainobj.$control.text() != ""
			)
				//loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css({ width: mainobj.$control.width() }); //IE6- seems to require an explicit width on a DIV containing text
			mainobj.togglecontrol();
			$('a[href="' + mainobj.anchorkeyword + '"]').click(function () {
				mainobj.scrollup();
				return false;
			});
			$(window).bind("scroll resize", function (e) {
				mainobj.togglecontrol();
			});
		});
	},
};

scrolltotop.init(); /* Start:"a:4:{s:4:"full";s:77:"/bitrix/templates/main_adaptive_new/js/jquery.site_scripts.js?158133412751821";s:6:"source";s:61:"/bitrix/templates/main_adaptive_new/js/jquery.site_scripts.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
// Ð¡Ñ‡ÐµÑ‚Ñ‡Ð¸Ðº Ð² input
//
/**/

jQuery(document).ready(function ($) {
	// ÐŸÐ¾Ð´ÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ° 1 Ð² Ð¾Ñ‡Ð¸Ñ‰ÐµÐ½Ð½Ð¾Ðµ Ð¿Ð¾Ð»Ðµ Ð¿Ñ€Ð¸ Ð¿Ð¾Ñ‚ÐµÑ€Ðµ Ñ„Ð¾ÐºÑƒÑÐ°
	$(".number input").blur(function () {
		var a = $(this).val();
		if (!a || a < 1) {
			$(this).val(1);
		}
	});
});

// Ð‘Ð»Ð¾ÐºÐ¸ Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ð¾Ð¹ Ð²Ñ‹ÑÐ¾Ñ‚Ñ‹
function SetHeight(obj) {
	var height = 0;

	obj.each(function () {
		currentHeight = $(this).height();
		if (currentHeight > height) height = currentHeight;
	});

	obj.height(height);
}

function setEqualHeight(list_obj, count, log) {
	if (typeof count == "undefined") {
		SetHeight(list_obj);
		return;
	}

	if (count >= list_obj.length) {
		SetHeight(list_obj);
		return;
	}

	if (list_obj.length < 2) return;

	var count_segments = parseInt(list_obj.length / count);
	var mod_segments = list_obj.length % count;
	var buffer = new Array();
	var k = 0;

	for (var i = 0; i < count_segments; i++) {
		buffer[i] = new Array(count);
		for (var j = 0; j < count; j++) buffer[i][j] = list_obj[i * count + j];
		SetHeight($(buffer[i]));
	}

	if (mod_segments) {
		buffer[count_segments] = new Array(mod_segments);
		for (var i = list_obj.length - mod_segments; i < list_obj.length; i++) {
			buffer[count_segments][k] = list_obj[i];
			k++;
		}
		SetHeight($(buffer[count_segments]));
	}
}

/* Ð½ÐµÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ñ‹Ð¹ scroll jquery.jscrollpane */
(function ($, window, undefined) {
	$.fn.jScrollPane = function (settings) {
		function JScrollPane(elem, s) {
			var settings,
				jsp = this,
				pane,
				paneWidth,
				paneHeight,
				container,
				contentWidth,
				contentHeight,
				percentInViewH,
				percentInViewV,
				isScrollableV,
				isScrollableH,
				verticalDrag,
				dragMaxY,
				verticalDragPosition,
				horizontalDrag,
				dragMaxX,
				horizontalDragPosition,
				verticalBar,
				verticalTrack,
				scrollbarWidth,
				verticalTrackHeight,
				verticalDragHeight,
				arrowUp,
				arrowDown,
				horizontalBar,
				horizontalTrack,
				horizontalTrackWidth,
				horizontalDragWidth,
				arrowLeft,
				arrowRight,
				reinitialiseInterval,
				originalPadding,
				originalPaddingTotalWidth,
				previousContentWidth,
				wasAtTop = true,
				wasAtLeft = true,
				wasAtBottom = false,
				wasAtRight = false,
				originalElement = elem.clone(false, false).empty(),
				mwEvent = $.fn.mwheelIntent
					? "mwheelIntent.jsp"
					: "mousewheel.jsp";
			originalPadding =
				elem.css("paddingTop") +
				" " +
				elem.css("paddingRight") +
				" " +
				elem.css("paddingBottom") +
				" " +
				elem.css("paddingLeft");
			originalPaddingTotalWidth =
				(parseInt(elem.css("paddingLeft"), 10) || 0) +
				(parseInt(elem.css("paddingRight"), 10) || 0);

			function initialise(s) {
				var isMaintainingPositon,
					lastContentX,
					lastContentY,
					hasContainingSpaceChanged,
					originalScrollTop,
					originalScrollLeft,
					maintainAtBottom = false,
					maintainAtRight = false;
				settings = s;
				if (pane === undefined) {
					originalScrollTop = elem.scrollTop();
					originalScrollLeft = elem.scrollLeft();
					elem.css({ overflow: "hidden", padding: 0 });
					paneWidth = elem.innerWidth() + originalPaddingTotalWidth;
					paneHeight = elem.innerHeight();
					elem.width(paneWidth);
					pane = $('<div class="jspPane" />')
						.css("padding", originalPadding)
						.append(elem.children());
					container = $('<div class="jspContainer" />')
						.css({
							width: paneWidth + "px",
							height: paneHeight + "px",
						})
						.append(pane)
						.appendTo(elem);
				} else {
					elem.css("width", "");
					maintainAtBottom =
						settings.stickToBottom && isCloseToBottom();
					maintainAtRight = settings.stickToRight && isCloseToRight();
					hasContainingSpaceChanged =
						elem.innerWidth() + originalPaddingTotalWidth !=
							paneWidth || elem.outerHeight() != paneHeight;
					if (hasContainingSpaceChanged) {
						paneWidth =
							elem.innerWidth() + originalPaddingTotalWidth;
						paneHeight = elem.innerHeight();
						container.css({
							width: paneWidth + "px",
							height: paneHeight + "px",
						});
					}
					if (
						!hasContainingSpaceChanged &&
						previousContentWidth == contentWidth &&
						pane.outerHeight() == contentHeight
					) {
						elem.width(paneWidth);
						return;
					}
					previousContentWidth = contentWidth;
					pane.css("width", "");
					elem.width(paneWidth);
					container
						.find(">.jspVerticalBar,>.jspHorizontalBar")
						.remove()
						.end();
				}
				pane.css("overflow", "auto");
				if (s.contentWidth) {
					contentWidth = s.contentWidth;
				} else {
					contentWidth = pane[0].scrollWidth;
				}
				contentHeight = pane[0].scrollHeight;
				pane.css("overflow", "");
				percentInViewH = contentWidth / paneWidth;
				percentInViewV = contentHeight / paneHeight;
				isScrollableV = percentInViewV > 1;
				isScrollableH = percentInViewH > 1;
				if (!(isScrollableH || isScrollableV)) {
					elem.removeClass("jspScrollable");
					pane.css({
						top: 0,
						width: container.width() - originalPaddingTotalWidth,
					});
					removeMousewheel();
					removeFocusHandler();
					removeKeyboardNav();
					removeClickOnTrack();
					unhijackInternalLinks();
				} else {
					elem.addClass("jspScrollable");
					isMaintainingPositon =
						settings.maintainPosition &&
						(verticalDragPosition || horizontalDragPosition);
					if (isMaintainingPositon) {
						lastContentX = contentPositionX();
						lastContentY = contentPositionY();
					}
					initialiseVerticalScroll();
					initialiseHorizontalScroll();
					resizeScrollbars();
					if (isMaintainingPositon) {
						scrollToX(
							maintainAtRight
								? contentWidth - paneWidth
								: lastContentX,
							false
						);
						scrollToY(
							maintainAtBottom
								? contentHeight - paneHeight
								: lastContentY,
							false
						);
					}
					initFocusHandler();
					initMousewheel();
					initTouch();
					if (settings.enableKeyboardNavigation) {
						initKeyboardNav();
					}
					if (settings.clickOnTrack) {
						initClickOnTrack();
					}
					observeHash();
					if (settings.hijackInternalLinks) {
						hijackInternalLinks();
					}
				}
				if (settings.autoReinitialise && !reinitialiseInterval) {
					reinitialiseInterval = setInterval(function () {
						initialise(settings);
					}, settings.autoReinitialiseDelay);
				} else if (!settings.autoReinitialise && reinitialiseInterval) {
					clearInterval(reinitialiseInterval);
				}
				originalScrollTop &&
					elem.scrollTop(0) &&
					scrollToY(originalScrollTop, false);
				originalScrollLeft &&
					elem.scrollLeft(0) &&
					scrollToX(originalScrollLeft, false);
				elem.trigger("jsp-initialised", [
					isScrollableH || isScrollableV,
				]);
			}

			function initialiseVerticalScroll() {
				if (isScrollableV) {
					container.append(
						$('<div class="jspVerticalBar" />').append(
							$('<div class="jspCap jspCapTop" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragTop" />'),
									$('<div class="jspDragBottom" />')
								)
							),
							$('<div class="jspCap jspCapBottom" />')
						)
					);
					verticalBar = container.find(">.jspVerticalBar");
					verticalTrack = verticalBar.find(">.jspTrack");
					verticalDrag = verticalTrack.find(">.jspDrag");
					if (settings.showArrows) {
						arrowUp = $('<a class="jspArrow jspArrowUp" />')
							.bind("mousedown.jsp", getArrowScroll(0, -1))
							.bind("click.jsp", nil);
						arrowDown = $('<a class="jspArrow jspArrowDown" />')
							.bind("mousedown.jsp", getArrowScroll(0, 1))
							.bind("click.jsp", nil);
						if (settings.arrowScrollOnHover) {
							arrowUp.bind(
								"mouseover.jsp",
								getArrowScroll(0, -1, arrowUp)
							);
							arrowDown.bind(
								"mouseover.jsp",
								getArrowScroll(0, 1, arrowDown)
							);
						}
						appendArrows(
							verticalTrack,
							settings.verticalArrowPositions,
							arrowUp,
							arrowDown
						);
					}
					verticalTrackHeight = paneHeight;
					container
						.find(
							">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow"
						)
						.each(function () {
							verticalTrackHeight -= $(this).outerHeight();
						});
					verticalDrag
						.hover(
							function () {
								verticalDrag.addClass("jspHover");
							},
							function () {
								verticalDrag.removeClass("jspHover");
							}
						)
						.bind("mousedown.jsp", function (e) {
							$("html").bind(
								"dragstart.jsp selectstart.jsp",
								nil
							);
							verticalDrag.addClass("jspActive");
							var startY = e.pageY - verticalDrag.position().top;
							$("html")
								.bind("mousemove.jsp", function (e) {
									positionDragY(e.pageY - startY, false);
								})
								.bind("mouseup.jsp mouseleave.jsp", cancelDrag);
							return false;
						});
					sizeVerticalScrollbar();
				}
			}

			function sizeVerticalScrollbar() {
				verticalTrack.height(verticalTrackHeight + "px");
				verticalDragPosition = 0;
				scrollbarWidth =
					settings.verticalGutter + verticalTrack.outerWidth();
				pane.width(
					paneWidth - scrollbarWidth - originalPaddingTotalWidth
				);
				try {
					if (verticalBar.position().left === 0) {
						pane.css("margin-left", scrollbarWidth + "px");
					}
				} catch (err) {}
			}

			function initialiseHorizontalScroll() {
				if (isScrollableH) {
					container.append(
						$('<div class="jspHorizontalBar" />').append(
							$('<div class="jspCap jspCapLeft" />'),
							$('<div class="jspTrack" />').append(
								$('<div class="jspDrag" />').append(
									$('<div class="jspDragLeft" />'),
									$('<div class="jspDragRight" />')
								)
							),
							$('<div class="jspCap jspCapRight" />')
						)
					);
					horizontalBar = container.find(">.jspHorizontalBar");
					horizontalTrack = horizontalBar.find(">.jspTrack");
					horizontalDrag = horizontalTrack.find(">.jspDrag");
					if (settings.showArrows) {
						arrowLeft = $('<a class="jspArrow jspArrowLeft" />')
							.bind("mousedown.jsp", getArrowScroll(-1, 0))
							.bind("click.jsp", nil);
						arrowRight = $('<a class="jspArrow jspArrowRight" />')
							.bind("mousedown.jsp", getArrowScroll(1, 0))
							.bind("click.jsp", nil);
						if (settings.arrowScrollOnHover) {
							arrowLeft.bind(
								"mouseover.jsp",
								getArrowScroll(-1, 0, arrowLeft)
							);
							arrowRight.bind(
								"mouseover.jsp",
								getArrowScroll(1, 0, arrowRight)
							);
						}
						appendArrows(
							horizontalTrack,
							settings.horizontalArrowPositions,
							arrowLeft,
							arrowRight
						);
					}
					horizontalDrag
						.hover(
							function () {
								horizontalDrag.addClass("jspHover");
							},
							function () {
								horizontalDrag.removeClass("jspHover");
							}
						)
						.bind("mousedown.jsp", function (e) {
							$("html").bind(
								"dragstart.jsp selectstart.jsp",
								nil
							);
							horizontalDrag.addClass("jspActive");
							var startX =
								e.pageX - horizontalDrag.position().left;
							$("html")
								.bind("mousemove.jsp", function (e) {
									positionDragX(e.pageX - startX, false);
								})
								.bind("mouseup.jsp mouseleave.jsp", cancelDrag);
							return false;
						});
					horizontalTrackWidth = container.innerWidth();
					sizeHorizontalScrollbar();
				}
			}

			function sizeHorizontalScrollbar() {
				container
					.find(
						">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow"
					)
					.each(function () {
						horizontalTrackWidth -= $(this).outerWidth();
					});
				horizontalTrack.width(horizontalTrackWidth + "px");
				horizontalDragPosition = 0;
			}

			function resizeScrollbars() {
				if (isScrollableH && isScrollableV) {
					var horizontalTrackHeight = horizontalTrack.outerHeight(),
						verticalTrackWidth = verticalTrack.outerWidth();
					verticalTrackHeight -= horizontalTrackHeight;
					$(horizontalBar)
						.find(">.jspCap:visible,>.jspArrow")
						.each(function () {
							horizontalTrackWidth += $(this).outerWidth();
						});
					horizontalTrackWidth -= verticalTrackWidth;
					paneHeight -= verticalTrackWidth;
					paneWidth -= horizontalTrackHeight;
					horizontalTrack
						.parent()
						.append(
							$('<div class="jspCorner" />').css(
								"width",
								horizontalTrackHeight + "px"
							)
						);
					sizeVerticalScrollbar();
					sizeHorizontalScrollbar();
				}
				if (isScrollableH) {
					pane.width(
						container.outerWidth() -
							originalPaddingTotalWidth +
							"px"
					);
				}
				contentHeight = pane.outerHeight();
				percentInViewV = contentHeight / paneHeight;
				if (isScrollableH) {
					horizontalDragWidth = Math.ceil(
						(1 / percentInViewH) * horizontalTrackWidth
					);
					if (horizontalDragWidth > settings.horizontalDragMaxWidth) {
						horizontalDragWidth = settings.horizontalDragMaxWidth;
					} else if (
						horizontalDragWidth < settings.horizontalDragMinWidth
					) {
						horizontalDragWidth = settings.horizontalDragMinWidth;
					}
					horizontalDrag.width(horizontalDragWidth + "px");
					dragMaxX = horizontalTrackWidth - horizontalDragWidth;
					_positionDragX(horizontalDragPosition);
				}
				if (isScrollableV) {
					verticalDragHeight = Math.ceil(
						(1 / percentInViewV) * verticalTrackHeight
					);
					if (verticalDragHeight > settings.verticalDragMaxHeight) {
						verticalDragHeight = settings.verticalDragMaxHeight;
					} else if (
						verticalDragHeight < settings.verticalDragMinHeight
					) {
						verticalDragHeight = settings.verticalDragMinHeight;
					}
					verticalDrag.height(verticalDragHeight + "px");
					dragMaxY = verticalTrackHeight - verticalDragHeight;
					_positionDragY(verticalDragPosition);
				}
			}

			function appendArrows(ele, p, a1, a2) {
				var p1 = "before",
					p2 = "after",
					aTemp;
				if (p == "os") {
					p = /Mac/.test(navigator.platform) ? "after" : "split";
				}
				if (p == p1) {
					p2 = p;
				} else if (p == p2) {
					p1 = p;
					aTemp = a1;
					a1 = a2;
					a2 = aTemp;
				}
				ele[p1](a1)[p2](a2);
			}

			function getArrowScroll(dirX, dirY, ele) {
				return function () {
					arrowScroll(dirX, dirY, this, ele);
					this.blur();
					return false;
				};
			}

			function arrowScroll(dirX, dirY, arrow, ele) {
				arrow = $(arrow).addClass("jspActive");
				var eve,
					scrollTimeout,
					isFirst = true,
					doScroll = function () {
						if (dirX !== 0) {
							jsp.scrollByX(dirX * settings.arrowButtonSpeed);
						}
						if (dirY !== 0) {
							jsp.scrollByY(dirY * settings.arrowButtonSpeed);
						}
						scrollTimeout = setTimeout(
							doScroll,
							isFirst
								? settings.initialDelay
								: settings.arrowRepeatFreq
						);
						isFirst = false;
					};
				doScroll();
				eve = ele ? "mouseout.jsp" : "mouseup.jsp";
				ele = ele || $("html");
				ele.bind(eve, function () {
					arrow.removeClass("jspActive");
					scrollTimeout && clearTimeout(scrollTimeout);
					scrollTimeout = null;
					ele.unbind(eve);
				});
			}

			function initClickOnTrack() {
				removeClickOnTrack();
				if (isScrollableV) {
					verticalTrack.bind("mousedown.jsp", function (e) {
						if (
							e.originalTarget === undefined ||
							e.originalTarget == e.currentTarget
						) {
							var clickedTrack = $(this),
								offset = clickedTrack.offset(),
								direction =
									e.pageY - offset.top - verticalDragPosition,
								scrollTimeout,
								isFirst = true,
								doScroll = function () {
									var offset = clickedTrack.offset(),
										pos =
											e.pageY -
											offset.top -
											verticalDragHeight / 2,
										contentDragY =
											paneHeight *
											settings.scrollPagePercent,
										dragY =
											(dragMaxY * contentDragY) /
											(contentHeight - paneHeight);
									if (direction < 0) {
										if (
											verticalDragPosition - dragY >
											pos
										) {
											jsp.scrollByY(-contentDragY);
										} else {
											positionDragY(pos);
										}
									} else if (direction > 0) {
										if (
											verticalDragPosition + dragY <
											pos
										) {
											jsp.scrollByY(contentDragY);
										} else {
											positionDragY(pos);
										}
									} else {
										cancelClick();
										return;
									}
									scrollTimeout = setTimeout(
										doScroll,
										isFirst
											? settings.initialDelay
											: settings.trackClickRepeatFreq
									);
									isFirst = false;
								},
								cancelClick = function () {
									scrollTimeout &&
										clearTimeout(scrollTimeout);
									scrollTimeout = null;
									$(document).unbind(
										"mouseup.jsp",
										cancelClick
									);
								};
							doScroll();
							$(document).bind("mouseup.jsp", cancelClick);
							return false;
						}
					});
				}
				if (isScrollableH) {
					horizontalTrack.bind("mousedown.jsp", function (e) {
						if (
							e.originalTarget === undefined ||
							e.originalTarget == e.currentTarget
						) {
							var clickedTrack = $(this),
								offset = clickedTrack.offset(),
								direction =
									e.pageX -
									offset.left -
									horizontalDragPosition,
								scrollTimeout,
								isFirst = true,
								doScroll = function () {
									var offset = clickedTrack.offset(),
										pos =
											e.pageX -
											offset.left -
											horizontalDragWidth / 2,
										contentDragX =
											paneWidth *
											settings.scrollPagePercent,
										dragX =
											(dragMaxX * contentDragX) /
											(contentWidth - paneWidth);
									if (direction < 0) {
										if (
											horizontalDragPosition - dragX >
											pos
										) {
											jsp.scrollByX(-contentDragX);
										} else {
											positionDragX(pos);
										}
									} else if (direction > 0) {
										if (
											horizontalDragPosition + dragX <
											pos
										) {
											jsp.scrollByX(contentDragX);
										} else {
											positionDragX(pos);
										}
									} else {
										cancelClick();
										return;
									}
									scrollTimeout = setTimeout(
										doScroll,
										isFirst
											? settings.initialDelay
											: settings.trackClickRepeatFreq
									);
									isFirst = false;
								},
								cancelClick = function () {
									scrollTimeout &&
										clearTimeout(scrollTimeout);
									scrollTimeout = null;
									$(document).unbind(
										"mouseup.jsp",
										cancelClick
									);
								};
							doScroll();
							$(document).bind("mouseup.jsp", cancelClick);
							return false;
						}
					});
				}
			}

			function removeClickOnTrack() {
				if (horizontalTrack) {
					horizontalTrack.unbind("mousedown.jsp");
				}
				if (verticalTrack) {
					verticalTrack.unbind("mousedown.jsp");
				}
			}

			function cancelDrag() {
				$("html").unbind(
					"dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"
				);
				if (verticalDrag) {
					verticalDrag.removeClass("jspActive");
				}
				if (horizontalDrag) {
					horizontalDrag.removeClass("jspActive");
				}
			}

			function positionDragY(destY, animate) {
				if (!isScrollableV) {
					return;
				}
				if (destY < 0) {
					destY = 0;
				} else if (destY > dragMaxY) {
					destY = dragMaxY;
				}
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(verticalDrag, "top", destY, _positionDragY);
				} else {
					verticalDrag.css("top", destY);
					_positionDragY(destY);
				}
			}

			function _positionDragY(destY) {
				if (destY === undefined) {
					destY = verticalDrag.position().top;
				}
				container.scrollTop(0);
				verticalDragPosition = destY;
				var isAtTop = verticalDragPosition === 0,
					isAtBottom = verticalDragPosition == dragMaxY,
					percentScrolled = destY / dragMaxY,
					destTop = -percentScrolled * (contentHeight - paneHeight);
				if (wasAtTop != isAtTop || wasAtBottom != isAtBottom) {
					wasAtTop = isAtTop;
					wasAtBottom = isAtBottom;
					elem.trigger("jsp-arrow-change", [
						wasAtTop,
						wasAtBottom,
						wasAtLeft,
						wasAtRight,
					]);
				}
				updateVerticalArrows(isAtTop, isAtBottom);
				pane.css("top", destTop);
				elem.trigger("jsp-scroll-y", [
					-destTop,
					isAtTop,
					isAtBottom,
				]).trigger("scroll");
			}

			function positionDragX(destX, animate) {
				if (!isScrollableH) {
					return;
				}
				if (destX < 0) {
					destX = 0;
				} else if (destX > dragMaxX) {
					destX = dragMaxX;
				}
				if (animate === undefined) {
					animate = settings.animateScroll;
				}
				if (animate) {
					jsp.animate(horizontalDrag, "left", destX, _positionDragX);
				} else {
					horizontalDrag.css("left", destX);
					_positionDragX(destX);
				}
			}

			function _positionDragX(destX) {
				if (destX === undefined) {
					destX = horizontalDrag.position().left;
				}
				container.scrollTop(0);
				horizontalDragPosition = destX;
				var isAtLeft = horizontalDragPosition === 0,
					isAtRight = horizontalDragPosition == dragMaxX,
					percentScrolled = destX / dragMaxX,
					destLeft = -percentScrolled * (contentWidth - paneWidth);
				if (wasAtLeft != isAtLeft || wasAtRight != isAtRight) {
					wasAtLeft = isAtLeft;
					wasAtRight = isAtRight;
					elem.trigger("jsp-arrow-change", [
						wasAtTop,
						wasAtBottom,
						wasAtLeft,
						wasAtRight,
					]);
				}
				updateHorizontalArrows(isAtLeft, isAtRight);
				pane.css("left", destLeft);
				elem.trigger("jsp-scroll-x", [
					-destLeft,
					isAtLeft,
					isAtRight,
				]).trigger("scroll");
			}

			function updateVerticalArrows(isAtTop, isAtBottom) {
				if (settings.showArrows) {
					arrowUp[isAtTop ? "addClass" : "removeClass"](
						"jspDisabled"
					);
					arrowDown[isAtBottom ? "addClass" : "removeClass"](
						"jspDisabled"
					);
				}
			}

			function updateHorizontalArrows(isAtLeft, isAtRight) {
				if (settings.showArrows) {
					arrowLeft[isAtLeft ? "addClass" : "removeClass"](
						"jspDisabled"
					);
					arrowRight[isAtRight ? "addClass" : "removeClass"](
						"jspDisabled"
					);
				}
			}

			function scrollToY(destY, animate) {
				var percentScrolled = destY / (contentHeight - paneHeight);
				positionDragY(percentScrolled * dragMaxY, animate);
			}

			function scrollToX(destX, animate) {
				var percentScrolled = destX / (contentWidth - paneWidth);
				positionDragX(percentScrolled * dragMaxX, animate);
			}

			function scrollToElement(ele, stickToTop, animate) {
				var e,
					eleHeight,
					eleWidth,
					eleTop = 0,
					eleLeft = 0,
					viewportTop,
					viewportLeft,
					maxVisibleEleTop,
					maxVisibleEleLeft,
					destY,
					destX;
				try {
					e = $(ele);
				} catch (err) {
					return;
				}
				eleHeight = e.outerHeight();
				eleWidth = e.outerWidth();
				container.scrollTop(0);
				container.scrollLeft(0);
				while (!e.is(".jspPane")) {
					eleTop += e.position().top;
					eleLeft += e.position().left;
					e = e.offsetParent();
					if (/^body|html$/i.test(e[0].nodeName)) {
						return;
					}
				}
				viewportTop = contentPositionY();
				maxVisibleEleTop = viewportTop + paneHeight;
				if (eleTop < viewportTop || stickToTop) {
					destY = eleTop - settings.verticalGutter;
				} else if (eleTop + eleHeight > maxVisibleEleTop) {
					destY =
						eleTop -
						paneHeight +
						eleHeight +
						settings.verticalGutter;
				}
				if (destY) {
					scrollToY(destY, animate);
				}
				viewportLeft = contentPositionX();
				maxVisibleEleLeft = viewportLeft + paneWidth;
				if (eleLeft < viewportLeft || stickToTop) {
					destX = eleLeft - settings.horizontalGutter;
				} else if (eleLeft + eleWidth > maxVisibleEleLeft) {
					destX =
						eleLeft -
						paneWidth +
						eleWidth +
						settings.horizontalGutter;
				}
				if (destX) {
					scrollToX(destX, animate);
				}
			}

			function contentPositionX() {
				return -pane.position().left;
			}

			function contentPositionY() {
				return -pane.position().top;
			}

			function isCloseToBottom() {
				var scrollableHeight = contentHeight - paneHeight;
				return (
					scrollableHeight > 20 &&
					scrollableHeight - contentPositionY() < 10
				);
			}

			function isCloseToRight() {
				var scrollableWidth = contentWidth - paneWidth;
				return (
					scrollableWidth > 20 &&
					scrollableWidth - contentPositionX() < 10
				);
			}

			function initMousewheel() {
				container
					.unbind(mwEvent)
					.bind(mwEvent, function (event, delta, deltaX, deltaY) {
						var dX = horizontalDragPosition,
							dY = verticalDragPosition;
						jsp.scrollBy(
							deltaX * settings.mouseWheelSpeed,
							-deltaY * settings.mouseWheelSpeed,
							false
						);
						return (
							dX == horizontalDragPosition &&
							dY == verticalDragPosition
						);
					});
			}

			function removeMousewheel() {
				container.unbind(mwEvent);
			}

			function nil() {
				return false;
			}

			function initFocusHandler() {
				pane.find(":input,a")
					.unbind("focus.jsp")
					.bind("focus.jsp", function (e) {
						scrollToElement(e.target, false);
					});
			}

			function removeFocusHandler() {
				pane.find(":input,a").unbind("focus.jsp");
			}

			function initKeyboardNav() {
				var keyDown,
					elementHasScrolled,
					validParents = [];
				isScrollableH && validParents.push(horizontalBar[0]);
				isScrollableV && validParents.push(verticalBar[0]);
				pane.focus(function () {
					elem.focus();
				});
				elem.attr("tabindex", 0)
					.unbind("keydown.jsp keypress.jsp")
					.bind("keydown.jsp", function (e) {
						if (
							e.target !== this &&
							!(
								validParents.length &&
								$(e.target).closest(validParents).length
							)
						) {
							return;
						}
						var dX = horizontalDragPosition,
							dY = verticalDragPosition;
						switch (e.keyCode) {
							case 40:
							case 38:
							case 34:
							case 32:
							case 33:
							case 39:
							case 37:
								keyDown = e.keyCode;
								keyDownHandler();
								break;
							case 35:
								scrollToY(contentHeight - paneHeight);
								keyDown = null;
								break;
							case 36:
								scrollToY(0);
								keyDown = null;
								break;
						}
						elementHasScrolled =
							(e.keyCode == keyDown &&
								dX != horizontalDragPosition) ||
							dY != verticalDragPosition;
						return !elementHasScrolled;
					})
					.bind("keypress.jsp", function (e) {
						if (e.keyCode == keyDown) {
							keyDownHandler();
						}
						return !elementHasScrolled;
					});
				if (settings.hideFocus) {
					elem.css("outline", "none");
					if ("hideFocus" in container[0]) {
						elem.attr("hideFocus", true);
					}
				} else {
					elem.css("outline", "");
					if ("hideFocus" in container[0]) {
						elem.attr("hideFocus", false);
					}
				}

				function keyDownHandler() {
					var dX = horizontalDragPosition,
						dY = verticalDragPosition;
					switch (keyDown) {
						case 40:
							jsp.scrollByY(settings.keyboardSpeed, false);
							break;
						case 38:
							jsp.scrollByY(-settings.keyboardSpeed, false);
							break;
						case 34:
						case 32:
							jsp.scrollByY(
								paneHeight * settings.scrollPagePercent,
								false
							);
							break;
						case 33:
							jsp.scrollByY(
								-paneHeight * settings.scrollPagePercent,
								false
							);
							break;
						case 39:
							jsp.scrollByX(settings.keyboardSpeed, false);
							break;
						case 37:
							jsp.scrollByX(-settings.keyboardSpeed, false);
							break;
					}
					elementHasScrolled =
						dX != horizontalDragPosition ||
						dY != verticalDragPosition;
					return elementHasScrolled;
				}
			}

			function removeKeyboardNav() {
				elem.attr("tabindex", "-1")
					.removeAttr("tabindex")
					.unbind("keydown.jsp keypress.jsp");
			}

			function observeHash() {
				if (location.hash && location.hash.length > 1) {
					var e,
						retryInt,
						hash = escape(location.hash);
					try {
						e = $(hash);
					} catch (err) {
						return;
					}
					if (e.length && pane.find(hash)) {
						if (container.scrollTop() === 0) {
							retryInt = setInterval(function () {
								if (container.scrollTop() > 0) {
									scrollToElement(hash, true);
									$(document).scrollTop(
										container.position().top
									);
									clearInterval(retryInt);
								}
							}, 50);
						} else {
							scrollToElement(hash, true);
							$(document).scrollTop(container.position().top);
						}
					}
				}
			}

			function unhijackInternalLinks() {
				$("a.jspHijack")
					.unbind("click.jsp-hijack")
					.removeClass("jspHijack");
			}

			function hijackInternalLinks() {
				unhijackInternalLinks();
				$("a[href^=#]")
					.addClass("jspHijack")
					.bind("click.jsp-hijack", function () {
						var uriParts = this.href.split("#"),
							hash;
						if (uriParts.length > 1) {
							hash = uriParts[1];
							if (
								hash.length > 0 &&
								pane.find("#" + hash).length > 0
							) {
								scrollToElement("#" + hash, true);
								return false;
							}
						}
					});
			}

			function initTouch() {
				var startX,
					startY,
					touchStartX,
					touchStartY,
					moved,
					moving = false;
				container
					.unbind(
						"touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick"
					)
					.bind("touchstart.jsp", function (e) {
						var touch = e.originalEvent.touches[0];
						startX = contentPositionX();
						startY = contentPositionY();
						touchStartX = touch.pageX;
						touchStartY = touch.pageY;
						moved = false;
						moving = true;
					})
					.bind("touchmove.jsp", function (ev) {
						if (!moving) {
							return;
						}
						var touchPos = ev.originalEvent.touches[0],
							dX = horizontalDragPosition,
							dY = verticalDragPosition;
						jsp.scrollTo(
							startX + touchStartX - touchPos.pageX,
							startY + touchStartY - touchPos.pageY
						);
						moved =
							moved ||
							Math.abs(touchStartX - touchPos.pageX) > 5 ||
							Math.abs(touchStartY - touchPos.pageY) > 5;
						return (
							dX == horizontalDragPosition &&
							dY == verticalDragPosition
						);
					})
					.bind("touchend.jsp", function (e) {
						moving = false;
					})
					.bind("click.jsp-touchclick", function (e) {
						if (moved) {
							moved = false;
							return false;
						}
					});
			}

			function destroy() {
				var currentY = contentPositionY(),
					currentX = contentPositionX();
				elem.removeClass("jspScrollable").unbind(".jsp");
				elem.replaceWith(originalElement.append(pane.children()));
				originalElement.scrollTop(currentY);
				originalElement.scrollLeft(currentX);
			}

			$.extend(jsp, {
				reinitialise: function (s) {
					s = $.extend({}, settings, s);
					initialise(s);
				},
				scrollToElement: function (ele, stickToTop, animate) {
					scrollToElement(ele, stickToTop, animate);
				},
				scrollTo: function (destX, destY, animate) {
					scrollToX(destX, animate);
					scrollToY(destY, animate);
				},
				scrollToX: function (destX, animate) {
					scrollToX(destX, animate);
				},
				scrollToY: function (destY, animate) {
					scrollToY(destY, animate);
				},
				scrollToPercentX: function (destPercentX, animate) {
					scrollToX(
						destPercentX * (contentWidth - paneWidth),
						animate
					);
				},
				scrollToPercentY: function (destPercentY, animate) {
					scrollToY(
						destPercentY * (contentHeight - paneHeight),
						animate
					);
				},
				scrollBy: function (deltaX, deltaY, animate) {
					jsp.scrollByX(deltaX, animate);
					jsp.scrollByY(deltaY, animate);
				},
				scrollByX: function (deltaX, animate) {
					var destX =
							contentPositionX() +
							Math[deltaX < 0 ? "floor" : "ceil"](deltaX),
						percentScrolled = destX / (contentWidth - paneWidth);
					positionDragX(percentScrolled * dragMaxX, animate);
				},
				scrollByY: function (deltaY, animate) {
					var destY =
							contentPositionY() +
							Math[deltaY < 0 ? "floor" : "ceil"](deltaY),
						percentScrolled = destY / (contentHeight - paneHeight);
					positionDragY(percentScrolled * dragMaxY, animate);
				},
				positionDragX: function (x, animate) {
					positionDragX(x, animate);
				},
				positionDragY: function (y, animate) {
					positionDragY(y, animate);
				},
				animate: function (ele, prop, value, stepCallback) {
					var params = {};
					params[prop] = value;
					ele.animate(params, {
						duration: settings.animateDuration,
						ease: settings.animateEase,
						queue: false,
						step: stepCallback,
					});
				},
				getContentPositionX: function () {
					return contentPositionX();
				},
				getContentPositionY: function () {
					return contentPositionY();
				},
				getContentWidth: function () {
					return contentWidth;
				},
				getContentHeight: function () {
					return contentHeight;
				},
				getPercentScrolledX: function () {
					return contentPositionX() / (contentWidth - paneWidth);
				},
				getPercentScrolledY: function () {
					return contentPositionY() / (contentHeight - paneHeight);
				},
				getIsScrollableH: function () {
					return isScrollableH;
				},
				getIsScrollableV: function () {
					return isScrollableV;
				},
				getContentPane: function () {
					return pane;
				},
				scrollToBottom: function (animate) {
					positionDragY(dragMaxY, animate);
				},
				hijackInternalLinks: function () {
					hijackInternalLinks();
				},
				destroy: function () {
					destroy();
				},
			});
			initialise(s);
		}

		settings = $.extend({}, $.fn.jScrollPane.defaults, settings);
		$.each(
			[
				"mouseWheelSpeed",
				"arrowButtonSpeed",
				"trackClickSpeed",
				"keyboardSpeed",
			],
			function () {
				settings[this] = settings[this] || settings.speed;
			}
		);
		return this.each(function () {
			var elem = $(this),
				jspApi = elem.data("jsp");
			if (jspApi) {
				jspApi.reinitialise(settings);
			} else {
				jspApi = new JScrollPane(elem, settings);
				elem.data("jsp", jspApi);
			}
		});
	};
	$.fn.jScrollPane.defaults = {
		showArrows: false,
		maintainPosition: true,
		stickToBottom: false,
		stickToRight: false,
		clickOnTrack: true,
		autoReinitialise: false,
		autoReinitialiseDelay: 500,
		verticalDragMinHeight: 0,
		verticalDragMaxHeight: 99999,
		horizontalDragMinWidth: 0,
		horizontalDragMaxWidth: 99999,
		contentWidth: undefined,
		animateScroll: false,
		animateDuration: 300,
		animateEase: "linear",
		hijackInternalLinks: false,
		verticalGutter: 4,
		horizontalGutter: 4,
		mouseWheelSpeed: 0,
		arrowButtonSpeed: 0,
		arrowRepeatFreq: 50,
		arrowScrollOnHover: false,
		trackClickSpeed: 0,
		trackClickRepeatFreq: 70,
		verticalArrowPositions: "split",
		horizontalArrowPositions: "split",
		enableKeyboardNavigation: true,
		hideFocus: false,
		keyboardSpeed: 0,
		initialDelay: 300,
		speed: 30,
		scrollPagePercent: 0.8,
	};
})(jQuery, this);

/* Ð±Ð¸Ð±Ð»Ð¸Ð¾Ñ‚ÐµÐºÐ° Ð´Ð»Ñ jscrollpane(Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° ÑÐºÑ€Ð¾Ð»Ð»Ð° ÐºÐ¾Ð»ÐµÑÐ¾Ð¼ Ð¼Ñ‹ÑˆÐ¸) jquery.mousewheel*/
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		// Node/CommonJS style for Browserify
		module.exports = factory;
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($) {
	var toFix = [
			"wheel",
			"mousewheel",
			"DOMMouseScroll",
			"MozMousePixelScroll",
		],
		toBind =
			"onwheel" in document || document.documentMode >= 9
				? ["wheel"]
				: ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		slice = Array.prototype.slice,
		nullLowestDeltaTimeout,
		lowestDelta;

	if ($.event.fixHooks) {
		for (var i = toFix.length; i; ) {
			$.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
		}
	}

	var special = ($.event.special.mousewheel = {
		version: "3.1.9",

		setup: function () {
			if (this.addEventListener) {
				for (var i = toBind.length; i; ) {
					this.addEventListener(toBind[--i], handler, false);
				}
			} else {
				this.onmousewheel = handler;
			}
			// Store the line height and page height for this particular element
			$.data(this, "mousewheel-line-height", special.getLineHeight(this));
			$.data(this, "mousewheel-page-height", special.getPageHeight(this));
		},

		teardown: function () {
			if (this.removeEventListener) {
				for (var i = toBind.length; i; ) {
					this.removeEventListener(toBind[--i], handler, false);
				}
			} else {
				this.onmousewheel = null;
			}
		},

		getLineHeight: function (elem) {
			return parseInt(
				$(elem)
					["offsetParent" in $.fn ? "offsetParent" : "parent"]()
					.css("fontSize"),
				10
			);
		},

		getPageHeight: function (elem) {
			return $(elem).height();
		},

		settings: {
			adjustOldDeltas: true,
		},
	});

	$.fn.extend({
		mousewheel: function (fn) {
			return fn
				? this.bind("mousewheel", fn)
				: this.trigger("mousewheel");
		},

		unmousewheel: function (fn) {
			return this.unbind("mousewheel", fn);
		},
	});

	function handler(event) {
		var orgEvent = event || window.event,
			args = slice.call(arguments, 1),
			delta = 0,
			deltaX = 0,
			deltaY = 0,
			absDelta = 0;
		event = $.event.fix(orgEvent);
		event.type = "mousewheel";

		// Old school scrollwheel delta
		if ("detail" in orgEvent) {
			deltaY = orgEvent.detail * -1;
		}
		if ("wheelDelta" in orgEvent) {
			deltaY = orgEvent.wheelDelta;
		}
		if ("wheelDeltaY" in orgEvent) {
			deltaY = orgEvent.wheelDeltaY;
		}
		if ("wheelDeltaX" in orgEvent) {
			deltaX = orgEvent.wheelDeltaX * -1;
		}

		// Firefox < 17 horizontal scrolling related to DOMMouseScroll event
		if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
			deltaX = deltaY * -1;
			deltaY = 0;
		}

		// Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
		delta = deltaY === 0 ? deltaX : deltaY;

		// New school wheel delta (wheel event)
		if ("deltaY" in orgEvent) {
			deltaY = orgEvent.deltaY * -1;
			delta = deltaY;
		}
		if ("deltaX" in orgEvent) {
			deltaX = orgEvent.deltaX;
			if (deltaY === 0) {
				delta = deltaX * -1;
			}
		}

		// No change actually happened, no reason to go any further
		if (deltaY === 0 && deltaX === 0) {
			return;
		}

		// Need to convert lines and pages to pixels if we aren't already in pixels
		// There are three delta modes:
		//   * deltaMode 0 is by pixels, nothing to do
		//   * deltaMode 1 is by lines
		//   * deltaMode 2 is by pages
		if (orgEvent.deltaMode === 1) {
			var lineHeight = $.data(this, "mousewheel-line-height");
			delta *= lineHeight;
			deltaY *= lineHeight;
			deltaX *= lineHeight;
		} else if (orgEvent.deltaMode === 2) {
			var pageHeight = $.data(this, "mousewheel-page-height");
			delta *= pageHeight;
			deltaY *= pageHeight;
			deltaX *= pageHeight;
		}

		// Store lowest absolute delta to normalize the delta values
		absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

		if (!lowestDelta || absDelta < lowestDelta) {
			lowestDelta = absDelta;

			// Adjust older deltas if necessary
			if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
				lowestDelta /= 40;
			}
		}

		// Adjust older deltas if necessary
		if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
			// Divide all the things by 40!
			delta /= 40;
			deltaX /= 40;
			deltaY /= 40;
		}

		// Get a whole, normalized value for the deltas
		delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
		deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
		deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

		// Add information to the event object
		event.deltaX = deltaX;
		event.deltaY = deltaY;
		event.deltaFactor = lowestDelta;
		// Go ahead and set deltaMode to 0 since we converted to pixels
		// Although this is a little odd since we overwrite the deltaX/Y
		// properties with normalized deltas.
		event.deltaMode = 0;

		// Add event and delta to the front of the arguments
		args.unshift(event, delta, deltaX, deltaY);

		// Clearout lowestDelta after sometime to better
		// handle multiple device types that give different
		// a different lowestDelta
		// Ex: trackpad = 3 and mouse wheel = 120
		if (nullLowestDeltaTimeout) {
			clearTimeout(nullLowestDeltaTimeout);
		}
		nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

		return ($.event.dispatch || $.event.handle).apply(this, args);
	}

	function nullLowestDelta() {
		lowestDelta = null;
	}

	function shouldAdjustOldDeltas(orgEvent, absDelta) {
		// If this is an older event and the delta is divisable by 120,
		// then we are assuming that the browser is treating this as an
		// older mouse wheel event and that we should divide the deltas
		// by 40 to try and get a more usable deltaFactor.
		// Side note, this actually impacts the reported scroll distance
		// in older browsers and can cause scrolling to be slower than native.
		// Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
		return (
			special.settings.adjustOldDeltas &&
			orgEvent.type === "mousewheel" &&
			absDelta % 120 === 0
		);
	}
}); /* Start:"a:4:{s:4:"full";s:76:"/bitrix/templates/main_adaptive_new/js/jquery.mustache.min.js?15810619204418";s:6:"source";s:61:"/bitrix/templates/main_adaptive_new/js/jquery.mustache.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

/* End */
(function (l, q) {
	if ("object" === typeof exports && exports) q(exports);
	else {
		var u = {};
		q(u);
		"function" === typeof define && define.amd
			? define(u)
			: (l.Mustache = u);
	}
})(this, function (l) {
	function q(a) {
		return "function" === typeof a;
	}
	function u(a) {
		return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
	}
	function z(a) {
		if (!x(a) || 2 !== a.length) throw Error("Invalid tags: " + a);
		return [RegExp(u(a[0]) + "\\s*"), RegExp("\\s*" + u(a[1]))];
	}
	function w(a) {
		this.tail = this.string = a;
		this.pos = 0;
	}
	function m(a, b) {
		this.view = null == a ? {} : a;
		this.cache = { ".": this.view };
		this.parent = b;
	}
	function r() {
		this.cache = {};
	}
	var C = RegExp.prototype.test,
		D = /\S/,
		E = Object.prototype.toString,
		x =
			Array.isArray ||
			function (a) {
				return "[object Array]" === E.call(a);
			},
		F = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
			"/": "&#x2F;",
		},
		G = /\s*/,
		A = /\s+/,
		B = /\s*=/,
		H = /\s*\}/,
		I = /#|\^|\/|>|\{|&|=|!/;
	w.prototype.eos = function () {
		return "" === this.tail;
	};
	w.prototype.scan = function (a) {
		return (a = this.tail.match(a)) && 0 === a.index
			? ((a = a[0]),
			  (this.tail = this.tail.substring(a.length)),
			  (this.pos += a.length),
			  a)
			: "";
	};
	w.prototype.scanUntil = function (a) {
		a = this.tail.search(a);
		var b;
		switch (a) {
			case -1:
				b = this.tail;
				this.tail = "";
				break;
			case 0:
				b = "";
				break;
			default:
				(b = this.tail.substring(0, a)),
					(this.tail = this.tail.substring(a));
		}
		this.pos += b.length;
		return b;
	};
	m.prototype.push = function (a) {
		return new m(a, this);
	};
	m.prototype.lookup = function (a) {
		var b;
		if (a in this.cache) b = this.cache[a];
		else {
			for (var g = this; g; ) {
				if (0 < a.indexOf(".")) {
					b = g.view;
					for (
						var e = a.split("."), l = 0;
						null != b && l < e.length;

					)
						b = b[e[l++]];
				} else b = g.view[a];
				if (null != b) break;
				g = g.parent;
			}
			this.cache[a] = b;
		}
		q(b) && (b = b.call(this.view));
		return b;
	};
	r.prototype.clearCache = function () {
		this.cache = {};
	};
	r.prototype.parse = function (a, b) {
		var g = this.cache,
			e = g[a];
		if (null == e) {
			var n;
			n = b || l.tags;
			e = a || "";
			"string" === typeof n && (n = n.split(A));
			for (
				var c = z(n),
					f = new w(e),
					k = [],
					e = [],
					d = [],
					q = !1,
					m = !1,
					p,
					h,
					s,
					v;
				!f.eos();

			) {
				p = f.pos;
				if ((s = f.scanUntil(c[0]))) {
					v = 0;
					for (var r = s.length; v < r; ++v)
						if (
							((h = s.charAt(v)),
							C.call(D, h) ? (m = !0) : d.push(e.length),
							e.push(["text", h, p, p + 1]),
							(p += 1),
							"\n" === h)
						) {
							if (q && !m) for (; d.length; ) delete e[d.pop()];
							else d = [];
							m = q = !1;
						}
				}
				if (!f.scan(c[0])) break;
				q = !0;
				h = f.scan(I) || "name";
				f.scan(G);
				"=" === h
					? ((s = f.scanUntil(B)), f.scan(B), f.scanUntil(c[1]))
					: "{" === h
					? ((s = f.scanUntil(RegExp("\\s*" + u("}" + n[1])))),
					  f.scan(H),
					  f.scanUntil(c[1]),
					  (h = "&"))
					: (s = f.scanUntil(c[1]));
				if (!f.scan(c[1])) throw Error("Unclosed tag at " + f.pos);
				v = [h, s, p, f.pos];
				e.push(v);
				if ("#" === h || "^" === h) k.push(v);
				else if ("/" === h) {
					h = k.pop();
					if (!h) throw Error('Unopened section "' + s + '" at ' + p);
					if (h[1] !== s)
						throw Error('Unclosed section "' + h[1] + '" at ' + p);
				} else
					"name" === h || "{" === h || "&" === h
						? (m = !0)
						: "=" === h && (c = z((n = s.split(A))));
			}
			if ((h = k.pop()))
				throw Error('Unclosed section "' + h[1] + '" at ' + f.pos);
			n = [];
			for (var t, f = 0, k = e.length; f < k; ++f)
				if ((c = e[f]))
					"text" === c[0] && t && "text" === t[0]
						? ((t[1] += c[1]), (t[3] = c[3]))
						: (n.push(c), (t = c));
			d = t = [];
			e = [];
			f = 0;
			for (k = n.length; f < k; ++f)
				switch (((c = n[f]), c[0])) {
					case "#":
					case "^":
						d.push(c);
						e.push(c);
						d = c[4] = [];
						break;
					case "/":
						d = e.pop();
						d[5] = c[2];
						d = 0 < e.length ? e[e.length - 1][4] : t;
						break;
					default:
						d.push(c);
				}
			e = g[a] = t;
		}
		return e;
	};
	r.prototype.render = function (a, b, g) {
		var e = this.parse(a);
		b = b instanceof m ? b : new m(b);
		return this.renderTokens(e, b, g, a);
	};
	r.prototype.renderTokens = function (a, b, g, e) {
		function n(a) {
			return f.render(a, b, g);
		}
		for (var c = "", f = this, k, d, m = 0, r = a.length; m < r; ++m)
			switch (((k = a[m]), k[0])) {
				case "#":
					d = b.lookup(k[1]);
					if (!d) continue;
					if (x(d))
						for (var p = 0, h = d.length; p < h; ++p)
							c += this.renderTokens(k[4], b.push(d[p]), g, e);
					else if ("object" === typeof d || "string" === typeof d)
						c += this.renderTokens(k[4], b.push(d), g, e);
					else if (q(d)) {
						if ("string" !== typeof e)
							throw Error(
								"Cannot use higher-order sections without the original template"
							);
						d = d.call(b.view, e.slice(k[3], k[5]), n);
						null != d && (c += d);
					} else c += this.renderTokens(k[4], b, g, e);
					break;
				case "^":
					d = b.lookup(k[1]);
					if (!d || (x(d) && 0 === d.length))
						c += this.renderTokens(k[4], b, g, e);
					break;
				case ">":
					if (!g) continue;
					d = q(g) ? g(k[1]) : g[k[1]];
					null != d &&
						(c += this.renderTokens(this.parse(d), b, g, d));
					break;
				case "&":
					d = b.lookup(k[1]);
					null != d && (c += d);
					break;
				case "name":
					d = b.lookup(k[1]);
					null != d && (c += l.escape(d));
					break;
				case "text":
					c += k[1];
			}
		return c;
	};
	l.name = "mustache.js";
	l.version = "0.8.1";
	l.tags = ["{{", "}}"];
	var y = new r();
	l.clearCache = function () {
		return y.clearCache();
	};
	l.parse = function (a, b) {
		return y.parse(a, b);
	};
	l.render = function (a, b, g) {
		return y.render(a, b, g);
	};
	l.to_html = function (a, b, g, e) {
		a = l.render(a, b, g);
		if (q(e)) e(a);
		else return a;
	};
	l.escape = function (a) {
		return String(a).replace(/[&<>"'\/]/g, function (a) {
			return F[a];
		});
	};
	l.Scanner = w;
	l.Context = m;
	l.Writer = r;
}); /* Start:"a:4:{s:4:"full";s:106:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/mobile-menu-catalog/script.min.js?1581061921407";s:6:"source";s:88:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/mobile-menu-catalog/script.js";s:3:"min";s:92:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/mobile-menu-catalog/script.min.js";s:3:"map";s:92:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/mobile-menu-catalog/script.map.js";}"*/
/* End */
var jshover = function () {
	var e = document.getElementById("horizontal-multilevel-menu");
	if (!e) return;
	var t = e.getElementsByTagName("li");
	for (var n = 0; n < t.length; n++) {
		t[n].onmouseover = function () {
			this.className += " jshover";
		};
		t[n].onmouseout = function () {
			this.className = this.className.replace(
				new RegExp(" jshover\\b"),
				""
			);
		};
	}
};
if (window.attachEvent)
	window.attachEvent(
		"onload",
		jshover
	); /* Start:"a:4:{s:4:"full";s:98:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/catalog_new/script.min.js?1581061921409";s:6:"source";s:80:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/catalog_new/script.js";s:3:"min";s:84:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/catalog_new/script.min.js";s:3:"map";s:84:"/bitrix/templates/main_adaptive_new/components/bitrix/menu/catalog_new/script.map.js";}"*/
/* End */
var jsvhover = function () {
	var e = document.getElementById("vertical-multilevel-menu");
	if (!e) return;
	var t = e.getElementsByTagName("li");
	for (var n = 0; n < t.length; n++) {
		t[n].onmouseover = function () {
			this.className += " jsvhover";
		};
		t[n].onmouseout = function () {
			this.className = this.className.replace(
				new RegExp(" jsvhover\\b"),
				""
			);
		};
	}
};
if (window.attachEvent)
	window.attachEvent(
		"onload",
		jsvhover
	); /* Start:"a:4:{s:4:"full";s:61:"/bitrix/templates/main_adaptive_new/js/auth.js?16092420319019";s:6:"source";s:46:"/bitrix/templates/main_adaptive_new/js/auth.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
$(function () {
	// showPopup('.auth_form','.popup_auth');

	$(document).on("change", ".popup_auth .row__input>input", function () {
		if ($(this).val()) {
			$(this).addClass("no-empty");
		} else {
			$(this).removeClass("no-empty");
		}
	});

	$(".check_sms_code").click(function () {
		$("a.remember_phone").click();
	});

	$(".forgot").click(function () {
		$("a.remember").click();
	});
	$("a.remember").click(function (e) {
		e.preventDefault();
		$(".tabs.auth").addClass("is-hide");
		$(".tabs.remember").removeClass("is-hide");
		$("#tab3").prop("checked", true);
	});
	$(document).on("click", ".auth__reg", function (e) {
		$(".tabs.auth").removeClass("is-hide");
		$(".tabs.remember").addClass("is-hide");
	});
	$("a.back").click(function (e) {
		e.preventDefault();
		$(".tabs.auth").removeClass("is-hide");
		$(".tabs.remember").addClass("is-hide");
		$("#tab1").prop("checked", true);
	});

	$("#auth_form_submit").click(function (e) {
		e.preventDefault();
		showLoader();
		var login = $("form[name=auth-form-popup] input[name=login]");
		var password = $("form[name=auth-form-popup] input[name=password]");
		var sessid = $("form[name=auth-form-popup] input[name=sessid]");

		checkRequered($("form[name=auth-form-popup] input[required]"));

		if ($("form[name=auth-form-popup] input").hasClass("error")) {
			endLoader();
			return;
		}

		var data = {};
		data.action = "auth";
		data.login = login.val();
		data.password = password.val();
		data.sessid = sessid.val();

		$.ajax({
			url: site + "/ajax/auth.php",
			type: "post",
			data: data,
			success: function (data) {
				var result = JSON.parse(data);

				if (result.error == 0) {
					$("form[name=auth-form-popup] p.error-msg").html("");
					console.log(window.location.pathname);
					location.assign(window.location.pathname);
				}
				if (result.error == 1) {
					$("form[name=auth-form-popup] p.error-msg").html(
						result.msg
					);
				}
				endLoader();
			},
		});
	});

	$(document).on("click", "#reg_submit", function (e) {
		e.preventDefault();
		showLoader();
		var form = $("form[name=reg-form-popup]").serialize();

		$.ajax({
			url: site + "/ajax/auth.php",
			type: "post",
			data: form,
			success: function (data) {
				$("#content-tab2").html(data);
				endLoader();
			},
		});
	});

	$(document).on("click", "#forgotpasswd_submit", function (e) {
		e.preventDefault();
		showLoader();
		var form = $("form[name=forgotpasswd-form-popup]").serialize();

		$.ajax({
			url: site + "/ajax/auth.php",
			type: "post",
			data: form,
			success: function (data) {
				var result = JSON.parse(data);

				var success = $(
					"form[name=forgotpasswd-form-popup] div.ok-color"
				);
				var fail = $(
					"form[name=forgotpasswd-form-popup] div.fail-color"
				);

				if (result.error == 0) {
					fail.html("");
					success.html(result.msg);
				}
				if (result.error == 1) {
					success.html("");
					fail.html(result.msg);
				}
				console.log(result);
				if (result.phone && typeof result.phone !== "undefined") {
					var arr = new Array();
					arr.push("Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÐ° Ð¡ÐœÐ¡");
					arr.push("Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÐ¸ Ð¡ÐœÐ¡");
					arr.push("Ð¿Ð¾Ð¿Ñ‹Ñ‚Ð¾Ðº Ð¡ÐœÐ¡");

					if (parseInt(result.cnt) > 0) {
						var title = declOfNum(5 - parseInt(result.cnt), arr);
						$("#restore_count").text(5 - parseInt(result.cnt));
						$("#restore_count_text").text(title);
					}
					$("#sms_code").show();
					$("#sms_code_btn").show();
				}
				endLoader();
			},
		});
	});

	function declOfNum(number, titles) {
		cases = [2, 0, 1, 1, 1, 2];
		return titles[
			number % 100 > 4 && number % 100 < 20
				? 2
				: cases[number % 10 < 5 ? number % 10 : 5]
		];
	}

	$(document).on("click", "#forgotpasswd_phone_submit", function (e) {
		e.preventDefault();
		showLoader();
		var form = $("form[name=forgotpasswd-phone-form-popup]").serialize(),
			_this = $(this);
		$(this).prop("disabled", true);
		$.ajax({
			url: site + "/ajax/phone_restore.php",
			type: "post",
			data: form,
			dataType: "json",
			success: function (result) {
				var success = $(
					"form[name=forgotpasswd-phone-form-popup] div.ok-color"
				);
				var fail = $(
					"form[name=forgotpasswd-phone-form-popup] div.fail-color"
				);

				var arr = new Array();
				arr.push("Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÐ°");
				arr.push("Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÐ¸");
				arr.push("Ð¿Ð¾Ð¿Ñ‹Ñ‚Ð¾Ðº");

				if (result.error == 0) {
					if (parseInt(result.cnt) > 0) {
						var title = declOfNum(5 - parseInt(result.cnt), arr);
						$("#restore_count").text(5 - parseInt(result.cnt));
						$("#restore_count_text").text(title);
					}
					$("#sms_code").show();
					fail.html("");
					success.html(result.msg);
				}
				if (result.error == 1) {
					success.html("");
					fail.html(result.msg);
				}
				_this.prop("disabled", false);
				endLoader();
			},
		});
	});

	$("a.remember_phone").click(function (e) {
		e.preventDefault();
		showLoader();
		var sms = $('[name="sms_code"]').val();
		$.ajax({
			url: site + "/ajax/phone_restore.php",
			type: "post",
			data: { sms: sms, type: "code" },
			dataType: "json",
			success: function (result) {
				var success = $(
					"form[name=forgotpasswd-phone-form-popup] div.ok-color"
				);
				var fail = $(
					"form[name=forgotpasswd-phone-form-popup] div.fail-color"
				);

				if (result.error == 1) {
					success.html("");
					fail.html(result.msg);
				} else {
					fail.html("");
					var timeLeft = 11;
					var timer = setInterval(function () {
						if (--timeLeft >= 0) {
							// ÐµÑÐ»Ð¸ Ñ‚Ð°Ð¹Ð¼ÐµÑ€ Ð²ÑÑ‘ ÐµÑ‰Ðµ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð½ÑƒÐ»Ñ
							//$('#sms_timer').show();
							//$('#sms_timer').html('Ð’Ñ‹ Ð±ÑƒÐ´ÐµÑ‚Ðµ Ð¿ÐµÑ€ÐµÐ½Ð°Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ñ‹ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ñ‡ÐµÑ€ÐµÐ· <b>' + timeLeft + '</b> ÑÐµÐº. ' +
							//   'Ð¸Ð»Ð¸ Ð¿ÐµÑ€ÐµÐ¹Ð´Ð¸Ñ‚Ðµ Ð¿Ð¾ <a href="' + result.link + '">ÑÑÑ‹Ð»ÐºÐµ</a>');
						} else {
							window.location.assign(result.link);
							clearInterval(timer); // ÑƒÐ´Ð°Ð»ÑÐµÐ¼ Ñ‚Ð°Ð¹Ð¼ÐµÑ€
						}
					}, 10);
				}

				endLoader();
			},
		});
	});

	$(".password-control").click(function () {
		if (!$(this).hasClass("view")) {
			$('[name="password"]').prop("type", "text");
			$(this).addClass("view");
		} else {
			$('[name="password"]').prop("type", "password");
			$(this).removeClass("view");
		}
	});

	$(document).on("click", "#reloadCaptcha", function () {
		$("#whiteBlock").show();
		$.getJSON(templateFolder + "/ajax/captcha.php", function (data) {
			$("#captchaImg").attr(
				"src",
				"/bitrix/tools/captcha.php?captcha_sid=" + data
			);
			$("#captchaSid").val(data);
			$("#whiteBlock").hide();
		});
		return false;
	});
});

function checkRequered(requered) {
	if (requered.length == 0) return;
	$(requered).each(function () {
		if ($.trim($(this).val()).length === 0) {
			$(this).addClass("error");
		} else {
			$(this).removeClass("error");
		}
	});
} /* Start:"a:4:{s:4:"full";s:65:"/bitrix/templates/main_adaptive_new/js/new-menu.js?15810619201823";s:6:"source";s:50:"/bitrix/templates/main_adaptive_new/js/new-menu.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
$(function () {
	$(document).on("click", ".header-mobile-arrow", function (e) {
		e.preventDefault();
		// $(this).parents('li').find('.header-mobile-sublist').slideToggle();
		$(this)
			.parents("a")
			.siblings(".header-mobile-sublist")
			.slideToggle(200);
		$(this).parents("a").toggleClass("is-show");
	});

	$(document).on("click", ".header-mobile-hamburger", function (e) {
		e.preventDefault();
		// $(this).parents('li').find('.header-mobile-sublist').slideToggle();
		$(".header-mobile").toggleClass("active");
		$("body").toggleClass("is-lock");
	});

	$(document).on("click", ".header-mobile-close__icon", function (e) {
		e.preventDefault();
		$(".header-mobile").removeClass("active");
		$("body").removeClass("is-lock");
	});
	$(document).on("click", ".header-mobile-bg-layout", function (e) {
		e.preventDefault();
		$(".header-mobile").removeClass("active");
		$("body").removeClass("is-lock");
	});

	$(document).on("click", ".header-mobile-search", function (e) {
		e.preventDefault();
		$(".header__search").toggleClass("is-show");
		$(".header__search .header__input").focus();
	});

	$(document).on("click", ".header__search__close", function (e) {
		e.preventDefault();
		$("#title-search-input").val("");
		$(".header__search").removeClass("is-show");
	});

	$(document).on("click", ".header-mobile-city__name", function (e) {
		e.preventDefault();
		$(".header-mobile-dropdown").toggleClass("is-show");
	});
	$(document).on("click", ".header__deliv_time__close", function (e) {
		e.preventDefault();
		$(".header__deliv_time").addClass("is-hide");
	});
}); /* Start:"a:4:{s:4:"full";s:68:"/bitrix/templates/main_adaptive_new/js/new/bundle.js?161537343718422";s:6:"source";s:52:"/bitrix/templates/main_adaptive_new/js/new/bundle.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
/******/
(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/
	var installedModules = {};
	/******/
	/******/ // The require function
	/******/
	function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/
		if (installedModules[moduleId]) {
			/******/
			return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/
		var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/
		modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Flag the module as loaded
		/******/
		module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/
		return module.exports;
		/******/
	}

	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/
	__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/
	__webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/
	__webpack_require__.d = function (exports, name, getter) {
		/******/
		if (!__webpack_require__.o(exports, name)) {
			/******/
			Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter,
			});
			/******/
		}
		/******/
	};
	/******/
	/******/ // define __esModule on exports
	/******/
	__webpack_require__.r = function (exports) {
		/******/
		if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
			/******/
			Object.defineProperty(exports, Symbol.toStringTag, {
				value: "Module",
			});
			/******/
		}
		/******/
		Object.defineProperty(exports, "__esModule", { value: true });
		/******/
	};
	/******/
	/******/ // create a fake namespace object
	/******/ // mode & 1: value is a module id, require it
	/******/ // mode & 2: merge all properties of value into the ns
	/******/ // mode & 4: return value when already ns object
	/******/ // mode & 8|1: behave like require
	/******/
	__webpack_require__.t = function (value, mode) {
		/******/
		if (mode & 1) value = __webpack_require__(value);
		/******/
		if (mode & 8) return value;
		/******/
		if (mode & 4 && typeof value === "object" && value && value.__esModule)
			return value;
		/******/
		var ns = Object.create(null);
		/******/
		__webpack_require__.r(ns);
		/******/
		Object.defineProperty(ns, "default", {
			enumerable: true,
			value: value,
		});
		/******/
		if (mode & 2 && typeof value != "string")
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function (key) {
						return value[key];
					}.bind(null, key)
				);
		/******/
		return ns;
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/
	__webpack_require__.n = function (module) {
		/******/
		var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module["default"];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/
		__webpack_require__.d(getter, "a", getter);
		/******/
		return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/
	__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/
	__webpack_require__.p = "";
	/******/
	/******/
	/******/ // Load entry module and return exports
	/******/
	return __webpack_require__((__webpack_require__.s = 0));
	/******/
})(
	/************************************************************************/
	/******/ [
		/* 0 */
		/***/ function (module, exports) {
			$(document).ready(function () {
				console.log(1);
				$(document).on(
					"click",
					".js-catalog-menu .arrow",
					function (e) {
						if ($(this).parent().hasClass("active")) {
							$(this).parent().removeClass("active");
						} else {
							$(this).parent().addClass("active");
						}
					}
				);
				$(".js-input-change").bind("input", function () {
					var $this = $(this);
					var delay = 500;
					clearTimeout($this.data("timer"));
					$this.data(
						"timer",
						setTimeout(function () {
							if ($this.context.value) {
								$(".js-input-change-baloon").addClass("active");
							} else {
								$(".js-input-change-baloon").removeClass(
									"active"
								);
							}
						}, delay)
					);
				});
				$(".js-input-change").focus(function (e) {
					if ($(this).context.value) {
						$(".js-input-change-baloon").addClass("active");
					}
				});
				$(document).on("click", function (e) {
					var element = $(".js-input-change-baloon");
					var parent = $(".header__search");
					if (
						element.has(e.target).length === 0 &&
						parent.has(e.target).length === 0
					) {
						element.removeClass("active");
					}
				});

				$(document).on("click", ".js-select-city", function (e) {
					e.stopPropagation();
					$(".js-select-city-baloon").addClass("active");
				});
				$(".js-baloon-close").on("click", function (e) {
					e.preventDefault();
					$(".js-select-city-baloon").removeClass("active");
				});

				$(document).mousedown(function (e) {
					var element = $(".js-select-city-baloon");
					var parent = $(".js-select-city");
					if (
						!element.is(e.target) &&
						element.has(e.target).length === 0 &&
						!parent.is(e.target)
					) {
						element.removeClass("active");
					}
				});
				// $(document).mousedown(function (e) {
				// 	var element = $(".js-cart-baloon");
				// 	var parent = $(".js-show-cart");
				// 	if (
				// 		!element.is(e.target) &&
				// 		element.has(e.target).length === 0 &&
				// 		parent.has(e.target).length === 0
				// 	) {
				// 		element.removeClass("active");
				// 		$(".js-show-cart").removeClass("active");
				// 	}
				// });

				// $(document).on("click", ".js-show-cart", function (e) {
				// 	e.stopPropagation();
				// 	$(".js-cart-baloon").addClass("active");
				// 	$(".js-show-cart").addClass("active");
				// });
				// $(document).on('click', function (e) {
				//     var element = $('.js-cart-baloon');
				//     if (element.has(e.target).length === 0) {
				//         element.removeClass('active');
				//         $('.js-show-cart').removeClass('active');
				//     }
				// });

				if ($(".js-custom-scroll").length) {
					window.dima = baron({
						root: ".js-custom-scroll",
						scroller: ".baron__scroller",
						bar: ".baron__bar",
					}).autoUpdate();
				}
				if ($(".js-custom-scroll-menu").length) {
					window.dima = baron({
						root: ".js-custom-scroll-menu",
						scroller: ".baron__scroller",
						bar: ".baron__bar",
					}).autoUpdate();
				}

				$(".js-select-city-link").on("click", function (e) {
					$(".js-select-city-link").removeClass("active");
					$(this).addClass("active");
				});

				/* ÐºÐ¾Ñ€Ð·Ð¸Ð½Ð° */
				function cartScroll() {
					if (asideWrapper == null) {
						asideWrapper = document.createElement("div");
						asideWrapper.style.cssText =
							"box-sizing: border-box; width: " +
							asideCart.offsetWidth +
							"px;";
						asideCart.insertBefore(
							asideWrapper,
							asideCart.firstChild
						);
						var l = asideCart.childNodes.length;
						for (var i = 1; i < l; i++) {
							asideWrapper.appendChild(asideCart.childNodes[1]);
						}
						asideCart.style.height =
							asideWrapper.getBoundingClientRect().height + "px";
					}
					var Ra = asideCart.getBoundingClientRect(),
						R = Math.round(
							Ra.top +
								asideWrapper.getBoundingClientRect().height -
								document
									.querySelector(".js-cart")
									.getBoundingClientRect().bottom
						);
					if (Ra.top - P <= 0 && window.innerWidth > 1170) {
						if (Ra.top - P <= R) {
							asideWrapper.className = "stop";
							asideWrapper.style.top = -R + "px";
						} else {
							asideWrapper.className = "sticky";
							asideWrapper.style.top = P + "px";
						}
					} else {
						asideWrapper.className = "";
						asideWrapper.style.top = "";
					}
					window.addEventListener(
						"resize",
						function () {
							asideCart.children[0].style.width =
								getComputedStyle(asideCart, "").width;
							if (window.innerWidth <= 1170) {
								asideWrapper.className = "";
								asideWrapper.style.top = "";
								asideCart.style.height = "auto";
							}
						},
						false
					);
				}

				if ($(".js-aside").length) {
					var asideCart = document.querySelector(".js-aside"),
						asideWrapper = null,
						P = 0;
					window.addEventListener("scroll", cartScroll, false);
					document.body.addEventListener("scroll", cartScroll, false);
				}

				$(".js-snegiri-button").on("click", function (e) {
					e.preventDefault();
					var button = $(this),
						inputParent = $(".js-snegiri-input"),
						input = $(".js-snegiri-input input");
					if (inputParent.hasClass("locked")) {
						inputParent.removeClass("locked");
						input.attr("readonly", false);
						button.text("ÐŸÑ€Ð¸Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ ÐºÐ°Ñ€Ñ‚Ñƒ");
					} else {
						if (/^[0-9]+$/.test(input.val())) {
							inputParent.addClass("locked");
							input.attr("readonly", true);
							button.text("Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ ÐºÐ°Ñ€Ñ‚Ñƒ");
						}
					}
				});

				// Ð»Ð¸Ñ‡Ð½Ñ‹Ð¹ ÐºÐ°Ð±Ð¸Ð½ÐµÑ‚
				$(document).on("click", ".js-history-item", function (e) {
					let id = $(this).data("id");
					$(".js-history").addClass("hide");
					$(".js-history-more").removeClass("show");
					$("#" + id + ".js-history-more").addClass("show");
				});
				$(document).on("click", ".js-history-back", function (e) {
					$(".js-history").removeClass("hide");
					$(".js-history-more").removeClass("show");
				});
				$(document).on("click", ".js-history-delete", function (e) {
					e.stopPropagation();
				});
				$(document).on("click", ".js-history-repeat", function (e) {
					e.stopPropagation();
				});
				$(document).on("click", ".js-favorite-add", function (e) {
					$(this).toggleClass("active");
				});
				$(document).on("click", ".js-address-edit", function (e) {
					$(this).parents(".js-address").addClass("editing");
				});
				$(document).on("click", ".js-address-edit-exit", function (e) {
					$(this).parents(".js-address").removeClass("editing");
				});

				$(document).on("click", ".js-cart-tab-all", function (e) {
					$(".js-cart-tab-pies").removeClass("active");
					$(this).addClass("active");
					$(".js-cart-all").removeClass("mod-hide");
					$(".js-cart-pies").addClass("mod-hide");
				});
				$(document).on("click", ".js-cart-tab-pies", function (e) {
					$(".js-cart-tab-all").removeClass("active");
					$(this).addClass("active");
					$(".js-cart-pies").removeClass("mod-hide");
					$(".js-cart-all").addClass("mod-hide");
				});

				// checkout
				function checkSnegiri() {
					$(".js-snegiri-input").val();
					if (
						$(".js-snegiri-button").text() ==
						"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ ÐºÐ°Ñ€Ñ‚Ñƒ"
					) {
						return true;
					} else {
						return false;
					}
				}

				function checkBuys() {
					if ($(".js-buy-item").length) {
						return true;
					} else {
						return false;
					}
				}

				function checkDelivery() {
					if ($(".js-delivery-item input:checked").length) {
						return true;
					} else {
						return false;
					}
				}

				function checkPayment() {
					if ($(".js-payment-item input:checked").length) {
						return true;
					} else {
						return false;
					}
				}

				function checkRequiredInputs() {
					let check = true;
					$(".js-required-input input").each(function (
						index,
						element
					) {
						if ($(element).val() == "") {
							check = false;
						}
					});
					return check;
				}

				function checkAcceptPolicy() {
					if ($(".js-accept input:checked").length) {
						return true;
					} else {
						return false;
					}
				}

				function checkAll() {
					let check = true;
					if (checkRequiredInputs()) {
						$(".js-buyer").addClass("complete");
					} else {
						$(".js-buyer").removeClass("complete");
						check = false;
					}
					if (!checkAcceptPolicy()) {
						check = false;
					}
					if (check) {
						$(".js-checkout-button").addClass("active");
					} else {
						$(".js-checkout-button").removeClass("active");
					}
					return check;
				}

				$(".js-required-input").bind("input", function () {
					checkAll();
				});

				$(document).on("click", ".js-about-time", function (e) {
					let index = Number($(this).data("index"));
					$(".js-about-time").removeClass("active");
					$(this).addClass("active");
					$(".js-about-time-tab").removeClass("active");
					$(".js-about-time-tab").addClass(function (i) {
						if (i == index) {
							return "active";
						}
					});
				});

				// $(document).on('click', '.js-checkout-head', function (e) {
				//     e.stopPropagation();
				//     let startElement = $(this);
				//     $('.js-checkout-head').each(function (index, element) {
				//         console.log($(this));
				//         console.log(startElement);
				//         if ($(element).get(0) == startElement.get(0)) {
				//             $(this).parents('.js-checkout-category').toggleClass('closed');
				//             return false;
				//         } else {
				//             if ($(element).parents('.js-checkout-category').hasClass('complete')) {
				//
				//             } else {
				//                 return false;
				//             }
				//         }
				//     })
				// });

				$(document).on("click", ".js-checkout-back", function (e) {
					e.preventDefault();
					$(this)
						.parents(".js-checkout-category")
						.addClass("closed")
						.removeClass("complete");
					$(".js-checkout-category.complete")
						.last()
						.removeClass("closed complete");
				});

				$(document).on("click", ".js-feedback-check", function (e) {
					if ($(this).hasClass("good-feedback")) {
						$(".js-feedback-check.bad-feedback").prop(
							"checked",
							false
						);
					} else {
						if ($(this).hasClass("bad-feedback")) {
							$(".js-feedback-check.good-feedback").prop(
								"checked",
								false
							);
						}
					}
				});

				$(document).on("click", ".js-expander-head", function (e) {
					$(this).parents(".js-expander").toggleClass("hide");
					$(this)
						.parents(".js-expander")
						.find(".js-expander-body")
						.slideToggle();
				});

				if ($(".js-tracker-scroll").length) {
					window.dima = $(".js-tracker-scroll")
						.baron({
							direction: "h",
							root: ".js-tracker-scroll",
							scroller: ".baron-tracker__scroller",
							bar: ".baron-tracker__bar",
						})
						.autoUpdate();
				}
			});

			/***/
		},
		/******/
	]
); /* Start:"a:4:{s:4:"full";s:74:"/bitrix/templates/main_adaptive_new/js/new/vendor/baron.js?158104522352336";s:6:"source";s:58:"/bitrix/templates/main_adaptive_new/js/new/vendor/baron.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
("use strict");

/******/
(function (modules) {
	// webpackBootstrap

	/******/
	// The module cache

	/******/
	var installedModules = {};
	/******/

	/******/
	// The require function

	/******/

	function __webpack_require__(moduleId) {
		/******/

		/******/
		// Check if module is in cache

		/******/
		if (installedModules[moduleId]) {
			/******/
			return installedModules[moduleId].exports;
			/******/
		}
		/******/
		// Create a new module (and put it into the cache)

		/******/

		var module = (installedModules[moduleId] = {
			/******/
			i: moduleId,

			/******/
			l: false,

			/******/
			exports: {},
			/******/
		});
		/******/

		/******/
		// Execute the module function

		/******/

		modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		);
		/******/

		/******/
		// Flag the module as loaded

		/******/

		module.l = true;
		/******/

		/******/
		// Return the exports of the module

		/******/

		return module.exports;
		/******/
	}
	/******/

	/******/

	/******/
	// expose the modules object (__webpack_modules__)

	/******/

	__webpack_require__.m = modules;
	/******/

	/******/
	// expose the module cache

	/******/

	__webpack_require__.c = installedModules;
	/******/

	/******/
	// identity function for calling harmony imports with the correct context

	/******/

	__webpack_require__.i = function (value) {
		return value;
	};
	/******/

	/******/
	// define getter function for harmony exports

	/******/

	__webpack_require__.d = function (exports, name, getter) {
		/******/
		if (!__webpack_require__.o(exports, name)) {
			/******/
			Object.defineProperty(exports, name, {
				/******/
				configurable: false,

				/******/
				enumerable: true,

				/******/
				get: getter,
				/******/
			});
			/******/
		}
		/******/
	};
	/******/

	/******/
	// getDefaultExport function for compatibility with non-harmony modules

	/******/

	__webpack_require__.n = function (module) {
		/******/
		var getter =
			module && module.__esModule
				? /******/
				  function getDefault() {
						return module["default"];
				  }
				: /******/
				  function getModuleExports() {
						return module;
				  };
		/******/

		__webpack_require__.d(getter, "a", getter);
		/******/

		return getter;
		/******/
	};
	/******/

	/******/
	// Object.prototype.hasOwnProperty.call

	/******/

	__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/

	/******/
	// __webpack_public_path__

	/******/

	__webpack_require__.p = "";
	/******/

	/******/
	// Load entry module and return exports

	/******/

	return __webpack_require__((__webpack_require__.s = 5));
	/******/
})(
	/************************************************************************/

	/******/
	[
		/* 0 */

		/***/
		function (module, exports, __webpack_require__) {
			"use strict"; // Test via a getter in the options object to see if the passive property is accessed
			// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection

			var supportsPassive = false;

			try {
				var opts = Object.defineProperty({}, "passive", {
					get: function get() {
						supportsPassive = true;
					},
				});
				window.addEventListener("test", null, opts);
			} catch (e) {
				// pass
			}

			module.exports.event = function event(
				elem,
				_eventNames,
				handler,
				mode
			) {
				var eventNames = _eventNames.split(" ");

				var prefix = mode == "on" ? "add" : "remove";
				eventNames.forEach(function (eventName) {
					var options = false;

					if (
						["scroll", "touchstart", "touchmove"].indexOf(
							eventName
						) != -1 &&
						supportsPassive
					) {
						options = {
							passive: true,
						};
					}

					elem[prefix + "EventListener"](eventName, handler, options);
				});
			};

			function each(obj, handler) {
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						handler(key, obj[key]);
					}
				}
			}

			module.exports.css = function css(node, key, value) {
				var styles;

				if (value === undefined) {
					// Getter mode
					if (typeof key == "string") {
						return node.style[key];
					}

					styles = key;
				} else {
					styles = {};
					styles[key] = value;
				}

				each(styles, function (k, val) {
					node.style[k] = val;
				});
			};

			module.exports.add = function add(node, cls) {
				if (!cls) {
					return;
				}

				node.classList.add(cls);
			};

			module.exports.rm = function add(node, cls) {
				if (!cls) {
					return;
				}

				node.classList.remove(cls);
			};

			module.exports.has = function has(node, cls) {
				if (!cls) {
					return false;
				}

				return node.classList.contains(cls);
			};

			module.exports.clone = function clone(_input) {
				var output = {};
				var input = _input || {};
				each(input, function (key, value) {
					output[key] = value;
				});
				return output;
			};

			module.exports.qs = function qs(selector, _ctx) {
				if (selector instanceof HTMLElement) {
					return selector;
				}

				var ctx = _ctx || document;
				return ctx.querySelector(selector);
			};

			module.exports.each = each;
			/***/
		},
		/* 1 */

		/***/
		function (module, exports) {
			// shim for using process in browser
			var process = (module.exports = {}); // cached from whatever global is present so that test runners that stub it
			// don't break things.  But we need to wrap it in a try catch in case it is
			// wrapped in strict mode code which doesn't define any globals.  It's inside a
			// function because try/catches deoptimize in certain engines.

			var cachedSetTimeout;
			var cachedClearTimeout;

			function defaultSetTimout() {
				throw new Error("setTimeout has not been defined");
			}

			function defaultClearTimeout() {
				throw new Error("clearTimeout has not been defined");
			}

			(function () {
				try {
					if (typeof setTimeout === "function") {
						cachedSetTimeout = setTimeout;
					} else {
						cachedSetTimeout = defaultSetTimout;
					}
				} catch (e) {
					cachedSetTimeout = defaultSetTimout;
				}

				try {
					if (typeof clearTimeout === "function") {
						cachedClearTimeout = clearTimeout;
					} else {
						cachedClearTimeout = defaultClearTimeout;
					}
				} catch (e) {
					cachedClearTimeout = defaultClearTimeout;
				}
			})();

			function runTimeout(fun) {
				if (cachedSetTimeout === setTimeout) {
					//normal enviroments in sane situations
					return setTimeout(fun, 0);
				} // if setTimeout wasn't available but was latter defined

				if (
					(cachedSetTimeout === defaultSetTimout ||
						!cachedSetTimeout) &&
					setTimeout
				) {
					cachedSetTimeout = setTimeout;
					return setTimeout(fun, 0);
				}

				try {
					// when when somebody has screwed with setTimeout but no I.E. maddness
					return cachedSetTimeout(fun, 0);
				} catch (e) {
					try {
						// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
						return cachedSetTimeout.call(null, fun, 0);
					} catch (e) {
						// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
						return cachedSetTimeout.call(this, fun, 0);
					}
				}
			}

			function runClearTimeout(marker) {
				if (cachedClearTimeout === clearTimeout) {
					//normal enviroments in sane situations
					return clearTimeout(marker);
				} // if clearTimeout wasn't available but was latter defined

				if (
					(cachedClearTimeout === defaultClearTimeout ||
						!cachedClearTimeout) &&
					clearTimeout
				) {
					cachedClearTimeout = clearTimeout;
					return clearTimeout(marker);
				}

				try {
					// when when somebody has screwed with setTimeout but no I.E. maddness
					return cachedClearTimeout(marker);
				} catch (e) {
					try {
						// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
						return cachedClearTimeout.call(null, marker);
					} catch (e) {
						// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
						// Some versions of I.E. have different rules for clearTimeout vs setTimeout
						return cachedClearTimeout.call(this, marker);
					}
				}
			}

			var queue = [];
			var draining = false;
			var currentQueue;
			var queueIndex = -1;

			function cleanUpNextTick() {
				if (!draining || !currentQueue) {
					return;
				}

				draining = false;

				if (currentQueue.length) {
					queue = currentQueue.concat(queue);
				} else {
					queueIndex = -1;
				}

				if (queue.length) {
					drainQueue();
				}
			}

			function drainQueue() {
				if (draining) {
					return;
				}

				var timeout = runTimeout(cleanUpNextTick);
				draining = true;
				var len = queue.length;

				while (len) {
					currentQueue = queue;
					queue = [];

					while (++queueIndex < len) {
						if (currentQueue) {
							currentQueue[queueIndex].run();
						}
					}

					queueIndex = -1;
					len = queue.length;
				}

				currentQueue = null;
				draining = false;
				runClearTimeout(timeout);
			}

			process.nextTick = function (fun) {
				var args = new Array(arguments.length - 1);

				if (arguments.length > 1) {
					for (var i = 1; i < arguments.length; i++) {
						args[i - 1] = arguments[i];
					}
				}

				queue.push(new Item(fun, args));

				if (queue.length === 1 && !draining) {
					runTimeout(drainQueue);
				}
			}; // v8 likes predictible objects

			function Item(fun, array) {
				this.fun = fun;
				this.array = array;
			}

			Item.prototype.run = function () {
				this.fun.apply(null, this.array);
			};

			process.title = "browser";
			process.browser = true;
			process.env = {};
			process.argv = [];
			process.version = ""; // empty string to avoid regexp issues

			process.versions = {};

			function noop() {}

			process.on = noop;
			process.addListener = noop;
			process.once = noop;
			process.off = noop;
			process.removeListener = noop;
			process.removeAllListeners = noop;
			process.emit = noop;
			process.prependListener = noop;
			process.prependOnceListener = noop;

			process.listeners = function (name) {
				return [];
			};

			process.binding = function (name) {
				throw new Error("process.binding is not supported");
			};

			process.cwd = function () {
				return "/";
			};

			process.chdir = function (dir) {
				throw new Error("process.chdir is not supported");
			};

			process.umask = function () {
				return 0;
			};
			/***/
		},
		/* 2 */

		/***/
		function (module, exports) {
			module.exports = function log(level, msg, more) {
				var func = console[level] || console.log;
				var args = ["Baron: " + msg, more];
				Function.prototype.apply.call(func, console, args);
			};
			/***/
		},
		/* 3 */

		/***/
		function (module, exports, __webpack_require__) {
			"use strict";
			/* WEBPACK VAR INJECTION */

			(function (process) {
				var g = (function () {
					return this || (1, eval)("this");
				})();

				var scopedWindow = (g && g.window) || g;

				var event = __webpack_require__(0).event;

				var css = __webpack_require__(0).css;

				var add = __webpack_require__(0).add;

				var has = __webpack_require__(0).has;

				var rm = __webpack_require__(0).rm;

				var clone = __webpack_require__(0).clone;

				var qs = __webpack_require__(0).qs;

				var _baron = _baron2; // Stored baron value for noConflict usage
				// var Item = {}

				var pos = ["left", "top", "right", "bottom", "width", "height"]; // Global store for all baron instances (to be able to dispose them on html-nodes)

				var instances = [];
				var origin = {
					v: {
						// Vertical
						x: "Y",
						pos: pos[1],
						oppos: pos[3],
						crossPos: pos[0],
						crossOpPos: pos[2],
						size: pos[5],
						crossSize: pos[4],
						crossMinSize: "min-" + pos[4],
						crossMaxSize: "max-" + pos[4],
						client: "clientHeight",
						crossClient: "clientWidth",
						scrollEdge: "scrollLeft",
						offset: "offsetHeight",
						crossOffset: "offsetWidth",
						offsetPos: "offsetTop",
						scroll: "scrollTop",
						scrollSize: "scrollHeight",
					},
					h: {
						// Horizontal
						x: "X",
						pos: pos[0],
						oppos: pos[2],
						crossPos: pos[1],
						crossOpPos: pos[3],
						size: pos[4],
						crossSize: pos[5],
						crossMinSize: "min-" + pos[5],
						crossMaxSize: "max-" + pos[5],
						client: "clientWidth",
						crossClient: "clientHeight",
						scrollEdge: "scrollTop",
						offset: "offsetWidth",
						crossOffset: "offsetHeight",
						offsetPos: "offsetLeft",
						scroll: "scrollLeft",
						scrollSize: "scrollWidth",
					},
				}; // Some ugly vars

				var opera12maxScrollbarSize = 17; // I hate you https://github.com/Diokuz/baron/issues/110

				var macmsxffScrollbarSize = 15;
				var macosxffRe = /[\s\S]*Macintosh[\s\S]*\) Gecko[\s\S]*/;
				var isMacFF = macosxffRe.test(
					scopedWindow.navigator && scopedWindow.navigator.userAgent
				);
				var log, liveBarons, shownErrors;

				if (process.env.NODE_ENV !== "production") {
					log = __webpack_require__(2);
					liveBarons = 0;
					shownErrors = {
						liveTooMany: false,
						allTooMany: false,
					};
				} // window.baron and jQuery.fn.baron points to this function

				function _baron2(user) {
					var withParams = !!user;
					var tryNode = (user && user[0]) || user;
					var isNode =
						typeof user == "string" ||
						tryNode instanceof HTMLElement;
					var params = isNode
						? {
								root: user,
						  }
						: clone(user);
					var jQueryMode;
					var rootNode;
					var defaultParams = {
						direction: "v",
						barOnCls: "_scrollbar",
						resizeDebounce: 0,
						event: event,
						cssGuru: false,
						impact: "scroller",
						position: "static",
					};
					params = params || {}; // Extending default params by user-defined params

					for (var key in defaultParams) {
						if (params[key] == null) {
							// eslint-disable-line
							params[key] = defaultParams[key];
						}
					}

					if (process.env.NODE_ENV !== "production") {
						if (
							params.position == "absolute" &&
							params.impact == "clipper"
						) {
							log(
								"error",
								[
									"Simultaneous use of `absolute` position and `clipper` impact values detected.",
									"Those values cannot be used together.",
									"See more https://github.com/Diokuz/baron/issues/138",
								].join(" "),
								params
							);
						}
					} // `this` could be a jQuery instance

					jQueryMode = this && this instanceof scopedWindow.jQuery;

					if (params._chain) {
						rootNode = params.root;
					} else if (jQueryMode) {
						params.root = rootNode = this[0];
					} else {
						rootNode = qs(params.root || params.scroller);
					}

					if (process.env.NODE_ENV !== "production") {
						if (!rootNode) {
							log(
								"error",
								[
									"Baron initialization failed: root node not found.",
								].join(", "),
								params
							);
							return; // or return baron-shell?
						}
					}

					var attr = manageAttr(rootNode, params.direction);
					var id = +attr; // Could be NaN

					params.index = id; // baron() can return existing instances,
					// @TODO update params on-the-fly
					// https://github.com/Diokuz/baron/issues/124

					if (id == id && attr !== null && instances[id]) {
						if (process.env.NODE_ENV !== "production") {
							if (withParams) {
								log(
									"error",
									[
										"repeated initialization for html-node detected",
										"https://github.com/Diokuz/baron/blob/master/docs/logs/repeated.md",
									].join(", "),
									params.root
								);
							}
						}

						return instances[id];
					} // root and scroller can be different nodes

					if (params.root && params.scroller) {
						params.scroller = qs(params.scroller, rootNode);

						if (process.env.NODE_ENV !== "production") {
							if (!params.scroller) {
								log(
									"error",
									"Scroller not found!",
									rootNode,
									params.scroller
								);
							}
						}
					} else {
						params.scroller = rootNode;
					}

					params.root = rootNode;
					var instance = init(params);

					if (instance.autoUpdate) {
						instance.autoUpdate();
					}

					return instance;
				}

				function arrayEach(_obj, iterator) {
					var i = 0;
					var obj = _obj;
					if (obj.length === undefined || obj === scopedWindow)
						obj = [obj];

					while (obj[i]) {
						iterator.call(this, obj[i], i);
						i++;
					}
				} // shortcut for getTime

				function getTime() {
					return new Date().getTime();
				}

				if (process.env.NODE_ENV !== "production") {
					_baron2._instances = instances;
				}

				function manageEvents(item, eventManager, mode) {
					// Creating new functions for one baron item only one time
					item._eventHandlers = item._eventHandlers || [
						{
							// onScroll:
							element: item.scroller,
							handler: function handler(e) {
								item.scroll(e);
							},
							type: "scroll",
						},
						{
							// css transitions & animations
							element: item.root,
							handler: function handler() {
								item.update();
							},
							type: "transitionend animationend",
						},
						{
							// onKeyup (textarea):
							element: item.scroller,
							handler: function handler() {
								item.update();
							},
							type: "keyup",
						},
						{
							// onMouseDown:
							element: item.bar,
							handler: function handler(e) {
								e.preventDefault(); // Text selection disabling in Opera

								item.selection(); // Disable text selection in ie8

								item.drag.now = 1; // Save private byte

								if (item.draggingCls) {
									add(item.root, item.draggingCls);
								}
							},
							type: "touchstart mousedown",
						},
						{
							// onMouseUp:
							element: document,
							handler: function handler() {
								item.selection(1); // Enable text selection

								item.drag.now = 0;

								if (item.draggingCls) {
									rm(item.root, item.draggingCls);
								}
							},
							type: "mouseup blur touchend",
						},
						{
							// onCoordinateReset:
							element: document,
							handler: function handler(e) {
								if (e.button != 2) {
									// Not RM
									item._pos0(e);
								}
							},
							type: "touchstart mousedown",
						},
						{
							// onMouseMove:
							element: document,
							handler: function handler(e) {
								if (item.drag.now) {
									item.drag(e);
								}
							},
							type: "mousemove touchmove",
						},
						{
							// @TODO make one global listener
							// onResize:
							element: scopedWindow,
							handler: function handler() {
								item.update();
							},
							type: "resize",
						},
						{
							// @todo remove
							// sizeChange:
							element: item.root,
							handler: function handler() {
								item.update();
							},
							type: "sizeChange",
						},
						{
							// Clipper onScroll bug https://github.com/Diokuz/baron/issues/116
							element: item.clipper,
							handler: function handler() {
								item.clipperOnScroll();
							},
							type: "scroll",
						},
					];
					arrayEach(item._eventHandlers, function (evt) {
						if (evt.element) {
							// workaround for element-elements in `fix` plugin
							// @todo dispose `fix` in proper way and remove workaround
							if (
								evt.element.length &&
								evt.element !== scopedWindow
							) {
								for (var i = 0; i < evt.element.length; i++) {
									eventManager(
										evt.element[i],
										evt.type,
										evt.handler,
										mode
									);
								}
							} else {
								eventManager(
									evt.element,
									evt.type,
									evt.handler,
									mode
								);
							}
						}
					}); // if (item.scroller) {
					//     event(item.scroller, 'scroll', item._eventHandlers.onScroll, mode)
					// }
					// if (item.bar) {
					//     event(item.bar, 'touchstart mousedown', item._eventHandlers.onMouseDown, mode)
					// }
					// event(document, 'mouseup blur touchend', item._eventHandlers.onMouseUp, mode)
					// event(document, 'touchstart mousedown', item._eventHandlers.onCoordinateReset, mode)
					// event(document, 'mousemove touchmove', item._eventHandlers.onMouseMove, mode)
					// event(window, 'resize', item._eventHandlers.onResize, mode)
					// if (item.root) {
					//     event(item.root, 'sizeChange', item._eventHandlers.onResize, mode)
					//     // Custon event for alternate baron update mechanism
					// }
				} // set, remove or read baron-specific id-attribute
				// @returns {String|null} - id node value, or null, if there is no attr

				function manageAttr(node, direction, mode, id) {
					var attrName = "data-baron-" + direction + "-id";

					if (mode == "on") {
						node.setAttribute(attrName, id);
					} else if (mode == "off") {
						node.removeAttribute(attrName);
					}

					return node.getAttribute(attrName);
				}

				function init(params) {
					var out = new _baron2.prototype.constructor(params);
					manageEvents(out, params.event, "on");
					manageAttr(
						out.root,
						params.direction,
						"on",
						instances.length
					);
					instances.push(out);

					if (process.env.NODE_ENV !== "production") {
						liveBarons++;

						if (liveBarons > 100 && !shownErrors.liveTooMany) {
							log(
								"warn",
								[
									"You have too many live baron instances on page (" +
										liveBarons +
										")!",
									"Are you forget to dispose some of them?",
									"All baron instances can be found in baron._instances:",
								].join(" "),
								instances
							);
							shownErrors.liveTooMany = true;
						}

						if (
							instances.length > 1000 &&
							!shownErrors.allTooMany
						) {
							log(
								"warn",
								[
									"You have too many inited baron instances on page (" +
										instances.length +
										")!",
									"Some of them are disposed, and thats good news.",
									"but baron.init was call too many times, and thats is bad news.",
									"All baron instances can be found in baron._instances:",
								].join(" "),
								instances
							);
							shownErrors.allTooMany = true;
						}
					}

					out.update();
					return out;
				}

				function fire(eventName) {
					if (this.events && this.events[eventName]) {
						for (
							var i = 0;
							i < this.events[eventName].length;
							i++
						) {
							var args = Array.prototype.slice.call(arguments, 1);
							this.events[eventName][i].apply(this, args);
						}
					}
				}

				_baron2.prototype = {
					// underscore.js realization
					// used in autoUpdate plugin
					_debounce: function _debounce(func, wait) {
						var self = this,
							timeout,
							// args, // right now there is no need for arguments
							// context, // and for context
							timestamp; // result // and for result

						var later = function later() {
							if (self._disposed) {
								clearTimeout(timeout);
								timeout = self = null;
								return;
							}

							var last = getTime() - timestamp;

							if (last < wait && last >= 0) {
								timeout = setTimeout(later, wait - last);
							} else {
								timeout = null; // result = func.apply(context, args)

								func(); // context = args = null
							}
						};

						return function () {
							// context = this
							// args = arguments
							timestamp = getTime();

							if (!timeout) {
								timeout = setTimeout(later, wait);
							} // return result
						};
					},
					constructor: function constructor(params) {
						var barPos,
							scrollerPos0,
							track,
							resizePauseTimer,
							scrollingTimer,
							resizeLastFire,
							oldBarSize;
						resizeLastFire = getTime();
						this.params = params;
						this.event = params.event;
						this.events = {}; // DOM elements

						this.root = params.root; // Always html node, not just selector

						this.scroller = qs(params.scroller);

						if (process.env.NODE_ENV !== "production") {
							if (this.scroller.tagName == "body") {
								log(
									"error",
									[
										"Please, do not use BODY as a scroller.",
										"https://github.com/Diokuz/baron/blob/master/docs/logs/do-not-use-body.md",
									].join(", "),
									params
								);
							}
						}

						this.bar = qs(params.bar, this.root);
						track = this.track = qs(params.track, this.root);

						if (!this.track && this.bar) {
							track = this.bar.parentNode;
						}

						this.clipper = this.scroller.parentNode; // Parameters

						this.direction = params.direction;
						this.rtl = params.rtl;
						this.origin = origin[this.direction];
						this.barOnCls = params.barOnCls;
						this.scrollingCls = params.scrollingCls;
						this.draggingCls = params.draggingCls;
						this.impact = params.impact;
						this.position = params.position;
						this.rtl = params.rtl;
						this.barTopLimit = 0;
						this.resizeDebounce = params.resizeDebounce; // Updating height or width of bar

						function setBarSize(_size) {
							var barMinSize = this.barMinSize || 20;
							var size = _size;

							if (size > 0 && size < barMinSize) {
								size = barMinSize;
							}

							if (this.bar) {
								css(
									this.bar,
									this.origin.size,
									parseInt(size, 10) + "px"
								);
							}
						} // Updating top or left bar position

						function posBar(_pos) {
							if (this.bar) {
								var was = css(this.bar, this.origin.pos),
									will = +_pos + "px";

								if (will && will != was) {
									css(this.bar, this.origin.pos, will);
								}
							}
						} // Free path for bar

						function k() {
							return (
								track[this.origin.client] -
								this.barTopLimit -
								this.bar[this.origin.offset]
							);
						} // Relative content top position to bar top position

						function relToPos(r) {
							return r * k.call(this) + this.barTopLimit;
						} // Bar position to relative content position

						function posToRel(t) {
							return (t - this.barTopLimit) / k.call(this);
						} // Cursor position in main direction in px // Now with iOs support

						this.cursor = function (e) {
							return (
								e["client" + this.origin.x] ||
								(((e.originalEvent || e).touches || {})[0] ||
									{})["page" + this.origin.x]
							);
						}; // Text selection pos preventing

						function dontPosSelect() {
							return false;
						}

						this.pos = function (x) {
							// Absolute scroller position in px
							var ie = "page" + this.origin.x + "Offset",
								key = this.scroller[ie]
									? ie
									: this.origin.scroll;
							if (x !== undefined) this.scroller[key] = x;
							return this.scroller[key];
						};

						this.rpos = function (r) {
							// Relative scroller position (0..1)
							var free =
									this.scroller[this.origin.scrollSize] -
									this.scroller[this.origin.client],
								x;

							if (r) {
								x = this.pos(r * free);
							} else {
								x = this.pos();
							}

							return x / (free || 1);
						}; // Switch on the bar by adding user-defined CSS classname to scroller

						this.barOn = function (dispose) {
							if (this.barOnCls) {
								var noScroll =
									this.scroller[this.origin.client] >=
									this.scroller[this.origin.scrollSize];

								if (dispose || noScroll) {
									if (has(this.root, this.barOnCls)) {
										rm(this.root, this.barOnCls);
									}
								} else if (!has(this.root, this.barOnCls)) {
									add(this.root, this.barOnCls);
								}
							}
						};

						this._pos0 = function (e) {
							scrollerPos0 = this.cursor(e) - barPos;
						};

						this.drag = function (e) {
							var rel = posToRel.call(
								this,
								this.cursor(e) - scrollerPos0
							);
							var sub =
								this.scroller[this.origin.scrollSize] -
								this.scroller[this.origin.client];
							this.scroller[this.origin.scroll] = rel * sub;
						}; // Text selection preventing on drag

						this.selection = function (enable) {
							this.event(
								document,
								"selectpos selectstart",
								dontPosSelect,
								enable ? "off" : "on"
							);
						}; // onResize & DOM modified handler
						// also fires on init
						// Note: max/min-size didnt sets if size did not really changed (for example, on init in Chrome)

						this.resize = function () {
							var self = this;
							var minPeriod =
								self.resizeDebounce === undefined
									? 300
									: self.resizeDebounce;
							var delay = 0;

							if (getTime() - resizeLastFire < minPeriod) {
								clearTimeout(resizePauseTimer);
								delay = minPeriod;
							}

							function upd() {
								var offset =
									self.scroller[self.origin.crossOffset];
								var client =
									self.scroller[self.origin.crossClient];
								var padding = 0;
								var was, will; // https://github.com/Diokuz/baron/issues/110

								if (isMacFF) {
									padding = macmsxffScrollbarSize; // Opera 12 bug https://github.com/Diokuz/baron/issues/105
								} else if (client > 0 && offset === 0) {
									// Only Opera 12 in some rare nested flexbox cases goes here
									// Sorry guys for magic,
									// but I dont want to create temporary html-nodes set
									// just for measuring scrollbar size in Opera 12.
									// 17px for Windows XP-8.1, 15px for Mac (really rare).
									offset = client + opera12maxScrollbarSize;
								}

								if (offset) {
									// if there is no size, css should not be set
									self.barOn();

									if (self.impact == "scroller") {
										// scroller
										var delta = offset - client + padding; // `static` position works only for `scroller` impact

										if (self.position == "static") {
											// static
											was = css(
												self.scroller,
												self.origin.crossSize
											);
											will =
												self.clipper[
													self.origin.crossClient
												] +
												delta +
												"px";

											if (was != will) {
												self._setCrossSizes(
													self.scroller,
													will
												);
											}
										} else {
											// absolute
											var styles = {};
											var key = self.rtl
												? "Left"
												: "Right";

											if (self.direction == "h") {
												key = "Bottom";
											}

											styles["padding" + key] =
												delta + "px";
											css(self.scroller, styles);
										}
									} else {
										// clipper
										was = css(
											self.clipper,
											self.origin.crossSize
										);
										will = client + "px";

										if (was != will) {
											self._setCrossSizes(
												self.clipper,
												will
											);
										}
									}
								} else {
									// do nothing (display: none, or something)
								}

								Array.prototype.unshift.call(
									arguments,
									"resize"
								);
								fire.apply(self, arguments);
								resizeLastFire = getTime();
							}

							if (delay) {
								resizePauseTimer = setTimeout(upd, delay);
							} else {
								upd();
							}
						};

						this.updatePositions = function (force) {
							var newBarSize,
								self = this;

							if (self.bar) {
								newBarSize =
									((track[self.origin.client] -
										self.barTopLimit) *
										self.scroller[self.origin.client]) /
									self.scroller[self.origin.scrollSize]; // Positioning bar

								if (
									force ||
									parseInt(oldBarSize, 10) !=
										parseInt(newBarSize, 10)
								) {
									setBarSize.call(self, newBarSize);
									oldBarSize = newBarSize;
								}

								barPos = relToPos.call(self, self.rpos());
								posBar.call(self, barPos);
							}

							Array.prototype.unshift.call(arguments, "scroll");
							fire.apply(self, arguments);
						}; // onScroll handler

						this.scroll = function () {
							var self = this;
							self.updatePositions();

							if (self.scrollingCls) {
								if (!scrollingTimer) {
									add(self.root, self.scrollingCls);
								}

								clearTimeout(scrollingTimer);
								scrollingTimer = setTimeout(function () {
									rm(self.root, self.scrollingCls);
									scrollingTimer = undefined;
								}, 300);
							}
						}; // https://github.com/Diokuz/baron/issues/116

						this.clipperOnScroll = function () {
							// WTF is this line? https://github.com/Diokuz/baron/issues/134
							// if (this.direction == 'h') return
							// assign `initial scroll position` to `clipper.scrollLeft` (0 for ltr, ~20 for rtl)
							if (!this.rtl) {
								this.clipper[this.origin.scrollEdge] = 0;
							} else {
								this.clipper[this.origin.scrollEdge] =
									this.clipper[this.origin.scrollSize];
							}
						}; // Flexbox `align-items: stretch` (default) requires to set min-width for vertical
						// and max-height for horizontal scroll. Just set them all.
						// http://www.w3.org/TR/css-flexbox-1/#valdef-align-items-stretch

						this._setCrossSizes = function (node, size) {
							var styles = {};
							styles[this.origin.crossSize] = size;
							styles[this.origin.crossMinSize] = size;
							styles[this.origin.crossMaxSize] = size;
							css(node, styles);
						}; // Set common css rules

						this._dumbCss = function (on) {
							if (params.cssGuru) return;
							var overflow = on ? "hidden" : null;
							var msOverflowStyle = on ? "none" : null;
							css(this.clipper, {
								overflow: overflow,
								msOverflowStyle: msOverflowStyle,
								position:
									this.position == "static" ? "" : "relative",
							});
							var scroll = on ? "scroll" : null;
							var axis = this.direction == "v" ? "y" : "x";
							var scrollerCss = {};
							scrollerCss["overflow-" + axis] = scroll;
							scrollerCss["box-sizing"] = "border-box";
							scrollerCss.margin = "0";
							scrollerCss.border = "0";

							if (this.position == "absolute") {
								scrollerCss.position = "absolute";
								scrollerCss.top = "0";

								if (this.direction == "h") {
									scrollerCss.left = scrollerCss.right = "0";
								} else {
									scrollerCss.bottom = "0";
									scrollerCss.right = this.rtl ? "0" : "";
									scrollerCss.left = this.rtl ? "" : "0";
								}
							}

							css(this.scroller, scrollerCss);
						}; // onInit actions

						this._dumbCss(true);

						if (isMacFF) {
							var padding = "paddingRight";
							var styles = {}; // getComputedStyle is ie9+, but we here only in f ff

							var paddingWas = scopedWindow.getComputedStyle(
								this.scroller
							)[[padding]];

							if (params.direction == "h") {
								padding = "paddingBottom";
							} else if (params.rtl) {
								padding = "paddingLeft";
							}

							var numWas = parseInt(paddingWas, 10);
							if (numWas != numWas) numWas = 0;
							styles[padding] =
								macmsxffScrollbarSize + numWas + "px";
							css(this.scroller, styles);
						}

						return this;
					},
					// fires on any update and on init
					update: function update(params) {
						if (process.env.NODE_ENV !== "production") {
							if (this._disposed) {
								log(
									"error",
									[
										"Update on disposed baron instance detected.",
										"You should clear your stored baron value for this instance:",
										this,
									].join(" "),
									params
								);
							}
						}

						fire.call(this, "upd", params); // Update all plugins' params

						this.resize(1);
						this.updatePositions(1);
						return this;
					},
					// One instance
					dispose: function dispose() {
						if (process.env.NODE_ENV !== "production") {
							if (this._disposed) {
								log("error", "Already disposed:", this);
							}

							liveBarons--;
						}

						manageEvents(this, this.event, "off");
						manageAttr(this.root, this.params.direction, "off");

						if (this.params.direction == "v") {
							this._setCrossSizes(this.scroller, "");
						} else {
							this._setCrossSizes(this.clipper, "");
						}

						this._dumbCss(false);

						this.barOn(true);
						fire.call(this, "dispose");
						instances[this.params.index] = null;
						this.params = null;
						this._disposed = true;
					},
					on: function on(eventName, func, arg) {
						var names = eventName.split(" ");

						for (var i = 0; i < names.length; i++) {
							if (names[i] == "init") {
								func.call(this, arg);
							} else {
								this.events[names[i]] =
									this.events[names[i]] || [];
								this.events[names[i]].push(function (userArg) {
									func.call(this, userArg || arg);
								});
							}
						}
					},
					baron: function baron(params) {
						params.root = this.params.root;
						params.scroller = this.params.scroller;
						params.direction =
							this.params.direction == "v" ? "h" : "v";
						params._chain = true;
						return _baron2(params);
					},
				}; // baron.fn.constructor.prototype = baron.fn

				_baron2.prototype.constructor.prototype = _baron2.prototype; // Use when you need "baron" global var for another purposes

				_baron2.noConflict = function () {
					scopedWindow.baron = _baron; // Restoring original value of "baron" global var

					return _baron2;
				};

				_baron2.version = "3.0.1";
				_baron2.prototype.autoUpdate =
					__webpack_require__(4)(scopedWindow);
				_baron2.prototype.fix = __webpack_require__(7);
				_baron2.prototype.controls = __webpack_require__(6);
				module.exports = _baron2;
				/* WEBPACK VAR INJECTION */
			}.call(exports, __webpack_require__(1)));
			/***/
		},
		/* 4 */

		/***/
		function (module, exports, __webpack_require__) {
			"use strict";
			/* Autoupdate plugin for baron 0.6+ */

			function autoUpdateOne(MutationObserver) {
				var self = this;
				var watcher;

				if (this._au) {
					return;
				}

				function actualizeWatcher() {
					if (!self.root[self.origin.offset]) {
						startWatch();
					} else {
						stopWatch();
					}
				} // Set interval timeout for watching when root node will be visible

				function startWatch() {
					if (watcher) return;
					watcher = setInterval(function () {
						if (self.root[self.origin.offset]) {
							stopWatch();
							self.update();
						}
					}, 300); // is it good enought for you?)
				}

				function stopWatch() {
					clearInterval(watcher);
					watcher = null;
				}

				var debouncedUpdater = self._debounce(function () {
					self.update();
				}, 300);

				this._observer = new MutationObserver(function () {
					actualizeWatcher();
					self.update();
					debouncedUpdater();
				});
				this.on("init", function () {
					self._observer.observe(self.root, {
						childList: true,
						subtree: true,
						characterData: true, // attributes: true
						// No reasons to set attributes to true
						// The case when root/child node with already properly inited baron toggled to hidden and then back to visible,
						// and the size of parent was changed during that hidden state, is very rare
						// Other cases are covered by watcher, and you still can do .update by yourself
					});

					actualizeWatcher();
				});
				this.on("dispose", function () {
					self._observer.disconnect();

					stopWatch();
					delete self._observer;
				});
				this._au = true;
			}

			module.exports = function autoUpdateCreator(win) {
				var MutationObserver =
					win.MutationObserver ||
					win.WebKitMutationObserver ||
					win.MozMutationObserver ||
					null;
				return function autoUpdate() {
					if (!MutationObserver) return this;
					autoUpdateOne.call(this, MutationObserver);
					return this;
				};
			};
			/***/
		},
		/* 5 */

		/***/
		function (module, exports, __webpack_require__) {
			var _baron = __webpack_require__(3);

			window.baron = _baron;

			if (window.jQuery && window.jQuery.fn) {
				window.jQuery.fn.baron = _baron;
			}
			/***/
		},
		/* 6 */

		/***/
		function (module, exports, __webpack_require__) {
			"use strict";
			/* Controls plugin for baron */

			var qs = __webpack_require__(0).qs;

			module.exports = function controls(params) {
				var forward,
					backward,
					track,
					screen,
					self = this,
					event;
				screen = params.screen || 0.9;

				if (params.forward) {
					forward = qs(params.forward, this.clipper);
					event = {
						element: forward,
						handler: function handler() {
							var y = self.pos() + (params.delta || 30);
							self.pos(y);
						},
						type: "click",
					};

					this._eventHandlers.push(event); // For auto-dispose

					this.event(event.element, event.type, event.handler, "on");
				}

				if (params.backward) {
					backward = qs(params.backward, this.clipper);
					event = {
						element: backward,
						handler: function handler() {
							var y = self.pos() - (params.delta || 30);
							self.pos(y);
						},
						type: "click",
					};

					this._eventHandlers.push(event); // For auto-dispose

					this.event(event.element, event.type, event.handler, "on");
				}

				if (params.track) {
					if (params.track === true) {
						track = this.track;
					} else {
						track = qs(params.track, this.clipper);
					}

					if (track) {
						event = {
							element: track,
							handler: function handler(e) {
								// https://github.com/Diokuz/baron/issues/121
								if (e.target != track) return;
								var x = e["offset" + self.origin.x],
									xBar = self.bar[self.origin.offsetPos],
									sign = 0;

								if (x < xBar) {
									sign = -1;
								} else if (
									x >
									xBar + self.bar[self.origin.offset]
								) {
									sign = 1;
								}

								var y =
									self.pos() +
									sign *
										screen *
										self.scroller[self.origin.client];
								self.pos(y);
							},
							type: "mousedown",
						};

						this._eventHandlers.push(event); // For auto-dispose

						this.event(
							event.element,
							event.type,
							event.handler,
							"on"
						);
					}
				}
			};
			/***/
		},
		/* 7 */

		/***/
		function (module, exports, __webpack_require__) {
			"use strict";
			/* WEBPACK VAR INJECTION */

			(function (process) {
				/* Fixable elements plugin for baron */
				var log = __webpack_require__(2);

				var css = __webpack_require__(0).css;

				var add = __webpack_require__(0).add;

				var rm = __webpack_require__(0).rm;

				module.exports = function fix(userParams) {
					var elements,
						viewPortSize,
						params = {
							// Default params
							outside: "",
							inside: "",
							before: "",
							after: "",
							past: "",
							future: "",
							radius: 0,
							minView: 0,
						},
						topFixHeights = [],
						// inline style for element
						topRealHeights = [],
						// ? something related to negative margins for fixable elements
						headerTops = [],
						// offset positions when not fixed
						scroller = this.scroller,
						eventManager = this.event,
						self = this;

					if (process.env.NODE_ENV !== "production") {
						if (this.position != "static") {
							log(
								"error",
								[
									"Fix plugin cannot work properly in non-static baron position.",
									"See more https://github.com/Diokuz/baron/issues/135",
								].join(" "),
								this.params
							);
						}
					} // i - number of fixing element, pos - fix-position in px, flag - 1: top, 2: bottom
					// Invocation only in case when fix-state changed

					function fixElement(i, _pos, flag) {
						var pos = _pos;
						var ori = flag == 1 ? "pos" : "oppos";

						if (viewPortSize < (params.minView || 0)) {
							// No headers fixing when no enought space for viewport
							pos = undefined;
						} // Removing all fixing stuff - we can do this because fixElement triggers only when fixState really changed

						css(elements[i], this.origin.pos, "");
						css(elements[i], this.origin.oppos, "");
						rm(elements[i], params.outside); // Fixing if needed

						if (pos !== undefined) {
							pos += "px";
							css(elements[i], this.origin[ori], pos);
							add(elements[i], params.outside);
						}
					}

					function bubbleWheel(e) {
						try {
							var i = document.createEvent("WheelEvent"); // i - for extra byte
							// evt.initWebKitWheelEvent(deltaX, deltaY, window, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey)

							i.initWebKitWheelEvent(
								e.originalEvent.wheelDeltaX,
								e.originalEvent.wheelDeltaY
							);
							scroller.dispatchEvent(i);
							e.preventDefault();
						} catch (ex) {
							//
						}
					}

					function init(_params) {
						var pos;

						for (var key in _params) {
							params[key] = _params[key];
						}

						if (params.elements instanceof HTMLElement) {
							elements = [params.elements];
						} else if (typeof params.elements == "string") {
							elements = this.scroller.querySelectorAll(
								params.elements
							);
						} else if (
							params.elements &&
							params.elements[0] instanceof HTMLElement
						) {
							elements = params.elements;
						}

						if (elements) {
							viewPortSize = this.scroller[this.origin.client];

							for (var i = 0; i < elements.length; i++) {
								// Variable header heights
								pos = {};
								pos[this.origin.size] =
									elements[i][this.origin.offset] + "px";

								if (elements[i].parentNode !== this.scroller) {
									css(elements[i].parentNode, pos);
								}

								pos = {};
								pos[this.origin.crossSize] =
									elements[i].parentNode[
										this.origin.crossClient
									] + "px";
								css(elements[i], pos); // Between fixed headers

								viewPortSize -= elements[i][this.origin.offset];
								headerTops[i] =
									elements[i].parentNode[
										this.origin.offsetPos
									]; // No paddings for parentNode
								// Summary elements height above current

								topFixHeights[i] = topFixHeights[i - 1] || 0; // Not zero because of negative margins

								topRealHeights[i] =
									topRealHeights[i - 1] ||
									Math.min(headerTops[i], 0);

								if (elements[i - 1]) {
									topFixHeights[i] +=
										elements[i - 1][this.origin.offset];
									topRealHeights[i] +=
										elements[i - 1][this.origin.offset];
								}

								if (
									!(i == 0 && headerTops[i] == 0)
									/* && force */
								) {
									this.event(
										elements[i],
										"mousewheel",
										bubbleWheel,
										"off"
									);
									this.event(
										elements[i],
										"mousewheel",
										bubbleWheel
									);
								}
							}

							if (params.limiter && elements[0]) {
								// Bottom edge of first header as top limit for track
								if (this.track && this.track != this.scroller) {
									pos = {};
									pos[this.origin.pos] =
										elements[0].parentNode[
											this.origin.offset
										] + "px";
									css(this.track, pos);
								} else {
									this.barTopLimit =
										elements[0].parentNode[
											this.origin.offset
										];
								} // this.barTopLimit = elements[0].parentNode[this.origin.offset]

								this.scroll();
							}

							if (params.limiter === false) {
								// undefined (in second fix instance) should have no influence on bar limit
								this.barTopLimit = 0;
							}
						}

						var event = {
							element: elements,
							handler: function handler() {
								var parent = this.parentNode,
									top = parent.offsetTop,
									num; // finding num -> elements[num] === this

								for (var j = 0; j < elements.length; j++) {
									if (elements[j] === this) num = j;
								}

								var locPos = top - topFixHeights[num];

								if (params.scroll) {
									// User defined callback
									params.scroll({
										x1: self.scroller.scrollTop,
										x2: locPos,
									});
								} else {
									self.scroller.scrollTop = locPos;
								}
							},
							type: "click",
						};

						if (params.clickable) {
							this._eventHandlers.push(event); // For auto-dispose
							// eventManager(event.element, event.type, event.handler, 'off')

							for (var j = 0; j < event.element.length; j++) {
								eventManager(
									event.element[j],
									event.type,
									event.handler,
									"on"
								);
							}
						}
					}

					this.on("init", init, userParams);
					var fixFlag = [],
						// 1 - past, 2 - future, 3 - current (not fixed)
						gradFlag = [];
					this.on("init scroll", function () {
						var fixState, hTop, gradState;
						var i;

						if (elements) {
							var change; // fixFlag update

							for (i = 0; i < elements.length; i++) {
								fixState = 0;

								if (
									headerTops[i] - this.pos() <
									topRealHeights[i] + params.radius
								) {
									// Header trying to go up
									fixState = 1;
									hTop = topFixHeights[i];
								} else if (
									headerTops[i] - this.pos() >
									topRealHeights[i] +
										viewPortSize -
										params.radius
								) {
									// Header trying to go down
									fixState = 2; // console.log('topFixHeights[i] + viewPortSize + topRealHeights[i]', topFixHeights[i], this.scroller[this.origin.client], topRealHeights[i])

									hTop =
										this.scroller[this.origin.client] -
										elements[i][this.origin.offset] -
										topFixHeights[i] -
										viewPortSize; // console.log('hTop', hTop, viewPortSize, elements[this.origin.offset], topFixHeights[i])
									// (topFixHeights[i] + viewPortSize + elements[this.origin.offset]) - this.scroller[this.origin.client]
								} else {
									// Header in viewport
									fixState = 3;
									hTop = undefined;
								}

								gradState = false;

								if (
									headerTops[i] - this.pos() <
										topRealHeights[i] ||
									headerTops[i] - this.pos() >
										topRealHeights[i] + viewPortSize
								) {
									gradState = true;
								}

								if (
									fixState != fixFlag[i] ||
									gradState != gradFlag[i]
								) {
									fixElement.call(this, i, hTop, fixState);
									fixFlag[i] = fixState;
									gradFlag[i] = gradState;
									change = true;
								}
							} // Adding positioning classes (on last top and first bottom header)

							if (change) {
								// At leats one change in elements flag structure occured
								for (i = 0; i < elements.length; i++) {
									if (fixFlag[i] == 1 && params.past) {
										add(elements[i], params.past);
										rm(elements[i], params.future);
									}

									if (fixFlag[i] == 2 && params.future) {
										add(elements[i], params.future);
										rm(elements[i], params.past);
									}

									if (fixFlag[i] == 3) {
										rm(elements[i], params.past);
										rm(elements[i], params.future);
										add(elements[i], params.inside);
									}

									if (
										fixFlag[i] != fixFlag[i + 1] &&
										fixFlag[i] == 1
									) {
										add(elements[i], params.before);
										rm(elements[i], params.after); // Last top fixed header
									} else if (
										fixFlag[i] != fixFlag[i - 1] &&
										fixFlag[i] == 2
									) {
										add(elements[i], params.after);
										rm(elements[i], params.before); // First bottom fixed header
									} else {
										rm(elements[i], params.before);
										rm(elements[i], params.after);
									}

									if (params.grad) {
										if (gradFlag[i]) {
											add(elements[i], params.grad);
										} else {
											rm(elements[i], params.grad);
										}
									}
								}
							}
						}
					});
					this.on("resize upd", function (updParams) {
						init.call(this, updParams && updParams.fix);
					});
					return this;
				};
				/* WEBPACK VAR INJECTION */
			}.call(exports, __webpack_require__(1)));
			/***/
		},
		/******/
	]
); /* Start:"a:4:{s:4:"full";s:67:"/bitrix/templates/main_adaptive_new/js/functions.js?163785214253788";s:6:"source";s:51:"/bitrix/templates/main_adaptive_new/js/functions.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
("use strict");

function CAddress(opts) {
	var s = this;
	var self = {
		opts: {
			addressModalArea: ".baloon-select-city.js-select-city-baloon",
			enterArea: ".entered-address",
			showArea: ".show-address",
			setAddressBtn: ".set_address",
			addressShowArea: ".show-address-area, .show-address-dacha",
			currentAddressBtn: ".is-current-city",
			findAddressBtn: ".street input.findStreet",
			getLastAddressBtn: "#select-last-address",
			regAddressInput: "#reg_street",
			regInputs:
				"#reg_house, #reg_flat, #reg_korpus, #reg_porch, #reg_floor, " +
				"#reg_tt, #reg_city, #reg_ttId, #reg_city_format, #reg_main",
		},
		vars: {
			address: {},
		},
	};
	if (typeof opts == "object") $.extend(self.opts, opts);

	console.log(self.opts.showHideFirst);
	s.init = function () {
		s.showModal();
		s.bindButtons();
	};
	s.bindButtons = function () {
		$(self.opts.addressShowArea).click(s.showEnteredArea);
		$(self.opts.setAddressBtn).click(s.setAddress);
		$(self.opts.currentAddressBtn).click(s.isCurrent);
		$(self.opts.findAddressBtn).keyup(s.findAddress);
		$(self.opts.getLastAddressBtn).change(s.getLastAddress);
		$(document).on("keyup", self.opts.regAddressInput, s.regAddressFind);
		$(document).on("keyup", self.opts.regInputs, s.setRegAddress);
		$(document).on("change", ".current_city", s.clearAddress);
	};
	s.showModal = function () {
		$(self.opts.enterArea).hide();
		$(self.opts.showArea).show();

		let notShow = $.cookie("NOT_SHOW");
		if (notShow == "Y" && self.opts.address.length === 0) {
			$(self.opts.enterArea).show();
			$(self.opts.showArea).hide();
			return false;
		}
		if (self.opts.tt.length === 0 || self.opts.address.length === 0) {
			$(self.opts.addressModalArea).addClass("active");
			$(self.opts.enterArea).show();
			$(self.opts.showArea).hide();
		} else if (
			self.opts.show ||
			(self.opts.showHideFirst && self.opts.auth)
		) {
			$(self.opts.addressModalArea).addClass("active");
			$(self.opts.enterArea).hide();
			$(self.opts.showArea).show();
		}

		let tt = $.cookie("BITRIX_TT");
		if (typeof tt === "undefined" || tt.length == 0) {
			if (self.opts.siteId == "s1")
				$.cookie("BITRIX_TT", "Ð¢Ð¢-45", { path: "/", expires: 180 });
			if (self.opts.siteId == "s2")
				$.cookie("BITRIX_TT", "Ð¢Ð¢-89", { path: "/", expires: 180 });
			if (self.opts.siteId == "s3")
				$.cookie("BITRIX_TT", "Ð¢Ð¢-104", { path: "/", expires: 180 });
		}
	};

	s.checkBasket = function (street, address, streetData, tt, id) {
		showLoader();
		var path = self.opts.templateFolder;
		$.ajax({
			url: path + "/ajax/check_basket.php",
			type: "POST",
			dataType: "json",
			data: {
				street: street,
				streetData: streetData,
				city: self.opts.city,
				tt: tt,
				siteId: self.opts.siteId,
				ttId: id,
			},
			success: function (res) {
				endLoader();
				var city = "arh";
				if (self.opts.siteId == "s2") city = "sev";
				else if (self.opts.siteId == "s3") city = "nov";

				$.cookie("BITRIX_TT", $("#stree_tt").val(), {
					path: "/",
					expires: 180,
				});
				$.cookie("ADDRESS_ID", id, { path: "/", expires: 180 });
				$.cookie("BITRIX_ADRESS", address, { path: "/", expires: 180 });
				$.cookie("BITRIX_SHOW_ATTENTION", "1", {
					path: "/",
					expires: 180,
				});
				$.cookie("BITRIX_HIDE_STREET", "", { path: "/" });

				if (res.show) {
					var toBasket = confirm(
						"Ð’ ÐºÐ¾Ñ€Ð·Ð¸Ð½Ðµ ÐµÑÑ‚ÑŒ Ñ‚Ð¾Ð²Ð°Ñ€Ñ‹ ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ð½ÐµÑ‚Ñƒ Ð² Ð½Ð°Ð»Ð¸Ñ‡Ð¸Ðµ Ð² Ð´Ð°Ð½Ð½Ð¾Ð¹ Ð·Ð¾Ð½Ðµ Ð´Ð¾ÑÑ‚Ð°Ð²ÐºÐ¸, Ð¿ÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ð² ÐºÐ¾Ñ€Ð·Ð¸Ð½Ñƒ ?"
					);
					if (toBasket) window.location.assign("/personal/");
					else window.location.assign("/?city=" + city);
				} else {
					window.location.assign("/?city=" + city);
				}
			},
		});
	};

	s.getLastAddress = function () {
		showLoader();
		var path = self.opts.templateFolder;
		var street = $(this).find("option:selected").data("street"),
			id = $(this).find("option:selected").data("id");

		$.ajax({
			url: path + "/ajax/check_basket.php",
			type: "POST",
			dataType: "json",
			data: {
				street: street,
				key: $(this).val(),
				ttId: id,
				siteId: self.opts.siteId,
			},
			success: function (res) {
				endLoader();
				if (res.show) {
					var toBasket = confirm(
						"Ð’ ÐºÐ¾Ñ€Ð·Ð¸Ð½Ðµ ÐµÑÑ‚ÑŒ Ñ‚Ð¾Ð²Ð°Ñ€Ñ‹ ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ñ… Ð½ÐµÑ‚Ñƒ Ð² Ð½Ð°Ð»Ð¸Ñ‡Ð¸Ðµ Ð² Ð´Ð°Ð½Ð½Ð¾Ð¹ Ð·Ð¾Ð½Ðµ Ð´Ð¾ÑÑ‚Ð°Ð²ÐºÐ¸, Ð¿ÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ð² ÐºÐ¾Ñ€Ð·Ð¸Ð½Ñƒ ?"
					);
					if (toBasket) window.location.assign("/personal/");
					else window.location.assign("/?city=arh");
				} else {
					window.location.assign("/?city=arh");
				}
			},
		});
	};
	s.setAddress = function (e) {
		e.preventDefault();
		var streetData = {};

		let form = $(".baloon-select-city-form");

		$("#select_treet input[required]").each(function () {
			$(this).removeClass("error");
		});
		if (
			form.find(".house").val().length == 0 ||
			form.find(".flat").val().length == 0
		) {
			alert(
				"ÐÐµ Ð²ÑÐµ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ð¿Ð¾Ð»Ñ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ñ‹"
			);
			$("#select_street input[required]").each(function () {
				if ($(this).val() == "") $(this).addClass("error");
				else $(this).removeClass("error");
			});
			return false;
		}
		if ($(".findStreet").data("tt").length == 0) {
			alert("Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð²ÐµÑ€Ð½Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ");
			$(".findStreet").addClass("error");
			return false;
		}
		var adress = $(".findStreet").val(),
			tt = $(".findStreet").data("tt"),
			id = $(".findStreet").data("ID");
		streetData["street"] = adress;
		if (form.find(".house").val().length > 0) {
			adress += " Ð´." + form.find(".house").val();
			streetData["house"] = form.find(".house").val();
		}
		if (form.find(".korpus").val().length > 0) {
			adress += " ÐºÐ¾Ñ€Ð¿." + form.find(".korpus").val();
			streetData["korpus"] = form.find(".korpus").val();
		}
		if (form.find(".flat").val().length > 0) {
			adress += " ÐºÐ²." + form.find(".flat").val();
			streetData["flat"] = form.find(".flat").val();
		}
		if (form.find(".porch").val().length > 0) {
			adress += " Ð¿Ð¾Ð´ÑŠÐµÐ·Ð´ " + form.find(".porch").val();
			streetData["porch"] = form.find(".porch").val();
		}
		if (form.find(".floor").val().length > 0) {
			adress += " ÑÑ‚Ð°Ð¶ " + form.find(".floor").val();
			streetData["floor"] = form.find(".floor").val();
		}

		if (adress.length > 0) {
			s.checkBasket($(".findStreet").val(), adress, streetData, tt, id);
		}
	};
	s.showEnteredArea = function (e) {
		e.preventDefault();

		$(self.opts.addressModalArea).addClass("active");

		$(self.opts.enterArea).show();
		$(self.opts.showArea).hide();

		$.cookie("BITRIX_SHOW_ATTENTION", "1", { path: "/", expires: 180 });
		$.cookie("BITRIX_SM_CITY", "ÐÑ€Ñ…Ð°Ð½Ð³ÐµÐ»ÑŒÑÐº", {
			path: "/",
			expires: -1,
		});
		$.cookie("BITRIX_TT", "", { path: "/", expires: -1 });
		$.cookie("ADDRESS_ID", "", { path: "/", expires: -1 });
		$.cookie("BITRIX_ADRESS", "", { path: "/", expires: -1 });
		$.cookie("BITRIX_HIDE_STREET", "", { path: "/", expires: -1 });
	};
	s.isCurrent = function () {
		$.cookie("BITRIX_SHOW_ATTENTION", "1", { path: "/", expires: 180 });
	};

	s.setStreet = function (TT, event, name, ID) {
		$(".findStreet").data("tt", TT);
		$(".findStreet").data("ID", ID);
		$("#stree_tt").val(TT);
		$(".findStreet").val(name).addClass("set");
	};
	s.findAddress = function (e) {
		e.preventDefault();
		var path = self.opts.templateFolder;
		$(this).removeClass("set");
		$(this).data("tt", "");
		$.ajax({
			url: path + "/ajax/street.php?q=" + encodeURI($(this).val()),
			success: function (res) {
				$(".streetFinder").html("");
				res.forEach(function (item, i, arr) {
					var elementJq = $("<div/>", {
						text: item.NAME,
						on: {
							click: function (e) {
								s.setStreet(item.XML_ID, e, item.NAME, item.ID);
							},
						},
					});
					$(".streetFinder").append(elementJq);
					$(".streetFinder").show();
					$(".scroll_bar").show();
				});
				if (res.length > 5) {
					$(".scroll_bar").mCustomScrollbar({
						axis: "y",
						theme: "dark",
						alwaysShowScrollbar: 2,
						scrollInertia: 0,
						scrollbarPosition: "inside",
					});
				} else {
					$(".scroll_bar").mCustomScrollbar("destroy");
				}
				if (res.length == 0) {
					$(".streetFinder").html("");
					$(".streetFinder").hide();
				}
			},
		});
	};

	$(self.opts.findAddressBtn).bind("blur", function () {
		setTimeout(function () {
			$(".streetFinder").hide();
			$(".scroll_bar").hide();
		}, 400);
	});
	$(self.opts.findAddressBtn).bind("focus", function () {
		if (
			$(".streetFinder").find("div").length > 0 &&
			!$(this).hasClass("set")
		) {
			$(".streetFinder").show();
			$(".scroll_bar").show();
		}
	});

	$(document).on("click", ".js-baloon-close", function () {
		$.cookie("NOT_SHOW", "Y", { path: "/" });
	});
	s.regAddressFind = function () {
		let path = self.opts.templateFolder;
		$(self.opts.regAddressInput).autocomplete({
			source: function (request, response) {
				$.ajax({
					url: path + "/ajax/street.php",
					dataType: "json",
					data: {
						q: request.term,
						site: $(".current_city:checked").val(),
					},
					success: function (data) {
						response(data);
					},
				});
			},
			minLength: 2,
			select: function (event, ui) {
				$("#reg_tt").val(ui.item.XML_ID);
				$("#reg_ttId").val(ui.item.ID);

				$("#reg_ttId").keyup();
			},
		});
	};
	s.setRegAddress = function () {
		let inputs = self.opts.regInputs.split(",");
		let street = self.opts.regAddressInput;
		let streetName = street.replace("#reg_", "");
		self.vars.address[streetName] = $(street).val();
		for (var i in inputs) {
			let input = inputs[i].trim();
			let name = input.replace("#reg_", "");
			self.vars.address[name] = $(input).val();
		}

		let adress = self.vars.address["street"];
		if (self.vars.address["house"].length > 0) {
			adress += " Ð´." + self.vars.address["house"];
		}
		if (self.vars.address["korpus"].length > 0) {
			adress += " ÐºÐ¾Ñ€Ð¿." + self.vars.address["korpus"];
		}
		if (self.vars.address["flat"].length > 0) {
			adress += " ÐºÐ²." + self.vars.address["flat"];
		}
		if (self.vars.address["porch"].length > 0) {
			adress += " Ð¿Ð¾Ð´ÑŠÐµÐ·Ð´ " + self.vars.address["porch"];
		}
		if (self.vars.address["floor"].length > 0) {
			adress += " ÑÑ‚Ð°Ð¶ " + self.vars.address["floor"];
		}

		$("#json_address").val(JSON.stringify(self.vars.address));
		$("#cookie_address").val(adress);

		if ($("#reg_ttId").val().length == 0) {
			$("#json_address").val("");
			$("#cookie_address").val("");
		}
		if ($("#reg_house").val().length == 0) {
			$("#json_address").val("");
			$("#cookie_address").val("");
		}
		if ($("#reg_flat").val().length == 0) {
			$("#json_address").val("");
			$("#cookie_address").val("");
		}
	};
	s.clearAddress = function (e) {
		let val = $(e.target).val();
		$(".clear_address").val("");
		let $city = "ÐÑ€Ñ…Ð°Ð½Ð³ÐµÐ»ÑŒÑÐº";
		let $cityCode = "arh";
		if (val == "s1") {
			$("#json_address").attr("name", "REGISTER[UF_ADDRESS_LIST][]");
		}
		if (val == "s2") {
			$city = "Ð¡ÐµÐ²ÐµÑ€Ð¾Ð´Ð²Ð¸Ð½ÑÐº";
			$cityCode = "sev";
			$("#json_address").attr("name", "REGISTER[UF_ADDRESS_LIST_SEV][]");
		}
		if (val == "s3") {
			$city = "ÐÐ¾Ð²Ð¾Ð´Ð²Ð¸Ð½ÑÐº";
			$cityCode = "nov";
			$("#json_address").attr("name", "REGISTER[UF_ADDRESS_LIST_NOV][]");
		}

		$("#reg_city").val($cityCode);
		$("#reg_city_format").val($city);
	};
}

function CCatalog(opts) {
	var s = this;

	var self = {
		opts: {},
		vars: {
			actionClass:
				".goods__bottom-button, .action-delete-basket, .js-change-quantity, .js-basket-big-item-delete, " +
				".add-to-cart-detail, .action-delete-basket, .js-basket-big-clear, .cart-new-category-item__button, .clear_basket, .search-baloon-buttons__btn, " +
				".item-card__btn, .product-card-controls-button, .pies__count__button, .stepper__btn-plus, .stepper__btn-minus",
			age: "",
			cache: "",
		},
	};

	if (typeof opts == "object") $.extend(self.opts, opts);

	s.getOpts = function () {
		return self.opts;
	};
	s.setListHeight = function () {
		s.setEqualHeight($(".goods__category"), 3);
		s.setEqualHeight($(".plashka"), 4);
		s.setEqualHeight($(".goods__name"), 4);
		s.setEqualHeight($(".goods__price.v2"), 4);

		s.setEqualHeight($(".item-card__name"), 4);
		s.setEqualHeight($(".item-card-info"), 4);
	};

	s.setEqualHeight = function (list_obj, count, log) {
		if (typeof count == "undefined") {
			s.setHeight(list_obj);
			return;
		}

		if (count >= list_obj.length) {
			s.setHeight(list_obj);
			return;
		}

		if (list_obj.length < 2) return;

		var count_segments = parseInt(list_obj.length / count);
		var mod_segments = list_obj.length % count;
		var buffer = new Array();
		var k = 0;

		for (var i = 0; i < count_segments; i++) {
			buffer[i] = new Array(count);
			for (var j = 0; j < count; j++)
				buffer[i][j] = list_obj[i * count + j];
			s.setHeight($(buffer[i]));
		}

		if (mod_segments) {
			buffer[count_segments] = new Array(mod_segments);
			for (
				var i = list_obj.length - mod_segments;
				i < list_obj.length;
				i++
			) {
				buffer[count_segments][k] = list_obj[i];
				k++;
			}
			s.setHeight($(buffer[count_segments]));
		}
	};

	s.setHeight = function (obj) {
		var height = 0;

		obj.each(function () {
			var currentHeight = $(this).height();
			if (currentHeight > height) height = currentHeight;
		});

		obj.height(height);
	};

	s.imageObserve = function () {
		imageObserveAll();
	};

	s.catalogItemCounter = function (field) {
		var fieldCount = function (el) {
			var // ÐœÐ¸Ð½. Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ
				min = el.data("min") || false,
				// ÐœÐ°ÐºÑ. Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ
				max = el.data("max") || false,
				// ÐšÐ½Ð¾Ð¿ÐºÐ° ÑƒÐ¼ÐµÐ½ÑŒÑˆÐµÐ½Ð¸Ñ ÐºÐ¾Ð»-Ð²Ð°
				dec = el.siblings(".js-minus"),
				// ÐšÐ½Ð¾Ð¿ÐºÐ° ÑƒÐ²ÐµÐ»Ð¸Ñ‡ÐµÐ½Ð¸Ñ ÐºÐ¾Ð»-Ð²Ð°
				inc = el.siblings(".js-plus"),
				inc2 = el.parents(".goods__item").find(".js-for-adults");

			inc3 = el.parents(".stepper").find(".stepper__btn-plus");

			dec2 = el.parents(".stepper").find(".stepper__btn-minus");

			el.addClass("inited");

			function init(el) {
				if (!el.attr("disabled")) {
					dec.on("click", decrement);
					dec2.on("click", decrement);
					inc.on("click", increment);
					inc2.on("click", increment);
					inc3.on("click", increment);
				}

				// Ð£Ð¼ÐµÐ½ÑŒÑˆÐ¸Ð¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ
				function decrement() {
					var unit = el[0].dataset.unit;
					var value = parseInt(el[0].value);
					value--;

					if (!min || value >= min) {
						//el[0].value = value;
					}

					var max = $(this)
							.parents(".js-good-item")
							.find(".max-count"),
						dataMax = max.text(),
						step = 1;
					if (unit == "weight") {
						step = 0.1;
						dataMax = parseFloat(dataMax);
					} else {
						dataMax = parseInt(dataMax);
					}
					let unitQuantity = getUnitValue(unit, el[0].value, "dec");
					dataMax += step;
					if (unit == "weight") dataMax = dataMax.toFixed(1);
					max.text(dataMax);

					el[0].value = unitQuantity;
					if (el[0].value <= 0) {
						$(this).parents(".js-good-item").removeClass("in-cart");
						inc.addClass("add-to-cart");
					}
				}

				// Ð£Ð²ÐµÐ»Ð¸Ñ‡Ð¸Ð¼ Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ
				function increment() {
					var unit = el[0].dataset.unit;
					var value = parseInt(el[0].value);
					if (!inc.hasClass("add-to-cart")) {
						value++;
					} else {
						inc.removeClass("add-to-cart");
						el[0].value = 0;
					}

					if (!max || value <= max) {
						//el[0].value = value++;
					}
					$(this).parents(".js-good-item").addClass("in-cart");
					var max = $(this)
							.parents(".js-good-item")
							.find(".max-count"),
						dataMax = max.text(),
						baseMax = max.data("max"),
						viewMax = max.data("max");
					if (unit == "weight") {
						dataMax = parseFloat(dataMax);
						viewMax = parseFloat(viewMax);
					} else {
						dataMax = parseInt(dataMax);
						viewMax = parseInt(viewMax);
					}
					let unitQuantity = getUnitValue(unit, el[0].value, "inc");
					console.log(unitQuantity);
					if (dataMax > 0) {
						baseMax -= unitQuantity;
						if (unit == "weight") baseMax = baseMax.toFixed(1);
						max.text(baseMax);
						if (baseMax <= 0) {
							max.text(0);
							unitQuantity = viewMax;
						}
					} else if (viewMax > 0) unitQuantity = viewMax;

					el[0].value = unitQuantity;
				}

				function getUnitValue(unit, count, action) {
					// Ð£Ð²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ðµ Ñ Ð»Ð¾ÑƒÐ´ÐµÑ€Ð¾Ð¼
					if (action == "dec")
						count =
							unit == "weight"
								? Math.round((parseFloat(count) - 0.1) * 10) /
								  10
								: parseInt(count) - 1;
					else
						count =
							unit == "weight"
								? Math.round((parseFloat(count) + 0.1) * 10) /
								  10
								: parseInt(count) + 1;

					if (unit == "weight" && count < 0.1) count = 0;

					if (unit == "piece" && count < 1) count = 0;

					if (unit == "weight") count = count.toFixed(1);

					return count;
				}
			}

			el.each(function () {
				init($(this));
			});
		};
		$(field).each(function () {
			if (!$(this).hasClass("inited")) fieldCount($(this));
		});
	};

	s.setBasketData = function (data, $row, action) {
		var arr = new Array();
		arr.push("Ñ‚Ð¾Ð²Ð°Ñ€");
		arr.push("Ñ‚Ð¾Ð²Ð°Ñ€Ð°");
		arr.push("Ñ‚Ð¾Ð²Ð°Ñ€Ð¾Ð²");
		var title = s.declOfNum(data.basket.count, arr);

		$(".basket-fly__cnt").html("<span>" + data.basket.count + "</span>");
		console.log($row);
		console.log(action);
		$('[data-item="' + data.item.productId + '"]')
			.find(".max-count")
			.html(data.item.max_stock);
		if (action == "delete") {
			let $row3 = $("#block_" + data.item.basket_id);
			let $row = $("#item_" + data.item.basket_id);
			let $row2 = $(
				'[data-basket-item="item_' + data.item.basket_id + '"]'
			);
			let $category = $row.parent(".cart-new-category");
			$row.slideUp(250, function () {
				$row.remove();
			});
			$row2.slideUp(250, function () {
				$row2.remove();
			});

			$row3.slideUp(250, function () {
				$row3.remove();
			});
			if ($category.find(".cart-new-category-item").length <= 1) {
				$category.slideUp(250, function () {
					$category.remove();
				});
			}
			$(".basket_full_price").text(data.basket.total_format);
			$(".basket_count").text(data.basket.count + " " + title);

			var packageItem = s.getEntity(BX("basket-items"), "package");
			var packageItem2 = s.getEntity(BX("basket-items-top"), "package");
			if (data.basket.count == 0 && $(packageItem).length > 0) {
				$(packageItem).slideUp(250, function () {
					$(packageItem).remove();
				});
			}
			if (data.basket.count == 0 && $(packageItem2).length > 0) {
				$(packageItem2).slideUp(250, function () {
					$(packageItem2).remove();
				});
			}

			if (
				data.basket.count == 0 &&
				window.orderPage !== "undefined" &&
				window.orderPage
			)
				window.location.reload();
			return;
		}
		$(".basket_items").text(data.basket.count);
		if (data.item.max) {
			$("#quantity_" + data.item.productId).val(data.item.q);
			$("#quantity_" + data.item.basket_id).val(data.item.q);
			alert(
				"Ð’Ñ‹ ÑƒÐºÐ°Ð·Ð°Ð»Ð¸ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ð° Ð´Ð»Ñ Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸!"
			);
		}

		$(".basket_count").text(data.basket.count + " " + title);
		$(".basket_full_price").text(data.basket.total_format);
		$(".basket_full_price_wd").text(data.basket.total_with_delivery);
		$(".delivery_price").text(data.basket.delivery_price);
		$(".checkout-categories-item-body-delivery__price").html(
			data.basket.delivery_price
		);
		$(".diff_price").text(data.basket.diff_format);
		$("#quantity_" + data.item.productId).val(data.item.q);
		$("#quantity_" + data.item.basket_id).val(data.item.q);
		$("#price_" + data.item.basket_id).text(data.item.price_format);
		$("#price_old_" + data.item.basket_id).text(data.item.old_price_format);
		$("#item_diff_" + data.item.basket_id).text(
			"Ð¡ÐºÐ¸Ð´ÐºÐ°: " + data.item.diff_format
		);
		if (document.documentElement.clientWidth <= 740)
			$(".basket-fly").show();

		if (
			$(".js-show-cart").length > 0 &&
			$("#item_" + data.item.basket_id).length == 0
		) {
			var template = $("#js-cart-template").html();
			var html = Mustache.render(template, data);
			//$('.js-cart-baloon .baron__scroller').append(html);
		} else if (
			$(".js-show-cart").length > 0 &&
			$("#item_" + data.item.basket_id).length > 0
		) {
			var text =
				data.item.q +
				" " +
				data.item.unit +
				" " +
				" / " +
				data.item.price_format;

			$("#item_" + data.item.basket_id)
				.find(".header__bottom-cart-baloon-info-text.mod-red")
				.text(text);
		}
	};

	s.declOfNum = function (number, titles) {
		cases = [2, 0, 1, 1, 1, 2];
		return titles[
			number % 100 > 4 && number % 100 < 20
				? 2
				: cases[number % 10 < 5 ? number % 10 : 5]
		];
	};

	window.addintervalbasket = {};

	s.basketActions = function (e) {
		var $this = $(this),
			action = $this.data("action"),
			$row = $this.parents(".header__bottom-cart-baloon-row");
		var url = templateFolder + "/ajax/ajax_add_cart.php",
			q = $("#quantity_" + $this.data("id")),
			qval = 0,
			basketItemId = $this.data("basket-id"),
			dom = $this.parents(".goods__item"),
			unit = q.data("unit");

		var opts = window.catalog.getOpts();
		if (dom.length == 0) dom = $this.parents(".good__item");
		if (action == "clear_all") e.preventDefault();

		if ($this.hasClass("catalog-card-add__btn")) {
			qval = unit == "weight" ? 0.1 : 1;
			if (parseFloat(q.val()) < 0.1) {
			} else {
				qval = q.val();
			}
		} else {
			qval = q.val();
		}

		var quantity = qval;
		dom.addClass("in-cart");
		if (quantity == 0) {
			dom.removeClass("in-cart");
			action = "delete";
		}

		let itemId = $this.data("id");
		var data = {
			id: $this.data("id"),
			quantity: quantity,
			type: $("#quantity_" + $this.data("id")).data("type"),
			siteId: siteId,
			action: action,
		};

		var notReload = true;
		if (dom.data("type") == "not-reload") notReload = false;
		var itemInputContainer = $this.parents(".number");
		itemInputContainer.find(".js-item-count-loader").show();
		itemInputContainer.find(".js-hide-when-load").hide();

		clearTimeout(window.addintervalbasket[itemId]);
		window.addintervalbasket[itemId] = setTimeout(function () {
			if (
				action == "delete" ||
				action == "clear_all" ||
				q.hasClass("stepper__input")
			)
				showLoader();
			if (opts.isAdmin) $(dom).addClass("sended");
			$.ajax({
				url: url,
				dataType: "json",
				type: "post",
				data: data,
				success: function (data, textStatus) {
					$(dom).removeClass("sended");

					itemInputContainer.find(".js-item-count-loader").hide();
					itemInputContainer.find(".js-hide-when-load").show();
					if (data.age) {
						if (typeof isDetailPage === "undefined")
							$("#quantity_" + $this.data("id")).val(--quantity);
						self.vars.age = $this;
						endLoader();
						$(".popup-age").addClass("is-visible");
						$(".mfp-bg").addClass("is-visible");
						return false;
					}
					if (data.result) {
						if (
							dom.hasClass("pies__item.pies_all") &&
							parseInt(data.item.q) == 2
						) {
							dom.find(".js-plus").addClass("disabled");
							dom.find(".limited_text").addClass("disabled");
							dom.find(".show_attention").show();
							dom.find(".pies__detail_btn").show();
						} else if (
							dom.hasClass("pies__item.pies_all") &&
							parseInt(data.item.q) < 2
						) {
							dom.find(".js-plus").removeClass("disabled");
							dom.find(".limited_text").removeClass("disabled");
							dom.find(".show_attention").hide();
							dom.find(".pies__detail_btn").hide();
						}
						if (action == "clear_all") window.location.reload();

						$(".add-to-cart-detail").hide();
						$(".in-cart").show();
						s.setBasketData(data, $row, action);
						if (action != "clear_all" && action != "delete")
							s.reloadBasket();

						$(".js-cart-indicator").removeClass("mod-red");
						if (data.basket.free >= 100)
							$(".js-cart-indicator").addClass("mod-red");
						$(".js-cart-indicator").css(
							"right",
							data.basket.free + "%"
						);
						$("#free-price").html(data.basket.free_price);

						dom.find(".sum-profit span").html(
							data.item.price_format
						);
						dom.find(".all-profit span").html(
							data.item.diff_format
						);
						var ecomm = {
							id: data.item.productId,
							name: data.item.name,
							price: data.item.base_price,
							brand: data.item.brand,
							category: data.item.category,
							quantity: data.item.q,
						};

						if (typeof action === "undefined") action = "add";

						setAnalytics(ecomm, action);
						if (
							action != "clear_all" &&
							action != "delete" &&
							!notReload
						)
							BX.onCustomEvent("onBasketPageReload");
						if (parseInt($(".delivery-change:checked").val()) > 0) {
							let deliveryId = parseInt(
								$(".delivery-change:checked").val()
							);
							s.checkDelivery(deliveryId);
						}
					} else {
						endLoader();
						alert(data.error);
					}
					endLoader();
				},
			});
		}, 250);
	};

	s.reloadBasket = function () {
		var active = false;
		if ($(".js-cart-baloon").hasClass("active")) var active = true;
		$.ajax({
			url:
				self.opts.templateFolder +
				"/ajax/basket.php?o=" +
				window.orderPage,
			success: function (res) {
				$("#small-basket").html(res);
				if ($(".js-custom-scroll").length) {
					window.dima = baron({
						root: ".js-custom-scroll",
						scroller: ".baron__scroller",
						bar: ".baron__bar",
					}).autoUpdate();
				}

				if (active) $(".js-cart-baloon").addClass("active");

				s.initAfterAjax();
			},
		});
	};

	s.initOldCounter = function () {
		$(document).on("click", ".minus", function () {
			var $input = $(this).parent().find("input");
			var $cartItem = $(this)
				.parents(".js-good-item")
				.find(".goods__incart_number");
			var unit = $(this).data("unit");
			var count =
				unit == "weight"
					? Math.round((parseFloat($input.val()) - 0.1) * 10) / 10
					: parseInt($input.val()) - 1;

			if (unit == "weight" && count < 0.1) {
				count = 0.1;
			}
			if (unit == "piece" && count < 1) {
				count = 1;
			}

			if (unit == "weight") {
				count = count.toFixed(1);
			}

			$input.val(count);
			$cartItem.text(count);
			return false;
		});
		$(document).on("click", ".plus", function () {
			var $input = $(this).parent().find("input");
			var $cartItem = $(this)
				.parents(".js-good-item")
				.find(".goods__incart_number");
			var unit = $(this).data("unit");
			var count =
				unit == "weight"
					? Math.round((parseFloat($input.val()) + 0.1) * 10) / 10
					: parseInt($input.val()) + 1;
			var max = parseFloat($input.data("max"));

			if (unit == "weight" && count > 99.9) {
				count = 99.9;
			}
			if (unit == "piece" && count > 99) {
				count = 99;
			}

			if (unit == "weight") {
				count = count.toFixed(1);
			}

			if (count > max) {
				count = max;
				alert(
					"Ð’Ñ‹ ÑƒÐºÐ°Ð·Ð°Ð»Ð¸ Ð¼Ð°ÐºÑÐ¸Ð¼Ð°Ð»ÑŒÐ½Ð¾Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ð° Ð´Ð»Ñ Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸!"
				);
			}
			$input.val(count);
			return false;
		});
	};

	s.setSectionFilter = function (e) {
		var items = {},
			min = $("input[name=purchases-categories-slider-min]").val(),
			max = $("input[name=purchases-categories-slider-max]").val(),
			sortPercent = "",
			type = "",
			_this = $(e.target);

		if (typeof _this !== "undefined") {
			var sortPercent = _this.data("value"),
				type = _this.data("type");

			if (typeof sortPercent !== "undefined")
				window.cacheFilter["sortPercent"] = sortPercent;

			if (typeof type !== "undefined") window.cacheFilter["type"] = type;
		}

		if (typeof window.cacheFilter["sortPercent"] !== "undefined") {
			sortPercent = window.cacheFilter["sortPercent"];
		}
		if (typeof window.cacheFilter["type"] !== "undefined") {
			type = window.cacheFilter["type"];
		}

		console.log(window.cacheFilter);
		$.each($(".catalog-filter__list .checkbox"), function (i, item) {
			if ($(this).prop("checked")) items[i] = $(this).val();
		});
		showLoader();
		$.ajax({
			method: "POST",
			data: {
				ajax: true,
				section: items,
				min_percent: min,
				max_percent: max,
				sortPercent: sortPercent,
				type: type,
			},
			success: function (res) {
				$("#replace").html(res);
				s.initAfterAjax();
				endLoader();
			},
		});
	};

	s.showMore = function (e) {
		e.preventDefault();
		var page = $(this).data("page");
		var link = $(this).data("link");
		$(this).hide();
		$(".show_more_loader").show();
		$.ajax({
			url: link,
			dataType: "html",
			success: function (e) {
				let data = $(e).find("#pagination-layout").html();
				var folding = $(e).find("#pagen_layout .folding-layout").html();

				$("#pagen_layout").append(folding);
				$(".c-pagination").html($(e).find(".c-pagination").html());
				$(this).show();
				$(".show_more_loader").hide();
				s.initAfterAjax();
			},
		});
	};

	s.removeFilter = function () {
		var items = [];
		showLoader();
		$.ajax({
			method: "POST",
			data: {
				ajax: true,
				section: items,
			},
			success: function (res) {
				$("#replace").html(res);
				s.initAfterAjax();
				$(".catalog-filter__list .checkbox").prop("checked", false);
				$(".js-slider-filter").slider(
					"values",
					0,
					Number($(".js-slider-filter").data("min"))
				);
				$(".js-slider-filter").slider(
					"values",
					1,
					Number($(".js-slider-filter").data("max"))
				);
				$(".js-slider-min").val(
					Number($(".js-slider-filter").data("min"))
				);
				$(".js-slider-max").val(
					Number($(".js-slider-filter").data("max"))
				);
				$(".js-purchases-btn").removeClass("active");
				$(".js-purchases-btn").first().addClass("active");
				endLoader();
			},
		});
	};

	s.favoriteAction = function () {
		var active = $(this).hasClass("active"),
			action = "add",
			_this = $(this);
		if (active) action = "delete";

		$.ajax({
			url: self.opts.templateFolder + "/ajax/favorite.php",
			method: "POST",
			data: {
				id: $(this).data("id"),
				product: $(this).data("product"),
				action: action,
			},
			success: function (res) {
				if (!res.error) {
					_this.data("id", res.id);
					_this.toggleClass("active");
				}
			},
		});
	};

	s.checkFav = function () {
		var obj = new Array();
		$(".js-good-item.goods__item").each(function (i, item) {
			obj.push($(item).data("item"));
		});
		$(".product-card").each(function (i, item) {
			obj.push($(item).data("item"));
		});
		if (obj.length == 0) return false;

		$.ajax({
			url: self.opts.templateFolder + "/ajax/favorite.php",
			type: "post",
			dataType: "json",
			data: {
				items: obj,
				action: "check",
			},
			success: function (res) {
				for (var i in res.res) {
					if (res.res.hasOwnProperty(i)) {
						let fav = res.res[i];
						if (fav) $("#fav_" + i).addClass("active");
						else $("#fav_" + i).removeClass("active");
					}
				}
			},
		});
	};

	s.checkInBasket = function () {
		var obj = new Array();
		$(".js-good-item.goods__item").each(function (i, item) {
			if (!$(item).hasClass("checked")) {
				obj.push($(item).data("item"));
			}
			$(this).addClass("checked");
		});
		if (obj.length == 0) return false;

		$.ajax({
			url: self.opts.templateFolder + "/ajax/in_cart.php",
			type: "post",
			dataType: "json",
			data: {
				items: obj,
				siteId: self.opts.siteId,
			},
			success: function (res) {
				for (var i in res) {
					if (res.hasOwnProperty(i)) {
						$("#quantity_" + i).val(res[i][1]);
						$("#quantity_" + i)
							.parents(".js-good-item")
							.find(".sum-profit span")
							.html(res[i][2]);
						//$('#quantity_' + i).parents('.js-good-item.goods__item').addClass('checked');
						$("#quantity_" + i)
							.parents(".js-good-item")
							.addClass("in-cart");
						$("#quantity_" + i)
							.parent()
							.find(".mod-minus.js-minus")
							.data("basket-id", res[i][0]);
						$("#quantity_" + i)
							.parent()
							.find(".mod-plus.js-plus")
							.data("basket-id", res[i][0]);
					}
				}
			},
		});
	};

	s.subscribeProduct = function (e) {
		var itemId = e.target.value,
			action = e.target.checked ? "add" : "delete";
		var url = templateFolder + "/ajax/subscribe.php";

		var data = {
			product: itemId,
			action: action,
		};
		clearTimeout(window.addintervalbasket);

		window.addintervalbasket = setTimeout(function () {
			//showLoader();
			$.ajax({
				url: url,
				dataType: "json",
				type: "post",
				data: data,
				success: function (data, textStatus) {
					endLoader();
					if (data.error) {
						alert(data.msg);
					}
				},
			});
		}, 50);
	};

	s.checkInSubscribe = function () {
		var obj = new Array();
		var url = templateFolder + "/ajax/subscribe.php";
		$(".js-good-item.goods__item").each(function (i, item) {
			if (
				!$(item).hasClass("sub_checked") &&
				$(item).find(".subscribe_product").length > 0
			) {
				obj.push($(item).data("item"));
			}
			$(this).addClass("sub_checked");
		});
		if (obj.length == 0) {
			if ($("#detail-subscribe").length > 0) {
				obj.push($("#detail-subscribe").data("item"));
			}
		}
		if (obj.length == 0) return false;

		$.ajax({
			url: url,
			type: "post",
			dataType: "json",
			data: {
				items: obj,
				siteId: self.opts.siteId,
				action: "check",
			},
			success: function (res) {
				for (var i in res.items) {
					if (res.items.hasOwnProperty(i)) {
						$("#subscribe_" + i).prop("checked", res.items[i]);
					}
				}
			},
		});
	};

	s.subscribeRemove = function (e) {
		var itemId = $(e.target)
				.parents(".profile-content-fav-item")
				.data("product"),
			action = "delete";
		var url = templateFolder + "/ajax/subscribe.php",
			target = e.target,
			subId = $(e.target)
				.parents(".profile-content-fav-item")
				.data("sub-id");
		var data = {
			product: itemId,
			action: action,
			subId: subId,
		};

		showLoader();
		$.ajax({
			url: url,
			dataType: "json",
			type: "post",
			data: data,
			success: function (data) {
				if (data.error) {
					alert(
						"ÐŸÑ€Ð¾Ð¸Ð·Ð¾ÑˆÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ°, Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·ÑƒÐ¹Ñ‚ÐµÑÑŒ Ð¸ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÑÐ½Ð¾Ð²Ð°"
					);
				} else {
					$(target).parents(".profile-content-fav-item").remove();
				}
				endLoader();
			},
		});
	};

	s.init = function () {
		s.catalogItemCounter(".product-card-controls-counter");
		s.catalogItemCounter(".goods__bottom-counter");
		s.catalogItemCounter(".item-card__counter");
		s.catalogItemCounter(".search-baloon-buttons__counter");
		s.catalogItemCounter(".cart-new-category-item__counter");
		s.catalogItemCounter(".stepper__input");
		s.imageObserve();
		s.setListHeight();
	};

	s.initAfterAjax = function () {
		s.catalogItemCounter(".goods__bottom-counter");
		s.catalogItemCounter(".item-card__counter");
		s.catalogItemCounter(".search-baloon-buttons__counter");
		s.catalogItemCounter(".cart-new-category-item__counter");
		s.catalogItemCounter(".stepper__input");
		s.imageObserve();
		s.setListHeight();
	};

	s.lastActivity = function () {
		setInterval(function () {
			$.ajax({
				url: templateFolder + "/ajax/last_activity.php",
			});
		}, 60000);
	};

	s.checkDelivery = function (val) {
		showLoader();
		$.ajax({
			url: templateFolder + "/ajax/express.php",
			type: "POST",
			dataType: "json",
			data: { DELIVERY_ID: val },
			success: function (res) {
				endLoader();
				$(".checkout-categories-item-body-delivery__price").html(
					res.delivery_price
				);
				$("#delivery_price").html(res.delivery_price);
				$("#full_summ").html(res.price);
				$(".delivery_text_express").hide();
				$(".delivery_text").show();
				$("#time-block").show();
				$("#time-block-title").show();
				if (res.show) {
					$(".delivery_text").hide();
					$(".delivery_text_express").show();
					$("#time-block").hide();
					$("#time-block-title").hide();
				}
			},
			fail: function () {
				endLoader();
			},
		});
	};

	s.initOldCounter();

	s.getEntity = function (parent, entity, additionalFilter) {
		if (!parent || !entity) return null;

		additionalFilter = additionalFilter || "";

		return parent.querySelector(
			additionalFilter + '[data-entity="' + entity + '"]'
		);
	};

	$(document).on("click", ".js-fav-action", s.favoriteAction);

	$(document).on("click", self.vars.actionClass, s.basketActions);

	$(document).on("change", ".js-item-quantity", s.basketActions);

	$(document).on(
		"change",
		".catalog-filter__list .checkbox",
		s.setSectionFilter
	);

	$(document).on("click", "#show_more", s.showMore);
	$(document).on("click", ".js-remove-categories", s.removeFilter);
	$(document).on("click", ".subscribe_product", s.subscribeProduct);
	$(document).on("click", ".js-subscribe-delete", s.subscribeRemove);
	$(document).on("click", ".js-show-categories", function (e) {
		e.preventDefault();
		$(".js-categories").toggleClass("active");
	});
	$(document).on("click", ".js-show-categories:not(.active)", function (e) {
		e.preventDefault();
		let ref = $(this).attr("href");
		$(".js-categories").addClass("active");
		$(".js-categories-tab").removeClass("active");
		$(ref).addClass("active");
		$(".js-show-categories").removeClass("active");
		$(this).addClass("active");
	});
	$(document).on(
		"change",
		".purchases-categories-slider-min, .purchases-categories-slider-max",
		s.setSectionFilter
	);

	$(document).on("click", ".to_catalog", function (e) {
		e.preventDefault();
		window.location.href = "/catalog/";
	});

	if ($(".js-slider-filter").length) {
		$(".js-slider-filter").slider({
			range: true,
			min: Number($(".js-slider-filter").data("min")),
			max: Number($(".js-slider-filter").data("max")),
			values: [
				Number($(".js-slider-filter").data("min")),
				Number($(".js-slider-filter").data("max")),
			],
			slide: function (event, ui) {
				$(".js-slider-min").val(ui.values[0]);
				$(".js-slider-max").val(ui.values[1]);
				$(".js-filter-decor").addClass("active");
				$(".js-filter-clear").addClass("active");
				//s.setSectionFilter();
			},
			change: function (event, ui) {
				s.setSectionFilter();
			},
		});
	}

	$(document).on("click", ".js-purchases-btn", function (e) {
		$(this)
			.parents(".js-purchases-buttons")
			.find(".js-purchases-btn")
			.removeClass("active");
		$(this).addClass("active");
		s.setSectionFilter(e);
	});

	$(document).on("click", ".js-age-accept", function () {
		self.vars.age.trigger("click");
		$.cookie("AGE_18", "Y", { path: "/", expires: 1 });
	});
	s.checkInBasket();
	s.checkInSubscribe();
	s.checkFav();
	window.cacheFilter = {};

	BX.addCustomEvent("onBasketAjaxReload", function () {
		s.initAfterAjax();
	});
	//s.lastActivity();
}

function CPie(opts) {
	var pie = this;

	var self = {
		opts: { url: "/ajax/ajax_add_cart.php" },
		vars: {
			quantityClass: ".js-pie-plus, .js-pie-minus",
		},
	};
	if (typeof opts == "object") $.extend(self.opts, opts);

	pie.basketAction = function (item, quantity, $row) {
		var action = "update";
		if (quantity == 0) action = "delete";
		var data = {
			id: item,
			quantity: quantity,
			siteId: self.opts.siteId,
			action: action,
			basket: self.opts.isCartPage,
		};

		clearTimeout(window.addintervalbasket);
		window.addintervalbasket = setTimeout(function () {
			$.ajax({
				url: self.opts.templateFolder + self.opts.url,
				dataType: "json",
				type: "post",
				data: data,
				success: function (data, textStatus) {
					if (!self.opts.isCartPage)
						window.catalog.setBasketData(data, "", action);
					else $("#pie_price").html(data.basket.total_format);
					if (action == "delete" && self.opts.isCartPage)
						$row.remove();
					endLoader();
				},
			});
		}, 250);
	};

	pie.initCounter = function () {
		var action = $(this).hasClass("js-pie-plus") ? "plus" : "minus",
			input = $(this).siblings(".js-pie-input"),
			item = input.find("input").data("item");
		var count = parseInt(input.find("input").val());
		var price = input
			.find(".js-pie-price")
			.data("price")
			.toString()
			.replace(/\,/g, ".");

		var $row = $(this).parents(".pies-catalog-item.js-pie");
		if (action === "plus") count = count + 1;
		else count = count - 1;

		if (count <= 0) count = 0;

		if (count > 0) $(this).parents(".js-pie").addClass("in-cart");
		else $(this).parents(".js-pie").removeClass("in-cart");

		pie.basketAction(item, count, $row);

		$(this).siblings(".js-pie-input").find("input").val(count);
		if (count <= 0) count = 1;

		var currentPrice = (price * count).toFixed(2);
		currentPrice = currentPrice.toString().replace(/\./g, ",");
		$(this)
			.siblings(".js-pie-input")
			.find(".js-pie-price")
			.text(currentPrice);
	};

	$(document).on("click", self.vars.quantityClass, pie.initCounter);
}

function setAnalytics(data, action) {
	switch (action) {
		case "add":
			var info = {
				ecommerce: {
					add: {
						products: [data],
					},
				},
			};
			break;
		case "delete":
			var info = {
				ecommerce: {
					remove: {
						products: [data],
					},
				},
			};
			break;
		case "detail":
			var info = {
				ecommerce: {
					detail: {
						products: [data],
					},
				},
			};
			break;
		case "order":
			var info = {
				ecommerce: {
					currencyCode: data.currency,
					purchase: {
						actionField: data.actionField,
						products: data.products,
					},
				},
				event: "Purchase",
			};
			break;
	}

	window.dataLayer.push(info);
} /* Start:"a:4:{s:4:"full";s:69:"/bitrix/templates/main_adaptive_new/js/jquery.mask.js?158106192023128";s:6:"source";s:53:"/bitrix/templates/main_adaptive_new/js/jquery.mask.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
/**
 * jquery.mask.js
 * @version: v1.14.15
 * @author: Igor Escobar
 *
 * Created by Igor Escobar on 2012-03-10. Please report any bug at github.com/igorescobar/jQuery-Mask-Plugin
 *
 * Copyright (c) 2012 Igor Escobar http://igorescobar.com
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint laxbreak: true */
/* jshint maxcomplexity:17 */
/* global define */

// UMD (Universal Module Definition) patterns for JavaScript modules that work everywhere.
// https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js
(function (factory, jQuery, Zepto) {
	if (typeof define === "function" && define.amd) {
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"));
	} else {
		factory(jQuery || Zepto);
	}
})(
	function ($) {
		"use strict";

		var Mask = function (el, mask, options) {
			var p = {
				invalid: [],
				getCaret: function () {
					try {
						var sel,
							pos = 0,
							ctrl = el.get(0),
							dSel = document.selection,
							cSelStart = ctrl.selectionStart;

						// IE Support
						if (
							dSel &&
							navigator.appVersion.indexOf("MSIE 10") === -1
						) {
							sel = dSel.createRange();
							sel.moveStart("character", -p.val().length);
							pos = sel.text.length;
						}
						// Firefox support
						else if (cSelStart || cSelStart === "0") {
							pos = cSelStart;
						}

						return pos;
					} catch (e) {}
				},
				setCaret: function (pos) {
					try {
						if (el.is(":focus")) {
							var range,
								ctrl = el.get(0);

							// Firefox, WebKit, etc..
							if (ctrl.setSelectionRange) {
								ctrl.setSelectionRange(pos, pos);
							} else {
								// IE
								range = ctrl.createTextRange();
								range.collapse(true);
								range.moveEnd("character", pos);
								range.moveStart("character", pos);
								range.select();
							}
						}
					} catch (e) {}
				},
				events: function () {
					el.on("keydown.mask", function (e) {
						el.data("mask-keycode", e.keyCode || e.which);
						el.data("mask-previus-value", el.val());
						el.data("mask-previus-caret-pos", p.getCaret());
						p.maskDigitPosMapOld = p.maskDigitPosMap;
					})
						.on(
							$.jMaskGlobals.useInput
								? "input.mask"
								: "keyup.mask",
							p.behaviour
						)
						.on("paste.mask drop.mask", function () {
							setTimeout(function () {
								el.keydown().keyup();
							}, 100);
						})
						.on("change.mask", function () {
							el.data("changed", true);
						})
						.on("blur.mask", function () {
							if (oldValue !== p.val() && !el.data("changed")) {
								el.trigger("change");
							}
							el.data("changed", false);
						})
						// it's very important that this callback remains in this position
						// otherwhise oldValue it's going to work buggy
						.on("blur.mask", function () {
							oldValue = p.val();
						})
						// select all text on focus
						.on("focus.mask", function (e) {
							if (options.selectOnFocus === true) {
								$(e.target).select();
							}
						})
						// clear the value if it not complete the mask
						.on("focusout.mask", function () {
							if (
								options.clearIfNotMatch &&
								!regexMask.test(p.val())
							) {
								p.val("");
							}
						});
				},
				getRegexMask: function () {
					var maskChunks = [],
						translation,
						pattern,
						optional,
						recursive,
						oRecursive,
						r;

					for (var i = 0; i < mask.length; i++) {
						translation = jMask.translation[mask.charAt(i)];

						if (translation) {
							pattern = translation.pattern
								.toString()
								.replace(/.{1}$|^.{1}/g, "");
							optional = translation.optional;
							recursive = translation.recursive;

							if (recursive) {
								maskChunks.push(mask.charAt(i));
								oRecursive = {
									digit: mask.charAt(i),
									pattern: pattern,
								};
							} else {
								maskChunks.push(
									!optional && !recursive
										? pattern
										: pattern + "?"
								);
							}
						} else {
							maskChunks.push(
								mask
									.charAt(i)
									.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
							);
						}
					}

					r = maskChunks.join("");

					if (oRecursive) {
						r = r
							.replace(
								new RegExp(
									"(" +
										oRecursive.digit +
										"(.*" +
										oRecursive.digit +
										")?)"
								),
								"($1)?"
							)
							.replace(
								new RegExp(oRecursive.digit, "g"),
								oRecursive.pattern
							);
					}

					return new RegExp(r);
				},
				destroyEvents: function () {
					el.off(
						[
							"input",
							"keydown",
							"keyup",
							"paste",
							"drop",
							"blur",
							"focusout",
							"",
						].join(".mask ")
					);
				},
				val: function (v) {
					var isInput = el.is("input"),
						method = isInput ? "val" : "text",
						r;

					if (arguments.length > 0) {
						if (el[method]() !== v) {
							el[method](v);
						}
						r = el;
					} else {
						r = el[method]();
					}

					return r;
				},
				calculateCaretPosition: function () {
					var oldVal = el.data("mask-previus-value") || "",
						newVal = p.getMasked(),
						caretPosNew = p.getCaret();
					if (oldVal !== newVal) {
						var caretPosOld =
								el.data("mask-previus-caret-pos") || 0,
							newValL = newVal.length,
							oldValL = oldVal.length,
							maskDigitsBeforeCaret = 0,
							maskDigitsAfterCaret = 0,
							maskDigitsBeforeCaretAll = 0,
							maskDigitsBeforeCaretAllOld = 0,
							i = 0;

						for (i = caretPosNew; i < newValL; i++) {
							if (!p.maskDigitPosMap[i]) {
								break;
							}
							maskDigitsAfterCaret++;
						}

						for (i = caretPosNew - 1; i >= 0; i--) {
							if (!p.maskDigitPosMap[i]) {
								break;
							}
							maskDigitsBeforeCaret++;
						}

						for (i = caretPosNew - 1; i >= 0; i--) {
							if (p.maskDigitPosMap[i]) {
								maskDigitsBeforeCaretAll++;
							}
						}

						for (i = caretPosOld - 1; i >= 0; i--) {
							if (p.maskDigitPosMapOld[i]) {
								maskDigitsBeforeCaretAllOld++;
							}
						}

						// if the cursor is at the end keep it there
						if (caretPosNew > oldValL) {
							caretPosNew = newValL * 10;
						} else if (
							caretPosOld >= caretPosNew &&
							caretPosOld !== oldValL
						) {
							if (!p.maskDigitPosMapOld[caretPosNew]) {
								var caretPos = caretPosNew;
								caretPosNew -=
									maskDigitsBeforeCaretAllOld -
									maskDigitsBeforeCaretAll;
								caretPosNew -= maskDigitsBeforeCaret;
								if (p.maskDigitPosMap[caretPosNew]) {
									caretPosNew = caretPos;
								}
							}
						} else if (caretPosNew > caretPosOld) {
							caretPosNew +=
								maskDigitsBeforeCaretAll -
								maskDigitsBeforeCaretAllOld;
							caretPosNew += maskDigitsAfterCaret;
						}
					}
					return caretPosNew;
				},
				behaviour: function (e) {
					e = e || window.event;
					p.invalid = [];

					var keyCode = el.data("mask-keycode");

					if ($.inArray(keyCode, jMask.byPassKeys) === -1) {
						var newVal = p.getMasked(),
							caretPos = p.getCaret();

						// this is a compensation to devices/browsers that don't compensate
						// caret positioning the right way
						setTimeout(function () {
							p.setCaret(p.calculateCaretPosition());
						}, $.jMaskGlobals.keyStrokeCompensation);

						p.val(newVal);
						p.setCaret(caretPos);
						return p.callbacks(e);
					}
				},
				getMasked: function (skipMaskChars, val) {
					var buf = [],
						value = val === undefined ? p.val() : val + "",
						m = 0,
						maskLen = mask.length,
						v = 0,
						valLen = value.length,
						offset = 1,
						addMethod = "push",
						resetPos = -1,
						maskDigitCount = 0,
						maskDigitPosArr = [],
						lastMaskChar,
						check;

					if (options.reverse) {
						addMethod = "unshift";
						offset = -1;
						lastMaskChar = 0;
						m = maskLen - 1;
						v = valLen - 1;
						check = function () {
							return m > -1 && v > -1;
						};
					} else {
						lastMaskChar = maskLen - 1;
						check = function () {
							return m < maskLen && v < valLen;
						};
					}

					var lastUntranslatedMaskChar;
					while (check()) {
						var maskDigit = mask.charAt(m),
							valDigit = value.charAt(v),
							translation = jMask.translation[maskDigit];

						if (translation) {
							if (valDigit.match(translation.pattern)) {
								buf[addMethod](valDigit);
								if (translation.recursive) {
									if (resetPos === -1) {
										resetPos = m;
									} else if (
										m === lastMaskChar &&
										m !== resetPos
									) {
										m = resetPos - offset;
									}

									if (lastMaskChar === resetPos) {
										m -= offset;
									}
								}
								m += offset;
							} else if (valDigit === lastUntranslatedMaskChar) {
								// matched the last untranslated (raw) mask character that we encountered
								// likely an insert offset the mask character from the last entry; fall
								// through and only increment v
								maskDigitCount--;
								lastUntranslatedMaskChar = undefined;
							} else if (translation.optional) {
								m += offset;
								v -= offset;
							} else if (translation.fallback) {
								buf[addMethod](translation.fallback);
								m += offset;
								v -= offset;
							} else {
								p.invalid.push({
									p: v,
									v: valDigit,
									e: translation.pattern,
								});
							}
							v += offset;
						} else {
							if (!skipMaskChars) {
								buf[addMethod](maskDigit);
							}

							if (valDigit === maskDigit) {
								maskDigitPosArr.push(v);
								v += offset;
							} else {
								lastUntranslatedMaskChar = maskDigit;
								maskDigitPosArr.push(v + maskDigitCount);
								maskDigitCount++;
							}

							m += offset;
						}
					}

					var lastMaskCharDigit = mask.charAt(lastMaskChar);
					if (
						maskLen === valLen + 1 &&
						!jMask.translation[lastMaskCharDigit]
					) {
						buf.push(lastMaskCharDigit);
					}

					var newVal = buf.join("");
					p.mapMaskdigitPositions(newVal, maskDigitPosArr, valLen);
					return newVal;
				},
				mapMaskdigitPositions: function (
					newVal,
					maskDigitPosArr,
					valLen
				) {
					var maskDiff = options.reverse ? newVal.length - valLen : 0;
					p.maskDigitPosMap = {};
					for (var i = 0; i < maskDigitPosArr.length; i++) {
						p.maskDigitPosMap[maskDigitPosArr[i] + maskDiff] = 1;
					}
				},
				callbacks: function (e) {
					var val = p.val(),
						changed = val !== oldValue,
						defaultArgs = [val, e, el, options],
						callback = function (name, criteria, args) {
							if (
								typeof options[name] === "function" &&
								criteria
							) {
								options[name].apply(this, args);
							}
						};

					callback("onChange", changed === true, defaultArgs);
					callback("onKeyPress", changed === true, defaultArgs);
					callback(
						"onComplete",
						val.length === mask.length,
						defaultArgs
					);
					callback("onInvalid", p.invalid.length > 0, [
						val,
						e,
						el,
						p.invalid,
						options,
					]);
				},
			};

			el = $(el);
			var jMask = this,
				oldValue = p.val(),
				regexMask;

			mask =
				typeof mask === "function"
					? mask(p.val(), undefined, el, options)
					: mask;

			// public methods
			jMask.mask = mask;
			jMask.options = options;
			jMask.remove = function () {
				var caret = p.getCaret();
				if (jMask.options.placeholder) {
					el.removeAttr("placeholder");
				}
				if (el.data("mask-maxlength")) {
					el.removeAttr("maxlength");
				}
				p.destroyEvents();
				p.val(jMask.getCleanVal());
				p.setCaret(caret);
				return el;
			};

			// get value without mask
			jMask.getCleanVal = function () {
				return p.getMasked(true);
			};

			// get masked value without the value being in the input or element
			jMask.getMaskedVal = function (val) {
				return p.getMasked(false, val);
			};

			jMask.init = function (onlyMask) {
				onlyMask = onlyMask || false;
				options = options || {};

				jMask.clearIfNotMatch = $.jMaskGlobals.clearIfNotMatch;
				jMask.byPassKeys = $.jMaskGlobals.byPassKeys;
				jMask.translation = $.extend(
					{},
					$.jMaskGlobals.translation,
					options.translation
				);

				jMask = $.extend(true, {}, jMask, options);

				regexMask = p.getRegexMask();

				if (onlyMask) {
					p.events();
					p.val(p.getMasked());
				} else {
					if (options.placeholder) {
						el.attr("placeholder", options.placeholder);
					}

					// this is necessary, otherwise if the user submit the form
					// and then press the "back" button, the autocomplete will erase
					// the data. Works fine on IE9+, FF, Opera, Safari.
					if (el.data("mask")) {
						el.attr("autocomplete", "off");
					}

					// detect if is necessary let the user type freely.
					// for is a lot faster than forEach.
					for (var i = 0, maxlength = true; i < mask.length; i++) {
						var translation = jMask.translation[mask.charAt(i)];
						if (translation && translation.recursive) {
							maxlength = false;
							break;
						}
					}

					if (maxlength) {
						el.attr("maxlength", mask.length).data(
							"mask-maxlength",
							true
						);
					}

					p.destroyEvents();
					p.events();

					var caret = p.getCaret();
					p.val(p.getMasked());
					p.setCaret(caret);
				}
			};

			jMask.init(!el.is("input"));
		};

		$.maskWatchers = {};
		var HTMLAttributes = function () {
				var input = $(this),
					options = {},
					prefix = "data-mask-",
					mask = input.attr("data-mask");

				if (input.attr(prefix + "reverse")) {
					options.reverse = true;
				}

				if (input.attr(prefix + "clearifnotmatch")) {
					options.clearIfNotMatch = true;
				}

				if (input.attr(prefix + "selectonfocus") === "true") {
					options.selectOnFocus = true;
				}

				if (notSameMaskObject(input, mask, options)) {
					return input.data("mask", new Mask(this, mask, options));
				}
			},
			notSameMaskObject = function (field, mask, options) {
				options = options || {};
				var maskObject = $(field).data("mask"),
					stringify = JSON.stringify,
					value = $(field).val() || $(field).text();
				try {
					if (typeof mask === "function") {
						mask = mask(value);
					}
					return (
						typeof maskObject !== "object" ||
						stringify(maskObject.options) !== stringify(options) ||
						maskObject.mask !== mask
					);
				} catch (e) {}
			},
			eventSupported = function (eventName) {
				var el = document.createElement("div"),
					isSupported;

				eventName = "on" + eventName;
				isSupported = eventName in el;

				if (!isSupported) {
					el.setAttribute(eventName, "return;");
					isSupported = typeof el[eventName] === "function";
				}
				el = null;

				return isSupported;
			};

		$.fn.mask = function (mask, options) {
			options = options || {};
			var selector = this.selector,
				globals = $.jMaskGlobals,
				interval = globals.watchInterval,
				watchInputs = options.watchInputs || globals.watchInputs,
				maskFunction = function () {
					if (notSameMaskObject(this, mask, options)) {
						return $(this).data(
							"mask",
							new Mask(this, mask, options)
						);
					}
				};

			$(this).each(maskFunction);

			if (selector && selector !== "" && watchInputs) {
				clearInterval($.maskWatchers[selector]);
				$.maskWatchers[selector] = setInterval(function () {
					$(document).find(selector).each(maskFunction);
				}, interval);
			}
			return this;
		};

		$.fn.masked = function (val) {
			return this.data("mask").getMaskedVal(val);
		};

		$.fn.unmask = function () {
			clearInterval($.maskWatchers[this.selector]);
			delete $.maskWatchers[this.selector];
			return this.each(function () {
				var dataMask = $(this).data("mask");
				if (dataMask) {
					dataMask.remove().removeData("mask");
				}
			});
		};

		$.fn.cleanVal = function () {
			return this.data("mask").getCleanVal();
		};

		$.applyDataMask = function (selector) {
			selector = selector || $.jMaskGlobals.maskElements;
			var $selector = selector instanceof $ ? selector : $(selector);
			$selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes);
		};

		var globals = {
			maskElements: "input,td,span,div",
			dataMaskAttr: "*[data-mask]",
			dataMask: true,
			watchInterval: 300,
			watchInputs: true,
			keyStrokeCompensation: 10,
			// old versions of chrome dont work great with input event
			useInput:
				!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(
					window.navigator.userAgent
				) && eventSupported("input"),
			watchDataMask: false,
			byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
			translation: {
				0: { pattern: /\d/ },
				9: { pattern: /\d/, optional: true },
				"#": { pattern: /\d/, recursive: true },
				A: { pattern: /[a-zA-Z0-9]/ },
				S: { pattern: /[a-zA-Z]/ },
			},
		};

		$.jMaskGlobals = $.jMaskGlobals || {};
		globals = $.jMaskGlobals = $.extend(true, {}, globals, $.jMaskGlobals);

		// looking for inputs with data-mask attribute
		if (globals.dataMask) {
			$.applyDataMask();
		}

		setInterval(function () {
			if ($.jMaskGlobals.watchDataMask) {
				$.applyDataMask();
			}
		}, globals.watchInterval);
	},
	window.jQuery,
	window.Zepto
); /* /bitrix/templates/main_adaptive_new/js/jquery.mCustomScrollbar.concat.min.js?158106192045479*/ /* /bitrix/templates/main_adaptive_new/js/fancybox/jquery.fancybox-1.3.4.pack.js?158106192015624*/ /* /bitrix/templates/main_adaptive_new/js/jquery.cookie.js?15810619203121*/ /* /bitrix/templates/main_adaptive_new/js/jquery.flexslider-min.js?158106192016662*/ /* /bitrix/templates/main_adaptive_new/js/scripts.js?15958604075909*/ /* /bitrix/templates/main_adaptive_new/js/back-to-top.js?15810619203445*/ /* /bitrix/templates/main_adaptive_new/js/jquery.site_scripts.js?158133412751821*/ /* /bitrix/templates/main_adaptive_new/js/jquery.mustache.min.js?15810619204418*/ /* /bitrix/templates/main_adaptive_new/components/bitrix/menu/mobile-menu-catalog/script.min.js?1581061921407*/ /* /bitrix/templates/main_adaptive_new/components/bitrix/menu/catalog_new/script.min.js?1581061921409*/ /* /bitrix/templates/main_adaptive_new/js/auth.js?16092420319019*/ /* /bitrix/templates/main_adaptive_new/js/new-menu.js?15810619201823*/ /* /bitrix/templates/main_adaptive_new/js/new/bundle.js?161537343718422*/ /* /bitrix/templates/main_adaptive_new/js/new/vendor/baron.js?158104522352336*/ /* /bitrix/templates/main_adaptive_new/js/functions.js?163785214253788*/ /* /bitrix/templates/main_adaptive_new/js/jquery.mask.js?158106192023128*/

/* End */

//# sourceMappingURL=template_5d369c9a0304299219b07804c145b221.map.js
