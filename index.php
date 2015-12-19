	<h1>The Ruda Family Blog</h1>
	<img class="widthSpanImg right" src="/images/isaac-standing-ywam-sign-2.jpg"  />
	<p itemscope itemtype="http://data-vocabulary.org/Person">
		Welcome to <span itemprop="name">The Ruda Family</span> Blog. Our story is a unique weave of toxic mold, living tiny and our faith moving us into Missions. This blog is a combination of the three, mainly because that’s who we are. We can’t really separate them.
	</p>
	<p>
		This story will start with Toxic Mold, but if you are dealing with it yourself, just remember our story doesn’t end there. We have had many people tell us to "write a book" about our recent episode with Toxic Mold.  We haven’t been able to do that yet but this is our start.  We Hope to have encouraging as well as helpful information in the mold help section.
	</p>
	<p>
		Once we started healing from the mycotoxins from the mold, we moved into a tiny home so that we could make sure we had no recurrences.  We had to simplify our diet, our finances, and our living space in order to heal. Simplicity is a kindness to the soul.  Therefore, the tiny house movement has made us smile. If you are interested in living tiny please feel free to contact us, we love chatting about living small.  It’s been so good to us.
	</p>
	<p>
		After our healing really started to take root…life just became clearer. Priorities lined up easily. Pain has a funny way of making our Faith obvious to ourselves.   When you face a darkness that  lies about it's origin you begin to question whether or not it really was from God. But then on the other side of it all...it becomes so clear.  Missions for us is simply the next step.  God is Good. He is so kind. So, if you would like to hear more on that, this is where we will tell that side of the story.
	</p>
	<span  class="articlesDate">Rachel</span>

<div id="homePagePop">
	<h2>WE HAVE A NEW SUPPORT PAGE</h2>
	<p style="text-align:center;">
		<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="258" height="338" title="Click Here to donate!" type="application/x-shockwave-flash"><param name="movie" value="//funds.gofundme.com/Widgetflex.swf" /><param name="quality" value="high" /><param name="flashvars" value="page=b1zte0&template=1" /><param name="wmode" value="transparent" /><embed allowScriptAccess="always" src="//funds.gofundme.com/Widgetflex.swf" quality="high" flashVars="page=b1zte0&template=1" type="application/x-shockwave-flash" wmode="transparent" width="258" height="338"></embed></object>
	</p>
</div>

<script>

	//Cookie Cutter Prototype
		var cookieProto = {
			create: function(key,val,exp) {
				var usrCookie = document.cookies;
				var cKey = key||"dsPOP";
				var cVal = val||"true";
				var cExp = exp || .5;

				//Set expiration
				var d = new Date();
				d.setTime(d.getTime() + (cExp*24*60*60*1000));
				cExp = "expires="+d.toGMTString();

				//set the cookie
				document.cookie = cKey + "=" + cVal + "; " + cExp;
			},
			get: function(key) {
				var cKey = key;
				var cAry = document.cookie.split("; ");
				for(x in cAry){
					var valAry = cAry[x].split("=");
					if(valAry[0]==cKey){
						var c = cAry[x].trim();
						cKey = cKey + "=";
						return c.substring(cKey.length,c.length);
					}
					//return "";
				}
			},
			remove: function(key) {
				var cKey = key||"dsPOP";
				document.cookie = cKey + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
			},
			check: function(){
				timeCounter++;
				if(timeCounter == 10){
					clearInterval(intTest);
					if(usrCookie.get("dsPop") != "true"){
						usrCookie.create("dsPop","true");
						window.open('/default.asp?page=xLeadPop','LeadPop','top=5,left=15,toolbar=0,menubar=0,scrollbars=1,status=0,resizable=1,width=610,height=750');
						return;
					}
					return;
				}
			}
		}


		//PopUp ON Exit
		var usrCookie = Object.create(cookieProto);
</script>
<script>

	if(!usrCookie.get("popUp")){
		//$.colorbox({html:$("#homePagePop").html()});
		//$.colorbox({html:"<div id='newsletterSignup'><iframe width='300' height='600' src='http://eepurl.com/Zrc69'></iframe></div>"})
		usrCookie.create("popUp","true");
	}

</script>
