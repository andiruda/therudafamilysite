
<script>
var articles = {}
var ajaxObj = $.ajax({
		url:'/src/includes/sharedStdLib.asp?req=dirlist',
			dataType: 'json'
		})

		ajaxObj.done(function(data){
			buildArticlesList(data);
		})
		
		ajaxObj.fail(function(data){
			console.log("failed")
		})

</script>

<h1>Articles</h1>
<h3>Newsletters</h3>
<ul class="newsletter"></ul>
<h3>Blogs</h3>
<ul class="blogs"></ul>
<h3>Updates</h3>
<ul class="updates"></ul>