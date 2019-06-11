$(function(){
				/*轮播图*/
				$.ajax({
					type:"get",
					url:"new_file.json",
					async:false,
					success:function(data){
						for (var s = 0 ; s < data.slider.length ; s++) {
							$(".swiper-wrapper").append('<div class="swiper-slide"><img src="'+data.slider[s]+'" /></div>')
						}
					}
				});
				var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal', // 垂直切换选项
			    loop: true, // 循环模式选项
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			    },
			    autoplay:true,
			 });
			/*轮播图-End*/
				
			/*新建元素*/
			
			/*获取json*/
				$.get("new_file.json",function(data){
				
					$.each(data.topitem,function(n,v){
							$(".navbar").append("<li class='top-item'>"+v+"</li>")
					});
					$.each(data.daohan, function(i,t) {
						$("<a></a>").html(t).appendTo($('.title-li1').eq(i))
					});
					
					$.each(data.daohan_3, function(i,t) {
						$("<a></a>").html(t).appendTo($('.title-li3'))
					});
					
					$("<img/>").attr('src',data.logo).appendTo($(".sellogo"))
					$("<a class='sellogo'></a>").appendTo($(".header-logo"));
					$("<p class='search-p'></p>").appendTo($(".suggest-box"));
					$(".hot-hd").html("<h2 class='tit'>"+data.tit+"</h2>")
					$.each(data.search_a, function(i,t) {
						$("<a class='search-a'></a>").html(t).appendTo($('.search-p'))
					});
					$.each(data.name_text, function(i,t) {
						$("<a></a>").appendTo($(".hot-list li").eq(i))
					});
					$.each(data.imgM1, function(i,t) {
						$("<div></div>").addClass("first-name").appendTo($(".hot-list li a").eq(i))
						$("<div></div>").addClass("imgbox").appendTo($(".hot-list li a").eq(i))
						$("<img />").attr("src",t).addClass("imgM1").appendTo($(".imgbox").eq(i))
					});
						$("<span></span>").addClass("name").appendTo($(".first-name"))
						$("<span></span>").addClass("much").appendTo($(".first-name"))
						
					$.each(data.name_text, function(i,t) {
						$(".name").eq(i).html(t)
					});
					$.each(data.much_text, function(i,t) {
						$(".much").eq(i).html(t)
					});
					$("<h2></h2>").addClass("tit").appendTo(".mod-box");
					$("<img />").attr("src",data.tit_img).addClass("xiangshigo").appendTo(".mod-box .tit");
					$(".mod-box .tit").append("|	 					");
					$("<span></span>").html("10:00场").appendTo(".mod-box .tit");
					$("<img />").attr("src",data.naoz).addClass("naoz").appendTo(".mod-box");
					$("<span></span>").addClass("end_").html("距结束").appendTo(".mod-box");
					$("<div></div>").addClass("countdown").appendTo(".mod-box");
					$("<div></div>").addClass("gengduo").appendTo(".mod-box");
					$("<a>更多</a>").addClass("indexmore").appendTo(".gengduo");
					$("<div></div>").addClass("center-mod").appendTo(".xs-buy-mod");
					$("<ul></ul>").addClass("center-ul").appendTo(".center-mod");
					$.each(data.cout_sj, function(i,t) {
						if (i%2 == 0) {
							$("<span class='cd'></span>").html(t).appendTo(".countdown")
						}else{
							$("<span class='colon'></span>").html(t).appendTo(".countdown")
						}
					});
					for (var l = 0 ; l < 4 ; l++) {
						var nli = $("<li></li>").addClass("center-li");
						var div1 = $("<div></div>").addClass("center-li-box");
						nli.append(div1);
						nli.appendTo(".center-ul");
						var div2 = $("<div></div>").addClass("box_img");
						div1.append(div2);
						var div2_a = $("<a></a>")
						div2.append(div2_a);
					}
					$.each(data.box_img, function(i,t) {
						$("<div></div>").addClass("box-text").appendTo($(".center-li-box").eq(i));
						$("<p></p>").addClass("text-name").appendTo($(".box-text").eq(i));
						$("<img/>").attr("src",t).appendTo($(".box_img a").eq(i));
					});
					$.each(data.box_text_name, function(i,t) {
						$(".text-name").eq(i).html(t)
					});
					$.each(data.box_text_much, function(i,t) {
						$("<p></p>").addClass("box-text-much").appendTo($(".box-text").eq(i));
						$(".box-text-much").eq(i).html(t)
					});
					
					
				});
				
});
//					$.each(data.search-a, function(i,t) {
//					$("<a></a>").html(t).appendTo($('.searchkey').eq(i))
//					});

					
				
//					$(".maxm1").attr("src",data.maxm1)
//					$(".s6").attr("src",data.s6)
//					$(".c1").attr("src",data.c1)
//					$(".xiangshigo").attr("src",data.xiangshigo)
//					
//					$(".naoz").attr("src",data.naoz)
//					$(".hot-hd").html("<h2 class='tit'>"+data.tit+"</h2>")
//					$.each(data.name_text, function(i,t) {
//						$(".name").eq(i).html(t)
//					});
//					$.each(data.much_text, function(i,t) {
//						$(".much").eq(i).html(t)
//					});
				
			
			
			
		