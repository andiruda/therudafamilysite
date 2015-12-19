<script>
var articles = {<%

Dim outJS, fso
articles = Array("newsletter")

For Each a In articles
	Set fso = CreateObject("Scripting.FileSystemObject")

	Set list = CreateObject("ADOR.Recordset")
	list.Fields.Append "name", 200, 255
	list.Fields.Append "date", 7
	list.Open

	'Get Server Path to Folders
	Dim vPath
	If a = "newsletter" Then
		vPath = Server.MapPath("\andiruda\blog\content\newsletter")
	ElseIf a = "blogs" Then
		vPath = Server.MapPath("\andiruda\blog\content\blogs")	
	Else
		vPath = Server.MapPath("\andiruda\blog\content\updates")
	End If	
		
	For Each f In fso.GetFolder(vPath).Files
	  list.AddNew
	  list("name").Value = f.Path
	  list("date").Value = f.DateLastModified
	  list.Update
	Next

	list.MoveFirst
	list.Sort = "date DESC"
	list.MoveFirst

	'output the JS
	outJS = outJS & "'" & a & "':{"
	Do Until list.EOF
	  Dim objKey: objKey = Mid(list("name").Value,(InStr(list("name").Value,a)+(Len(a)+1)))
	  objKey = Left(objKey,(Len(objKey) - 4))
	  Dim fDateLen: fDateLen = Len(list("date").Value)
	  Dim fDate: fDate = Left(list("date").Value, fDateLen - 11)
	  outJS = outJS & "'" & objKey & "':{'dateModified':'" & fDate & "','href':'/default.asp?content="& a & "&n=" & objKey & "'},"

	  'outJS = outJS & "'objKey':'" & objKey & "','" & "'article':'" & a & "'}," 
	  
	  list.MoveNext
	Loop
	outJS = Left(outJS,(Len(outJS)-1))
	outJS = outJS & "},"

	list.Close
Next
outJS = Left(outJS,(Len(outJS)-1))
Response.Write(outJS)
%>};
console.log(articles);

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

</script>
<h3>Newsletters</h3>
<ul class="newsletter"></ul>
<script>
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
</script>