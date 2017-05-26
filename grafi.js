$(document).ready(function(){
	//$("p").hide();
		var ctx = document.getElementById('myChart').getContext('2d');
		ctx.canvas.width = 1000;
		ctx.canvas.height = 400;
		
		var data = {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
				label: "My First dataset",
				// fillColor: "rgba(220,220,220,0.2)",
				// strokeColor: "rgba(220,220,220,1)",
				// pointColor: "rgba(220,220,220,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(220,220,220,1)",
				backgroundColor: "rgba(170, 224, 202,0.4)",
				data: [65, 59, 80, 81, 56, 55, 40]
				},
				{
				label: "My Second dataset",
				// fillColor: "rgba(151,187,205,0.2)",
				// strokeColor: "rgba(151,187,205,1)",
				// pointColor: "rgba(151,187,205,1)",
				// pointStrokeColor: "#fff",
				// pointHighlightFill: "#fff",
				// pointHighlightStroke: "rgba(151,187,205,1)",
				backgroundColor: "rgba(237, 180, 183,0.4)",
				data: [28, 48, 40, 19, 86, 27, 90]
				},
				{
				label: "My Third dataset",
				// fillColor: "rgba(255,153,0,0.4)",
				// strokeColor: "rgba(255,153,0,0.4)",
				// pointColor: "rgba(255,153,0,0.4)",
				// pointStrokeColor: "#103",
				// pointHighlightFill: "#a12",
				// pointHighlightStroke: "rgba(255,153,0,0.4)",
				backgroundColor: "rgba(153,255,51,0.4)",
				data: [18, 40, 31, 50, 10, 64, 20]
				}
			]
		};
		
		var myChart = new Chart(ctx, {
		  type: 'line',
		  data: data
		});
	
	
});