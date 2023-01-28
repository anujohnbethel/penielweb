var livedetail = [
    {
        "date": "15",
        "month": "April",
        "hour": "06",
        "minute": "30",
        "amorpm": "AM",
        "url": "qjeMrqeSaps"
        }
  ];

window.addEventListener('load', function() {
    var out='<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/qjeMrqeSaps?controls=0" title="YouTube video player" frameborder="0" modestbranding="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture " allowfullscreen></iframe>'
    // var out = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/';
    // out=out + livedetail[0].url;
    // out=out + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    // var i;
    // for(i = 0; i < arr.length; i++) {
    //   out += '<a href="' + arr[i].url + '">' + 
    //   arr[i].display + '</a><br>';
    // }
    document.getElementById("liveurl").innerHTML = out;

  });