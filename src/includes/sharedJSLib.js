
function createHTML(passedObj){
	var elemObj = {"tag":"div",properties:{},"content":"&nbsp;"};
	elemObj.type = this.tag;
	elemObj.properties = this.attributes;
	elemObj.content = this.content;
	elemObj.markup = []
	
	var propsAry = [];
	for(key in elemObj.properties){
		propsAry.push(key.toLowerCase()+"='"+ elemObj.properties[key] + "'");
	}
	elemObj.properties = propsAry.join(" ");
	elemObj.markup.push("<"+elemObj.type+" ");
 	elemObj.markup.push(elemObj.properties+">");
	if(Object.prototype.toString.call(elemObj.content) === "[object Object]" ){
		elemObj.markup.push(createHTML.call(elemObj.content));
	}else if(Object.prototype.toString.call(elemObj.content) === "[object Array]" ){
		for(x in elemObj.content){
			elemObj.markup.push(createHTML.call(elemObj.content[x]));
		}
	}else{
		elemObj.markup.push(elemObj.content);
	}
	elemObj.markup.push("</"+elemObj.type+">");
	elemObj.markup = elemObj.markup.join("");
	return elemObj.markup;
}

function buildArticlesList(articles){
	for(z in articles){ 
		var markup = [];
		for(b in articles[z]){
			markup.push(createHTML.call({
				"tag":"li",
				content:[{
					"tag":"a",
					"attributes":{"class":"articlesLink","href":articles[z][b].href},
					"content":b
				},{
					"tag":"span",
					"attributes":{"class":"articlesDate"},
					"content":articles[z][b].dateModified
				}]
			}))
		}
		var markup = markup.join("");
		var $sel = "."+z;
		$($sel).html(markup);
	}
}
