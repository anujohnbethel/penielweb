var eventslist =  [
  {
      "Date":31 ,
      "Month": "Jan",
      "Day": "Tue",
      "Title": "Bible Study",
      "Place": "Via Zoom",
      "Pastor": "Pr. Biju George"
  },
  {
      "Date": 1,
      "Month": "Feb",
      "Day": "Wed",
      "Title": "Telugu Meeting",
      "Place": "Via Zoom",
      "Pastor": "Pr. Biju George"
  },
  {
      "Date": 2,
      "Month": "Feb",
      "Day": "Fri",
      "Title": "Fasting Prayer",
      "Place": "BCCA, Beaumont",
      "Pastor": "Pr. Biju George"
  },
  {
      "Date": 3,
      "Month": "Feb",
      "Day": "Fri",
      "Title": "Men's Prayer",
      "Place": "",
      "Pastor": ""
  },
  {
      "Date": 4,
      "Month": "Feb",
      "Day": "Sat",
      "Title": "Tarry Meeting",
      "Place": "BCCA, Beaumont",
      "Pastor": "Pr. Biju George"
  }      
];

window.addEventListener('load', function() {
    
    // var out = '<iframe width="100%" height="450px" src="https://www.youtube.com/embed/';
    // out=out + livedetail[0].url;
    // out=out + '" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    // var i;
    // for(i = 0; i < eventslist.length; i++) {
    //   out += '<a href="' + arr[i].url + '">' + 
    //   arr[i].display + '</a><br>';
    // }

   // Event 1


    document.getElementById("date1").innerHTML = eventslist[0].Date + '<br><span  >'+eventslist[0].Month+'</span><br><span   >'+eventslist[0].Day+'</span>'
    document.getElementById("event-title1").innerHTML = eventslist[0].Title;
    document.getElementById("event-other-detail1").innerHTML =  'Place :   '+eventslist[0].Place+'<br>Message By : '+eventslist[0].Pastor;

    
   // Event 2
   document.getElementById("date2").innerHTML =  eventslist[1].Date + '<br><span  >'+eventslist[1].Month+'</span><br><span   >'+eventslist[1].Day+'</span>'
   document.getElementById("event-title2").innerHTML = eventslist[1].Title;
    document.getElementById("event-other-detail2").innerHTML =  'Place :   '+eventslist[1].Place+'<br>Message By : '+eventslist[1].Pastor;

   
   // Event 3
   document.getElementById("date3").innerHTML = eventslist[2].Date + '<br><span  >'+eventslist[2].Month+'</span><br><span   >'+eventslist[2].Day+'</span>'
   document.getElementById("event-title3").innerHTML = eventslist[2].Title;
   document.getElementById("event-other-detail3").innerHTML =  'Place :   '+eventslist[2].Place+'<br>Message By : '+eventslist[2].Pastor;
  
   
   // Event 4
   document.getElementById("date4").innerHTML = eventslist[3].Date + '<br><span  >'+eventslist[3].Month+'</span><br><span   >'+eventslist[3].Day+'</span>'
   document.getElementById("event-title4").innerHTML = eventslist[3].Title;
   document.getElementById("event-other-detail4").innerHTML =  'Place :   '+eventslist[3].Place+'<br>Message By : '+eventslist[3].Pastor;
  

   
   // Event 5
   document.getElementById("date5").innerHTML = eventslist[4].Date + '<br><span  >'+eventslist[4].Month+'</span><br><span   >'+eventslist[4].Day+'</span>'
   document.getElementById("event-title5").innerHTML = eventslist[4].Title;
   document.getElementById("event-other-detail5").innerHTML =  'Place :   '+eventslist[4].Place+'<br>Message By : '+eventslist[4].Pastor;

  });