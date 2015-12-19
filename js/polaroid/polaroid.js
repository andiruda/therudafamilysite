(function( $ ) {
	
	$.fn.polaroid = function( options ) {
		//set the defaults
		var settings = {
			style	: 'style1',
			combined: true			
		};
		var options = $.extend(settings,options);			
		
			//perform for each element in the page that calls this plugin
		return this.each(function(){
			//GET ORIGINAL IMAGE
				var origImage = $(this);
				var caption = origImage.attr('title');
				var imageLoc = origImage.attr('src');
				var origWidth = origImage.width();
				var origHeight = origImage.height();
				if(origWidth==origHeight){ var whRatio = {'ratio':1,'bigger':'same'}; }
				else{ var whRatio = (origWidth>origHeight)?{'ratio':origWidth/origHeight,'bigger':'width'}:{'ratio':origHeight/origWidth,'bigger':'height'}; }
	
		//decide which style to use
		if(options.style == 'style1'){
				
				//set polaroid type
					var pLoc = 'js/images/polaroid-blank.png';

				//set dimension relative to quility of background border image -MAX 175w x 175h
					var maxW = 174;
					var maxH = 178;
					var maxDiff = .022;
					var wConstPer = .87;
					var hConstPer = .73;
		};
		if(options.style == 'style2'){

				//set polaroid type
					var pLoc = 'js/images/polaroid-blank2.png';

				//set dimension relative to quility of background border image -MAX 204w x 265h
					var maxW = 204;
					var maxH = 265;
					var maxDiff = .23;
					var wConstPer = .857;
					var hConstPer = .889;
					caption = '';
		};
								
			//Scaling logic
				if(origWidth > maxW && origHeight > maxH ){
//console.log('\ncase1');
					if(whRatio.bigger == "height"){
						width = maxW; 
						height = maxH; 
						if((origWidth/origHeight) <= (1-maxDiff)){
							var bgSizeSet = width + 'px ' + (width*whRatio.ratio) + 'px';
							}
						else{
							var bgSizeSet = (height*(origHeight/origWidth)) + 'px ' + height + 'px';
							}
						}
					else {
						height = maxH; 
						width = maxW;  
						var bgSizeSet = (height*whRatio.ratio) + 'px ' + height + 'px';				
						}
					var liW = (maxW/wConstPer);
					var liH = (maxH/hConstPer);
	
					}
				else if(origHeight < maxH && origWidth < maxW ){ 
 //1236
//console.log('\ncase2');
					if(whRatio.bigger == "height"){
//console.log('\ncase2-a');
//6
						width = origWidth;
						height = width/(1 - maxDiff);
						var bgSizeSet = width + 'px ' + (width*whRatio.ratio) + 'px';
						}
					else{
//123						
//console.log('\ncase2-b');
						height = origHeight;
						width = origHeight-(origHeight*maxDiff);
						var bgSizeSet = (height*whRatio.ratio) + 'px ' + height + 'px';
						}
					if(options.style=="style2" && whRatio.bigger == "same"){
						height = origHeight;
						width = origWidth-(origHeight*maxDiff);
						var bgSizeSet = (height*whRatio.ratio)+'px '+height+'px';
						var liH = (height/hConstPer);
						var liW = (width/wConstPer);
					}
					else{
						var liW = (width/wConstPer);
						var liH = (height/hConstPer);
					}
					}
				else {
//457					
//console.log('\ncase3')
					if(whRatio.bigger == "height" || origHeight == origWidth){					
						var xWidth = (origWidth > maxW)?maxW:origWidth;
						height = xWidth;
						width = xWidth*(1-maxDiff);
						var bgSizeSet = width + 'px ' + (width*whRatio.ratio) + 'px';
						}
					else{
//457						
						yHeight = (origHeight > maxH)?maxH:origHeight;
						width = yHeight*(1-maxDiff);
						height = yHeight;
						var bgSizeSet = (height*whRatio.ratio) + 'px ' + height + 'px';
						}
					var liW = (width/wConstPer);
					var liH = (height/hConstPer);
						
					}

//console.log('ORIGINAL origWidth = '+origWidth+' | origHeight = '+origHeight);
//console.log('DIV width = '+width+' | height = '+height + ' | Ratio: ' + (width/height));
//console.log('ORIGINAL whRatio: '+ whRatio.bigger + ' | ' + whRatio.ratio);
//console.log('DIV bgSizeSet = ' + bgSizeSet);
//console.log('LI POLAROID width= ' + liW + ' | height = ' + liH + ' | Ratio: ' + (liW/liH));
//console.log('Ratio should be: ' + maxW + '/' + maxH);

			//set picture margins to center photo
				var divMarginLR = (liW-width)/2;
				var divMarginTB = divMarginLR;
				var setMargin = divMarginTB+'px '+divMarginLR+'px';
				
			//CREATE UNIQUE ID FOR THIS ITEM					
				var ID = imageLoc.slice(imageLoc.lastIndexOf('/')+1,imageLoc.lastIndexOf('.'));
				ID = ID.replace('(','').replace(')','').replace('%20','').replace('-','');

			//SET SOME VARIABLES
				var RandomInt = randomFromTo(1,9);
				var LIStyle = 	'z-index:5;-webkit-transform:rotate('+ RandomInt + 'deg);-moz-transform: rotate('+ RandomInt + 'deg); width:'+ liW +'px;height:'+ liH +'px;';

			//CREATE UL WRAP
				if($('.polaroids'+options.style).length == 0){
					if(options.combined == true){
						$('<ul class="polaroids'+options.style+'"></ul>').replaceAll(origImage);
					}
					else{
						$('<ul class="polaroids'+options.style+'"><li class="polaroidLi" id="li_'+ID+'" style="' + LIStyle + '"></li></ul>').replaceAll(origImage);
					}
				}
				else if(options.combined == false){
					$('<ul class="polaroids'+options.style+'"><li class="polaroidLi" id="li_'+ID+'" style="' + LIStyle + '"></li></ul>').replaceAll(origImage);
				}
				
			//WRAP DIV CONTAINER LI
				if(options.combined == true){
					$('.polaroids'+options.style).append('<li class="polaroidLi" id="li_'+ID+'" style="' + LIStyle + '"></li>');
				}

			//Build out the DIV poloroid image
			//REPLACE THE IMAGE WITH A DIV CONTAINER
		    var ver = getInternetExplorerVersion();
			//IE DOESN'T SUPPORT BACKGROUND SIZE IN VERSIONS > 8.0 
			if(ver == -1 || ver > 8){
				$('#li_'+ID).html('<div class="polaroidPhoto" id="'+ID+'"></div>'+caption);
				//SET DIV CONTAINER STYLES
					var newImage = $('#'+ID);
					newImage.css({
							 'filter'				:'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+pLoc+'", sizingMethod="scale")',
							 '-ms-filter'			:"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+pLoc+"', sizingMethod='scale')",
							 'background-image'		:'url("'+imageLoc+'")',
							 'background-size'		:bgSizeSet,
							 'width'				:width, //-(width*.15) width = 12.5%
							 'height'				:height, //-(height*.15) = 27%
							 'background-location'	:'center top',
							 'background-repeat'	:'no-repeat',
							 'margin'				:setMargin
					});	
			}
			//FOR IE 8.0 AND LESSER
			else{
				var picDimensions = bgSizeSet.split(" ");
				var wrapperMargins = setMargin.split(" ");
				$('#li_'+ID).css({backgroundImage:'none'}).html('<div style="positon:relative;width:'+liW+'px;height:'+liH+'px;">'+
																	'<img style="left:1px;top:1px;position:absolute;width:'+liW+'px;height:'+liH+'px;" src="/js/images/polaroid-blank.png" />'+
																	'<div class="iePolaroidImageWrapper" style="position:absolute;top:'+wrapperMargins[0]+';left:'+wrapperMargins[1]+';width:'+width+'px;height:'+height+'px;overflow:hidden">'+
																		'<img class="polaroidPhoto" src="'+imageLoc+'" style="position:absolute;width:'+picDimensions[0]+';height:'+picDimensions[1]+';top:0;left:'+(width - Number(picDimensions[0].replace('px','')))/2+'px;" id="'+ID+'" />'+
																	'</div>'+
																'</div>'+caption);		
			}	//margin:'+setMargin+';
				
				
			//Remove orig from the DOM
				$('').replaceAll(origImage);		
				
			});		
	
	};

})( jQuery );

function getInternetExplorerVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function randomFromTo(from, to){
       return Math.floor(Math.random() * (to - from + 1) - from);
}