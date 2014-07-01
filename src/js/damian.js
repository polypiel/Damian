var Damian = {
	init: function(config) {
		this.config = config;

		this.parseData();
		this.setupTmpls();

		// Parses page
    this.initPage(urlmodule.currentUrl());

		// Setups navigation
		this.config.container.sspiNavigable({
			beforeNavigate: this.preNavigate,
			afterNavigate: this.postNavigate
		});

		// animate tea bag
		var teabag_img = $('#tea_bag');
		teabag_img.click(function (e) {
			if($(document).scrollTop() > 0) {
				teabag_img.removeClass('swing');
				teabag_img.addClass('bounce');
				setTimeout(function () {
					teabag_img.removeClass('bounce');
					$("html, body").animate({ scrollTop: 0 }, 500);
				}, 200);
			}
			e.preventDefault();
		});
		teabag_img.on('mouseenter', function (e) {
			teabag_img.addClass('swing');
		});
		teabag_img.on('mouseleave', function (e) {
			teabag_img.removeClass('swing');
		});
	},

	/*
	 * Parses the json info and prepares for templating
	 */
	parseData: function() {
		this.config.data_by_url = {};
		//this.config.index_by_url = {};

		for(var i = 0; i < this.config.data.length; i++) {
			var item = this.config.data[i];
			item.index = i;
			this.config.data_by_url[item.url] = item;
		}
	},

	/*
	 * Setups handlebars templates and helpers
	 */
	setupTmpls: function() {
		var self = Damian;

		// Compiles templates
		self.config.tmpls = {};
		$('script[type="text/x-handlebars-template"]').each(function (i, e) {
			var elem = $(e);
			self.config.tmpls[elem.attr('id')] = Handlebars.compile(elem.html());
		});
		// Short tag helper
		Handlebars.registerHelper('shortTag', function (tag) {
			if(self.config.tags[tag] && self.config.tags[tag].short) {
				return self.config.tags[tag].short;
			}
			return tag;
		});
	},

	/*
	 * Init a page (events, menus, ...)
	 */
	initPage: function(url) {
		var self = Damian;

		// Templating
		var context = {};
		$('[data-tmpl]').each(function (i, e) {
			var elem = $(e);
			var tmpl = elem.data('tmpl');

			if(tmpl == "pf-grid") {
				context = {'works': self.config.data};

			} else if(tmpl == "pf-bread") {
				context = {'work': self.config.data_by_url[url.page]};

			} else if(tmpl == "pf-nav") {
				var index = self.config.data_by_url[url.page].index;
				var prev = null;
				var next = null;
				if(index > 0) {prev = self.config.data[index-1];} else { prev = null; }
				if(index < self.config.data.length - 1) {next = self.config.data[index+1];} else {next = null;}
				context = {'next': next, 'prev': prev};
			}

			var html = self.config.tmpls[tmpl](context);
			elem.html(html);
		});

		// Anima el portfolio
		$('.pf-box').each(function (i, e) {
			var delay = 100 + Math.floor((Math.random()*10)+1) * 150;
			setTimeout(function () {
				$(e).css('visibility', 'visible').addClass('animated fadeInDown');
			}, delay);
		});

		// Shows footer menu
		if(url.page === "/index.html" || url.page === "/" || url.page === "" || typeof url.page === undefined) {
			// hides headerswing
			self.config.menu.hide();
		} else {
			// shows header
			self.config.menu.show();
		}

		// ONLY portfolio pages
		// Add fancy labels
		var pf_container = $('.pf-container');
		if(pf_container) {
			/*
			pf_container.children('img[title]').each(function (i, e) {
				var elem = $(e);
				var arrow = elem.data('title-arrow') || 'up-after';
				var style = elem.data('title-style') || "left: "+elem.position().left+"px; top: "+(elem.position().top + elem.outerHeight() + 20)+"px;";
				var fancy_div = $('<div/>', {class: 'pf-fancy-label pf-arrow-'+arrow, style: style});
				fancy_div.append(' '+elem.attr('title'));
				fancy_div.insertAfter(elem);
			});
*/
			pf_container.children('img[title]').one('load', function (e) {
				var elem = $(e.target);
				var arrow = elem.data('title-arrow') || 'up-after';
				var style = elem.data('title-style') || "left: "+elem.position().left+"px; top: "+(elem.position().top + elem.outerHeight() + 20)+"px;";
				var fancy_div = $('<div/>', {class: 'pf-fancy-label pf-arrow-'+arrow, style: style});
				fancy_div.append(' '+elem.attr('title'));
				fancy_div.insertAfter(elem);
			}).each(function () {
			  if(this.complete) { $(this).load(); }
			});
		}
	},

	preNavigate: function(event, promise, url) {
		var self = Damian;
		self.config.container.slideUp('fast', function () {
			promise.resolve();
		});
	},
	postNavigate: function(event, url) {
		var self = Damian;

		self.config.container.slideDown('normal');
		self.initPage(url);
	}
};
