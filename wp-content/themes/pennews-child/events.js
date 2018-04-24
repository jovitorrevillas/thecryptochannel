(function($S){

		let load = {
			countries : function(url){
				
				jQuery.get(url,function(data){
					
						let html = "";
						jQuery.each(data, function(k,v){
							html+= '<option value="'+v.name+'">'+v.name+'</option>';
						});
						
						jQuery("#country_mb_opt").after(html);
					
				});
			},
			
			cities : function(country){
				let url = "https://restcountries.eu/rest/v2/name/"+country;
				
				jQuery.get(url,function(data){
						let html = "";
						
						jQuery.each(data, function(k,v){
							html+= '<option value="'+v.capital+'" >'+v.capital+'</option>';
						});
						jQuery("#city_mb_opt").html(html);
					
				});
			}
		}
		// Load countries in dropdown
		load.countries("https://restcountries.eu/rest/v2/all?fields=name;");
		
		// Load cities in dropdown if country list is changed
		jQuery("#country_mb").change(function(){
			let selected = jQuery("#country_mb option:selected").text();
			load.cities(selected);
		});
		

})(jQuery);