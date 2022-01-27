var g_url_feed = "";
var g_api_key = "";
function feedLoaded(result)
{
  if (!result.error)
  {
	var container = document.getElementById("content");
	container.innerHTML = "";
	var ul = document.createElement("ul");
	container.appendChild(ul);
	for (var i = 0; i<result.feed.entries.length; i++)
	{
	  var entry = result.feed.entries[i];
	  var li = document.createElement("li");
	  var a = document.createElement("a");
	  a.href=entry.link;
	  a.title=entry.contentSnippet;
	  a.target="_blank";
	  li.appendChild(a);
	  a.innerHTML=entry.title;
	  ul.appendChild(li);
	}
  }
}
function OnLoad()
{
   var feed = new google.feeds.Feed(g_url_feed,{
	api_key : g_api_key,
	count : 5
});
  feed.load(feedLoaded);
}

function loadFeed(url,key)
{
  g_url_feed=url;
  g_api_key=key;
  google.load("feeds", "1");
  google.setOnLoadCallback(OnLoad);
}
