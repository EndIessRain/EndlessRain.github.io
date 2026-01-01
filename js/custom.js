// 动态加载 APlayer 和 MetingJS
(function() {
  var loadScript = function(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
  };

  loadScript("https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js", function() {
    loadScript("https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js", function() {
      console.log("Music player loaded!");
    });
  });
})();