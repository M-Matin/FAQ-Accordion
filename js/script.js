//accordion
//set some acction befor anything else
//define how accordion will be open: by clicking, hovering, or ...
var action= "click";
var speed= "500";

$(document).ready(function(){
  //action is variable defined in line 4
  $('li.q').on(action , function(){
    //this refer to question in any list which I select in prev line
    //.next is selecting anything after every question in any list, which here is targetting answers (li.a)
    $(this).next()
    .slideToggle(speed)
    .siblings('li.a')
    .slideUp()

  });
});
