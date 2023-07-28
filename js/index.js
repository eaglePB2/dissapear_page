(function(){
	/* change these variables as you wish */
	var due_date = new Date('2023-01-01');
	var days_deadline = 365;
	/* stop changing here */
	
	var current_date = new Date();
	var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
	var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
	var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
	
	if(days > 0) {
		var days_late = days_deadline-days;
		var opacity = (days_late*100/days_deadline)/100;
			opacity = (opacity < 0) ? 0 : opacity;
			opacity = (opacity > 1) ? 1 : opacity;
		if(opacity >= 0 && opacity <= 1) {
			document.getElementsByTagName("BODY")[0].style.opacity = opacity;
		}
		
	}
	
    $('#clock').countdown('2023/12/31').on('update.countdown', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<span class="h1 font-weight-bold">%D</span> 天%!d'
          + '<span class="h1 font-weight-bold">%H</span> 小时'
          + '<span class="h1 font-weight-bold">%M</span> 分钟'
          + '<span class="h1 font-weight-bold">%S</span> 秒'));
      });
})()