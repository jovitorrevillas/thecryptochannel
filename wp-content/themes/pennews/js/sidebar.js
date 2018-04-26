jQuery(document).ready(function($){

	let postTitleSideContainer = $("<div></div>", {text: $(".entry-title.penci-entry-title").first().text(), class: 'post-title-sidebar'});

	let widgetContents = $("div.textwidget.custom-html-widget").prepend(postTitleSideContainer);
	// widgetContents.hide();


	$("h4.penci-block__title").css('cursor', 'pointer');
	$("h4.penci-block__title").click(function(){
		widgetContents.slideToggle();
	});

	$("h2").each(function(){

		function slugify(text)
		{
			return text.toString().toLowerCase()
				.replace(/\s+/g, '-')           // Replace spaces with -
				.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
				.replace(/\-\-+/g, '-')         // Replace multiple - with single -
				.replace(/^-+/, '')             // Trim - from start of text
				.replace(/-+$/, '');            // Trim - from end of text
		}
		let content = $(this).text();
		$(this).attr("id", slugify(content));

		let div = $("<div/>", {text: content});
		let linkTo = $("<a/>", {href: "#"+slugify(content)}).append(div);
		let listItem = $("<li/>").append(linkTo);

		let subList = $("<ul />", {class: "sublist"});
		let subListItems = $(this).nextUntil(document.getElementsByTagName("h2"),"h3").each(function(){
			let subText = $(this).text();
			let div = $("<div/>");
			
			let linkTo = $("<a/>", {href: "#" + slugify(subText), text: subText}).appendTo(div);

			$(this).attr("id", slugify(subText));

			$(this).on('scrollSpy:enter', function() {
				div.addClass('active');
				let ul = div.closest("ul").show();
				ul.closest("li").addClass('active');
			
			});

			$(this).on('scrollSpy:exit', function() {
				div.removeClass('active');
			});

			$(this).scrollSpy();

			subList.append($("<li />", {class: "sublist-item"}).append(div));
		});
		if(subListItems.length>0) listItem.append(subList);

		$(".page-content-list").append(listItem);

		$(this).on('scrollSpy:enter', function() {
			listItem.addClass('active');
			listItem.find("ul").show();
		});

		$(this).on('scrollSpy:exit', function() {
			listItem.removeClass('active');
			listItem.find("ul").hide();
		});

		$(this).scrollSpy({offset:{top: -10, bottom: 80}});
	});

});
