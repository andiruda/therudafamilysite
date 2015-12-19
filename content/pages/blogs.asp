<script>
var articles = {}
var ajaxObj = $.ajax({
		url:'/src/includes/sharedStdLib.asp?articles=blogs&req=dirlist',
			dataType: 'json'
		})

		ajaxObj.done(function(data){
			buildArticlesList(data);
		})
		
		ajaxObj.fail(function(data){
			console.log("failed")
		})

</script>

<h1>Blogs</h1>
<ul class="blogs"></ul>

