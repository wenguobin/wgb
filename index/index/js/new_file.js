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
						$("<a class='xiufu'></a>").html(t).appendTo($('.title-li1').eq(i))
					});
					
					$.each(data.daohan_3, function(i,t) {
						$("<a class='dl-zc'></a>").html(t).appendTo($('.title-li3'))
					});
					
					$("<a class='xiufu' class='sellogo'></a>").appendTo($(".header-logo"));
					$("<img/>").attr('src',data.logo).appendTo(".sellogo");
					$("<p class='search-p'></p>").appendTo($(".suggest-box"));
					$(".hot-hd").html("<h2 class='tit'>"+data.tit+"</h2>")
					$.each(data.search_a, function(i,t) {
						$("<a class='search-a'></a>").html(t).appendTo($('.search-p'))
					});
					$.each(data.name_text, function(i,t) {
						$("<a class='xiufu' href='#'></a>").appendTo($(".hot-list li").eq(i))
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
					$("<a class='xiufu' href='#'>更多</a>").addClass("indexmore").appendTo(".gengduo");
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
						var div2_a = $("<a class='xiufu'></a>")
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
						$("<p></p>").addClass("price").appendTo($(".box-text").eq(i));
						$("<b></b>").addClass("box-text-much").appendTo($(".price").eq(i));
						$(".box-text-much").eq(i).html(t)
					});
					$.each(data.del, function(i,t) {
						$("<del></del>").appendTo($(".price").eq(i));
						$("del").eq(i).html(t)
					});
					$.each(data.box_text_num, function(i,t) {
						$("<p></p>").addClass("info").appendTo($(".box-text").eq(i));
						$("<span></span>").addClass("box-text-num").appendTo($(".info").eq(i));
						$("<a class='xiufu' href='#'></a>").addClass("killbtn").appendTo($(".info").eq(i));
						$(".box-text-num").eq(i).html(t);
					});
					$.each(data.killbtn, function(i,t) {
						$(".killbtn").eq(i).html(t)
					});
					$("<div></div>").addClass("kill-quanbu-xiangshigo").appendTo(".center-mod");
					$("<a class='xiufu' href='#'></a>").appendTo(".kill-quanbu-xiangshigo");
						$("<img/>").attr("src",data.ckxiangshigo).appendTo(".kill-quanbu-xiangshigo a");
						$("<img/>").attr("src",data.ckxiangshigo2).addClass("shangqu").appendTo(".kill-quanbu-xiangshigo a");
					$("<div></div>").addClass("hot-sp").appendTo("body");
					$("<div></div>").addClass("mod-sp").appendTo(".hot-sp");
					$(".mod-sp").html("<h2 class='tit'>"+data.tit2+"</h2>");
					
					for(var i=0; i<5; i++){
						var odiv = $("<div></div>").addClass("part-mod");
						odiv.appendTo("body");
						
						var odiv2 = $("<div></div>").addClass("part-mod-son");
						odiv.append(odiv2);
						
						var odiv3 = $("<div></div>").addClass("div-img");
						odiv2.append(odiv3);
						
						var oaa = $("<a class='xiufu'></a>").addClass("aaaaa");
						odiv3.append(oaa);
						
						var oul =$("<ul></ul>").addClass("oul");
						odiv2.append(oul);
						
						var div4 =$("<div></div>").addClass("imgbox2")
						$(".oli").append(div4);
					}
					for(var i=0; i<4; i++){
						$(".oul").append(
							"<li class='oli'><a class='xiufu'><div class='imgbox3'></div><h4 class='proname'></h4><p class='proprice'></p></a></li>"
							)
					}
					$.each(data.img1, function(i,t){
						$(".aaaaa:eq("+i+")").append("<img src="+t+"/>");
					});
					$.each(data.imgbox3, function(i,t){
						$("<img/>").attr("src",t).appendTo($(".imgbox3").eq(i));
					})
					$.each(data.proname, function(i,t){
						$(".proname").eq(i).html(t)
					})
					$.each(data.proprice, function(i,t){
						$(".proprice").eq(i).html(t)
					})
					$("<div></div>").addClass("footer").appendTo("body");
					$(".footer").append("<div class='foot-bannerw'></div>");
					$(".foot-bannerw").append("<div class='foot-banner'></div>");
					$(".foot-banner").append("<div class='banner-item' style='width:33.333%'><a class='xiufu'><i class='icon'>7</i>7天无理由退货</a></div>");
					$(".foot-banner").append("<div class='banner-item' style='width:33.333%'><a class='xiufu'><i class='icon'>15</i>15天免费换货</a></div>");
					$(".foot-banner").append("<div class='banner-item' style='width:33.333%;border-right: none;'><a  class='xiufu'><i class='icon'>包</i>满99元包邮</a></div>");
					$(".footer").append("<div class='foot-center'></div>");
					$(".foot-center").append("<div class='foot-center-son'></div>");
					$(".foot-center-son").append("<dl class='foot-con'> <dt>帮助中心</dt> <dd><a></a></dd> <dd><a class='xiufu'></a></dd> <dd><a  class='xiufu'></a></dd> <dd><a  class='xiufu'></a></dd> <dd><a  class='xiufu'></a></dd></dl>");
					
					$(".foot-center-son").append("<dl class='foot-con'> <dt>售后服务</dt> <dd><a  class='xiufu'></a></dd> <dd><a class='xiufu'></a></dd> <dd><a class='xiufu'></a></dd> <dd><a class='xiufu'></a></dd></dl>");
					$.each(data.dldd, function(i,t){
						$(".foot-con dd a").eq(i).html(t);
					})
					$(".foot-center-son").append("<dl class='foot-con lxwm'> <dt>联系我们</dt> <dd>客服电话</dd> <dd><span class='call-number'>400-1555-360</span></dd> <dd class='call-time'>周一至周日 9:00-21:00<br>（仅收市话费）</dd> </dl>");
					$(".foot-center-son").append("<dl class='foot-con con-2'> <dd class='wxewm'> <p><a class='weixin' href='#'><img src='img/weixin.png'> <span class='erweima'><img src='img/二维码.png'></span></a></p> </dd> </dl>");
					$("body").append("<div class='footer-copyright'> <p>360会员商城©2019 360公司版权所有 京ICP备08010314号-43 京公网安备11000002000006号</p> </div>");
					$("body").append("<div class='slidebar'> <ul> <li class='yonghutiyan'><a>用户体验</a></li> <li class='topback'><a href='#'>返回顶部</a></li></ul></div>");
					
					$(".denlu").append("<div class='denlu-baozhu'></div>");
					$(".denlu-baozhu").append("<div class='denlu-gudin'></div>");
					$(".denlu-gudin").append("<div class='denlu-kaishi'></div>");
					$(".denlu-kaishi").append("<div class='denlu-box'></div>");
					$(".denlu-box").append("<div class='denlu-box_input'></div>");
					$(".denlu-box_input").append("<input class='mobile-number' placeholder='手机号' maxlength='11' />");
					$(".denlu-box").append("<div class='denlu-box2' style='height:60px;position:relative'></div>");
					$(".denlu-box2").append("<div class='denlu-box_input2'></div>");
					$(".denlu-box_input2").append("<input class='dx-yzm' placeholder='短信验证码'/>");
					$(".denlu-box2").append("<div class='denlu-hqyzm'></div>");
					$(".denlu-hqyzm").append("<span class='hqyzm-font'>获取验证码</span>");
					$(".denlu-box").append("<div class='denlu-button'></div>");
					$(".denlu-button").append("<input class='dl-btn' type='submit' value='登录'/>");
					$(".denlu-box").append("<div class='dl-bottom'><a class='zc' href='#'>快速注册</a> <a class='zhmm' href='#'>找回密码</a></div>");
					
					
					$(".zhdl").click(function(){
						$(".zhdl").css("color","#36b447")
						$(".dxdl").css("color","#000000")
						$(".mobile-number").attr('placeholder','手机号/用户名/邮箱')
						$(".dx-yzm").attr('placeholder',"密码");
						$(".denlu-hqyzm").css("display","none")
					})
					$(".dxdl").click(function(){
						$(".dxdl").css("color","#36b447")
						$(".zhdl").css("color","#000000")
						$(".mobile-number").attr('placeholder','手机号')
						$(".dx-yzm").attr('placeholder',"短信验证码");
						$(".denlu-hqyzm").css("display","block")
					})
					$(".tuichu").click(function(){
						$(".denlu").css("display","none");
						$(".dabeijing").css("display","none")
					})
					$(".dl-zc").click(function(){
						$(".denlu").css("display","block");
						$(".dabeijing").css("display","block")
					})
					var i = 0;
					setInterval(function(){
					 	var hlhs = parseInt(Math.random()*255);
					 	var hlhs2 = parseInt(Math.random()*255);
					 	var hlhs3 = parseInt(Math.random()*255);
					 	var col = "rgb("+hlhs+","+hlhs2+","+hlhs3+")"
					 	$(".zc").css("color",col);
					 	$(".zhmm").css("color",col)
					 	i++;
					},50)
					
					$(".xiufu").click(function(){
						alert("没写就对了");
					})
				}); 
});
				
			
			
			
		