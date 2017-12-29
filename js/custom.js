$(document).ready(function(){

	isIE();
	
    var projectUrl = "";
    $('.portfolio-box').click(function(){
        projectUrl = $(this).attr("aria-label");
    });

    //모달이 보여질 때, 보여질 내용을 로드하는 스크립트
    $('#projectModal').on('show.bs.modal', function(e){
		if(projectUrl.length <= 3) {
			$(".contents").load("assets/projects/term/" + projectUrl + ".html");
		} else {
			$(".contents").load("assets/projects/other/" + projectUrl + ".html");
		}
    });

    $(".custom-open-table").click(function(){
        if($("#profile").css("display")!="none"){
            $("#profile").fadeOut("slow");
            $(this).find(".fa-hand-o-right").removeClass("fa-hand-o-right").addClass("fa-hand-o-down"); 
        } else {
            $("#profile").fadeIn("slow");
            $(this).find(".fa-hand-o-down").removeClass("fa-hand-o-down").addClass("fa-hand-o-right");  
        }
    });
    
    $(".custom-open-timeline").click(function(){
        if($("#timeline").css("display")!="none"){
            $("#timeline").fadeOut("fast");
            $(this).find(".fa-hand-o-right").removeClass("fa-hand-o-right").addClass("fa-hand-o-down");    
        } else {
            $("#timeline").fadeIn("fast");
            $(this).find(".fa-hand-o-down").removeClass("fa-hand-o-down").addClass("fa-hand-o-right");  
        }
    });
	
	$("#activity").on('show.bs.collapse', function(e){
		var target = "a[href='#" + e.target.id + "']";
		$(target).find(".fa-angle-double-down").removeClass("fa-angle-double-down").addClass("fa-angle-double-up");
		
		var imgTarget = "#" + e.target.id + "-img";
		$(imgTarget).carousel('cycle');
	});
	
	$("#activity").on('hide.bs.collapse', function(e){
		var target = "a[href='#" + e.target.id + "']";
		$(target).find(".fa-angle-double-up").removeClass("fa-angle-double-up").addClass("fa-angle-double-down");
		var imgTarget = "#" + e.target.id + "-img";
		$(imgTarget).carousel('pause');
	});

});

//IE 체크 스크립트
function isIE(){
	var agent = navigator.userAgent.toLowerCase();
	
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
		alert("해당 페이지는 Internet Explorer를 지원하지 않습니다.\nChrome이나 Edge를 사용하여 접속해주세요.");
		self.close();
	}
}