jQuery(document).ready(function($){

	let postTitleSideContainer = $("<div></div>", {text: $(".entry-title.penci-entry-title").first().text(), class: 'post-title-sidebar'});
	
	let otherPostTitles = $("div.custom-html-widget:eq(0)").delay(100).slideDown(250);
	let widgetContents = $("div.textwidget.custom-html-widget").prepend(postTitleSideContainer);
	widgetContents.hide();
	
	
	
	
	let isCalled = false;
	let sectionGuide  = $("h4.penci-block__title_section");
	let pageContent = $("h4.penci-block__title");
	//PHILIP--------------------------------------------------------------------------
		sectionGuide.prepend('<i id="section" class="fa fa-arrow-circle-o-down" aria-hidden="true"></i>');
		pageContent.prepend('<i id="page-i" class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>');
		let icon = $('#section');
		let page = $('#page-i');
		icon.css({'color' : 'rgb(250, 191, 44)','margin-right' : '10px'});
		page.css({'color' : 'rgb(250, 250, 250)','margin-right' : '10px'});
	

	//END FUNC PHILIP--------------------------------------------------------------------------
	sectionGuide.on('scrollSpy:exit', function(){
		if(!isCalled){
			otherPostTitles.slideUp(function(){
				icon.toggleClass('fa fa-arrow-circle-o-right fa fa-arrow-circle-o-down');
				icon.css('color','rgb(250, 250, 250)'); //white
				
				page.toggleClass('fa fa-arrow-circle-o-down fa fa-arrow-circle-o-right');
				page.css('color','rgb(250, 191, 44)'); //yellow
			});
			
			widgetContents.slideDown();
			isCalled = true;
		}
	});

	
	sectionGuide.scrollSpy();
	
	$("h4.penci-block__title").css('cursor', 'pointer');
	$("h4.penci-block__title, h4.penci-block__title_section").click(function(){
		otherPostTitles.slideToggle(function(){
			icon.toggleClass('fa fa-arrow-circle-o-right fa fa-arrow-circle-o-down');
			page.toggleClass('fa fa-arrow-circle-o-down fa fa-arrow-circle-o-right');
			
			if(icon.css('color') == 'rgb(250, 191, 44)'){
				icon.css('color','rgb(250, 250, 250)');
			}else{
				icon.css('color','rgb(250, 191, 44)');
			}
			
			console.log(page.css('color'));
			if(page.css('color') == 'rgb(250, 250, 250)'){
				page.css('color','rgb(250, 191, 44)');
			}else{
				page.css('color','rgb(250, 250, 250)');
			}
		});
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
