$('p').each(function() {
    				var sentences = $(this).text().replace(/([^.!?]*[^.!?\s][.!?]['"]?)(\s|$)/g, 
                		 '<span class="sentence">$1</span>$2');
    				$(this).html(sentences);
				console.log(sentences):
				
				$('.sentence').on(function(){ 
					if(!items[n].message && items[n].webLabel.text.includes("uncertain")){
					
					var selDes = items[n];
					var textD = selDes.webLabel.text;
					if (textD){
						///find sentence with uncertain in it
						console.log(textD($(this).text()));
						
					}
					/////
					var textD = "Label: " + selDes.webLabel.text;
				var p = createP(textD)
				p.addClass("uncertain-des");

				p.id('des'+n);
				p.parent(wrapper);	
						console.log(selDes); 
	