/*
	Game Name: TAP 2 TAP
	Developed By Rajkumar Dhinge
	Some rights reserved 2015 
*/
		
		var flag=0; 
		var temp=0; /*Random No.*/
		var speed=2000; /*Speed*/
		var money=0;
		var score=0;/*-SCORE time trace-*/
		var condition='even';var newcondition='odd';var temp=''; /*Swap Even/Odd variables*/
		var action='pause'; newaction='resume';
		var flg=' ';
		var i=0;
		var ups=5;
		var life="<img src='art/life.gif' alt='<3 ' width=4%>";
		var glife=' ';
		var deadby=0;
		var time=0;
		var send='false';
		var name=' ';
		
		for(i=0;i<ups;i++){
				glife=glife+life;
			}
			
		
		/*--------------------  random Number code (1-100) ----------------------------*/
		function startTime() {
			time=time+1;
			
			document.getElementById("death").innerHTML =deadby;
			temp=Math.floor((Math.random() * 10) + 1);
			
			
			
			if(temp!=2)
			{
				document.getElementById("rand").innerHTML ="<center><h1 style='color:blue;'>"+temp+"</h1></center>";  /*RANDOM NO. Display*/
			}
			else{
					if(condition=='even')
					{
						document.getElementById("rand").innerHTML ="<center><h1><img src='art/life.gif' alt='image not found' width=15%></h1></center>";  /*BONUS*/
					}					
			}
			quota();
			
			if(action=='resume')
			{
				setTimeout(startTime, speed); /* Speedometer*/
				flag=0;/*Score Board multiple score handler*/
			}
			
	
			/*MENU/SCOREBOARD PRINTING*/
			document.getElementById('menu').innerHTML ="<msize><span id=center>Life Status: <span id=life></span></span> <span class=left>Money:"+money+" <img src='art/coin.gif' alt='image not found' width=15%></span><span class=right>Hits:"+score+"<img src='art/dancedog.gif' alt='image not found' width=15%></span></msize>";
			document.getElementById("life").innerHTML=glife;
			document.getElementById("time").innerHTML=time;	
			document.getElementById("hits").innerHTML=score;	
			document.getElementById("money").innerHTML=money;	
		
		}
		/*-----------------------------------------------------------------------------*/
				
		function gswitch(){
			temp=action;
			action=newaction;
			newaction=temp;
			
			if(action=='resume')
			{
				send='true';
				/*RESET*/money=0;score=0;speed=2000;complex=0;time=0; 
				startTime();
			}else if(action=='pause'){
				speed=speed/1000;
				if(send=='true'){
					
					send=scoreUpdate(name,money,time,score,speed,deadby);
					
				}
				send=='false';
			}
		}
		
		/*-----------------------------AJAX--------------------*/
	
function scoreUpdate(name,money,time,hits,speed,deadby) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("ajax").innerHTML = xmlhttp.responseText;
            }
        };
		time=time+1;
        xmlhttp.open("GET", "update.php?name="+name+"&money="+money+"&time="+time+"&hits="+hits+"&speed="+speed+"&deadby="+deadby, true);
        
		xmlhttp.send();
    
}

function leader() {
    
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("leader").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "leader.php", true);
        
		xmlhttp.send();
    
}


function scoreboard() {
    
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("scoreboard").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "scores.php", true);
        
		xmlhttp.send();
    
}

	/*////////////////////////---------------------------*/
		function getName(){
			name = document.getElementById("name").value;
			document.getElementById("user").innerHTML = name;
			if(name=='' ){
				name="Anonymous";
			}
			document.getElementById('user').innerHTML=name;
		}	
		
		
		function quota(){
			
			/*MENU/SCOREBOARD PRINTING*/
			document.getElementById('menu').innerHTML ="<msize><span id=center>Life Status: <span id=life></span></span> <span class=left>Money:"+money+" <img src='art/coin.gif' alt='image not found' width=15%></span><span class=right>Hits:"+score+"<img src='art/dancedog.gif' alt='image not found' width=15%></span></msize>";
			document.getElementById("life").innerHTML=glife;
			document.getElementById("time").innerHTML=time;	
			document.getElementById("hits").innerHTML=score;	
			document.getElementById("money").innerHTML=money;	
			
			/*Life Management*/
			if(temp%2==0){
				if(ups<=0){
					end();
					glife="Dead <img src='art/dead.gif' alt='GAME OVER' width=7%>"
					replaceContentInContainer('board', 'gameover');	
					gswitch();
				}else{
					{
						ups=ups-1;
					}
					
					heart(ups);
					if(glife==' '){
						glife="CRITICAL<img src='art/critical.png' alt=' ' width=4%>";
					}
				}
			}else{
					
					heart(ups);
					
					if(glife==' '){
						glife="CRITICAL<img src='art/critical.png' alt=' ' width=4%>";
					}
					document.getElementById("life").innerHTML=glife;
			}
			
		}
		
		
		
		/*////////////////////////////////////////LOGIC*/
		function check(){    /*  Correct Tap */
		
			if (temp % 2 == 0){ 
			
			/*Even Number */ 		
			
			/*flag to handle multiple score increment on single tap*/
				if(condition=='even'){
					if(flag==0){
						if(temp==2) /*BONUS*/{
							if(ups<7){
								ups=10;
								heart(ups);
								}
							money=money+5;
							flag=1;
											document.getElementById('1up').play();

						}else{
							hit();
							if(ups<7){
								ups=ups+3;
								heart(ups);
							}
							money=money+4;score++;flag=1;		
							/*God Speed*/
							if(speed>=200){
								speed=speed-50;    /*  Speed INCERMENT*/
							}
						}	
					}
					quota();
				}else{
					db();
					ups=ups/2;
					deadby=temp;
					gswitch();
			}
			}
			else{ 
				db();
				deadby=temp;
				ups=ups/2;
			}
			quota();
		}
	/*////////////////////////---------------------------*/
	
	
	



	/*--------------NAVIGATION FUNCTION-----------------*/
	function replaceContentInContainer(target, source) {
        document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
    
	/*--//////////////////////////////////////////////--*/
	}
	
	function heart(ups){
	glife=' ';
		for(i=0;i<=ups;i++){
				glife=glife+life;
			}
	}
	
	
	
	/*-----------SFX-----------------*/
	
	function hit(){
				document.getElementById('hit').play();
	}
	
	function db(){
				document.getElementById('dead').play();
				document.getElementById('dbonus').play();
	}
	
	
	function end(){
				document.getElementById('hit').play();
				document.getElementById('dead').play();
				document.getElementById('gmusic').pause();
				document.getElementById('end').play();
	}
	
	
	/*--------------------------------*/