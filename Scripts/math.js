
var imgscale = 1;

var browserVersion = "";
 function checkBrowser() { 
 /*
	try {
          	var navUserAgent = navigator.userAgent;
var browserName  = navigator.appName;
var browserVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var tempNameOffset,tempVersionOffset,tempVersion;


if ((tempVersionOffset=navUserAgent.indexOf("Opera"))!=-1) {
 browserName = "Opera";
 browserVersion = navUserAgent.substring(tempVersionOffset+6);
 if ((tempVersionOffset=navUserAgent.indexOf("Version"))!=-1) 
   browserVersion = navUserAgent.substring(tempVersionOffset+8);
} else if ((tempVersionOffset=navUserAgent.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 browserVersion = navUserAgent.substring(tempVersionOffset+5);
} else if ((tempVersionOffset=navUserAgent.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 browserVersion = navUserAgent.substring(tempVersionOffset+7);
} else if ((tempVersionOffset=navUserAgent.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 browserVersion = navUserAgent.substring(tempVersionOffset+7);
 if ((tempVersionOffset=navUserAgent.indexOf("Version"))!=-1) 
   browserVersion = navUserAgent.substring(tempVersionOffset+8);
} else if ((tempVersionOffset=navUserAgent.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 browserVersion = navUserAgent.substring(tempVersionOffset+8);
} else if ( (tempNameOffset=navUserAgent.lastIndexOf(' ')+1) < (tempVersionOffset=navUserAgent.lastIndexOf('/')) ) {
 browserName = navUserAgent.substring(tempNameOffset,tempVersionOffset);
 browserVersion = navUserAgent.substring(tempVersionOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}

// trim version
if ((tempVersion=browserVersion.indexOf(";"))!=-1)
   browserVersion=browserVersion.substring(0,tempVersion);
if ((tempVersion=browserVersion.indexOf(" "))!=-1)
   browserVersion=browserVersion.substring(0,tempVersion);

browserVersion = "Browser: BrowserName = " + browserName + "\n" + "Version = " + browserVersion;
}
catch {
	browserVersion = "Browser: not able to detect.";
}*/
	browserVersion = "Browser: not able to detect.";
	return browserVersion;
} 


function showDiv(e, hgt) {
	e.style.display = "block";
	e.style.height = hgt + "px";
    //animateElement(e, "expand", 400, hgt);
}

function hideDiv(e, hgt) {
	e.style.display = "none";
    //animateElement(e, "collapse", 400, hgt);
}

function animateElement(e, action, speed, hgt) {
    // if the action is collapse, do the collapse...
    if (action == "collapse") {
        $(e).animate({
            height: "0px"
        }, {
                duration: speed
            });
    }
    // else check for an expand...
    else if (action == "expand") {
        $(e).animate({
            height: hgt
        }, {
                duration: speed
            });
    }
}
// Calculator

var working = "";
var newworking = false;
 var clearcalc = false;
 
 //function that display value 
         function disn(val) 
         { 
			newworking = true;
			if ( clearcalc ) {
				clearcalc = false;
				clr();
			}
             document.getElementById("result").value+=val 
         } 
		 
		 function disop(val) 
         { 
			newworking = true;
			clearcalc = false;
             document.getElementById("result").value+=val 
         } 
           
         //function that evaluates the digit and return result 
         function solve() 
         { 
             var x = document.getElementById("result").value ;
             var y = eval(x) 
			 
			 if ( newworking ) {
				working = working + document.getElementById("result").value + " = " + parseFloat(y.toFixed(5)) + "<br>";
				working = working.replace("/","&#247;"); 
				newworking = false;
			 }
			 
			 document.getElementById("result").value = parseFloat(y.toFixed(5));
			 
			 clearcalc = true;
         } 
		 
		 function fsolve() 
         { 
             var x = document.getElementById("result").value 
             var y = eval(x) 
			 
             document.getElementById("result").value = parseFloat(y.toFixed(5));
			 
			 clearcalc = true;
         } 
           
         //function that clear the display 
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 
		 
		 var calcextended = 0;
		 function doExt() {
			if ( calcextended == 0 ) {
				document.getElementById("calculatorholder").style.height = "500px";
				document.getElementById("calctable").style.height = "300px";
				document.getElementById("examquestiontext").style.fontSize = "14px";
				document.getElementById("calcbtn1").value = "HIDE";
				calcextended = 1;
			}
			else  if ( calcextended == 1) {
				document.getElementById("calculatorholder").style.height = "65px"
				document.getElementById("calctable").style.height = "200px";
				document.getElementById("examquestionholder").style.top = "80px"
				document.getElementById("examquestionholder").style.height = "445px";
				document.getElementById("examquestiontext").style.height = "375px";
				document.getElementById("examquestiontext").style.fontSize = "18px";
				document.getElementById("calcbtn1").value = "NORM";
				
				calcextended = 2;
			}
			else  if ( calcextended == 2) {
				document.getElementById("calculatorholder").style.height = document.getElementById("buttondiv").style.height;
				document.getElementById("calctable").style.height = "200px";
				document.getElementById("examquestionholder").style.top = "215px";
				document.getElementById("calctable").style.height = "200px";
				document.getElementById("examquestionholder").style.height = "310px";
				document.getElementById("examquestiontext").style.height = "240px";
				document.getElementById("examquestiontext").style.fontSize = "14px";
				document.getElementById("calcbtn1").value = "FULL";
				calcextended = 0;
			}
		 }
		 
		 function xsqr() {
			
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					document.getElementById("result").value = parseFloat(Math.pow(x,2).toFixed(5));
					
					if ( newworking ) {
						working = working + document.getElementById("result").value + " = SQUARE(" + x + ")<br>";
						working = working.replace("/","&#247;"); 
						newworking = false;
					}
				}
			
		 }
		 
		 function sqrt() {
			
				newworking = true;
				
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					if ( Number(x) > 0 ) {
						document.getElementById("result").value = parseFloat(Math.sqrt(x).toFixed(5));
						
						if ( newworking ) {
							working = working + document.getElementById("result").value + " = SQROOT(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = false;
						}
					}
				}
			
		 }
		 
		 function xcube() {
				
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					document.getElementById("result").value = parseFloat(Math.pow(x,3).toFixed(5));
					
					if ( newworking ) {
							working = working + document.getElementById("result").value + " = CUBE(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = false;
					}
				}
		 }
		 
		 function xinv() {
			
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					
						document.getElementById("result").value = parseFloat((1/x).toFixed(5));
						
						if ( newworking ) {
							working = working + document.getElementById("result").value + " = INV(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = false;
						}
					
				}
			
		 }
		 
		 function Sinx() {
			
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					
						document.getElementById("result").value = parseFloat(Math.sin(x * Math.PI / 180).toFixed(8));
						
						//if ( newworking ) {
							working = working + document.getElementById("result").value + " = Sin(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = true;
						//}
					
				}
			
		 }
		 
		 function iSinx() {
			
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					
						document.getElementById("result").value = parseFloat(Math.asin(x)*180/Math.PI).toFixed(2);
						
						//if ( newworking ) {
							working = working + document.getElementById("result").value + " = INVSin(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = true;
						//}
					
				}
			
		 }
		 
		 
		 function Cosx() {
			
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					
						document.getElementById("result").value = parseFloat(Math.cos(x * Math.PI / 180).toFixed(8));
						
						//if ( newworking ) {
							working = working + document.getElementById("result").value + " = Sin(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = true;
						//}
					
				}
			
		 }
		 
		  function iCosx() {
			
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					
						document.getElementById("result").value = parseFloat(Math.acos(x)*180/Math.PI).toFixed(2);
						
						//if ( newworking ) {
							working = working + document.getElementById("result").value + " = INVSin(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = true;
						//}
					
				}
			
		 }
		 
		 function Tanx() {
			
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					
						document.getElementById("result").value = parseFloat(Math.tan(x * Math.PI / 180).toFixed(8));
						
						//if ( newworking ) {
							working = working + document.getElementById("result").value + " = Sin(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = true;
						//}
					
				}
			
		 }
		 
		 function iTanx() {
			
				newworking = true;
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					
						document.getElementById("result").value = parseFloat(Math.atan(x)*180/Math.PI).toFixed(2);
						
						//if ( newworking ) {
							working = working + document.getElementById("result").value + " = INVSin(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = true;
						//}
					
				}
			
		 }
		 
		 function xcubert() {
			newworking = true;
				
				fsolve();
				var x = document.getElementById("result").value;
				
				if ( ! isNaN(x) ) {
					if ( Number(x) > 0 ) {
						document.getElementById("result").value = parseFloat(Math.cbrt(x).toFixed(5));
						
						if ( newworking ) {
							working = working + document.getElementById("result").value + " = SQROOT(" + x + ")<br>";
							working = working.replace("/","&#247;"); 
							newworking = false;
						}
					}
				}
		 }
var quizlength = 30;

var qarray = [
];

var nametags = ["RedLegend","DarkLegend","NuttyLegend","ScaryLegend","GrimWarrior","WittyWarrior","WildWarrior","DaringWarrior",];

var HelpWrong = 0;
var helpArray = [
	
	"What should you always do when answering a question involving a calculation?, Write all my working down clearly because some of the marks are for showing how I get the answer, Just write down the answers as it saves me time, The answer on its own is enough to get all the marks, The answer proves I know enough to get all the marks",
	"If you use a calculator to work something out what should you always do?,Write down the steps you did on the calculator as your working because you could get marks for it,Just write down the answer because calculator working does not count as real working out, Leave gaps in my working because it is on the calculator screen, Just write down the answers because on a calculator question I do not need to show working out",
	"When doing the calculator paper what should you do?,Check even the easiest calculations that you did in your head with the calculator just in case you made a mistake, Only use the calculator when something is really tricky to do in my head, Leave the calculator and only use it as a lsat resort, Try and do it all without the calculator as an extra challenge",
	"When doing the calculator paper what should you do?,Use the calculator to work things out and check my answers!, Use the calculator as a back-up, Leave the calculator and only use it as a last resort, Try and do it all without the calculator as a extra challenge",
	"If you know you messed up the first part of a question what should you do?,Use the answer I get in the next part because even if it is wrong I will get the marks for the rest of the question if I do the rest of it right, Leave the rest of the question as there is no point in carrying on, Put a line through it and leave it, Just move on to another question",
	"If you finish early what should you do?,Go back and look at questions I struggled with - I might be able to write something that gets me an extra mark, Sit there and play with the calculator to pass the time, Ask if I can go now, Sit there doodling on the paper to relieve the boredom",
	"When looking at a question with lots of text what should you do?, Read through each part carefully and underline important numbers, Move on to another question that is easier to read, Skip the boring bits and read the last sentence, Use up some time colouring in the picture as that will make it look like I am doing something",
	"What is a good idea before writing down a number you just worked out?,Give the number a quick sanity check. Does it look right or is the number either way too low or much too high?, Just write it down without thinking too much about it - if it's wrong it's wrong, It must be right if the calculator says so, Write it down and move on - the sooner I finish the sooner I can get out of here",
	"What should you do if asked to show a check for your working?,Pick one of the calculations in my working out and do a reverse, It's only one mark - leave it, Write down one of my calculations again exactyl as before, Write something witty like 'I know that my addition is right' ",
	"What should you always do when calculating with amounts of money?, Be careful with the decimals - take extra care when entering amounts like £5.00; 50p and 5p into the calculator, Enter them exactly as given on the paper as the calculator knows how to deal with money amounts, Don't use decimal points as this just makes it confusing, It's OK I will be able to see easily if I made a mistake",
	"What is a good strategy before you start doing a <u>non-calculator</u> exam if you feel really nervous, Ask for some paper and spend 2 or 3 minutes writing down some times tables - these will focus your mind and be really useful to refer to later, Dive straight in as there is no time to lose, Sit and stare at the questions for a while looking for ones I know I can do easily, Fiddle with my pencil for a while and hope for inspiration",
	"What is a good strategy for long questions with a lot of steps?,Break the question down - write Step 1 - Step 2 - Step 3 (or meaningful headings) in the working out box and write my working out down under the headings, Leave it I hate long questions, Dive straight in and get writing, Miss out steps I can't do",
	"For questions with measurements what should you do?,Check the all the measurements are in the same units (don't mix CM and M in calculations), Just start working - as long as the answer is close I'll get some marks, Leave these because units confuse me, My calculator will sort it out for me",
	"When adding a list of numbers what is a good way to check your answer?, Add them up again but this time in reverse because you are less likely to make the same mistake again, I'm good at adding so I trust myself, No time to check - just move on, As long as I write down the working I will get all the marks",
	"What is a good idea to check before doing a subtraction (taking away)?, MOST of the time you will taking away a small number from a bigger number ask yourself why if this is not the case, It won't matter either way the answer will be the same, There is not enough time to think about everything, The examiner will see what I meant so don't worry",
	"Before doing a divide what should you check?, Make sure you are dividing the numbers the right way round - if you get a weird answer that is <u>way too small</u> you should try reversing the division, It won't matter either way the answer will be the same, There is not enough time to think about everything, The examiner will see what I meant so don't worry",
	"If you are asked to work out how many small things (like tiles) fit inside a large thing (like a wall) and you get a small decimal answer what should you do?, Check and reverse your division - you probably made a common mistake and had it the wrong way round, Panic and leave the rest of the question, Plough on - people quite often buy 0.00023 tiles, Put a line through the working out and start the whole question again", 
	"When asked to draw up a timing plan for some activities what do they mean?, I create a table with a row for each activity and columns for start time; end time and what the activity is, It's some kind of written description that summarises the question, Write down one line for each stage, Move on I hate timings",
	"When drawing up tables and charts what should I do?, Sketch it out on rough paper and then use a ruler and a pencil to do it properly, Use my pen and draw lines as straight as I can, Sketch it out as long as it looks close I'll get the marks, Leave this question I hate the table ones",
	"When drawing graphs or bar charts what should you always do?,Rough Sketch first then - Number axes carefully (starting from zero) - Use Pencil - Use Ruler - Title - Label Axes, Draw it roughly as they are only looking for a rough idea, Not enouh time to do everything as long as its close it will be OK, I can draw lines rather than bars as bars take too long",
	"I've been asked to design a data collection table - what should I draw?,Create a table with clear headings and enough rows and columns to enable a person to count how many of each option, Panic because I hate these table questions, Draw a graph or bar chart, Scribble down some random empty table with no headings it might get some marks",
	"When a question asks how many smaller things fit inside a larger thing I'm probably going to be:, Dividing the smaller amount into the larger amount, Using guesswork, Just multpliying things together, Some kind of addition", 
];

var fdpWrong = 0;
var fdpArray = [
	
	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
		"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
	
	
	"A house costs £180000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£36000,£18000,£3600,£1800",
	"A house costs £210000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£42000,£21000,£4200,£2100",
	"A house costs £250000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£50000,£25000,£5000,£2500",
	"A house costs £150000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£30000,£15000,£3000,£1500",
	"A house costs £130000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£26000,£13000,£2600,£1300",
	

	"Select the largest fraction:<br>&frac12; &#44; &frac13; &#44; &frac14 &#44; &frac23;,&frac23;,&frac14;,&frac13;,&frac12;",
	"Select the smallest fraction:<br>&frac12; &#44; &frac13; &#44; &frac14 &#44; &frac23;,&frac14;,&frac23;,&frac13;,&frac12;",
	
	"Select the largest fraction:<br>&frac35; &#44; &frac23; &#44; &frac34 &#44; &frac16;,&frac34;,&frac23;,&frac16;,&frac35;",
	"Select the smallest fraction:<br>&frac35; &#44; &frac23; &#44; &frac34 &#44; &frac16;,&frac16;,&frac23;,&frac34;,&frac35;",
	
	"Select the largest fraction:<br>&frac45; &#44; &frac23; &#44; &frac12 &#44; &frac34;,&frac45;,&frac23;,&frac12;,&frac34;",
	"Select the smallest fraction:<br>&frac45; &#44; &frac23; &#44; &frac12 &#44; &frac34;,&frac12;,&frac23;,&frac45;,&frac34;",

/*
	"1% of 50,0.5,5,0.05,1",
	"1% of 100,1,0.1,0.01,10",
	"1% of 200,2,0.2,0.02,20",
	"1% of 300,3,0.3,0.03,30",
	"1% of 400,4,0.4,0.04,40",
	
	"2% of 50,1,0.1,0.2,2",
	"2% of 100,2,0.2,0.02,20",
	"2% of 200,4,0.4,0.2,2",
	"2% of 300,6,0.6,0.2,20",
	"2% of 400,8,0.8,0.08,20",
	
	"3% of 50,1.5,0.15,0.3,3",
	"3% of 100,3,0.3,0.03,30",
	"3% of 200,6,0.6,0.3,30",
	"3% of 300,9,0.9,0.3,1.5",
	"3% of 400,12,0.12,1.2,30",
	
	"4% of 50,2,0.4,0.2,4",
	"4% of 100,4,0.4,0.04,5",
	"4% of 200,8,0.8,0.4,6",
	"4% of 300,12,1.2,4,7",
	"4% of 400,16,1.6,4,8",
	
	*/
	"5% of 50,2.5,2.0,3.5,1.5",
	"5% of 100,5,0.5,0.05,50",
	"5% of 200,10,1,2,5",
	"5% of 300,15,5,9,12",
	"5% of 400,20,12,10,16",
	

	"10% of 120,12,10,20,21",
	"10% of 2000,200,120,20,120",
	"10% of 350,35,30,25,70",
	"10% of 800,80,60,100,40",
	
	"20% of 2000,400,200,600,120",
	"20% of 50,10,5,15,20",
	"5% of 240,12,24,40,50",
	"5% of 480,24,48,12,50",
	"25% of 60,15,6,30,20",
	"25% of 120,30,24,36,25",
	"one half of 120,60,25,50,50",
	"one third of 48,16,8,32,30",
	"one third of 27,9,18,3,8",
	"one quarter of 24,6,12,8,4",
	"one quarter of 88,22,32,48,28",
	"two thirds of 60,40,23,20,45",
	
	"&frac12; of 36, 18, 14, 30, 12",
	"&frac12; of 34, 17, 16, 18, 19",
	"&frac13; of 30, 10, 15, 12, 3",
	"&frac13; of 90, 30, 45, 9, 33",
	"&frac23; of 90, 60, 45, 30, 23",
	"&frac14; of 40, 10, 20, 30, 14",
	"&frac34; of 40, 30, 20, 34, 10",
	
	"A sofa costs £900. You get a third off the price.<br><br>How much do you pay?,£600,£300,£450,£500",
	"A car costs £2000. You get a quarter off the price.<br><br>How much do you pay?,£1500,£500,£1200,£1800",
	"A mobile phone costs £800. You get 10% off the price.<br><br>How much do you pay?,£720,£80,£600,£400",
	"A table costs £800. The price is increased by 25%.<br><br>What is the new price?,£1000,£1200,£880,£1200",
	
	"What is one half as a decimal?, 0.5, 0.2, 0.25, 0.05",
	"What is one quarter as a decimal?, 0.25, 0.52, 0.14, 0.4",
	"Which decimal is closest to one third?, 0.33, 0.25, 0.3, 0.13",
	
	"What is 50% as a decimal?, 0.5, 0.2, 0.25, 0.05",
	"What is 25% as a decimal?, 0.25, 0.52, 0.14, 0.4",
	"Which decimal is closest to 33%, 0.33, 0.25, 0.3, 0.13",
	
	"Which fraction is the same as 1/2, 3/6, 2/3, 4/10, 6/14",
	"Which fraction is the same as 1/3, 2/6, 2/5, 4/15, 6/20",
	"Which fraction is the same as 1/4, 3/12, 4/12, 3/9, 6/25",
	
		"Which of these numbers is the largest?<br><br>0.65&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.065&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.165, 0.7,0.065,0.165,0.65",
	"Which of these numbers is the largest?<br><br>0.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.125, 0.3,0.13,0.25,0.125",
	"Which of these numbers is the largest?<br><br>0.75&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.57&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5, 0.75,0.57,0.55,0.5",
	"Which of these numbers is the largest?<br><br>0.21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.112&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.2, 0.21,0.112,0.12,0.2",
	"Which of these numbers is the smallest?<br><br>0.155&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.2, 0.155,0.25,0.16,0.2",
	"Which of these numbers is the smallest?<br><br>0.357&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.39&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5, 0.357,0.4,0.39,0.5",
	"Which of these numbers is the smallest?<br><br>0.45&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.455&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.745, 0.45,0.6,0.455,0.745",
	
];

var arithWrong = 0;
var arithArray = [

	"12 + 29,41,43,31,51",
	"15 + 16,31,21,41,32",
	"17 + 24,41,31,51,40",
	"18 + 27,45,55,65,46",
	"23 + 28,51,61,71,53",
	"39 + 22,61,71,51,62",
	"28 + 14,42,52,32,44",
	"33 - 15,18,17,19,16",
	"25 - 17,8,7,9,6",
	"29 - 14,15,14,16,13",
	"47 - 28,19,17,18,16",
	"23 - 7,16,15,17,18",
	"51 - 12,39,29,38,37",
	"112 - 22,90,80,92,81",
	
	"5 + 7 - 4,8, 6, 7, 5",
	"9 + 8 - 5,12, 11, 13, 10",
	"15 - 7 + 6,14, 13, 15, 12",
	"22 - 13 + 7,16, 15, 17, 14",
	"13 + 8 + 7,28, 26, 25, 29",
	
	"10 x 10 x 10, 1000, 100, 10000, 100000",
	"10 x 10, 100, 1000, 10000, 100000",
	
	"2 x 14,28,38,26,24",
	"2 x 16,32,30,42,40,18",
	"2 x 18,36,46,38,20",
	"2 x 19,38,48,36,34",
	"2 x 14,28,38,26,24",
	"2 x 16,32,30,42,40,18",
	"2 x 18,36,46,38,20",
	"2 x 19,38,48,36,34",
	"3 x 8, 24, 22, 26, 28",
	"3 x 9, 27, 28, 18, 26",
	"3 x 12, 36, 34, 38, 32",
	"4 x 8, 32, 34, 36, 30",
	"5 x 4, 20, 25, 15, 24",
	"5 x 6, 30, 25, 35, 36",
	"5 x 7, 35, 40, 30, 25",
	"5 x 8, 40, 45, 42, 35",
	"5 x 9, 45, 40, 46, 35",
	"6 x 8,48,38,42,56",
	"6 x 6,36,30,32,42",
	"7 x 8,56,46,66,58",
	"9 x 8,72,64,62,74",
	"4 x 9,36,38,27,45",
	"3 x 24,72,82,62,76",
	
	"12 &#247 3,4,3,5,6",
	"24 &#247 3,8,6,7,9",
	"36 &#247 4,9,8,7,6",
	"18 &#247 3,6,5,9,7",
	"48 &#247 6,8,6,9,7",
	"28 &#247 4,7,6,5,8",
	
	"Use the rules of BIDMAS to work out<br><br>2 + 3 x 3<br><br>,11,15,9,8",
	"Use the rules of BIDMAS to work out<br><br>2 x 3 + 5<br><br>,11,16,10,12",
	"Use the rules of BIDMAS to work out<br><br>6 + 6 &#247 3<br><br>,8,4,5,3",
	
	"2 x 2 x 2,8,6,12,10",
	"2 x 2 x 2 x 2,16,8,12,32",
	"1 x 1 x 1,1,3,111,2",
	"2 x 3 x 3,18,233,15,10",
	"1 x 3 x 2,6,132,5,8",
	
	"&#40; 5 + 4 &#41; x 2,18,13,40,11",
	"&#40; 6 + 4 &#41; x 3,30,13,72,18",
	"&#40; 2 + 3 &#41; x 5,25,30,10,35",
	
	"3&sup2;,9,6,8,32",
	"4&sup2;,16,8,6,42",
	"5&sup2;,25,10,7,52",
	"6&sup2;,36,12,8,62",
	"7&sup2;,49,14,9,72",
	"8&sup2;,64,16,10,82",
	"9&sup2;,81,18,11,92",
	"10&sup2;,100,20,12,1000",
	"11&sup2;,121,111,120,22",
	"12&sup2;,144,24,120,140",
	
	"2&sup3;,8,6,4,222",
	"3&sup3;,27,33,9,333",
	
	"%calc%25&sup2; to the nearest 100,600,625,700,630",
	"%calc%35&sup2; to the nearest 100,1200,1225,1230,1300",
	"%calc%24&sup2; to the nearest 100,600,500,576,580",
	"%calc%33&sup2; to the nearest 10,1190,1180,1089,1100",
	
	"%calc%9&sup3; to the nearest 10,730,729,700,720",
	"%calc%8&sup3; to the nearest 10,510,520,512,500",
	"%calc%7&sup3; to the nearest 10,340,350,300,343",
	"%calc%6&sup3; to the nearest 10,220,216,210,200",
	"%calc%15&sup3; to the nearest 100,3400,3375,3000,3380",
];

var timeWrong = 0;
var timeArray = [

	"How many minutes in 3 hours?, 180, 150, 120, 210",
	"How many minutes in 1&frac12; hours?, 90, 100, 120, 80",
	"How many minutes in 2&frac12; hours?, 150, 120, 180, 200",
	"How many minutes in 3&frac12; hours?, 210, 200, 170, 160",
	"How many minutes in &frac34; of a hour?, 45, 40, 60, 30",
	"How many minutes in &frac23; of a hour?, 40, 30, 27, 45",
	"How many minutes in 1&frac14; hours?, 75, 80, 90, 100",
	"How many minutes in 1&frac34; hours?, 105, 100, 115, 95",

	"How many hours are 120 minutes?,2 Hours, 1&frac34; Hours, 2&frac14; Hours, 3 Hours",
	"How many hours are 90 minutes?,1&frac12; Hours, 1&frac34; Hours, 1&frac14; Hours, 1.75 Hours",
	"A job is started at 10:30 am<br>If the job takes 3 hours when does it finish?, 13:30, 12:30, 2:30pm, 01:30",
	"A job is started at 09:45 am<br>If the job takes 1&frac12 hours when does it finish?, 11:15, 23:15, 10:15, 12:15",
	"A job is started at 09:15 am<br>If the job takes 90 minutes when does it finish?, 10:45, 22:45, 11:15, 11:00",
	"A job is started at 11:15 am<br>If the job takes 2&frac34 hours when does it finish?, 14:00, 15:00, 13:45, 13:30",
	"A job is started at 1:30 PM<br>If the job takes 2&frac34; hours when does it finish?, 16:15, 15:15, 04:15, 3:45 PM",
	"A job is started at 15:15<br>If the job takes 1&frac14; hours when does it finish?, 16:30, 17:30, 16:45, 17:45",
	"A job is started at 13:45<br>If the job takes 6&frac12; hours when does it finish?, 8:15 PM, 20:30, 19:45, 21:15",

	"A 2 hour job finishes at 16:30<br>When did the job start?, 14:30, 02:30, 13:30, 15:30",
	"A 2 hour job finishes at 2:30 PM<br>When did the job start?, 12:30, 00:30, 11:30, 13:30",
	"A 3&frac12; hour job finishes at 16:00<br>When did the job start?, 12:30, 13:30, 11:30, 14:30",
	"A 4&frac12; hour job finishes at 16:00<br>When did the job start?, 11:30, 12:30, 10:30, 13:30",
	"A 5&frac12; hour job finishes at 16:00<br>When did the job start?, 10:30, 11:30, 09:30, 12:30",
	"A 5&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 10:00, 10:30, 11:30, 11:00",
	"A 3&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 12:00, 12:30, 13:30, 13:00",
	"A 4&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 11:00, 11:30, 12:30, 12:00",
	"A 6&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 09:00, 09:30, 10:30, 10:00",

	"A car travels for &frac12; hour at 60 MPH.<br>How far does it travel?, 30 Miles, 45 Miles, 60 Miles, 20 Miles",
	"A car travels for 2 hours at 60 MPH.<br>How far does it travel?, 120 Miles, 60 Miles, 80 Miles, 100 Miles",
	"A car travels for 120 minutes at 60 MPH.<br>How far does it travel?, 120 Miles, 60 Miles, 80 Miles, 100 Miles",
	"A car travels for 1&frac12; hours at 60 MPH.<br>How far does it travel?, 90 Miles, 80 Miles, 120 Miles, 75 Miles",
	"A car travels for 90 minutes at 60 MPH.<br>How far does it travel?, 90 Miles, 80 Miles, 120 Miles, 75 Miles",
	"A car travels for 1&frac14; hours at 60 MPH.<br>How far does it travel?, 75 Miles, 80 Miles, 90 Miles, 120 Miles",
	
	"A car travels for &frac12; hour at 40 MPH.<br>How far does it travel?, 20 Miles, 40 Miles, 30 Miles, 15 Miles",
	"A car travels for 2 hours at 40 MPH.<br>How far does it travel?, 80 Miles, 40 Miles, 60 Miles, 70 Miles",
	"A car travels for 1&frac12; hours at 40 MPH.<br>How far does it travel?, 60 Miles, 80 Miles, 100 Miles, 50 Miles",
	"A car travels for 90 minutes at 40 MPH.<br>How far does it travel?, 60 Miles, 80 Miles, 100 Miles, 50 Miles",
	"A car travels for 1&frac14; hours at 40 MPH.<br>How far does it travel?, 50 Miles, 60 Miles, 70 Miles, 80 Miles",

	"A pen costs £2.50 and a rubber costs 75p.<br>How much do they cost in total?, £3.25, £3.50, £4.25, £4.50",
	"Three items in a shopping bill cost 50p &#44; 75p and £1.00<br>How much do they cost in total?, £2.25, £3.50, £3.25, £2.75",
	"Three items in a shopping bill cost 40p &#44; 80p and 60p<br>How much do they cost in total?, £1.80, £2.10, £1.70, £1.90",
	"An item costs £2.60 <br>How much does two of the items cost?, £5.20, £4.20, £6.20, £5.40",
	"An item costs £3.70 <br>How much does two of the items cost?, £7.40, £7.20, £6.40, £8.40",
	"An item costs 70p <br>How much does three of the items cost?, £2.10, £3.10, £2.30, £2.20",
	"An item costs 90p <br>How much does three of the items cost?, £2.70, £3.70, £2.50, £2.80",
	"An item costs 40p <br>How much does four of the items cost?, £1.60, £2.20, £1.80, £2.00",
	
	"You open a money box and find nine 50p coins.<br>How much have you got?, £4.50, £4.00, £3.50, £5.00",
	"You open a money box and find twelve 50p coins.<br>How much have you got?, £6.00, £8.00, £7.00, £6.50",
	"You open a money box and find nine 20p coins.<br>How much have you got?, £1.80, £1.60, £2.20, £1.40",
	
	"You have nine 20p coins and five 5p coins.<br>How much have you got?, £2.05, £1.95, £2.50, £2.10",
	"You have seven 20p coins and six 5p coins.<br>How much have you got?, £1.70, £1.60, £1.50, £1.80",
	"You have eight 20p coins and seven 5p coins.<br>How much have you got?, £1.95, £1.85, £1.75, £2.05",
	
	"A shopping bill comes to £8.76<br>How much change will you get from £10?, £1.24, £1.34, £1.14, £2.24",
	"A shopping bill comes to £11.34<br>How much change will you get from £20?, £8.66, £9.66, £7.66, £8.76",

	"%calc%Shopping items cost £1.75&#44; 65p&#44; 85p and £3.25<br>What is the total cost?, £6.50, £6.40, £6.55, £6.45", 
	"%calc%Different size metal screws cost 75p&#44; 12p&#44; 9p&#44; 7p and £1.15<br>What is the total cost?, £2.18, £2.99, £2.79, £2.28", 
	
	"%calc%An item costs 35p<br>How much will 25 of the item cost?, £8.75, £8.50, £9.15, £8.50", 
	"%calc%An item costs 6p<br>How much will 125 of the item cost?, £7.50, £7.80, £7.60, £7.30", 
	"%calc%An item costs £1.05<br>How much will 45 of the item cost?, £47.25, £47.30, £47.20, £47.35", 
	
	
	"%calc%Two items cost £213.05 and £357.50<br>How much will they cost in total?, £570.55, £571.00, £570.10, £571.55", 
	
	"The latest Xbox costs £425<br>If you save £25 a week how long will it take before you have enough to buy it?,17 weeks , 15 weeks, 18 weeks, 16 weeks",
	
	"%calc%A laptop costs £1600<br>If you saved £65 a week. How many weeks will it take before you can buy it?,25 weeks , 24 weeks, 26 weeks, 23 weeks",
	"%calc%A laptop costs £975<br>If you saved £52 a week. How many weeks will it take before you can buy it?,19 weeks , 18 weeks, 20 weeks, 17 weeks",
];

var probWrong = 0;
var probArray = [

"A bag contains 8 RED balls. What is the probability of choosing a BLACK ball?, Impossible, Unlikely, Likely, Certain",
	"A bag contains 8 RED balls. What is the probability of choosing a RED ball?, Certain, Unlikely, Likely, Impossible",
	"A bag contains 2 RED balls and 10 BLACK balls. What is the probability of choosing a RED ball?, Unlikely, Likely, Certain, Even Chance",
	"A bag contains 2 RED balls and 10 BLACK balls. What is the probability of choosing a BLACK ball?, Likely, Unlikely, Certain, Even Chance",
	"A bag contains 5 RED balls and 5 BLACK balls. What is the probability of choosing a WHITE ball?, Impossible, Unlikely, Certain, Even Chance",
	"A bag contains 5 RED balls and 5 BLACK balls. What is the probability of choosing a RED ball?, Even Chance, Unlikely, Certain, Impossible",
	
	"What is the probability of getting 6 when throwing a fair 6 sided dice?, &frac16;, &frac12;, &frac13;, &frac14;",
	"What is the probability of getting an EVEN number when throwing a fair 6 sided dice?, &frac12;, &frac16;, &frac13;, &frac14;",
	"What is the probability of getting an ODD number when throwing a fair 6 sided dice?, &frac12;, &frac16;, &frac13;, &frac14;",
	"What is the probability of getting a 5 or a 6 when throwing a fair 6 sided dice?, &frac13;, &frac34;, &frac23;, &frac16;",
	"What is the probability of getting LESS THAN 3 when throwing a fair 6 sided dice?, &frac13;, &frac34;, &frac23;, &frac16;",
	"What is the probability of getting MORE THAN 2 when throwing a fair 6 sided dice?, &frac23;, &frac34;, &frac12;, &frac16;",
	
	"What is the probability of getting MORE THAN 3 when throwing a fair 6 sided dice?, &frac12;, &frac14;, &frac13;, &frac16;",
	"What is the probability of getting LESS THAN 4 when throwing a fair 6 sided dice?, &frac12;, &frac14;, &frac13;, &frac16;",
	
	"A 8 sided fair spinner is spun<br>What are the chances of it landing on 5?, &frac18;, &frac15;, &frac14;, &frac13;",
	"A 8 sided fair spinner is spun<br>What are the chances of it landing on either 1  2 or 3?, &frac38;, &frac35;, &frac13;, &frac23;",
	
	"The weather forecast says we have 10% chance of rain.<br><br>What are the chances of it raining?, Unlikely, Certain, Evens, Likely",
	"The weather forecast says we have 75% chance of rain.<br><br>What are the chances of it raining?, Likely, Certain, Evens, Unlikely",
	"The weather forecast says we have 50% chance of rain.<br><br>What are the chances of it raining?, Evens, Certain, Likely, Unlikely",
	"The weather forecast says we have 100% chance of rain.<br><br>What are the chances of it raining?, Certain, Evens, Likely, Unlikely",
	"The weather forecast says we have 0% chance of rain.<br><br>What are the chances of it raining?, Impossible, Evens, Likely, Unlikely",
	
	"What are the chances of getting heads when tossing a coin?, 50%, 25%, 75%, 100%",
	"What are the chances of getting heads when tossing a coin?, &frac12;, &frac13;, &frac23;, &frac34;",
	
	"The weather forecast says we have 25% chance of rain tomorrow.<br><br>What are the chances of it staying dry?, 75%, 25%, 50%, 90%",
	
	"You ask a friend to think of any whole number [no fractions or decimals]<br><br>What are the chances of the number being even?, 50%, 25%, 75%, 100%",
	
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being 10?, Unlikely, Impossible, Evens, Likely",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being less than 11?, Evens, Impossible, Unlikely, Likely",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being more than 10?, Evens, Impossible, Unlikely, Likely",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being more than 5?, &frac34;, &frac13;, &frac23;, &frac35;",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being more than 15?, 25%, 50%, 75%, 100%",
	
];

var shapeWrong = 0;
var shapeArray = [

	"What is the volume of a cuboid with height of 2cm&#44; a width of 3cm&#44 and a depth of 4cm?,24cm&sup3,234cm&sup3,9cm&sup3,20cm&sup3",
	"What is the volume of a cuboid with height of 3cm&#44; a width of 4cm&#44 and a depth of 5cm?,60cm&sup3,345cm&sup3,12cm&sup3,35cm&sup3",
	"What is the volume of a cardboard box with height of 3cm&#44; a width of 5cm&#44 and a depth of 4cm?,60cm&sup3,354cm&sup3,12cm&sup3,32cm&sup3",
	"What is the volume of a cuboid with height of 1cm&#44; a width of 1cm&#44 and a depth of 1cm?,1cm&sup3,111cm&sup3,3cm&sup3,30cm&sup3",
	"A container of height 1m&#44; width 3m&#44 and depth 2m is filled half full with smaller boxes.<br>What volume of the container is filled?,3m&sup3,66m&sup3,6m&sup3,4m&sup3",

	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 6cm and width 9cm?, 30cm, 54cm, 69cm, 15cm",
	"What is the perimeter of a rectangle with height 10cm and width 12cm?, 44cm, 22cm, 120cm, 100cm",
	"What is the perimeter of a rectangle with height 8cm and width 4cm?, 24cm, 32cm, 12cm, 84cm",
	
	"What is the area of a rectangle with height 5cm and width 10cm?,50cm&sup2, 25cm&sup2, 30cm&sup2, 50cm",
	"What is the area of a rectangle with height 10cm and width 12cm?,120cm&sup2, 22cm&sup2, 44cm&sup2, 120cm",
	"What is the area of a rectangle with height 6cm and width 7cm?,42cm&sup2, 26cm&sup2, 67cm&sup2, 42cm",
	"What is the area of a rectangle with height 9cm and width 8cm?,72cm&sup2, 34cm&sup2, 98cm&sup2, 72cm",
	"What is the area of a rectangle with height 5cm and width 9cm?,45cm&sup2, 28cm&sup2, 59cm&sup2, 45cm",
	

	"The AREA of a square is 25 cm&sup2.<br>What is the length of its sides?, 5 cm, 10 cm, 4 cm, 6 cm",
	"The AREA of a square is 16 cm&sup2.<br>What is the length of its sides?, 4 cm, 10 cm, 5 cm, 6 cm",
	"The AREA of a square is 9 cm&sup2.<br>What is the length of its sides?, 3 cm, 10 cm, 5 cm, 4 cm",
	"The AREA of a rectangle is 15 cm&sup2.<br>Choose a possible length for its sides?, 3 cm and 5 cm, 4 cm and 5 cm, 2 cm and 5 cm, 6 cm and 4 cm",
	"The AREA of a rectangle is 24 cm&sup2.<br>Choose a possible length for its sides?, 6 cm and 4 cm, 4 cm and 7 cm, 3 cm and 6 cm, 6 cm and 5 cm",
	"The AREA of a rectangle is 28 cm&sup2.<br>Choose a possible length for its sides?, 7 cm and 4 cm, 4 cm and 6 cm, 3 cm and 8 cm, 6 cm and 7 cm",
	
	"The PERIMETER of a square is 20 cm.<br>What is the length of its sides?, 5 cm, 8 cm, 6 cm, 7 cm",
	"The PERIMETER of a square is 24 cm.<br>What is the length of its sides?, 6 cm, 8 cm, 5 cm, 7 cm",
	"The PERIMETER of a square is 28 cm.<br>What is the length of its sides?, 7 cm, 8 cm, 5 cm, 6 cm",
	"The PERIMETER of a square is 32 cm.<br>What is the length of its sides?, 8 cm, 7 cm, 5 cm, 6 cm",
	
	"The PERIMETER of a rectangle is 16 cm.<br>Choose a possible length for its sides?, 3 cm and 5 cm, 4 cm and 5 cm, 2 cm and 5 cm, 6 cm and 4 cm",
	"The PERIMETER of a rectangle is 20 cm.<br>Choose a possible length for its sides?, 6 cm and 4 cm, 4 cm and 7 cm, 3 cm and 6 cm, 6 cm and 5 cm",
	"The PERIMETER of a rectangle is 22 cm.<br>Choose a possible length for its sides?, 7 cm and 4 cm, 4 cm and 6 cm, 5 cm and 8 cm, 6 cm and 7 cm",
	
	"The PERIMETER of an equilateral triangle is 18 cm.<br>Choose a possible length for its sides?, 6 cm, 4 cm, 5 cm, 7 cm",
	"The PERIMETER of an equilateral triangle is 36 cm.<br>Choose a possible length for its sides?, 12 cm, 14 cm, 11 cm, 13 cm",
	
	"What is the area of a rectangle of<br><br>height 3cm and width 4cm?,12cm&sup2;,7cm&sup2,14cm&sup2,12cm",
	"What is the perimeter of a rectangle of<br><br>height 3cm and width 4cm?,14cm,12cm&sup2;,7cm&sup2,14cm&sup2",
	"What is the area of a rectangle of<br><br>height 4cm and width 5cm?,20cm&sup2;,9cm&sup2,18cm&sup2,18cm",
	"What is the perimeter of a rectangle of<br><br>height 4cm and width 5cm?,18cm,9cm&sup2,18cm&sup2,20cm&sup2;",

	"I am a six sided 2D shape.<br><br>What am I?, Hexagon, Pentagon, Octagon, Quadrilateral",
	"I am a five sided 2D shape.<br><br>What am I?, Pentagon, Hexagon, Octagon, Quadrilateral",
	"I am a eight sided 2D shape.<br><br>What am I?, Octagon, Hexagon, Pentagon, Quadrilateral",
	"I am a four sided 2D shape.<br><br>What am I?, Quadrilateral, Hexagon, Pentagon, Octagon",
	"I am a 3D shape and my faces are all rectangles.<br><br>What am I?, Cuboid, Cylinder, Prism, Sphere",
	"I am a 3D shape and I have no flat faces.<br><br>What am I?, Sphere, Cylinder, Prism, Cuboid",
	"I am a 3D shape with a circle at each end.<br><br>What am I?, Cylinder, Sphere, Quadrilateral, Cuboid",

	"What compass point is at 90 degrees clockwise from North?, East, West, South, North",
	"What compass point is at 90 degrees clockwise from East?, South, West, East, North",
	"What compass point is at 90 degrees clockwise from South?, West, South, East, North",
	"What compass point is at 90 degrees clockwise from West?, North, South, East, West",

	"What compass point is at 180 degrees clockwise from North?, South, West, East, North",
	"What compass point is at 180 degrees clockwise from South?, North, West, East, South",
	
	"What compass point is at 270 degrees clockwise from North?, West, South, East, North",
	"What compass point is at 360 degrees clockwise from North?, North, South, East, West",
	
	"What compass point is at 90 degrees anti-clockwise from North?, West, East, South, North",
	"What compass point is at 90 degrees anti-clockwise from East?, North, East, South, West",
	"What compass point is at 90 degrees anti-clockwise from South?, East, West, South, North",
	"What compass point is at 90 degrees anti-clockwise from West?, South, North, East, West",
	
	"What compass point is at 180 degrees anti-clockwise from North?, South, East, West, North",
	"What compass point is at 180 degrees anti-clockwise from East?, West, North, South, East",
	"What compass point is at 180 degrees anti-clockwise from South?, North, West, South, East",
	"What compass point is at 180 degrees anti-clockwise from West?, East, North, South, West",
	
	"I am facing North. I turn 90 degrees clockwise and then 180 anti-clockwise.<br>What direction do I face now?,West, North, South, East",
	"I am facing North. I turn a right angle clockwise.<br>What direction do I face now?,East, North, South, West",
	"I am facing North. I turn 180 degrees clockwise and then 180 anti-clockwise.<br>What direction do I face now?,North, West, South, East",
	"I am facing South. I turn 90 degrees clockwise and then 180 anti-clockwise.<br>What direction do I face now?,East, North, South, West",
	"I am facing West. I turn 270 degrees clockwise.<br>What direction do I face now?,South, North, East, West",

	"A triangle has 3 equal sides and 3 equal angles<br><br>What type of triangle is it?,Equilateral Triangle,Isosceles Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has 3 angles of 60 degrees<br><br>What type of triangle is it?,Equilateral Triangle,Isosceles Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has 3 sides of 15cm each<br><br>What type of triangle is it?,Equilateral Triangle,Isosceles Triangle, Scalene Triangle, Right Angled Triangle",
	
	"A triangle has 2 equal sides and 2 equal angles<br><br>What type of triangle is it?,Isosceles Triangle,Equilateral Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has angles of 40&#44; 40 and 100 degrees<br><br>What type of triangle is it?,Isosceles Triangle,Equilateral Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has sides of 20&#44; 20 and 10 centimetres<br><br>What type of triangle is it?,Isosceles Triangle,Equilateral Triangle, Scalene Triangle, Right Angled Triangle",
	
	"A triangle has no equal sides and no equal angles<br><br>What type of triangle is it?,Scalene Triangle,Isosceles Triangle,Equilateral Triangle, Right Angled Triangle",
	"A triangle has angles of 20&#44; 60 and 100 degrees<br><br>What type of triangle is it?,Scalene Triangle,Isosceles Triangle,Equilateral Triangle, Right Angled Triangle",
	"A triangle has sides of 10&#44; 12 and 15 centimetres<br><br>What type of triangle is it?,Scalene Triangle,Isosceles Triangle,Equilateral Triangle, Right Angled Triangle",
	
	"A triangle has one angle of 90 degrees<br><br>What type of triangle is it?,Right Angled Triangle,Scalene Triangle,Isosceles Triangle,Equilateral Triangle",
	

	"90 degrees is a:,Quarter Turn,Half Turn,Three Quarter Turn,Full Turn",
	"180 degrees is a:,Half Turn,Quarter Turn,Full Turn,Three Quarter Turn",
	"270 degrees is a:,Three Quarter Turn,Half Turn,Quarter Turn,Full Turn ",
	"360 degrees is a:, Full Turn,Three Quarter Turn,Half Turn,Quarter Turn",
	"30 degrees is a:,Acute Angle,Reflex Angle,Obtuse Angle,Right Angle",
	"90 degrees is a:,Right Angle,Acute Angle,Reflex Angle,Obtuse Angle",
	"120 degrees is a:,Obtuse Angle,Right Angle,Acute Angle,Reflex Angle",
	"240 degrees is a:,Reflex Angle,Obtuse Angle,Right Angle,Acute Angle",
	
	"A shape has 4 equal length sides and 4 right angles.<br><br>The shape is a?,Square,Rectangle, Rhombus, Parallelogram",
	"A shape has 2 pairs of equal length sides and 4 right angles.<br><br>The shape is a?,Rectangle,Square, Rhombus, Parallelogram",
	"I have	4 equal length sides; opposite sides are parallel; opposite angles are equal and I have two lines of symmetry<br><br>What am I?,Rhombus,Rectangle,Square, Parallelogram",
	"I have	2 pairs of equal length sides; opposite sides are parallel; opposite angles are equal and I have zero lines of symmetry<br><br>What am I?,Parallelogram,Rhombus,Rectangle,Square",
	"The distance from one side to the other straight through the middle of a circle is the:,Diameter,Radius,Circumference,Segment",
	"Half of the diameter of a circle is the:,Radius,Diameter,Circumference,Segment",
	"Twice the radius of a circle is the:,Diameter,Radius,Circumference,Segment",
	"The distance around the outside of a circle is the:,Circumference,Diameter,Radius,Segment",
	
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9645;</span>, 2, 1, 0, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9647;</span>, 2, 1, 0, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9723;</span>, 4, 1, 0, 2",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9649;</span>, 0, 1, 4, 2",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9707;</span>, 2, 1, 4, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9671;</span>, 4, 1, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9651;</span>, 3, 1, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9655;</span>, 3, 1, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:54px;\">&#9659;</span>, 1, 3, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9681;</span>, 1, 3, 2, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9683;</span>, 1, 3, 2, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9706;</span>, 1, 3, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9710;</span>, 0, 3, 2, 1",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9712;</span>, 1, 3, 2, 0",
	
	"<span style=\"font-size:14px;\">How many right angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9723;</span>, 4, 1, 3, 2",
	"<span style=\"font-size:14px;\">How many right angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 1, 2, 3, 0",
	"<span style=\"font-size:14px;\">How many right angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 1, 2, 3, 0",
	"<span style=\"font-size:14px;\">How many internal acute angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 2, 1, 3, 0",
	"<span style=\"font-size:14px;\">How many internal obtuse angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 0, 1, 3, 2",
	
];

var unitsWrong = 0;
var unitsArray = [

	"How many metres in<br> 3 km?, 3000m, 300m, 30m, 30000m",
	"How many centimetres in<br> 1.5m?,150cm, 1500cm, 15cm, 15000cm",
	"How many millimetres in<br> 4cm?,40mm, 400mm, 4000mm, 0.4mm",
	"How many metres in<br> 1.75km?,1750m, 175m, 17500m, 17.5m",
	"How many grams in<br> 2kg?,2000g, 200g, 20g, 20000g",
	"How many kilograms in<br> 3500g?,3.5kg, 350kg, 35kg, 0.35kg",
	
	"Which is correct?,10mm = 1cm, 10cm = 1m, 100m = 1km, 100mm = 1m",
	"Which is correct?,1000g = 1kg, 100g = 1kg, 10g = 1kg, 100kg = 1g",
	"Which is correct?,100cm = 1m, 10cm = 1mm, 1cm = 100mm, 100m = 1000cm",
	
	"Which is a unit of weight?, kilogram, centimetre, litre, kilometre",
	"Which is a unit of length?, centimetre, kilogram, litre, millilitre",
	"Which is a unit of volume?, millilitre, kilogram, tonne, centimetre",
	
	"Which is the odd one out?, millimetre, millilitre, centilitre, litre",
	"Which is the odd one out?, kilogram, kilometre, centimetre, metre",
	
	"1.5m plus 50cm is:, 2m, 250cm, 175cm, 1.55m",
	"Half of 1kg is:, 500g, 0.5g, 50g, 5000g",
	"Half of 1km is:, 500m, 0.5m, 50m, 5000m",
	"Half of 1cm is:, 5mm, 50mm, 0.5mm, 0.05mm",
	"Half of 1 Litre is:, 50cl, 50ml, 5ml, 5cl",
	"Half of 1 Litre is:, 500ml, 50ml, 5ml, 500cl",
	"Half of 1m is:, 50cm, 500cm, 5000mm, 50mm",
	
	"Which is the heaviest?,2.5kg, 300g, 250g, 2400g",
	
	"1cm = 10mm, TRUE, FALSE,TRUE, FALSE",
	"100cm = 1m, TRUE, FALSE,TRUE, FALSE",
	"1000m = 1km, TRUE, FALSE,TRUE, FALSE",
	"1000g = 1kg, TRUE, FALSE,TRUE, FALSE",
	"1000kg = 1 tonne, TRUE, FALSE,TRUE, FALSE",
	"3500kg = 3.5 tonne, TRUE, FALSE,TRUE, FALSE",
	"1000ml = 1 L, TRUE, FALSE,TRUE, FALSE",
	"2500ml = 2.5 L, TRUE, FALSE,TRUE, FALSE",
	"100cl = 1 L, TRUE, FALSE,TRUE, FALSE",
	
	"10cm = 1m, FALSE, TRUE,TRUE, FALSE",
	"100mm = 1m, FALSE, TRUE,TRUE, FALSE",
	"1000mm = 1km, FALSE, TRUE,TRUE, FALSE",
	"100g = 1kg, FALSE, TRUE,TRUE, FALSE",
	"10g = 1kg, FALSE, TRUE,TRUE, FALSE",
	"100kg = 1 tonne, FALSE, TRUE,TRUE, FALSE",
	"200kg = 2 tonnes, FALSE, TRUE,TRUE, FALSE",
	
	"How many millilitres in 3 centilitres?,30ml,300ml, 0.3ml, 0.03ml",
	"How many millilitres in 5 litres?,5000ml,500ml, 50ml, 0.5ml",
	
	"What unit would be best to measure the length of your arm?,Centimetres, Metres, Litres, Millilitres",
	"What unit would be best to measure the length of your thumb nail?,Millimetres, Centimetres, Metres, Millilitres",
	"What unit would be best to measure the weight of a cruise liner,Tonnes, Kilograms, Kilometres, Grams",
	"What unit would be best to measure the weight of a suitcase full of clothing,Kilograms, Metres, Tonnes, Grams",
	
	"Which is longest measurement?,0.75km, 650m, 3000cm, 40000mm",
	"Which is longest measurement?, 1500m, 1.25km, 4500cm, 750000mm",
	
	"Which is the most likely measurement of the length of your thumb?,4.5cm, 4.5mm, 4.5m, 4.5km",
	"Which is the most likely measurement of the height of a class room door?,2.2m, 2.20mm, 2.2cm, 2.2km",
	"Which is the most likely measurement for the weight of an apple?,180g, 3kg, 5g, 0.75kg",
	"Which is the most likely measurement of the length of a fire engine?,8m, 80cm, 0.8km, 800mm",
];

var MixedNumeracyArray = [

	"A pen costs £2.50 and a rubber costs 75p.<br>How much do they cost in total?, £3.25, £3.50, £4.25, £4.50",
	"Three items in a shopping bill cost 50p &#44; 75p and £1.00<br>How much do they cost in total?, £2.25, £3.50, £3.25, £2.75",
	"Three items in a shopping bill cost 40p &#44; 80p and 60p<br>How much do they cost in total?, £1.80, £2.10, £1.70, £1.90",
	"An item costs £2.60 <br>How much does two of the items cost?, £5.20, £4.20, £6.20, £5.40",
	"An item costs £3.70 <br>How much does two of the items cost?, £7.40, £7.20, £6.40, £8.40",
	"An item costs 70p <br>How much does three of the items cost?, £2.10, £3.10, £2.30, £2.20",
	"An item costs 90p <br>How much does three of the items cost?, £2.70, £3.70, £2.50, £2.80",
	"An item costs 40p <br>How much does four of the items cost?, £1.60, £2.20, £1.80, £2.00",
	
	"You open a money box and find nine 50p coins.<br>How much have you got?, £4.50, £4.00, £3.50, £5.00",
	"You open a money box and find twelve 50p coins.<br>How much have you got?, £6.00, £8.00, £7.00, £6.50",
	"You open a money box and find nine 20p coins.<br>How much have you got?, £1.80, £1.60, £2.20, £1.40",
	
	"You have nine 20p coins and five 5p coins.<br>How much have you got?, £2.05, £1.95, £2.50, £2.10",
	"You have seven 20p coins and six 5p coins.<br>How much have you got?, £1.70, £1.60, £1.50, £1.80",
	"You have eight 20p coins and seven 5p coins.<br>How much have you got?, £1.95, £1.85, £1.75, £2.05",
	
	"A shopping bill comes to £8.76<br>How much change will you get from £10?, £1.24, £1.34, £1.14, £2.24",
	"A shopping bill comes to £11.34<br>How much change will you get from £20?, £8.66, £9.66, £7.66, £8.76",

	"%calc%Shopping items cost £1.75&#44; 65p&#44; 85p and £3.25<br>What is the total cost?, £6.50, £6.40, £6.55, £6.45", 
	"%calc%Different size metal screws cost 75p&#44; 12p&#44; 9p&#44; 7p and £1.15<br>What is the total cost?, £2.18, £2.99, £2.79, £2.28", 
	
	"%calc%An item costs 35p<br>How much will 25 of the item cost?, £8.75, £8.50, £9.15, £8.50", 
	"%calc%An item costs 6p<br>How much will 125 of the item cost?, £7.50, £7.80, £7.60, £7.30", 
	"%calc%An item costs £1.05<br>How much will 45 of the item cost?, £47.25, £47.30, £47.20, £47.35", 
	"%calc%Shopping items cost £1.75&#44; 65p&#44; 85p and £3.25<br>What is the total cost?, £6.50, £6.40, £6.55, £6.45", 
	"%calc%Different size metal screws cost 75p&#44; 12p&#44; 9p&#44; 7p and £1.15<br>What is the total cost?, £2.18, £2.99, £2.79, £2.28", 
	
	"%calc%An item costs 35p<br>How much will 25 of the item cost?, £8.75, £8.50, £9.15, £8.50", 
	"%calc%An item costs 6p<br>How much will 125 of the item cost?, £7.50, £7.80, £7.60, £7.30", 
	"%calc%An item costs £1.05<br>How much will 45 of the item cost?, £47.25, £47.30, £47.20, £47.35", 
	
	"%calc%Two items cost £213.05 and £357.50<br>How much will they cost in total?, £570.55, £571.00, £570.10, £571.55", 
	
	"The latest Xbox costs £425<br>If you save £25 a week how long will it take before you have enough to buy it?,17 weeks , 15 weeks, 18 weeks, 16 weeks",

	"How many minutes in 3 hours?, 180, 150, 120, 210",
	"How many minutes in 1&frac12; hours?, 90, 100, 120, 80",
	"How many minutes in 2&frac12; hours?, 150, 120, 180, 200",
	"How many minutes in 3&frac12; hours?, 210, 200, 170, 160",
	"How many minutes in &frac34; of a hour?, 45, 40, 60, 30",
	"How many minutes in &frac23; of a hour?, 40, 30, 27, 45",
	"How many minutes in 1&frac14; hours?, 75, 80, 90, 100",
	"How many minutes in 1&frac34; hours?, 105, 100, 115, 95",

	"How many hours are 120 minutes?,2 Hours, 1&frac34; Hours, 2&frac14; Hours, 3 Hours",
	"How many hours are 90 minutes?,1&frac12; Hours, 1&frac34; Hours, 1&frac14; Hours, 1.75 Hours",
	"A job is started at 10:30 am<br>If the job takes 3 hours when does it finish?, 13:30, 12:30, 2:30pm, 01:30",
	"A job is started at 09:45 am<br>If the job takes 1&frac12 hours when does it finish?, 11:15, 23:15, 10:15, 12:15",
	"A job is started at 09:15 am<br>If the job takes 90 minutes when does it finish?, 10:45, 22:45, 11:15, 11:00",
	"A job is started at 11:15 am<br>If the job takes 2&frac34 hours when does it finish?, 14:00, 15:00, 13:45, 13:30",
	"A job is started at 1:30 PM<br>If the job takes 2&frac34; hours when does it finish?, 16:15, 15:15, 04:15, 3:45 PM",
	"A job is started at 15:15<br>If the job takes 1&frac14; hours when does it finish?, 16:30, 17:30, 16:45, 17:45",
	"A job is started at 13:45<br>If the job takes 6&frac12; hours when does it finish?, 8:15 PM, 20:30, 19:45, 21:15",

	"A 2 hour job finishes at 16:30<br>When did the job start?, 14:30, 02:30, 13:30, 15:30",
	"A 2 hour job finishes at 2:30 PM<br>When did the job start?, 12:30, 00:30, 11:30, 13:30",
	"A 3&frac12; hour job finishes at 16:00<br>When did the job start?, 12:30, 13:30, 11:30, 14:30",
	"A 4&frac12; hour job finishes at 16:00<br>When did the job start?, 11:30, 12:30, 10:30, 13:30",
	"A 5&frac12; hour job finishes at 16:00<br>When did the job start?, 10:30, 11:30, 09:30, 12:30",
	"A 5&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 10:00, 10:30, 11:30, 11:00",
	"A 3&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 12:00, 12:30, 13:30, 13:00",
	"A 4&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 11:00, 11:30, 12:30, 12:00",
	"A 6&frac12; hour job finishes at 16:00<br>When did the job start (allow for a 30 minutes lunch break)?, 09:00, 09:30, 10:30, 10:00",

	"A car travels for &frac12; hour at 60 MPH.<br>How far does it travel?, 30 Miles, 45 Miles, 60 Miles, 20 Miles",
	"A car travels for 2 hours at 60 MPH.<br>How far does it travel?, 120 Miles, 60 Miles, 80 Miles, 100 Miles",
	"A car travels for 120 minutes at 60 MPH.<br>How far does it travel?, 120 Miles, 60 Miles, 80 Miles, 100 Miles",
	"A car travels for 1&frac12; hours at 60 MPH.<br>How far does it travel?, 90 Miles, 80 Miles, 120 Miles, 75 Miles",
	"A car travels for 90 minutes at 60 MPH.<br>How far does it travel?, 90 Miles, 80 Miles, 120 Miles, 75 Miles",
	"A car travels for 1&frac14; hours at 60 MPH.<br>How far does it travel?, 75 Miles, 80 Miles, 90 Miles, 120 Miles",
	
	"A car travels for &frac12; hour at 40 MPH.<br>How far does it travel?, 20 Miles, 40 Miles, 30 Miles, 15 Miles",
	"A car travels for 2 hours at 40 MPH.<br>How far does it travel?, 80 Miles, 40 Miles, 60 Miles, 70 Miles",
	"A car travels for 1&frac12; hours at 40 MPH.<br>How far does it travel?, 60 Miles, 80 Miles, 100 Miles, 50 Miles",
	"A car travels for 90 minutes at 40 MPH.<br>How far does it travel?, 60 Miles, 80 Miles, 100 Miles, 50 Miles",
	"A car travels for 1&frac14; hours at 40 MPH.<br>How far does it travel?, 50 Miles, 60 Miles, 70 Miles, 80 Miles",

	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
		"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
		"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
		
	"10cm = 1m, FALSE, TRUE,TRUE, FALSE",
	"100mm = 1m, FALSE, TRUE,TRUE, FALSE",
	"1000mm = 1km, FALSE, TRUE,TRUE, FALSE",
	"100g = 1kg, FALSE, TRUE,TRUE, FALSE",
	"10g = 1kg, FALSE, TRUE,TRUE, FALSE",
	"100kg = 1 tonne, FALSE, TRUE,TRUE, FALSE",
	"200kg = 2 tonnes, FALSE, TRUE,TRUE, FALSE",
	
	"How many millilitres in 3 centilitres?,30ml,300ml, 0.3ml, 0.03ml",
	"How many millilitres in 5 litres?,5000ml,500ml, 50ml, 0.5ml",
	
	"What unit would be best to measure the length of your arm?,Centimetres, Metres, Litres, Millilitres",
	"What unit would be best to measure the length of your thumb nail?,Millimetres, Centimetres, Metres, Millilitres",
	"What unit would be best to measure the weight of a cruise liner,Tonnes, Kilograms, Kilometres, Grams",
	"What unit would be best to measure the weight of a suitcase full of clothing,Kilograms, Metres, Tonnes, Grams",

	"The AREA of a square is 25 cm&sup2.<br>What is the length of its sides?, 5 cm, 10 cm, 4 cm, 6 cm",
	"The AREA of a square is 16 cm&sup2.<br>What is the length of its sides?, 4 cm, 10 cm, 5 cm, 6 cm",
	"The AREA of a square is 9 cm&sup2.<br>What is the length of its sides?, 3 cm, 10 cm, 5 cm, 4 cm",
	"The AREA of a rectangle is 15 cm&sup2.<br>Choose a possible length for its sides?, 3 cm and 5 cm, 4 cm and 5 cm, 2 cm and 5 cm, 6 cm and 4 cm",
	"The AREA of a rectangle is 24 cm&sup2.<br>Choose a possible length for its sides?, 6 cm and 4 cm, 4 cm and 7 cm, 3 cm and 6 cm, 6 cm and 5 cm",
	"The AREA of a rectangle is 28 cm&sup2.<br>Choose a possible length for its sides?, 7 cm and 4 cm, 4 cm and 6 cm, 3 cm and 8 cm, 6 cm and 7 cm",
	
	"The PERIMETER of a square is 20 cm.<br>What is the length of its sides?, 5 cm, 8 cm, 6 cm, 7 cm",
	"The PERIMETER of a square is 24 cm.<br>What is the length of its sides?, 6 cm, 8 cm, 5 cm, 7 cm",
	"The PERIMETER of a square is 28 cm.<br>What is the length of its sides?, 7 cm, 8 cm, 5 cm, 6 cm",
	"The PERIMETER of a square is 32 cm.<br>What is the length of its sides?, 8 cm, 7 cm, 5 cm, 6 cm",
	
	"The AREA of a square is 25 cm&sup2.<br>What is the length of its sides?, 5 cm, 10 cm, 4 cm, 6 cm",
	"The AREA of a square is 16 cm&sup2.<br>What is the length of its sides?, 4 cm, 10 cm, 5 cm, 6 cm",
	"The AREA of a square is 9 cm&sup2.<br>What is the length of its sides?, 3 cm, 10 cm, 5 cm, 4 cm",
	"The AREA of a rectangle is 15 cm&sup2.<br>Choose a possible length for its sides?, 3 cm and 5 cm, 4 cm and 5 cm, 2 cm and 5 cm, 6 cm and 4 cm",
	"The AREA of a rectangle is 24 cm&sup2.<br>Choose a possible length for its sides?, 6 cm and 4 cm, 4 cm and 7 cm, 3 cm and 6 cm, 6 cm and 5 cm",
	"The AREA of a rectangle is 28 cm&sup2.<br>Choose a possible length for its sides?, 7 cm and 4 cm, 4 cm and 6 cm, 3 cm and 8 cm, 6 cm and 7 cm",
	
	"The PERIMETER of a square is 20 cm.<br>What is the length of its sides?, 5 cm, 8 cm, 6 cm, 7 cm",
	"The PERIMETER of a square is 24 cm.<br>What is the length of its sides?, 6 cm, 8 cm, 5 cm, 7 cm",
	"The PERIMETER of a square is 28 cm.<br>What is the length of its sides?, 7 cm, 8 cm, 5 cm, 6 cm",
	"The PERIMETER of a square is 32 cm.<br>What is the length of its sides?, 8 cm, 7 cm, 5 cm, 6 cm",
	
	"What is the probability of getting 6 when throwing a fair 6 sided dice?, &frac16;, &frac12;, &frac13;, &frac14;",
	"What is the probability of getting an EVEN number when throwing a fair 6 sided dice?, &frac12;, &frac16;, &frac13;, &frac14;",
	"What is the probability of getting an ODD number when throwing a fair 6 sided dice?, &frac12;, &frac16;, &frac13;, &frac14;",
	"What is the probability of getting a 5 or a 6 when throwing a fair 6 sided dice?, &frac13;, &frac34;, &frac23;, &frac16;",
	"What is the probability of getting LESS THAN 3 when throwing a fair 6 sided dice?, &frac13;, &frac34;, &frac23;, &frac16;",
	"What is the probability of getting MORE THAN 2 when throwing a fair 6 sided dice?, &frac23;, &frac34;, &frac12;, &frac16;",
	
	"What is the probability of getting MORE THAN 3 when throwing a fair 6 sided dice?, &frac12;, &frac14;, &frac13;, &frac16;",
	"What is the probability of getting LESS THAN 4 when throwing a fair 6 sided dice?, &frac12;, &frac14;, &frac13;, &frac16;",
	
	"A 8 sided fair spinner is spun<br>What are the chances of it landing on 5?, &frac18;, &frac15;, &frac14;, &frac13;",
	"A 8 sided fair spinner is spun<br>What are the chances of it landing on either 1  2 or 3?, &frac38;, &frac35;, &frac13;, &frac23;",
	
	"The weather forecast says we have 10% chance of rain.<br><br>What are the chances of it raining?, Unlikely, Certain, Evens, Likely",
	"The weather forecast says we have 75% chance of rain.<br><br>What are the chances of it raining?, Likely, Certain, Evens, Unlikely",
	"The weather forecast says we have 50% chance of rain.<br><br>What are the chances of it raining?, Evens, Certain, Likely, Unlikely",
	"The weather forecast says we have 100% chance of rain.<br><br>What are the chances of it raining?, Certain, Evens, Likely, Unlikely",
	"The weather forecast says we have 0% chance of rain.<br><br>What are the chances of it raining?, Impossible, Evens, Likely, Unlikely",
	
	"1.5m plus 50cm is:, 2m, 250cm, 175cm, 1.55m",
	"Half of 1kg is:, 500g, 0.5g, 50g, 5000g",
	"Half of 1km is:, 500m, 0.5m, 50m, 5000m",
	"Half of 1cm is:, 5mm, 50mm, 0.5mm, 0.05mm",
	"Half of 1 Litre is:, 50cl, 50ml, 5ml, 5cl",
	"Half of 1 Litre is:, 500ml, 50ml, 5ml, 500cl",
	"Half of 1m is:, 50cm, 500cm, 5000mm, 50mm",

	"How many metres in<br> 3 km?, 3000m, 300m, 30m, 30000m",
	"How many centimetres in<br> 1.5m?,150cm, 1500cm, 15cm, 15000cm",
	"How many millimetres in<br> 4cm?,40mm, 400mm, 4000mm, 0.4mm",
	"How many metres in<br> 1.75km?,1750m, 175m, 17500m, 17.5m",
	"How many grams in<br> 2kg?,2000g, 200g, 20g, 20000g",
	"How many kilograms in<br> 3500g?,3.5kg, 350kg, 35kg, 0.35kg",
	
	"What is the volume of a cuboid with height of 2cm&#44; a width of 3cm&#44 and a depth of 4cm?,24cm&sup3,234cm&sup3,9cm&sup3,20cm&sup3",
	"What is the volume of a cuboid with height of 3cm&#44; a width of 4cm&#44 and a depth of 5cm?,60cm&sup3,345cm&sup3,12cm&sup3,35cm&sup3",
	"What is the volume of a cardboard box with height of 3cm&#44; a width of 5cm&#44 and a depth of 4cm?,60cm&sup3,354cm&sup3,12cm&sup3,32cm&sup3",
	"What is the volume of a cuboid with height of 1cm&#44; a width of 1cm&#44 and a depth of 1cm?,1cm&sup3,111cm&sup3,3cm&sup3,30cm&sup3",
	"A container of height 1m&#44; width 3m&#44 and depth 2m is filled half full with smaller boxes.<br>What volume of the container is filled?,3m&sup3,66m&sup3,6m&sup3,4m&sup3",

	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 6cm and width 9cm?, 30cm, 54cm, 69cm, 15cm",
	"What is the perimeter of a rectangle with height 10cm and width 12cm?, 44cm, 22cm, 120cm, 100cm",
	"What is the perimeter of a rectangle with height 8cm and width 4cm?, 24cm, 32cm, 12cm, 84cm",
	
	
	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 6cm and width 9cm?, 30cm, 54cm, 69cm, 15cm",
	"What is the perimeter of a rectangle with height 10cm and width 12cm?, 44cm, 22cm, 120cm, 100cm",
	"What is the perimeter of a rectangle with height 8cm and width 4cm?, 24cm, 32cm, 12cm, 84cm",
	
	"What is the area of a rectangle with height 5cm and width 10cm?,50cm&sup2, 25cm&sup2, 30cm&sup2, 50cm",
	"What is the area of a rectangle with height 10cm and width 12cm?,120cm&sup2, 22cm&sup2, 44cm&sup2, 120cm",
	"What is the area of a rectangle with height 6cm and width 7cm?,42cm&sup2, 26cm&sup2, 67cm&sup2, 42cm",
	"What is the area of a rectangle with height 9cm and width 8cm?,72cm&sup2, 34cm&sup2, 98cm&sup2, 72cm",
	"What is the area of a rectangle with height 5cm and width 9cm?,45cm&sup2, 28cm&sup2, 59cm&sup2, 45cm",
	"A house costs £180000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£36000,£18000,£3600,£1800",
	"A house costs £210000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£42000,£21000,£4200,£2100",
	"A house costs £250000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£50000,£25000,£5000,£2500",
	"A house costs £150000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£30000,£15000,£3000,£1500",
	"A house costs £130000. You have to pay a deposit of 20%.<br><br>How much deposit do you have to pay?,£26000,£13000,£2600,£1300",

	"Select the largest fraction:<br>&frac12; &#44; &frac13; &#44; &frac14 &#44; &frac23;,&frac23;,&frac14;,&frac13;,&frac12;",
	"Select the smallest fraction:<br>&frac12; &#44; &frac13; &#44; &frac14 &#44; &frac23;,&frac14;,&frac23;,&frac13;,&frac12;",
	
	"Select the largest fraction:<br>&frac35; &#44; &frac23; &#44; &frac34 &#44; &frac16;,&frac34;,&frac23;,&frac16;,&frac35;",
	"Select the smallest fraction:<br>&frac35; &#44; &frac23; &#44; &frac34 &#44; &frac16;,&frac16;,&frac23;,&frac34;,&frac35;",
	
	"Select the largest fraction:<br>&frac45; &#44; &frac23; &#44; &frac12 &#44; &frac34;,&frac45;,&frac23;,&frac12;,&frac34;",
	"Select the smallest fraction:<br>&frac45; &#44; &frac23; &#44; &frac12 &#44; &frac34;,&frac12;,&frac23;,&frac45;,&frac34;",

/*
	"1% of 50,0.5,5,0.05,1",
	"1% of 100,1,0.1,0.01,10",
	"1% of 200,2,0.2,0.02,20",
	"1% of 300,3,0.3,0.03,30",
	"1% of 400,4,0.4,0.04,40",
	
	"2% of 50,1,0.1,0.2,2",
	"2% of 100,2,0.2,0.02,20",
	"2% of 200,4,0.4,0.2,2",
	"2% of 300,6,0.6,0.2,20",
	"2% of 400,8,0.8,0.08,20",
	
	"3% of 50,1.5,0.15,0.3,3",
	"3% of 100,3,0.3,0.03,30",
	"3% of 200,6,0.6,0.3,30",
	"3% of 300,9,0.9,0.3,1.5",
	"3% of 400,12,0.12,1.2,30",
	*/
	"4% of 50,2,0.4,0.2,4",
	"4% of 100,4,0.4,0.04,5",
	"4% of 200,8,0.8,0.4,6",
	"4% of 300,12,1.2,4,7",
	"4% of 400,16,1.6,4,8",
	
	"5% of 50,2.5,2.0,3.5,1.5",
	"5% of 100,5,0.5,0.05,50",
	"5% of 200,10,1,2,5",
	"5% of 300,15,5,9,12",
	"5% of 400,20,12,10,16",
	
	"I am a six sided 2D shape.<br><br>What am I?, Hexagon, Pentagon, Octagon, Quadrilateral",
	"I am a five sided 2D shape.<br><br>What am I?, Pentagon, Hexagon, Octagon, Quadrilateral",
	"I am a eight sided 2D shape.<br><br>What am I?, Octagon, Hexagon, Pentagon, Quadrilateral",
	"I am a four sided 2D shape.<br><br>What am I?, Quadrilateral, Hexagon, Pentagon, Octagon",
	"I am a 3D shape and my faces are all rectangles.<br><br>What am I?, Cuboid, Cylinder, Prism, Sphere",
	"I am a 3D shape and I have no flat faces.<br><br>What am I?, Sphere, Cylinder, Prism, Cuboid",
	"I am a 3D shape with a circle at each end.<br><br>What am I?, Cylinder, Sphere, Quadrilateral, Cuboid",

	"Which is the most likely measurement of the length of your thumb?,4.5cm, 4.5mm, 4.5m, 4.5km",
	"Which is the most likely measurement of the height of a class room door?,2.2m, 2.20mm, 2.2cm, 2.2km",
	"Which is the most likely measurement for the weight of an apple?,180g, 3kg, 5g, 0.75kg",
	"Which is the most likely measurement of the length of a fire engine?,8m, 80cm, 0.8km, 800mm",

	"2 x 2 x 2,8,6,12,10",
	"2 x 2 x 2 x 2,16,8,12,32",
	"1 x 1 x 1,1,3,111,2",
	"2 x 3 x 3,18,233,15,10",
	"1 x 3 x 2,6,132,5,8",
	
	"&#40; 5 + 4 &#41; x 2,18,13,40,11",
	"&#40; 6 + 4 &#41; x 3,30,13,72,18",
	"&#40; 2 + 3 &#41; x 5,25,30,10,35",

	"What is the volume of a cuboid with height of 2cm&#44; a width of 3cm&#44 and a depth of 4cm?,24cm&sup3,234cm&sup3,9cm&sup3,20cm&sup3",
	"What is the volume of a cuboid with height of 3cm&#44; a width of 4cm&#44 and a depth of 5cm?,60cm&sup3,345cm&sup3,12cm&sup3,35cm&sup3",
	"What is the volume of a cardboard box with height of 3cm&#44; a width of 5cm&#44 and a depth of 4cm?,60cm&sup3,354cm&sup3,12cm&sup3,32cm&sup3",
	"What is the volume of a cuboid with height of 1cm&#44; a width of 1cm&#44 and a depth of 1cm?,1cm&sup3,111cm&sup3,3cm&sup3,30cm&sup3",
	"A container of height 1m&#44; width 3m&#44 and depth 2m is filled half full with smaller boxes.<br>What volume of the container is filled?,3m&sup3,66m&sup3,6m&sup3,4m&sup3",

	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 5cm and width 10cm?,30cm, 25cm, 50cm, 15cm",
	"What is the perimeter of a rectangle with height 6cm and width 9cm?, 30cm, 54cm, 69cm, 15cm",
	"What is the perimeter of a rectangle with height 10cm and width 12cm?, 44cm, 22cm, 120cm, 100cm",
	"What is the perimeter of a rectangle with height 8cm and width 4cm?, 24cm, 32cm, 12cm, 84cm",
	
	"What is the area of a rectangle with height 5cm and width 10cm?,50cm&sup2, 25cm&sup2, 30cm&sup2, 50cm",
	"What is the area of a rectangle with height 10cm and width 12cm?,120cm&sup2, 22cm&sup2, 44cm&sup2, 120cm",
	"What is the area of a rectangle with height 6cm and width 7cm?,42cm&sup2, 26cm&sup2, 67cm&sup2, 42cm",
	"What is the area of a rectangle with height 9cm and width 8cm?,72cm&sup2, 34cm&sup2, 98cm&sup2, 72cm",
	"What is the area of a rectangle with height 5cm and width 9cm?,45cm&sup2, 28cm&sup2, 59cm&sup2, 45cm",
	
	"What compass point is at 90 degrees clockwise from North?, East, West, South, North",
	"What compass point is at 90 degrees clockwise from East?, South, West, East, North",
	"What compass point is at 90 degrees clockwise from South?, West, South, East, North",
	"What compass point is at 90 degrees clockwise from West?, North, South, East, West",

	"What compass point is at 180 degrees clockwise from North?, South, West, East, North",
	"What compass point is at 180 degrees clockwise from South?, North, West, East, South",
	
	"What compass point is at 270 degrees clockwise from North?, West, South, East, North",
	"What compass point is at 360 degrees clockwise from North?, North, South, East, West",
	
	"What compass point is at 90 degrees anti-clockwise from North?, West, East, South, North",
	"What compass point is at 90 degrees anti-clockwise from East?, North, East, South, West",
	"What compass point is at 90 degrees anti-clockwise from South?, East, West, South, North",
	"What compass point is at 90 degrees anti-clockwise from West?, South, North, East, West",
	
	"What compass point is at 180 degrees anti-clockwise from North?, South, East, West, North",
	"What compass point is at 180 degrees anti-clockwise from East?, West, North, South, East",
	"What compass point is at 180 degrees anti-clockwise from South?, North, West, South, East",
	"What compass point is at 180 degrees anti-clockwise from West?, East, North, South, West",
	
	"I am facing North. I turn 90 degrees clockwise and then 180 anti-clockwise.<br>What direction do I face now?,West, North, South, East",
	"I am facing North. I turn a right angle clockwise.<br>What direction do I face now?,East, North, South, West",
	"I am facing North. I turn 180 degrees clockwise and then 180 anti-clockwise.<br>What direction do I face now?,North, West, South, East",
	"I am facing South. I turn 90 degrees clockwise and then 180 anti-clockwise.<br>What direction do I face now?,East, North, South, West",
	"I am facing West. I turn 270 degrees clockwise.<br>What direction do I face now?,South, North, East, West",

	"The weather forecast says we have 10% chance of rain.<br><br>What are the chances of it raining?, Unlikely, Certain, Evens, Likely",
	"The weather forecast says we have 75% chance of rain.<br><br>What are the chances of it raining?, Likely, Certain, Evens, Unlikely",
	"The weather forecast says we have 50% chance of rain.<br><br>What are the chances of it raining?, Evens, Certain, Likely, Unlikely",
	"The weather forecast says we have 100% chance of rain.<br><br>What are the chances of it raining?, Certain, Evens, Likely, Unlikely",
	"The weather forecast says we have 0% chance of rain.<br><br>What are the chances of it raining?, Impossible, Evens, Likely, Unlikely",
	
	"What are the chances of getting heads when tossing a coin?, 50%, 25%, 75%, 100%",
	"What are the chances of getting heads when tossing a coin?, &frac12;, &frac13;, &frac23;, &frac34;",
	
	"The weather forecast says we have 25% chance of rain tomorrow.<br><br>What are the chances of it staying dry?, 75%, 25%, 50%, 90%",
	
	"You ask a friend to think of any whole number [no fractions or decimals]<br><br>What are the chances of the number being even?, 50%, 25%, 75%, 100%",
	
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being 10?, Unlikely, Impossible, Evens, Likely",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being less than 11?, Evens, Impossible, Unlikely, Likely",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being more than 10?, Evens, Impossible, Unlikely, Likely",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being more than 5?, &frac34;, &frac13;, &frac23;, &frac35;",
	"You ask someone think of any number from 1 to 20 [including 1 and 20]<br><br>What are the chances of the number being more than 15?, 25%, 50%, 75%, 100%",

	"A triangle has 3 equal sides and 3 equal angles<br><br>What type of triangle is it?,Equilateral Triangle,Isosceles Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has 3 angles of 60 degrees<br><br>What type of triangle is it?,Equilateral Triangle,Isosceles Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has 3 sides of 15cm each<br><br>What type of triangle is it?,Equilateral Triangle,Isosceles Triangle, Scalene Triangle, Right Angled Triangle",
	
	"A triangle has 2 equal sides and 2 equal angles<br><br>What type of triangle is it?,Isosceles Triangle,Equilateral Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has angles of 40&#44; 40 and 100 degrees<br><br>What type of triangle is it?,Isosceles Triangle,Equilateral Triangle, Scalene Triangle, Right Angled Triangle",
	"A triangle has sides of 20&#44; 20 and 10 centimetres<br><br>What type of triangle is it?,Isosceles Triangle,Equilateral Triangle, Scalene Triangle, Right Angled Triangle",
	
	"A triangle has no equal sides and no equal angles<br><br>What type of triangle is it?,Scalene Triangle,Isosceles Triangle,Equilateral Triangle, Right Angled Triangle",
	"A triangle has angles of 20&#44; 60 and 100 degrees<br><br>What type of triangle is it?,Scalene Triangle,Isosceles Triangle,Equilateral Triangle, Right Angled Triangle",
	"A triangle has sides of 10&#44; 12 and 15 centimetres<br><br>What type of triangle is it?,Scalene Triangle,Isosceles Triangle,Equilateral Triangle, Right Angled Triangle",
	
	"A triangle has one angle of 90 degrees<br><br>What type of triangle is it?,Right Angled Triangle,Scalene Triangle,Isosceles Triangle,Equilateral Triangle",
	
	"How many millilitres in 3 centilitres?,30ml,300ml, 0.3ml, 0.03ml",
	"How many millilitres in 5 litres?,5000ml,500ml, 50ml, 0.5ml",
	
	"What unit would be best to measure the length of your arm?,Centimetres, Metres, Litres, Millilitres",
	"What unit would be best to measure the length of your thumb nail?,Millimetres, Centimetres, Metres, Millilitres",
	"What unit would be best to measure the weight of a cruise liner,Tonnes, Kilograms, Kilometres, Grams",
	"What unit would be best to measure the weight of a suitcase full of clothing,Kilograms, Metres, Tonnes, Grams",
	
	"Which is longest measurement?,0.75km, 650m, 3000cm, 40000mm",
	"Which is longest measurement?, 1500m, 1.25km, 4500cm, 750000mm",


	"How many metres in<br> 3 km?, 3000m, 300m, 30m, 30000m",
	"How many centimetres in<br> 1.5m?,150cm, 1500cm, 15cm, 15000cm",
	"How many millimetres in<br> 4cm?,40mm, 400mm, 4000mm, 0.4mm",
	"How many metres in<br> 1.75km?,1750m, 175m, 17500m, 17.5m",
	"How many grams in<br> 2kg?,2000g, 200g, 20g, 20000g",
	"How many kilograms in<br> 3500g?,3.5kg, 350kg, 35kg, 0.35kg",
	
	"Which is correct?,10mm = 1cm, 10cm = 1m, 100m = 1km, 100mm = 1m",
	"Which is correct?,1000g = 1kg, 100g = 1kg, 10g = 1kg, 100kg = 1g",
	"Which is correct?,100cm = 1m, 10cm = 1mm, 1cm = 100mm, 100m = 1000cm",
	
	"Which is a unit of weight?, kilogram, centimetre, litre, kilometre",
	"Which is a unit of length?, centimetre, kilogram, litre, millilitre",
	"Which is a unit of volume?, millilitre, kilogram, tonne, centimetre",
	
	"Which is the odd one out?, millimetre, millilitre, centilitre, litre",
	"Which is the odd one out?, kilogram, kilometre, centimetre, metre",
	
	"1.5m plus 50cm is:, 2m, 250cm, 175cm, 1.55m",
	"Half of 1kg is:, 500g, 0.5g, 50g, 5000g",
	
	"Which is the heaviest?,2.5kg, 300g, 250g, 2400g",
	
	"1cm = 10mm, TRUE, FALSE,TRUE, FALSE",
	"100cm = 1m, TRUE, FALSE,TRUE, FALSE",
	"1000m = 1km, TRUE, FALSE,TRUE, FALSE",
	"1000g = 1kg, TRUE, FALSE,TRUE, FALSE",
	"1000kg = 1 tonne, TRUE, FALSE,TRUE, FALSE",
	"3500kg = 3.5 tonne, TRUE, FALSE,TRUE, FALSE",
	"1000ml = 1 L, TRUE, FALSE,TRUE, FALSE",
	"2500ml = 2.5 L, TRUE, FALSE,TRUE, FALSE",
	"100cl = 1 L, TRUE, FALSE,TRUE, FALSE",
	
	"10cm = 1m, FALSE, TRUE,TRUE, FALSE",
	"100mm = 1m, FALSE, TRUE,TRUE, FALSE",
	"1000mm = 1km, FALSE, TRUE,TRUE, FALSE",
	"100g = 1kg, FALSE, TRUE,TRUE, FALSE",
	"10g = 1kg, FALSE, TRUE,TRUE, FALSE",
	"100kg = 1 tonne, FALSE, TRUE,TRUE, FALSE",
	"200kg = 2 tonnes, FALSE, TRUE,TRUE, FALSE",

	"12 + 29,41,43,31,51",
	"15 + 16,31,21,41,32",
	"17 + 24,41,31,51,40",
	"18 + 27,45,55,65,46",
	"23 + 28,51,61,71,53",
	"39 + 22,61,71,51,62",
	"28 + 14,42,52,32,44",
	"33 - 15,18,17,19,16",
	"25 - 17,8,7,9,6",
	"29 - 14,15,14,16,13",
	"47 - 28,19,17,18,16",
	"23 - 7,16,15,17,18",
	"51 - 12,39,29,38,37",
	"112 - 22,90,80,92,81",
	
	"5 + 7 - 4,8, 6, 7, 5",
	"9 + 8 - 5,12, 11, 13, 10",
	"15 - 7 + 6,14, 13, 15, 12",
	"22 - 13 + 7,16, 15, 17, 14",
	"13 + 8 + 7,28, 26, 25, 29",
	
	"10 x 10 x 10, 1000, 100, 10000, 100000",
	"10 x 10, 100, 1000, 10000, 100000",
	"The AREA of a square is 25 cm&sup2.<br>What is the length of its sides?, 5 cm, 10 cm, 4 cm, 6 cm",
	"The AREA of a square is 16 cm&sup2.<br>What is the length of its sides?, 4 cm, 10 cm, 5 cm, 6 cm",
	"The AREA of a square is 9 cm&sup2.<br>What is the length of its sides?, 3 cm, 10 cm, 5 cm, 4 cm",
	"The AREA of a rectangle is 15 cm&sup2.<br>Choose a possible length for its sides?, 3 cm and 5 cm, 4 cm and 5 cm, 2 cm and 5 cm, 6 cm and 4 cm",
	"The AREA of a rectangle is 24 cm&sup2.<br>Choose a possible length for its sides?, 6 cm and 4 cm, 4 cm and 7 cm, 3 cm and 6 cm, 6 cm and 5 cm",
	"The AREA of a rectangle is 28 cm&sup2.<br>Choose a possible length for its sides?, 7 cm and 4 cm, 4 cm and 6 cm, 3 cm and 8 cm, 6 cm and 7 cm",
	
	"The PERIMETER of a square is 20 cm.<br>What is the length of its sides?, 5 cm, 8 cm, 6 cm, 7 cm",
	"The PERIMETER of a square is 24 cm.<br>What is the length of its sides?, 6 cm, 8 cm, 5 cm, 7 cm",
	"The PERIMETER of a square is 28 cm.<br>What is the length of its sides?, 7 cm, 8 cm, 5 cm, 6 cm",
	"The PERIMETER of a square is 32 cm.<br>What is the length of its sides?, 8 cm, 7 cm, 5 cm, 6 cm",
	
	"The PERIMETER of a rectangle is 16 cm.<br>Choose a possible length for its sides?, 3 cm and 5 cm, 4 cm and 5 cm, 2 cm and 5 cm, 6 cm and 4 cm",
	"The PERIMETER of a rectangle is 20 cm.<br>Choose a possible length for its sides?, 6 cm and 4 cm, 4 cm and 7 cm, 3 cm and 6 cm, 6 cm and 5 cm",
	"The PERIMETER of a rectangle is 22 cm.<br>Choose a possible length for its sides?, 7 cm and 4 cm, 4 cm and 6 cm, 5 cm and 8 cm, 6 cm and 7 cm",
	
	"The PERIMETER of an equilateral triangle is 18 cm.<br>Choose a possible length for its sides?, 6 cm, 4 cm, 5 cm, 7 cm",
	"The PERIMETER of an equilateral triangle is 36 cm.<br>Choose a possible length for its sides?, 12 cm, 14 cm, 11 cm, 13 cm",
	
	"2 x 14,28,38,26,24",
	"2 x 16,32,30,42,40,18",
	"2 x 18,36,46,38,20",
	"2 x 19,38,48,36,34",
	"2 x 14,28,38,26,24",
	"2 x 16,32,30,42,40,18",
	"2 x 18,36,46,38,20",
	"2 x 19,38,48,36,34",
	"3 x 8, 24, 22, 26, 28",
	"3 x 9, 27, 28, 18, 26",
	"3 x 12, 36, 34, 38, 32",
	"4 x 8, 32, 34, 36, 30",
	"5 x 4, 20, 25, 15, 24",
	"5 x 6, 30, 25, 35, 36",
	"5 x 7, 35, 40, 30, 25",
	"5 x 8, 40, 45, 42, 35",
	"5 x 9, 45, 40, 46, 35",
	"6 x 8,48,38,42,56",
	"6 x 6,36,30,32,42",
	"7 x 8,56,46,66,58",
	"9 x 8,72,64,62,74",
	"4 x 9,36,38,27,45",
	"3 x 24,72,82,62,76",
	
	"12 &#247 3,4,3,5,6",
	"24 &#247 3,8,6,7,9",
	"36 &#247 4,9,8,7,6",
	"18 &#247 3,6,5,9,7",
	"48 &#247 6,8,6,9,7",
	"28 &#247 4,7,6,5,8",
	
	"10% of 120,12,10,20,21",
	"10% of 2000,200,120,20,120",
	"10% of 350,35,30,25,70",
	"10% of 800,80,60,100,40",
	
	"20% of 2000,400,200,600,120",
	"20% of 50,10,5,15,20",
	"5% of 240,12,24,40,50",
	"5% of 480,24,48,12,50",
	"25% of 60,15,6,30,20",
	"25% of 120,30,24,36,25",
	"one half of 120,60,25,50,50",
	"one third of 48,16,8,32,30",
	"one third of 27,9,18,3,8",
	"one quarter of 24,6,12,8,4",
	"one quarter of 88,22,32,48,28",
	"two thirds of 60,40,23,20,45",
	
	"&frac12; of 36, 18, 14, 30, 12",
	"&frac12; of 34, 17, 16, 18, 19",
	"&frac13; of 30, 10, 15, 12, 3",
	"&frac13; of 90, 30, 45, 9, 33",
	"&frac23; of 90, 60, 45, 30, 23",
	"&frac14; of 40, 10, 20, 30, 14",
	"&frac34; of 40, 30, 20, 34, 10",
	
	"3&sup2;,9,6,8,32",
	"4&sup2;,16,8,6,42",
	"5&sup2;,25,10,7,52",
	"6&sup2;,36,12,8,62",
	"7&sup2;,49,14,9,72",
	"8&sup2;,64,16,10,82",
	"9&sup2;,81,18,11,92",
	"10&sup2;,100,20,12,1000",
	"11&sup2;,121,111,120,22",
	"12&sup2;,144,24,120,140",
	
	"2&sup3;,8,6,4,222",
	"3&sup3;,27,33,9,333",
	
	"Use the rules of BIDMAS to work out<br><br>2 + 3 x 3<br><br>,11,15,9,8",
	"Use the rules of BIDMAS to work out<br><br>2 x 3 + 5<br><br>,11,16,10,12",
	"Use the rules of BIDMAS to work out<br><br>6 + 6 &#247 3<br><br>,8,4,5,3",
	
	"What is the area of a rectangle of<br><br>height 3cm and width 4cm?,12cm&sup2;,7cm&sup2,14cm&sup2,12cm",
	"What is the perimeter of a rectangle of<br><br>height 3cm and width 4cm?,14cm,12cm&sup2;,7cm&sup2,14cm&sup2",
	"What is the area of a rectangle of<br><br>height 4cm and width 5cm?,20cm&sup2;,9cm&sup2,18cm&sup2,18cm",
	"What is the perimeter of a rectangle of<br><br>height 4cm and width 5cm?,18cm,9cm&sup2,18cm&sup2,20cm&sup2;",
	
	"A sofa costs £900. You get a third off the price.<br><br>How much do you pay?,£600,£300,£450,£500",
	"A car costs £2000. You get a quarter off the price.<br><br>How much do you pay?,£1500,£500,£1200,£1800",
	"A mobile phone costs £800. You get 10% off the price.<br><br>How much do you pay?,£720,£80,£600,£400",
	"A table costs £800. The price is increased by 25%.<br><br>What is the new price?,£1000,£1200,£880,£1200",
	"The area of a rectangle is:,Height times Width, All the sides added up, Height plus Width, Height divided by Width",
	"The perimeter of a rectangle is:,All the sides added up,Height times Width, Height plus Width, Height divided by Width",
	"Area of a rectangle is height x width, TRUE, FALSE,TRUE,FALSE",
	"The perimeter of any shape is the distance around the outside, TRUE, FALSE,TRUE,FALSE",
	"The perimeter of a rectangle is Height times by width, FALSE, TRUE,TRUE,FALSE",
	
	"What is the value of the digit 2<br>in the number 1245, 200, 20, 2, 2000",
	"What is the value of the digit 4<br>in the number 4378, 4000, 4, 400, 40",
	"What is the value of the digit 4<br>in the number 1.45, 4 tenths, 4, 40, 4 hundredths",
	"What is the value of the digit 3<br>in the number 1.538, 3 hundredths, 30, 3 tenths, 3",
	
	"What is the value of the digit 6<br>in the number 563780, 60000, 6000, 600000,60",
	"Round 363<br>to the nearest 100, 400, 300, 360, 370",
	"Round 2367<br>to the nearest 1000, 2000, 3000, 2400, 2300",
	"Round 6750<br>to the nearest 100, 6800, 6700, 7000, 6000",
	"Round 56<br>to the nearest 10, 60, 50, 65, 55",
	"Round 150<br>to the nearest 100, 200, 100, 15, 0",
	
	"Which number is this<br>Twenty four thousand three hundred and thirty two, 24332, 240332,24032,24302",
	"Which number is this<br>One thousand nine hundred and seventy, 1970, 19700,1907,19070",
	
	"Pick out an ODD number, 45, 26, 8, 12",
	"Pick out an ODD number, 23, 24, 18, 22",
	"Pick out an ODD number, 1171, 1170, 1700, 1174",
	"Pick out an ODD number, 19, 18, 16, 20",
	"Pick out an EVEN number, 46, 27, 7, 11",
	"Pick out an EVEN number, 24, 23, 19, 21",
	"Pick out an EVEN number, 788, 787, 785, 789",
	"Pick out an EVEN number, 18, 17, 19, 15",
	
	"Pick out a multiple of 3, 12, 10, 8, 14",
	"Pick out a multiple of 3, 24, 25, 16, 35",
	"Pick out a multiple of 4, 28, 18, 22, 15",
	"Pick out a multiple of 4, 12, 18, 26, 34",
	
	"In class there are 8 girls and 4 boys<br>What fraction of the class are girls?, 8/12, 4/8, 4/12, 8/4",
	"In bag there are 4 black balls and 6 red balls<br>What fraction of the balls are black?, 4/10, 6/10, 4/6, 6/4",
	
	"What is one half as a decimal?, 0.5, 0.2, 0.25, 0.05",
	"What is one quarter as a decimal?, 0.25, 0.52, 0.14, 0.4",
	"Which decimal is closest to one third?, 0.33, 0.25, 0.3, 0.13",
	
	"What is 50% as a decimal?, 0.5, 0.2, 0.25, 0.05",
	"What is 25% as a decimal?, 0.25, 0.52, 0.14, 0.4",
	"Which decimal is closest to 33%, 0.33, 0.25, 0.3, 0.13",
	
	"Which fraction is the same as 1/2, 3/6, 2/3, 4/10, 6/14",
	"Which fraction is the same as 1/3, 2/6, 2/5, 4/15, 6/20",
	"Which fraction is the same as 1/4, 3/12, 4/12, 3/9, 6/25",
	
	"Which of these numbers is the largest?<br><br>0.65&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.065&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.165, 0.7,0.065,0.165,0.65",
	"Which of these numbers is the largest?<br><br>0.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.13&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.125, 0.3,0.13,0.25,0.125",
	"Which of these numbers is the largest?<br><br>0.75&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.57&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5, 0.75,0.57,0.55,0.5",
	"Which of these numbers is the largest?<br><br>0.21&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.112&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.2, 0.21,0.112,0.12,0.2",
	"Which of these numbers is the smallest?<br><br>0.155&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.16&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.2, 0.155,0.25,0.16,0.2",
	"Which of these numbers is the smallest?<br><br>0.357&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.39&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.5, 0.357,0.4,0.39,0.5",
	"Which of these numbers is the smallest?<br><br>0.45&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.455&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.745, 0.45,0.6,0.455,0.745",
	
	"90 degrees is a:,Quarter Turn,Half Turn,Three Quarter Turn,Full Turn",
	"180 degrees is a:,Half Turn,Quarter Turn,Full Turn,Three Quarter Turn",
	"270 degrees is a:,Three Quarter Turn,Half Turn,Quarter Turn,Full Turn ",
	"360 degrees is a:, Full Turn,Three Quarter Turn,Half Turn,Quarter Turn",
	"30 degrees is a:,Acute Angle,Reflex Angle,Obtuse Angle,Right Angle",
	"90 degrees is a:,Right Angle,Acute Angle,Reflex Angle,Obtuse Angle",
	"120 degrees is a:,Obtuse Angle,Right Angle,Acute Angle,Reflex Angle",
	"240 degrees is a:,Reflex Angle,Obtuse Angle,Right Angle,Acute Angle",
	
	"A shape has 4 equal length sides and 4 right angles.<br><br>The shape is a?,Square,Rectangle, Rhombus, Parallelogram",
	"A shape has 2 pairs of equal length sides and 4 right angles.<br><br>The shape is a?,Rectangle,Square, Rhombus, Parallelogram",
	"I have	4 equal length sides; opposite sides are parallel; opposite angles are equal and I have two lines of symmetry<br><br>What am I?,Rhombus,Rectangle,Square, Parallelogram",
	"I have	2 pairs of equal length sides; opposite sides are parallel; opposite angles are equal and I have zero lines of symmetry<br><br>What am I?,Parallelogram,Rhombus,Rectangle,Square",
	"The distance from one side to the other straight through the middle of a circle is the:,Diameter,Radius,Circumference,Segment",
	"Half of the diameter of a circle is the:,Radius,Diameter,Circumference,Segment",
	"Twice the radius of a circle is the:,Diameter,Radius,Circumference,Segment",
	"The distance around the outside of a circle is the:,Circumference,Diameter,Radius,Segment",
	
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9645;</span>, 2, 1, 0, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9647;</span>, 2, 1, 0, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9723;</span>, 4, 1, 0, 2",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9649;</span>, 0, 1, 4, 2",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9707;</span>, 2, 1, 4, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9671;</span>, 4, 1, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9651;</span>, 3, 1, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9655;</span>, 3, 1, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:54px;\">&#9659;</span>, 1, 3, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9681;</span>, 1, 3, 2, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9683;</span>, 1, 3, 2, 4",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9706;</span>, 1, 3, 2, 0",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9710;</span>, 0, 3, 2, 1",
	"<span style=\"font-size:14px;\">How many lines of symmetry?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9712;</span>, 1, 3, 2, 0",
	
	"A MULTIPLE of the number 2 is:,Any number that appears the 2 times table,A number that divides into 2, The number multiplied by 2, Something else",
	"A FACTOR of the number 12 is:,Any number that divides into 12 exactly,Any number in the 12 times table, The number 24, Something else",
	"Select two factors of 12,3 and 4,4 and 5, 6 and 8, 2 and 5",
	"Select two factors of 15,3 and 5,4 and 5, 2 and 3, 3 and 4",
	"Select two factors of 20,4 and 5,4 and 6, 2 and 3, 3 and 4",
	"Select two multiples of 3,6 and 12,4 and 9, 6 and 10, 5 and 15",
	"Select two multiples of 4,8 and 12,4 and 9, 6 and 16, 12 and 15",
	"Select two multiples of 5,15 and 25,5 and 12, 16 and 24, 20 and 36",
	
	"A bag contains 8 RED balls. What is the probability of choosing a BLACK ball?, Impossible, Unlikely, Likely, Certain",
	"A bag contains 8 RED balls. What is the probability of choosing a RED ball?, Certain, Unlikely, Likely, Impossible",
	"A bag contains 2 RED balls and 10 BLACK balls. What is the probability of choosing a RED ball?, Unlikely, Likely, Certain, Even Chance",
	"A bag contains 2 RED balls and 10 BLACK balls. What is the probability of choosing a BLACK ball?, Likely, Unlikely, Certain, Even Chance",
	"A bag contains 5 RED balls and 5 BLACK balls. What is the probability of choosing a WHITE ball?, Impossible, Unlikely, Certain, Even Chance",
	"A bag contains 5 RED balls and 5 BLACK balls. What is the probability of choosing a RED ball?, Even Chance, Unlikely, Certain, Impossible",
	
	"What is the probability of getting 6 when throwing a fair 6 sided dice?, &frac16;, &frac12;, &frac13;, &frac14;",
	"What is the probability of getting an EVEN number when throwing a fair 6 sided dice?, &frac12;, &frac16;, &frac13;, &frac14;",
	"What is the probability of getting an ODD number when throwing a fair 6 sided dice?, &frac12;, &frac16;, &frac13;, &frac14;",
	"What is the probability of getting a 5 or a 6 when throwing a fair 6 sided dice?, &frac13;, &frac34;, &frac23;, &frac16;",
	"What is the probability of getting LESS THAN 3 when throwing a fair 6 sided dice?, &frac13;, &frac34;, &frac23;, &frac16;",
	"What is the probability of getting MORE THAN 2 when throwing a fair 6 sided dice?, &frac23;, &frac34;, &frac12;, &frac16;",
	
	"What is the probability of getting MORE THAN 3 when throwing a fair 6 sided dice?, &frac12;, &frac14;, &frac13;, &frac16;",
	"What is the probability of getting LESS THAN 4 when throwing a fair 6 sided dice?, &frac12;, &frac14;, &frac13;, &frac16;",
	
	"A 8 sided fair spinner is spun<br>What are the chances of it landing on 5?, &frac18;, &frac15;, &frac14;, &frac13;",
	"A 8 sided fair spinner is spun<br>What are the chances of it landing on either 1  2 or 3?, &frac38;, &frac35;, &frac13;, &frac23;",
	
	"<span style=\"font-size:14px;\">How many right angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9723;</span>, 4, 1, 3, 2",
	"<span style=\"font-size:14px;\">How many right angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 1, 2, 3, 0",
	"<span style=\"font-size:14px;\">How many right angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 1, 2, 3, 0",
	"<span style=\"font-size:14px;\">How many internal acute angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 2, 1, 3, 0",
	"<span style=\"font-size:14px;\">How many internal obtuse angles?&nbsp;&nbsp;&nbsp;</span><span style=\"font-size:46px;\">&#9722;</span>, 0, 1, 3, 2",
	
	
	"What is the missing number?<br>5 &#44; 10 &#44; ? &#44; 20 &#44; 25,15,12,16,14", 
	"What is the missing number?<br>3 &#44; 6 &#44; 9 &#44; ? &#44; 15, 12,10,14,13", 
	"What is the missing number?<br>4 &#44; 8 &#44; 12 &#44; 16 &#44; ?, 20,18,22,24",
	"What is the missing number?<br>4 &#44; 6 &#44; 12 &#44; ? &#44; 24, 18,16,20,22",
	"What is the missing number?<br>7 &#44; 14 &#44; ? &#44; 28 &#44; 35, 21,19,20,22",
	"What is the missing number?<br>8 &#44; ? &#44; 24 &#44; 32 &#44; 40, 16,18,14,12",
	"What is the missing number?<br>9 &#44; 18 &#44; 27 &#44; ? &#44; 45, 36,38,35,34",
	
	"What are the missing numbers?<br>3 &#44; 6 &#44; ? &#44; 12 &#44; ? &#44; 18, 9 and 15, 10 and 15, 9 and 16, 8 and 16", 
	"What are the missing numbers?<br>4 &#44; ? &#44; 12 &#44; 16 &#44; ? &#44; 24, 8 and 20, 8 and 22, 6 and 20, 8 and 18", 
	"What are the missing numbers?<br>5 &#44; 10 &#44; ? &#44; 20 &#44; 25 &#44; ?, 15 and 30, 15 and 35, 14 and 30, 15 and 25", 
	"What are the missing numbers?<br>6 &#44; ? &#44; 18 &#44; ? &#44; 30 &#44; 36, 12 and 24, 12 and 18, 15 and 24, 10 and 24", 
	"What are the missing numbers?<br>? &#44; 14 &#44; 21 &#44; 28 &#44; ? &#44; 42, 7 and 35, 8 and 35, 7 and 34, 6 and 35", 
	"What are the missing numbers?<br>8 &#44; 16 &#44; 24 &#44; 32 &#44; ? &#44; ?, 40 and 48, 40 and 46, 38 and 48, 42 and 48", 
	"What are the missing numbers?<br>9 &#44; 18 &#44; ? &#44; 36 &#44; ? &#44; 54, 27 and 45, 27 and 46, 29 and 54, 26 and 54", 
	
	"%calc%25&sup2; to the nearest 100,600,625,700,630",
	"%calc%35&sup2; to the nearest 100,1200,1225,1230,1300",
	"%calc%24&sup2; to the nearest 100,600,500,576,580",
	"%calc%33&sup2; to the nearest 10,1190,1180,1089,1100",
	
	"%calc%9&sup3; to the nearest 10,730,729,700,720",
	"%calc%8&sup3; to the nearest 10,510,520,512,500",
	"%calc%7&sup3; to the nearest 10,340,350,300,343",
	"%calc%6&sup3; to the nearest 10,220,216,210,200",
	"%calc%15&sup3; to the nearest 100,3400,3375,3000,3380",
	
	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
	
	
	"%calc%25&sup2; to the nearest 100,600,625,700,630",
	"%calc%35&sup2; to the nearest 100,1200,1225,1230,1300",
	"%calc%24&sup2; to the nearest 100,600,500,576,580",
	"%calc%33&sup2; to the nearest 10,1190,1180,1089,1100",
	
	"%calc%9&sup3; to the nearest 10,730,729,700,720",
	"%calc%8&sup3; to the nearest 10,510,520,512,500",
	"%calc%7&sup3; to the nearest 10,340,350,300,343",
	"%calc%6&sup3; to the nearest 10,220,216,210,200",
	"%calc%15&sup3; to the nearest 100,3400,3375,3000,3380",
	
	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
	
	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
	
	"%calc%25&sup2; to the nearest 100,600,625,700,630",
	"%calc%35&sup2; to the nearest 100,1200,1225,1230,1300",
	"%calc%24&sup2; to the nearest 100,600,500,576,580",
	"%calc%33&sup2; to the nearest 10,1190,1180,1089,1100",
	
	"%calc%9&sup3; to the nearest 10,730,729,700,720",
	"%calc%8&sup3; to the nearest 10,510,520,512,500",
	"%calc%7&sup3; to the nearest 10,340,350,300,343",
	"%calc%6&sup3; to the nearest 10,220,216,210,200",
	"%calc%15&sup3; to the nearest 100,3400,3375,3000,3380",
	
	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
	
	"%calc%A T-shirt costs £12.75<br>You get a 15% discount. How much do you pay?, £10.84, £11.84, £10.83, £10.00",
	"%calc%A book costs £9.95<br>You get a 25% discount. How much do you pay?, £7.46, £7.47, £7.45, £7.49",
	"%calc%What is 35% of 1365?, 477.75, 479.35, 477.15, 478.25",
	"%calc%What is 55% of 187?, 102.85, 101.55, 103.25, 101.65",
	"%calc%What is 45% of £235 to the nearest pound?, £106, £105, £100, £105.75",
	"%calc%A computer costs £995<br>If you get a discount of 15% what is the new price to the nearest pound?, £846, £845, £840, £845.75",
];

var InitArray = [
	"Peter can make 10 scones using 300g of flour. How many can he make with 600g?,20,15,30, I'm not really sure",
	"Jenny can make 4 litres of fruit drink with 100ml of fruit concentrate. How much fruit drink can she make with 50ml of concentrate?,2L,8L,3L,I'm not really sure I know how to do this",
	"Sally can make 5 cup cakes with 250g of flour. How much flour would she need for 8 cupcakes?, 400g, 800g, 500g,I'm not really sure I know how to do this",
	"Amir has 2 red fish for every 1 yellow fish. Amir has 3 yellow fish. How many red fish does he have?,6,3,4,I'm not really sure I know how to do this",
	"In a game&#44; Abigail has 1 blue token for every 3 green tokens. Abigail has 9 green tokens. How many blue tokens does she have?,3,9,1,I'm not really sure I know how to do this",
	"Rafael has 20 cards and splits them with a friend in the ratio of 1:1<br>How does Rafael share out the cards?,Two piles of 10 and 10, Two piles of 15 and 5, Two piles of 8 and 12,I'm not really sure I know how to do this",
	"Zara has 18 cards and splits them with a friend in the ratio of 2:1<br>How does Zara share out the cards?,Two piles of 12 and 6, Two piles of 15 and 3, Two piles of 10 and 8,I'm not really sure I know how to do this",
	"Ethan wins £60 and splits the money with his sister in the ratio of 3:1 (his sister gets the smaller amount)<br>How much does Ethan's sister get?,£15, £45, £20,I'm not really sure I know how to do this",
	"Hattie shares some money out in two shares of £24 and £36. Hattie's brother says the money is in the ratio 2:3. Choose the correct answer,He is correct, No the ratio is 2:1, He should say 24:36,I'm not really sure I know how to do this",
	"Sam and Jane keep fish. Sam has 12 Goldfish and 4 Angel fish. Jane has 18 Goldfish and 6 Angel fish. What ratios of Goldfish to Angel fish to Sam and Jane have?, Both have 3:1, 12:4 and 18:6, 3:1 and 4:1,I'm not really sure I know how to do this",
	"Harley divides an amount of money up into the ratio 3:2 and gives the smaller amount of £24 to charity. How much does Harley keep?, £36, £30, £48,I'm not really sure I know how to do this",
	"Francesca divides a stack of 48 cards into three piles in the ratio 3:2:1. How many cards are there in the largest pile?,24,30,20,I'm not really sure I know how to do this",
];

var AssessArray = [
	"Jenny can make 4 litres of fruit drink with 100ml of fruit concentrate.<br><br>How much fruit drink can she make with 50ml of concentrate?,2L,3L,8L, I'm not really sure",
	"In a game&#44; Abigail can claim 2 blue tokens for every 3 green tokens she is given. Abigail is given 9 green tokens.<br><br>How many blue tokens can Abigail claim?,6,4,2,I'm not really sure",
	"Rafael has 65 cards and splits them with a friend into two piles in the ratio of 3:2<br><br>How does Rafael share out the cards?, A pile of 39 and a pile of 26 cards, A pile of 35 and a pile of 30 cards, A pile of 40 and a pile of 25 cards,I'm not really sure",
	"Ethan wins £60 and splits it with his sister in the ratio of 3:1<br><br>Ethan's sister gets the smaller amount. How much will that be?,£15,£20,£45,I'm not really sure",
	"The ratio of blue to yellow tokens is 3:2<br>The ratio of yellow to green tokens is 4:5<br><br>What is the ratio of blue to yellow to green tokens?,6:4:5,2:3:4,5:4:3,I'm not really sure",
	//"Harry has 24 cards and splits them with a friend in the ratio of 1:1<br>How does Harry share out the cards?,Two piles of 12 and 12, Two piles of 14 and 10, Two piles of 8 and 16,I'm not really sure I know how to do this",
	//"Liz has 28 cards and splits them with a friend in the ratio of 3:1<br>How does Liz share out the cards?,Two piles of 21 and 7, Two piles of 20 and 9, Two piles of 16 and 12,I'm not really sure I know how to do this",
	//"Simon wins £80 and splits the money with his sister in the ratio of 4:1 (his sister gets the smaller amount)<br>How much does Simon's sister get?,£16, £15, £20,I'm not really sure I know how to do this",
	//"Jane shares some money out in two shares of £60 and £45. Jane's brother says the money is in the ratio 5:4. Choose the correct answer,No the ratio is 4:3, Yes he is correct,He should say 60:45,I'm not really sure I know how to do this",
	//"Phil and Kelly keep fish. Phil has 15 Goldfish and 10 Angel fish. Kelly has 12 Goldfish and 4 Angel fish. What ratios of Goldfish to Angel fish to Phil and Kelly have?, 3:2 and 3:1, Both have 3:1, 15:10 and 12:4,I'm not really sure I know how to do this",
	//"Katrina divides an amount of money up into the ratio 4:3 and gives the smaller amount of £21 to charity. How much does Katrina keep?, £28, £24, £35,I'm not really sure I know how to do this",
	//"Oliver divides a stack of 40 cards into three piles in the ratio 4:3:1. How many cards are there in the largest pile?,20,24,16,I'm not really sure I know how to do this",
];

if (!String.prototype.includes) {
    String.prototype.includes = function() {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}

var wings = ["&#74", "&#241", "&#244", "&#243", "&#245", "&#248", "&#120", "&#203", "&#178", "&#179", "&#123", "&#122", "&#246"];

var wing2s = ["&#53", "&#85", "&#87", "&#105", "&#169", "&#170", "&#179", "&#186", "&#188", "&#192", "&#194", "&#195", "&#204"];

var webs = ["&#163","&#37","&#46","&#47","&#55","&#56","&#57","&#58","&#71","&#87","&#88","&#108","&#134","&#135","&#180","&#188","&#234","&#241","&#230"];

var thisQuizID = "";

var answer = "";
var question = "";

var highscore = 0;
var icthigh = 0;
var webhigh = 0;
var gamehigh = 0;
var datahigh = 0;

var answerstring = "";

var myGamePiece;
var myObstacles = [];
var myScore = 0;
var gamestopped = false;

var helpViewed = "";

var startinterval = 20;

var qtimeout, btimeout;

var checkingquestion = false;

var initqtimeout = 200000;
var inittimerbarwidth = 803;
var timerbarwidth = inittimerbarwidth;

var wrongcount = [];
// saveResults(myName, mytutor, thisquizname, thisresult, Date(), document.getElementById("answers").innerText, " - ")

function myFunction(dat) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.apispreadsheets.com/data/7456/",true);
    xhttp.setRequestHeader("Content-type","application/json");
    xhttp.send(dat);
}

function saveResults(nm, tt, qz, pc, dt, rs, nt, id) {

	if (nm == "2761" ) return;
	
	//alert("In save results");
	
	var d = new Date();
	var nstr = d.toString();

	var thisdate = nstr.split(" ")[0] + " " + nstr.split(" ")[1] +  " " + nstr.split(" ")[2]+ " " + nstr.split(" ")[3]+  " " + nstr.split(" ")[4];
	myFunction(JSON.stringify({"data": {"ID":d.getTime(),"Name":nm,"Tutor":tt,"Quiz":qz,"Perc":pc,"Date":thisdate,"Results":rs,"Notes":nt, "QuizID":id}}));

}

/*function saveResults(nm, tt, qz, pc, dt, rs, nt, id) {

	if (nm == "2761" ) return;
	
	//alert("In save results");
	
	var d = new Date();
	var nstr = d.toString();

	var thisdate = nstr.split(" ")[0] + " " + nstr.split(" ")[1] +  " " + nstr.split(" ")[2]+ " " + nstr.split(" ")[3]+  " " + nstr.split(" ")[4];
	fetch("https://api.apispreadsheets.com/data/7456/", {
	method: "POST",
	headers: {
    'Content-Type': 'application/json'
  },
	mode: 'cors',
	body: JSON.stringify({"data": {"ID":d.getTime(),"Name":nm,"Tutor":tt,"Quiz":qz,"Perc":pc,"Date":thisdate,"Results":rs,"Notes":nt, "QuizID":id}}),
}).then()
}*/


function getDefaultHelp() {
	document.getElementById("helptext").innerHTML = 'Not all questions will have specific help - this question is one of them\
													<br><br>If you are in scheduled class and you are stuck - <b>message or ask your tutor for help</b>\
														<br><br>Read through the question carefully - pick out the important bits of information\
														<br><br>Remember: AREA all the space inside - <u>Use:  length x width</u>\
														<br><br>Remember: PERIMETER all the space arond the outside = <u>all up all the sides</u>\
														<br><br>If you are being asked to find out how many packs or boxes of things you need to buy or get do not forget to round up as you can\'t buy fractions of things\
														<br><br><u>Use the in-APP calculator.</u>\
														<br><br><br>Scroll down for more help on fractions, decimals and percentages, unit conversions and probability:.\
													';
													
	document.getElementById("helptext").innerHTML += '<p><b>Fractions</b><p> \
														<p>Remember: <br><br> 1. Divide by bottom number<br> 2. Times by the top number</p> \
														<p>Examples:<p> \
														<p>&frac14; of 80 = 80 &#247; 4 x 1 = <u>20</u></p> \
														<p>&frac23; of 60 = 60 &#247; 3 x 2 = <u>40</u></p> \
														<hr>\
														<p><b>Percentages - Non Calculator</b><p> \
														<p>Break into % that you can do like 10% or 5%<p> \
														<p>Examples:<p> \
														<p>25% of 200<p>\
														<p>10% + 10% + 5% = 20 + 20 + 10 = <u>50</u></p>\
														<hr>\
														<p><b>Percentages - Calculator</b></p> \
														<p>Use the formula:<p> \
														<p>Percent &#247; 100 x Amount</p> \
														<p>Examples:<p>\
														<p>35% of £125</p>\
														<p>35 &#247; 100 x 125 = <u>£43.75</u></p> \
														<p>43% of £11.25</p>\
														<p>47 &#247; 100 x 365 = 4.8375 = <u>£4.84</u></p> \
														<hr>\
														<p><b>Percentages - Increase</b></p> \
														<p>First find the percentage using one of the methods above.</p>\
														<p>Then add the amount you found to the original amount</p>\
														<p>Example:</p>\
														<p>£160 increased by 20%</p>\
														<p>Find 20% (non-calc method is Ok here)</p>\
														<p>20% = 10% + 10% = 16 + 16 = <u>£32</u></p>\
														<p>160 + 32 = 192 = <u>£192</u>\
														<hr>\
														<p><b>Percentages - Decrease</b></p> \
														<p>First find the percentage using one of the methods above.</p>\
														<p>Then take away the amount you found from the original amount</p>\
														<p>Example:</p>\
														<p>£160 discounted by 37%</p>\
														<p>Start by finding 37% (calc method is best here)</p>\
														<p>37 &#247; 100 x 160 = 59.2 </p> \
														<p>160 - 59.2 = 100.8 = <u>£100.80</u> </p> \
														';
														
	document.getElementById("helptext").innerHTML += '\
<p><b><u>Units of Length<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">10mm</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1cm</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100cm</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1m</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100m</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1km</td>\
</tr>\
</tbody>\
</table>\
<p>mm to cm divide by 10<br>cm to mm multiply by 10</p>\
<p>cm to m divide by 100<br>m to cm multiply by 100</p>\
<p>m to km divide by 100<br>km to mm multiply by 1000</p>\
<hr>\
<p><b><u>Units of Weight or Mass<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000g</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1kg</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000kg</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1 tonne</td>\
</tbody>\
</table>\
<p>g to kg divide by 1000<br>kg to g multiply by 1000</p>\
<p>kg to tn divide by 1000<br>tn to kg multiply by 1000</p>\
<hr>\
<p><b><u>Units of Capacity<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000ml</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1L</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100cl</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1L</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">10ml</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1cl</td>\
</tr>\
</tbody>\
</table>\
<p>ml to L divide by 1000<br>L to ml multiply by 1000</p>\
<p>ml to cl divide by 10<br>cl to ml multiply by 10</p>\
<p>cl to L divide by 100<br>L to cl multiply by 100</p>\
';

	document.getElementById("helptext").innerHTML += '\
		<p><u><b>Probability</u></b></p>\
<p>Probability is all about measuring the chances of something happening</p>\
<p>This can be expressed in words:</p>\
<p><b>Impossible</b>: The event can <u>never ever</u> happen</p>\
<p>Ex: the chances of getting 7 when rolling a 6 sided die<p>\
<p><b>Unlikely</b>: The chance of the event happening are <u>much less</u> than it not happening</p>\
<p>Ex: the chances of winning the national lottery this week<p>\
<p><b>Evens</b>: The chance of the event happening are <u>the same</u> as it not happening</p>\
<p>Ex: the chances of getting HEADS when tossing a coin<p>\
<p><b>Likely</b>: The chance of the event happening <u>are more</u> than it not happening</p>\
<p>Ex: The chances of getting warm sunny days sometime during summer<p>\
<p><b>Certain</b>: Event must happen - no other outcome is possible.</p>\
<p>Ex: The chances of getting either 1,2,3,4,5, or 6 when rolling a 6 sided die<p>\
<hr>\
<p><u><b>Other Ways of Expressing Probability</u></b></p>\
<p>0 or 0% or 0.0 is the same as <b>Impossible</b></p>\
<p>Any fraction less than &frac12 or percentage more than 0 and less than 50% is the same as <b>Unlikely</b></p>\
<p>&frac12 or 50% or 0.5 is the same as <b>Evens</b></p>\
<p>Any fraction more than &frac12 or percentage more than 50% and less than 100% is the same as <b>Likely</b></p>\
<p>1 or 1.0 or 100% is the same as <b>Certain</b></p>\
<hr>\
<p><u><b>Doing Probability!</u></b></p>\
<p>All questions involving probablity involve working out all the possible outcomes and then assessing the likelihood of the event you are being asked about actually happening</p>\
<p><b>Example</b>: What is the probability of seeing a person with two heads on the way to college?</p>\
<p><u>Ans: Impossible - hopefully!</u></p>\
<hr>\
<p><b>Example</b>: What is the probability of getting Heads when flipping a coin?</p>\
<p><u>Ans: Events OR 50% or &frac12; (all these mean the same thing)</u>\
<hr>\
<p><b>Example</b>: What is the probability of getting a 6 when rolling a 6 sided die?</p>\
<p>There are six outcomes here.<p>\
<p>If you are asked to mark on a scale: You are much more likely to get something other than six so you could write <b>Unlikely</b><p>\
<p>If you are asked to express as a fraction: You are looking for <b>1 out of 6</b> so you would write &frac16;<p>\
<p><u><b>Harder Probability Questions (L2)</u></b></p>\
<p><b>Example</b>: What is the probability of getting a an even number when rolling a die?</p>\
<p>There are six outcomes here 1, 2, 3, 4, 5, 6<p>\
<p>There are 3 even numbers: 2, 4, 6</p>\
<p>So you are looking for 3 outcomes out of 6 so you could write Evens OR 50% OR &frac12;</p>\
';
}


function getDefaultE3Help() {
	document.getElementById("helptext").innerHTML = 'Not all questions will have specific help - this question is one of them\
													<br><br>If you are in scheduled class and you are stuck - <b>message or ask your tutor for help</b>\
														<br><br>Read through the question carefully - pick out the important bits of information\
														<br><br>Remember: AREA all the space inside - <u>Use:  length x width</u>\
														<br><br>Remember: PERIMETER all the space arond the outside = <u>all up all the sides</u>\
														<br><br>If you are being asked to find out how many packs or boxes of things you need to buy or get do not forget to round up as you can\'t buy fractions of things\
														<br><br><u>Use the in-APP calculator.</u>\
														<br><br><br>Scroll down for more help on fractions, decimals and percentages, unit conversions and probability:.\
													';
													
	document.getElementById("helptext").innerHTML += '<p><b>Fractions</b><p> \
														<p>Remember: <br><br> 1. Divide by bottom number<br> 2. Times by the top number</p> \
														<p>Examples:<p> \
														<p>&frac14; of 80 = 80 &#247; 4 x 1 = <u>20</u></p> \
														<p>&frac23; of 60 = 60 &#247; 3 x 2 = <u>40</u></p> \
														<hr>\
														<p><b>Percentages - Non Calculator</b><p> \
														<p>Break into % that you can do like 10% or 5%<p> \
														<p>Examples:<p> \
														<p>25% of 200<p>\
														<p>10% + 10% + 5% = 20 + 20 + 10 = <u>50</u></p>\
														<hr>\
														<p><b>Percentages - Calculator</b></p> \
														<p>Use the formula:<p> \
														<p>Percent &#247; 100 x Amount</p> \
														<p>Examples:<p>\
														<p>35% of £125</p>\
														<p>35 &#247; 100 x 125 = <u>£43.75</u></p> \
														<p>43% of £11.25</p>\
														<p>47 &#247; 100 x 365 = 4.8375 = <u>£4.84</u></p> \
														<hr>\
														';
														
	document.getElementById("helptext").innerHTML += '\
<p><b><u>Units of Length<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">10mm</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1cm</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100cm</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1m</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100m</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1km</td>\
</tr>\
</tbody>\
</table>\
<p>mm to cm divide by 10<br>cm to mm multiply by 10</p>\
<p>cm to m divide by 100<br>m to cm multiply by 100</p>\
<p>m to km divide by 100<br>km to mm multiply by 1000</p>\
<hr>\
<p><b><u>Units of Weight or Mass<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000g</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1kg</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000kg</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1 tonne</td>\
</tbody>\
</table>\
<p>g to kg divide by 1000<br>kg to g multiply by 1000</p>\
<p>kg to tn divide by 1000<br>tn to kg multiply by 1000</p>\
<hr>\
<p><b><u>Units of Capacity<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000ml</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1L</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100cl</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1L</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">10ml</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1cl</td>\
</tr>\
</tbody>\
</table>\
<p>ml to L divide by 1000<br>L to ml multiply by 1000</p>\
<p>ml to cl divide by 10<br>cl to ml multiply by 10</p>\
<p>cl to L divide by 100<br>L to cl multiply by 100</p>\
';

	
}

function printDiv() {
	//if ( gamestopped == false ) {
		//return;
	//} 
	var divContents = document.getElementById("answers").innerHTML;
        var a = window.open('', '', 'height=2000, width=1000'); 
        a.document.write('<html>'); 
        a.document.write('<body>'); 
        a.document.write(divContents); 
        a.document.write('</body></html>'); 
    	a.document.close(); 
        a.print(); 
} 

/* E3START */

var examsNewE3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

function getAddMoneyE3Style() {
	
	examsNewE3Count++;
	
	if ( examsNewE3Count > examsNewE3.length-1) {
		examsNewE3Count = 0;
	}
	
	getDefaultE3Help();
	
	if (qsheet && numquestions == 1 ) {
		return session8("E3") + ",1,2,3,4";
	}
	
	workingstr = "<br><br><i>Write your working out here:</i><br><br><br><br><br><br><br><br><p><b>Answer: </b></p><br>"
	if ( qsheet ) {
		if ( getRndInteger(1,100) > 80 ) {
			workingstr = "";
			return getE2E3();
		}
	}
													
	var sw = examsNewE3[examsNewE3Count];
	
	
	examsNewE3.splice(sw, 1);
	
	//sw = 13;
    switch (sw) {
    	case 1:
        	return getAddMoneyE3100();
            break;
		case 2:
        	return getAddMoneyE3101();
            break;
		case 3:
        	return getAddMoney10006E();
            break;
		case 4:
        	return getAddMoney10003E();
            break;
		case 5:
        	return getAddMoney2();
            break;
		case 6:
        	return getAddMoney4E();
            break;
		case 7:
        	return getAddMoney5();
            break;
		case 8:
        	return getAddMoney6();
            break;
		case 9:
        	return getAddMoney7();
            break;
		case 10:
        	return getAddMoney25();
            break;
		case 11:
        	return checkworkingout();
            break;
		case 12:
        	return getAddMoney226();
            break;
		case 13:
        	return getAddMoney227E2();
            break;
		case 14:
        	return getAddMoney2281();
            break;
		case 15:
        	return getBestBuys1();
            break;
		case 16:
        	return getAddMoney7E();
            break;
		case 17:
        	return getAddMoney6E();
            break;
		case 18:
        	return getAddMoney223E();
            break;
		case 19:
        	return getAddMoneyE100();
            break;
		case 20:
        	return getAddMoneyE101();
            break;
		case 21:
        	return getAddMoneyE102();
            break;
		case 22:
        	return getAddMoneyE103();
            break;
		case 23:
        	return checkworkingout();
            break;
		case 24:
        	return getAddMoneyE104();
            break;
		case 25:
        	return getAddMoneyE105();
            break;
		case 26:
        	return getAddMoneyE106();
            break;
		case 27:
        	return getAddMoneyE107();
            break;
		case 28:
        	return getAddMoneyE108();
            break;
		case 29:
        	return getAddMoneyE109();
            break;
    }
    
}

function getE2E3() {
	var retstr = "<br>";
	wbox = "";
	
	retstr += "<br><img style=\"margin-top:20px;margin-left:30px;\" width=\"" + 600 + "\" src=\"./e2e3Exam/e" + getRndInteger(1,113) + ".jpg\">";
	
	return retstr + ",a,b,c,d";
}

function getAddMoney227E2() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var hourlyrate = Number(getRndInteger(7,9).toString() + "." + (getRndInteger(2,8)*10).toString()).toFixed(2);
	
	var hoursperweek = getRndInteger(5,8)*5;
	
	var retstr = thisname + " earns £" + Number(hourlyrate).toFixed(2) + " per hour and works " + hoursperweek + " hours each week.";
	
	var payrise = getRndInteger(1,3)*5/100;
	
	var mult = 1 + payrise;
	
	var ans = Number(Number(hourlyrate) * 1.1);
	var ans = Number(ans*Number(hoursperweek)).toFixed(2);
	
	retstr += "<br><br>" + thisname + "'s pay is increased by 10%<br><br>How much will the new weekly pay be to the nearest pound?,£" + Math.round(Number(ans)) + ",£" + Math.round(Number(ans*1.2)) + ",£" + Math.round(Number(ans*0.9)) + ",£" + Math.round(Number(ans*1.3));
	
	document.getElementById("helptext").innerHTML = 'Stage 1: You need to take the weekly pay amount and increase it by the given percentage.\
													<br><br>Increase in pay rate = old pay rate times by perc divide by 100\
													<br><br>Now add the increase you just found to the original pay rate\
													<br><br>This will give you the current hourly pay.\
													<br><br>Stage 2: Multiply the increased hourly rate you found in stage 1 by the number of hours specified in the question.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoneyE109() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var peeps = 300 + (50*getRndInteger(1,4));
	var retstr = thisname + " is ordering the food for a club day barbeque for " + peeps + " people";
	
	retstr += "<br><br>" + thisname + " needs to allow for 2 burgers for each person";
	
	var tenths = ["<span style=\"font-size:26px;\">&#8530;</span>", "10%", "One tenth"];
	
	var tenthname = tenths[getRndInteger(0, tenths.length-1)];
	
	retstr += "<br><br>" + tenthname + "  of the burgers need to be vegetarian.";
	
	var ans = Math.round((peeps*2)/10);
	
	retstr += "<br><br>How many vegetarian burgers will need to be ordered?," + Math.round(ans) + "," + Math.round(ans+2) + "," + Math.round(ans-2) + "," + Math.round(ans+3);
	
	return retstr;
}

function getAddMoneyE108() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var peeps = 300 + (50*getRndInteger(1,4));
	var retstr = thisname + " is ordering the food for a club day barbeque for " + peeps + " people";
	
	
	var packsize = 6 * getRndInteger(2,6);
	
	retstr += "<br><br>" + thisname + " needs to allow for 2 sausages for each person";
	
	retstr += "<br><br> Bread rolls are sold in packs of " + packsize + " rolls";
	
	retstr += "<br><br>" + thisname + " will need to order enough bread rolls for one roll for each sausage";
	
	var ans = Math.round(((peeps*2)/packsize)+0.49);
	
	retstr += "<br><br>How many packs of bread rolls does " + thisname + " need to order?," + Math.round(ans) + "," + Math.round(ans+2) + "," + Math.round(ans-2) + "," + Math.round(ans+3);
	
	return retstr;
}

function getAddMoneyE107() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is running a drinks stall for the school summer fair";
	
	var packetsize = 10+(2*getRndInteger(1,3));
	var packets = 10 + getRndInteger(1,9);
	
	var gotcups = packetsize*packets;
	
	var needcups = 350;
	
	var ans = needcups - gotcups;
	
	retstr += "<br><br>" + thisname + " thinks that the stall will need " + needcups + " paper cups in total.";
	
	retstr += "<br><br>" + thisname + " already has " + packets + " packets of paper cups";
	retstr += "<br><br>Each packet of cups contains " + packetsize + " cups";
	
	retstr += "<br><br>How many more cups does " + thisname + " need to get?," + Math.round(ans) + "," + Math.round(ans+2) + "," + Math.round(ans-2) + "," + Math.round(ans+3);
	
	return retstr;
}

function getAddMoneyE106() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is planning a street party and needs to hire tables to make a row of tables for the party";
	
	var large = (810 + (5*getRndInteger(1,15)))/100;
	var small = (510 + (5*getRndInteger(1,15)))/100;
	var numlarge = getRndInteger(2,5);
	
	retstr += "<br><br>" + thisname + " can hire 1m length tables for £" + small.toFixed(2);
	retstr += "<br><br>" + thisname + " can also hire 2m length tables for £" + large.toFixed(2);
	
	var tablength = (2*numlarge)+1;
	retstr += "<br><br>The row of tables needs to be " + Math.round(tablength) + " metres in length";
	
	var ans = (numlarge*large) + small;
	var ans2 = tablength*small;
	
	retstr += "<br><br>What is the cheapest combination of 1m and 2m tables " + thisname + " can hire?,£" + Number(ans).toFixed(2) + ",£" + Number((ans+2)).toFixed(2) + ",£" + Number((ans+3)).toFixed(2) + ",£" + Number((ans-2)).toFixed(2);
	
	return retstr;
}

function getAddMoneyE105() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " orders food using an automated order machine at a fast food outlet";
	
	var ordercard = getRndInteger(222,965);
	var currentcard = ordercard - getRndInteger(11,23);
	
	retstr += "<br><br>" + thisname + "'s order number is " + ordercard;
	
	retstr += "<br><br>The display at the tills says the current order is " + currentcard;
	
	var ans = ordercard - currentcard;
	
	retstr += "<br><br>How many orders need to be served before " + thisname + "'s order is ready?," + Math.round(ans) + "," + Math.round(ans+2) + "," + Math.round(ans-2) + "," + Math.round(ans+3);
	
	return retstr;
}

function getAddMoneyE105() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " orders food using an automated order machine at a fast food outlet";
	
	var ordercard = getRndInteger(222,965);
	var currentcard = ordercard - getRndInteger(11,23);
	
	retstr += "<br><br>" + thisname + "'s order number is " + ordercard;
	
	retstr += "<br><br>The display at the tills says the current order is " + currentcard;
	
	var ans = ordercard - currentcard;
	
	retstr += "<br><br>How many orders need to be served before " + thisname + "'s order is ready?," + Math.round(ans) + "," + Math.round(ans+2) + "," + Math.round(ans-2) + "," + Math.round(ans+3);
	
	return retstr;
}

function getAddMoneyE104() {
	
	var retstr = "Use the barchart to answer the question below.<br><br><img style=\"margin-left:20px;\" width=\"" + 170 * imgscale + "\" src=\"" + cleanURL(img_barchartVehicles) + "\">";
	
	var ww = getRndInteger(1,4);
	//ww = 1;
	switch (ww) {
		case 1:
			retstr += "<br>How many people travel by either CAR or BUS?,9,5,4,8";
			break;
		case 2:
			retstr += "<br>What is the combined total of all travel methods?,16,15,14,17";
			break;
		case 3:
			retstr += "<br>How many more people does the most popular travel method have over the second most popular?,1, 2, 3, 0";
			break;
		case 4:
			retstr += "<br>How many people use two wheeled transport?,5,9,4,8";
			break;
	}
	return retstr;
}


function getAddMoneyE103() {

	var retstr = "When a ball is dropped it bounces back to a height that is one half of the height it dropped from previously.<br><br><img style=\"margin-left:15px;margin-top:0px;margin-bottom:5px;\" width=\"" + 100 * imgscale + "\" src=\"" + cleanURL(img_bouncing) + "\">";
	
	var drophgt = getRndInteger(12,30)*8;
	var ans = drophgt*0.5*0.5*0.5;
	
	retstr += "<br><br>A ball is dropped from " + Number(drophgt).toFixed(0) + " cm";

	retstr += "<br><br>How far will the ball rise to after its <u>third</u> bounce?," + Number(ans).toFixed(0) + " cm," + Number(ans*1.1).toFixed(0) + " cm," + Number(ans*0.9).toFixed(0) + " cm," + Number(ans*1.14).toFixed(0) + " cm";
	
	return retstr;
	
}


function getAddMoneyE102() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is putting orange juice into glasses for a party.";
	
	var jugamount = 0.5 + getRndInteger(8,15)*0.125;
	
	retstr += "<br><br>" + thisname + " has a jug containing " + jugamount + " litres of orange to share into glasses";
	
	retstr += "<br><br>Glasses can each hold 125ml of orange.";
	
	var ans = ((jugamount/0.125)-0.5);
	
	retstr += "<br><br>How many full glasses of orange can " + thisname + " make?," + ans.toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans-1).toFixed(0) + "," + Number(ans+2).toFixed(0);
	
	return retstr;
}

function getAddMoneyE101() {

	var people = 2 + (getRndInteger(1,3) * 2);
	
	var retstr = "The recipe below shows how to make " + people + " scones:";
	
	var flouramount = Number(5 * people);
	retstr += "<br><br>" + flouramount + "g of self-raising flour";
	
	retstr += "<br>1 teaspoon of baking powder";
	
	var butteramount = Number(5 * people);
	retstr += "<br>" + butteramount + "g of butter";
	
	var milkamount = Number(5 * people);
	retstr += "<br>" + milkamount + "ml of milk";
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var make = people * (getRndInteger(3,5));
	
	retstr += "<br><br>" + thisname + " wants to make " + make + " scones";
	
	var cookarr = ["grams of flour", "grams of butter", "ml of milk"];
	var valarr = [flouramount,butteramount,milkamount];
	var unitarrx = ["g", "g", "ml"];
	
	var cookidx = getRndInteger(0,cookarr.length-1);
	
	var ans = valarr[cookidx]/people * make;
	
	retstr += "<br><br>How many " + cookarr[cookidx] + " will " + thisname + " need?," + ans + unitarrx[cookidx] + "," + (ans*1.1).toFixed(0) +  unitarrx[cookidx] + "," + (ans*0.9).toFixed(0) + unitarrx[cookidx] + "," + (ans*1.2).toFixed(0) + unitarrx[cookidx];
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Divide the item the question asks about down by the number of scones the recipe is for - this will get you how much you need for 1 scone.\
											<br><br>EG. If 120g of flour is for 4 scones then 120 div by 4 is the amount for 1 scone.\
											<br><br>EG. 30g of flour is needed for 1 scone in the above example.\
											<br><br>Stage 2: Now multiply the amount for 1 scone by the number of people the question asks for.\
											<br><br>Remember to make sure you do the calculation on the item the question is asking for - the item might be milk or butter.\
											<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';	
	return retstr;
}	

function getAddMoneyE100() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is going to cook the Christmas turkey.";
	
	retstr += "<br><br>" + thisname + " finds these instructions on the internet:";
	
	var initmins = 35 + (getRndInteger(1,3)*5);
	
	var aftermins = 35 + (getRndInteger(1,5)*5);
	
	var turkeywgt = getRndInteger(9,19)*0.5;
	
	retstr += "<br><br>Cook at 180 C for " + initmins + " minutes for the first kilogram and then for " + aftermins + " minutes for each kilogram after that";
	
	retstr += "<br><br>" +thisname + "'s turkey weighs " + turkeywgt + "kg.";
	
	var ans = initmins + aftermins*(turkeywgt-1);
	
	retstr += "<br><br>How long will the turkey take to cook?," + Number(ans).toFixed(0) + " mins," + Number(ans+10).toFixed(0) + " mins," + Number(ans-10).toFixed(0) + " mins," + Number(ans+15).toFixed(0) + " mins";
	
	return retstr;
}

function getAddMoney223E() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = "Two families travel together for a day out at a local theme park.";
	
	var adultPrice = 24 + getRndInteger(1,5) * 2;
	var childPrice = (adultPrice/2) + getRndInteger(1,5);
	
	retstr += "<br><br>Adult tickets cost £" + adultPrice;
	retstr += "<br>Child tickets cost £" + childPrice; 
	
	var numAdults1 = getRndInteger(1,4);
	var numChildren1 = getRndInteger(2,4);
	
	var numAdults2 = getRndInteger(1,4);
	var numChildren2 = getRndInteger(2,5);
	
	var ans = 0;
	
	retstr += "<br><br>The first family need tickets for " + numAdults1 + " adults and " + numChildren1 + " children";
	retstr += "<br><br>The second family need tickets for " + numAdults2 + " adults and " + numChildren2 + " children";
	
	ans = (adultPrice*(numAdults1+numAdults2)) + (childPrice*(numChildren1+numChildren2));
	
	
	retstr += "<br><br>How much will the total cost of the tickets be ?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*0.95)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: How many adults and children in total?\
														<br><br>Stage 2: Work out the cost for the adults in the group using the ticket price list\
														<br><br>Stage 3: Work out the cost for the children in the group using the ticket price list\
														<br><br>Stage 4: Add the total adult cost to the total children cost\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney6E() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    
    operandA = getRndInteger(18,22);
    operandB = getRndInteger(3,6);
    operandC = getRndInteger(35,45);
	
	var mmm = getRndInteger(2,4)*6;
	
	var ans1 = Number(operandA)*Number(operandB);
	var mleft = Number(mmm) - Number(operandB);
	var ans2 = Number(mleft)*Number(operandC);
	
	var ans = ans1 + ans2;
    
    var retstr = "A broadband deal is £" + operandA + " per month for " + operandB + " months.<br><br>Then it costs £" + operandC + " per month after that."
    
    
    retstr += "<br><br>How much will " + mmm + " months broadband cost?,£" + ans.toFixed(0) + ",£" + (ans*1.05).toFixed(0) + ",£" + (ans*0.95).toFixed(0) + ",£" + (ans*1.10).toFixed(0);
    
	document.getElementById("helptext").innerHTML = 'Follow the formula.\
													<br><br><br>Stage 1: Multiply the per month cost by number of initial months in the offer.\
													<br><br><br>Stage 2: Subtract the initial months amount from the number of months the question is asking for.\
													<br><br><br>Stage 3: Multiply the number of months found in Stage 2 by the full monthly cost.\
													<br><br><br>Stage 4: Add the costs found in Stage 1 and Stage 3 together.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
    return retstr;
    
}

function getAddMoney7E() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    operandA = getRndInteger(2,4);
    operandB = getRndInteger(1,2) + "." + getRndInteger(1,8)*10;
    operandC = getRndInteger(7,12);
	
	var ans = Number(operandA) + (Number(operandB) * Number(operandC));
    
    var retstr = "A taxi has a one-off charge of £" + operandA + " plus £" + operandB + " per mile. <br><br>How much will a journey of " + operandC + " miles cost?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
   
	document.getElementById("helptext").innerHTML = 'Follow the formula.\
													<br><br><br>Stage 1: Multiply the per mile cost by the cost per mile.\
													<br><br><br>Stage 2: Add the one-off charge to the total from stage 1.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
   
    return retstr;
    
}

function getAddMoney4E() {
	var operandA = "";
    
    useCalc = true;
    
    operandA = getRndInteger(6,8) + "." + getRndInteger(30,95);
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = thisname + " earns £" + operandA + " per hour";
    
	var wk1 = getRndInteger(16,35);
	var wk2 = getRndInteger(16,35);
	
    retstr += "<br><br>In week 1 " + thisname + " works " + wk1 + " hours";
    retstr += "<br><br>In week 2 " + thisname + " works " + wk2 + " hours";
	
	ans = (Number(operandA)*wk1) + (Number(operandA)*wk2);
	
    retstr += "<br><br>How much has " + thisname + " earned in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    
    return retstr;
    
}

function getAddMoney10003E() {
	
	var retstr = "The table shows annual sales for 2019 split into quarters of the year.<br><br><img style=\"margin-left:15px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_salesquarters) + "\">";
	
	var ww = getRndInteger(1,5);
	//ww = 5;
	
	switch (ww) {
		case 1:
			retstr += "<br><br>What were the sales for the final quarter of the 2019?,$850000,$720000,$600000,£350000";
			break;
		case 2:
			retstr += "<br><br>By how much did sales increase from Q1 to Q2?,$250000,$350000,$200000,£300000";
			break;
		case 3:
			retstr += "<br><br>Which quarter was best for sales in 2019?,Q4,Q3,Q2,Q1";
			break;
		case 4:
			retstr += "<br><br>Which quarter was the worst for sales in 2019?,Q1,Q3,Q2,Q4";
			break;
		case 5:
			retstr += "<br><br>What was the difference between Q4 sales and sales for Q1?,$500000,$850000,$450000,$350000";
			break;
	}
	
	//document.getElementById("helptext").innerHTML = 'Stage 1: Use the scale provided.\
														//<br><br>Use a multiply to convert CM to KM.\
															//<br><br>Check if your answer matches one of the answer buttons.\
															//<br><br>If not, check your calculations again\
															//<br><br>Always use paper to jot your working out down as you go.\
													//';
	
	return retstr;
}

function getAddMoney10006E() {
	
	var retstr = "Examine the train time table below.<br><br><img style=\"margin-left:15px;margin-top:0px;margin-bottom:5px;\" width=\"" + 260 * imgscale + "\" src=\"" + cleanURL(img_bustimetable) + "\">";
	
	var ww = getRndInteger(2,8);
	//ww = 1;
	
	switch (ww) {
		case 2:
			retstr += "<br><br>Which train should a person take from Worcester to get to Sidemoor?, 07:50, 07:05, 08:07,10:13";
			break;
		case 3:
			retstr += "<br><br>Which train is the quickest from Worcester to Rubery?, 10:13, 05:30, 07:05,07:50";
			break;
		case 4:
			retstr += "<br><br>Which train is the slowest from Worcester to Rubery?, 07:50, 05:30, 07:05,10:13";
			break;
		case 5:
			retstr += "<br><br>How long does the latest train from Wychbold take to get to Rubery?, 37 mins, 27 mins,47 mins, 36 mins";
			break;
		case 6:
			retstr += "<br><br>How long does the 07:16 from Fernhill take to get to Marlbrook?, 49 mins, 39 mins, 59 mins, 29 mins";
			break;
		case 7:
			retstr += "<br><br>How long does the 05:48 from Droitwich take to get to Catshill?, 23 mins, 33 mins, 24 mins, 22 mins";
			break;
		case 8:
			retstr += "<br><br>If you miss the 07:29 Droitwich train how long to the next train from Droitwich?, 45 mins, 44 mins, 35 mins, 55 mins";
			break;
	}
	
	return retstr;
}

function getAddMoneyE3101() {
	var pktam = getRndInteger(6,15);
	
	var needs = getRndInteger(pktam*2,pktam*8);
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = "There are " + pktam + " items in a single packet.";
	
	retstr += "<br><br>" + thisname + " needs " + needs + " items.";
	
	var ans = ((needs/pktam)+0.49).toFixed(0);
	
	retstr += "<br><br>How many packets should " + thisname + " buy?," + ans + "," + Number(ans+1).toFixed() + "," + Number(ans-1).toFixed() + "," + Number(ans+2).toFixed();

	return retstr;
}

function getAddMoneyE3100() {
	
    useCalc = false;
    
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    operandA = getRndInteger(30,95);
    operandB = getRndInteger(1,5) + "." + getRndInteger(30,95);
    
    if ( getRndInteger(1,100) > 1) {
    	operandC = getRndInteger(1,5) + "." + getRndInteger(30,95);
    }
    
    var retstr = "";
    if ( operandC == "") {
		var ans = (Number(operandA)/100)+Number(operandB);
    	retstr = "Two items on a shopping list cost " + operandA + "p and £" + operandB;
        retstr+= "<br><br>What do all the items cost in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    }
    else {
    	retstr = "Three items on a shopping list cost " + operandA + "p&#44; £" + operandB + " and £" + operandC;
        var xxx = getRndInteger(2,3);
        switch (xxx) {
        	case 1:
				var ans = (Number(operandA)/100)+Number(operandB)+Number(operandC);
            	retstr += "<br><br>What do all the items cost in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
                break;
            case 2:
				var ans = ((Number(operandA)/100)+Number(operandB)+Number(operandC))*2;
            	retstr += "<br><br>If you bought 2 of each item what would you pay in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);; 
                useCalc = true;
                break;
			 case 3:
				var ans1 = (Number(operandA)/100)+Number(operandB)+Number(operandC);
				var ans = 20 - ans1;
            	retstr += "<br><br>If you bought all three items what would you get in change if you paid with £20?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2); 
                useCalc = true;
                break;

        }
        
    }
    
    return retstr;
}

/* L1START */

function getAddMoneyL1Images() {
	var retstr = "<br>";
	
	retstr += "<img style=\"margin-left:30px;page-break-before:always\"  src=\"./L1ExamImages/L1-" + getRndInteger(1,204) + ".jpg\">";
	//retstr += "<img style=\"margin-left:30px;\" width=\"65%\" src=\"./L1ExamImages/L1-204.jpg\">";
	return retstr + ",a,b,c,d";
}

function getAddMoneyL2Images() {
	var retstr = "<br>";
	
	retstr += "<img style=\"margin-left:30px;page-break-before:always\"  src=\"./L2ExamImages/L2-" + getRndInteger(1,128) + ".jpg\">";
	//retstr += "<img style=\"margin-left:30px;\" width=\"65%\" src=\"./L2ExamImages/L1-204.jpg\">";
	return retstr + ",a,b,c,d";
}

var asession8E3 = '<div style="float:left:position:relative;"><span style="font-family:Arial;font-size:18px;">Non Calculator 8-a-session - Spend 10 minutes Revising Key Skills</span><br><br>\
<table style="width:700px;font-family:Arial;font-size:18px;page-break-after:always;">\
	<tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Work out Mult1 x Mult2 <br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find div1 &#247; div2\
        </td>\
	</tr>\
	<tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Work out Mult3 x Mult4 <br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find div3 &#247; div4\
        </td>\
	</tr>\
	<tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find RND1 rounded to the nearest 10<br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find RND2 rounded to the nearest 100\
        </td>\
	</tr>\
    <tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        What is the next number in this sequence<br><br>SEQ1<br><br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        What is the next number in this sequence<br><br>SEQ2\
        </td>\
	</tr>\
</table></div>\
				';

var asession8L1 = '<div style="float:left:position:relative;"><span style="font-family:Arial;font-size:18px;">Non Calculator 8-a-session - Spend 10 minutes Revising Key Skills</span><br><br>\
<table style="width:700px;font-family:Arial;font-size:18px;page-break-after:always;">\
	<tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Work out Mult1 x Mult2 <br><br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find div1 &#247; div2\
        </td>\
	</tr>\
	<tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find P1 of PA1 <br><br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Calculate P2 of PA2\
        </td>\
	</tr>\
    <tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find FRAC1 of F1A <br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Round RND1 to 1 decimal place\
        </td>\
	</tr>\
    <tr>\
    	<td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find the perimeter of a W1 x L1 cm rectangle. <br><br><br><br><br><br><br>\
        </td>\
        <td style="vertical-align:top;padding:10px;border:solid;border:collapse;width:50%;font-size:18px;">\
        Find the area of a W2 x L2 cm rectangle.\
        </td>\
	</tr>\
</table></div>\
				';
				
function session8(level8) {
	workingstr = "";
	var retstr = "";
	
	imgscale = 1.4;
	
	if ( level8 == "E3" ) {
		imgscale = 2;
		retstr = asession8E3;
		// Mulr
		var m1 = getRndInteger(20,90);
		var m2 = getRndInteger(20,90);
		
		retstr = retstr.replace("Mult1", m1);
		retstr = retstr.replace("Mult2", m2);
		
		// Div
		var d1 = getRndInteger(3,9);
		var d2 = getRndInteger(10,30);
		var d3 = d1 * d2;
		
		retstr = retstr.replace("div1", d3);
		retstr = retstr.replace("div2", d1);
		
		// Mulr2
		m1 = getRndInteger(20,90);
		m2 = getRndInteger(20,90);
	
		retstr = retstr.replace("Mult3", m1);
		retstr = retstr.replace("Mult4", m2);
		
		// Div 2
		d1 = getRndInteger(3,9);
		d2 = getRndInteger(10,30);
		d3 = d1 * d2;
		
		retstr = retstr.replace("div3", d3);
		retstr = retstr.replace("div4", d1);
		
		// Round
		var rnd1 = (10 * getRndInteger(20,90)) + getRndInteger(1,9);
		
		retstr = retstr.replace("RND1", rnd1);
		
		var rnd1 = (100 * getRndInteger(20,90)) + getRndInteger(21,99);
		
		retstr = retstr.replace("RND2", rnd1);

		// Seq 1
		var seq1 = getRndInteger(6,20);
		
		var seq1start = seq1*getRndInteger(3,6);
		
		retstr = retstr.replace("SEQ1", seq1start + "&#44; " + Number(seq1start+Number(1 * seq1)) + "&#44; " + Number(seq1start+Number(2 * seq1)) + "&#44; " + Number(seq1start+Number(3 * seq1)) + "&#44; ... ");
		
		// Seq 2
		seq1 = Number(getRndInteger(1, 5).toString() + "." + getRndInteger(1, 9).toString());
		
		seq1start = seq1*getRndInteger(3,15);
		
		retstr = retstr.replace("SEQ2", seq1start + "&#44; " + Number(seq1start+Number(1 * seq1)).toFixed(1) + "&#44; " + Number(seq1start+Number(2 * seq1)).toFixed(1) + "&#44; " + Number(seq1start+Number(3 * seq1)).toFixed(1) + "&#44; ... ");
		
	}
	else if ( level8 == "L1" ) {
		retstr = asession8L1;
		// Mult
		var m1 = getRndInteger(20,90);
		var m2 = getRndInteger(20,90);
		
		retstr = retstr.replace("Mult1", m1);
		retstr = retstr.replace("Mult2", m2);
		
		// Div
		var d1 = getRndInteger(3,9);
		var d2 = getRndInteger(10,30);
		var d3 = d1 * d2;
		
		retstr = retstr.replace("div1", d3);
		retstr = retstr.replace("div2", d1);
		
		// Percent
		var percs1 = ["10%", "20%", "30%", "50%"];
		var percs1vals = [10, 5, 30, 2];
		var pidx = getRndInteger(0,percs1vals.length-1);
		
		var p1 = getRndInteger(5,30) * percs1vals[pidx];
		
		retstr = retstr.replace("P1", percs1[pidx] );
		retstr = retstr.replace("PA1", p1);
		
		percs1 = ["10%", "15%", "25%", "20%", "30%", "50%", "75%", "80%"];
		percs1vals = [20, 10, 4, 5, 30, 2, 4, 80];
		pidx = getRndInteger(0,percs1vals.length-1);
		
		p1 = getRndInteger(5,50) * percs1vals[pidx];
		
		retstr = retstr.replace("P2", percs1[pidx] );
		retstr = retstr.replace("PA2", p1);

		// Fractions
		var fracs1 = ["&frac14;", "&frac13;", "&frac15;", "&frac16;"];
		var fracs1vals = [4, 3, 5, 6];
		
		var fidx = getRndInteger(0,fracs1vals.length-1);
		
		var f1 = getRndInteger(25,85) * fracs1vals[fidx];
		
		retstr = retstr.replace("FRAC1", "<span style=\"font-size:26px;\">" + fracs1[fidx] +"</span>");
		retstr = retstr.replace("F1A", f1);
		
		// DP
		var dps1 = Number(getRndInteger(1, 5).toString() + "." + getRndInteger(1, 9).toString() + + getRndInteger(1, 9).toString() + + getRndInteger(1, 9).toString());
		retstr = retstr.replace("RND1", dps1);
		
		// Perim
		var wid1 = getRndInteger(5,10);
		var len1 = getRndInteger(11,15);
		
		retstr = retstr.replace("W1", wid1);
		retstr = retstr.replace("L1", len1);
		
		// Area
		var wid1 = getRndInteger(3,6);
		var len1 = getRndInteger(7,10);
		
		retstr = retstr.replace("W2", wid1);
		retstr = retstr.replace("L2", len1);
	}
	
	return retstr;
}

var examsNewL1 = [1,2,3,5,6,7,9,10,12,13,15,16,17,18,19,20,21,22,24,25,26,28,30,31,32,33,34,35,36,
37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66];

function getAddMoneyL1() {
	
	examsNewL1Count++;
	
	if ( examsNewL1Count > examsNewL1.length-1) {
		examsNewL1Count = 0;
	}
	
	getDefaultHelp();
	
	if (qsheet && numquestions == 1 ) {
		return session8("L1") + ",1,2,3,4";
	}
	
	workingstr = "<br><br><i><hr>Write your working out here:</i><br><br><br><br><br><br><br><br><p><b>Answer: </b></p><br>"
	if ( qsheet ) {
		if ( getRndInteger(1,100) > 80 ) {
			workingstr = "";
			return getAddMoneyL1Images();
		}
	}
													
	var sw = examsNewL1[examsNewL1Count];
	
	if ( qsheet ) {
		if ( getRndInteger(1,100) > 60 ) {
			sw = getRndInteger(100,110);
		}
	}

	//sw = 66;
	if ( sw < 67 ) {
		examsNewL1.splice(sw, 1);
	}
	
    switch (sw) {
    	case 1:
        	return getAddMoney1();
            break;
        case 2:
        	return getAddMoney2();
            break;
        case 3:
        	return getAddMoney4();
            break;
        case 4:
        	//return getAddMoney4();
            break;
        case 5:
        	return getAddMoney5();
            break;
        case 6:
        	return getAddMoney6();
            break;
        case 7:
        	return getAddMoney7();
            break;
        case 8:
        	//return getAddMoney7();
            break;
		case 9:
        	return getAddMoney13();
            break;
		case 10:
        	return getAddMoney15();
            break;
		case 11:
        	//return getAddMoney15();
            break;
		case 12:
        	return getAddMoney30001();
            break;
		case 13:
        	return getAddMoney18();
            break;
		case 14:
        	//return getAddMoney10019();
            break;
		case 15:
        	return getAddMoney23();
            break
		case 16:
			return getAddMoney24();
			break;
		case 17:
			return getAddMoney25();
			break;
		case 18:
			return getAddMoney223();
			break;
		case 19:
			return getBestBuys1();
			break;
		case 20:
			return getAddMoney22();
			break;
		case 21:
			return checkworkingout();
			break;
		case 22:
			return checkworkingout();
			break;
		case 23:
			//return getAddMoney223();
			break;
		case 24:
			return getAddMoney224();
			break;
		case 25:
			return getAddMoney225();
			break;
		case 26:
			return getAddMoney226();
			break;
		case 27:
			//return getAddMoney10018();
			break;
		case 28:
			return getAddMoney2281();
			break;
		case 29:
			//return getAddMoney2281();
			break;
		case 30:
			return getAddMoney30001();
			break;
		case 31:
			return getAddMoney30011();
			break;
		case 32:
			return getAddMoney3002();
			break;
		case 33:
			return getAddMoney10001();
			break;
		case 34:
			return getAddMoney10002();
			break;
		case 35:
			return getAddMoney10003();
			break;
		case 36:
			return getAddMoney10004();
			break;
		case 37:
			return getAddMoney10005();
			break;
		case 38:
			return getAddMoney10006();
			break;
		case 39:
			return getAddMoney10007();
			break;
		case 40:
			return getAddMoney10008();
			break;
		case 41:
			return getAddMoney10009();
			break;
		case 42:
			return getAddMoney10010();
			break;
		case 43:
			return getAddMoney10011();
			break;
		case 44:
			return getAddMoney10012();
			break;
		case 45:
			return getAddMoney10013();
			break;
		case 46:
			return getAddMoney10014();
			break;
		case 47:
			return getAddMoney10015();
			break;
		case 48:
			return getAddMoney10016();
			break;
		case 49:
			return getAddMoney10017();
			break;
		case 50:
			return getAddMoney10018();
			break;
		case 51:
			return getAddMoney10019();
			break;
		case 52:
			return getAddMoney10020();
			break;
		case 53:
			return getAddMoney10021();
			break;
		case 54:
			return getAddMoney10022();
			break;
		case 55:
			return getAddMoney10023();
			break;
		case 56:
			return getAddMoney10024();
			break;
		case 57:
			return getAddMoney10025();
			break;
		case 58:
			return getAddMoney10026();
			break;
		case 59:
			return getAddMoney10027();
			break;
		case 60:
			return getAddMoney10028();
			break;
		case 61:
			return getAddMoney10029();
			break;
		case 62:
			return getAddMoney10030();
			break;
		case 63:
			return getAddMoney10031();
			break;
		case 64:
			return getAddMoney10032();
			break;
		case 65:
			return getAddMoney10033();
			break;
		case 66:
			return getAddMoney10034();
			break;
		// Question sheet only.....
		case 100:
			return getAddMoney27() + ",1,2,3,4";
			break;
		case 101:
			return getAddMoney21()+ ",1,2,3,4";
			break;
		case 102:
			return getAddMoney19()+ ",1,2,3,4";
			break;
		case 103:
			return getAddMoney16()+ ",1,2,3,4";
			break;
		case 104:
			return getAddMoney11()+ ",1,2,3,4";
			break;
		case 105:
			return getAddMoney10()+ ",1,2,3,4";
			break;
		case 106:
			return getAddMoney9()+ ",1,2,3,4";
			break;
		case 107:
			return getAddMoney8()+ ",1,2,3,4";
			break;
		case 108:
			return getAddMoney3()+ ",1,2,3,4";
			break;
		case 109:
			workingstr = "";
			return getTimeTables()+ ",1,2,3,4";
			break;
		case 110:
			workingstr = "";
			return getCharts()+ ",1,2,3,4";
			break;
    }
    
}

/* L1START */

/* Timetables... */

function getTimeTables() {
	
	var retstr = "<br>";
	
	retstr += "<img style=\"margin-left:30px;\" src=\"./timetables/table" + getRndInteger(1,15) + ".jpg\">";
	
	return retstr;
}


/* Charts */


function getCharts() {
	
	var retstr = "<br>";
	
	retstr += "<img style=\"margin-left:10px;page-break-before:always\" width=\"70%\" src=\"./charts/charts" + getRndInteger(1,39) + ".jpg\">";
	
	return retstr;
}

var img_pieincome = "./Images/pieincome.png";

function getAddMoney10034() {
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = "The pie chart shows how " + thisname + " spends their annual income.<br><br><img style=\"margin-left:4px;\" width=\"" + 280 * imgscale + "\" src=\"" + cleanURL(img_pieincome) + "\">";
	
	var ww = getRndInteger(1,2);
	//ww = 5;
	
	switch (ww) {
		case 1:
			var annual = 19000 + (500*getRndInteger(1,9));
			var ans = annual / 5;
			retstr += "<br>" + thisname + " earns £" + annual + " each year. How much is spent on Clothing?,£" + Number(ans).toFixed(2) + ",£" + Number((ans/2)).toFixed(2) + ",£" + Number((ans*3/4)).toFixed(2) + ",£" + Number((ans*2)).toFixed(2);
			break;
		case 2:
			var annual = 19000 + (500*getRndInteger(1,9));
			var ans = annual / 20;
			retstr += "<br>" + thisname + " earns £" + annual + " each year. How much is spent on Medicine?,£" + Number(ans).toFixed(2) + ",£" + Number((ans/2)).toFixed(2) + ",£" + Number((ans*3/4)).toFixed(2) + ",£" + Number((ans*2)).toFixed(2);
			break;
	}
	
	return retstr;
}

function getAddMoney10033() {
	
	var retstr = "The chart shows the heights of 6 chlidren.<br><br><img style=\"margin-left:4px;\" width=\"" + 310 * imgscale + "\" src=\"" + cleanURL(img_barchartHeights) + "\">";
	
	var ww = getRndInteger(1,2);
	//ww = 5;
	
	switch (ww) {
		case 1:
			retstr += "<br>What is the range of the heights shown in the chart?,30 cm,25 cm,20 cm,125 cm";
			break;
		case 2:
			retstr += "<br><br>What is the mean average of the heights?,124 cm,128 cm,118 cm,122 cm";
			break;
	}
	
	return retstr;
}

function getAddMoney10032() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is running a drinks stall for the school summer fair";
	
	var packetsize = 10+(2*getRndInteger(1,3));
	var packets = 10 + getRndInteger(1,9);
	
	var gotcups = packetsize*packets;
	
	var needcups = 350;
	
	var ans = needcups - gotcups;
	
	retstr += "<br><br>" + thisname + " thinks that the stall will need " + needcups + " paper cups in total.";
	
	retstr += "<br><br>" + thisname + " already has " + packets + " packets of paper cups";
	retstr += "<br><br>Each packet of cups contains " + packetsize + " cups";
	
	ans = Math.round((ans/packetsize)+0.49);
	
	retstr += "<br><br>How many more packets of cups does " + thisname + " need to get?," + Math.round(ans) + "," + Math.round(ans+2) + "," + Math.round(ans-2) + "," + Math.round(ans+3);
	
	return retstr;
}

function getAddMoney10031() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is planning a street party and needs to hire tables to make a row of tables for the party";
	
	var biggest = (1100 + (5*getRndInteger(1,15)))/100;
	var large = (810 + (5*getRndInteger(1,15)))/100;
	var small = (510 + (5*getRndInteger(1,15)))/100;
	var numlarge = getRndInteger(2,6);
	
	retstr += "<br><br>" + thisname + " can hire 1m length tables for £" + small.toFixed(2);
	retstr += "<br><br>" + thisname + " can also hire 2m length tables for £" + large.toFixed(2);
	retstr += "<br><br>There are also 3m length tables for £" + biggest.toFixed(2);
	
	var tablength = (4*numlarge)+3;
	retstr += "<br><br>The row of tables needs to be " + Math.round(tablength) + " metres in length";
	
	var ans = (numlarge*biggest) + large + small;
	
	retstr += "<br><br>What is the cheapest combination of 1m; 2m and 3m tables " + thisname + " can hire?,£" + Number(ans).toFixed(2) + ",£" + Number((ans+2)).toFixed(2) + ",£" + Number((ans+3)).toFixed(2) + ",£" + Number((ans-2)).toFixed(2);
	
	return retstr;
}

function getAddMoney10030() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " sells craft items once every year at Christmas and wants to calculate the average mean amount of profit made each year.";
	
	retstr += "<br><br>The data collected so far is as follows:";
	
	var spent2017 = getRndInteger(100,250);
	var collected2017 = getRndInteger(350,450);
	retstr += "<br><br>2017 - Stock costs of £" + spent2017 + " and takings of £" + collected2017;
	
	var spent2018 = getRndInteger(100,250);
	var collected2018 = getRndInteger(350,450);
	retstr += "<br>2018 - Stock costs of £" + spent2018 + " and takings of £" + collected2018;
	
	var spent2019 = getRndInteger(100,250);
	var collected2019 = getRndInteger(350,450);
	retstr += "<br>2019 - Stock costs of £" + spent2019 + " and takings of £" + collected2019;
	
	var spent2020 = getRndInteger(100,250);
	var collected2020 = getRndInteger(350,450);
	retstr += "<br>2020 - Stock costs of £" + spent2020 + " and takings of £" + collected2020;
	
	var ans = ((collected2017-spent2017)+(collected2018-spent2018)+(collected2019-spent2019)+(collected2020-spent2020))/4;
	
	retstr += "<br><br>Complete the data " + thisname + " has collected by working out the profit for each year and then work out the average mean profit,£" + Number(ans).toFixed(2) + " ,£" + Number(ans+9).toFixed(2) + ",£" + Number(ans+5).toFixed(2) + ",£" + Number(ans-8).toFixed(2);
	
	return retstr;
}

function getAddMoney10029() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is going to plant some runner bean seeds."
	
	retstr += "<br><br>The seeds will be planted in a row."
	
	var rowlen = 1.5 + (0.25*getRndInteger(1,4));
	
	retstr += "<br><br>The row will be " + rowlen + " m long";
	
	var seeddist = 18 + (2*getRndInteger(1,8));
	
	retstr += "<br><br>There has to be a distance of " + seeddist + " cm between each seed.";
	
	var ans = 1;
	var currdist = 0;
	for (rrr = 0; rrr < 100; rrr++) {
		currdist = currdist + (seeddist/100);
		if ( currdist > rowlen) {
			break;
		}
		ans++;
	}
	
	retstr += "<br><br>How many seeds can " + thisname + " plant in a " + rowlen + " m row?," + Math.round(ans) + "," + Math.round(ans+1) + "," + Math.round(ans-1) + "," + Math.round(ans+2);
	
	return retstr;
}

function getAddMoney10028() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is going to make a blanket for a friend by sewing together squares of spare cloth."
	
	var squares = 5*getRndInteger(2,5);
	
	var bwidth = getRndInteger(7,11)*squares;
	var blength = getRndInteger(8,15)*squares;
	
	retstr += "<br><br>The squares of cloth will each measure " + squares + " cm by " + squares + " cm";
	retstr += "<br><br>The blanket will measure " + bwidth/100 + " m by " + blength/100 + " m";
	
	var ans = (blength*bwidth)/(squares*squares);
	
	retstr += "<br><br>How many cloth squares will " + thisname + " need to make the blanket?," + Math.round(ans) + "," + Math.round(ans+5) + "," + Math.round(ans-5) + "," + Math.round(ans+8);
	
	return retstr;
}

function getAddMoney10027() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is going to be working away from home for a while."
	
	var weeksaway = getRndInteger(3,6);
	
	retstr += "<br><br>A friend will look after " + thisname + "'s puppy";
	retstr += "<br><br>" + thisname + " needs to leave enough food for " + weeksaway + " weeks";
	
	var morningfood = 40 + (5*getRndInteger(1,6));
	var eveningfood = 80 + (10*getRndInteger(1,5));
	
	retstr += "<br><br> - The puppy eats " + morningfood + "g of food in the morning";
	retstr += "<br> - The puppy eats " + eveningfood + "g of food in the evening";
	
	var ans = (morningfood + eveningfood)*weeksaway*7/1000;
	
	retstr += "<br><br>How much food will " + thisname + " need to leave for the puppy to eat?," + Number(ans).toFixed(2) + " kg," + Number(ans+0.5).toFixed(2) + "kg," + Number(ans-0.5).toFixed(2) + "kg," + Number(ans+0.75).toFixed(2) + "kg";
	
	return retstr;
}

function getAddMoney10026() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " wants to buy some pet insurance"
	
	var incost = 10 + (0.25*getRndInteger(5,15));
	var petdiscount = 5*getRndInteger(2,5);
	
	retstr += "<br><br> - The insurance costs £" + incost.toFixed(2) + " per month.";
	retstr += "<br><br> - " + thisname + " will get a " + petdiscount + "% discount for buying insurance for one year";
	
	var fullamount = incost * 12;
	
	var ans = fullamount * (petdiscount/100);
	
	retstr += "<br><br>How much money will " + thisname + " save in total for buying insurance for one year?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+5).toFixed(2) + ",£" + Number(ans-5).toFixed(2) + ",£" + Number(ans+3).toFixed(2);
	
	return retstr;
}

function getAddMoney10025() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is planning to varnish the floor in a school hall"
	
	var length = getRndInteger(30,40);
	var width = getRndInteger(15,25);
	var varnishcost = getRndInteger(20,30);
	var coverage = 12 + getRndInteger(2,8);
	
	retstr += "<br><br> - The room is in the shape of a rectangle " + length + " m long and " + width + " m wide";
	retstr += "<br><br> - Varnish is sold in 2.5L tins and costs £" + varnishcost  + " per tin";
	retstr += "<br><br> - Each litre of varnish will cover " + coverage  + " m&sup2;";
	
	var litresneeded = (width*length)/coverage;
	
	var tinsneeded = Math.round((litresneeded/2.5)+0.49);
	
	var ans = tinsneeded * varnishcost;
	
	retstr += "<br><br>What will be the total cost of the varnish for " + thisname + "'s project?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+5).toFixed(2) + ",£" + Number(ans-5).toFixed(2) + ",£" + Number(ans+8).toFixed(2);
	
	return retstr;
}

function getAddMoney10024() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = "A building company uses the following rule to work out the drying time for concrete paths:"
	
	var initdepth = getRndInteger(2,5);
	var pathdepth = getRndInteger(initdepth+2, initdepth+5);
	
	retstr += "<br><br> - Thickness of concrete up to and including " + initdepth + " cm takes 1 week per cm";
	retstr += "<br><br> - For each cm over " + initdepth + " cm add 2 weeks for each extra cm";
	
	var cmover = pathdepth - initdepth;
	
	var ans = initdepth + (cmover*2);
	
	retstr += "<br><br>What is the total drying time for a path with a thickness of " + pathdepth + "cm ?," + Math.round(ans) + "," + Math.round(ans+1) + "," + Math.round(ans-1) + "," + Math.round(ans+2);
	
	return retstr;
}

function getAddMoney10023() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + "  works in the office of a local football club.";
	
	var crowd = 12000 + (1500*getRndInteger(1,5));
	
	retstr += "<br><br>The next home game features the local rivals and the crowd is expected to be approximately " + crowd;
	
	var boxes = 200 + (100*getRndInteger(1,4));
	
	retstr += "<br><br> - The printer sells the programmes in boxes of " + boxes;
	retstr += "<br> - about one third of the people buy a programme";
	
	var ans = ((crowd/3)/boxes)+0.49;
	
	retstr += "<br><br>How many boxes of programmes should " + thisname + " order?," + Math.round(ans) + "," + Math.round(ans+5) + "," + Math.round(ans-5) + "," + Math.round(ans+8);
	
	return retstr;
}

function getAddMoney10022() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + "  is a coach for a sports club.";
	retstr += "<br>The club enters a tournament.";
	
	var entryfee = 30 + (getRndInteger(1,5)*5);
	retstr += "<br><br> - The entry fee for the tournament is £" + entryfee + " in total.";
	var expenses = 10 + (getRndInteger(1,4)*0.25);
	retstr += "<br> - " + thisname + "'s expenses are £" + expenses.toFixed(2);
	
	var sending = 10 + (getRndInteger(2,3)*2);
	retstr += "<br><br>" + thisname + " decides to send " + sending + " players to the tournament.";
	
	var ans = ((entryfee + expenses)/sending) + 0.01;
	
	retstr += "<br><br>How much should " + thisname + " charge the players to cover the costs of the tournament?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+0.35).toFixed(2) + ",£" + Number(ans+0.75).toFixed(2) + ",£" + Number(ans-0.35).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Find the total costs for running the tournament (entry fee plus expenses).\
														<br><br>How much should each player pay so that all their subscriptions add up to same amount of the costs?\
														<br><br>you could use a DIVIDE here.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney10021() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + "  manages a cold storage warehouse that stores potatoes in boxes before delivery to supermarkets.";
	
	var boxcap = 8 + (getRndInteger(1,4)*2);
	retstr += "<br><br> - Each storage box contains " + boxcap + " bags of potatoes";
	var bagwgt = 1.5 + (getRndInteger(1,4)*0.25);
	retstr += "<br> - Each bag of potatoes weighs " + bagwgt + " kg";
	
	var delivery = bagwgt * 3;
	retstr += "<br><br>" + thisname + " is told to expect a delivery of potatoes with a weight of " + delivery + " tonnes";
	
	retstr += "<br><br><u>Use 1 tonne = 1000 kg</u>";
	
	var ans = ((delivery*1000/bagwgt)/boxcap)+0.49;
	
	retstr += "<br><br>How many boxes does " + thisname + " need to find space for in the warehouse?," + Math.round(ans) + "," + Math.round(ans+10) + "," + Math.round(ans+15) + "," + Math.round(ans-15);
	
	return retstr;
}

function getAddMoney10020() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = "A friend asks " + thisname + "  to choose any whole number between 100 and 200";
	
	var ans = getRndInteger(100,200);
	
	retstr += "<br><br><u>" + thisname + " picks " + ans;
	
	retstr += "</u> - The friend then says:";
	
	retstr +="<br><br>1 - Add the number of weeks in one year."
	ans += 52;
	
	var minsstr = ["one hour", "half an hour", "1/3 of an hour", "2/3 of an hour", "1/4 of an hour", "3/4 of an hour"];
	var minsval = [60,30,20,40,15,45];
	var idx = getRndInteger(0,minsstr.length-1);
	
	retstr += "<br>2 - Minus the number of minutes in " + minsstr[idx];
	ans -= minsval[idx];
	
	var marr = ["January", "May", "June", "April", "September", "November", "December"];
	var mval = [31,31,30,30,30,30,31];
	var idx = getRndInteger(0,marr.length-1);
	
	retstr += "<br>3 - Add the number of days in " + marr[idx];
	ans += mval[idx];
	
	var sqside = getRndInteger(2,9);
	retstr += "<br>4 - Subtract the area of a " + sqside + " x " + sqside + " square"
	ans -= (sqside*sqside);
	
	var sqside = getRndInteger(5,12);
	retstr += "<br>5 - Add the perimeter of a " + sqside + " x " + sqside + " square"
	ans += (sqside*4);
	
	var secsstr = ["one minute", "1/3 of a minute", "2/3 of a minute", "1/2 a minute", "1/4 of a minute", "3/4 of a mninute"];
	var secsval = [60,20,40,30,15,45];
	var idx = getRndInteger(0,secsstr.length-1);
	
	retstr += "<br>6 - Minus the number of seconds in " + secsstr[idx];
	ans -= secsval[idx];
	
	retstr += "<br><br>What number is " + thisname + " left with?," + Math.round(ans) + "," + Math.round(ans+10) + "," + Math.round(ans+15) + "," + Math.round(ans-15);
	
	return retstr;
}
	

function getAddMoney10019() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + "  runs a marathon (26 miles) to raise money for a local charity";
	
	var finmins = 25 + getRndInteger(2, 20);
	
	var frmoney = getRndInteger(2200, 2800)/100;
	
	retstr += "<br><br>- Friends give " + thisname + " a total of £" + frmoney.toFixed(2) + " per mile";
	retstr += "<br>- " + thisname + "'s father pledges £50 for completing the marathon";
	retstr += "<br>- " + thisname + "'s boss at work also promises £10 for every minute the finishing time is under 4 hours.";
	
	retstr += "<br><br>" + thisname + " completed the marathon in 3 hours " + finmins + " minutes";
	
	var ans = (frmoney*26) + 50 + (10*(60-finmins));
	
	retstr += "<br><br>How much will " + thisname + " be able to collect for completing the marathon?,£" + Number(ans).toFixed(2) + ",£" + Number(ans*0.9).toFixed(2) + ",£" + Number(ans*1.1).toFixed(2) + ",£" + Number(ans*1.05).toFixed(2);
	
	return retstr;
}

function getAddMoney10018() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	
	var earns = 12 + (getRndInteger(2,4)*4);
	
	var retstr = thisname + " earns £" + earns + " a week working part time while studying at college.";
	
	var saves = 25 + (getRndInteger(1,2)*25);
	
	retstr += "<br><br>" + thisname + " saves " + saves + "% of the money and spends the rest.";
	
	var ans = (earns*52)*(saves/100)*0.5;
	
	retstr += "<br><br>How much will " + thisname + " save in six months?,£" + Math.round(ans) + ",£" + Math.round(ans-50) + ",£" + Math.round(ans+75) + ",£" + Math.round(ans-100);
	
	return retstr;
}

function getAddMoney10017() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname1 = personnames[idx];
	var thisname2 = personnames[idx+1];
	
	var sponsorship = 5 + getRndInteger(5,10);
	
	var retstr = thisname1 + " and " + thisname2 + " spend a lot of time raising money for charity.";
	
	var t1raised = 1.0 + (getRndInteger(1,4)*0.5);
	retstr += "<br><br>In 2019 " + thisname1 + " raised £" + t1raised.toFixed(2) + " for every £1 that " + thisname2 + " raised";
	
	var t2raised = 500 + (getRndInteger(2,9)*100);
	
	var ans = t2raised + (t2raised*t1raised);
	
	retstr += "<br><br>In 2019 " + thisname2 + " raised £" + t2raised.toFixed(2);

	retstr += "<br><br>How much did " + thisname1 + " and " + thisname2 + " raise in total?,£" + Math.round(ans) + ",£" + Math.round(ans+10) + ",£" + Math.round(ans-100) + ",£" + Math.round(ans+50);
	
	return retstr;
}

function getAddMoney10016() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var sponsorship = 5 + getRndInteger(5,10);
	
	var retstr = thisname + " is being sponsored £" + sponsorship + " for every kilometre completed of a charity bike ride.";
	
	var stagecomplete = 5 + getRndInteger(1,4);
	var cycstages = stagecomplete + (getRndInteger(1,3)*2);
	
	var cycdist = cycstages * getRndInteger(10,15);
	
	retstr += "<br><br>The total distance of the bike ride is " + cycdist + " kilometres";
	
	retstr += "<br><br>The ride is split into " + cycstages + " equally distanced stages.";
	
	retstr += "<br><br>" + thisname + " has to retire with an injury after completing only " + stagecomplete + " stages.";
	
	var ans = cycdist/cycstages*stagecomplete*sponsorship;
	
	retstr += "<br><br>How much sponsorship will " + thisname + " raise?,£" + Math.round(ans) + ",£" + Math.round(ans+50) + ",£" + Math.round(ans-50) + ",£" + Math.round(ans+25);
	
	return retstr;
}

function getAddMoney10015() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " books a family holiday.";
	
	var holcost = 2000 + (getRndInteger(1,12)*100);
	var holdeposit = (getRndInteger(1,4)*5);
	var holmonths = 12 + (getRndInteger(1,4)*2);
	
	retstr += "<br><br>The total cost for the holiday is £" + holcost;
	retstr += "<br><br>" + thisname + " pays a " + holdeposit + "% deposit and will pay the remaining balance off by making " + holmonths + " equal monthly payments";
	
	var ans = (holcost*((100-holdeposit)/100))/holmonths;
	
	retstr += "<br><br>How much will " + thisname + " pay each month?,£" + Number(ans).toFixed(2) + ",£" + Number(ans*1.10).toFixed(2) + ",£" + Number(ans*0.9).toFixed(2) + ",£" + Number(ans*1.05).toFixed(2);
	
	return retstr;
}

function getAddMoney10014() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " works for a local hotel organising wedding receptions.";
	
	var rectable = (getRndInteger(4,7)*2);
	var cirtable = (getRndInteger(3,5)*2);
	
	retstr += "<br><br>Wedding receptions always use one large rectangular table that sits " + rectable + " guests.";
	retstr += "<br><br>The hotel also uses  circular tables that can sit " + cirtable + " guests.";
	
	var guests = 150 + (getRndInteger(1,3)*50);
	
	var ans = Math.round(((guests-rectable)/cirtable+0.49));
	
	retstr += "<br><br>How many circular tables will " + thisname + " need to request for a wedding reception to be attended by " + guests + " people (including bride and groom)?," + Math.round(Number(ans)) + "," + Math.round(Number(ans+1)) + "," + Math.round(Number(ans-1)) + "," + Math.round(Number(ans+2));
	
	return retstr;
	
}


function getAddMoney10013() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	
	var retstr = thisname + " decides to check how their monthly pay as increased.";
	
	var pay2017 = 22800 + (getRndInteger(20,99)*12);
	var pay2020 = 24000 + (getRndInteger(20,99)*12);
	
	retstr += "<br><br>In 2017 " + thisname + " earned £" + pay2017;
	retstr += "<br><br>In 2020 " + thisname + " earned £" + pay2020;
	
	var m17 = pay2017/12;
	
	var m20 = pay2020/12;
	
	var ans = m20 - m17;
	
	retstr += "<br><br>How much more was " + thisname + "'s monthly pay in 2020 compared to 2017?," + Math.round(Number(ans)) + "," + Math.round(Number(ans*1.1)) + "," + Math.round(Number(ans*0.9)) + "," + Math.round(Number(ans*1.05));
	
	document.getElementById("helptext").innerHTML = 'Find the difference between the two years annual pay amounts.\
														<br><br>Divide the difference by 12 to see how much more per month\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
	
}

function getAddMoney10012() {
	wbox = "";
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var colalitres = 5000 + (getRndInteger(1,8) * 500);
	
	var retstr = "A theme park sells " + colalitres + " litres of cola drink each week";
	
	retstr += "<br><br>The cola drink is made by mixing cola flavoured concentrate with carbonated water.";
	
	var waterlitres = 15 + (getRndInteger(1,5) * 5);
	
	retstr += "<br><br>The instructions for making cola drink are as follows:";
	
	retstr += "<br><br>Dilute 1 litre of cola concentrate with " + waterlitres + " litres of carbonated water.";
	
	var ans = colalitres/(1+waterlitres);
	
	retstr += "<br><br>How many litres of cola concentrate are needed by the theme park each week?," + Math.round(Number(ans)) + "," + Math.round(Number(ans*1.1)) + "," + Math.round(Number(ans*0.9)) + "," + Math.round(Number(ans*1.05));
	
	return retstr;
	
}

function getAddMoney10011() {
	var ratioval = getRndInteger(2,5);
	
	var ratparts = 1 + ratioval;
	
	var ratioamount = getRndInteger(20,50) * ratparts;
	
	var ans = ratioamount/ratparts*ratioval;
	
	var retstr = "£" + ratioamount.toFixed(0) + " is shared into two amounts of money that are in the ratio 1:" + ratioval;
	
	retstr += "<br><br>How much is the larger of the two amounts?,£" + Number(ans).toFixed(0) + ",£" + Number(ans+5).toFixed(0) + ",£" + Number(ans-5).toFixed(0) + ",£" + Number(ans+8).toFixed(0);
	
	return retstr;
}

var img_bouncing = "./Images/bouncyball.jpg";

function getAddMoney10010() {

	var retstr = "When a ball is dropped it bounces back to a height that is 60% of the height it dropped from previously.<br><br><img style=\"margin-left:15px;margin-top:0px;margin-bottom:5px;\" width=\"" + 100 * imgscale + "\" src=\"" + cleanURL(img_bouncing) + "\">";
	
	var drophgt = getRndInteger(200,250);
	var ans = drophgt*0.6*0.6;
	
	retstr += "<br><br>A ball is dropped from " + Number(drophgt).toFixed(0) + " cm";

	retstr += "<br><br>How far will the ball rise to after its second bounce (to the nearest whole cm)?," + Number(ans).toFixed(0) + " cm," + Number(ans*1.1).toFixed(0) + " cm," + Number(ans*0.9).toFixed(0) + " cm," + Number(ans*1.14).toFixed(0) + " cm";
	
	return retstr;
	
}

function getAddMoney10009() {
	wbox = "";
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is planning to put gravel down on a driveway and path.";
	
	var path = [1.5, 1.75, 2, 2.25, 2.5];
	
	var drivelength = Number(8 + getRndInteger(2,8));
	var drivewidth = Number(2 + getRndInteger(1,2));
	
	retstr += "<br><br>The driveway is a rectangle " + drivelength + " m long and " + drivewidth + " m wide";
	
	var pathlength = Number(12 + getRndInteger(5,10));
	var pathwidth = path[getRndInteger(0,path.length-1)];
	
	retstr += "<br><br>The path is a long rectangle " + pathlength + " m long and " + pathwidth + " m wide";
	
	var cost = ["3.00", "3.25", "3.50", "3.75", "4.00", "4.25", "4.50"];
	var cover = [2.5, 3, 3.25, 3.5, 3.75, 4.00, 4.25, 4.50];
	
	var gravelcost = cost[getRndInteger(0,cost.length-1)];
	
	var gravelcover = cover[getRndInteger(0,cover.length-1)];
	
	retstr += "<br><br>Bags of gravel cover " + gravelcover + " square metres per bag";
	
	var ans = (((drivelength*drivewidth) + (pathlength*pathwidth))/gravelcover)+0.49;
	
	retstr += "<br><br>How many bags of gravel will " + thisname + " need to buy to gravel the drive and path?," + Number(ans).toFixed(0) + "," + Number(ans*0.92).toFixed(0) + "," + Number(ans*1.08).toFixed(0) + "," + Number(ans*1.14).toFixed(0);
	
	return retstr;
	
}

function getAddMoney10008() {
	var retstr = "Twenty different teams play in a competition.<br><br>Teams are awarded 3 points for a win; 1 point for a draw and 0 points for a defeat.";
	
	var teamAWins = getRndInteger(3,8);
	var teamADraws = getRndInteger(3,8);
	var teamBWins = getRndInteger(3,8);
	var teamBDraws = getRndInteger(3,8);
	var teamCWins = getRndInteger(3,8);
	var teamCDraws = getRndInteger(3,8);
	
	retstr += "<br><br>Three teams in the competition recorded the following results:"
	
	retstr += "<br><br>Team A : " + teamAWins.toFixed(0) + " wins and " + teamADraws.toFixed(0) + " draws";
	retstr += "<br>Team B : " + teamBWins.toFixed(0) + " wins and " + teamBDraws.toFixed(0) + " draws";
	retstr += "<br>Team C : " + teamCWins.toFixed(0) + " wins and " + teamCDraws.toFixed(0) + " draws";
	
	var Atotal = teamAWins*3 + teamADraws;
	var Btotal = teamBWins*3 + teamBDraws;
	var Ctotal = teamCWins*3 + teamCDraws;
	
	ww = getRndInteger(1,2);
	//ww = 4;
	switch (ww) {
		case 1:
			retstr += "<br><br>How many points did Team A get?," + Number(Atotal).toFixed(0) + "," + Number(teamAWins+teamADraws).toFixed(0) + "," + Number(Atotal+1).toFixed(0) + "," + Number(Atotal-1).toFixed(0);
			break;
		case 2:
			if ( Atotal > Btotal ) {
				var ans = Atotal-Btotal;
				retstr += "<br><br>How many more points did Team A get than Team B?," + Number(ans).toFixed(0) + "," + Number(ans+2).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans+3).toFixed(0);
			}
			else if ( Btotal > Atotal ) {
				var ans = Btotal-Atotal;
				retstr += "<br><br>How many more points did Team B get than Team A?," + Number(ans).toFixed(0) + "," + Number(ans+2).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans+3).toFixed(0);
			}
			else {
				retstr += "<br><br>How many points did Team C get?," + Number(Ctotal).toFixed(0) + "," + Number(teamCWins+teamCDraws).toFixed(0) + "," + Number(Ctotal+1).toFixed(0) + "," + Number(Ctotal-1).toFixed(0);
			}
			break;
		case 3:
			var ans = Atotal+Btotal+Ctotal;;
			
			retstr += "<br><br>How many points did all three teams win in total?," + Number(ans).toFixed(0) + "," + Number(ans+3).toFixed(0) + "," + Number(ans-3).toFixed(0) + "," + Number(ans+4).toFixed(0);
			
			break;
		case 4:
			var ans = (Atotal+Btotal+Ctotal)/3;
			
			retstr += "<br><br>What was the mean average total score for the three teams?," + Number(ans).toFixed(2) + "," + Number(ans+3).toFixed(2) + "," + Number(ans-3).toFixed(2) + "," + Number(ans+4).toFixed(2);
			
			break;
	}
	
	return retstr;
}

var img_bustimetable = "./Images/bustimes.png";

function getAddMoney10007() {
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	retstr = thisname + " decides to do a survey of the colours of cars passing the house for a short period of time.";
	
	var mult = getRndInteger(1,2);
	
	var redval = getRndInteger(1,10);
	var silverval = getRndInteger(1,10);
	var blackval = 30 - redval - silverval;
	
	retstr += "<br><br>Red : " + (redval*mult).toFixed(0) + " car(s)";
	retstr += "<br>Silver : " + (silverval*mult).toFixed(0) + " car(s)";
	retstr += "<br>Black : " + (blackval*mult).toFixed(0) + " car(s)";
	
	retstr += "<br><br>"  + thisname + " decides to draw a pie chart.";
	
	var ww = getRndInteger(1,2);
	//ww = 1;
	
	switch (ww) {
		case 1:
			var ans = ((blackval*mult)/(30*mult)) * 360;
			retstr += "<br><br>What angle in degrees would "  + thisname + " use to draw the segment for black cars?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
			break;
		case 2:
			var ans = ((redval*mult)/(30*mult)) * 360;
			retstr += "<br><br>What angle in degrees would "  + thisname + " use to draw the segment for red cars?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
			break;
		case 3:
			var ans = ((silverval*mult)/(30*mult)) * 360;
			retstr += "<br><br>What angle in degrees would "  + thisname + " use to draw the segment for silver cars?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'Pie charts will use fractions of 360 degrees to give a visual  indication of how big a share of the whole different items have.\
														<br><br>If an item is one half of the whole then it will have one half of 360 degrees = 180\
														<br><br>working with pie charts involves undertanding fractions and calculating the fraction as a proportion of 360\
														<br><br>If pie charts confuse you - message your tutor next time you are in class fror some help\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney10006() {
	
	var retstr = "Examine the train time table below.<br><br><img style=\"margin-left:15px;margin-top:0px;margin-bottom:5px;\" width=\"" + 260 * imgscale + "\" src=\"" + cleanURL(img_bustimetable) + "\">";
	
	var ww = getRndInteger(1,10);
	//ww = 1;
	
	switch (ww) {
		case 1:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br>" + thisname + " lives in Droitwich and works in Catshill.";
			retstr += "<br><br>It takes " + thisname + " 45 minutes to walk to work from the station.";
			retstr += "<br><br>Which train should " + thisname + " catch to arrive at work just before 9:00am ?, 07:29, 07:16, 08:14,05:48";
			break;
		case 2:
			retstr += "<br><br>Which train should a person take from Worcester to get to Sidemoor?, 07:50, 07:05, 08:07,10:13";
			break;
		case 3:
			retstr += "<br><br>Which train is the quickest from Worcester to Rubery?, 10:13, 05:30, 07:05,07:50";
			break;
		case 4:
			retstr += "<br><br>Which train is the slowest from Worcester to Rubery?, 07:50, 05:30, 07:05,10:13";
			break;
		case 5:
			retstr += "<br><br>How long does the latest train from Wychbold take to get to Rubery?, 37 mins, 27 mins,47 mins, 36 mins";
			break;
		case 6:
			retstr += "<br><br>How long does the 07:16 from Fernhill take to get to Marlbrook?, 49 mins, 39 mins, 59 mins, 29 mins";
			break;
		case 7:
			retstr += "<br><br>How long does the 05:48 from Droitwich take to get to Catshill?, 23 mins, 33 mins, 24 mins, 22 mins";
			break;
		case 8:
			retstr += "<br><br>If you miss the 07:29 Droitwich train how long to the next train from Droitwich?, 45 mins, 44 mins, 35 mins, 55 mins";
			break;
		case 9:
			retstr += "<br><br>What is the mean average journey time for trains from Worcester to Rubery to the nearest minute?, 60 mins, 59 mins, 57 mins, 61 mins";
			break;
		case 10:
			retstr += "<br><br>What is the range of the different journey times for trains from Worcester to Rubery?, 23 mins, 25 mins, 31 mins, 20 mins";
			break;
	}
	
	return retstr;
}

function getAddMoney10005() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is making orange drink for a garden birthday party.";
	
	var waterparts = getRndInteger(3,6);
	
	retstr += "<br><br>The instructions say to mix 1 part orange squash with " + waterparts + " parts water";
	
	var totparts = 1 + waterparts;
	
	var qscale = getRndInteger(15,25)*25;
	var jquant = totparts * qscale;
	
	var ans = jquant/totparts * waterparts;
	
	retstr += "<br><br>" + thisname + " makes up " + jquant + "ml of orange drink.";
	
	retstr += "<br><br>How much water did " + thisname + " use to the nearest ml?," + Number(ans).toFixed(0) + " ml," + Number(ans+100).toFixed(0) + " ml,"+ Number(ans+25).toFixed(0) + " ml,"+ Number(ans-50).toFixed(0) + " ml";
	
	return retstr;
}

function getAddMoney10004() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is laying carpet tiles in an office room.";
	
	retstr += "The room is L-Shaped and the measurements that " + thisname + " was able to measure are shown below:<br><br>";
	
	retstr += lshaperoom;
	
	retstr += "<br>One Carpet tile covers an area of 0.25m&sup2;";
	
	//retstr += "1 Carpet tile covers an area of 0.25m&sup2;";
	
	var topval = getRndInteger(4,8);
	var side1val = getRndInteger(12,18);
	var baseval = getRndInteger(11,18);
	var side2val = getRndInteger(4,9);
	
	retstr = retstr.replace("%top%", topval + " m");
	retstr = retstr.replace("%side1%", side1val + " m");
	retstr = retstr.replace("%base%", baseval + " m");
	retstr = retstr.replace("%side2%", side2val + " m");
	
	var mainroomarea = baseval * side1val;
	
	var smallarea = (baseval-topval)*(side1val-side2val);
	
	var totalarea = mainroomarea - smallarea;
	
	var ans = ((totalarea/0.25)+0.49).toFixed(0);
	
	//var smallarea = 
	
	retstr += "<br><br>How many carpet tiles will " + thisname + " need?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
	
	return retstr;
}

var img_salesquarters = "./Images/sales.jfif";

function getAddMoney10003() {
	
	var retstr = "The table shows annual sales for 2019 split into quarters of the year.<br><br><img style=\"margin-left:15px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_salesquarters) + "\">";
	
	var ww = getRndInteger(1,5);
	//ww = 5;
	
	switch (ww) {
		case 1:
			retstr += "<br><br>What was the range of the sales for 2019?,$500000,$630000,$600000,£450000";
			break;
		case 2:
			retstr += "<br><br>What was the mean average of the sales for 2019?,$630000,$550000,$500000,£660000";
			break;
		case 3:
			retstr += "<br><br>What was total sales for the first half of 2019?,$950000,$720000,$350000,£600000";
			break;
		case 4:
			var q1incr = getRndInteger(1,3)*10;
			var mult = 1 + q1incr/100;
			
			var ans = Number(350000 * mult);
			
			retstr += "<br><br>In 2020 Quarter 1 sales were increased by " + q1incr + "%.<br><br>What were the sales Q1 sales in 2020?,$" + Number(ans).toFixed(0) + ",$"+ Number(ans*0.9).toFixed(0) + ",$"+ Number(ans*0.95).toFixed(0) + ",$"+ Number(ans*1.1).toFixed(0);
	
			break;
		case 5:
			var q1incr = getRndInteger(1,3)*10;
			var mult = 1 - q1incr/100;
			
			var ans = Number(350000 * mult);
			
			retstr += "<br><br>In 2020 Quarter 1 sales were reduced by " + q1incr + "%.<br><br>What were the sales Q1 sales in 2020?,$" + Number(ans).toFixed(0) + ",$"+ Number(ans*0.9).toFixed(0) + ",$"+ Number(ans*0.95).toFixed(0) + ",$"+ Number(ans*1.1).toFixed(0);
	
			break;
	}
	
	//document.getElementById("helptext").innerHTML = 'Stage 1: Use the scale provided.\
														//<br><br>Use a multiply to convert CM to KM.\
															//<br><br>Check if your answer matches one of the answer buttons.\
															//<br><br>If not, check your calculations again\
															//<br><br>Always use paper to jot your working out down as you go.\
													//';
	
	return retstr;
}

var img_distances = "./Images/distances.png";

function getAddMoney10002() {
	
	var retstr = "The table shows MILES between various UK cities.<br><br><img style=\"margin-left:50px;\" width=\"" + 160 * imgscale + "\" src=\"" + cleanURL(img_distances) + "\">";
	
	var ww = getRndInteger(1,4);
	//ww = 6;
	
	switch (ww) {
		case 1:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Derby to Hull and then from Hull to Sheffield.";
	
			retstr += " How many miles did " + thisname + " travel in total?,149,90,91,125";
	
			break;
		case 2:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " travels from Derby to Nottingham and back each day for work (except Sat and Sun).";
	
			retstr += " How many miles does " + thisname + " travel in a week?,160,80,150,224";
	
			break;
		case 3:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Hull to Leicester and then from Leicester to Sheffield before returning back to Hull.";
	
			retstr += " How many miles did " + thisname + " travel in total?,210,149,91,160";
	
			break;
		case 4:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Lincoln to Doncaster.";
			var costpm = getRndInteger(24,40);
			var ans = (costpm/100) * 39;
			retstr += " " + thisname + "'s car costs " + costpm + "p per mile to run. How much did the journey cost?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
			break;
		case 5:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Hull to Nottingham and back again.";
			var costpm = getRndInteger(24,40);
			var ans = (costpm/100) * 146;
			retstr += " " + thisname + "'s car costs " + costpm + "p per mile to run. How much did the journey cost?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
			break;
		case 6:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br>" + thisname + " travels from Derby to Nottingham and back each day for work (except Sat and Sun).";
			var costpm = getRndInteger(24,40);
			var ans = (costpm/100) * 160;
			retstr += "Using the car costs " + costpm + "p per mile. How much does " + thisname + " spend travelling to work each week?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
			break;
	}
	
	//document.getElementById("helptext").innerHTML = 'Stage 1: Use the scale provided.\
														//<br><br>Use a multiply to convert CM to KM.\
															//<br><br>Check if your answer matches one of the answer buttons.\
															//<br><br>If not, check your calculations again\
															//<br><br>Always use paper to jot your working out down as you go.\
													//';
	
	document.getElementById("helptext").innerHTML = 'To find a distance trace a line down from one town and across from another.\
														<br><br>The distance will be where the two lines cross.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney10001() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " cycled from Town A to Town B.";
	
	var distval = getRndInteger(4,10);
	retstr += "<br><br>On a map Town A is " + distval + " cm from Town B";
	
	var scaleval = getRndInteger(4,10)*0.25;
	retstr += "<br><br>The map scale is 1cm = " + scaleval.toFixed(2) + " km";
	
	var ans = distval * scaleval;
	
	retstr += "<br><br>How far did " + thisname + " cycle?," + Number(ans).toFixed(2) + " km," + Number((ans+0.5)).toFixed(2) + " km," + Number((ans-0.25)).toFixed(2) + " km," + Number((ans+0.25)).toFixed(2) + " km";
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Use the scale provided.\
														<br><br>Use a multiply to convert CM to KM.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

var examsNewL2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];

/* L2 */
function getAddMoney() {
	
	examsNewL2Count++;
	
	if ( examsNewL2Count > examsNewL2.length-1) {
		examsNewL2Count = 0;
	}
	
	getDefaultHelp();
	
	workingstr = "<br><br><i><hr>Write your working out here:</i><br><br><br><br><br><br><br><br><p><b>Answer: </b></p><br>"
	if ( qsheet ) {
		if ( getRndInteger(1,100) > 80 ) {
			workingstr = "";
			return getAddMoneyL2Images();
		}
	}
													
	var sw = examsNewL2[examsNewL2Count];
	
	//alert(sw);
	
	examsNewL2.splice(sw, 1);
	
	//sw = 60;
    switch (sw) {
    	case 1:
        	return getAddMoney20018();
            break;
        case 2:
        	return getAddMoney20019();
            break;
        case 3:
        	return getAddMoney4();
            break;
        case 4:
        	return getAddMoney4();
            break;
        case 5:
        	return getAddMoney5L2();
            break;
        case 6:
        	return getAddMoney6L2();
            break;
        case 7:
        	return getAddMoney7L2();
            break;
        case 8:
        	return getAddMoney12L2();
            break;
		case 9:
        	return getAddMoney13();
            break;
		case 10:
        	return getAddMoney14();
            break;
		case 11:
        	return getAddMoney15();
            break;
		case 12:
        	return getAddMoney17();
            break;
		case 13:
        	return getAddMoney18();
            break;
		case 14:
        	return getAddMoney182();
            break;
		case 15:
        	return getAddMoney23();
            break
		case 16:
			return getAddMoney24();
			break;
		case 17:
			return getAddMoney25();
			break;
		case 18:
			return getAddMoney26();
			break;
		case 19:
			return getBestBuys1();
			break;
		case 20:
			return getAddMoney22();
			break;
		case 21:
			return checkworkingout();
			break;
		case 22:
			return getAddMoney222();
			break;
		case 23:
			return getAddMoney223();
			break;
		case 24:
			return getAddMoney224();
			break;
		case 25:
			return getAddMoney225();
			break;
		case 26:
			return getAddMoney226();
			break;
		case 27:
			return getAddMoney227();
			break;
		case 28:
			return getAddMoney228();
			break;
		case 29:
			return getAddMoney3000();
			break;
		case 30:
			return getAddMoney3000();
			break;
		case 31:
			return getAddMoney3001();
			break;
		case 32:
			return getAddMoney3002();
			break;
		case 33:
			return getAddMoney20001();
			break;
		case 34:
			return getAddMoney20002();
			break;
		case 35:
			return getAddMoney20003();
			break;
		case 36:
			return getAddMoney200031();
			break;
		case 37:
			return getAddMoney20004();
			break;
		case 38:
			return getAddMoney20005();
			break;
		case 39:
			return getAddMoney20006();
			break;
		case 40:
			return getAddMoney20007();
			break;
		case 41:
			return getAddMoney20008();
			break;
		case 42:
			return getAddMoney20010();
			break;
		case 43:
			return getAddMoney20011();
			break;
		case 44:
			return getAddMoney20013();
			break;
		case 45:
			return getAddMoney20013();
			break;
		case 46:
			return getAddMoney20015();
			break;
		case 47:
			return getAddMoney20015();
			break;
		case 48:
			return getAddMoney20016();
			break;
		case 49:
			return getAddMoney20017();
			break;
		case 50:
			return getAddMoney20018();
			break;
		case 51:
			return getAddMoney20019();
			break;
		case 52:
			return getAddMoney20020();
			break;
		case 53:
			return getAddMoney20021();
			break;
		case 54:
			return getAddMoney20022();
			break;
		case 55:
			return getAddMoney20023();
			break;
		case 56:
			return getAddMoney20024();
			break;
		case 57:
			return getAddMoney20025();
			break;
		case 58:
			return getAddMoney20026();
			break;
		case 59:
			return getAddMoney20027();
			break;
		case 60:
			return getAddMoney20028();
			break;
    }
    
}

/* L2START */

function getAddMoney20028() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is on holiday in South Africa."
	
	retstr += "<br><br>The following day trip prices are advertised in the hotel reception (prices in South African Rand):";
	
	var robben = 200 + (10*getRndInteger(1,9));
	var table = 175 + (5*getRndInteger(1,9));
	
	retstr += "<br><br>- Robben Island: " + robben;
	retstr += "<br>- Table Mountain: " + table;
	
	retstr += "<br><br>" + thisname + " buys two tickets for each trip.";
	
	var exch = (getRndInteger(1900, 1990)/100).toFixed(2);
	
	retstr += "<br><br>The exchange rate is £1 = " + exch + " Rand";
	
	var ans = (robben+table)*2/Number(exch);
	
	retstr += "<br><br>How much will " + thisname + " pay in £ for the tickets?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+25).toFixed(2) + ",£" + Number(ans-30).toFixed(2) + ",£" + Number(ans+45).toFixed(2);

	return retstr;
}

function getAddMoney20027() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var ww = getRndInteger(1,5);
	
	var retstr = "";
	switch (ww) {
		case 1:
			retstr = thisname + " wants to book a 6 night mini-break in the Lake District."
			retstr += "<br><br>" + thisname + " sees this offer:"
			retstr += "<br><br>4 nights for the price of 3 at Lakeside Hotel in Grasmere."
			var pernight = 100 + (10*getRndInteger(1,4));
			retstr += "<br><br>Room cost: £" + pernight + " per night";
			var deposit = 5 + (5*getRndInteger(1,3));
			retstr += "<br><br>" + thisname + " pays a " + deposit + "% deposit when booking the room and will pay the rest on arrival";
			var ans = 5*pernight*(1-deposit/100);
			retstr += "<br><br>How much will " + thisname + " need to pay on arrival taking into account the special offer?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+15).toFixed(2) + ",£" + Number(ans-15).toFixed(2) + ",£" + Number(ans+25).toFixed(2);
			break;
		case 2:
			retstr = thisname + " wants to book a 9 night mini-break in the Lake District."
			retstr += "<br><br>" + thisname + " sees this offer:"
			retstr += "<br><br>3 nights for the price of 2 at Lakeside Hotel in Grasmere."
			var pernight = 100 + (10*getRndInteger(1,4));
			retstr += "<br><br>Room cost: £" + pernight + " per night";
			var deposit = 5 + (5*getRndInteger(1,3));
			retstr += "<br><br>" + thisname + " pays a " + deposit + "% deposit when booking the room and will pay the rest on arrival";
			var ans = 6*pernight*(1-deposit/100);
			retstr += "<br><br>How much will " + thisname + " need to pay on arrival taking into account the special offer?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+15).toFixed(2) + ",£" + Number(ans-15).toFixed(2) + ",£" + Number(ans+25).toFixed(2);
			break;
		case 3:
			retstr = thisname + " wants to book a 7 night mini-break in the Lake District."
			retstr += "<br><br>" + thisname + " sees this offer:"
			retstr += "<br><br>2 nights for the price of 1 at Lakeside Hotel in Grasmere."
			var pernight = 100 + (10*getRndInteger(1,4));
			retstr += "<br><br>Room cost: £" + pernight + " per night";
			var deposit = 5 + (5*getRndInteger(1,3));
			retstr += "<br><br>" + thisname + " pays a " + deposit + "% deposit when booking the room and will pay the rest on arrival";
			var ans = 4*pernight*(1-deposit/100);
			retstr += "<br><br>How much will " + thisname + " need to pay on arrival taking into account the special offer?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+15).toFixed(2) + ",£" + Number(ans-15).toFixed(2) + ",£" + Number(ans+25).toFixed(2);
			break;
		case 4:
			retstr = thisname + " wants to book a 8 night mini-break in the Lake District."
			retstr += "<br><br>" + thisname + " sees this offer:"
			retstr += "<br><br>3 nights for the price of 2 at Lakeside Hotel in Grasmere."
			var pernight = 100 + (10*getRndInteger(1,4));
			retstr += "<br><br>Room cost: £" + pernight + " per night";
			var deposit = 5 + (5*getRndInteger(1,3));
			retstr += "<br><br>" + thisname + " pays a " + deposit + "% deposit when booking the room and will pay the rest on arrival";
			var ans = 6*pernight*(1-deposit/100);
			retstr += "<br><br>How much will " + thisname + " need to pay on arrival taking into account the special offer?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+15).toFixed(2) + ",£" + Number(ans-15).toFixed(2) + ",£" + Number(ans+25).toFixed(2);
			break;
		case 5:
			retstr = thisname + " wants to book a 12 night holiday in the Lake District."
			retstr += "<br><br>" + thisname + " sees this offer:"
			retstr += "<br><br>4 nights for the price of 3 at Lakeside Hotel in Grasmere."
			var pernight = 100 + (10*getRndInteger(1,4));
			retstr += "<br><br>Room cost: £" + pernight + " per night";
			var deposit = 5 + (5*getRndInteger(1,3));
			retstr += "<br><br>" + thisname + " pays a " + deposit + "% deposit when booking the room and will pay the rest on arrival";
			var ans = 9*pernight*(1-deposit/100);
			retstr += "<br><br>How much will " + thisname + " need to pay on arrival taking into account the special offer?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+15).toFixed(2) + ",£" + Number(ans-15).toFixed(2) + ",£" + Number(ans+25).toFixed(2);
			break;
	}
	
	return retstr;
}

function getAddMoney20026() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " works at a local sports centre."
	
	retstr += "<br><br>The manager of the centre uses this formula to work out " + thisname + "'s pay:"
	
	var mult = 8 + (getRndInteger(3,12)*0.1)
	var cc = 12 + (0.1*getRndInteger(2,12));
	
	retstr += "<br><br>Pay (£) = " + mult.toFixed(1) + "h + " + cc.toFixed(1) + "t";
	
	retstr += "<br><br>h = number of contract hours";
	retstr += "<br>t = number of hours overtime worked";
	
	var hrswk = getRndInteger(90, 140);
	var ovrwk = getRndInteger(20, 35);
	retstr += "<br><br>" + thisname + " worked at the centre for " + hrswk + " contract hours and " + ovrwk + " overtime hours in July";
	
	var ans = (hrswk*mult) + (ovrwk*cc);
	
	retstr += "<br><br>How much will " + thisname + " be paid in July?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+25).toFixed(2) + ",£" + Number(ans-30).toFixed(2) + ",£" + Number(ans+45).toFixed(2);

	return retstr;
}

function getAddMoney20025() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is going to make vegetarian sausages for a party."
	
	retstr += "<br><br>These are the instructions for the sausage mix:"
	
	var smix = 160 + getRndInteger(1,5)*5;
	retstr += "<br><br>"+ smix + "g of sausage mix makes 10 sausages";
	
	var watml = 34 + getRndInteger(1,5)*2;
	var sausg = 20 + getRndInteger(1,4)*5;
	retstr += "<br><br>Add " + watml + " ml of water to each " + sausg + "g of sausage mix";
	
	var numsaus = getRndInteger(25,35);
	retstr += "<br><br>" + thisname + " needs to make " + numsaus + " sausages";
	
	var ans = smix/10*numsaus;
	
	ans = ans/sausg * watml;
	
	retstr += "<br><br>How much water will " + thisname + " need to use for " + numsaus + " sausages?," + Number(ans).toFixed(2) + "ml," + Number(ans+10).toFixed(2) + "ml," + Number(ans+15).toFixed(2) + "ml," + Number(ans-10).toFixed(2) + "ml";

	return retstr;
}

function getAddMoney20024() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is organising a charity BBQ and needs to buy burgers."
	
	retstr += "<br><br>" + thisname + " wants to make the BBQ as healthy as possible and writes down this information about the fat content of two types of burger:"
	
	var econfat = getRndInteger(18,28);
	retstr += "<br><br>Economy burgers have " + econfat + "g of fat per 100g";
	
	var luxfat = getRndInteger(8,10);
	retstr += "<br><br>Luxury burgers have " + luxfat + "g of fat in one 80g burger";
	
	var luxtotfat = (luxfat/80)*100;
	
	var ans = econfat - luxtotfat;
	
	retstr += "<br><br>How much higher is the percentage fat content of the economy burgers?," + Number(ans).toFixed(2) + "%," + Number(ans+2).toFixed(2) + "%," + Number(ans+3).toFixed(2) + "%," + Number(ans-1).toFixed(2) + "%";

	return retstr;
}

function getAddMoney20023() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is sprints with the aid of blades."
	
	retstr += "<br><br>" + thisname + " needs to know the maximum height that is allowed when wearing blades."
	
	retstr += "<br><br>" + thisname + " is given this formula:"
	
	var mult = 1 + (getRndInteger(2,8)*0.1)
	var cc = 50 + (0.3*getRndInteger(1,30));
	
	retstr += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; h = " + mult.toFixed(1) + "d + " + cc.toFixed(1);
	
	retstr += "<br><br>h = maximum height allowed";
	retstr += "<br>d = distance from chest to fingertip (cm)";
	
	var fingertip = getRndInteger(76,98);
	retstr += "<br><br>The distance from the centre of " + thisname + "'s chest to fingertip is " + (fingertip/100).toFixed(2) + " m";
	
	var ans = (mult*fingertip)+cc;
	
	retstr += "<br><br>What is the maximum height " + thisname + " can be to compete?," + Number(ans).toFixed(2) + " cm," + Number(ans+3).toFixed(2) + " cm," + Number(ans-3).toFixed(2) + " cm," + Number(ans+5).toFixed(2) + " cm";

	return retstr;
}

function getAddMoney20022() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " plays basketball in a local league and wants to win a special award for points scored."
	
	var ptsarr = [];
	
	var totpts = 0;
	for (rrr=0; rrr < 5; rrr++) {
		var currpts = getRndInteger(5,15);
		totpts += currpts;
		ptsarr.push(currpts);
	}
	
	var currmean = totpts/5;
	
	var targetmean = currmean + (0.2 * getRndInteger(2,5));
	
	var ans = (targetmean*6) - totpts;
	
	retstr += "<br><br>- The top scorer in the league has a mean average per game of " + targetmean.toFixed(2) + " after 5 games.";
	
	retstr += "<br><br>- " + thisname + "'s scores for the five games are: " + ptsarr[0] + "&#44; " + ptsarr[1] + "&#44; " + ptsarr[2] + "&#44; " + ptsarr[3] + "&#44; " + ptsarr[4];
	
	retstr += "<br><br>- How many points will " + thisname + " need to score in game six to at least match the top scorer's current average?," + Math.round(Number(ans)) + "," + Math.round(Number(ans-1)) + "," + Math.round(Number(ans+1)) + "," + Math.round(Number(ans+2));
	
	return retstr;
}

function getAddMoney20021() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " manages a band that are booked to play in a concert."
	
	var frac = getRndInteger(4,8);
	if ( frac == 7 ) {
		frac = 5;
	}
	
	var peeps = getRndInteger(3,6);
	
	var payment = peeps*frac*getRndInteger(25,40);
	
	retstr += "<br><br>- The band will be paid £" + payment + " for playing in the concert";
	retstr += "<br><br>- " + thisname + " plans to save <span style=\"font-size:26px;\">&frac1" + frac +";</span> of the fee for new equipment";
	retstr += "<br><br>- The rest of the money is divided equally among the " + peeps + " people in the band";
	
	var ans = (payment*(1-1/frac))/peeps;
	
	retstr += "<br><br>How much will each band member get paid?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+5).toFixed(2) + ",£" + Number(ans-5).toFixed(2) + ",£" + Number(ans+8).toFixed(2);
	
	return retstr;
}

function getAddMoney20020() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " wants to buy 2 new speakiers and two speaker stands for the band."
	
	var speakers = getRndInteger(100,200);
	var stands = getRndInteger(20,30);
	var perc = getRndInteger(15,30);
	
	retstr += "<br><br>- Speakers cost £" + speakers + " each."
	retstr += "<br><br>- Stands cost £" + stands + " each."
	
	var offerprice = ((speakers*2) + (stands*2))*(1-perc/100);
	
	retstr += "<br><br>- " + thisname + " sees this offer:";
	retstr += "<br><br>2 Speakers and 2 Stands for £" + offerprice.toFixed(2);
	
	retstr += "<br><br>By what percentage as the full price been reduced?," + Number(perc) + "%," + Number(perc+2) + "%," + Number(perc+3) + "%," + Number(perc-2) + "%";
	
	return retstr;
}

function getAddMoney20019() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is going to plant some runner bean seeds."
	
	var numrows = getRndInteger(3,6);
	retstr += "<br><br>- The seeds will be planted in " + numrows + " rows."
	
	var rowlen = 1.5 + (0.25*getRndInteger(1,4));
	
	retstr += "<br>- Each row will be " + rowlen + " m long";
	
	var seeddist = 18 + (2*getRndInteger(1,8));
	
	retstr += "<br>- There has to be a distance of " + seeddist + " cm between seeds in each row.";
	
	var produce = 0.75 + (0.05*getRndInteger(1,10));
	
	retstr += "<br>- Each plant produces an average of " + produce + " kg of beans";
	retstr += "<br>- 20% of the seeds will not grow at all.";
	
	var ans = 1;
	var currdist = 0;
	for (rrr = 0; rrr < 100; rrr++) {
		currdist = currdist + (seeddist/100);
		if ( currdist > rowlen) {
			break;
		}
		ans++;
	}
	
	ans = ans*numrows;
	
	ans = ans * produce * 0.8;
	
	retstr += "<br><br>What weight of beans can " + thisname + " expect to get from the crop?," + Number(ans).toFixed(2) + " kg," + Number(ans+5).toFixed(2) + " kg," + Number(ans+8).toFixed(2) + " kg," + Number(ans-8).toFixed(2) + " kg";
	
	return retstr;
}

function getAddMoney20018() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " is planning to varnish the floor in a school hall"
	
	var length = getRndInteger(30,40);
	var width = getRndInteger(15,25);
	var varnishcost = getRndInteger(20,30);
	var coverage = 12 + getRndInteger(2,8);
	
	retstr += "<br><br> - The room is in the shape of a rectangle " + length + " m long and " + width + " m wide";
	retstr += "<br><br> - 2.5L tins of varnish cost £" + varnishcost  + " per tin";
	retstr += "<br><br> - Each L of varnish will cover " + coverage  + " m&sup2; (one coat)";
	retstr += "<br><br> - " + thisname + " decides to do 3 coats of varnish";
	
	var litresneeded = 3*((width*length)/coverage);
	
	var tinsneeded = Math.round((litresneeded/2.5)+0.49);
	
	var ans = tinsneeded * varnishcost * 0.85;
	
	retstr += "<br><br>" + thisname + " gets a 15% discount on the varnish. How much does the job cost after the discount is applied?,£" + Number(ans).toFixed(2) + ",£" + Number(ans+5).toFixed(2) + ",£" + Number(ans-5).toFixed(2) + ",£" + Number(ans+8).toFixed(2);
	
	return retstr;
}

var img_semicirclepot = "./Images/semipot.jfif";


function getAddMoney20017() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = thisname + " decides to make a feature in the garden in shape of a semi-circle like the one shown in the picture.<br><br><img style=\"margin-left:50px;\" width=\"" + 100 * imgscale + "\" src=\"" + cleanURL(img_semicirclepot) + "\">";
	
	var diam = 100 + (getRndInteger(2,8)*10);
	
	retstr += "<br> - The straight side of the feature is " + diam + " cm";
	
	var hgt = 50 + (getRndInteger(2,8)*10);
	
	retstr += "<br> - The height of the feature is " + hgt + " cm";
	
	var ccs = 10000 + (getRndInteger(1,5)*1000);
	retstr += "<br> - One large sack of soil will fill " + ccs + " cm&sup3; (cc)";
	
	var soilcost = 3 + getRndInteger(1,3);
	retstr += "<br> - One bag of soil costs £" + soilcost;
	
	var volm = 3.142 * (diam/2) * (diam/2) * hgt * 0.5;
	
	var numbags = Math.round((volm/ccs) + 0.49);
	
	var ans = numbags * soilcost;
	
	retstr += "<br><br>How much will " + thisname + " need to spend on sacks of soil to fill the feature?,£" + Number(ans).toFixed(0) + ",£" + Number(ans+5).toFixed(0) + ",£" + Number(ans-5).toFixed(0) + ",£" + Number(ans+8).toFixed(0);
	
	return retstr;
}

function getAddMoney20016() {

	var idx = getRndInteger(0, personnames.length-10);
	
	var thisname = personnames[idx];
	
	var retstr = "A friend asks " + thisname + "  to choose any whole number between 200 and 300";
	
	var ans = getRndInteger(200,300);
	
	retstr += "<br><u>" + thisname + " picks " + ans;
	
	retstr += "</u>- The friend then says:";
	
	var yrstr = ["one year", "1/2 a year", "1/4 of a year", "3/4 of a year", "25% of a year", "50% of a year", "75% of a year"];
	var yrval = [52,           26,          13,             39,               13,              26 ,               39];
	var idx = getRndInteger(0,yrstr.length-1);
	retstr +="<br><br>1 - Add the number of weeks in " + yrstr[idx];
	ans += yrval[idx];
	
	//alert(ans);
	
	var minsstr = ["one hour", "half an hour", "1/3 of an hour", "2/3 of an hour", "1/4 of an hour", "3/4 of an hour"];
	var minsval = [60,				30,				20,				40,				15,					45];
	var idx = getRndInteger(0,minsstr.length-1);
	
	retstr += "<br>2 - Minus the minutes in " + minsstr[idx];
	ans -= minsval[idx];
	
	//alert(ans);
	
	var marr = ["January", "May", "June", "April", "September", "November", "December"];
	var mval = [31,			31,		30,		30,		30,				30,			31];
	var idx = getRndInteger(0,marr.length-1);
	
	retstr += "<br>3 - Add twice the number of days in " + marr[idx];
	ans += (mval[idx]*2);
	
	//alert(ans);
	
	var sqside = getRndInteger(2,9);
	retstr += "<br>4 - Subtract the area of a " + sqside + " x " + sqside + " square"
	ans -= (sqside*sqside);
	
	//alert(ans);
	
	var sqside = getRndInteger(5,12);
	retstr += "<br>5 - Add the perimeter of a " + sqside + " x " + sqside + " square"
	ans += (sqside*4);
	
	//alert(ans);
	
	var secsstr = ["one minute", "1/3 of a minute", "2/3 of a minute", "1/2 a minute", "1/4 of a minute", "3/4 of a minute"];
	var secsval = [60,					20,				40,					30,				15,				45];
	var idx = getRndInteger(0,secsstr.length-1);
	
	retstr += "<br>6 - Minus 4 times the seconds in " + secsstr[idx];
	ans -= (secsval[idx]*4);
	
	//alert(ans);
	
	var diam = getRndInteger(5,19)*2;
	retstr += "<br>7 - Add the radius of a circle with diameter " + diam + " cm";
	ans += (diam/2);
	
	//alert(ans);
	
	var weeks = getRndInteger(2,6);
	retstr += "<br>8 - Minus the number of days in " + weeks + "  weeks";
	ans -= (weeks*7);
	
	//alert(ans);
	
	retstr += "<br><br>What number is " + thisname + " left with?," + Math.round(ans) + "," + Math.round(ans+10) + "," + Math.round(ans+15) + "," + Math.round(ans-15);
	
	return retstr;
}
	

var img_circlepaving = "./Images/cirpaving.jfif";

function getAddMoney20015() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " decides to make a design in the garden like the one shown in the picture.<br><br><img style=\"margin-left:15px;\" width=\"" + 85 * imgscale + "\" src=\"" + cleanURL(img_circlepaving) + "\">";
	
	retstr += "<br>" + thisname + " wants to add blocks around the outside of the circle like the picture.";
	
	var diam = 100 + (getRndInteger(1,10)*10);
	retstr += "<br><br>- The diameter of the circle kit is " + diam + " cm";
	
	var block = getRndInteger(5,7) * 2;
	retstr += "<br>- The blocks that " + thisname + " chooses for the outer ring are " + block + " cm wide and fit side by side with no gaps.";
	
	var ans = Math.round(((3.142 * diam)/block)+0.49);
	
	retstr += "<br><br>How many blocks does " + thisname + " need to buy to make the outer ring?," + ans + "," + Math.round(ans+5) + ","+ Math.round(ans-5) + ","+ Math.round(ans+10);
	
	return retstr;
}


function getAddMoney20013() {
	var altArr = [
					[2,3,5,6,7,7,9],
					[5,10,10,15,20,25,30],
					[7,11,13,13,14,14,14],
					[10,60,70,70,80,90,100],
					[4,6,6,6,8,8,11,14,15],
					[1,2,2,9,11,16,22],
					[2,5,5,6,12,17,17,17,20],
					[20,31,44,49,49,53,65],
					[7,21,43,43,55,60,71],
				];
	
	var modeArr = [ 7,
					10,
					14,
					70,
					6,
					2,
					17,
					49,
					43,
					];
			
	var idx = getRndInteger(0,altArr.length - 1);
				
	var thisarr = altArr[idx];
	
	var origarr = [];
	for (rrr = 0; rrr < thisarr.length; rrr++){
		origarr.push(thisarr[rrr]);
	}
	
	randomiseArray(thisarr);
	
	var retstr = "Given the list of numbers below:"
	
	var arrstr = " " + thisarr;
	
	retstr += "<br><br>" + arrstr.replaceAll(",", "&#44; ");
	
	retstr += "<br><br>If A = Mean + Range + Mode + Median"
	
	var thismedian = origarr[(origarr.length-1)/2];
	var thismode = modeArr[idx];
	var thisrange = origarr[thisarr.length-1] - origarr[0];
	
	var thisum = 0;
	for (rrr = 0; rrr < origarr.length; rrr++){
		thisum += origarr[rrr];
	}
	
	var thismean = thisum / origarr.length;
	
	var ans = thismean + thismode + thismedian + thisrange;
	
	retstr += "<br><br>What is the value A to the nearest whole number?," + Math.round(ans) + "," + Math.round(ans*1.2) + "," + Math.round(ans*0.8) + "," + Math.round(ans*1.35);
	
	document.getElementById("helptext").innerHTML = 'Remember to sort the numbers before working out the median!<br><br>This rhyme might help you remember:<br><br><img style=\"margin-left:-15px;\" width=\"350\" src="' + cleanURL(img_heydiddle) + '\">';
	
	
	return retstr;
}

function getAddMoney20011() {
	var ratiovalA = [2,3,4,3,2,5,3,5,4,5];
	var ratiovalB = [3,2,3,4,5,2,5,3,5,4];
	var ridx = getRndInteger(1, ratiovalA.length)-1;
	
	var ratparts = ratiovalA[ridx] + ratiovalB[ridx];
	
	var ratioamount = getRndInteger(20,50) * ratiovalA[ridx] * ratiovalB[ridx];
	
	var ans = 0;
	if ( ratiovalA[ridx] > ratiovalB[ridx] ) {
		ans = ratioamount/ratparts*ratiovalA[ridx];
	}
	else {
		ans = ratioamount/ratparts*ratiovalB[ridx];
	}
	
	var retstr = "£" + ratioamount.toFixed(0) + " is shared into two amounts of money that are in the ratio " + ratiovalA[ridx] + ":" + ratiovalB[ridx];
	
	retstr += "<br><br>How much is the larger of the two amounts?,£" + Number(ans).toFixed(0) + ",£" + Number(ans+5).toFixed(0) + ",£" + Number(ans-5).toFixed(0) + ",£" + Number(ans+8).toFixed(0);
	
	return retstr;
}

function getAddMoney20010() {

	var retstr = "When a ball is dropped it bounces back to a height that is 60% of the height it dropped from previously.<br><br><img style=\"margin-left:15px;margin-top:0px;margin-bottom:5px;\" width=\"" + 100 * imgscale + "\" src=\"" + cleanURL(img_bouncing) + "\">";
	
	var drophgt = getRndInteger(300,400);
	var ans = drophgt*0.6*0.6*0.6*0.6*0.6;
	
	retstr += "<br><br>A ball is dropped from " + Number(drophgt).toFixed(0) + " cm";

	retstr += "<br><br>How far will the ball rise to after its fifth bounce (to the nearest whole cm)?," + Number(ans).toFixed(0) + " cm," + Number(ans*1.1).toFixed(0) + " cm," + Number(ans*0.9).toFixed(0) + " cm," + Number(ans*1.14).toFixed(0) + " cm";
	
	return retstr;
	
}

function getAddMoney20008() {
	var retstr = "Twenty different teams play in a competition.<br><br>Teams are awarded 3 points for a win; 1 point for a draw and 0 points for a defeat.";
	
	var teamAWins = getRndInteger(3,8);
	var teamADraws = getRndInteger(3,8);
	var teamBWins = getRndInteger(3,8);
	var teamBDraws = getRndInteger(3,8);
	var teamCWins = getRndInteger(3,8);
	var teamCDraws = getRndInteger(3,8);
	
	retstr += "<br><br>Three teams in the competition recorded the following results:"
	
	retstr += "<br><br>Team A : " + teamAWins.toFixed(0) + " wins and " + teamADraws.toFixed(0) + " draws";
	retstr += "<br>Team B : " + teamBWins.toFixed(0) + " wins and " + teamBDraws.toFixed(0) + " draws";
	retstr += "<br>Team C : " + teamCWins.toFixed(0) + " wins and " + teamCDraws.toFixed(0) + " draws";
	
	var Atotal = teamAWins*3 + teamADraws;
	var Btotal = teamBWins*3 + teamBDraws;
	var Ctotal = teamCWins*3 + teamCDraws;
	
	ww = getRndInteger(2,4);
	//ww = 4;
	switch (ww) {
		case 1:
			retstr += "<br><br>How many points did Team A get?," + Number(Atotal).toFixed(0) + "," + Number(teamAWins+teamADraws).toFixed(0) + "," + Number(Atotal+1).toFixed(0) + "," + Number(Atotal-1).toFixed(0);
			break;
		case 2:
			if ( Atotal > Btotal ) {
				var ans = Atotal-Btotal;
				retstr += "<br><br>How many more points did Team A get than Team B?," + Number(ans).toFixed(0) + "," + Number(ans+2).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans+3).toFixed(0);
			}
			else if ( Btotal > Atotal ) {
				var ans = Btotal-Atotal;
				retstr += "<br><br>How many more points did Team B get than Team A?," + Number(ans).toFixed(0) + "," + Number(ans+2).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans+3).toFixed(0);
			}
			else {
				retstr += "<br><br>How many points did Team C get?," + Number(Ctotal).toFixed(0) + "," + Number(teamCWins+teamCDraws).toFixed(0) + "," + Number(Ctotal+1).toFixed(0) + "," + Number(Ctotal-1).toFixed(0);
			}
			break;
		case 3:
			var ans = Atotal+Btotal+Ctotal;;
			
			retstr += "<br><br>How many points did all three teams win in total?," + Number(ans).toFixed(0) + "," + Number(ans+3).toFixed(0) + "," + Number(ans-3).toFixed(0) + "," + Number(ans+4).toFixed(0);
			
			break;
		case 4:
			var ans = (Atotal+Btotal+Ctotal)/3;
			
			retstr += "<br><br>What was the mean average total score for the three teams?," + Number(ans).toFixed(2) + "," + Number(ans+3).toFixed(2) + "," + Number(ans-3).toFixed(2) + "," + Number(ans+4).toFixed(2);
			
			break;
	}
	
	return retstr;
}

function getAddMoney20007() {
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	retstr = thisname + " decides to do a survey of the colours of cars passing the house for a short period of time.";
	
	var mult = getRndInteger(1,2);
	
	var redval = getRndInteger(1,10);
	var silverval = getRndInteger(1,10);
	var blackval = 30 - redval - silverval;
	
	retstr += "<br><br>Red : " + (redval*mult).toFixed(0) + " car(s)";
	retstr += "<br>Silver : " + (silverval*mult).toFixed(0) + " car(s)";
	retstr += "<br>Black : " + (blackval*mult).toFixed(0) + " car(s)";
	
	retstr += "<br><br>"  + thisname + " decides to draw a pie chart.";
	
	var ww = getRndInteger(1,2);
	//ww = 1;
	
	switch (ww) {
		case 1:
			var ans = ((blackval*mult)/(30*mult)) * 360;
			retstr += "<br><br>What angle in degrees would "  + thisname + " use to draw the segment for black cars?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
			break;
		case 2:
			var ans = ((redval*mult)/(30*mult)) * 360;
			retstr += "<br><br>What angle in degrees would "  + thisname + " use to draw the segment for red cars?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
			break;
		case 3:
			var ans = ((silverval*mult)/(30*mult)) * 360;
			retstr += "<br><br>What angle in degrees would "  + thisname + " use to draw the segment for silver cars?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'Pie charts will use fractions of 360 degrees to give a visual  indication of how big a share of the whole different items have.\
														<br><br>If an item is one half of the whole then it will have one half of 360 degrees = 180\
														<br><br>working with pie charts involves undertanding fractions and calculating the fraction as a proportion of 360\
														<br><br>If pie charts confuse you - message your tutor next time you are in class fror some help\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney20006() {
	
	var retstr = "Examine the train time table below.<br><br><img style=\"margin-left:15px;margin-top:0px;margin-bottom:5px;\" width=\"" + 260 * imgscale + "\" src=\"" + cleanURL(img_bustimetable) + "\">";
	
	var ww = getRndInteger(1,10);
	//ww = 1;
	
	switch (ww) {
		case 1:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br>" + thisname + " lives in Droitwich and works in Catshill.";
			retstr += "<br><br>It takes " + thisname + " 45 minutes to walk to work from the station.";
			retstr += "<br><br>Which train should " + thisname + " catch to arrive at work just before 9:00am ?, 07:29, 07:16, 08:14,05:48";
			break;
		case 2:
			retstr += "<br><br>Which train should a person take from Worcester to get to Sidemoor?, 07:50, 07:05, 08:07,10:13";
			break;
		case 3:
			retstr += "<br><br>Which train is the quickest from Worcester to Rubery?, 10:13, 05:30, 07:05,07:50";
			break;
		case 4:
			retstr += "<br><br>Which train is the slowest from Worcester to Rubery?, 07:50, 05:30, 07:05,10:13";
			break;
		case 5:
			retstr += "<br><br>How long does the latest train from Wychbold take to get to Rubery?, 37 mins, 27 mins,47 mins, 36 mins";
			break;
		case 6:
			retstr += "<br><br>How long does the 07:16 from Fernhill take to get to Marlbrook?, 49 mins, 39 mins, 59 mins, 29 mins";
			break;
		case 7:
			retstr += "<br><br>How long does the 05:48 from Droitwich take to get to Catshill?, 23 mins, 33 mins, 24 mins, 22 mins";
			break;
		case 8:
			retstr += "<br><br>If you miss the 07:29 Droitwich train how long to the next train from Droitwich?, 45 mins, 44 mins, 35 mins, 55 mins";
			break;
		case 9:
			retstr += "<br><br>What is the mean average journey time for trains from Worcester to Rubery to the nearest minute?, 60 mins, 59 mins, 57 mins, 61 mins";
			break;
		case 10:
			retstr += "<br><br>What is the range of the different journey times for trains from Worcester to Rubery?, 23 mins, 25 mins, 31 mins, 20 mins";
			break;
	}
	
	return retstr;
}

function getAddMoney20005() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is making orange drink for a garden birthday party.";
	
	var waterparts = getRndInteger(3,6);
	
	retstr += "<br><br>The instructions say to mix 1 part orange squash with " + waterparts + " parts water";
	
	var totparts = 1 + waterparts;
	
	var qscale = getRndInteger(15,25)*50;
	var jquant = totparts * qscale;
	
	var ans = jquant/totparts * waterparts;
	
	retstr += "<br><br>" + thisname + " makes up " + jquant + "ml of orange drink.";
	
	retstr += "<br><br>How much water did " + thisname + " use to the nearest ml?," + Number(ans).toFixed(0) + " ml," + Number(ans+100).toFixed(0) + " ml,"+ Number(ans+25).toFixed(0) + " ml,"+ Number(ans-50).toFixed(0) + " ml";
	
	return retstr;
}

function getAddMoney20004() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is planning to lay carpet tiles in an office room.";
	
	retstr += "The room is L-Shaped and the measurements that " + thisname + " was able to measure are shown below:<br><br>";
	
	retstr += lshaperoom;
	
	var tiledims = getRndInteger(3,7) * 10;
	
	
	retstr += "<br>Tiles measure " + tiledims + " cm x " + tiledims + " cm";
	
	var tilearea = (tiledims/100) * (tiledims/100);
	
	var topval = getRndInteger(4,8);
	var side1val = getRndInteger(12,18);
	var baseval = getRndInteger(11,18);
	var side2val = getRndInteger(4,9);
	
	retstr = retstr.replace("%top%", topval + " m");
	retstr = retstr.replace("%side1%", side1val + " m");
	retstr = retstr.replace("%base%", baseval + " m");
	retstr = retstr.replace("%side2%", side2val + " m");
	
	var mainroomarea = baseval * side1val;
	
	var smallarea = (baseval-topval)*(side1val-side2val);
	
	var totalarea = mainroomarea - smallarea;
	
	var ans = ((totalarea/tilearea)+0.49).toFixed(0);
	
	//var smallarea = 
	
	retstr += "<br><br>How many carpet tiles will " + thisname + " need?," + ans + "," + Number(Number(ans)+10).toFixed(0) + "," + Number(Number(ans)-10).toFixed(0) + "," + Number(Number(ans)+15).toFixed(0);
	
	return retstr;
}

var img_unionflags = "./Images/uflags.jfif";

var img_cylinder = "./Images/cylinder.png";

function getAddMoney200031() {
	var retstr = "A container is in the shape of a cylinder as shown.<br><br><img style=\"margin-left:15px;\" width=\"" + 120 * imgscale + "\" src=\"" + cleanURL(img_cylinder) + "\">";
	
	var cylrad = getRndInteger(10,25);
	var cylheight = getRndInteger(15,30);
	
	var oilcost = getRndInteger(5,10) * 0.025;
	
	retstr += "<br>The radius of the base: r = " + cylrad + " cm.";
	retstr += "<br>The height of the cylinder: h = " + cylheight + " cm";
	
	retstr += "<br>Oil costs = " + oilcost.toFixed(3) + "p per cubic centimeter";
	
	var ans = 3.142 * cylrad * cylrad * cylheight * oilcost/100;
	
	retstr += "<br><br>How much will it cost to fill the container with oil to the nearest pound?,£" + Number(ans).toFixed(0) + ",£" + Number(ans*1.1).toFixed(0) + ",£" + Number(ans*0.9).toFixed(0) + ",£" + Number(ans*1.16).toFixed(0);
	
	return retstr;
}

function getAddMoney20003() {
	
	var retstr = "The table shows annual sales for 2019 split into quarters of the year.<br><br><img style=\"margin-left:15px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_salesquarters) + "\">";
	
	var ww = getRndInteger(2,7);
	//ww = 7;
	
	switch (ww) {
		case 1:
			retstr += "<br><br>What is the range of the sales for 2019?,$500000,$630000,$600000,£450000";
			break;
		case 2:
			retstr += "<br><br>What is the mean average of the sales for 2019?,$630000,$550000,$500000,£660000";
			break;
		case 3:
			retstr += "<br><br>What is the amount of the total sales for the first half of 2019?,$950000,$720000,$350000,£600000";
			break;
		case 4:
			var q1incr = getRndInteger(1,3)*10;
			var mult = 1 + q1incr/100;
			
			var ans = Number(350000 * mult);
			
			retstr += "<br><br>In 2020 Quarter 1 sales were increased by " + q1incr + "%.<br>What were the Q1 sales in 2020?,$" + Number(ans).toFixed(0) + ",$"+ Number(ans*0.9).toFixed(0) + ",$"+ Number(ans*0.95).toFixed(0) + ",$"+ Number(ans*1.1).toFixed(0);
	
			break;
		case 5:
			retstr += "<br><br>By how much did sales go up in the second half of 2019 compared to the first half of the year?,$620000,$500000,$120000,£630000";
			break;
		case 6:
			var q1incr = getRndInteger(1,3)*10;
			var mult = 1 + q1incr/100;
			
			var ans = Number(630000 * mult);
			
			retstr += "<br><br>In 2020 the annual mean average sales rose by " + q1incr + "%<br><br>How much were the mean average sales in 2020?,$" + Number(ans).toFixed(0) + ",$"+ Number(ans*0.9).toFixed(0) + ",$"+ Number(ans*0.95).toFixed(0) + ",$"+ Number(ans*1.1).toFixed(0);
	
			break;
		case 7:
			var q1incr = getRndInteger(1,3)*10;
			var mult = 1 - q1incr/100;
			
			var ans = Number(630000 * mult);
			
			retstr += "<br><br>In 2020 the annual mean average sales dropped by " + q1incr + "%<br><br>How much were the mean average sales in 2020?,$" + Number(ans).toFixed(0) + ",$"+ Number(ans*0.9).toFixed(0) + ",$"+ Number(ans*0.95).toFixed(0) + ",$"+ Number(ans*1.1).toFixed(0);
	
			break;
	}
	
	//document.getElementById("helptext").innerHTML = 'Stage 1: Use the scale provided.\
														//<br><br>Use a multiply to convert CM to KM.\
															//<br><br>Check if your answer matches one of the answer buttons.\
															//<br><br>If not, check your calculations again\
															//<br><br>Always use paper to jot your working out down as you go.\
													//';
	
	return retstr;
}

function getAddMoney20002() {
	
	var retstr = "The table shows MILES between various UK cities.<br><br><img style=\"margin-left:50px;\" width=\"" + 160 * imgscale + "\" src=\"" + cleanURL(img_distances) + "\">";
	
	var ww = getRndInteger(3,6);
	//ww = 6;
	
	switch (ww) {
		case 1:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Derby to Hull and then from Hull to Sheffield.";
	
			retstr += " How many miles did " + thisname + " travel in total?,149,90,91,125";
	
			break;
		case 2:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " travels from Derby to Nottingham and back each day for work (except Sat and Sun).";
	
			retstr += " How many miles does " + thisname + " travel in a week?,160,80,150,224";
	
			break;
		case 3:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Hull to Leicester and then from Leicester to Sheffield before returning back to Hull.";
	
			retstr += " How many miles did " + thisname + " travel in total?,210,149,91,160";
	
			break;
		case 4:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Lincoln to Doncaster.";
			var costpm = getRndInteger(24,40);
			var ans = (costpm/100) * 39;
			retstr += " " + thisname + "'s car costs " + costpm + "p per mile to run. How much did the journey cost?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
			break;
		case 5:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " went from Hull to Nottingham and back again.";
			var costpm = getRndInteger(24,40);
			var ans = (costpm/100) * 146;
			retstr += " " + thisname + "'s car costs " + costpm + "p per mile to run. How much did the journey cost?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
			break;
		case 6:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br>" + thisname + " travels from Derby to Nottingham and back each day for work (except Sat and Sun).";
			var costpm = getRndInteger(24,40);
			var ans = (costpm/100) * 160;
			retstr += "Using the car costs " + costpm + "p per mile. How much does " + thisname + " spend travelling to work each week?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
			break;
	}
	
	//document.getElementById("helptext").innerHTML = 'Stage 1: Use the scale provided.\
														//<br><br>Use a multiply to convert CM to KM.\
															//<br><br>Check if your answer matches one of the answer buttons.\
															//<br><br>If not, check your calculations again\
															//<br><br>Always use paper to jot your working out down as you go.\
													//';
	document.getElementById("helptext").innerHTML = 'To find a distance trace a line down from one town and across from another.\
														<br><br>The distance will be where the two lines cross.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
													
	return retstr;
}

function getAddMoney20001() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " cycled from Town A to Town B.";
	
	var distval = getRndInteger(4,10);
	retstr += "<br><br>On a map Town A is " + distval + " cm from Town B";
	
	var scaleval = getRndInteger(4,10)*0.25;
	retstr += "<br><br>The map scale is 1cm = " + scaleval.toFixed(2) + " km";
	
	var distcycled = distval * scaleval;
	
	retstr += "<br><br>" +  thisname + " cycled at an average speed of 20 km per hour";
	
	var ans = (distcycled/20)*60;
	
	retstr += "<br><br>How many minutes did " + thisname + " take to cycle from Town A to Town B?," + Number(ans).toFixed(0) + "," + Number((ans+5)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+8)).toFixed(0);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Use the scale provided.\
														<br><br>Use a multiply to convert the map CM diatance to the real distance in KM.\
														<br><br>At 20 km/h you would travel 20 km every 60 minutes.<br><br>You need to use what you know about proportion to work out how many minutes it would take in this question.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney3002() {
	
	var retstr = "Use the barchart to answer the question below.<br><br><img style=\"margin-left:20px;\" width=\"" + 170 * imgscale + "\" src=\"" + cleanURL(img_barchartVehicles) + "\">";
	
	var ww = getRndInteger(1,3);
	//ww = 1;
	switch (ww) {
		case 1:
			retstr += "<br>What fraction of the total vehicles is represented by BUS?,<span style=\"font-size:26px;\">&frac14;</span>,<span style=\"font-size:26px;\">&frac13;</span>,<span style=\"font-size:26px;\">&frac15;</span>,<span style=\"font-size:26px;\">&frac23;</span>";
			break;
		case 2:
			retstr += "<br>What is the probability that people in the survey use either CAR or BIKE?,Even Chance, Likely, Unlikely,Certain";
			break;
		case 3:
			retstr += "<br>What percentage of the people in the survey use either LORRY or MOTORBIKE?,25%, 20%, 50%, 40%";
			break;
	}
	return retstr;
}

function getAddMoney3001() {
	
	var retstr = "Use the barchart to answer the question below.<br><br><img style=\"margin-left:0px;\" width=\"" + 240 * imgscale + "\" src=\"" + cleanURL(img_barchartWeights) + "\">";
	
	var ww = getRndInteger(1,4);
	//ww = 2;
	switch (ww) {
		case 1:
			var ans = 280;
			retstr += "<br>What is the total weight of Ryan; Fred; Sam and Marty?," + Number(ans).toFixed(0) + " kg," + Number((ans-15)).toFixed(0) + " kg," + Number((ans-30)).toFixed(0) + " kg," + Number((ans+20)).toFixed(0) + " kg";
			break;
		case 2:
			var ans = 12;
			retstr += "<br>How much heavier is Ryan than Sam?," + Number(ans).toFixed(0) + " kg," + Number((ans-3)).toFixed(0) + " kg," + Number((ans-4)).toFixed(0) + " kg," + Number((ans+3)).toFixed(0) + " kg";
			break;
		case 3:
			var ans = (70+75+58+78)/4;
			retstr += "<br>What is the mean average weight?," + Number(ans).toFixed(0) + " kg," + Number((ans-5)).toFixed(0) + " kg," + Number((ans+5)).toFixed(0) + "kg," + Number((ans+8)).toFixed(0) + " kg";
			break;
		case 4:
			var ans = 25;
			retstr += "<br>What percentage of the total weight of all four people does Ryan weigh?,25%, 20%, 30%, 35%";
			break;
	}
	return retstr;
}

function getAddMoney30011() {
	
	var retstr = "Use the barchart to answer the question below.<br><br><img style=\"margin-left:0px;\" width=\"" + 240 * imgscale + "\" src=\"" + cleanURL(img_barchartWeights) + "\">";
	
	var ww = getRndInteger(1,3);
	//ww = 2;
	switch (ww) {
		case 1:
			var ans = 280;
			retstr += "<br>What is the total weight of Ryan; Fred; Sam and Marty?," + Number(ans).toFixed(0) + " kg," + Number((ans-15)).toFixed(0) + " kg," + Number((ans-30)).toFixed(0) + " kg," + Number((ans+20)).toFixed(0) + " kg";
			break;
		case 2:
			var ans = 12;
			retstr += "<br>How much heavier is Ryan than Sam?," + Number(ans).toFixed(0) + " kg," + Number((ans-3)).toFixed(0) + " kg," + Number((ans-4)).toFixed(0) + " kg," + Number((ans+3)).toFixed(0) + " kg";
			break;
		case 3:
			var ans = (70+75+58+78)/4;
			retstr += "<br>What is the mean average weight?," + Number(ans).toFixed(0) + " kg," + Number((ans-5)).toFixed(0) + " kg," + Number((ans+5)).toFixed(0) + "kg," + Number((ans+8)).toFixed(0) + " kg";
			break;
	}
	return retstr;
}

function getAddMoney3000() {
	
	var retstr = "The pie chart below shows the results of a survey on favourite pizza toppings.<br><br><img style=\"margin-left:50px;\" width=\"" + 210 * imgscale + "\" src=\"" + cleanURL(img_piechartpizza) + "\">";
	
	var ww = getRndInteger(1,5);
	//ww = 2;
	switch (ww) {
		case 1:
			var varcheese = getRndInteger(5,10)*10;
			var ans = varcheese*2;
			retstr += "<br><br>If " + varcheese + " people chose cheese how many people chose pepperoni?," + Number(ans).toFixed(0) + "," + Number((ans-10)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+10)).toFixed(0);
			break;
		case 2:
			var varcheese = getRndInteger(5,10)*10;
			var ans = varcheese*4;
			retstr += "<br><br>If " + varcheese + " people chose cheese how many people were in the survey in total?," + Number(ans).toFixed(0) + "," + Number((ans-10)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+10)).toFixed(0);
			break;
		case 3:
			var varcheese = getRndInteger(5,10)*40;
			var ans = varcheese/4;
			retstr += "<br><br>If " + varcheese + " people were in the survey in total how many people chose cheese?," + Number(ans).toFixed(0) + "," + Number((ans-10)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+10)).toFixed(0);
			break;
		case 4:
			var varcheese = getRndInteger(5,10)*40;
			var ans = varcheese/10;
			retstr += "<br><br>If " + varcheese + " people were in the survey in total how many people chose supreme?," + Number(ans).toFixed(0) + "," + Number((ans-10)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+10)).toFixed(0);
			break;
		case 5:
			var varcheese = getRndInteger(3,6)*10;
			var ans = varcheese*10;
			retstr += "<br><br>If " + varcheese + " people chose supreme how many people were in the survey in total?," + Number(ans).toFixed(0) + "," + Number((ans-10)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+10)).toFixed(0);
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'Pie charts will use fractions of 360 degrees to give a visual  indication of how big a share of the whole different items have.\
														<br><br>If an item is one half of the whole then it will have one half of 360 degrees = 180\
														<br><br>In this case Pepperoni.\
														<br><br>working with pie charts involves undertanding fractions and calculating the fraction as a proportion of 360\
														<br><br>If pie charts confuse you - message your tutor next time you are in class fror some help\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney30001() {
	
	var retstr = "The pie chart below shows the results of a survey on favourite pizza toppings.<br><br><img style=\"margin-left:50px;\" width=\"" + 210 * imgscale + "\" src=\"" + cleanURL(img_piechartpizza) + "\">";
	
	var ww = getRndInteger(1,2);
	//ww = 2;
	switch (ww) {
		case 1:
			var varcheese = getRndInteger(5,10)*10;
			var ans = varcheese*4;
			retstr += "<br><br>If " + varcheese + " people chose cheese how many people were in the survey in total?," + Number(ans).toFixed(0) + "," + Number((ans-10)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+10)).toFixed(0);
			break;
		case 2:
			var varcheese = getRndInteger(5,10)*40;
			var ans = varcheese/4;
			retstr += "<br><br>If " + varcheese + " people were in the survey in total how many people chose cheese?," + Number(ans).toFixed(0) + "," + Number((ans-10)).toFixed(0) + "," + Number((ans-5)).toFixed(0) + "," + Number((ans+10)).toFixed(0);
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'Pie charts will use fractions of 360 degrees to give a visual  indication of how big a share of the whole different items have.\
														<br><br>If an item is one half of the whole then it will have one half of 360 degrees = 180\
														<br><br>In this case Pepperoni.\
														<br><br>working with pie charts involves undertanding fractions and calculating the fraction as a proportion of 360\
														<br><br>If pie charts confuse you - message your tutor next time you are in class fror some help\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
													
	return retstr;
}

var img_parallelogram = "./Images/pgram.png";

var img_parallellines = "./Images/parlines.png";

var img_trianglepara = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQabh9yQOc8t9Zgud__x97fB7eqXX4tx7BuAQ&usqp=CAU";


var img_headstails3coins = "./Images/headstails.jfif";

var img_barchartInstruments = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThB7bsn0ODamWwo2hVUfl42Rh5GiGrlqYxjA&usqp=CAU";

var img_barchartVehicles = "./Images/barveh.jfif";

var img_barchartHeights = "./Images/barhgts.png";

var img_barchartWeights= "./Images/barwgts.png";

var img_piechartpizza = "./Images/piechart1.png";

var img_piechartfoods = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCCFiszMqDjDrQguVS0P74LgZLAj3drW02g&usqp=CAU";

var img_convgraphKMmiles = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURcd8ZSX6b8p7seZlkn0-UarRLr0aQ4SKtw&usqp=CAU";

var img_tallyFruits = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURcd8ZSX6b8p7seZlkn0-UarRLr0aQ4SKtw&usqp=CAU";

var img_tallyVehicles = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-LjEIAtyokSCyFvSIQzaq_AedahQUYmqYzw&usqp=CAU";

var img_freqMarks = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4P-QAvrJ7XqO0hYdwza3y0asQI7WqMeefw&usqp=CAU";

var img_freqMarks = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ywBN2eL_YCq5fK8nNgmHR3UbKdTeLtGXdw&usqp=CAU";

var examsGCSE = [1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,
30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,73,74,75,76,
77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];

var examsGCSECount = 0;

function getAddMoneyGCSE() {
	
	examsGCSECount++;
	
	if ( examsGCSECount > examsGCSE.length-1) {
		examsGCSECount = 0;
	}
	
	getDefaultHelp();
													
	var sw = examsGCSE[examsGCSECount];
	canvasID = 0;
	
	//sw = 88;
	
	workingstr = "<br><br><i><hr>Write your working out here:</i><br><br><br><br><br><br><br><br><p><b>Answer: </b></p><br>"
	if ( qsheet ) {
		if ( getRndInteger(1,100) > 80 ) {
			workingstr = "";
			return getGCSECalcF();
		}
	}
	
    switch (sw) {
    	case 1:
        	return getAddMoney231();
            break;
        case 2:
        	return getAddMoney230();
            break;
        case 3:
        	return getAddMoney4();
            break;
        case 4:
        	//return getAddMoney4();
            break;
        case 5:
        	return getAddMoney231();
            break;
        case 6:
        	return getAddMoney6L2();
            break;
        case 7:
        	return getAddMoney7L2();
            break;
        case 8:
        	return getAddMoney12L2();
            break;
		case 9:
        	return getAddMoney13();
            break;
		case 10:
        	return getAddMoney14();
            break;
		case 11:
        	return getAddMoney15();
            break;
		case 12:
        	return getAddMoney17();
            break;
		case 13:
        	return getAddMoney18();
            break;
		case 14:
        	return getAddMoney182();
            break;
		case 15:
        	return getAddMoney23();
            break
		case 16:
			return getAddMoney24();
			break;
		case 17:
			return getAddMoney25();
			break;
		case 18:
			return getAddMoney26();
			break;
		case 19:
			return getBestBuys1();
			break;
		case 20:
			return getAddMoney22();
			break;
		case 21:
			return getAddMoney231();
			break;
		case 22:
			return getAddMoney222();
			break;
		case 23:
			return getAddMoney223();
			break;
		case 24:
			return getAddMoney224();
			break;
		case 25:
			return getAddMoney225();
			break;
		case 26:
			return getAddMoney226();
			break;
		case 27:
			return getAddMoney227();
			break;
		case 28:
			return getAddMoney228();
			break;
		
		/* GCSE */
		case 29:
			return getAddMoney233();
			break;
		case 30:
			return getAddMoney230();
			break;
		case 31:
			return getAddMoney231();
			break;
		case 32:
			return getAddMoney232();
			break;
		case 33:
			//return getAddMoney233();
			break;
		case 34:
			return getAddMoney234();
			break;
		case 35:
			return getAddMoney235();
			break;
		case 36:
			return getAddMoney236();
			break;
		case 37:
			return getAddMoney237();
			break;
		case 38:
			return getAddMoney238();
			break;
		case 39:
			return getAddMoney239();
			break;
		case 40:
			return getAddMoney240();
			break;
		case 41:
			return getAddMoney241();
			break;
		case 42:
			return getAddMoney242();
			break;
		case 43:
			return getAddMoney243();
			break;
		case 44:
			return getAddMoney244();
			break;
		case 45:
			return getAddMoney245();
			break;
		case 46:
			return getAddMoney246();
			break;
		case 47:
			return getAddMoney247();
			break;
		case 48:
			return getAddMoney248();
			break;
		case 49:
			return getAddMoney249();
			break;
		case 50:
			return getAddMoney250();
			break;
		case 51:
			//return getAddMoney233();
			break;
		case 52:
			//return getAddMoney230();
			break;
		case 53:
			//return getAddMoney231();
			break;
		case 54:
			//return getAddMoney232();
			break;
		case 55:
			//return getAddMoney233();
			break;
		case 56:
			//return getAddMoney234();
			break;
		case 57:
			//return getAddMoney235();
			break;
		case 58:
			//return getAddMoney236();
			break;
		case 59:
			//return getAddMoney237();
			break;
		case 60:
			//return getAddMoney238();
			break;
		case 61:
			//return getAddMoney239();
			break;
		case 62:
			//return getAddMoney240();
			break;
		case 63:
			//return getAddMoney241();
			break;
		case 64:
			//return getAddMoney242();
			break;
		case 65:
			//return getAddMoney243();
			break;
		case 66:
			//return getAddMoney244();
			break;
		case 67:
			//return getAddMoney245();
			break;
		case 68:
			//return getAddMoney246();
			break;
		case 69:
			//return getAddMoney247();
			break;
		case 70:
			//return getAddMoney248();
			break;
		case 71:
			//return getAddMoney249();
			break;
		case 72:
			//return getAddMoney250();
			break;
		case 73:
			return getAddMoney251();
			break;
		case 74:
			return getAddMoney252();
			break;
		case 75:
			return getAddMoney253();
			break;
		case 76:
			return getAddMoney254();
			break;
		case 77:
			return getAddMoney255();
			break;
		case 78:
			return getAddMoney200031();
			break;
		case 79:
			return getAddMoney20006();
			break;
		case 80:
			return getAddMoney20007();
			break;
		case 81:
			return getAddMoney200081();
			break;
		case 82:
			return getAddMoney200082();
			break;
		case 83:
			return getAddMoney200083();
			break;
		case 84:
			return getAddMoney200084();
			break;
		case 85:
			return getAddMoney200085();
			break;
		case 86:
			return getAddMoney200086();
			break;
		case 87:
			return getAddMoney200087();
			break;
		case 88:
			return getAddMoney200088();
			break;
		case 89:
			return getAddMoney20017();
			break;
		case 90:
			return getAddMoney20018();
			break;
		case 91:
			return getAddMoney20016();
			break;
		case 92:
			return getAddMoney20019();
			break;
		case 93:
			return getAddMoney20020();
			break;
		case 94:
			return getAddMoney20021();
			break;
		case 95:
			return getAddMoney20022();
			break;
		case 96:
			return getAddMoney20023();
			break;
		case 97:
			return getAddMoney20024();
			break;
		case 98:
			return getAddMoney20025();
			break
		case 99:
			return getAddMoney20026();
			break;
    }
}

function getGCSECalcF() {
	
	var retstr = "<br>";
	
	retstr += "<br><img style=\"margin-left:30px;\" src=\"./GCSECalcF/q" + getRndInteger(1,53) + ".jpg\">";
	
	return retstr + ",a,b,c,d";
}

/* GCSESTART */

function getAddMoney200088() {
	var altArr = [
					[2,5,6,7,8,9,11,12,12],
					[10,15,20,25,30,35,35],
					[30,40,40,50,50,60,60,60,70],
					[100,600,700,700,800,900,1000],
					[23,41,65,65,73,87,95],
					[17,21,22,37,51,51,63],
					[57,78,87,91,91,103,110],
					[2,3,5,6,7,7,9],
					[5,10,10,15,20,25,30],
					[7,11,13,13,14,14,14],
					[10,60,70,70,80,90,100],
					[4,6,6,6,8,8,11,14,15],
					[1,2,2,9,11,16,22],
					[2,5,5,6,12,17,17,17,20],
					[20,31,44,49,49,53,65],
					[7,21,43,43,55,60,71],
				];
	
	var modeArr = [ 12,
					35,
					60,
					700,
					65,
					37,
					91,
					7,
					10,
					14,
					70,
					6,
					2,
					17,
					49,
					43,
					];
			
	var idx = getRndInteger(0,altArr.length - 1);
				
	var thisarr = altArr[idx];
	
	var origarr = [];
	for (rrr = 0; rrr < thisarr.length; rrr++){
		origarr.push(thisarr[rrr]);
	}
	
	randomiseArray(thisarr);
	
	var retstr = "Given the list of numbers below:"
	
	var arrstr = " " + thisarr;
	
	retstr += "<br><br>" + arrstr.replaceAll(",", "&#44; ");
	
	retstr += "<br><br>If A = Mean + Range + Mode + Median"
	
	var thismedian = origarr[(origarr.length-1)/2];
	var thismode = modeArr[idx];
	var thisrange = origarr[thisarr.length-1] - origarr[0];
	
	var thisum = 0;
	for (rrr = 0; rrr < origarr.length; rrr++){
		thisum += origarr[rrr];
	}
	
	var thismean = thisum / origarr.length;
	
	var ans = thismean + thismode + thismedian + thisrange;
	
	retstr += "<br><br>What is the value A to the nearest whole number?," + Math.round(ans) + "," + Math.round(ans*1.2) + "," + Math.round(ans*0.8) + "," + Math.round(ans*1.35);
	
	document.getElementById("helptext").innerHTML = 'Remember to sort the numbers before working out the median!<br><br>This rhyme might help you remember:<br><br><img style=\"margin-left:-15px;\" width=\"350\" src=\"' + cleanURL(img_heydiddle) + '\">';
	
	
	return retstr;
}

var img_vennlabels = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3dvnbImpj2r-iyNHotiNYWW9korT6NOT8kw&usqp=CAU";

var img_ABCvenndiagram = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4Zjx0DNfJ4phArF7Ko-VZAGvNPU5bRSGSA&usqp=CAU";

function sigfigs(x, p) {
    return Number(Number(Number.parseFloat(Number(x)).toPrecision(p)).toFixed(2));
}

function one(x) {
	return sigfigs(x, 1);
}

function getAddMoney200087() {
	var aval = getRndInteger(10000,99000);
	var bval = getRndInteger(100, 990);
	var cval = getRndInteger(10,99);
	var dval = getRndInteger(1000,9999);
	var eval = getRndInteger(100000,990000);
	
	ww = getRndInteger(1,2);
	//ww = 2;
	switch (ww) {
		case 1:
			var ans = (one(aval)*one(bval))/(one(cval) * one(dval));
			
			retstr = "Use estimation to work out an approximate value for:";
			retstr += "<br><br>(" + aval + " x " + bval + ") &#247; (" + cval + " x " + dval + ")," + Math.round(ans) + "," + Math.round(ans*1.25) + "," + Math.round(ans*0.75) + "," + Math.round(ans*1.35);
			break;
		case 2:
			var ans = Math.sqrt((one(aval)*one(eval))/(one(cval)*one(dval)));
			
			retstr = "Use estimation to work out an approximate value for:";
			retstr += "<br><br><span style=\"font-size:26px;\"><b>&radic;</b></span>( (" + aval + " * " + eval + ") &#247; (" + cval + " * " + dval + ") )," + Math.round(ans) + "," + Math.round(ans*1.25) + "," + Math.round(ans*0.75) + "," + Math.round(ans*1.35);
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'For estiamtion questions round all the values to one significant figure\
													<br><br>Examples:\
													<br><br>36542 rounds to 400000\
													<br>129 rounds to 100\
													<br>3765 rounds to 4000\
													<br><br>In each example, the rounded result is a number with only 1 non-zzero digit.';
	
	return retstr;
}

function getAddMoney200086() {
	var ratiovalA = [2,3,4,1,2,3,3,5,2,5];
	var ratiovalB = [3,4,5,3,5,7,5,3,7,8];
	var ridx = getRndInteger(1, ratiovalA.length)-1;
	
	var ratparts = ratiovalA[ridx] + ratiovalB[ridx];
	
	var ratioamount = getRndInteger(20,50) * ratparts;
	
	var aval = ratiovalA[ridx];
	var bval = ratiovalB[ridx];
	
	var ans = 0;
	var whichstr = "first";
	if ( aval > bval ) {
		ans = (ratioamount/ratparts)*ratiovalA[ridx];
	}
	else {
		whichstr = "second";
		ans = (ratioamount/ratparts)*ratiovalB[ridx];
	}
	
	var retstr = "£" + ratioamount.toFixed(0) + " is shared into two amounts in the ratio<br><br>a : b ";

	retstr += "<br><br>If the " + whichstr + " amount is £" + ans.toFixed(0) + " what are possible values for a and b?," + aval + ":" + bval + "," + Number(aval+1) + ":" + Number(bval+1) + "," + Number(aval-1) + ":" + Number(bval+1) + "," + Number(aval+1) + ":" + Number(bval-1);
	
	return retstr;
}

function getAddMoney200085() {
	var ratiovalA = [1,3,1,2,1,1,3];
	var ratiovalB = [2,2,2,3,3,4,4];
	var ratiovalC = [3,1,4,4,5,5,5];
	
	var ridx = getRndInteger(1, ratiovalA.length)-1;
	
	var ratparts = ratiovalA[ridx] + ratiovalB[ridx] + ratiovalC[ridx];
	
	var ratioamount = getRndInteger(20,50) * ratiovalA[ridx] * ratiovalB[ridx] * ratiovalC[ridx];
	
	var ans = 0;
	if ( ratiovalA[ridx] > ratiovalB[ridx] && ratiovalA[ridx] > ratiovalC[ridx] ) {
		ans = ratioamount/ratparts*ratiovalA[ridx];
	}
	else if ( ratiovalB[ridx] > ratiovalA[ridx] && ratiovalB[ridx] > ratiovalC[ridx] ) {
		ans = ratioamount/ratparts*ratiovalB[ridx];
	}
	else if ( ratiovalC[ridx] > ratiovalA[ridx] && ratiovalC[ridx] > ratiovalB[ridx] ) {
		ans = ratioamount/ratparts*ratiovalC[ridx];
	}
	
	var retstr = "£" + ratioamount.toFixed(0) + " is shared into three amounts of money that are in the ratio " + ratiovalA[ridx] + ":" + ratiovalB[ridx] + ":" + ratiovalC[ridx];
	
	retstr += "<br><br>How much is the larger of the three amounts?,£" + Number(ans).toFixed(0) + ",£" + Number(ans+5).toFixed(0) + ",£" + Number(ans-5).toFixed(0) + ",£" + Number(ans+8).toFixed(0);
	
	return retstr;
}

function getAddMoney200084() {

	var retstr = "When a ball is dropped it bounces back to a height that is 60% of the height it dropped from previously.<br><img style=\"margin-left:15px;margin-top:0px;margin-bottom:5px;\" width=\"" + 100 * imgscale + "\" src=\"" + cleanURL(img_bouncing) + "\">";
	
	var ans = getRndInteger(300,400);
	var fifthhgt = ans*0.6*0.6*0.6*0.6*0.6;
	
	retstr += "<br><br>After its fifth bounce a ball rises to " + Number(fifthhgt).toFixed(2) + " cm";

	retstr += "<br><br>How high was the ball originally dropped from (to the nearest whole cm)?," + Number(ans).toFixed(0) + " cm," + Number(ans*1.1).toFixed(0) + " cm," + Number(ans*0.9).toFixed(0) + " cm," + Number(ans*1.14).toFixed(0) + " cm";
	
	return retstr;
}

function getAddMoney200083() {
	var aval = getRndInteger(2,15);
	
	var bval = aval + getRndInteger(1,5); 
	
	var retstr = "Find the lowest common multiple (LCM) of:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + aval + "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + bval;
	
	var ans = lcm_two_numbers(aval,bval);
	
	retstr += "," + Number(ans).toFixed(0) + "," + Number(ans+aval).toFixed(0) + "," + Number(ans+bval).toFixed(0) + "," + Number(ans+2).toFixed(0);
	
	return retstr;
}

function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function findHCF(x, y) {

   // If the input numbers are less than 1 return an error message.
   if (x < 1 || y < 1) {
      return "Please enter values greater than zero.";
   }

   // If the input numbers are not integers return an error message.
   if (x != Math.round(x) || y != Math.round(y)) {
      return "Please enter whole numbers.";
   }

   // Now apply Euclid's algorithm to the two numbers.
   while (Math.max(x, y) % Math.min(x, y) != 0) {
      if (x > y) {
         x %= y;
      }
      else {
         y %= x;
      }
   }
   
   // When the while loop finishes the minimum of x and y is the HCF.
   return Math.min(x, y);

}

function getAddMoney200082() {
	var aval = getRndInteger(2,6)*120;
	
	var bval = getRndInteger(2,6)*63;
	
	var retstr = "Find the highest common factor (HCF) of:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + aval + "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + bval;
	
	var ans = findHCF(aval,bval);
	
	retstr += "," + Number(ans).toFixed(0) + "," + Number(ans+2).toFixed(0) + "," + Number(ans+5).toFixed(0) + "," + Number(ans+8).toFixed(0);
	
	return retstr;
}

function getAddMoney200081() {
	var retstr = "Twenty different teams play in a competition.<br><br>Teams are awarded 3 points for a win; 1 point for a draw and 0 points for a defeat.";
	
	var teamAWins = getRndInteger(3,8);
	var teamADraws = getRndInteger(3,8);
	var teamBWins = getRndInteger(3,8);
	var teamBDraws = getRndInteger(3,8);
	var teamCWins = getRndInteger(3,8);
	var teamCDraws = getRndInteger(3,8);
	
	retstr += "<br><br>Three teams in the competition recorded the following results:"
	
	retstr += "<br><br>Team A : " + teamAWins.toFixed(0) + " wins and " + teamADraws.toFixed(0) + " draws";
	retstr += "<br>Team B : " + teamBWins.toFixed(0) + " wins and " + teamBDraws.toFixed(0) + " draws";
	retstr += "<br>Team C : " + teamCWins.toFixed(0) + " wins and " + teamCDraws.toFixed(0) + " draws";
	
	var Atotal = teamAWins*3 + teamADraws;
	var Btotal = teamBWins*3 + teamBDraws;
	var Ctotal = teamCWins*3 + teamCDraws;
	
	ww = getRndInteger(2,4);
	//ww = 4;
	switch (ww) {
		case 1:
			retstr += "<br><br>How many points did Team A get?," + Number(Atotal).toFixed(0) + "," + Number(teamAWins+teamADraws).toFixed(0) + "," + Number(Atotal+1).toFixed(0) + "," + Number(Atotal-1).toFixed(0);
			break;
		case 2:
			if ( Atotal > Btotal ) {
				var ans = Atotal-Btotal;
				retstr += "<br><br>How many more points did Team A get than Team B?," + Number(ans).toFixed(0) + "," + Number(ans+2).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans+3).toFixed(0);
			}
			else if ( Btotal > Atotal ) {
				var ans = Btotal-Atotal;
				retstr += "<br><br>How many more points did Team B get than Team A?," + Number(ans).toFixed(0) + "," + Number(ans+2).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans+3).toFixed(0);
			}
			else {
				retstr += "<br><br>How many points did Team C get?," + Number(Ctotal).toFixed(0) + "," + Number(teamCWins+teamCDraws).toFixed(0) + "," + Number(Ctotal+1).toFixed(0) + "," + Number(Ctotal-1).toFixed(0);
			}
			break;
		case 3:
			var ans = Atotal+Btotal+Ctotal;;
			
			retstr += "<br><br>How many points did all three teams win in total?," + Number(ans).toFixed(0) + "," + Number(ans+3).toFixed(0) + "," + Number(ans-3).toFixed(0) + "," + Number(ans+4).toFixed(0);
			
			break;
		case 4:
			var ans = (Atotal+Btotal+Ctotal)/3;
			
			retstr += "<br><br>What was the mean average total score for the three teams?," + Number(ans).toFixed(2) + "," + Number(ans+3).toFixed(2) + "," + Number(ans-3).toFixed(2) + "," + Number(ans+4).toFixed(2);
			
			break;
	}
	
	return retstr;
}

/* comma &#44; */

/* median + range + mean */

var img_rearrange = "./Images/rearr1.png";
var img_rearrange2 = "./Images/rearr2.png";
var img_rearrange3 = "./Images/rearr3.png";

function getAddMoney255() {
	
	var ww = getRndInteger(1,7);
	//ww = 7;
	
	switch (ww) {
		case 1:
			var coeffb = getRndInteger(3,8);
			var constval = getRndInteger(10,20);
			var vala = getRndInteger(2,5);
			var retstr = "Given that:<br><br><span style=\"font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = " + coeffb + "b + " + constval + "</span>";
			retstr += "<br><br>Make b the subject of the equation.<br><br>Calculate b when a = " + vala;
			
			var ans = (vala - constval)/coeffb;
			
			retstr += "," + Number(ans).toFixed(2) + "," + Number((ans*1.10)).toFixed(2) + "," + Number((ans*0.9)).toFixed(2) + "," + Number((ans*1.17)).toFixed(2);
			
			break;
		case 2:
			
			var coeffb = getRndInteger(3,8);
			var constval = getRndInteger(10,20);
			var vala = getRndInteger(2,5);
			var retstr = "Given that:<br><br><span style=\"font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = " + coeffb + "b - " + constval + "</span>";
			retstr += "<br><br>Make b the subject of the equation.<br><br>Calculate b when a = " + vala;
			
			var ans = (vala + constval)/coeffb;
			
			retstr += "," + Number(ans).toFixed(2) + "," + Number((ans*1.10)).toFixed(2) + "," + Number((ans*0.9)).toFixed(2) + "," + Number((ans*1.17)).toFixed(2);
			
			break;
		case 3:
			var coeffb = getRndInteger(3,8);
			var constval = getRndInteger(10,20);
			var vala = getRndInteger(2,5);
			var valc = getRndInteger(2,5);
			
			var retstr = "Given that:<br><br><span style=\"font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = " + coeffb + "b(" + constval + " + c)</span>";
			retstr += "<br><br>Make b the subject of the equation.<br><br>Calculate b when a = " + vala + " and c = " + valc;
			
			var ans = vala/(coeffb*(constval + valc));
			
			retstr += "," + Number(ans).toFixed(3) + "," + Number((ans*0.35)).toFixed(3) + "," + Number((ans*1.88)).toFixed(3) + "," + Number((ans*0.79)).toFixed(3);
			
			break;
		case 4:
			var coeffb = getRndInteger(3,8);
			var constval = getRndInteger(10,20);
			var vala = getRndInteger(2,5);
			var valc = getRndInteger(2,5);
			
			var retstr = "Given that:<br><br><span style=\"font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a = " + coeffb + "b(" + constval + " - c)</span>";
			retstr += "<br><br>Make b the subject of the equation.<br><br>Calculate b when a = " + vala + " and c = " + valc;
			
			var ans = vala/(coeffb*(constval - valc));
			
			retstr += "," + Number(ans).toFixed(3) + "," + Number((ans*0.35)).toFixed(3) + "," + Number((ans*1.88)).toFixed(3) + "," + Number((ans*0.79)).toFixed(3);
			
			break;
		case 5:
			var vala = getRndInteger(2,5);
			var valh = getRndInteger(2,5);
			
			var retstr = "Given that:<br><br><span style=\"font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h = &frac12;(a + b)</span>";
			retstr += "<br><br>Make b the subject of the equation.<br><br>Calculate b when a = " + vala + " and h = " + valh;
			
			var ans = (2*valh)- vala;
			
			retstr += "," + Number(ans).toFixed(0) + "," + Number((ans-1)).toFixed(0) + "," + Number((ans-2)).toFixed(0) + "," + Number((ans+2)).toFixed(0);
			
			break;
		case 6:
			var vala = getRndInteger(2,5);
			var valh = getRndInteger(2,5);
			
			var retstr = "Given that:<br><br><span style=\"font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;h = &frac14;(a - b)</span>";
			retstr += "<br><br>Make b the subject of the equation.<br><br>Calculate b when a = " + vala + " and h = " + valh;
			
			var ans =  vala - (4*valh);
			
			retstr += "," + Number(ans).toFixed(0) + "," + Number((ans-1)).toFixed(0) + "," + Number((ans-2)).toFixed(0) + "," + Number((ans+2)).toFixed(0);
			
			break;
		case 7:
			var valp = getRndInteger(2,5);
			var valq = getRndInteger(2,5);
			
			var retstr = "Given that:<br><br><span style=\"font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;p = 5(q + r)</span>";
			retstr += "<br><br>Make r the subject of the equation.<br><br>Calculate r when p = " + valp + " and q = " + valq;
			
			var ans =  (valp - (5*valq))/5;
			
			retstr += "," + Number(ans).toFixed(1) + "," + Number((ans-1)).toFixed(1) + "," + Number((ans-2)).toFixed(1) + "," + Number((ans+2)).toFixed(1);
			
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'Check out these examples to jog your memory.<br><br>Remember: Do the same operation on both sides of the equation.<br><br><img style=\"margin-left:10px;\" width=\"275\" src=\"' + cleanURL(img_rearrange) + '\">';
	document.getElementById("helptext").innerHTML += '<br><br><img style=\"margin-left:10px;\" width=\"275\" src=\"' + cleanURL(img_rearrange2) + '\">';
	document.getElementById("helptext").innerHTML += '<br><br><img style=\"margin-left:10px;\" width=\"275\" src=\"' + cleanURL(img_rearrange3) + '\">';
	
	return retstr;
}

var img_heydiddle = "./Images/heydiddle.png";

function getAddMoney254() {
	var monval = getRndInteger(3,8)*5;
	var tueval = getRndInteger(3,8)*5;
	var wedval = getRndInteger(3,8)*5;
	var thuval = getRndInteger(3,8)*5;
	var frival = getRndInteger(3,8)*5;
	
	var mean = (monval + tueval + wedval + thuval + frival)/5;
	
	var retstr = "The numbers of cars parked in a carpark were recorded for 5 days:";
	
	retstr +="<br><br>Monday : " + monval;
	retstr +="<br>Tuesday : " + tueval;
	retstr +="<br>Wednesday : " + wedval;
	retstr +="<br>Thursday : " + thuval;
	retstr +="<br>Friday : ?";
	
	var ans = frival;
	
	retstr += "<br><br>If the mean number of cars parked that week was " + mean.toFixed(0) + " how many cars were parked on Friday?," + ans.toFixed(0) + "," + Number(ans+3).toFixed(0) + "," + Number(ans-3).toFixed(0) + "," + Number(ans+5).toFixed(0);
	
	document.getElementById("helptext").innerHTML = 'This rhyme might help you remember:<br><br><img style=\"margin-left:-15px;\" width=\"350\" src=\"' + cleanURL(img_heydiddle) + '\">';
	
	return retstr;
}

function getAddMoney253() {
	var xval = getRndInteger(2,10);
	var coeff1 = getRndInteger(5,9);
	var coeff2 = getRndInteger(2,4);
	var const1 = getRndInteger(1,6);
	
	var lhs = (coeff1 * xval) + const1;
	
	var const2 = lhs - (xval*coeff2);
	
	var retstr = "Given that:<br><br>" + coeff1 + "x + " + const1 + " = " + coeff2 + "x + " + const2;
	
	retstr += "<br><br>What is the value of x?," + Number(xval) + "," + Number(Number(xval)+1) + "," + Number(Number(xval)-1) + "," + Number(Number(xval)+2) ;
	
	return retstr;
}

function getAddMoney252() {
	
	var retstr = "The pie chart below shows the results of a survey on favourite pizza toppings.<br><br><img style=\"margin-left:50px;\" width=\"" + 210 * imgscale + "\" src=\"" + cleanURL(img_piechartpizza) + "\">";
	
	var ww = getRndInteger(1,5);
	//ww = 5;
	switch (ww) {
		case 1:
			retstr += "<br><br>What angle in degrees is the area of the pie chart representing sausage topping?, 54, 15, 24, 60";
			break;
		case 2:
			retstr += "<br><br>If 45 people chose sausage how many people chose pepperoni?,150, 160, 135, 140";
			break;
		case 3:
			retstr += "<br><br>If 30 people chose cheese how many people chose either supreme or pepperoni?,72, 84, 66, 78";
			break;
		case 4:
			var ans = getRndInteger(3,12)*60;
			var qval = ans * 0.15;
			retstr += "<br><br>If " + qval.toFixed(0) + " people chose sausage how many people took part in the survey in total?," + ans.toFixed(0) + "," + Number(ans+10).toFixed(0) + "," + Number(ans-10).toFixed(0) + "," + Number(ans+20).toFixed(0);
			break;
		case 5:
			var ans = getRndInteger(3,12)*60;
			var qval = ans * 0.15;
			
			ans = ans/4;
			
			retstr += "<br><br>If " + qval.toFixed(0) + " people chose sausage how many people chose cheese?," + ans.toFixed(0) + "," + Number(ans+10).toFixed(0) + "," + Number(ans-10).toFixed(0) + "," + Number(ans+20).toFixed(0);
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'Pie charts will use fractions of 360 degrees to give a visual  indication of how big a share of the whole different items have.\
														<br><br>If an item is one half of the whole then it will have one half of 360 degrees = 180\
														<br><br>In this case Pepperoni.\
														<br><br>working with pie charts involves undertanding fractions and calculating the fraction as a proportion of 360\
														<br><br>If pie charts confuse you - message your tutor next time you are in class fror some help\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney251() {
	
	var retstr = "The tree below shows the possible outcomes of flipping a fair coin three times in a row.<br><br><img style=\"margin-left:30px;\" width=\"" + 170 * imgscale + "\" src=\"" + cleanURL(img_headstails3coins) + "\">";
	
	var ww = getRndInteger(1,5);
	//ww = 1;
	switch (ww) {
		case 1:
			retstr += "<br><br>What is the probability of getting at least two heads?,<span style=\"font-size:26px;\">&frac12;</span>, <span style=\"font-size:26px;\">&frac13;</span>, <span style=\"font-size:26px;\">&frac14;</span>, <span style=\"font-size:26px;\">&frac23;</span>";
			break;
		case 2:
			retstr += "<br><br>What is the probability of getting at least two tails?,<span style=\"font-size:26px;\">&frac12;</span>, <span style=\"font-size:26px;\">&frac13;</span>, <span style=\"font-size:26px;\">&frac14;</span>, <span style=\"font-size:26px;\">&frac23;</span>";
			break;
		case 3:
			retstr += "<br><br>What is the probability of getting at heads only once?,<span style=\"font-size:26px;\">&frac38;</span>, <span style=\"font-size:26px;\">&frac13;</span>, <span style=\"font-size:26px;\">&frac12;</span>, <span style=\"font-size:26px;\">&frac18;</span>";
			break;
		case 4:
			retstr += "<br><br>What is the probability of getting at at least one tail?,<span style=\"font-size:26px;\">&frac78;</span>, <span style=\"font-size:26px;\">&frac23;</span>, <span style=\"font-size:26px;\">&frac34;</span>, <span style=\"font-size:26px;\">1</span>";
			break;
		case 5:
			retstr += "<br><br>What is the probability of getting either three heads or three tails?,<span style=\"font-size:26px;\">&frac14;</span>, <span style=\"font-size:26px;\">&frac13;</span>, <span style=\"font-size:26px;\">&frac18;</span>,<span style=\"font-size:26px;\">&frac12;</span>";
			break;
		
	}
	return retstr;
}

function getAddMoney250() {
	
	var ww = getRndInteger(1,9);
	var retstr = "";
	//ww = 10;
	switch (ww) {
		case 1:
			var angleM = getRndInteger(40,80);
	
			retstr = "In the diagram below angle M is " + angleM + "&#176;<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			var ans = 180 - angleM;
			var ans2 = angleM;
			var ans3 = 180;
			var ans4 = 90;
	
			retstr += "<br><br>What size is angle s?," + Number(ans) + "," + Number(ans2) + "," + Number(ans3) + "," + Number(ans4);
			break;
		case 2:
			var angleN = getRndInteger(110,160);
	
			retstr = "In the diagram below angle N is " + angleN + "&#176;<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			var ans = angleN;
			var ans2 = 180 - angleN;
			var ans3 = 105;
			var ans4 = 90;
	
			retstr += "<br><br>What size is angle s?," + Number(ans) + "," + Number(ans2) + "," + Number(ans3) + "," + Number(ans4);
			break;
		case 3:
	
			retstr = "Given the diagram below :<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			retstr += "<br><br>Which of the following is definitely true?,N+P=Q+S,N = P, M = O, R = M";
			break;
		case 4:
	
			retstr = "Given the diagram below :<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			retstr += "<br><br>Which of the following is definitely true?,N+O=R+S,M+P=Q+S, M+P=180, R+S=N";
			break;
		case 5:
			var angleP = getRndInteger(40,80);
	
			retstr = "In the diagram below angle P is " + angleP + "&#176;<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			retstr += "<br><br>Which of the following is definitely true?,T+M=" + Number(angleP*2) + ", M+P=180, Q+T=" + Number(180 - angleP) + ",S=90+" + angleP;
			break;
		case 6:
			
			retstr = "Given the diagram below :<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			retstr += "<br><br>What type of angle is M?,Acute,Right,Reflex,Obtuse";
			break;
		case 7:
			
			retstr = "Given the diagram below :<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			retstr += "<br><br>What type of angle is N?,Obtuse,Right,Reflex,Acute";
			break;
		case 8:
			
			retstr = "Given the diagram below :<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			retstr += "<br><br>What type of angle is Q+R+T?,Reflex,Right,Obtuse,Acute";
			break;
		case 9:
			var angleM = getRndInteger(40,80);
	
			retstr = "In the diagram below angle M is " + angleM + "&#176;<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			var ans = 180 - angleM;
			var ans2 = angleM;
			var ans3 = 180;
			var ans4 = 90;
	
			retstr += "<br><br>What size is O+S?," + Number(ans*2) + "," + Number(ans) + "," + Number(ans2*2) + "," + Number(ans+angleM);
			break;
		case 10:
			retstr = "Given the diagram below :<br><br><img style=\"margin-left:10px;\" width=\"" + 200 * imgscale + "\" src=\"" + cleanURL(img_parallellines) + "\">";
	
			retstr += "<br><br>Which of the following is definitely true?,Q+R=M+N,Q+R=S+T,Q+R=O+P,Q+R=O+Q";
			break;
	}
	
	return retstr;
}

var canvastext = "";

function cleanURL(uri) {
	return uri;
}

var canvasID = 0;

function getAddMoney249() {
	
	var pbase = getRndInteger(15,25);
	var pheight = getRndInteger(8,14);
	
	var retstr = "The parallelogram below has height " + pheight + "cm and base " + pbase + "cm.<br><br><img style=\"margin-left:50px;\" width=\"" + 225 * imgscale + "\" src=\"" + cleanURL(img_parallelogram) + "\">";
	
	var ans = pbase * pheight;
	var ans2 = pbase + pheight;
	var ans3 = 0.5 + pbase * pheight;
	var ans4 = pbase + pheight * 2;
	
	retstr += "<br><br>Calculate the area of the parallelogram," + Number(ans).toFixed(2) + " cm&sup2;," + Number(ans2).toFixed(2) + " cm&sup2;," + Number(ans3).toFixed(2) + " cm&sup2;," + Number(ans4).toFixed(2) + " cm&sup2";
	
	return retstr;
}

function getAddMoney248() {
	var retstr = "Using the fact that:";
	
	retstr += "<br><br>The sum of the exterior angles in any polygon is 360 degrees."
	
	var numsides = getRndInteger(5,20);
	
	var ans = (180 - 360/numsides) * numsides;
	
	retstr += "<br><br>What is the sum of the interior angles of a " + numsides + " sided polygon to the nearest whole degree?," + ans.toFixed(0) + "," + Number(ans+10).toFixed(0) + "," + Number(ans-10).toFixed(0) + "," + Number(ans+20).toFixed(0);

	return retstr;
}

function getAddMoney247() {
	var a1 = 1;
	var b1 = getRndInteger(3,8);
	var a2 = getRndInteger(3, 5);
	var c1 = 1;
	
	var retstr = "Given the ratios:<br><br>a : b = " + a1 + " : " + b1;
	retstr += "<br>a : c = " + a2 + " : " + c1;
	
	var ans = b1 * a2;
	var ans2 = b1 + a2;
	var ans3 = b1 * a2 + a2;
	var ans4 = a2 * 2;
	
	retstr += "<br><br>How many times bigger is b than c?," + Number(ans).toFixed(0) +" ," + Number(ans2).toFixed(0) + " ," + Number(ans3).toFixed(0) + " ," + Number(ans4).toFixed(0);
	
	return retstr;
}

function getAddMoney246() {
	var mm = getRndInteger(2,6);
	var cc = getRndInteger(1, 10);
	
	var xx = getRndInteger(1,3);
	
	var yy = xx*mm + cc;
	
	var retstr = "The equation<br><br>";
	
	retstr += "y = " + mm + "x + " + cc + "<br><br> is the equation of a straight line.";
	
	retstr += "<br><br>Which of the coordinates below represents a point that lies on the line?,";
	
	retstr += "&#40;" + xx + "&#44;" + yy +"&#41;,&#40;" + Number(xx+1) + "&#44;" + Number(yy+2) + "&#41;,&#40;" + Number(xx-1) + "&#44;" + Number(yy+1) + "&#41;,&#40;" + Number(xx+2) + "&#44;" + Number(yy-2) + "&#41;";
	
	return retstr;
}

function getAddMoney245() {
	var sideA = getRndInteger(5,12);
	var sideB = getRndInteger(5,12);
	var hypo = getRndInteger(13,20);
	
	if ( getRndInteger(1,2) == 1 ) {
		var ans = Math.sqrt((sideA*sideA) + (sideB * sideB));
	
		var retstr = "A right angled triangle has sides of:";
	
		retstr += "<br><br>" + sideA + " cm and " + sideB + " cm";
	
		retstr += "<br><br>What is the length of the hypotenuse to the nearest centimetre?," + Number(ans).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans-1).toFixed(0) + "," + Number(ans+2).toFixed(0);
	}
	else {
		var ans = Math.sqrt((sideA*sideA) + (sideB * sideB));
		
		var hypsq = hypo * hypo;
		
		var sideAsq = sideA * sideA;
		
		var sideBsq = hypsq - sideAsq;
		
		var ans = Math.sqrt(sideBsq);
	
		var retstr = "A right angled triangle has side A of length " + sideA + " cm  and hypotenuse of length " + hypo + " cm";
	
		retstr += "<br><br>What is the length of side B to the nearest centimetre?," + Number(ans).toFixed(0) + "," + Number(ans+1).toFixed(0) + "," + Number(ans-1).toFixed(0) + "," + Number(ans+2).toFixed(0);
	}
	
	return retstr;
}

function getAddMoney244() {
	var base = 1980 + getRndInteger(5,30);
	
	var interval = getRndInteger(6,9);
	
	var ans = base + (interval * getRndInteger(6,12));
	
	var retstr = "A competition<br><br>took place in " + base + "<br>takes place every " + interval + " years.";
	
	retstr += "<br><br>Choose a year that the competition will take place in?," + Number(ans) + "," + Number(ans+1) + "," + Number(ans-1) + "," + Number(ans+2);
	
	return retstr;
}

function getAddMoney243() {
	var base = getRndInteger(5,12);
	
	var height = getRndInteger(6,15);
	
	var ans = 0.5 * base * height;
	
	var ans2 = base * height;
	
	var ans3 = base + height;
	
	var ans4 = 0.5 * (base + height);
	
	var retstr = "A triangle has base " + base + " cm and perpendicular height " + height + " cm";
	
	retstr += "<br><br>What is the area of the triangle?," + Number(ans) + " cm&sup2;," + Number(ans2) + " cm&sup2;," + Number(ans3) + "cm&sup2;," + Number(ans4) + "cm&sup2";
	
	return retstr;
}

function getAddMoney242() {
	var mins = getRndInteger(1,4)*5;
	
	var travels = 4 + getRndInteger(1,12)*0.25*(mins/5);
	
	var ans = 60/mins * travels;
	
	var retstr = "A car travels " + travels + " miles in " + mins + " minutes.";
	
	retstr += "<br><br>What is the average speed of the car in miles per hour?," + Number(ans) + "," + Number(Number(ans)+5) + "," + Number(Number(ans)-5) + "," + Number(Number(ans)+10) ;
	
	return retstr;
}

function getAddMoney241() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	var qs = [
		thisname + " puts three songs A&#44 B and C on shuffle play (without repeat).<br><br>How many different play orders are possible?,6, 8, 3, 4",
		thisname + " puts three songs A&#44 B and C on shuffle play (without repeat).<br><br>What is the probabilty of song A being either first or second in the playlist?,<span style=\"font-size:26px;\">&frac23;</span>, <span style=\"font-size:26px;\">&frac13;</span>,<span style=\"font-size:26px;\"> &frac12;</span>,<span style=\"font-size:26px;\">&frac34;</span>",
		thisname + " puts three songs A&#44 B and C on shuffle play (without repeat).<br><br>What is the probabilty of song A being second in the playlist?,<span style=\"font-size:26px;\">&frac13;</span>, <span style=\"font-size:26px;\">&frac23;</span>, <span style=\"font-size:26px;\">&frac12;</span>, <span style=\"font-size:26px;\">&frac34;</span>",
		thisname + " puts three songs A&#44 B and C on shuffle play (without repeat).<br><br>What is the probabilty of song A being last in the playlist?,<span style=\"font-size:26px;\">&frac13;</span>,<span style=\"font-size:26px;\">&frac23;</span>, <span style=\"font-size:26px;\">&frac12;</span>, <span style=\"font-size:26px;\">&frac34;</span>",
	];
	
	return qs[getRndInteger(0,qs.length-1)];
}

function getAddMoney240() {
	var qs = [
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>2 &#44; 7&#44; 12&#44; 17&#44; ...,5n - 3, 5n + 3, 3 + 5n, 3 - 5n",
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>1 &#44; 4&#44; 7&#44; 10&#44; ...,4n - 3, 4n + 3, 3 + 4n, 3 - 4n",
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>10 &#44; 16&#44; 22&#44; 28&#44; ...,6n + 4, 6n - 4, 5 + 6n, 3 + 6n",
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>5 &#44; 7&#44; 9&#44; 11&#44; ...,2n + 3, 3n + 2, 3 - 2n, 2n + 1",
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>8 &#44; 13&#44; 18&#44; 23&#44; ...,5n + 3, 5n + 2, 5n - 3, 4n + 4",
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>3 &#44; 1&#44; -1&#44; -3&#44; ...,5 - 2n, 2n - 5, 5n - 4, 2n + 5",
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>-1 &#44; -5&#44; -9&#44; -13&#44; ...,3 - 4n, 4n - 3, 4 - 3n, 6 - 5n",
		"Choose the expression which can be used to calculate the Nth term of the following sequence:<br><br>11 &#44; 16&#44; 21&#44; 26&#44; ...,5n + 6, 4n + 7, 3 + 8n, 12n - 1",
	];
	
	return qs[getRndInteger(0,qs.length-1)];
}

function getAddMoney239() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];

	var invest = getRndInteger(20,30) * 75;
	var retstr = thisname + " Puts £" + invest.toFixed(0) + " into a building society saving account.";
	
	var interest = getRndInteger(21,38)*0.05;
	
	retstr += "<br><br>The rate of interest is " + interest.toFixed(2) + "% per year";
	
	var years = getRndInteger(3,5);
	
	var ans = invest;
	
	var mult = 1 + Number(Number(interest)/100);
	
	for (yy = 0; yy < years; yy++) {
		ans = ans * mult;
	}
	
	retstr += "<br><br>Now much will be in " + thisname + "'s account after " + years + " years?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	return retstr;
}

function getAddMoney238() {
	var qs = [
		"Fully factorise:<br><br>6x + 18, 6(x + 2), 3(2x + 9), 6x(1 + 3), 2(3x + 9)",
		"Fully factorise:<br><br>4xy + 12x, 4x(y + 3), x(4y + 12), 4y(x + 12), 2x(2y + 6)",
		"Fully factorise:<br><br>15xy&sup2; + 12y, 3y(5xy + 4), y(15xy + 3), 5(3xy&sup2; + 3), 3xy(5 + 4)",
		"Fully factorise:<br><br>6wq + 2w, 2w(3q + 1), 2q(3w + 1), w(6q + 2), 6w(q + 1)",
		"Fully factorise:<br><br>9xy + 3x, 3x(3y + 1), 3(3xy + x), 3(3xy + x), 3x(y + 3)",
	];
	
	return qs[getRndInteger(0,qs.length-1)];
}

function getAddMoney237() {
	var qs = [
		"Which of the four answers correctly shows the prime factorisation of 36, 2&sup2;x3&sup2;, 2&sup3;, 2&sup3;x3, 2x3&sup2;",
		"Which of the four answers correctly shows the prime factorisation of 156, 2&sup2;x3x13, 2&sup2x3x7, 2&sup3;x3&sup3;x5, 2x5&sup2;x7&sup2;",
		"Which of the four answers correctly shows the prime factorisation of 900, 2&sup2;x3&sup2;x5&sup2;, 2&sup3;x3&sup3;x5, 2&sup2;x3&sup3;x5&sup3;, 2&sup3;x3x7&sup2;",
		"Which of the four answers correctly shows the prime factorisation of 500, 2&sup2;x5&sup3;, 2&sup3;x5&sup2;, 2&sup3;x5&sup3;, 2&sup2;x3x5&sup2;",
		"Which of the four answers correctly shows the prime factorisation of 1470, 2x3x5x7&sup2;, 2&sup2;x5x7&sup2;, 2x3x5&sup2;x7, 2x5x7&sup3;",
	];
	
	return qs[getRndInteger(0,qs.length-1)];
}

function getAddMoney236() {
	var fracs = ["1,3", "2,3", "3,4", "2,5", "3,5", "4,5", "2,7", "3,7", "5,7", "3,8", "5,8"];
	var str = fracs[getRndInteger(0, fracs.length-1)];
	var num = Number(str.split(",")[0]);
	var den = Number(str.split(",")[1]);
	
	var xnum = num * 24;
	var xden = den * 24;
	
	var retstr = "What is the fraction " + xnum + "/" + xden + " in its simplest form?," + num.toString() + "/" + den.toString() + "," + (num).toString() + "/" + (den+1).toString() + "," + (num+1).toString() + "/" + (den+1).toString() + "," + (num+1).toString() + "/" + (den+2).toString(); 
	
	return retstr;
}

function getAddMoney235() {

	var mulAx = getRndInteger(2,6);
	var constA = getRndInteger(2,10);
	var mulBx = getRndInteger(2,6);
	var constB = getRndInteger(2,10);
	
	var x = getRndInteger(2,9);
	
	var retstr = "A rectangle has:";
	
	retstr += "<br><br>Length (cm) = " + mulAx + "x + " + constA;
	retstr += "<br><br>Width (cm) = " + mulBx + "x + " + constB ;
	
	var perim = 2*((mulAx + mulBx)*x + constA+constB);
	
	retstr += "<br><br>If the perimeter of the rectangle is " + perim + "cm - what is the value of x?," + Number(x) + "," + Number(Number(x)+1) + "," + Number(Number(x)-1) + "," + Number(Number(x)+2) ;
													
	return retstr;
}

function getAddMoney234() {

	var mulAx = getRndInteger(2,4);
	var mulAy = getRndInteger(2,4);
	var mulBx = getRndInteger(2,4);
	var mulBy = getRndInteger(2,4);
	
	var retstr = "A rectangle has:";
	
	retstr += "<br><br>Length (cm) = " + mulAx + "x + " + mulAy + "y cm";
	retstr += "<br><br>Width (cm) = " + mulBx + "x + " + mulBy + "y cm";
	
	var mulX = mulAx + mulBx;
	var mulY = mulAy + mulBy;
	
	var ans = "2(" + mulX + "x + " + mulY + "y)";
	var ans2 = "2(" + (mulX+1) + "x + " + mulY + "y)";
	var ans3 = "2(" + (mulX+1) + "x + " + (mulY-1) + "y)";
	var ans4 = "2(" + (mulX+2) + "x + " + (mulY+2) + "y)";
	
	retstr += "<br><br>Which expression correctly represents the perimeter of the rectangle in centimetres?," + ans + "," + ans2 + "," + ans3 + "," + ans4;
													
	return retstr;
}

function getAddMoney233() {

	var radA = getRndInteger(5,10)*2;
	
	var retstr = "Circle A has a radius of " + radA + "cm";
	
	var areaCircle = Number(3.142 * radA * radA).toFixed(2);
	
	var length = getRndInteger(4,8);
	var width = getRndInteger(9,15);
	
	areaRect = Number(length * width).toFixed(0);
	
	var ans = Number(Number(areaCircle) + Number(areaRect)).toFixed(2);
	
	retstr += "<br><br>Rectangle B has a length of " + length + "cm and a width of " + width + " cm";
	
	retstr += "<br><br>Using a value of 3.142 for &#960; what is the total area of circle A and rectangle B?," + Number(ans).toFixed(2) + " cm&sup2;," + Number(Number(ans)+1).toFixed(2) + " cm&sup2;," + Number(Number(ans)-1).toFixed(2) + " cm&sup2;," + Number(Number(ans)+2).toFixed(2) + " cm&sup2;";

	document.getElementById("helptext").innerHTML = 'Remember: Area of circle = &#960; x Radius x Radius\
															<br><br>Remember: Area of rectangle = length x width.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
													
	return retstr;
}

function getAddMoney232() {

	var diamA = getRndInteger(5,10)*2;
	var diamB = getRndInteger(11,20)*2;
	
	var retstr = "Circle A has a diameter of " + diamA + "cm";
	
	var dAsq = diamA/2 * diamA/2;
	var dBsq = diamB/2 * diamB/2;
	
	var ans = dAsq + dBsq;
	
	retstr += "<br><br>Circle B has a diameter of " + diamB + "cm";
	
	retstr += "<br><br>What is the total area of circle A and circle B?," + Number(ans) + "&#960; cm&sup2;," + Number(Number(ans)+1) + "&#960; cm&sup2;," + Number(Number(ans)-1) + "&#960; cm&sup2;," + Number(Number(ans)+2) + "&#960; cm&sup2;";

	document.getElementById("helptext").innerHTML = 'Remember: Area of circle = &#960; x Radius x Radius\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';

	return retstr;
}


function getAddMoney230() {
	
	
	var xval = getRndInteger(5,20);
	var addval = getRndInteger(5,20);
	
	var mult = getRndInteger(1,4);
	var sum = Number(Number(Number(mult*xval).toFixed()) + addval);
	
	var ans = xval;
	
	var multstr = "";
	if ( mult > 1 ) {
		multstr = mult.toFixed(0);
	}
	var retstr = "Given that:<br><br>" + multstr + "x + " + addval + " = " + sum;
	
	retstr += "<br><br>What is the value of x?," + Number(ans) + "," + Number(Number(ans)+1) + "," + Number(Number(ans)-1) + "," + Number(Number(ans)+2) ;
	
	//document.getElementById("helptext").innerHTML = 'Remember: to calculate the MEAN AVERAGE add up all the values and divide by how many values there are';
	
	return retstr;
	
}

function getAddMoney231() {
	
	
	var xval = getRndInteger(15,25);
	var subval = getRndInteger(5,14);
	
	var mult = getRndInteger(1,4);
	var sub = Number(Number(Number(mult*xval).toFixed()) - subval);
	
	var ans = xval;
	
	var multstr = "";
	if ( mult > 1 ) {
		multstr = mult.toFixed(0);
	}
	var retstr = "Given that:<br><br>" + multstr + "x - " + subval + " = " + sub;
	
	retstr += "<br><br>What is the value of x?," + Number(ans) + "," + Number(Number(ans)+1) + "," + Number(Number(ans)-1) + "," + Number(Number(ans)+2) ;
	
	//document.getElementById("helptext").innerHTML = 'Remember: to calculate the MEAN AVERAGE add up all the values and divide by how many values there are';
	
	return retstr;
	
}

function getAddMoney228() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];

	
	var retstr = thisname + " wants to put a strip of Union Jack flags around the walls of the local community centre hall.<br><br><img style=\"margin-left:65px;\" width=\"" + 75 * imgscale + "\" src=\"" + cleanURL(img_unionflags) + "\">";
	
	var length = getRndInteger(8,12)*2;
	var width = getRndInteger(4,8)*2;
	
	var perimby2 = Number((length+ width)*4).toFixed(0);
	
	retstr += "<br><br>The hall is in the shape of a rectangle " + length + "m by " + width + "m";
	
	retstr += "<br><br>The strip of flags should 2 times the perimeter of the hall.";
	
	var flagprice = Number(getRndInteger(22,38)*5/100).toFixed(2);
	
	retstr += "<br><br>The strips of flags cost £" + flagprice + " per metre";
	
	var ans = Number(perimby2)*(Number(flagprice));
	
	retstr += "<br><br>How much will it cost to buy the flags for the hall?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Work out the perimeter of the hall (remembber perimater is all the distance around the outside).\
													<br><br>Stage 2: Find out many metres of flags you need by multiplying the perimeter by 2\
													<br><br>Stage 3: Multiply the number of metres required by the cost per metre.\
													<br><br>Stage 2: Multiply the increased hourly rate you found in stage 1 by the number of hours specified in the question.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney2281() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];

	
	var retstr = thisname + " wants to put a strip of Union Jack flags around the walls of the local community centre hall.";
	
	var length = getRndInteger(8,12)*2;
	var width = getRndInteger(4,8)*2;
	
	var perimby2 = Number((length+ width)*2).toFixed(0);
	
	retstr += "<br><br>The hall is in the shape of a rectangle " + length + "m by " + width + "m";
	
	var flagprice = Number(getRndInteger(22,38)*5/100).toFixed(2);
	
	retstr += "<br><br>The strips of flags cost £" + flagprice + " per metre";
	
	var ans = Number(perimby2)*(Number(flagprice));
	
	retstr += "<br><br>How much will it cost to buy the flags for the hall?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Work out the perimeter of the hall (remembber perimater is all the distance around the outside).\
													<br><br>Stage 2: Find out many metres of flags you need by multiplying the perimeter by 2\
													<br><br>Stage 3: Multiply the number of metres required by the cost per metre.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney227() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var hourlyrate = Number(getRndInteger(7,9).toString() + "." + (getRndInteger(2,8)*10).toString()).toFixed(2);
	
	var hoursperweek = getRndInteger(5,8)*5;
	
	var retstr = thisname + " earns £" + Number(hourlyrate).toFixed(2) + " per hour and works " + hoursperweek + " hours each week.";
	
	var payrise = getRndInteger(1,3)*5/100;
	
	var mult = 1 + payrise;
	
	var ans = Number(Number(hourlyrate) * (Number(mult)));
	var ans = Number(ans*Number(hoursperweek)).toFixed(2);
	
	retstr += "<br><br>" + thisname + "'s pay is increased by " + Number(Number(mult-1)*100).toFixed(0) + "%<br><br>How much will the new weekly pay be to the nearest pound?,£" + Math.round(Number(ans)) + ",£" + Math.round(Number(ans*1.2)) + ",£" + Math.round(Number(ans*0.9)) + ",£" + Math.round(Number(ans*1.3));
	
	document.getElementById("helptext").innerHTML = 'Stage 1: You need to take the weekly pay amount and increase it by the given percentage.\
													<br><br>Increase in pay rate = old pay rate times by perc divide by 100\
													<br><br>Now add the increase you just found to the original pay rate\
													<br><br>This will give you the current hourly pay.\
													<br><br>Stage 2: Multiply the increased hourly rate you found in stage 1 by the number of hours specified in the question.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney226() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var hourlyrate = Number(getRndInteger(7,9).toString() + "." + (getRndInteger(5,10)*5).toString()).toFixed(2);
	
	var hoursperweek = getRndInteger(30,40);
	
	var retstr = thisname + " earns £" + Number(hourlyrate*hoursperweek).toFixed(2) + " per week for a " + hoursperweek + " hour week.";
	
	var payrise = getRndInteger(30,60);
	
	var ans = Number(Number(hourlyrate) + (Number(payrise)/100));
	var ans = Number(ans*Number(hoursperweek)).toFixed(2);
	
	retstr += "<br><br>" + thisname + " gets a " + payrise.toFixed(0) + "p per hour pay rise.<br><br>How much will the new weekly pay be?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: You need to take the weekly pay amount and divide by the number of hours.\
													<br><br>This will give you the current hourly pay.\
													<br><br>Stage 2: Add the pay rise amount to the hourly rate you found in stage 1 and then multiply this new hourly rate by the number of hours specified in the question.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney225() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " decides to buy a car.";
	
	retstr += "<br><br>The sales person says that " + thisname + " can pay the cash price or use a monthly payment plan.";
	
	var cashprice = getRndInteger(50,100) * 100;
	
	retstr += "<br><br>The cash price of the car is £" + cashprice.toFixed(2);
	
	retstr += "<br><br>The sales person says:";
	
	var intArr = [1.08, 1.12, 1.14, 1.16, 1.18, 1.2, 1.22, 1.25];
	percidx = getRndInteger(1,8);
	
	var repaymentsPrice = Number(Number(cashprice) * intArr[percidx-1]).toFixed(2);
	
	var deposit = cashprice * 0.2;
	
	var tofinance = repaymentsPrice - deposit;
	
	var payment = Number(Number(tofinance/36)+0.27).toFixed(2);
	
	ans = (Number(Number(payment))*36) + deposit;
	
	ans = ans - cashprice;
	
	retstr += "<br><br>\"Pay a deposit of £" + deposit + " and then<br>36 monthly payments of £" + payment + "\"";
	
	retstr += "<br><br>How much more would the car cost in total if " + thisname + " buys the car using the payment plan?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*1.03)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: You need to take the monthly payment that the sales person quotes and multiply by the number of months.\
													<br><br>Then add the deposit.\
													<br><br>This will give you the total amount paid using the payment plan.\
													<br><br>Stage 2: To find out how much more the car costs subtract the cash price from the total you found in stage 1.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney224() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is planning for a long journey in the car.";
	
	retstr += "<br><br>The windscreen washer bottle will need to be filled up.";
	
	var ratio = getRndInteger(4,8);
	
	retstr += "<br><br>" + thisname + " needs to mix 1 part screen wash with " + ratio + " parts water.";
	
	var washer = 93 + (getRndInteger(1,8)*5);
	
	retstr += "<br><br>" + thisname + " uses " + washer + "ml of screen wash.";
	
	var ans = washer * ratio;
	
	var ans1 = ans + ratio;
	var ans2 = ans - ratio;
	var ans3 = ans+7;
	
	retstr += "<br><br>How much water should " + thisname + " use?," + ans + "ml," + ans1 + "ml," + ans2 + "ml," + ans3 + "ml";
	
	document.getElementById("helptext").innerHTML = 'This is a question about proportion\
														<br><br>For every ' + washer + 'ml of screen wash you have to use ' + ratio + ' times as much water\
														<br><br>Example: Mix 1 part screen wash to 3 times water.\
														<br><br>If you use 100ml of screen wash you would use 100 x 3 = 300ml of water.\
														<br><br>You would do a similar type of calculation using the amounts in the question.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}

function getAddMoney223() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " decides to organise a day out at a local theme park.";
	
	var adultPrice = 24 + getRndInteger(1,5) * 2;
	var childPrice = (adultPrice/2) + getRndInteger(1,5);
	
	retstr += "<br><br>Adult tickets cost £" + adultPrice;
	retstr += "<br>Child tickets cost £" + childPrice; 
	
	var numAdults = getRndInteger(1,4);
	var numChildren = getRndInteger(3,6);
	
	var numTickets = numAdults + numChildren;
	
	var ans = 0;
	
	retstr += "<br><br>" + thisname + " needs tickets for " + numAdults + " adults and " + numChildren + " children";
	
	var percs = ["5%", "10%", "15%", "20%", "25%"]
	var percdec = [0.95,0.9,0.85,0.8, 0.75];
	percidx = getRndInteger(1,5);
	
	var discamount = getRndInteger(3,3);
	
	retstr += "<br><br> The theme park gives a discount of " + percs[percidx-1] + " for purchases of " + discamount + " tickets or more.";
	
	
	if ( numTickets >= discamount ) {
		ans = ((adultPrice*numAdults) + (childPrice*numChildren))*percdec[percidx-1];
	}
	else {
		ans = (adultPrice*numAdults) + (childPrice*numChildren);
	}
	
	retstr += "<br><br>How much will the total cost of the tickets be after taking into account any discount?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*0.95)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Total up the prices of the adult tickets and then the child tickets taking into account the different ticket prices and the numbers of adults and children.\
														<br><br>Stage 2: How many adults and children in total - does the total qualify for the discount?\
														<br><br>If a discount can be applied, work out the value of the percentage and take that away from your total obtained in stage 1.\
														<br><br>If you struggle with fractions and percentages - use the topic quiz on frac, Dec, % and the HELP to practice that skill.\
															<br><br>Check if your answer matches one of the answer buttons.\
															<br><br>If not, check your calculations again\
															<br><br>Always use paper to jot your working out down as you go.\
													';
	
	return retstr;
}


function getAddMoney222() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var percs = ["5%", "10%", "15%"]
	var percdec = [0.95,0.9,0.85];
	
	var fracs = ["&frac16;", "&frac15;", "&frac14;"];
	var fracsvals = [6, 5, 4];
	
	var retstr = thisname + " Is buying a car from a car sales.";
	
	var carOrigCost = (getRndInteger(5,10)*6*5*4*10).toFixed(0);
	
	retstr += "<br><br>The price on the car windscreen is £" + carOrigCost;
	
	fracidx = getRndInteger(1,3);
	percidx = getRndInteger(1,3);
	retstr += "<br><br>" + thisname + " manages to get a discount of  <span style=\"font-size:22px;\">" + fracs[fracidx-1] + "</span>  off the price of the car.";
	
	retstr += "<br><br>" + thisname + " Tells the sales person that this is still too expensive.";
	
	retstr += "<br><br>The sales person offers another " + percs[percidx-1] + " off the discounted price of the car.";
	
	var firstdiscount = (carOrigCost - Number(carOrigCost/fracsvals[fracidx-1])).toFixed(2);
	
	var ans = Number(firstdiscount * percdec[percidx-1]).toFixed(2);
	
	retstr += "<br><br>What price does " + thisname + " pay for the car?,£" + Number(ans).toFixed(2) + ",£" + Number((ans*1.05)).toFixed(2) + ",£" + Number((ans*0.95)).toFixed(2) + ",£" + Number((ans*1.10)).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'This is a two stage question\
													<br><br>Stage 1: Find the fraction (divide by the bottom number of the fraction)\
													<br><br>EG: To find <span style="font-size:22px;">&frac15;</span> divide the price by 5<br>(or times by 0.05)\
													<br><br>Then take away the fraction amount that you found from the price to find the first discounted price\
													<br><br>Stage 2: Find the percentage discount and take that away from the price after Stage 1\
													<br><br>EG: To find 5% times by 5 divide by 100 <br>(or times by 0.05)\
													<br><br>EG: To find 15% times by 15 divide by 100 <br>(or times by 0.15)\
													<br><br>Then take away the percentage amount from price after the first discount.\
													<br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.\
													';
													
	return retstr;
}

function checkworkingout() {

	var sw = getRndInteger(1,2);
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " does the following calculation in an exam:";
	var sw = getRndInteger(1,3);
	//sw = 3;
	switch (sw) {
		case 1:
			var num1 = getRndInteger(5,5);
			var num2 = getRndInteger(6,10);
			var num3 = num1 * num2;
	
			var calcstr = num3 + " &#247; " + num2 + " = " + num1;
			
			var ans = num1 + " x " + num2 + " = " + num3;
			var op1 = num1 + " = " +num3 + " &#247; " + num2;
			var op2 = num1 + " x " + num3 + " = " + num2;
			var op3 = num1 + " &#247; " + num2 + " = " + num3;
		
			retstr += "<br><br>" + calcstr;
		
			retstr += "<br><br>The question asks " + thisname + " to show a check for the working out.";
		
			retstr	+= "<br><br>What would be a good choice for a check calculation for " + thisname + " to write down?," + ans + "," + op1 + "," + op2 + "," + op3;
			break;
		case 2:
			var num1 = getRndInteger(3,7);
			var num2 = getRndInteger(8,12);
			var num3 = num1 * num2;
	
			var calcstr = num1 + " x " + num2 + " = " + num3;
			
			var ans = num3 + " &#247; " + num2 + " = " + num1;
			var op1 = num3 + " = " +num1 + " x " + num2;
			var op2 = num1 + " x " + num3 + " = " + num2;
			var op3 = num1 + " &#247; " + num3 + " = " + num2;
		
			retstr += "<br><br>" + calcstr;
		
			retstr += "<br><br>The question asks " + thisname + " to show a check for the working out.";
		
			retstr	+= "<br><br>What would be a good choice for a check calculation for " + thisname + " to write down?," + ans + "," + op1 + "," + op2 + "," + op3;
			break;
		case 3:
			var num2 = getRndInteger(3,7);
			var num1 = getRndInteger(8,12);
			var num3 = num1 - num2;
	
			var calcstr = num1 + " - " + num2 + " = " + num3;
			
			var ans = num2 + " + " + num3 + " = " + num1;
			var op1 = num3 + " = " +num2 + " - " + num1;
			var op2 = num1 + " + " + num2 + " = " + num3;
			var op3 = num1 + " - " + num3 + " = " + num2;
		
			retstr += "<br><br>" + calcstr;
		
			retstr += "<br><br>The question asks " + thisname + " to show a check for the working out.";
		
			retstr	+= "<br><br>What would be a good choice for a check calculation for " + thisname + " to write down?," + ans + "," + op1 + "," + op2 + "," + op3;
			break;
	}
	
	document.getElementById("helptext").innerHTML = 'When a question asks for a check of the working you need to pick one of your calculations and do a reverse.\
													<br><br>Example.\
													<br><br>If you did an addition then show that a subtraction gets you back to the original number.\
													<br><br>EG. <b>12 - 8 = 4</b>\
													<br>A check would be: <b>8 + 4 = 12</b>\
													<br><br>If you did a division then use a reverse multiplication to show that the division was correct.\
													<br><br>Avoid just writing the same sum down again - that will not get the mark\
													<br><br>Also do not be witty!<br><br>For example do not say something like <b>I know that the division is right because I am good at times tables</b>\
													';
													
	return retstr;
}

function getBestBuys1() {
    
	var retstr = "The following offers are advertised:";
	
	var offerAItemPrice = 0
	var offerBItemPrice = 0;
	var offerCItemPrice = 0;
	var offerDItemPrice = 0;
	
	var stdPrice = (getRndInteger(100,1000) / 100).toFixed(2);
	
	var offer1ItemPrice = 0
	var offer2ItemPrice = 0;
	var offer3ItemPrice = 0;
	var offer4ItemPrice = 0;
	
	if ( getRndInteger(1,100) > 50 ) {
		var variance = 1 + getRndInteger(2,3)/100;
		offer1ItemPrice = (stdPrice*variance).toFixed(2);
	}
	else {
		var variance = 1 - (getRndInteger(2,3)/100);
		offer1ItemPrice = (stdPrice*variance).toFixed(2);
	}
	
	if ( getRndInteger(1,100) > 50 ) {
		var variance = 1 + getRndInteger(4,5)/100;
		offer2ItemPrice = (stdPrice*variance).toFixed(2);
	}
	else {
		var variance = 1 - (getRndInteger(4,5)/100);
		offer2ItemPrice = (stdPrice*variance).toFixed(2);
	}
	
	if ( getRndInteger(1,100) > 50 ) {
		var variance = 1 + getRndInteger(6,8)/100;
		offer3ItemPrice = (stdPrice*variance).toFixed(2);
	}
	else {
		var variance = 1 - (getRndInteger(6,8)/100);
		offer3ItemPrice = (stdPrice*variance).toFixed(2);
	}
	
	if ( getRndInteger(1,100) > 50 ) {
		var variance = 1 + getRndInteger(9,11)/100;
		offer4ItemPrice = (stdPrice*variance).toFixed(2);
	}
	else {
		var variance = 1 - (getRndInteger(9,11)/100);
		offer4ItemPrice = (stdPrice*variance).toFixed(2);
	}
	
	var spread = getRndInteger(1,4);
	//spread =1;
	switch (spread) {
		case 1:
			offerAItemPrice = offer1ItemPrice;
			offerBItemPrice = offer2ItemPrice;
			offerCItemPrice = offer3ItemPrice;
			offerDItemPrice = offer4ItemPrice;
			break;
		case 2:
			offerAItemPrice = offer4ItemPrice;
			offerBItemPrice = offer3ItemPrice;
			offerCItemPrice = offer2ItemPrice;
			offerDItemPrice = offer1ItemPrice;
			break;
		case 3:
			offerAItemPrice = offer3ItemPrice;
			offerBItemPrice = offer1ItemPrice;
			offerCItemPrice = offer4ItemPrice;
			offerDItemPrice = offer2ItemPrice;
			break;
		case 4:
			offerAItemPrice = offer2ItemPrice;
			offerBItemPrice = offer4ItemPrice;
			offerCItemPrice = offer1ItemPrice;
			offerDItemPrice = offer3ItemPrice;
			break;
	}
	
	var offerAItemAmount = getRndInteger(2,5);
	var offerBItemAmount = getRndInteger(6,10);
	var offerCItemAmount = getRndInteger(12,18);
	var offerDItemAmount = getRndInteger(20,25);
	
	var ansstr = "Offer A, Offer B, Offer C, Offer D";
	if ( offerAItemPrice < offerBItemPrice && offerAItemPrice < offerCItemPrice && offerAItemPrice < offerDItemPrice) {
		ansstr = "Offer A, Offer B, Offer C, Offer D";
	}
	if ( offerBItemPrice < offerAItemPrice && offerBItemPrice < offerCItemPrice && offerBItemPrice < offerDItemPrice) {
		ansstr = "Offer B, Offer A, Offer C, Offer D";
	}
	if ( offerCItemPrice < offerBItemPrice && offerCItemPrice < offerAItemPrice && offerCItemPrice < offerDItemPrice) {
		ansstr = "Offer C, Offer A, Offer B, Offer D";
	}
	if ( offerDItemPrice < offerAItemPrice && offerDItemPrice < offerBItemPrice && offerDItemPrice < offerCItemPrice) {
		ansstr = "Offer D, Offer A, Offer B, Offer C";
	}
	
	var offerACost = Number(Number(offerAItemPrice)*(Number(offerAItemAmount))).toFixed(2);
	var offerBCost = Number(Number(offerBItemPrice)*(Number(offerBItemAmount))).toFixed(2);
	var offerCCost = Number(Number(offerCItemPrice)*(Number(offerCItemAmount))).toFixed(2);
	var offerDCost = Number(Number(offerDItemPrice)*(Number(offerDItemAmount))).toFixed(2);
	
	retstr += "<br><br>Offer A : " + offerAItemAmount + " items for £" + offerACost;
	retstr += "<br><br>Offer B : " + offerBItemAmount + " items for £" + offerBCost;
	retstr += "<br><br>Offer C : " + offerCItemAmount + " items for £" + offerCCost;
	retstr += "<br><br>Offer D : " + offerDItemAmount + " items for £" + offerDCost;
	
    retstr += "<br><br>Which of these offers is the best value for money?," + ansstr;
	
	document.getElementById("helptext").innerHTML = 'The trick with questions of this type is to work out the price for one item for each offer.\
													<br><br>Just divide the total price or each offer by the number of items.\
													<br><br>Compare each single item price against the others. The offer with the lowest single item price is the best value for money.\
													<br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.\
													';
    
    return retstr;
}

function getAddMoney27() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is driving home for Christmas in the car."
	
	var drivefor = ["2 hours", "90 minutes", "180 minutes", "2 and a half hours", "180 minutes", "3 hours", "3 and a quarter hours", "120 minutes", "3 and a half hours"];
	var averagemph = ["50 mph", "40 mph", "60 mph", "65 mph"];
	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " starts the journey at " + starts[getRndInteger(0,starts.length-1)] + " and drives for " + drivefor[getRndInteger(0,drivefor.length-1)] + " at an average speed of " + averagemph[getRndInteger(0,averagemph.length-1)] ;
	retstr += "<br><br>How far does " + thisname + " drive?";

	return retstr;
}

function getAddMoney26() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " wants to lay out rows of seats in a hall. The number of seats needs to be known so that they can be ordered."
	
	var length = Number(getRndInteger(15,25));
	var width = Number(getRndInteger(10,15));
	var rowdeep = Number(getRndInteger(14,17)*10);
	var chairwide = Number(getRndInteger(5,7)*10)
	
	retstr += "<br><br>The area is in the shape of a rectangle " + length + " metres long and " + width + " metres wide";
	retstr += "<br><br>Each row of chairs should be at least " + rowdeep + "cm deep to allow for the chair and the legroom for a person to sit comfortably.";
	
	retstr += "<br><br>Each chair is " + chairwide + "cm wide and chairs can fit side by side with no gaps in between.";
	
	document.getElementById("helptext").innerHTML = 'This is a classic type of functional skills question where you need to work out how many things you can fit in a given space.\
													<br><br>Use division to work out how many whole rows of chairs you can fit in the hall\
													<br><br>EG. If when you divide you get 12.45 rows - that means you can only fit 12 rows\
													<br><br>Be careful of dividing different units - you need to do a conversion first\
													<br><br>Work out how many chairs can fit in each row\
													<br><br><u>Again, watch out for units!</u>\
													<br><br>Once you know how many rows and how many chairs in each row, use multiplication to work out how many chairs\
													<br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.\
													<br><br><u>Remember</u> watch out for the units and you can only fit chairs in whole rows and people can only sit on whole chairs!';
	
	
	var numrows = ((Number(length)/(Number(rowdeep)/100))-0.49).toFixed(0);
	
	var numchairsinrow = ((Number(width)/(Number(chairwide)/100))-0.49).toFixed(0);
	
	var ans = numrows * numchairsinrow;
	
	retstr += "<br><br>How many chairs can " + thisname + " fit in the hall?," + Number(ans) + "," + Number(Number(ans)+1) + "," + Number(Number(ans)-1) + "," + Number(Number(ans)+2);
	
	return retstr;
}

function getAddMoney25() {
	//wbox = "";
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " needs to put wire fencing around each side of a field."
	
	var length = Number(getRndInteger(10,20)*2);
	var width = Number(getRndInteger(5,8)*2);
	var opening = Number(getRndInteger(3,5));
	var fencecost = getRndInteger(20,35);
	
	var fieldperim = (length + width)*2;
	var fencelength = fieldperim - opening;
	
	var ans = fencelength * fencecost;
	
	retstr += "<br><br>The field is in the shape of a rectangle " + length + " metres long and " + width + " metres wide";
	
	retstr += "<br><br>One side of the field has an opening " + opening + " metres wide that will not need fencing.";
	
	retstr += "<br><br>Wire fencing costs £" + fencecost + " per metre";
	
	retstr += "<br><br>How much will it cost " + thisname + " to put fencing around the field?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'For this type of question you need to use the PERIMETER\
													<br><br>Remember: Perimeter is the distance <u>all the way round the space.</u>\
													<br><br>Do not forget to take ways any gaps from the perimeter\
													<br><br>Once you know how many metres the perimeter is you can then use this to work out the total cost using the per cost fencing price.\
													<br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
	return retstr;
}

function getAddMoney24() {
	//wbox = "";
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " works for a building company."
	retstr = "A company uses the rule below to work out the cost of concrete to charge their customers:";
	
	var divisor = Number(getRndInteger(3,6) * 300).toFixed(0) + 5;
	var multiplier = Number(getRndInteger(4,6) * 30).toFixed(0) + 3;
	
	
	retstr += '\
	<br><br><div style=\"font-size:12px;height:30px;position:relative;float:left;width:35px;border:black;border:solid;padding:5px;\">Area in m&sup2;</div><div style=\"margin-left:5px;padding;10px;font-size:20px;position:relative;float:left;width:auto;\">&#8594;</div>\
	<div style=\"font-size:12px;position:relative;float:left;width:45px;height:30px;margin-left:5px;border:black;border:solid;padding:5px;\">X depth in mm</div></div><div style=\"margin-left:5px;padding;10px;font-size:20px;position:relative;float:left;width:auto;\">&#8594;</div>\
	<div style=\"font-size:12px;position:relative;float:left;width:35px;height:30px;margin-left:5px;border:black;border:solid;padding:5px;\">&#247; ' + divisor + '</div></div><div style=\"margin-left:5px;padding;10px;font-size:20px;position:relative;float:left;width:auto;\">&#8594;</div>\
	<div style=\"height:40px;font-size:12px;position:relative;float:left;height:30px;width:35px;margin-left:5px;border:black;border:solid;padding:5px;\">X ' + multiplier + '</div>\
	';
	
	var pathwidth = Number(getRndInteger(5,8)*0.2).toFixed(1);
	var pathlength = Number(getRndInteger(1,3)*50).toFixed(0)
	var pathdepth = Number(getRndInteger(10,18)*5).toFixed(0);
	
	retstr += "<br><br><br><br>A customer wants to buy concrete for a pathway that is " + pathlength + " metres long and " + pathwidth + " m wide";
	retstr += "<br><br>The concrete needs to be " + pathdepth + " mm deep.";
	
	var ans = (pathwidth*pathlength)*pathdepth/divisor*multiplier;
	
	retstr += "<br><br>Using the rule calculate how much the company should charge the customer for the concrete.,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'This type of question is an example of a function machine - or formula\
													<br><br>Pick the starting value and follow the steps in the boxes to calculate the result form left to right following the instructions in each box</u>\
													<br><br>For this question you need to work out the AREA for the starting point.\
													<br><br>Remember: AREA is <u>length times by width</u>\
													<br><br>feed the area value in to the formula and follow the multiply and divide steps to get the answer.\
													<br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
	return retstr;
	
}


function getAddMoney23() {
	//wbox = "";
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " sees this offer in a supermarket."
	retstr += "<br><br>5% off your annual shopping bill with a loyalty card.";
	
	var weekly = Number(70 + ((getRndInteger(1,5)*5) - (getRndInteger(1,5)*5)));
	weekly = weekly.toFixed(2);
	
	retstr += "<br><br>" + thisname + " spends £" + weekly + " on the weekly shopping bill on average.";
	
	ans = (weekly*52)*0.05;
	ans2 = (weekly*52)*0.06;
	ans3 = (weekly*52)*0.04;
	ans4 = (weekly*52)*0.07;
	
	ans = ans.toFixed(2);
	ans2 = ans2.toFixed(2);
	ans3 = ans3.toFixed(2);
	ans4 = ans4.toFixed(2);
	
	retstr += "<br><br>How much could " + thisname + " save over a whole year using the loyalty card?,£" + ans + ",£" + ans2 + ",£" + ans3 + ",£" + ans4;
	
	document.getElementById("helptext").innerHTML = 'Use the average weekly shopping bill and the number of weeks in a year to find the total cost for the year.\
								<br><br>Then work out the percentage amount of the total cost for the year\
														<br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
	
	return retstr;
}

function getAddMoney22() {
	//wbox = "";
	wboxalt = 350;
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var hallHire = Number(270 + ((getRndInteger(2,15)*5) - (getRndInteger(2,15)*5) ) ).toFixed(0);
	var numEquip = getRndInteger(4,10);
	var equipCost = Number(50 + ((getRndInteger(2,15)*2) - (getRndInteger(2,15)*2) ) ).toFixed(0);
	var totEquip = (numEquip * equipCost).toFixed(0);
	var medalCost = Number(25 + ((getRndInteger(2,8)) - (getRndInteger(2,8)) ) ).toFixed(0);
	
	var retstr = thisname + " is organising a sports competition."
	retstr += "The information below shows the costs of organising the competition:"
	retstr += "<br><br>Sports hall hire £" + hallHire;
	retstr += "<br>Equipment hire " + numEquip + " sets at £" + equipCost + " each";
	retstr += "<br>Medals and prizes £" + medalCost;
	
	var sponserMoney = Number(125 + ((getRndInteger(2,15)*2) - (getRndInteger(2,15)*2) ) ).toFixed();
	var numTeams = getRndInteger(10,15);
	var teamFee = Number(125 + ((getRndInteger(2,10)*1) - (getRndInteger(2,10)*1) ) ).toFixed(0);
	
	retstr += "<br><br>The information below shows the income generated by the competition:"
	retstr += "<br><br>Sponsorship money £" + sponserMoney;
	retstr += "<br>" + numTeams + " teams each pay £" + teamFee;
	
	var moneySpent = Number(hallHire) + (Number(numEquip) * Number(equipCost)) + Number(medalCost);
	var moneyMade = Number(sponserMoney) + (Number(numTeams) * Number(teamFee))
	var ans = moneyMade - moneySpent;
	
	retstr += "<br><br>How much profit did the competition make?,£" + Number(ans) + ",£" + Number(ans*1.05).toFixed(0) + ",£" + moneyMade + ",£" + Number(ans*0.95).toFixed(0);
	
	document.getElementById("helptext").innerHTML = 'Remember: Profit is:<br><br>(money made) - (money spent)\
											<br><br>To work out money spent you need to add up the items needed to run the sports event.\
											<br><br>Watch out for multiple items such as the equipment hire (you need to multiply the number hired by the individual hire cost)\
											<br><br>Also be careful of mulitple items in the money made section (such as the team entry fees and the number of teams)\
											<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';															;
	
	return retstr;
}

var timings = ["25 minutes", "75 minutes", "100 minutes", "1 hour and 15 minutes", "1 hour and 20 minutes", "1 hour and 45 minutes", "30 minutes", "15 minutes", "45 minutes", "half an hour", "three quarters of an hour", "10 minutes", "one hour", "90 minutes", "120 minutes", "quarter of an hour", "20 minutes", "1 hour", "2 hours"];
var starts = ["9:15 am", "9:30 am", "9:45 am", "10:00 am", "10:30 am", "10:45 am", "11:00 am", "11:15 am", "11:30 am", "11:45 am"];


function getAddMoney21() {
	wbox = "";
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " needs to plan out some activities for a local youth group open day.<br>&nbsp;&nbsp;&nbsp;&nbsp;The activities and how long each activity lasts is shown below:<br>"
	
	var howmany = getRndInteger(2,4);
	
	var acts = ["One", "Two", "Three", "Four"];
	for (iii = 0; iii < howmany; iii++) {
		retstr += "<br><br>Activity " + acts[iii] + " takes " + timings[getRndInteger(0,timings.length-1)];
	}
	
	var breaks = ["15 minutes", "30 minutes"];
	retstr += "<br><br>Each activity will need a break of " + breaks[getRndInteger(0,breaks.length-1)] + " before starting the next activity.";
	
	
	retstr += "<br><br>The first activity will start at " + starts[getRndInteger(0,starts.length-1)];
	
	retstr += "<br><br>Create " + thisname + " a time plan in the space below.";
	retstr += "<br><br>Your plan must show:";
	retstr += "<br>- The activities in the order they take place.";
	retstr += "<br>- The start and end times for each activity.";
	
	retstr += "<br><br>Draw your plan below:<br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
	workingstr = "";
	return retstr;
	
}


//
function getAddMoney20() {
	wbox = "";
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is planning to put gravel down on a driveway and path.";
	
	var path = [1.5, 1.75, 2, 2.25, 2.5];
	
	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;The driveway is a rectangle " + Number(8 + getRndInteger(2,8)) + "m long and " + Number(2 + getRndInteger(1,2)) + "m wide";
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;The path is a long rectangle " + Number(12 + getRndInteger(5,10)) + "m long and " + path[getRndInteger(0,path.length-1)] + "m wide";
	
	var cost = ["3.00", "3.25", "3.50", "3.75", "4.00", "4.25", "4.50"];
	var cover = [2.5, 3, 3.25, 3.5, 3.75, 4.00, 4.25, 4.50];
	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Bags of gravel cost £" + cost[getRndInteger(0,cost.length-1)] + " each and cover " + cost[getRndInteger(0,cost.length-1)] + " square metres per bag";
	
	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;a) How much will it cost to put down gravel on the driveway and path?<br><br><br><br><br><br><br><br>";
	
	return retstr;
	
}

function getAddMoney19() {
	return getBestBuys1();
}

function getAddMoney182() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " found out the heights of office blocks nearby";
	
	var tallest = 0;
	var shortest = 999;
	
	var height1 = getRndInteger(15,55);
	
	var height2 = getRndInteger(12,50);
	var height3 = getRndInteger(12,40);
	var height4 = getRndInteger(20,45);
	var height5 = getRndInteger(30,60);
	var height6 = getRndInteger(10,25);
	
		if ( height1 > tallest ) tallest = height1;
	if (height1 < shortest ) shortest = height1;
	
		if ( height2 > tallest ) tallest = height2;
	if (height2 < shortest ) shortest = height2;
	
		if ( height3 > tallest ) tallest = height3;
	if (height3 < shortest ) shortest = height3;
	
		if ( height4 > tallest ) tallest = height4;
	if (height4 < shortest ) shortest = height4;
	
		if ( height5 > tallest ) tallest = height5;
	if (height5 < shortest ) shortest = height5;
	
		if ( height6 > tallest ) tallest = height6;
	if (height6 < shortest ) shortest = height6;
	
	retstr += "<br><br>The blocks had the following heights:";
	
	retstr += "<br><br>Block 1: " + height1 + "m";
	retstr += "<br>Block 2: " + height2 + "m";
	retstr += "<br>Block 3: " + height3 + "m";
	retstr += "<br>Block 4: " + height4 + "m";
	retstr += "<br>Block 5: " + height5 + "m";
	retstr += "<br>Block 6: " + height6 + "m";
	
	var ans = tallest - shortest;
	
	document.getElementById("helptext").innerHTML = 'Remember: Range is the biggest value take away the smallest';
	
	retstr += "<br><br>What is the range of the heights of the office blocks?," + Number(ans) + "m," + Number(Number(ans)+5) + "m," + Number(Number(ans)-5) + "m," + Number(Number(ans)+10) + "m";
	
	return retstr;
}

function getAddMoney18() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " planted some shrubs in the garden.";
	
	var height1 = getRndInteger(8,20);
	var height2 = getRndInteger(12,35);
	var height3 = getRndInteger(6,25);
	var height4 = getRndInteger(15,30);
	var height5 = getRndInteger(10,27);
	var height6 = getRndInteger(9,15);
	
	retstr += "<br><br>After 6 months the plants had grown to the following heights:";
	
	retstr += "<br><br>Shrub 1: " + height1 + "cm";
	retstr += "<br>Shrub 2: " + height2 + "cm";
	retstr += "<br>Shrub 3: " + height3 + "cm";
	retstr += "<br>Shrub 4: " + height4 + "cm";
	retstr += "<br>Shrub 5: " + height5 + "cm";
	retstr += "<br>Shrub 6: " + height6 + "cm";
	
	var ans = ((height1 + height2 + height3 + height4 + height5 + height6)/6).toFixed(0);
	
	document.getElementById("helptext").innerHTML = 'Remember: to calculate the MEAN AVERAGE add up all the values and divide by how many values there are';
	
	retstr += "<br><br>What is the mean average height of the shrubs to the nearest whole CM?," + Number(ans) + "cm," + Number(Number(ans)+5) + "cm," + Number(Number(ans)-5) + "cm," + Number(Number(ans)+10) + "cm";
	
	return retstr;
}

function getAddMoney17() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var width = 5 + getRndInteger(1,5);
	var length = 10 + getRndInteger(1,10);
	
	var retstr = "" + thisname + " wants to sow grass seeds on a lawn.";
	
	retstr += "<br><br>The rectangular lawn is " + width + "m wide and " + length + "m long";
	
	var lawnarea = width * length;
	
	var coverage = getRndInteger(2,5);
	retstr += "<br><br>A bag of grass seed can cover " + coverage + " square metres of lawn";
	
	var costs = [2.50, 3.00, 3.25, 3.50, 3.75, 4.00, 4.25];
	
	var numbags = ((lawnarea/coverage)+0.49).toFixed(0);
	
	var bagcost = costs[getRndInteger(0,costs.length-1)].toFixed(2);
	
	retstr += "<br><br>Bags of grass seed cost £" + bagcost;
	
	var ans = (bagcost * numbags).toFixed(2);
	
	retstr += "<br><br>How much will it cost " + thisname + " to sow seeds on the lawn?,£" + ans + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
	
	document.getElementById("helptext").innerHTML = 'Remember: Area is:<br><br>width x length\
											<br><br>Stage 1: You are told how many square metres a bag of grass seed covers so first you need to find the AREA of the lawn.\
											<br><br>Stage 2: Find how many bags of seed you need by dividing the AREA of the lawn by how much a bag of seed will cover.\
											<br><br>Remember that you can not buy fractions of bags of seed so if you get something like 15.25 bags of seed then that means you will need to buy 16 bags of seed.\
											<br><br>Stage 3: Multiply how many bags you need to buy by the cost of a bag.\
											<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';				
	
	return retstr;
}

function getAddMoney16() {
	var startsat = ["8:30 am", "8:45 am", "9:00 am", "9:15 am", "9:30 am", "10:14 am", "10:30 am", "10:45 am", "11:30 am", "11:45 am"];
	var worksfor = ["2 hours", "90 minutes", "180 minutes", "2 and a half hours", "3 and a quarter hours", "120 minutes"];
	var breaksfor = ["30 minutes", "half an hour", "three quarters of an hour", "one hour", "25 minutes", "6o minutes"];
	var worksfor2 = ["2 hours", "90 minutes", "180 minutes", "2 and a half hours", "3 and a quarter hours", "120 minutes"];
	var breaksfor2 = ["30 minutes", "half an hour", "three quarters of an hour", "one hour", "25 minutes", "6o minutes"];
	var worksfor3 = ["2 hours", "90 minutes", "180 minutes", "2 and a half hours", "3 and a quarter hours", "120 minutes"];
	
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	
	var retstr = "&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " starts a task at " + startsat[getRndInteger(0, startsat.length-1)];
	
	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " works on the task for " + worksfor[getRndInteger(0, worksfor.length-1)];
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;A break is then taken for " + breaksfor[getRndInteger(0, breaksfor.length-1)];
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " then works on the task for another " + worksfor2[getRndInteger(0, worksfor2.length-1)];
	
	
	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;At what time does " + thisname + " finish the task?<br>&nbsp;&nbsp;&nbsp;&nbsp;Write your answer in both 12 and 24 hour clock formats.";
	
	return retstr;
}	

function getAddMoney15() {

	var people = 4 + (getRndInteger(1,3) * 2);
	
	var retstr = "The recipe below shows how to make " + people + " scones:";
	
	var flouramount = Number(30 * people);
	retstr += "<br><br>" + flouramount + "g of self-raising flour";
	
	retstr += "<br>1 teaspoon of baking powder";
	
	var butteramount = Number(10 * people);
	retstr += "<br>" + butteramount + "g of butter";
	
	var milkamount = Number(20 * people);
	retstr += "<br>" + milkamount + "ml of milk";
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var make = people + (getRndInteger(3,6) * 2);
	
	retstr += "<br><br>" + thisname + " wants to make " + make + " scones";
	
	var cookarr = ["grams of flour", "grams of butter", "ml of milk"];
	var valarr = [flouramount,butteramount,milkamount];
	var unitarrx = ["g", "g", "ml"];
	
	var cookidx = getRndInteger(0,cookarr.length-1);
	
	var ans = valarr[cookidx]/people * make;
	
	retstr += "<br><br>How many " + cookarr[cookidx] + " will " + thisname + " need?," + ans + unitarrx[cookidx] + "," + (ans*1.1).toFixed(0) +  unitarrx[cookidx] + "," + (ans*0.9).toFixed(0) + unitarrx[cookidx] + "," + (ans*1.2).toFixed(0) + unitarrx[cookidx];
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Divide the item the question asks about down by the number of scones the recipe is for - this will get you how much you need for 1 scone.\
											<br><br>EG. If 120g of flour is for 4 scones then 120 div by 4 is the amount for 1 scone.\
											<br><br>EG. 30g of flour is needed for 1 scone in the above example.\
											<br><br>Stage 2: Now multiply the amount for 1 scone by the number of people the question asks for.\
											<br><br>Remember to make sure you do the calculation on the item the question is asking for - the item might be milk or butter.\
											<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';	
	return retstr;
}	

function getAddMoney14() {
	var itemarr = ["boxes of chocolates", "hats", "DVDs", "T-Shirts"];
	
	var itemidx = getRndInteger(0, itemarr.length-1);
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var denom = getRndInteger(3,5);
	
	var amount = denom * getRndInteger(5,8);
	
	var cost = getRndInteger(9,15);
	
	var sale1 = Number(cost * 2).toFixed(0);
	
	var retstr = thisname + " buys " + amount + " " + itemarr[itemidx] + " for £" + cost + " each.";
	
	var initialoutlay = (amount * cost).toFixed(2);
	
	retstr += "<br><br>The " + itemarr[itemidx] + " are put on sale for £" + sale1 + " each";
	
	var selling = getRndInteger(6,9) / 10;
	
	var sellsatfullprice = Number(amount*selling).toFixed(0);
	retstr += "<br><br>" + thisname + " sells " + sellsatfullprice + " of the " + itemarr[itemidx] + " for the full price."
	
	var fullpricemoneymade = sellsatfullprice * sale1;
	
	var amountleft = amount - sellsatfullprice;
	
	var finalprice = Number(cost - getRndInteger(2,4)).toFixed(0);
	
	var finalpricemoneymade = finalprice * amountleft;
	
	var ans = (finalpricemoneymade + fullpricemoneymade).toFixed(2) - initialoutlay;
	
	//var discount = getRndInteger(3,8) * 5;
	retstr += "<br><br>" + thisname + " sells the remaining " + itemarr[itemidx] + " for £" + finalprice;
	
	retstr += "<br><br>How much profit did " + thisname + " make selling all the " + itemarr[itemidx] + "?,£" + ans + ",£" + (ans*1.05).toFixed(0) + ",£" + (ans*0.95).toFixed(0) + ",£" + (ans*1.10).toFixed(0);
	
	document.getElementById("helptext").innerHTML = 'Stage 1: Work out how much is spent on all the items at first.\
											<br><br>Stage 2: Now work out how much money is made by selling the number of the items fo the full price.\
											<br><br>Stage 3: Now work out how much money is made by selling the remaining items at the reduced price.\
											<br><br>Stage 4: The money made by adding the Stage 2 and Stage 3 totals together is the total money made.\
											<br><br>Stage 5: Work out profit by taking the total from stage 4 and subtracting the total from Stage 1.\
											<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';	
	
	return retstr;
}

function getAddMoney13() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " is planning a build a brick wall in the garden";
	
	var length = getRndInteger(3,8);
	var height = (0.1 * getRndInteger(6,13)).toFixed(2);
	
	var area = Number(length) * Number(height);
	
	retstr += "<br><br>The wall will be " + length + "m long and " + height + "m high.";
	
	retstr += "<br><br>A builder tells " + thisname + " to use the following rule to calculate the number of bricks needed:";
	
	retstr += '\
	<br><br><div style=\"font-size:12px;height:30px;position:relative;float:left;width:60px;border:black;border:solid;padding:10px;\">Area of Wall in m&sup2;</div><div style=\"margin-left:5px;padding;10px;font-size:26px;position:relative;float:left;width:autox;\">&#8594;</div>\
	<div style=\"font-size:12px;position:relative;float:left;width:50px;height:30px;margin-left:5px;border:black;border:solid;padding:10px;\">X 10000</div></div><div style=\"margin-left:5px;padding;10px;font-size:26px;position:relative;float:left;width:autox;\">&#8594;</div>\
	<div style=\"height:40px;font-size:12px;position:relative;float:left;height:30px;width:40px;margin-left:5px;border:black;border:solid;padding:10px;\">&#247; 150</div>\
	';
	
	document.getElementById("helptext").innerHTML = 'This type of question is an example of a function machine - or formula\
													<br><br>Pick the starting value and follow the steps in the boxes to calculate the result form left to right following the instructions in each box</u>\
													<br><br>For this question you need to work out the AREA for the starting point.\
													<br><br>Remember: AREA is <u>length times by width</u>\
													<br><br>Feed the area value in to the formula and follow the multiply and divide steps to get the answer.\
													<br><br>Do not forget that you can not buy fractions of bricks!\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
	var ans = ((area * 10000 / 150)+0.49).toFixed(0);
	
	retstr += "<br><br><br><br><br>How many bricks does " + thisname + " need to build the wall?," + Number(ans) + "," + Number(Number(ans)+5) + "," + Number(Number(ans)-5) + "," + Number(Number(ans)+10);
	
	document.getElementById("helptext").innerHTML = 'Remember: AREA is length x height\
													<br><br>Follow the calculation stepts in the rule boxes using the AREA as the starting value.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';	
	
	return retstr;
	
}

function getAddMoney12() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " wants to tile a wall in the bathroom."
	
	var width = 300 + getRndInteger(5,10) * 15;
	var height = 210 + getRndInteger(4,8) * 5;
	
	retstr += "<br><br>The wall is " + width + "cm wide and " + height + "cm high";
	
	var area = Number(width) * Number(height) - (200*100);
	
	retstr += "<br><br>The wall has a door which is 2m high and 1m wide";
	
	retstr += "<br><br>The door does not need tiling";
	
	var tilew = getRndInteger(8,15);
	var tileh = tilew;
	
	var tilearea = Number(tilew) * Number(tileh);
	
	var numtiles = ((area/tilearea)+0.49).toFixed(0);
	
	var ans = ((Number(numtiles)/12+0.49)).toFixed(0);
	
	retstr += "<br><br>The wall tiles " + thisname + " likes are " + tileh + "cm X " + tilew + "cm";
	
	retstr += "<br><br>The wall tiles come in packs of 12";
	
	retstr += "<br><br>How many packs of tiles does " + thisname + " need to buy?," + Number(ans) + "," + Number(Number(ans)+1) + "," + Number(Number(ans)-1) + "," + Number(Number(ans)+2);
	
	document.getElementById("helptext").innerHTML = 'For this question you need to find the AREA of the wall.\
													<br><br>Remember: Area is HEIGHT x WIDTH\
													<br><br>Of course, the area to be tiled does not include the door - so remove the area of the door from the area of the wall.\
													<br><br>Now calculate the area of one tile and find out how many tiles fit into the wall area by dividing the wall area by the tile area.\
													<br><br>Watch out UNITS! You may need to convert the door dimensions to centimetres first.\
													<br><br>Do not forget that you can not buy fractions of tiles so round UP to the next whole tile.\
													<br><br>Now find out how many packs of tiles you need by dividing the rounded-up number of tiles by the pack size.\
													<br><br>Round UP the number of packs to the nearest whole pack.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
	return retstr;
}

function getAddMoney12L2() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " wants to tile a wall in the bathroom."
	
	var width = 300 + getRndInteger(5,10) * 15;
	var height = 210 + getRndInteger(4,8) * 5;
	
	retstr += "<br><br>The wall is " + width + "cm wide and " + height + "cm high";
	
	var area = Number(width) * Number(height) - (200*100);
	
	retstr += "<br><br>The wall has a door which is 2m high and 1m wide";
	
	retstr += "<br><br>The door does not need tiling";
	
	var tilew = getRndInteger(8,15);
	var tileh = tilew;
	
	var tilearea = Number(tilew) * Number(tileh);
	
	var numtiles = ((area/tilearea)+0.49).toFixed(0);
	
	var ans = ((Number(numtiles)/12+0.49)).toFixed(0);
	
	retstr += "<br><br>The wall tiles " + thisname + " likes are " + tileh*10 + "mm X " + tilew*10 + "mm";
	
	retstr += "<br><br>The wall tiles come in packs of 12";
	
	retstr += "<br><br>How many packs of tiles does " + thisname + " need to buy?," + Number(ans) + "," + Number(Number(ans)+1) + "," + Number(Number(ans)-1) + "," + Number(Number(ans)+2);
	
	document.getElementById("helptext").innerHTML = 'For this question you need to find the AREA of the wall.\
													<br><br>Remember: Area is HEIGHT x WIDTH\
													<br><br>Of course, the area to be tiled does not include the door - so remove the area of the door from the area of the wall.\
													<br><br>Now calculate the area of one tile and find out how many tiles fit into the wall area by dividing the wall area by the tile area.\
													<br><br>Watch out UNITS! You may need to convert the door dimensions to centimetres first.\
													<br><br>Do not forget that you can not buy fractions of tiles so round UP to the next whole tile.\
													<br><br>Now find out how many packs of tiles you need by dividing the rounded-up number of tiles by the pack size.\
													<br><br>Round UP the number of packs to the nearest whole pack.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
	return retstr;
}

function getAddMoney1211() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var retstr = thisname + " wants to tile a wall in the bathroom."
	
	var width = 300 + getRndInteger(5,10) * 15;
	var height = 210 + getRndInteger(4,8) * 5;
	
	retstr += "<br><br>The wall is " + width + "cm wide and " + height + "cm high";
	
	var area = Number(width) * Number(height) - (200*100);
	
	retstr += "<br><br>The wall has a door which is 2m high and 1m wide";
	
	retstr += "<br><br>The door does not need tiling";
	
	var tilew = getRndInteger(8,15);
	var tileh = tilew;
	
	var tilearea = Number(tilew) * Number(tileh);
	
	var numtiles = ((area/tilearea)+0.49).toFixed(0);
	
	var ans = ((Number(numtiles)/12+0.49)).toFixed(0);
	
	retstr += "<br><br>The wall tiles " + thisname + " likes are " + tileh + "cm X " + tilew + "cm";
	
	retstr += "<br><br>The wall tiles come in packs of 12";
	
	retstr += "<br><br>How many packs of tiles does " + thisname + " need to buy?," + Number(ans) + "," + Number(Number(ans)+1) + "," + Number(Number(ans)-1) + "," + Number(Number(ans)+2);
	
	document.getElementById("helptext").innerHTML = 'For this question you need to find the AREA of the wall.\
													<br><br>Remember: Area is HEIGHT x WIDTH\
													<br><br>Of course, the area to be tiled does not include the door - so remove the area of the door from the area of the wall.\
													<br><br>Now calculate the area of one tile and find out how many tiles fit into the wall area by dividing the wall area by the tile area.\
													<br><br>Watch out UNITS! You may need to convert the door dimensions to centimetres first.\
													<br><br>Do not forget that you can not buy fractions of tiles so round UP to the next whole tile.\
													<br><br>Now find out how many packs of tiles you need by dividing the rounded-up number of tiles by the pack size.\
													<br><br>Round UP the number of packs to the nearest whole pack.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
	return retstr;
}


function getAddMoney11() {
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	var services = ["Private Party", "Children's Party", "Community Meeting"];
	
	var retstr = thisname + " finds this information about booking a local village hall:"
	
	var privparty = Number(70 + (getRndInteger(1,5)*5));
	var childparty = Number(35 + (getRndInteger(1,5)*5));
	var community = Number(40 + (getRndInteger(1,5)*3));
	var hallstage = Number(30 + (getRndInteger(1,7)*4));
	var lighting = Number(25 + (getRndInteger(1,7)*3));
	var disco = Number(150 + (getRndInteger(1,10)*5));
	var drinks = Number(200 + (getRndInteger(1,10)*5));
	
	retstr += "<br><br><b>Booking Type</b>&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp<b>Cost for 1 day</b>";
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;Private Party&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp£" + privparty;
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;Children's Party&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp£" + childparty;
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;Community Meeting&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp£" + community;
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;Hall and Stage&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp£" + hallstage;
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;Lighting and Sound&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp£" + lighting;
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;Disco&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;£" + disco;
	retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;Drinks and Food&nbsp&nbsp&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp£" + drinks;
	
	var partytype = getRndInteger(0,services.length-1);
	
	switch (partytype) {
		case 0: 
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " needs to book a " + services[partytype] + " and also needs:";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Hall and Stage";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Disco";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Lighting and Sound";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Drinks and Food";
			
			var totcost = hallstage + disco + lighting + drinks;
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " thinks £" + Number(totcost*0.90).toFixed(0) + " will be enough. Is this correct?";
			
			break;
		case 1:
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " needs to book a " + services[partytype] + " and also needs:";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Hall and Stage";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Disco";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Drinks and Food";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How much will the event cost " + thisname;
			break;
		case 2:
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + thisname + " needs to book a " + services[partytype] + " and also needs:";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Hall and Stage";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + "Drinks and Food";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How much will the event cost " + thisname;
			break;
	}
	
	
	return retstr;
	
	
}

function getAddMoney10() {
	var teamAWins = getRndInteger(4,10);
	var teamBWins = getRndInteger(4,10);
	var teamCWins = getRndInteger(4,10);
	
	var teamADraws = getRndInteger(5,10);
	var teamBDraws = getRndInteger(5,10);
	var teamCDraws = getRndInteger(5,10);
	
	var teamApts = (teamAWins * 3)+teamADraws;
	var teamBpts = (teamBWins * 3)+teamBDraws;
	var teamCpts = (teamCWins * 3)+teamCDraws;
	
	var retstr = "Three teams enter a sports competition: Team A&#44; Team B and Team C";
	retstr += "<br><br>Teams score 3 points for a win and 1 point for a draw.";
	
	retstr += "<br><br>Team A win " + teamAWins + " games and draw " + teamADraws + " of their matches";
	retstr += "<br>Team B win " + teamBWins + " games and draw " + teamBDraws + " of their matches";   
	retstr += "<br>Team C win " + teamCWins + " games and draw " + teamCDraws + " of their matches";

	var vv = getRndInteger(1,5);
	
	switch (vv) {
		case 1:
			retstr += "<br><br>In what order will the teams finish the competition?";
			break;
		case 2:
			retstr += "<br><br>By what margin of points does the higest placed team beat the lowest placed team?";	
			break;
		case 3:
			retstr += "<br><br>Which of the three teams gets the most points?";	
			break;
		case 4:
			retstr += "<br><br>By what margin of points does the higher team beat the lower team?";
			break;
		case 5:
			var thisname = personnames[getRndInteger(0, personnames.length-1)];
			retstr += "<br><br>" + thisname + " thinks that the total points scored by all three teams is " + Number(teamApts + teamBpts + teamCpts + getRndInteger(5,8) - getRndInteger(5,8)) + ". Is " + thisname + " correct?";
			break;
	}
	
	return retstr;
	
}

function getAddMoney9() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    carcost = getRndInteger(5,10)*1000;
    deposit = (carcost/10)*getRndInteger(2,3);
	payments = getRndInteger(1,4) * 12;
	
    monthly = ((carcost - deposit)/payments)*1.15;
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = thisname + " is buying a car. This cost of the car is £" + carcost;
	
	retstr += "<br><br>The sales person says " + thisname + " can pay the full cash all at once or use a payment plan."
	retstr += "<br><br>The payment plan needs a deposit of £" + deposit + " followed by payments of £" + monthly.toFixed(0) + " for " + payments + " months."
	
	var vv = getRndInteger(1,100);
	if ( vv > 66 ) {
		retstr += "<br><br>How much more will " + thisname + " need to pay if the payment plan is chosen rather than paying at all at once?";
	}
	else if ( vv > 33 ) {
		retstr += "<br><br>Which is the cheapest way of paying for the car? (make sure you show clearly how you get to your answer)";
	}
	else {
		retstr += "<br><br>" + thisname + " thinks that the payment plan will cost £" + ((monthly*1.12)*payments).toFixed(0) + " in total. Is this correct? (make sure you show clearly how you get to your answer)";
	}
    
    return retstr;
    
}

function getAddMoney8() {
	var adult = "";
    var child = "";
    var seniors = "";
    var family = "";
    
    useCalc = true;
    
    adult = getRndInteger(10,13) + "." + getRndInteger(3,5)*10;
    child = getRndInteger(5,8) + "." + getRndInteger(4,8)*10;
    seniors = getRndInteger(6,9) + "." + getRndInteger(7,12)*5;
    family = Number(adult)*1.8 + Number(child)*1.7;
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = thisname + " is taking the family to see a popular attraction. The ticket prices are shown in the table below:";
    
    retstr += "<br><br>Adult: £" + adult;
    retstr += "<br>Child: £" + child;
    retstr += "<br>Seniors and Students: £" + seniors;
    retstr += "<br>Family (2 adults 2 children): £" + family.toFixed(0);
    
    retstr += "<br><br>" + thisname + " needs tickets for 2 adults&#44; " + getRndInteger(3,4) + " children and one senior. <br><br>Using the price list&#44; what is the cheapest entry cost?";
    
    return retstr;
}

function getAddMoney7L2() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    operandA = getRndInteger(2,4);
    operandB = getRndInteger(1,2) + "." + getRndInteger(1,8)*10;
    operandC = getRndInteger(7,12);
    
    var retstr = "A taxi has a one-off charge of £" + operandA + " plus £" + operandB + " per mile. ";
	
	var perc = 20 + (5*getRndInteger(1,9));
	retstr += "<br><br>The taxi also charges " + perc + "% more for journeys after midnight";
	
	var ans = Number(operandA) + (Number(operandB) * Number(operandC));
	ans = ans + (ans*perc/100);
	
	retstr += "<br><br>How much will a journey of " + operandC + " miles cost when taken at 01:30?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
   
	document.getElementById("helptext").innerHTML = 'Follow the formula.\
													<br><br><br>Stage 1: Multiply the per mile cost by the cost per mile.\
													<br><br><br>Stage 2: Add the one-off charge to the total from stage 1.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
   
    return retstr;
    
}

function getAddMoney7() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    operandA = getRndInteger(2,4);
    operandB = getRndInteger(1,2) + "." + getRndInteger(1,8)*10;
    operandC = getRndInteger(7,12);
	
	var ans = Number(operandA) + (Number(operandB) * Number(operandC));
    
    var retstr = "A taxi has a one-off charge of £" + operandA + " plus £" + operandB + " per mile. <br><br>How much will a journey of " + operandC + " miles cost?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
   
	document.getElementById("helptext").innerHTML = 'Follow the formula.\
													<br><br><br>Stage 1: Multiply the per mile cost by the cost per mile.\
													<br><br><br>Stage 2: Add the one-off charge to the total from stage 1.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
   
    return retstr;
    
}

function getAddMoney6() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    
    operandA = getRndInteger(18,22);
    operandB = getRndInteger(3,6);
    operandC = getRndInteger(35,45);
	
	var mmm = getRndInteger(2,4)*6;
	
	var ans1 = Number(operandA)*Number(operandB);
	var mleft = Number(mmm) - Number(operandB);
	var ans2 = Number(mleft)*Number(operandC);
	
	var ans = ans1 + ans2;
    
    var retstr = "A broadband deal is £" + operandA + " per month for " + operandB + " months.<br><br>Then it costs £" + operandC + " per month after that."
    
    retstr += "<br><br>How much will " + mmm + " months broadband cost?,£" + ans.toFixed(0) + ",£" + (ans*1.05).toFixed(0) + ",£" + (ans*0.95).toFixed(0) + ",£" + (ans*1.10).toFixed(0);
    
	document.getElementById("helptext").innerHTML = 'Follow the formula.\
													<br><br><br>Stage 1: Multiply the per month cost by number of initial months in the offer.\
													<br><br><br>Stage 2: Subtract the initial months amount from the number of months the question is asking for.\
													<br><br><br>Stage 3: Multiply the number of months found in Stage 2 by the full monthly cost.\
													<br><br><br>Stage 4: Add the costs found in Stage 1 and Stage 3 together.\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
    return retstr;
    
}

function getAddMoney6L2() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    
    operandA = getRndInteger(18,22);
    operandB = getRndInteger(3,6);
    operandC = getRndInteger(35,45);
	
	var mmm = getRndInteger(2,4)*6;
	
	var ans1 = Number(operandA)*Number(operandB);
	var mleft = 12 - Number(operandB);
	var ans2 = Number(mleft)*Number(operandC);
	
	var ans = ans1 + ans2;
    
    var retstr = "A broadband deal is £" + operandA + " per month for " + operandB + " months.<br><br>Then it costs £" + operandC + " per month after that."
	
	var perc = getRndInteger(1,3)*5;
	
	var ans = (ans*2) + (ans*perc/100);
	
	retstr += "<br><br>At the end of 12 months the monthly cost increases by " + perc + "%";
    
    retstr += "<br><br>How much will the total cost be for the first two years of the contract?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    
	document.getElementById("helptext").innerHTML = 'Follow the formula.\
													<br><br><br>Stage 1: Multiply the per month cost by number of initial months in the offer.\
													<br><br><br>Stage 2: Subtract the initial months amount from the number of months the question is asking for.\
													<br><br><br>Stage 3: Multiply the number of months found in Stage 2 by the full monthly cost.\
													<br><br><br>Stage 4: Add the costs found in Stage 1 and Stage 3 together to find the cost of the first year.\
													<br><br><br>Stage 5: Add the cost of the second year (after increasing by the given %)\
													<br><br><br>Check if your answer matches one of the answer buttons.\
													<br><br>If not, check your calculations again\
													<br><br>Always use paper to jot your working out down as you go.';
	
    return retstr;
    
}


function getAddMoney5() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    operandA = getRndInteger(50,150) + "." + getRndInteger(10,95);
    operandB = getRndInteger(10,30) + "." + getRndInteger(10,95);
    operandC = getRndInteger(30,60) + "." + getRndInteger(10,95);
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = thisname + " earned £" + operandA + " from a part time job";
	
	var ans = Number(operandA) - Number(operandB) + Number(operandC);
    
    retstr += "<br><br>" + thisname + " spent £" + operandB + " at the weekend.";
    retstr += "<br><br>On Monday £" + operandC + " is received by " + thisname + " from a friend.";
    retstr += "<br><br>How much does " + thisname + " have now?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    
    return retstr;
    
}

function getAddMoney5L2() {
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    operandA = getRndInteger(50,150) + "." + getRndInteger(10,95);
    operandB = getRndInteger(10,30) + "." + getRndInteger(10,95);
    operandC = getRndInteger(30,60) + "." + getRndInteger(10,95);
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = thisname + " earned £" + operandA + " from a part time job";
	
	var ans = Number(operandA) - Number(operandB) + Number(operandC);
    
	var perc = 40 + (5*getRndInteger(1,7));
	var loan = perc*getRndInteger(5,10);
	
    retstr += "<br><br>- " + thisname + " spent £" + operandB + " at the weekend.";
    retstr += "<br><br>- On Monday £" + operandC + " is received by " + thisname + " from a friend.";
	retstr += "<br><br>- On Wednesday a friend pays back " + perc + "% of the £" + loan + " they borrowed from " + thisname;
	
	var ans = ans + (perc/100)*loan;
	
    retstr += "<br><br>How much does " + thisname + " have now?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    
    return retstr;
    
}


function getAddMoney4() {
	var operandA = "";
    
    useCalc = true;
    
    operandA = getRndInteger(6,8) + "." + getRndInteger(30,95);
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = thisname + " earns £" + operandA + " per hour";
    
	var wk1 = getRndInteger(16,35);
	var wk2 = getRndInteger(16,35);
	var wk3 = getRndInteger(16,35);
	
    retstr += "<br><br>In week 1 " + thisname + " works " + wk1 + " hours";
    retstr += "<br><br>In week 2 " + thisname + " works " + wk2 + " hours";
    retstr += "<br><br>In week 3 " + thisname + " works " + wk3 + " hours";
	
	ans = (Number(operandA)*wk1) + (Number(operandA)*wk2) + (Number(operandA)*wk3);
	
    retstr += "<br><br>How much has " + thisname + " earned in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    
    return retstr;
    
}

function getAddMoney2() {
	var operA = getRndInteger(1,4) + "." + getRndInteger(10,95);
    var operB = getRndInteger(1,4) + "." + getRndInteger(10,95);
    var operC = getRndInteger(10,95)
	
	var operandA = "£" + operA;
    var operandB = "£" + operB;
    var operandC = operC + "p";
	
	var ans = 10 - (Number(operA) + Number(operB) + Number(operC)/100);
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = "";
    
    useCalc = true;
    
    retstr += "Three items in a shop cost " + operandA + "&#44; " + operandB + " and " + operandC;
    retstr+= "<br><br>" + thisname + " pays with a £10 note.<br><br>How much change does " + thisname + " get?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    useCalc = true;
    
    return retstr;
}

function getAddMoney3() {
	var sandwich = "£" + getRndInteger(2,3) + "." + getRndInteger(10,95);
    var drink = "£1." + getRndInteger(10,95);
    var crisps = getRndInteger(75,95) + "p";
    var chocolate = getRndInteger(75,95) + "p";
    
    useCalc = true;
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var retstr = "";
    
    var sands = ["two sandwiches", "three sandwiches", "four sandwiches"];
    var crips = ["one pack of crisps", "two packs of crisps", "three packs of crisps"];
    var drks = ["two drinks", "three drinks", "four drinks"];
    
    retstr += thisname + " is paying for lunch with some friends.";
    retstr += "<br><br>The table below shows the snacks available in the shop:";
    
    retstr+= "<br><br>Sandwich : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + sandwich;
    retstr+= "<br>Crisps : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + crisps;
    retstr+= "<br>Chocolate Bar : &nbsp;&nbsp;&nbsp;" + chocolate;
    retstr+= "<br>Drink: &nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + drink;
    retstr+= "<br><br>" + thisname + " buys " + sands[getRndInteger(0,sands.length-1)] + "&#44; " + crips[getRndInteger(0,crips.length-1)] + "&#44; and " + drks[getRndInteger(0,drks.length-1)];
    retstr+= "<br><br>How much has " + thisname + " spent in total?";
    
    useCalc = true;
    
    return retstr;
}

function getAddMoney1() {
	
    useCalc = false;
    
	var operandA = "";
    var operandB = "";
    var operandC = "";
    
    useCalc = true;
    
    operandA = getRndInteger(30,95);
    operandB = getRndInteger(1,5) + "." + getRndInteger(30,95);
    
    if ( getRndInteger(1,100) > 1) {
    	operandC = getRndInteger(1,5) + "." + getRndInteger(30,95);
    }
    
    var retstr = "";
    if ( operandC == "") {
		var ans = (Number(operandA)/100)+Number(operandB);
    	retstr = "Two items on a shopping list cost " + operandA + "p and £" + operandB;
        retstr+= "<br><br>What do all the items cost in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
    }
    else {
    	retstr = "Three items on a shopping list cost " + operandA + "p&#44; £" + operandB + " and £" + operandC;
        var xxx = getRndInteger(2,6);
        switch (xxx) {
        	case 1:
				var ans = (Number(operandA)/100)+Number(operandB)+Number(operandC);
            	retstr += "<br><br>What do all the items cost in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);
                break;
            case 2:
				var ans = ((Number(operandA)/100)+Number(operandB)+Number(operandC))*2;
            	retstr += "<br><br>If you bought 2 of each item what would you pay in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);; 
                useCalc = true;
                break;
			case 4:
				var ans = ((Number(operandA)/100)+Number(operandB)+Number(operandC))*3;
            	retstr += "<br><br>If you bought 3 of each item what would you pay in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);; 
                useCalc = true;
                break;
			case 5:
				var ans = ((Number(operandA)/100)+Number(operandB)+Number(operandC))*4;
            	retstr += "<br><br>If you bought 4 of each item what would you pay in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);; 
                useCalc = true;
                break;
			case 6:
				var ans = ((Number(operandA)/100)+Number(operandB)+Number(operandC))*5;
            	retstr += "<br><br>If you bought 5 of each item what would you pay in total?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2);; 
                useCalc = true;
                break;
            case 3:
				var ans1 = (Number(operandA)/100)+Number(operandB)+Number(operandC);
				var ans = 20 - ans1;
            	retstr += "<br><br>If you bought all three items what would you get in change if you paid with £20?,£" + ans.toFixed(2) + ",£" + (ans*1.05).toFixed(2) + ",£" + (ans*0.95).toFixed(2) + ",£" + (ans*1.10).toFixed(2); 
                useCalc = true;
                break;
        }
        
    }
    
    return retstr;
}

window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.keyCode) {
    case 40:
      movedown();
      break;
    case 38:
      moveup();
      break;
    case 37:
      moveleft();
      break;
    case 39:
      moveright();
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);

/*
window.addEventListener("keyup", function (event) {

  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    
    default:
      clearmove(); // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);*/

//aas
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function qtimedout() {
/*
	if ( !gamestopped ) {
		if ( !checkingquestion) {
			clearInterval(this.interval);
			myGameArea.stop();
			gamestopped = true;
			document.getElementById("timerbar").style.width = 0 + "px";
		}
	}
	
	document.getElementById("score").innerHTML = myScore + " out of " + numquestions;
			
		if (myScore > highscore) {
			highscore = myScore;
			//localStorage.setItem("flappyhigh", highscore);
				
		}
		
		
		if ( numquestions == quizlength ) {
			document.getElementById("printanswers").disabled = false;
			document.getElementById("answers").innerHTML += "<p style='font-size:36px;'><b>Test Score: " + Number((myScore/numquestions)*100).toFixed(0) + "%</b></p>";
			document.getElementById("answerscontainer").style.display = "block";
			document.getElementById("answerbuttons").style.display = "none";
		}
		else {
			
			timerbarwidth = inittimerbarwidth;
			//clearTimeout(qtimeout);
			//clearTimeout(btimeout);
			setQuestion();
		}
*/
}

function getHigh() {
	
}

function showHigh() {
	if (gametype == "ICT") {
		document.getElementById("high").innerHTML = "<b>ICT Score: " + highscore + "</b>";
		//localStorage.setItem("flappyict", highscore);
	}
	if (gametype == "WEB") {
		document.getElementById("high").innerHTML = "<b>WEB Score: " + highscore + "</b>";
		//localStorage.setItem("flappyweb", highscore);
	}
	if (gametype == "DATA") {
		document.getElementById("high").innerHTML = "<b>DATA Score: " + highscore + "</b>";
		//localStorage.setItem("flappydata", highscore);
	}
	if (gametype == "GAME") {
		document.getElementById("high").innerHTML = "<b>GAME Score: " + highscore + "</b>";
		//localStorage.setItem("flappygame", highscore);
	}
	
}

function addtoscore() {
    if (gamestopped == false)
	{
		myScore++;
		if (myScore > highscore) {
				highscore = myScore;
				//localStorage.setItem("flappyhigh", highscore);
				
		}
		document.getElementById("score").innerHTML = "<b>" + myScore + "</b>";
		showHigh();
		setTimeout(addtoscore, 250);
	}
}

/*
function selectQuestion() {
	for (i = 0; i < 50; i++) {
		var idx = getRndInteger(0, qarray.length-1);
		var parts = qarray[idx].split(",");
		if ( !answerstring.contains(parts[0]) ) {
			answerstring = answerstring += parts[0];
			break;
		}
	}
	
	parts;
}*/

var trainingused = false;

var savedQuestionText = "";

var workingstr = "<br><br><i><hr>Write your working out here:</i><br><br><br><br><br><br><br><br><p><b>Answer: </b></p><br>"

function setQuestion() {

	//alert(" set question");
	
	working = "";
	newworking = true;
	
	//$("#btn1").fadeOut();
	//$("#btn2").fadeOut();
	//$("#btn3").fadeOut();
	//$("#btn4").fadeOut();
	
	
	//document.getElementById("btn1").style.color = "white";
	//document.getElementById("btn2").style.color = "white";
	//document.getElementById("btn3").style.color = "white";
	//document.getElementById("btn4").style.color = "white";
	
	while (feedbackActive ) {
		// wait for feedback to stop
	}
	
	numquestions = numquestions + 1;
	
	//document.getElementById("btn1").style.backgroundColor = "white";
	//document.getElementById("btn2").style.backgroundColor = "white";
	//document.getElementById("btn3").style.backgroundColor = "white";
	//document.getElementById("btn4").style.backgroundColor = "white";
	
	helpViewed = "";
	
	
	if ( quizcodenum < 8 ) {
		document.getElementById("helpbtn").style.display = "block";
	}
	
	if ( quizcodenum == 8 ) {
			qarray = [];
			var qqq = numquestions + ". " + getAddMoneyL1();
			savedQuestionText= qqq;
			qarray.push("%calc%"+ qqq);
			
			saveResults(myName, mytutor, thisquizname, numquestions, Date(), qqq, "L1 QS", thisQuizID)
	}
	
	if ( quizcodenum == 9 ) {
			qarray = [];
			var qqq = numquestions + ". " + getAddMoney();
			savedQuestionText= qqq;
			qarray.push("%calc%"+ qqq);
			
			saveResults(myName, mytutor, thisquizname, numquestions, Date(), qqq, "L2 QS", thisQuizID)
	}
	
	if ( quizcodenum == 10 ) {
			qarray = [];
			var qqq = numquestions + ". " + getAddMoneyGCSE();
			savedQuestionText= qqq;
			qarray.push("%calc%"+ qqq);
			
			saveResults(myName, mytutor, thisquizname, numquestions, Date(), qqq, "GCSE QS", thisQuizID)
	}
	
	if ( quizcodenum == 11 ) {
			qarray = [];
			var qqq = numquestions + ". " + getAddMoneyE3Style();
			savedQuestionText= qqq;
			qarray.push("%calc%"+ qqq);
			
			saveResults(myName, mytutor, thisquizname, numquestions, Date(), qqq, "E3 QS", thisQuizID)
	}
	
	
	var idx = getRndInteger(0, qarray.length-1);
	var parts = qarray[idx].split(",");
		
	if ( quizcodenum < 8 && quizcodenum >=0 ) {
		idx = getRndInteger(0, qarray.length-1);
		parts = qarray[idx].split(",");
		var limit = 0;
		for (i = 0; i < 5000; i++) {
			if ( qsheet == true ) {
				if (parts[1] == "TRUE" || parts[1] == "FALSE") {
					continue;
				}
			}
			limit = i;
			if ( !answerstring.includes(parts[0]) ) {
				answerstring = answerstring += parts[0];
				break;
			}
			var idx = getRndInteger(0, qarray.length-1);
			var parts = qarray[idx].split(",");
		}
		if ( limit > 4500) {
			answerstring = parts[0];
		}
	}
	
	if ( quizcodenum < 0 ) {
		idx = numquestions-1;
		parts = qarray[idx].split(",");
		var parts = qarray[idx].split(",");
		answerstring = parts[0];
	}
	
	/*
	if ( parts[0].includes(")") ){
		document.getElementById("question").innerHTML = "<b>" + parts[0].split(")")[1] + "</b>";
	}
	else {
		document.getElementById("question").innerHTML = "<b>" + parts[0] + "</b>";
	}*/
	
	//if ( parts[0].includes(canvasID.toString()) ) {
		//var plus10 = canvasID+10;
		//parts[0] = parts[0].replace(canvasID.toString(), plus10.toString());
	//}
	
	//parts[0] = parts[0].replaceAll("%noddy%", ",");
	
	//document.getElementById("question").innerHTML = "<div style=\"position:relative:float:left;width:15%;height:100%;\"></div>";
	document.getElementById("question").innerHTML = "<div style=\"text-align:center;position:relative:float:left;width:85%;\"><b>" + parts[0].replace("%calc%","") + "</b></div>";
	
	document.getElementById("examquestiontext").innerHTML = "<b>" + parts[0].replace("%calc%","") + "</b>";
	
	if ( qsheet == true ) {
		var qnumstr = "";
		if (numquestions == 1 ) {
			//qnumstr = "1. ";
		}
		document.getElementById("handout").innerHTML += "<div style=\"clear:both;position:relative;float:left;page-break-inside:avoid;\"><br><b>" + qnumstr + parts[0].replace("%calc%","") + "</b>" + workingstr + "</div>";
	}
	
	if ( parts[0].includes("%calc%") ) {
		parts[0] = parts[0].replace("%calc%", "");
		document.getElementById("result").value = ""; 
		if ( !qsheet)  {
			$("#calculatorholder").fadeIn();
			document.getElementById("calculatorholder").style.display = "block";
		}
		//showDiv(document.getElementById("calculatorholder"),225);
	}
	else {
		//hideDiv(document.getElementById("calculatorholder"),0);
		$("#calculatorholder").fadeOut();
		//document.getElementById("calculatorholder").style.display = "none";
	}
	
	
	
	var fontsize = 24;
	document.getElementById("question").style.fontSize = fontsize + "px";
	while ( elemOverflow(document.getElementById("question")) ) {
		fontsize = fontsize - 1;
		document.getElementById("question").style.fontSize = fontsize + "px";
		if ( fontsize == 10) {
			break;
		}
	}
	
	
	var posn = getRndInteger(1,4);
	
	parts[0] = parts[0].trim();
	parts[1] = parts[1].trim();
	parts[2] = parts[2].trim();
	parts[3] = parts[3].trim();
	parts[4] = parts[4].trim();
	
	answer = parts[1];
	
	document.getElementById("btn1").style.color = "black";
	document.getElementById("btn2").style.color = "black";
	document.getElementById("btn3").style.color = "black";
	document.getElementById("btn4").style.color = "black";
	
	document.getElementById("btn1").style.display = "block";
	document.getElementById("btn2").style.display = "block";
	document.getElementById("btn3").style.display = "block";
	document.getElementById("btn4").style.display = "block";
	
	if ( answer == "TRUE" || answer == "FALSE") {
		document.getElementById("btn3").style.display = "none";
		document.getElementById("btn4").style.display = "none";
		
		var posn = getRndInteger(1,2);
		
		switch (posn) {
		case 1:
			document.getElementById("btn1").innerHTML = "TRUE";
			if ( document.getElementById("training").checked == true && parts[1] == "TRUE" ) {
				document.getElementById("btn1").style.color = "green";
				trainingused = true;
			}
			if ( document.getElementById("training").checked == true && parts[1] == "FALSE" ) {
				document.getElementById("btn2").style.color = "green";
				trainingused = true;
			}
			document.getElementById("btn2").innerHTML = "FALSE";
			break;
		case 2:
			document.getElementById("btn1").innerHTML = "FALSE";
			if ( document.getElementById("training").checked == true && parts[1] == "FALSE" ) {
				document.getElementById("btn1").style.color = "green";
				trainingused = true;
			}
			if ( document.getElementById("training").checked == true && parts[1] == "TRUE" ) {
				document.getElementById("btn2").style.color = "green";
				trainingused = true;
			}
			document.getElementById("btn2").innerHTML = "TRUE";
			break;
		}
		
		//document.getElementById("btn1").style.color = "black";
		//document.getElementById("btn2").style.color = "black";
		//document.getElementById("btn3").style.color = "black";
		//document.getElementById("btn4").style.color = "black";
	
		//$("#btn1").fadeIn("slow");
		//$("#btn2").fadeIn("slow");
		
	}
	else {

	switch (posn) {
	case 1:
		document.getElementById("btn1").innerHTML = parts[1];
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("btn1").style.color = "green";
			trainingused = true;
		}
		document.getElementById("btn2").innerHTML = parts[2];
		document.getElementById("btn3").innerHTML = parts[3];
		document.getElementById("btn4").innerHTML = parts[4];
		break;
	case 2:
		document.getElementById("btn4").innerHTML = parts[1];
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("btn4").style.color = "green";
			trainingused = true;
		}
		document.getElementById("btn1").innerHTML = parts[2];
		document.getElementById("btn2").innerHTML = parts[3];
		document.getElementById("btn3").innerHTML = parts[4];
		break;
	case 3:
		document.getElementById("btn3").innerHTML = parts[1];
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("btn3").style.color = "green";
			trainingused = true;
		}
		document.getElementById("btn4").innerHTML = parts[2];
		document.getElementById("btn1").innerHTML = parts[3];
		document.getElementById("btn2").innerHTML = parts[4];
		break;
	case 4:
		document.getElementById("btn2").innerHTML = parts[1];
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("btn2").style.color = "green";
			trainingused = true;
		}
		document.getElementById("btn3").innerHTML = parts[2];
		document.getElementById("btn4").innerHTML = parts[3];
		document.getElementById("btn1").innerHTML = parts[4];
		break;
	}
	
		//document.getElementById("btn1").style.color = "black";
		//document.getElementById("btn2").style.color = "black";
		//document.getElementById("btn3").style.color = "black";
		//document.getElementById("btn4").style.color = "black";
	
		//$("#btn1").fadeIn("slow");
		//$("#btn2").fadeIn("slow");
		//$("#btn3").fadeIn("slow");
		//$("#btn4").fadeIn("slow");
	
	}
	
	
	var sz = 28;
	if ( quizcodenum == 8 || quizcodenum == 9 || quizcodenum == 10 || quizcodenum == 11) {
		sz = 14;
	}
	var smallest = 99;
	fontsize = sz;
	document.getElementById("btn1").style.fontSize = fontsize + "px";
	while ( elemOverflow(document.getElementById("btn1")) ) {
		fontsize = fontsize - 1;
		document.getElementById("btn1").style.fontSize = fontsize + "px";
	}
	
	if ( fontsize < smallest) {
		smallest = fontsize;
	}
	
	fontsize = sz;
	document.getElementById("btn2").style.fontSize = fontsize + "px";
	while ( elemOverflow(document.getElementById("btn2")) ) {
		fontsize = fontsize - 1;
		document.getElementById("btn2").style.fontSize = fontsize + "px";
	}
	
	if ( fontsize < smallest) {
		smallest = fontsize;
	}
	
	fontsize = sz;
	document.getElementById("btn3").style.fontSize = fontsize + "px";
	while ( elemOverflow(document.getElementById("btn3")) ) {
		fontsize = fontsize - 1;
		document.getElementById("btn3").style.fontSize = fontsize + "px";
	}
	
	if ( fontsize < smallest) {
		smallest = fontsize;
	}
	
	fontsize = sz;
	document.getElementById("btn4").style.fontSize = fontsize + "px";
	while ( elemOverflow(document.getElementById("btn4")) ) {
		fontsize = fontsize - 1;
		document.getElementById("btn4").style.fontSize = fontsize + "px";
	}
	
	if ( fontsize < smallest) {
		smallest = fontsize;
	}
	
	document.getElementById("btn1").style.fontSize = smallest + "px";
	document.getElementById("btn2").style.fontSize = smallest + "px";
	document.getElementById("btn3").style.fontSize = smallest + "px";
	document.getElementById("btn4").style.fontSize = smallest + "px";
	
	question = parts[0];
	
	if ( quizcodenum < 8 ) {
		savedQuestionText = parts[0];
	}
	
	
	
	checkingquestion = false;
	resetQuestionTiming();
	
	
	
	document.getElementById("score").innerHTML = "Question: " + Number(numquestions) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score : " + myScore + " out of " + quizlength;
	
}

function resetQuestionTiming() {
	//qtimeout = setTimeout(qtimedout, initqtimeout);
	//timerbarwidth = inittimerbarwidth;
	//document.getElementById("timerbar").style.width = timerbarwidth + "px";
	//btimeout = setTimeout(updatebar, 1000);
}

var numquestions;
var myNameTag = "";
function startGame() {

	//alert("in start game");
    //myGamePiece = new component(12, 12, "red", 10, 60);
    //myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	//alert("start game");
	numquestions = 0;
	myScore = 0;
	document.getElementById("score").innerHTML = myScore + " out of " + numquestions;
    myObstacles = [];
    this.interval = 20;
	myGameArea.stop();
	gamestopped = true;
    //myGameArea.start();
	//setTimeout(addtoscore, 250);
	//gamestopped = false;
	myScore = 0;
	timerbarwidth = inittimerbarwidth;
	numquestions = 0;
	document.getElementById("printanswers").disabled = true;
	document.getElementById("answerscontainer").style.display = "none";
	document.getElementById("answerbuttons").style.display = "block";
	
	
	//alert("calling set question");
	setQuestion();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 290;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[5]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, startinterval);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
		gamestopped = true;
        
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
		
		if (myGamePiece.y > 245) {
			myGamePiece.y = 245;
			myGamePiece.speedY = 0;
		}
		if (myGamePiece.y < 5) {
			myGamePiece.y = 5;
			myGamePiece.speedY = 0;
		}
		if (myGamePiece.x < 5) {
			myGamePiece.x = 5;
			myGamePiece.speedX = 0;
		}
		if (myGamePiece.x > 435) {
			myGamePiece.x = 435;
			myGamePiece.speedX = 0;
		}
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop();
	    gamestopped = true;
	    document.getElementById("printanswers").disabled = false;
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(240)) {
        x = myGameArea.canvas.width;
        minHeight = 30;
        maxHeight = 140;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 70;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(30, height, "green", x, 0));
        myObstacles.push(new component(30, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].speedX = -1;
        myObstacles[i].newPos();
        myObstacles[i].update();
    }
    //myScore.text="SCORE: " + myGameArea.frameNo;
    //myScore.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup() {
    myGamePiece.speedY = -2; 
}

function movedown() {
    myGamePiece.speedY = 2; 
}

function moveleft() {
    myGamePiece.speedX = -2; 
}

function moveright() {
    myGamePiece.speedX = 2; 
}

function clearmove() {
    //myGamePiece.speedX = 0; 
    //myGamePiece.speedY = 0; 
}

function encoded(str) {
	document.getElementById("encoder").innerHTML = str;
	
	return document.getElementById("encoder").innerHTML;
}

function updateWrongCount(ques) {
	if ( quizcodenum == 1 ) {
		var found = false;
		//for (ii = 0; ii < arithArray.length-1; ii++) {
			//if ( arithArray[ii].includes(ques) ) {
				//arithWrong++;
				//found = true;
			//}
		//}
		for (ii = 0; ii < fdpArray.length-1; ii++) {
			if ( fdpArray[ii].includes(ques) ) {
				fdpWrong++;
				found = true;
				break;
			}
		}
		
		if ( found == false ) {
			for (ii = 0; ii < unitsArray.length-1; ii++) {
			if ( unitsArray[ii].includes(ques) ) {
				unitsWrong++;
				found = true;
				break;
			}
			}
		}
		if ( found == false ) {
			for (ii = 0; ii < shapeArray.length-1; ii++) {
			if ( shapeArray[ii].includes(ques) ) {
				shapeWrong++;
				found = true;
				break;
			}
			}
		}
		if ( found == false ) {
			for (ii = 0; ii < probArray.length-1; ii++) {
			if ( probArray[ii].includes(ques) ) {
				probWrong++;
				found = true;
				break;
			}
			}
		}
		if ( found == false ) {
			for (ii = 0; ii < timeArray.length-1; ii++) {
			if ( timeArray[ii].includes(ques) ) {
				timeWrong++;
				found = true;
				break;
			}
			}
		}
		
		if ( !found ) {
			arithWrong++;
		}
	}
}

var arithCorrect = 0;
var fdpCorrect = 0;
var unitsCorrect = 0;
var shapeCorrect = 0;
var probCorrect = 0;
var timeCorrect = 0;

function updateCorrectCount(ques) {
	if ( quizcodenum == 1 ) {
		var found = false;
		//for (ii = 0; ii < arithArray.length-1; ii++) {
			//if ( arithArray[ii].includes(ques) ) {
			//	arithCorrect++;
				//found = true;
			//}
		//}
		for (ii = 0; ii < fdpArray.length-1; ii++) {
			if ( fdpArray[ii].includes(ques) ) {
				fdpCorrect++;
				found = true;
				break;
			}
		}
		if ( found == false ) {
			for (ii = 0; ii < unitsArray.length-1; ii++) {
			if ( unitsArray[ii].includes(ques) ) {
				unitsCorrect++;
				found = true;
				break;
			}
			}
		}
		if ( found == false ) {
			for (ii = 0; ii < shapeArray.length-1; ii++) {
			if ( shapeArray[ii].includes(ques) ) {
				shapeCorrect++;
				found = true;
				break;
			}
			}
		}
		if ( found == false ) {
			for (ii = 0; ii < probArray.length-1; ii++) {
			if ( probArray[ii].includes(ques) ) {
				probCorrect++;
				found = true;
				break;
			}
			}
		}
		if ( found == false ) {
			for (ii = 0; ii < timeArray.length-1; ii++) {
			if ( timeArray[ii].includes(ques) ) {
				timeCorrect++;
				found = true;
				break;
			}
			}
		}
		
		if ( !found ) {
			arithCorrect++;
		}
	}
}

var thisResult = 0;
var thisComment = "Keep trying";
function checkanswer(elem) {
	checkingquestion = true;
	
	//hideDiv(document.getElementById("calculatorholder"),0);
	//document.getElementById("calculatorholder").style.display = "none";
	
	if ( true ) {
	
		var qq = "";
		var rr = 0;
		if ( elem.innerHTML == encoded(answer) ) {
			myScore = myScore + 1;
			document.getElementById("answers").innerHTML += "<p style='font-size:14px;'>" + numquestions + ". " + savedQuestionText + "</p><p style=\"margin-left:20px;font-size:12px;\">" + working + "</p><p style=\"margin-left:20px;font-size:12px;\"><b><u>" + elem.innerHTML + "</u>&nbsp;&nbsp;&#10004;</b>" + helpViewed + "</p><br>"
			qq = "<p style='font-size:14px;'>" + savedQuestionText + "</p><p style=\"margin-left:20px;font-size:12px;\">" + working + "</p><p style=\"margin-left:20px;font-size:12px;\"><b><u>" + elem.innerHTML + "</u>&nbsp;&nbsp;&#10004;</b>" + helpViewed + "</p><br>"
			rr = numquestions;
			feedbackCorrect(elem);
			updateCorrectCount(question);
			
			if ( quizcodenum == 8 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "L1 QF R " + myScore + "/" + numquestions, thisQuizID)
			}
			
			if ( quizcodenum == 9 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "L2 QF R " + myScore + "/" + numquestions, thisQuizID)
			}
			if ( quizcodenum == 10 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "GCSE QF R " + myScore + "/" + numquestions, thisQuizID)
			}
			if ( quizcodenum == 11 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "E3 QF R " + myScore + "/" + numquestions, thisQuizID)
			}
		}
		else {
			updateWrongCount(question);
			document.getElementById("answers").innerHTML += "<p style='font-size:14px;'>" + numquestions + ". " + savedQuestionText + "</p><p style=\"margin-left:20px;font-size:12px;\">" + working + "</p><p style=\"margin-left:20px;font-size:12px;\"><b><u>" + elem.innerHTML + "</u>&nbsp;&nbsp;X</b>" + helpViewed + "</p><br>"
			qq = "<p style='font-size:14px;'>" + savedQuestionText + "</p><p style=\"margin-left:20px;font-size:12px;\">" + working + "</p><p style=\"margin-left:20px;font-size:12px;\"><b><u>" + elem.innerHTML + "</u>&nbsp;&nbsp;X</b>" + helpViewed + "</p><br>"
			rr = numquestions;
			feedbackInCorrect(elem);
			
			if ( quizcodenum == 8 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "L1 QF W " + myScore + "/" + numquestions, thisQuizID)
			}
			
			if ( quizcodenum == 9 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "L2 QF W " + myScore + "/" + numquestions, thisQuizID)
			}
			if ( quizcodenum == 10 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "GCSE QF W " + myScore + "/" + numquestions, thisQuizID)
			}
			if ( quizcodenum == 11 ) {
				saveResults(myName, mytutor, thisquizname, rr, Date(), qq, "E3 QF W " + myScore + "/" + numquestions, thisQuizID)
			}
		}
		document.getElementById("score").innerHTML = "Question: " + Number(numquestions) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Score : " + myScore + " out of " + quizlength;
			
		if (myScore > highscore) {
			highscore = myScore;
			//localStorage.setItem("flappyhigh", highscore);
				
		}
		
		if ( numquestions == quizlength ) {
			$("#calculatorholder").fadeOut();
			hideExam();
			//hideDiv(document.getElementById("calculatorholder"),0);
			if ( !trainingused ) {
				document.getElementById("printanswers").disabled = false;
				document.getElementById("training").disabled = false;
				thisResult = Number((myScore/numquestions)*100).toFixed(0);
				thisComment = "Take more care";
				//thisResult = 90;
				
				var resstring = quizcodenum.toString() + thisResult.toString() + quizcodenum.toString();
				var resultcode = Number(resstring) * 47;
				//var thiscode = getRndInteger(10,99).toString() + quizcodenum.toString() + resultcode.toString() + quizcodenum.toString() + getRndInteger(10,99).toString();
				var thiscode = resultcode;
				if ( thisResult >= 90 ) {
					thisComment = "Brilliant";
				}
				else if ( thisResult >= 80 ) {
					thisComment = "Excellent";
				}
				else if ( thisResult >= 75 ) {
					thisComment = "Very Good";
				}
				else if ( thisResult >= 65 ) {
					thisComment = "Good";
				}
				else if ( thisResult >= 50 ) {
					thisComment = "Not too bad";
				}
				else if ( thisResult >= 30 ) {
					thisComment = "Keep Trying";
				}
				else {
					thisComment = "Have another go";
				}
				
				//document.getElementById("answers").innerHTML += "<p style='font-size:36px;'><b>Test Score: " + Number((myScore/numquestions)*100).toFixed(0) + "%</b></p>";
				document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%SCORE%", thisResult + "% (" + thisComment + ")");
				document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%CODE%", thiscode);
				document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%NAME%", document.getElementById("name").value);
				
				if ( arithWrong > 0 ) {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%arith%", arithCorrect + " out of " + Number(arithCorrect+arithWrong) + " (" + Number((arithCorrect/(arithWrong + arithCorrect))*100).toFixed(0) + "%)");
				}
				else {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%arith%", arithCorrect + " out of " + Number(arithCorrect+arithWrong) + " (100%)");
				}
				
				if ( fdpWrong > 0 ) {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%fdp%", fdpCorrect + " out of " + Number(fdpCorrect+fdpWrong) + " (" + Number((fdpCorrect/(fdpWrong + fdpCorrect))*100).toFixed(0) + "%)");
				}
				else {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%fdp%", fdpCorrect + " out of " + Number(fdpCorrect+fdpWrong) + " (100%)");
				}
				
				if ( unitsWrong > 0 ) {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%units%", unitsCorrect + " out of " + Number(unitsCorrect+unitsWrong) + " (" + Number((unitsCorrect/(unitsWrong + unitsCorrect))*100).toFixed(0) + "%)");
				}
				else {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%units%", unitsCorrect + " out of " + Number(unitsCorrect+unitsWrong) + " (100%)");
				}
				
				if ( timeWrong > 0 ) {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%time%", timeCorrect + " out of " + Number(timeCorrect+timeWrong) + " (" + Number((timeCorrect/(timeWrong + timeCorrect))*100).toFixed(0) + "%)");
				}
				else {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%time%", timeCorrect + " out of " + Number(timeCorrect+timeWrong) + " (100%)");
				}
				
				if ( shapeWrong > 0) {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%shape%", shapeCorrect + " out of " + Number(shapeCorrect+shapeWrong) + " (" + Number((shapeCorrect/(shapeWrong + shapeCorrect))*100).toFixed(0) + "%)");
				}
				else {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%shape%", shapeCorrect + " out of " + Number(shapeCorrect+shapeWrong) + " (100%)");
				}
				
				if ( probWrong > 0 ) {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%prob%", probCorrect + " out of " + Number(probCorrect+probWrong) + " (" + Number((probCorrect/(probWrong + probCorrect))*100).toFixed(0) + "%)");
				}
				else {
					document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%prob%", probCorrect + " out of " + Number(probCorrect+probWrong) + " (100%)");
				}
				
				document.getElementById("answers").innerHTML += "<p style='text-align:center;font-size:28px;'><b>END OF RESULTS</b></p>";
				document.getElementById("answerscontainer").style.display = "block";
				document.getElementById("answerbuttons").style.display = "none";
				
				thisfilename = thisquizname+thisResult + "percent.pdf";
				
				document.getElementById("gettext").style.display = "none";
				
				saveResults(myName, mytutor, thisquizname, thisResult, Date(), document.getElementById("answers").innerHTML, "Quiz Completed", thisQuizID)
				
				//document.getElementById("selecttutor").style.display = "block";
			}
			else {
				document.getElementById("score").innerHTML = "Disable study mode to get a results listing";
			}
		}
		else {
			timerbarwidth = inittimerbarwidth;
			//clearTimeout(qtimeout);
			//clearTimeout(btimeout);
			setQuestion();
		}
		
		//else {
			//document.getElementById("score").innerHTML = myScore + " out of " + numquestions;
			//elem.style.backgroundColor = "red";
			//clearInterval(this.interval);
			//myGameArea.stop();
			//gamestopped = true;
			//document.getElementById("printanswers").disabled = false;
			//window.alert("You scored " + myScore + "click RE-START to play again.");
		//}
	}
}

var thisfilename = "";

function doDownload() {
	//download(thisquizname+thisResult + "percent.txt", document.getElementById("answers").innerText.replace(document.getElementById("gettext").innerText, "").replace("View help On this topic", ""));
	download(thisquizname+thisResult + "percent.html", document.getElementById("answers").innerHTML);
}

function updatebar() {
	//if (!checkingquestion) {
		//if ( !gamestopped ) {
			//timerbarwidth = timerbarwidth - (inittimerbarwidth/(initqtimeout/1000));
			//document.getElementById("timerbar").style.width = timerbarwidth + "px";
		//	btimeout = setTimeout(updatebar, 1000);
		//}
	//}
}

function viewShape() {
	window.open("https://drive.google.com/file/d/1v0zyTI78F_wBt20Ha_MVYeWe1G2XY7RL/view?usp=sharing");
}

function viewUnits() {
	window.open("https://drive.google.com/file/d/1lS3akpwCItFlJPDZLEseLRp4w_qKDUwp/view?usp=sharing");
}

function viewProb() {
	window.open("https://drive.google.com/file/d/1rxp0igBuajD7pS46yQrCjo7XfoRGS7iO/view?usp=sharing");
}

function viewFDP() {
	window.open("https://drive.google.com/file/d/1_9iVD3UiKlKx4sIHTr4r92_J20ZfL-my/view?usp=sharing");
}

function viewArea() {
	window.open("https://drive.google.com/file/d/13JX4ynr7-4wzRwIq48hvFHwGAOULPszH/view?usp=sharing");
}

function hideStud() {
	document.getElementById("studframe").style.display = "none";
}

var quizcodenum = 0;
var thisquizname = "";
var gametype = "ICT";
var showhelptext = true;
var myName = "";

function hideInputs() {
	myName = document.getElementById("learnername").value;
	
	if ( myName.length > 20) {
		myName = myName.substring(0,19);
	}
	
	mytutor = document.getElementById("tutors").value;
	
	if ( myName.trim() == "2761" ) {
		mytutor = "Tony Bunting";
		qsheet = true;
		imgscale = 1.4;
	}
	else {
		qsheet = false;
	}
	
	if ( myName == "" || mytutor == "" || mytutor == "none" ) {
		return;
	}
	hideHelp();
	
	var mywidth = window.innerWidth - 50;
	
	if ( mywidth > 500 ) mywidth = 500;
	
	currentzoom = mywidth/350;
	document.body.style.zoom = currentzoom * 0.97;
	
	window.scrollTo(0,0);
	window.parent.scrollTo(0,0);
	
	document.getElementById("btn1").style.display = "none";
	document.getElementById("btn2").style.display = "none";
	document.getElementById("btn3").style.display = "none";
	document.getElementById("btn4").style.display = "none";
}

function restartGame(typ) {
	hideExam();
	
	document.getElementById("helpbtn").style.display = "none";
	
	
	var foo = myName;
	if ( myName == "" || mytutor == "" || mytutor == "none" ) {
		document.getElementById("helptext").innerHTML = '\
		<p><span style="float:left;font-size:14px;">Enter your name:</span><input maxlength="20" style="padding:5px;margin-left:5px;float:left;font-size:14px;border-radius:10px;background-color:white;border-style:black;width:160px;height:auto;" id="learnername" type="text"></input>\
		<br><br><p><span style="float:left;font-size:14px;margin-right:10px;">Your maths tutor:</span><select id="tutors" name="names" ></p>\
			<option value="none">Choose your tutor:</option>\
			<option value="Not Sure">Not Sure</option>\
			<option value="Barbara Yates">Barbara Yates</option>\
			<option value="Christine Thistlewaite">Christine Thistlewaite</option>\
			<option value="Debra Williams">Debra Williams</option>\
			<option value="Gemma Beacham">Gemma Beacham</option>\
			<option value="John Mwanakatwe">John Mwanakatwe</option>\
			<option value="Jessica Harvey">Jessica Harvey</option>\
			<option value="Liz Smith">Liz Smith</option>\
			<option value="Sarah Partridge">Sarah Partridge</option>\
			<option value="Simon Lee">Simon Lee</option>\
			<option value="Tom Nicholson">Tom Nicholson</option>\
			<option value="Tony Bunting">Tony Bunting</option>\
		</select></p>\
		<p style="text-align:center;color:black;font-size:14px;">If you have problems with this APP try it using Chrome<p>\
		<p style="width:100%;text-align:center;clear:both;float:left;color:black;margin-left:5px;"><button onclick="hideInputs()">CONTINUE</button></p>\
		';
		
		showHelp(570);
		return;
	}
	
	
	//saveResults();
	
	oktostart = true;
	
	qarray = [];
	
	arithCorrect = 0;
	fdpCorrect = 0;
	unitsCorrect = 0;
	shapeCorrect = 0;
	probCorrect = 0;
	timeCorrect = 0;
	
	arithWrong = 0;
	fdpWrong = 0;
	unitsWrong = 0;
	shapeWrong = 0;
	probWrong = 0;
	timeWrong = 0;
	
	//document.getElementById("calculatorholder").style.display = "none";
	//hideDiv(document.getElementById("calculatorholder"),0);
	$("#calculatorholder").fadeOut();
	answerstring = "";
	
	//document.getElementById("selecttutor").style.display = "none";
	
	trainingused = false;
	document.getElementById("btn1").innerHTML = "";
	document.getElementById("btn2").innerHTML = "";
	document.getElementById("btn3").innerHTML = "";
	document.getElementById("btn4").innerHTML = "";
	
	
		document.getElementById("btn1").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn1").style.marginTop = "5px";
		document.getElementById("btn1").style.marginLeft = "2px";
		document.getElementById("btn1").style.height = "45px";
		document.getElementById("btn1").style.width = "336px"
		
		document.getElementById("btn2").style.clear = "both";
		document.getElementById("btn2").style.marginTop = "5px";
		document.getElementById("btn2").style.height =  "45px";
		document.getElementById("btn2").style.width = "336px"
		
		document.getElementById("btn3").style.clear = document.getElementById("ebtn3").style.clear;
		document.getElementById("btn3").style.marginTop = "5px";
		document.getElementById("btn3").style.height =  "45px";
		document.getElementById("btn3").style.width = "336px"
		
		document.getElementById("btn4").style.clear = document.getElementById("ebtn4").style.clear;
		document.getElementById("btn4").style.marginTop = "5px";
		document.getElementById("btn4").style.height =  "45px";
		document.getElementById("btn4").style.width = "336px"
	
	gametype = typ;
	
	
	document.getElementById("answers").innerHTML =  "";
	
	
	if (gametype == "NUMERACY") {
		
		showhelptext = false;
		document.getElementById("answers")
		quizcodenum = 1;
		thisquizname = "Mixed";
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		qarray = MixedNumeracyArray;
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: Mixed Topics " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		document.getElementById("answers").innerHTML +=	"<b>How you did on different question types:<b><br>";
		document.getElementById("answers").innerHTML +=	"(practice weaker topics to improve your score)<br><hr>";
		document.getElementById("answers").innerHTML +=	"<div style=\"position;relative;clear:both;float:left;width:175px;\">Arithmetic (+/-/x) :</div><div style=\"position;relative;\">%arith%</div>";
		document.getElementById("answers").innerHTML +=	"<div style=\"position;relative;clear:both;float:left;width:175px;\">Frac, Dec, Perc :</div><div style=\"position;relative;\">%fdp%</div>";
		document.getElementById("answers").innerHTML +=	"<div style=\"position;relative;clear:both;float:left;width:175px;\">Units :</div><div style=\"position;relative;\">%units%</div>";
		document.getElementById("answers").innerHTML +=	"<div style=\"position;relative;clear:both;float:left;width:175px;\">Time/Money :</div><div style=\"position;relative;\">%time%</div>";
		document.getElementById("answers").innerHTML +=	"<div style=\"position;relative;clear:both;float:left;width:175px;\">Angles/Shape :</div><div style=\"position;relative;\">%shape%</div>";
		document.getElementById("answers").innerHTML +=	"<div style=\"position;relative;clear:both;float:left;width:175px;\">Probability :</div><div style=\"position;relative;\">%prob%</div>";
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
			document.getElementById("helptext").innerHTML = '\
		<p>Help is not available for the mixed ALL TOPICS quiz</p>\
		<p>Practice the individual topics to get help on specific types of questions</p>\
		';
	}
	
	if (gametype == "ARITH") {
		quizcodenum = 2;
		thisquizname = "Number";
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		qarray = arithArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: Mixed Arithmetic " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
			document.getElementById("helptext").innerHTML = '\
		<p>Help is not available yet for the arithmetic questions</p>\
		<p>Help for certain types of question is coming soon!</p>\
		';
	}
	
	if (gametype == "FDP") {
		
		gametype = typ;
		
		quizcodenum = 3;
		thisquizname = "FDP";
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		qarray = fdpArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: FDP " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		//document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"clear:both;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewFDP()\">View help On this topic</button>";
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = '<p><b>Fractions</b><p> \
														<p>Remember: <br><br> 1. Divide by bottom number<br> 2. Times by the top number</p> \
														<p>Examples:<p> \
														<p>&frac14; of 80 = 80 &#247; 4 x 1 = <u>20</u></p> \
														<p>&frac23; of 60 = 60 &#247; 3 x 2 = <u>40</u></p> \
														<hr>\
														<p><b>Percentages - Non Calculator</b><p> \
														<p>Break into % that you can do like 10% or 5%<p> \
														<p>Examples:<p> \
														<p>25% of 200<p>\
														<p>10% + 10% + 5% = 20 + 20 + 10 = <u>50</u></p>\
														<hr>\
														<p><b>Percentages - Calculator</b></p> \
														<p>Use the formula:<p> \
														<p>Percent &#247; 100 x Amount</p> \
														<p>Examples:<p>\
														<p>35% of £125</p>\
														<p>35 &#247; 100 x 125 = <u>£43.75</u></p> \
														<p>43% of £11.25</p>\
														<p>47 &#247; 100 x 365 = 4.8375 = <u>£4.84</u></p> \
														<hr>\
														<p><b>Percentages - Increase</b></p> \
														<p>First find the percentage using one of the methods above.</p>\
														<p>Then add the amount you found to the original amount</p>\
														<p>Example:</p>\
														<p>£160 increased by 20%</p>\
														<p>Find 20% (non-calc method is Ok here)</p>\
														<p>20% = 10% + 10% = 16 + 16 = <u>£32</u></p>\
														<p>160 + 32 = 192 = <u>£192</u>\
														<hr>\
														<p><b>Percentages - Decrease</b></p> \
														<p>First find the percentage using one of the methods above.</p>\
														<p>Then take away the amount you found from the original amount</p>\
														<p>Example:</p>\
														<p>£160 discounted by 37%</p>\
														<p>Start by finding 37% (calc method is best here)</p>\
														<p>37 &#247; 100 x 160 = 59.2 </p> \
														<p>160 - 59.2 = 100.8 = <u>£100.80</u> </p> \
														';
	}
	
	if (gametype == "UNITS") {
		
		quizcodenum = 4;
		thisquizname = "Units";
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		qarray = unitsArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: Metric Units " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"clear:both;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewUnits()\">View help On this topic</button>";
		
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = '\
<p><b><u>Units of Length<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">10mm</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1cm</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100cm</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1m</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100m</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1km</td>\
</tr>\
</tbody>\
</table>\
<p>mm to cm divide by 10<br>cm to mm multiply by 10</p>\
<p>cm to m divide by 100<br>m to cm multiply by 100</p>\
<p>m to km divide by 100<br>km to mm multiply by 1000</p>\
<hr>\
<p><b><u>Units of Weight or Mass<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000g</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1kg</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000kg</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1 tonne</td>\
</tbody>\
</table>\
<p>g to kg divide by 1000<br>kg to g multiply by 1000</p>\
<p>kg to tn divide by 1000<br>tn to kg multiply by 1000</p>\
<hr>\
<p><b><u>Units of Capacity<b></u><p>\
<table style=\"margin-left:30px;border-collapse: collapse; width: 60%; height: 79px;\" border=\"1\">\
<tbody>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1000ml</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1L</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">100cl</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1L</td>\
</tr>\
<tr style=\"height: 18px;\">\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">10ml</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">=</td>\
<td style=\"width: 33.3333%; text-align: center; height: 18px;\">1cl</td>\
</tr>\
</tbody>\
</table>\
<p>ml to L divide by 1000<br>L to ml multiply by 1000</p>\
<p>ml to cl divide by 10<br>cl to ml multiply by 10</p>\
<p>cl to L divide by 100<br>L to cl multiply by 100</p>\
';
	}
	
	if (gametype == "TIME") {
		
		quizcodenum = 5;
		thisquizname = "TimeMoney";
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		qarray = timeArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: Time and Money " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
	
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = '\
<p><b><u>Time<b></u></p>\
<p>The key to answering time questions is knowing your 12 and 24 hour clocks</p>\
<p>To convert from 12 hour to 24 hours just add 12 to hours that are PM</p>\
<p>Example: 10:30pm converts to 22:30 hours</p>\
<p>10:00 AM will be the same in 24 hour format .. it is just 10:00<p>\
<p>You also need to remember that a hour is 60 minutes</p>\
<p>2 hours would be 120 minutes</p>\
<p>&frac12; an hour would be &frac12; of 60 = 30 minutes</p>\
<p><b><u>Money<b></u></p>\
<p>The most important thing when working with money questions is to be careful with questions that mix pounds and pence</p>\
<p>Example: Adding up £1.25, £3.30 and 75p</p>\
<p>You would do 1.25 + 3.3 + 0.75</p>\
<p>Note the 0.75 for the 75p</p>\
<p>Also note the 3.3 for the £3.30 (it would not matter if you put 3.30 into the calculator though)</p>\
<p>another example: 5p plus £1.57 would be 0.05 + 1.57</p>\
<p>Note here that the 5p is 0.05 <u>NOT 0.5</u></p>\
';
	}
	
	if (gametype == "SHAPE") {
		
		quizcodenum = 6
		thisquizname = "Shape";
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		qarray = shapeArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: Angles and Shape " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		///document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"clear:both;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewArea()\">View help on Area/Perim</button><br>";
		
		//document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"margin-top:5px;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewShape()\">View help on Angles/Shapes</button>";
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = '\
<p><u>Perimeter</u></p>\
<p>This is all the distance around the outside of a shape</p>\
<p>To find perimeter you add up the lengths of all the sides</p>\
<p>Example:</p>\
<p>The perimeter of a rectangle with height 3cm and width 5cm</p>\
<p>Perimeter = 3 + 3 + 5 + 5 = <u>16 cm</u></p>\
<p><u>Area</u></p>\
<p>This is all the space inside a shape.</p>\
<p>To find area of a square or rectangle you times the height by the width</p>\
<p>Example:</p>\
<p>The area of a rectangle with height 4cm and width 6cm</p>\
<p>Area = 4 x 6 = <u>24cm&sup2;</u></p>\
<p><u>Volume</u></p>\
<p>This is all the space inside a 3D shape.</p>\
<p>Example:</p>\
<p>To find volume of a cube or cuboid times the height by the width by the depth</p>\
<p>The volume of a cuboid with height 3cm, width 4cm and depth 5cm</p>\
<p>Volume = 3 x 4 x 5 = <u>60cm&sup3;</u></p>\
<p><b><u>Angles</b></u></p>\
<p>A full turn is 360 degrees</p>\
<p>A half turn or staight line is 180 degrees</p>\
<p>A quarter turn <u>also known as a right angle</u> is 90 degrees</p>\
<p>ACUTE angles are less than 90 deg.</p>\
<p>OBTUSE angles are more than 90 deg but less than 180 deg</p>\
<p>REFLEX angles are more than 180 deg</p>\
';
	
	}
	
	if (gametype == "PROB") {
		
		quizcodenum = 7;
		thisquizname = "Probability";
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		qarray = probArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: Probability " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		//document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"clear:both;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewProb()\">View help On this topic</button>";
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = '\
		<p><u><b>Probability</u></b></p>\
<p>Probability is all about measuring the chances of something happening</p>\
<p>This can be expressed in words:</p>\
<p><b>Impossible</b>: The event can <u>never ever</u> happen</p>\
<p>Ex: the chances of getting 7 when rolling a 6 sided die<p>\
<p><b>Unlikely</b>: The chance of the event happening are <u>much less</u> than it not happening</p>\
<p>Ex: the chances of winning the national lottery this week<p>\
<p><b>Evens</b>: The chance of the event happening are <u>the same</u> as it not happening</p>\
<p>Ex: the chances of getting HEADS when tossing a coin<p>\
<p><b>Likely</b>: The chance of the event happening <u>are more</u> than it not happening</p>\
<p>Ex: The chances of getting warm sunny days sometime during summer<p>\
<p><b>Certain</b>: Event must happen - no other outcome is possible.</p>\
<p>Ex: The chances of getting either 1,2,3,4,5, or 6 when rolling a 6 sided die<p>\
<hr>\
<p><u><b>Other Ways of Expressing Probability</u></b></p>\
<p>0 or 0% or 0.0 is the same as <b>Impossible</b></p>\
<p>Any fraction less than &frac12 or percentage more than 0 and less than 50% is the same as <b>Unlikely</b></p>\
<p>&frac12 or 50% or 0.5 is the same as <b>Evens</b></p>\
<p>Any fraction more than &frac12 or percentage more than 50% and less than 100% is the same as <b>Likely</b></p>\
<p>1 or 1.0 or 100% is the same as <b>Certain</b></p>\
<hr>\
<p><u><b>Doing Probability!</u></b></p>\
<p>All questions involving probablity involve working out all the possible outcomes and then assessing the likelihood of the event you are being asked about actually happening</p>\
<p><b>Example</b>: What is the probability of seeing a person with two heads on the way to college?</p>\
<p><u>Ans: Impossible - hopefully!</u></p>\
<hr>\
<p><b>Example</b>: What is the probability of getting Heads when flipping a coin?</p>\
<p><u>Ans: Events OR 50% or &frac12; (all these mean the same thing)</u>\
<hr>\
<p><b>Example</b>: What is the probability of getting a 6 when rolling a 6 sided die?</p>\
<p>There are six outcomes here.<p>\
<p>If you are asked to mark on a scale: You are much more likely to get something other than six so you could write <b>Unlikely</b><p>\
<p>If you are asked to express as a fraction: You are looking for <b>1 out of 6</b> so you would write &frac16;<p>\
<p><u><b>Harder Probability Questions (L2)</u></b></p>\
<p><b>Example</b>: What is the probability of getting a an even number when rolling a die?</p>\
<p>There are six outcomes here 1, 2, 3, 4, 5, 6<p>\
<p>There are 3 even numbers: 2, 4, 6</p>\
<p>So you are looking for 3 outcomes out of 6 so you could write Evens OR 50% OR &frac12;</p>\
';
	}
	
	if (gametype == "EXAML1") {
		examsNewL1 = [1,2,3,5,6,7,9,10,12,13,15,16,17,18,19,20,21,22,24,25,26,28,30,31,32,33,34,35,36,
37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66];
		randomiseArray(examsNewL1);
		quizcodenum = 8;
		thisquizname = "L1 Exam Style";
		
		if ( qsheet == true ) {
		document.getElementById("handout").style.display = "block";
		document.getElementById("handout").innerHTML = "<span style=\"font-size:18px;\"><b><p>Your Name:</p><p>(" + thisquizname + ") Please try to answer all the questions.</p><p>Use a calculator and write all your working out in the space underneath each question.</p><p>Ask for help if you get stuck on a question.</p><b></span>";
	}
	else {
		document.getElementById("handout").style.display = "none";
	}
		
		quizlength = 12;
		if ( qsheet ) {
			quizlength = 30;
		}
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: L1 Exam Style Questions " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		document.getElementById("btn1").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn1").style.marginTop = "210px";
		document.getElementById("btn1").style.marginLeft = "10px";
		document.getElementById("btn1").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn1").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn2").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn2").style.marginTop = "210px";
		document.getElementById("btn2").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn2").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn3").style.clear = document.getElementById("ebtn3").style.clear;
		document.getElementById("btn3").style.marginTop = "210px";
		document.getElementById("btn3").style.height = document.getElementById("ebtn3").style.height;
		document.getElementById("btn3").style.width = document.getElementById("ebtn3").style.width;
		
		document.getElementById("btn4").style.clear = document.getElementById("ebtn4").style.clear;
		document.getElementById("btn4").style.marginTop = "210px";
		document.getElementById("btn4").style.height = document.getElementById("ebtn4").style.height;
		document.getElementById("btn4").style.width = document.getElementById("ebtn4").style.width;
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		showExam();
		
		document.getElementById("helptext").innerHTML = '\
<p><u>L1/L2 Exam Style Questions</u></p>\
<p>This part of the APP will ask 12 questions that are more like exam questions - some of the questions are level 1 and some are closer to level 2.</p>\
<p>Sit at a table and get pen and paper ready to help with your working out.</p>\
<p>Please use the calculator in the APP to work out the answers.</p>\
<p>What you tap into the calculator will be added to your results at the end for your working out.</p>\
<p>Use your pen and paper to write down the results of sub-totals if you need to.</p>\
<p>Most of the questions will have some help - so use the help button if you need to.</p>\
<p>If you can get over 65% <b>without using HELP</b> then you are well on the way to being prepared for your exam!</p>\
';
		//oktostart = false;
		//showHelp(570);
	}
	
	if (gametype == "EXAM") {
		examsNewL2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
		randomiseArray(examsNewL2);
		quizcodenum = 9;
		thisquizname = "L2 Exam Style";
		
		if ( qsheet == true ) {
		document.getElementById("handout").style.display = "block";
		document.getElementById("handout").innerHTML = "<span style=\"font-size:18px;\"><b><p>Your Name:</p><p>(" + thisquizname + ") Please try to answer all the questions.</p><p>Use a calculator and write all your working out in the space underneath each question.</p><p>Ask for help if you get stuck on a question.</p><b></span>";
	}
	else {
		document.getElementById("handout").style.display = "none";
	}
			
		quizlength = 12;
		if ( qsheet ) {
			quizlength = 30;
		}
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: L2 Exam Style Questions " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		document.getElementById("btn1").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn1").style.marginTop = "210px";
		document.getElementById("btn1").style.marginLeft = "10px";
		document.getElementById("btn1").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn1").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn2").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn2").style.marginTop = "210px";
		document.getElementById("btn2").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn2").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn3").style.clear = document.getElementById("ebtn3").style.clear;
		document.getElementById("btn3").style.marginTop = "210px";
		document.getElementById("btn3").style.height = document.getElementById("ebtn3").style.height;
		document.getElementById("btn3").style.width = document.getElementById("ebtn3").style.width;
		
		document.getElementById("btn4").style.clear = document.getElementById("ebtn4").style.clear;
		document.getElementById("btn4").style.marginTop = "210px";
		document.getElementById("btn4").style.height = document.getElementById("ebtn4").style.height;
		document.getElementById("btn4").style.width = document.getElementById("ebtn4").style.width;
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		showExam();
		
		document.getElementById("helptext").innerHTML = '\
<p><u>L1/L2 Exam Style Questions</u></p>\
<p>This part of the APP will ask 12 questions that are more like exam questions - some of the questions are level 1 and some are closer to level 2.</p>\
<p>Sit at a table and get pen and paper ready to help with your working out.</p>\
<p>Please use the calculator in the APP to work out the answers.</p>\
<p>What you tap into the calculator will be added to your results at the end for your working out.</p>\
<p>Use your pen and paper to write down the results of sub-totals if you need to.</p>\
<p>Most of the questions will have some help - so use the help button if you need to.</p>\
<p>If you can get over 65% <b>without using HELP</b> then you are well on the way to being prepared for your exam!</p>\
';
		//oktostart = false;
		//showHelp(570);
	}
	
	if (gametype == "GCSE") {
		randomiseArray(examsGCSE);
		quizcodenum = 10;
		thisquizname = "GCSE Exam Style";
		
		if ( qsheet == true ) {
		document.getElementById("handout").style.display = "block";
		document.getElementById("handout").innerHTML = "<span style=\"font-size:18px;\"><b><p>Your Name:</p><p>(" + thisquizname + ") Please try to answer all the questions.</p><p>Use a calculator and write all your working out in the space underneath each question.</p><p>Ask for help if you get stuck on a question.</p><b></span>";
	}
	else {
		document.getElementById("handout").style.display = "none";
	}
		
		quizlength = 15;
		if ( qsheet ) {
			quizlength = 30;
		}
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: GCSE Style Questions " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		document.getElementById("btn1").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn1").style.marginTop = "210px";
		document.getElementById("btn1").style.marginLeft = "10px";
		document.getElementById("btn1").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn1").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn2").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn2").style.marginTop = "210px";
		document.getElementById("btn2").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn2").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn3").style.clear = document.getElementById("ebtn3").style.clear;
		document.getElementById("btn3").style.marginTop = "210px";
		document.getElementById("btn3").style.height = document.getElementById("ebtn3").style.height;
		document.getElementById("btn3").style.width = document.getElementById("ebtn3").style.width;
		
		document.getElementById("btn4").style.clear = document.getElementById("ebtn4").style.clear;
		document.getElementById("btn4").style.marginTop = "210px";
		document.getElementById("btn4").style.height = document.getElementById("ebtn4").style.height;
		document.getElementById("btn4").style.width = document.getElementById("ebtn4").style.width;
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		showExam();
		
		document.getElementById("helptext").innerHTML = '\
<p><u>GCSE Exam Style Questions</u></p>\
<p>This part of the APP will ask 15 questions that are similar to exam questions</p>\
<p>Sit at a table and get pen and paper ready to help with your working out.</p>\
<p>Please use the calculator in the APP to work out the answers.</p>\
<p>What you tap into the calculator will be added to your results at the end for your working out.</p>\
<p>Use your pen and paper to write down the results of sub-totals if you need to.</p>\
<p>Most of the questions will have some help - so use the help button if you need to.</p>\
<p>If you can get over 65% <b>without using HELP</b> then you are well on the way to being prepared for your exam!</p>\
';
		//oktostart = false;
		//showHelp(570);
	}
	
	if (gametype == "E3") {
		examsNewE3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
		randomiseArray(examsNewE3);
		quizcodenum = 11;
		thisquizname = "E3 Exam Style";
		
		if ( qsheet == true ) {
		document.getElementById("handout").style.display = "block";
		document.getElementById("handout").innerHTML = "<span style=\"font-size:18px;\"><b><p>Your Name:</p><p>(" + thisquizname + ") Please try to answer all the questions.</p><p>Use a calculator and write all your working out in the space underneath each question.</p><p>Ask for help if you get stuck on a question.</p><b></span>";
	}
	else {
		document.getElementById("handout").style.display = "none";
	}
		
		quizlength = 10;
		if ( qsheet ) {
			quizlength = 30;
		}
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: E3 Style Questions " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		document.getElementById("btn1").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn1").style.marginTop = "210px";
		document.getElementById("btn1").style.marginLeft = "10px";
		document.getElementById("btn1").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn1").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn2").style.clear = document.getElementById("ebtn2").style.clear;
		document.getElementById("btn2").style.marginTop = "210px";
		document.getElementById("btn2").style.height = document.getElementById("ebtn2").style.height;
		document.getElementById("btn2").style.width = document.getElementById("ebtn2").style.width;
		
		document.getElementById("btn3").style.clear = document.getElementById("ebtn3").style.clear;
		document.getElementById("btn3").style.marginTop = "210px";
		document.getElementById("btn3").style.height = document.getElementById("ebtn3").style.height;
		document.getElementById("btn3").style.width = document.getElementById("ebtn3").style.width;
		
		document.getElementById("btn4").style.clear = document.getElementById("ebtn4").style.clear;
		document.getElementById("btn4").style.marginTop = "210px";
		document.getElementById("btn4").style.height = document.getElementById("ebtn4").style.height;
		document.getElementById("btn4").style.width = document.getElementById("ebtn4").style.width;
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		showExam();
		
		document.getElementById("helptext").innerHTML = '\
<p><u>GCSE Exam Style Questions</u></p>\
<p>This part of the APP will ask 10 questions that are similar to exam questions</p>\
<p>Sit at a table and get pen and paper ready to help with your working out.</p>\
<p>Please use the calculator in the APP to work out the answers.</p>\
<p>What you tap into the calculator will be added to your results at the end for your working out.</p>\
<p>Use your pen and paper to write down the results of sub-totals if you need to.</p>\
<p>Most of the questions will have some help - so use the help button if you need to.</p>\
<p>If you can get over 65% <b>without using HELP</b> then you are well on the way to being prepared for your exam!</p>\
';
		//oktostart = false;
		//showHelp(570);
	}
	
	
	
	if (gametype == "HELP") {
		
		quizcodenum = 0;
		thisquizname = "Exam Help";
		quizlength = 15;
		qarray = helpArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p><p>Online quiz for: Exam Help " + versionstr + "</p>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		//document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"clear:both;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewProb()\">View help On this topic</button>";
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = '\
		<p><u><b>Doing the exam</u></b></p>\
<p>The more time you spend revising up on the topics the better your chances of getting thew grade you want.</p>\
<p>But you can also improve your chances by adopting some good exam strategies.</p>\
<p>This quiz will hep you you to remember good strategies to help you .</p>\
';
	}
	
	if (gametype == "INIT") {
		
		quizcodenum = -1;
		thisquizname = "Asses Prior Understanding";
		quizlength = InitArray.length;
		qarray = InitArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p>";
		//document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		//document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"clear:both;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewProb()\">View help On this topic</button>";
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = "No help available for this quiz";
	}
	
	if (gametype == "ASSESS") {
		
		quizcodenum = -2;
		thisquizname = "Asses Prior Understanding";
		quizlength = AssessArray.length;
		qarray = AssessArray;
		thisQuizID = getRndInteger(1000000, 9999999);
		saveResults(myName, mytutor, thisquizname, 0, Date(), "Mobile Quiz Client: " + versionstr + "<br><br>" + checkBrowser(), "Quiz Started", thisQuizID);
		document.getElementById("answers").innerHTML +=  "<div id=\"gettext\" style=\"padding:5px;height:auto;background-color:lightgreen;clear:both;font-size:10px;width:270px;font-weight:bold;margin-top:10px;\" onclick=\"doDownload()\">Tap Here to save results to your device downloads folder<br>Find the results file using your device FILES app<br><br>Send results to your tutor on Teams</b></button>";
		document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\">Result: %SCORE%</p>";
		//document.getElementById("answers").innerHTML += "<p style=\"font-size:18px;\"><u>Result Code (send to tutor): <b>%CODE%</b></u></p>";
		
		//document.getElementById("answers").innerHTML +=  "<button id=\"viewStud\" style=\"clear:both;background-color:powderblue;font-size:12px;width:auto;font-weight:bold;margin-top:5px;\" onclick=\"viewProb()\">View help On this topic</button>";
		
		if ( document.getElementById("training").checked == true ) {
			document.getElementById("studylink").innerHTML = "";
		}
		
		document.getElementById("helptext").innerHTML = "No help available for this quiz";
	}
	
	document.getElementById("answers").innerHTML += "<hr>";
	
	//clearTimeout(qtimeout);
	//clearTimeout(btimeout);
	timerbarwidth = inittimerbarwidth;
	document.getElementById("printanswers").disabled = true;
	document.getElementById("training").disabled = true;
	
	//if ( document.getElementById("training").checked ) {
		//quizlength = 999;
	//}
	//getHigh();
	if ( oktostart ) {
		startGame();
	}
}

var oktostart = true;

/*
function copyAttrs(targt, sourc) { 
            [...sourc.attributes].forEach(attr => { 
                targt.setAttribute(attr.nodeName, attr.nodeValue) 
            }) 
        } 
  
        function GFG_Fun() { 
            var el1 = document.getElementById("el1"); 
            var el2 = document.getElementById("el2"); 
            copyAttrs(el2, el1); 
            down.innerHTML =  
              "All Attributes of Element 1 are copied to element 2."; 
        } */

var greenOffTimeout;
function feedbackCorrect(elem) {
	feedbackActive = false;
	elem.style.backgroundColor = "#00ff00";
	greenOffTimeout = setTimeout(feedbackOff, 300);
}

var feedbackActive = false;

var redOffTimeout;
function feedbackInCorrect(elem) {
	feedbackActive = false;
	elem.style.backgroundColor = "#ff0000";
	greenOffTimeout = setTimeout(feedbackOff, 300);
}

function feedbackOff(elem) {
	clearTimeout(greenOffTimeout);
	clearTimeout(redOffTimeout);
	feedbackActive = false;
	document.getElementById("btn1").style.backgroundColor = "white";
	document.getElementById("btn2").style.backgroundColor = "white";
	document.getElementById("btn3").style.backgroundColor = "white";
	document.getElementById("btn4").style.backgroundColor = "white";
}

var previouscolour = "";
function hOn(elem) {
	previouscolour = elem.style.backgroundColor;
	elem.style.backgroundColor = "#bbbbbb";
}

function hOff(elem) {
	elem.style.backgroundColor = previouscolour;
}

function pOn(elem) {
	previouscolour = elem.style.backgroundColor;
	elem.style.backgroundColor = "#aaaaaa";
}

function pOff(elem) {
	elem.style.backgroundColor = previouscolour;
}

function loadup() {
	//getHigh();
	//startGame();
	
	//document.getElementById("calculatorholder").style.display = "none";
	
	//hideDiv(document.getElementById("calculatorholder"),0);
	
	document.getElementById("versionstr").innerHTML = versionstr;
	
	$("#calculatorholder").fadeOut();
	document.getElementById("printanswers").disabled = true;
	clearInterval(this.interval);
	myGameArea.stop();
	gamestopped = true;
	var mywidth = window.innerWidth - 50;
	
	if ( mywidth > 500 ) mywidth = 500;
	
	currentzoom = mywidth/350;
	document.body.style.zoom = currentzoom * 0.97;
	
	window.scrollTo(0,0);
	window.parent.scrollTo(0,0);
	
	//myName = nametags[getRndInteger(0, nametags.length-1)];
	myName = "";
	
	var foo = myName;
	if ( myName == "" || mytutor == "" || mytutor == "none" ) {
		document.getElementById("helptext").innerHTML = '\
		<p style="text-align:center;">Maths Practice APP ' + versionstr + '<p>\
		<br><br>\
		<p><span style="float:left;font-size:14px;">Enter your name:</span><input maxlength="20" style="padding:5px;margin-left:5px;float:left;font-size:14px;border-radius:10px;background-color:white;border-style:black;width:160px;height:auto;" id="learnername" type="text"></input>\
		<br><br><p><span style="float:left;font-size:14px;margin-right:10px;">Your maths tutor:</span><select id="tutors" name="names" ></p>\
			<option value="none">Choose your tutor:</option>\
			<option value="Not Sure">Not Sure</option>\
			<option value="Barbara Yates">Barbara Yates</option>\
			<option value="Christine Thistlewaite">Christine Thistlewaite</option>\
			<option value="Debra Williams">Debra Williams</option>\
			<option value="Gemma Beacham">Gemma Beacham</option>\
			<option value="John Mwanakatwe">John Mwanakatwe</option>\
			<option value="Jessica Harvey">Jessica Harvey</option>\
			<option value="Liz Smith">Liz Smith</option>\
			<option value="Sarah Partridge">Sarah Partridge</option>\
			<option value="Simon Lee">Simon Lee</option>\
			<option value="Tom Nicholson">Tom Nicholson</option>\
			<option value="Tony Bunting">Tony Bunting</option>\
		</select></p>\
		<p style="text-align:center;color:black;font-size:14px;">If you have problems with this APP try it using Chrome<p>\
		<p style="text-align:center;color:black;font-size:14px;">The best way to use this APP is to have pen and paper handy to help with working out.<p>\
		<p style="text-align:center;color:black;font-size:14px;">Use the in-APP calculator when it is shown.<p>\
		<p style="width:100%;text-align:center;clear:both;float:left;color:black;margin-left:5px;"><button onclick="hideInputs()">CONTINUE</button></p>\
		';
		
		document.getElementById("calculatorholder").style.height = document.getElementById("buttondiv").style.height;
		
		showHelp(560);
		return;
	}

	
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

var currentzoom = 1.0;
function plus() {
	currentzoom += 0.05;
	if ( currentzoom > 2.5 ) currentzoom = 2.5;
	document.body.style.zoom = currentzoom;
}

function minus() {
	currentzoom -= 0.05;
	if ( currentzoom < 0.4 ) currentzoom = 0.4;
	document.body.style.zoom = currentzoom;
}

function elemOverflow(el) { 
                var curOverf = el.style.overflow; 
                  
                if ( !curOverf || curOverf === "visible" ) 
                    el.style.overflow = "hidden"; 
                  
                var isOverflowing = el.clientWidth < el.scrollWidth
                    || el.clientHeight < el.scrollHeight; 
                  
                el.style.overflow = curOverf; 
                  
                return isOverflowing; 
} 

function showHelp(hgt) {
	helpViewed = " (H)";
	
	showDiv(document.getElementById("helpholder"), hgt);
	document.getElementById("helpholder").style.display = "block";
	document.getElementById("helptext").style.display = "block";
	document.getElementById("helpfoot").style.display = "block";
}

function hideHelp() {

	hideDiv(document.getElementById("helpholder"),0);
	document.getElementById("helpholder").style.display = "none";
	document.getElementById("helptext").style.display = "none";
	document.getElementById("helpfoot").style.display = "none";
	if ( oktostart == false ) {
		oktostart = true;
		startGame();
	}
}

function showExam() {
document.getElementById("examquestionfoot").style.display = "block";
	document.getElementById("examquestiontext").style.display = "block";
	document.getElementById("examquestionholder").style.display = "block";
	document.getElementById("examquestionholder").style.height = "310px";
}

function hideExam() {
document.getElementById("examquestionfoot").style.display = "none";
	document.getElementById("examquestiontext").style.display = "none";
	document.getElementById("examquestionholder").style.display = "none";
}

function colHelp(col) {
document.getElementById("helpholder").style.backgroundColor = col;
	document.getElementById("helptext").style.backgroundColor = col;
	document.getElementById("helpfoot").style.backgroundColor = col;
}

function colExam(col) {
document.getElementById("examquestionholder").style.backgroundColor = col;
	document.getElementById("examquestiontext").style.backgroundColor = col;
	document.getElementById("examquestionfoot").style.backgroundColor = col;
}

function CopyAnswersToClipboard(element) {
	
  document.getElementById("answertextonly").value = document.getElementById("answers").innerText;
  /*element = document.getElementById("answertextonly");
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();*/
  document.getElementById("answertextonly").select();
  document.execCommand("copy");
}

var mytutor = "";
function sendEmail() {
	//window.open("mailto:yourtutor@lmc.ac.uk?subject=Maths App Results&body=" + document.getElementById("answers").innerHTML);
	var mytutor = document.getElementById("tutors").value;
	if ( mytutor == "none" ) {
		document.getElementById("helptext").innerHTML = "Use the <u>Select your tutor</u> list to choose your tutor who takes you for your maths sessions";
		showHelp(570);
	}
	else {
	document.getElementById("answers").innerHTML = document.getElementById("answers").innerHTML.replace("%tutor%", mytutor);
	document.getElementById("gettext").style.display = "none";
	document.getElementById("emailresults").style.display = "none";
	CopyAnswersToClipboard(document.getElementById("answers"));
	document.getElementById("emailink").click();
	document.getElementById("gettext").style.display = "block";
	document.getElementById("emailresults").style.display = "block";
	}
}

function selectall() {
	
	document.getElementById("mainapp").style.display = "None";
	document.getElementById("handout").style.top = "0px";
	
	toggleOptions(true);
    
	window.getSelection()
    .selectAllChildren(
      document.getElementById("handout") 
    );
    //document.getElementById("optionsheader").style.display = "None";
    window.print();
	
	document.getElementById("handout").style.top = "600px";
	document.getElementById("mainapp").style.display = "block";
	
}

var versionstr = "V.162";

/* OTHSCRIPT */


var outer = "";

var personnames = ["David", "Callum", "Susan", "Wendy", "Liz", "Amir", "Robby", "Bobby", "Edward", "Ethan", "Molly", "Susie", "Warren", "Kayley", "Lindsey", "Carol", "Emma", "Tom", "Mike", "Matty", "Lizzy", "Paul", "Ryan", "Becky", "Peter", "Lydia", "Arla", "David", "Layla", "Amelia", "Ava", "Freya", "Sophie", "Evelyn", "Grace", "Elsie", "Alice", "Jessica","George", "Arthur", "Oscar", "Muhammad", "William", "Freddie", "Reuben", "Dylan", "Finley"];

var treatnames = ["birthday", "present", "competition", "surprise"];

var questionsasked = [];

var optionsShown = true;

var currentscale = 1.0;
var currentwidth = 96;

function WidthPlus() {
	currentwidth = currentwidth + 3;
	document.getElementById("thisquestiondiv").style.width = currentwidth + "%";
}

function WidthMinus() {
	currentwidth = currentwidth - 3;
	document.getElementById("thisquestiondiv").style.width = currentwidth + "%";
}


function upscale() {
	currentscale = currentscale + 0.1;
	//currentwidth = currentwidth - 10;
	document.getElementById("thisquestiondiv").style.transform = "scale(" + currentscale + ")";
	document.getElementById("thisquestiondiv").style.marginTop = Number((currentscale-1)*200).toFixed(0) + "px";
	document.getElementById("thisquestiondiv").style.marginLeft = Number((currentscale-1)*500).toFixed(0) + "px";
}


function downscale() {
	currentscale = currentscale - 0.1;
	//currentwidth = currentwidth + 10;
	//document.getElementById("mainquestion").innerHTML = projectlist[slidenumber].replace("%transform%", "width:" + currentwidth + "%;margin-top:" + Number((currentscale-1)*180).toFixed(0) + "px;margin-left:" + Number((currentscale-1)*500).toFixed(0) + "px;transform: scale(" + currentscale + ")");
	document.getElementById("thisquestiondiv").style.transform = "scale(" + currentscale + ")";
	document.getElementById("thisquestiondiv").style.marginTop = Number((currentscale-1)*200).toFixed(0) + "px";
	document.getElementById("thisquestiondiv").style.marginLeft = Number((currentscale-1)*500).toFixed(0) + "px";
}

function doSection(sec) {
	var secstr;
	switch (sec) {
    	case 1:
        	secstr = "basicnumber";
            break;
    }
	window.getSelection()
    .selectAllChildren(
      document.getElementById(secstr) 
    );
}

function minimal() {

	toggleOptions(true);
    
	window.getSelection()
    .selectAllChildren(
      document.getElementById("questionsheet") 
    );
    document.getElementById("optionsheader").style.display = "None";
    window.print();
	
}

function checkLevelBoxes(level) {
	if ( level == "e3" ) {
		checkAllBoxes(false);
		document.getElementById("addCharts").checked = true;
		document.getElementById("titlebox").value = "Mixed Topics Entry 3";
		document.getElementById("placeValueWhole").checked = true;
		document.getElementById("addE3Exam").checked = true;
		document.getElementById("orderingWhole").checked = true;
		document.getElementById("addE3Exam").checked = true;
		document.getElementById("addRound10s").checked = true;
		document.getElementById("addRound100s1000s").checked = true;
		document.getElementById("addsubchk100").checked = true;
		document.getElementById("addAddWheels").checked = true;
		document.getElementById("addmul10s").checked = true;
		document.getElementById("addMulWheels12s").checked = true;
		document.getElementById("addmulMulti").checked = true;
		document.getElementById("adddivNonCalc").checked = true;
		document.getElementById("addfracComp").checked = true;
		document.getElementById("addfracNonCalcNumer1").checked = true;
		//document.getElementById("addAverages1").checked = true;
		//document.getElementById("addAverages2").checked = true;
		//document.getElementById("addAverages3").checked = true;
		//document.getElementById("addAverages4").checked = true;
		document.getElementById("addPerim").checked = true;
		document.getElementById("addArea").checked = true;
		document.getElementById("addSymm").checked = true;
		document.getElementById("addMetricEasy").checked = true;
		document.getElementById("addE3Exam").checked = true;
		document.getElementById("addE3Exam").checked = true;
		document.getElementById("addE3Exam").checked = true;
		document.getElementById("addE3Exam").checked = true;
	}
	else if ( level == "l1" ) {
		document.getElementById("titlebox").value = "Mixed Topics Level 1";
		checkAllBoxes(false);
		document.getElementById("addMoney").checked = true;
		document.getElementById("orderingWhole").checked = true;
		document.getElementById("orderingDec").checked = true;
		document.getElementById("ratioEasy").checked = true;
		document.getElementById("ratioSimplify").checked = true;
		document.getElementById("addRound10s").checked = true;
		document.getElementById("addRound100s1000s").checked = true;
		document.getElementById("addRound1DP2DP").checked = true;
		document.getElementById("addsubchk100").checked = true;
		document.getElementById("addmul10s").checked = true;
		document.getElementById("addMulWheels12s").checked = true;
		document.getElementById("addmulMulti").checked = true;
		document.getElementById("addNegs").checked = true;
		document.getElementById("addBestBuys").checked = true;
		document.getElementById("addmulMultiPlus").checked = true;
		document.getElementById("adddivNonCalc").checked = true;
		document.getElementById("addfracNonCalcNumer123").checked = true;
		document.getElementById("addfracNonCalcNumer1").checked = true;
		//document.getElementById("addAverages1").checked = true;
		//document.getElementById("addAverages2").checked = true;
		document.getElementById("addAverages3").checked = true;
		document.getElementById("addAverages4").checked = true;
		document.getElementById("addPerim").checked = true;
		document.getElementById("addArea").checked = true;
		document.getElementById("addSymm").checked = true;
		document.getElementById("addMetricEasy").checked = true;
		document.getElementById("addAnglesLines").checked = true;
		document.getElementById("addTimeTables").checked = true;
		document.getElementById("addCharts").checked = true;
		document.getElementById("addClocks").checked = true;
		document.getElementById("addFDP").checked = true;
		document.getElementById("addFracSimp1").checked = true;
		document.getElementById("addpercNonCalc").checked = true;
	}
	else if ( level == "l2" ) {
		checkAllBoxes(false);
		document.getElementById("titlebox").value = "Mixed Topics Level 2";
		document.getElementById("placeValueDec").checked = true;
		document.getElementById("addMoneyL2").checked = true;
		document.getElementById("orderingDec").checked = true;
		document.getElementById("ratioEasy").checked = true;
		document.getElementById("ratioHard").checked = true;
		document.getElementById("ratioSimplify").checked = true;
		document.getElementById("add5AL1L2").checked = true;
		document.getElementById("addRound100s1000s").checked = true;
		document.getElementById("addRound1DP2DP").checked = true;
		document.getElementById("addRound1DP3DP").checked = true;
		document.getElementById("addsubchk100").checked = true;
		document.getElementById("addsubchk1000").checked = true;
		//document.getElementById("addmul10s").checked = true;
		document.getElementById("addmulMultiPlus").checked = true;
		document.getElementById("addmulMultiPlusPlus").checked = true;
		document.getElementById("addNegs").checked = true;
		document.getElementById("addBestBuys").checked = true;
		document.getElementById("addmulMultiPlus").checked = true;
		document.getElementById("adddivNonCalc").checked = true;
		document.getElementById("adddivMulti").checked = true;
		document.getElementById("addfracNonCalcNumer123").checked = true;
		//document.getElementById("addfracNonCalcNumer1").checked = true;
		document.getElementById("addfracNonCalcPlus").checked = true;
		document.getElementById("addAverages1").checked = true;
		document.getElementById("addAverages2").checked = true;
		document.getElementById("addAverages3").checked = true;
		document.getElementById("addAverages4").checked = true;
		document.getElementById("addPerim").checked = true;
		document.getElementById("addArea").checked = true;
		//document.getElementById("addSymm").checked = true;
		document.getElementById("addMetricEasy").checked = true;
		document.getElementById("addMetric").checked = true;
		document.getElementById("addAnglesLines").checked = true;
		document.getElementById("addTimeTables").checked = true;
		document.getElementById("addCharts").checked = true;
		//document.getElementById("addClocks").checked = true;
		document.getElementById("addFDP").checked = true;
		document.getElementById("addFracSimp2").checked = true;
		document.getElementById("addpercNonCalc").checked = true;
		document.getElementById("addpercCalc").checked = true;
		document.getElementById("addfracCalc").checked = true;
		document.getElementById("add5AL1L2").checked = true;
	}
}

function toggleOptions(force) {
	if ( optionsShown || force ) {
    	//document.getElementById("optiondiv").style.display = "None";
        //document.getElementById("optionsheader").style.display = "None";
        optionsShown = false;
    }
    else {
    	document.getElementById("optiondiv").style.display = "Block";
        document.getElementById("optionsheader").style.display = "Block";
        optionsShown = true;
    }
}

/* Image based questions.... */

function getSumSearch() {
	var retstr = "<span style=\"font-size:30px;\"><br>";
	
	retstr += "Maths can sometimes be hard work.";
	retstr += "<br><br>Don't just sit there feeling fed-up - Have a go at the number search.";
	retstr += "<br><br>Find rows of numbers that add to 10 (across, up/down, diagonals too)<br><br>";
	retstr += "(it tells you how many there are to find underneath the grid)<br></span>";
	
	wbox = "";
	
	retstr += "<img style=\"margin-left:20px;margin-top:15px;\" width=\"60%\" src=\"images/sumsearch/s" + getRndInteger(1,10) + ".jpg\"><img style=\"position:absolute;margin-top:260px;\" width=\"20%\" src=\"images/timeout.jpg\">";
	
	
	
	return retstr;
}

function getAnglesLines() {
	var retstr = "<br>";
	wbox = "";
	
	retstr += "<img style=\"margin-left:30px;\" src=\"images/AnglesShapes/as" + getRndInteger(1,58) + ".jpg\">";
	
	return retstr;
}

function getE1E2() {
	var retstr = "<br>";
	wbox = "";
	
	retstr += "<img style=\"margin-left:30px;\" src=\"images/E1E2/e" + getRndInteger(1,158) + ".jpg\">";
	
	return retstr;
}


function getL1RevisionImage() {
	var retstr = "<br>";
	wbox = "";
	
	retstr += "<img style=\"margin-left:30px;\" width=\"85%\" src=\"images/L1RevisionImages/1-" + getRndInteger(1,24) + ".jpg\">";
	
	return retstr;
}

function getE1() {
	var retstr = "<br>";
	wbox = "";
	
	retstr += "<img style=\"margin-top:20px;margin-left:30px;\" width=\"50%\" src=\"images/E1E2/e" + getRndInteger(1,158) + ".jpg\">";
	
	return retstr;
}


function get5ADayL1L2() {
	var retstr = "<br>";
	wbox = "";
	
	retstr += "<img style=\"margin-left:30px;\" src=\"images/L1L25ADay/q" + getRndInteger(1,17) + ".jpg\">";
	
	return retstr;
}



/ * Add Mul wheels */

function getAddPuzzles() {

	var sw = getRndInteger(1,5);
	switch (sw) {
	
	case 1:
		return getAddWheels();
		break;
	case 2:
		return getAddWheels();
		break;
	case 3:
		return getAddWheels();
		break;
	case 4:
		return getAddWheels();
		break;
	case 5:
		return getAddWheels();
		//return getAddPyramids();
		break;
	}
}

function getAddWheels() {
	
	var retstr = "Add the middle number to the outer number - put the answer in the outer ring (see example on each wheel)<br><br>";
	
	retstr += "<img style=\"margin-left:30px;\" width=\"75%\" src=\"images/addwheels/add" + getRndInteger(1,16) + ".jpg\">";
	
	return retstr;
}

function getAddPyramids() {
	
	var retstr = "Build the pyramid by adding up the numbers and following the clues.<br><br>";
	
	retstr += "<img style=\"margin-left:30px;\" width=\"50%\" src=\"images/pyramids/add" + getRndInteger(1,18) + ".jpg\">";
	
	return retstr;
}

function getMulWheels(a,b) {
	var retstr = "Multiply the middle number by the outer number - put the answer in the outer ring<br><br>";
	
	retstr += "<img style=\"margin-left:30px;\" width=\"25%\" src=\"images/mulwheels/mul" + getRndInteger(2,6) + ".jpg\">";
	retstr += "<img style=\"margin-left:30px;\" width=\"25%\" src=\"images/mulwheels/mul" + getRndInteger(7,12) + ".jpg\">";
	
	return retstr;
}

function getTableMazes() {
	var retstr = "Spend 5 minutes filling in the gaps in the times tables and metric units to complete the information.<br><br>You could use this information in the next sections to help you with the questions!<br><br>";
	
	retstr += "<p style=\"float:right;margin-right:200px;\" >Remember:<br>10mm = 1cm, 100cm = 1m, 1000m = 1km<br>1000mg = 1g, 1000g = 1kg, 1000kg = 1 tonne<br>10ml = 1cl, 1000ml = 1L, 100cl = 1L</p>";
		
	retstr += "<img style=\"margin-left:30px;\" width=\"80%\" src=\"images/mazes/maze" + getRndInteger(1,26) + ".jpg\">";
	
	return retstr;
}

function getClockFaces() {
	var retstr = "Write the answers in both 12 and 24 hour format.<br><br>";
	
	retstr += "<img style=\"margin-left:75px;\" width=\"75%\" src=\"images/clocks/clock" + getRndInteger(1,20) + ".jpg\">";
	
	return retstr;
}

function getFracCompare() {

	if ( getRndInteger(1,100) > 50 ) {
		var retstr = "Write below each diagram what the shaded fraction is.<br>&nbsp;&nbsp;&nbsp;&nbsp;Write > in the box if the fraction on the left is bigger.<br>&nbsp;&nbsp;&nbsp;&nbsp;Write < if it is less.";
	
		retstr += "<br><br><img style=\"margin-left:75px;\" width=\"35%\" src=\"images/compares/frac" + getRndInteger(1,36) + ".jpg\">";
	
		return retstr;
	}
	else {
		var retstr = "Write below each diagram what the shaded fraction is.<br>&nbsp;&nbsp;&nbsp;&nbsp;Shade the result of the addition or subtraction (write down what the new fraction is).";
	
		retstr += "<br><br><img style=\"margin-left:75px;\" width=\"35%\" src=\"images/fracaddsub/addsub" + getRndInteger(1,37) + ".jpg\">";
	
		return retstr;
	}
}

/* */

/***********************/

/* Negs */

function getNegs() {
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	
	var times = ["9:00 AM","10:00 AM", "11:00 AM", "12:00 PM", "Mid-day", "1:00 PM"];
	var times2 = ["8:00 PM","9:00 PM", "10:00 PM", "11:00 PM", "Midnight", "1:00 AM"]
	
	var retstr = "";
	
	var sw = getRndInteger(1,5);
	//sw = 5;
	switch (sw) {
		case 1:
			var starttemp = 0 - getRndInteger(2,8);
			var endtemp = getRndInteger(2,6);
			retstr += thisname + " measures the temperature in the morning and writes down " + starttemp + " degrees";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;By mid day the temperature was " + endtemp + " degrees";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How many degrees had the temperature risen by?";
			
			break;
		case 2:
			var starttemp = getRndInteger(2,8);
			var endtemp = 0 - getRndInteger(2,6);
			retstr += thisname + " measures the temperature in the afternoon and writes down " + starttemp + " degrees";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;By midnight the temperature was " + endtemp + " degrees";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How many degrees had the temperature gone down by?";
			
			break;
		case 3:
			var starttemp = 0 - getRndInteger(1,8);
			var uptemp = getRndInteger(1,3);
			retstr += thisname + " measures the temperature at 7 AM and writes down " + starttemp + " degrees";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Every hour the temperature rises by " + uptemp + " degree(s)";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;What was the temperature at " + times[getRndInteger(0,times.length-1)];
			
			break;
		case 4:
			var starttemp = getRndInteger(2,12);
			var downtemp = getRndInteger(1,3);
			retstr += thisname + " measures the temperature at 5 PM and writes down " + starttemp + " degrees";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Every hour the temperature goes down by " + downtemp + " degree(s)";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;What was the temperature at " + times2[getRndInteger(0,times.length-1)];
			
			break;
		case 5:
			wbox = "";
			var starttemp = getRndInteger(1,8);
			var downtemp = getRndInteger(1,3);
			retstr += "At mid day the temperature was recorded in 5 cities:";
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;City A &nbsp;&nbsp;&nbsp;&nbsp;" + Number(-20 + getRndInteger(1,40)) + " degree(s)";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;City B &nbsp;&nbsp;&nbsp;&nbsp;" + Number(-20 + getRndInteger(1,40)) + " degree(s)";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;City C &nbsp;&nbsp;&nbsp;&nbsp;" + Number(-20 + getRndInteger(1,40)) + " degree(s)";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;City D &nbsp;&nbsp;&nbsp;&nbsp;" + Number(-20 + getRndInteger(1,40)) + " degree(s)";
			retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;City E &nbsp;&nbsp;&nbsp;&nbsp;" + Number(-20 + getRndInteger(1,40)) + " degree(s)";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;a) List cities that have the same temperature (write none if they are all different)<br><br>";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;b) Write down the coldest city (write all of them if there are more than one)<br><br>";
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;c) Write down the warmest city (write all of them if there are more than one)<br><br>"
			
			retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;d) How many degrees warmer was the warmest city than the coldest city?<br><br>"
			
			break;
	}
	
	return retstr;
}


/******** */

/* Symmetry */

var shapes = [	 "<div style=\"margin-left:200px;height: 150px;width: 150px;border:solid;\"></div>",
				 "<div style=\"margin-left:200px;height: 150px;width: 350px;border:solid;\"></div>",
				 "<div style=\"margin-left:200px;width: 0;height: 0;border-left: 150px solid transparent;border-right: 150px solid transparent; border-bottom: 150px solid #bbbbbb;\"></div>",
				 "<div style=\"margin-left:200px;height: 150px;width: 150px;border:solid;\"></div>",
				 "<div style=\"margin-left:200px;height: 150px;width: 350px;border:solid;\"></div>",
				 "<div style=\"margin-left:200px;width: 0;height: 0;border-left: 150px solid transparent;border-right: 150px solid transparent; border-bottom: 150px solid #bbbbbb;\"></div>",
				"<div style=\"margin-left:200px;height: 150px;width: 350px;background-color: #bbbbbb;border-radius: 50%;\"></div>",
				 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
					 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
						 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
				 "<div style=\"font-family:Wingdings;margin-top:-100px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing%</div>",
				 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
				 "<div style=\"font-family:Wingdings;margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing%</div>",
				 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
				"<div style=\"font-family:Wingdings;margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing%</div>",
				 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
				 "<div style=\"font-family:Wingdings;margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing%</div>",
				 "<div style=\"font-family:'Wingdings 2';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing2%</div>",
				 "<div style=\"font-family:'Wingdings 2';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing2%</div>",
				 "<div style=\"font-family:'Wingdings 2';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing2%</div>",
				 "<div style=\"font-family:'Wingdings 2';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing2%</div>",
				 "<div style=\"font-family:'Wingdings 2';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%wing2%</div>",
				 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
				 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
				 "<div style=\"margin-top:-100px;margin-bottom:-80px;margin-left:200px;font-size:240px;color:#bbbbbb\">%letter%</div>",
				 "<div style=\"font-family:'Webdings';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%web%</div>",
				  "<div style=\"font-family:'Webdings';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%web%</div>",
				   "<div style=\"font-family:'Webdings';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%web%</div>",
				    "<div style=\"font-family:'Webdings';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%web%</div>",
					 "<div style=\"font-family:'Webdings';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%web%</div>",
					  "<div style=\"font-family:'Webdings';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%web%</div>",
					   "<div style=\"font-family:'Webdings';margin-top:-80px;margin-bottom:-100px;margin-left:200px;font-size:240px;color:#bbbbbb\">%web%</div>",
			];
			
var letters = ["$", "=", "+", "{", "}", "<", ">", "A", "B", "D", "X", "E", "F", "H", "L", "M", "N", "S", "T", "V", "W", "Y", "8", "&#937", "&#9674", "&#9829", "&#74"];

var wings = ["&#74", "&#241", "&#244", "&#243", "&#245", "&#248", "&#120", "&#203", "&#178", "&#179", "&#123", "&#122", "&#246"];

var wing2s = ["&#53", "&#85", "&#87", "&#105", "&#169", "&#170", "&#179", "&#186", "&#188", "&#192", "&#194", "&#195", "&#204"];

var webs = ["&#163","&#37","&#46","&#47","&#55","&#56","&#57","&#58","&#71","&#87","&#88","&#108","&#134","&#135","&#180","&#188","&#234","&#241","&#230"];

function getSymmetry() {
	var retstr = "Draw all the lines of symmetry on the shape below (write <i>no symmetry</i> if you do not think there is any):<br>";
	
	retstr += shapes[getRndInteger(0,shapes.length-1)];
	
	if ( retstr.includes("%letter%") ) {
		retstr = retstr.replace("%letter%", letters[getRndInteger(0,letters.length-1)]);
	}
	else if ( retstr.includes("%wing%") ) {
		retstr = retstr.replace("%wing%", wings[getRndInteger(0,wings.length-1)]);
	}
	else if ( retstr.includes("%wing2%") ) {
		retstr = retstr.replace("%wing2%", wing2s[getRndInteger(0,wing2s.length-1)]);
	}
	else if ( retstr.includes("%web%") ) {
		retstr = retstr.replace("%web%", webs[getRndInteger(0,webs.length-1)]);
	}
	else {
		// nothing to do
	}
	
	return retstr;
}

/* end Symm */

/* L1 Exams */

function getExamL1() {
	
	var thisname = personnames[getRndInteger(0, personnames.length-1)];
	var retstr = "";
	
	switch (getRndInteger(1,10)) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			times1 = ["11:00 am", "11:30 am", "1:30m", "1:45", "2:00 pm", "3:45 pm", "4:15 pm"];
			times2 = [2, 3, 4, 5];
			times3 = [5, 10];
			retstr += thisname + " wants to arrive at his destination no later than " 
			break
	}
	
	return "exam L1";
}


/*********/

/****************** BEST BUYS ******************************************/

function getBestBuys() {
	
    return getBestBuys1();
}



/****************** END BEST BUYS ******************************************/

/****************** UNITS ******************************************/

var cmarr = ["cm", "centimetres"];
var marr = ["m", "metres"];
var mmarr = ["mm", "millimetres"];
var kmarr = ["km", "kilometres"];

var mgarr = ["mg", "milligrams"];
var gmarr = ["g", "grams"];
var kgarr = ["kg", "kilograms"];

var mlarr = ["ml", "millilitres"];
var clarr = ["cl", "centilitres"];
var Larr = ["L", "litres"];

var one10 = [5, 10];
var one100 = [50, 100];
var one1000 = [500, 1000];

var lobjs = ["length of a pencil", "height of a person", " length of a bus", "height of a mouintain", "distance to London", "length of your fingernail", "diameter of a 1p coin"]; 

function getlobjs() {
	return lobjs[getRndInteger(0,lobjs.length-1)];
}

var wobjs = ["weight of an apple", "weight of a person", " weight of a book", "length of a car"];

function getwobjs() {
	return wobjs[getRndInteger(0,wobjs.length-1)];
}

var vobjs = ["amount of water held by spoon", "amount of water in a lake", "capacity of a bottle of fizzy drink", "capacity of a car petrol tank", "capacity of a wine glass"]; 

function getvobjs() {
	return vobjs[getRndInteger(0,vobjs.length-1)];
}

function get10() {
	return one10[getRndInteger(0,one10.length-1)];
}

function get100() {
	return one100[getRndInteger(0,one100.length-1)];
}

function get1000() {
	return one1000[getRndInteger(0,one1000.length-1)];
}

function getLength() {
   
    var variation = getRndInteger(1,9);
    
    switch (variation) {
    	case 1: // M -> MM
        	var retstr = "What is " + getRndInteger(3,10) + " " + marr[getRndInteger(0,1)] + " in " + mmarr[getRndInteger(0,1)] + "?";
            break;
        case 2: // M -> CM
        	var retstr = "What is " + getRndInteger(3,20) + " " + marr[getRndInteger(0,1)] + " in " + cmarr[getRndInteger(0,1)] + "?";
            break;
        case 3: // CM -> MM
        	var retstr = "What is " + getRndInteger(3,20) + " " + cmarr[getRndInteger(0,1)] + " in " + mmarr[getRndInteger(0,1)] + "?";
            break;
        case 4: // MM -> CM
        	var retstr = "What is " + getRndInteger(3,20)*get10() + " " + mmarr[getRndInteger(0,1)] + " in " + cmarr[getRndInteger(0,1)] + "?";
            break;
        case 5: // KM -> M
        	var retstr = "What is " + getRndInteger(2,10) + " " + kmarr[getRndInteger(0,1)] + " in " + marr[getRndInteger(0,1)] + "?";
            break;
        case 6: // KM -> CM
        	var retstr = "What is " + getRndInteger(2,4) + " " + kmarr[getRndInteger(0,1)] + " in " + marr[getRndInteger(0,1)] + " AND " + cmarr[getRndInteger(0,1)] + "?";
            break;
        case 7: // M -> KM
        	var retstr = "What is " + getRndInteger(2,10)*get100() + " " + marr[getRndInteger(0,1)] + " in " + kmarr[getRndInteger(0,1)] + "?";
            break;
        case 8: // CM -> KM
        	var retstr = "What is " + getRndInteger(2,9)*100000 + " " + cmarr[getRndInteger(0,1)] + " in " + marr[getRndInteger(0,1)] + " AND " + kmarr[getRndInteger(0,1)] + "?";
            break;
        case 9:
        	var retstr = "What metric unit would be best to describe the " + getlobjs() + "?";
            if ( getRndInteger(1,100) > 50 ) {
            	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Give a sensible value for this measurement.";
            }
            break;
    }
    
	return retstr;
}

function getLengthEasy() {
   
    var variation = getRndInteger(1,7);
    
    switch (variation) {
    	case 1: // M -> MM
        	var retstr = "What is " + getRndInteger(3,5) + " " + marr[getRndInteger(0,1)] + " in " + mmarr[getRndInteger(0,1)] + "?";
            break;
        case 2: // M -> CM
        	var retstr = "What is " + getRndInteger(3,5) + " " + marr[getRndInteger(0,1)] + " in " + cmarr[getRndInteger(0,1)] + "?";
            break;
        case 3: // CM -> MM
        	var retstr = "What is " + getRndInteger(3,5) + " " + cmarr[getRndInteger(0,1)] + " in " + mmarr[getRndInteger(0,1)] + "?";
            break;
        case 4: // MM -> CM
        	var retstr = "What is " + getRndInteger(3,7)*get10() + " " + mmarr[getRndInteger(0,1)] + " in " + cmarr[getRndInteger(0,1)] + "?";
            break;
        case 5: // KM -> M
        	var retstr = "What is " + getRndInteger(2,5) + " " + kmarr[getRndInteger(0,1)] + " in " + marr[getRndInteger(0,1)] + "?";
            break;
        case 6: // M -> KM
        	var retstr = "What is " + getRndInteger(2,7)*get100() + " " + marr[getRndInteger(0,1)] + " in " + kmarr[getRndInteger(0,1)] + "?";
            break;
        case 7:
        	var retstr = "What metric unit would be best to describe the " + getlobjs() + "?";
            if ( getRndInteger(1,100) > 50 ) {
            	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Give a sensible value for this measurement.";
            }
            break;
    }
    
	return retstr;
}

function getWeight() {

	var variation = getRndInteger(1,3);
    
    switch (variation) {
    	case 1: // g -> kg
        	var retstr = "What is " + getRndInteger(1,10)*get1000() + " " + gmarr[getRndInteger(0,1)] + " in " + kgarr[getRndInteger(0,1)] + "?";
            break;
        case 2: // kg-> g
        	var retstr = "What is " + getRndInteger(2,20)*0.5 + " " + kgarr[getRndInteger(0,1)] + " in " + gmarr[getRndInteger(0,1)] + "?";
            break;
        case 3: // describe
        	var retstr = "What metric unit would be best to describe the " + getwobjs() + "?";
            if ( getRndInteger(1,100) > 50 ) {
            	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Give a sensible value for this measurement.";
            }
			return retstr;
            break;
       
    }
    
	return retstr;
}

function getWeightEasy() {

	var variation = getRndInteger(1,3);
    
    switch (variation) {
    	case 1: // g -> kg
        	var retstr = "What is " + getRndInteger(1,4)*get1000() + " " + gmarr[getRndInteger(0,1)] + " in " + kgarr[getRndInteger(0,1)] + "?";
            break;
        case 2: // kg-> g
        	var retstr = "What is " + getRndInteger(2,8)*0.5 + " " + kgarr[getRndInteger(0,1)] + " in " + gmarr[getRndInteger(0,1)] + "?";
            break;
        case 3: // describe
        	var retstr = "What metric unit would be best to describe the " + getwobjs() + "?";
            if ( getRndInteger(1,100) > 50 ) {
            	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Give a sensible value for this measurement.";
            }
			return retstr;
            break;
       
    }
    
	return retstr;
}

function getVolume() {

	var variation = getRndInteger(1,7);
    
    switch (variation) {
    	case 1: // CL -> ML
        	var retstr = "What is " + getRndInteger(3,10) + " " + clarr[getRndInteger(0,1)] + " in " + mlarr[getRndInteger(0,1)] + "?";
            break;
        case 2: // ML-> CL
        	var retstr = "What is " + getRndInteger(2,9)*get10() + " " + mlarr[getRndInteger(0,1)] + " in " + clarr[getRndInteger(0,1)] + "?";
            break;
        case 3: // ML -> L
        	var retstr = "What is " + getRndInteger(2,12)*get1000() + " " + mlarr[getRndInteger(0,1)] + " in " + Larr[getRndInteger(0,1)] + "?";
            break;
        case 4: // CL -> L
        	var retstr = "What is " + getRndInteger(2,15)*get100() + " " + clarr[getRndInteger(0,1)] + " in " + Larr[getRndInteger(0,1)] + "?";
            break;
        case 5: // L -> ML
        	var retstr = "What is " + getRndInteger(2,10) + " " + Larr[getRndInteger(0,1)] + " in " + mlarr[getRndInteger(0,1)] + "?";
            break;
        case 6: // L -> CL
        	var retstr = "What is " + getRndInteger(2,8) + " " + Larr[getRndInteger(0,1)] + " in " + clarr[getRndInteger(0,1)];
            break;
        case 7: // describe
        	var retstr = "What metric unit would be best to describe the " + getvobjs() + "?";
            if ( getRndInteger(1,100) > 50 ) {
            	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Give a sensible value for this measurement.";
            }
			return retstr;
            break;
    }
    
    return retstr;
}

function getVolumeEasy() {

	var variation = getRndInteger(1,7);
    
    switch (variation) {
    	case 1: // CL -> ML
        	var retstr = "What is " + getRndInteger(2,5) + " " + clarr[getRndInteger(0,1)] + " in " + mlarr[getRndInteger(0,1)] + "?";
            break;
        case 2: // ML-> CL
        	var retstr = "What is " + getRndInteger(2,3)*get10() + " " + mlarr[getRndInteger(0,1)] + " in " + clarr[getRndInteger(0,1)] + "?";
            break;
        case 3: // ML -> L
        	var retstr = "What is " + getRndInteger(2,5)*get1000() + " " + mlarr[getRndInteger(0,1)] + " in " + Larr[getRndInteger(0,1)] + "?";
            break;
        case 4: // CL -> L
        	var retstr = "What is " + getRndInteger(2,5)*get100() + " " + clarr[getRndInteger(0,1)] + " in " + Larr[getRndInteger(0,1)] + "?";
            break;
        case 5: // L -> ML
        	var retstr = "What is " + getRndInteger(2,5) + " " + Larr[getRndInteger(0,1)] + " in " + mlarr[getRndInteger(0,1)] + "?";
            break;
        case 6: // L -> CL
        	var retstr = "What is " + getRndInteger(2,4) + " " + Larr[getRndInteger(0,1)] + " in " + clarr[getRndInteger(0,1)];
            break;
        case 7: // describe
        	var retstr = "What metric unit would be best to describe the " + getvobjs() + "?";
            if ( getRndInteger(1,100) > 50 ) {
            	retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Give a sensible value for this measurement.";
            }
			return retstr;
            break;
    }
    
    return retstr;
}

function getMetric(whichmetric) {
	
    if ( whichmetric == 0 ) {
    	whichmetric = getRndInteger(1,3);
    }
    
    switch (whichmetric) {
    	case 1:
        	return getLength();
        	break;
        case 2:
        	return getWeight();
        	break;
        case 3:
        	return getVolume();
        	break;
    }
}

function getMetricEasy(whichmetric) {
	
    if ( whichmetric == 0 ) {
    	whichmetric = getRndInteger(1,3);
    }
    
    switch (whichmetric) {
    	case 1:
        	return getLengthEasy();
        	break;
        case 2:
        	return getWeightEasy();
        	break;
        case 3:
        	return getVolumeEasy();
        	break;
    }
}

/****************** End of UNITS ******************************************/ 

/****************** SCALES ******************************************/


var scaletemplate = "<div class=\"container\">\
  <p class=\"comment\">#this container is resizeable! Try to resize it!</p>\
  <div class=\"ruler\">\
    <div class=\"ruler-cell\">\
      <span class=\"zero\">0</span>\
      <span class=\"number\">1</span>\
    </div>\
  </div>\
</div>";

/************************* END SCALES *************************/

/****************** Perimeter / AREA *******************************/

var rect = "<table style=\"page-break-inside: avoid !important;margin-left:30px;border-collapse: collapse; font-size: 22px; height: 150px; width:\ 300px;\">\
<tbody>\
<tr style=\"height: 8px;\">\
<td style=\"width: 139px; height: 8px;\">&nbsp;</td>\
<td style=\"font-size:18px;width: 285px; height: 8px; text-align: center; vertical-align: bottom;\">\
<h2><strong>%more%</strong></h2>\
</td>\
</tr>\
<tr style=\"height: 76px;\">\
<td style=\"font-size:18px;width: 139px; height: 76px; text-align: right;\">\
<h2><strong>%less%&nbsp;</strong></h2>\
</td>\
<td style=\"border: 3px solid black; width: 285px; height: 76px;\">&nbsp;</td>\
</tr>\
</tbody>\
</table>";

var recttemplate = "<table style=\"margin-left:100px;border: 2px solid black;border-collapse:collapse;height: %hgt%px;\" width=\"%wdt%\">\
<tbody>%tab%</table>";

var tabcol = "<td style=\"border: 2px solid black;width: 20px;\">&nbsp;</td>";

var tabrow = "<tr>%cols%</tr>";


function getPerim() {

	if ( getRndInteger(1,100) > 60 ) {
		return getAreaPerimFromShape(0);
    }
	
	var retstr = "";
    
    var moreval = getRndInteger(15,30);
    var lessval = getRndInteger(4,14);
    
    var valx = getRndInteger(1,100);
    if ( valx > 50) {
    	retstr = "Calculate the perimeter of the rectangle below:";
    	retstr = retstr + rect;
    
    	retstr = retstr.replace("%more%", moreval + " cm");
    	retstr = retstr.replace("%less%", lessval + " cm");
    
		return retstr;
    }
    else {
    	retstr = "A rectangle has length " + moreval + " cm and width " + lessval + " cm";
        retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Work out the perimeter of the rectangle.<br><br><br>";
        return retstr;
    }
    
}

function getAreaPerimFromShape(opt) {
		var length = getRndInteger(3, 8);
        var height = getRndInteger(3,5);
        
        var uvals = ["millimetre", "centimetre", "metre"];
        
        var variations = [
        			"Find the perimeter of the shape below (each of the squares represents one square " + uvals[getRndInteger(0, uvals.length-1)] + ").", 
                    "Find the perimeter AND area of the shape below (each of the squares represents one square " + uvals[getRndInteger(0, uvals.length-1)] + ")."];
        
        var retstr = variations[opt];
        
        var rowstr = "";
        for (iii = 0; iii < height-1; iii++) {
        	rowstr += tabrow;
        }
        var colstr = "";
        for (jjj = 0; jjj < length-1; jjj++) {
        	colstr += tabcol;
        }
        
	for (iii = 0; iii < height-1; iii++) {
        	rowstr = rowstr.replace("%cols%", colstr);
        }
        
        var thistab = recttemplate.replace("%tab%", rowstr);
        
        thistab = thistab.replace("%wdt%", length*30);
        thistab = thistab.replace("%hgt%", height*28);
        
        retstr += "<br><br>" + thistab;
        
        return retstr;
        
}

function getArea() {

	if ( getRndInteger(1,100) > 60 ) {
		return getAreaPerimFromShape(1);
    }
    
	var retstr = "";
    
    var moreval = getRndInteger(15,30);
    var lessval = getRndInteger(4,14);
    
    var squares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169];
    var rects = [4, 6, 8, 12, 15, 25, 24, 30, 32, 36, 48, 54, 60, 75, 80, 96, 120, 150, 28,27, 18, 34, 76, 84, 108, 56, 66, 77, 55, 45, 21, 200, 220, 240, 300, 180, 190, 92];
    
    var valx = getRndInteger(1,100);
    
    if ( valx > 70) {
    	retstr = "Calculate the area of the rectangle below:";
    	retstr = retstr + rect;
    
    	retstr = retstr.replace("%more%", moreval + " cm");
    	retstr = retstr.replace("%less%", lessval + " cm");
    
		return retstr;
    }
    else if ( valx > 40) {
    	retstr = "A rectangle has length " + moreval + " cm and width " + lessval + " cm";
        retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Work out the area of the rectangle.<br><br><br>";
        return retstr;
    }
    else if ( valx > 20) {
    	retstr = "A square has an area of " + squares[getRndInteger(0, squares.length-1)] + " square centimetres";
        retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;What is the length of its sides?<br><br>";
        
        return retstr;
    }
    else {
    	retstr = "A rectangle has an area of " + rects[getRndInteger(0, rects.length-1)] + " square centimetres";
        retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Write down possible values for the length of its sides<br><br>";
        
        return retstr;
    }
    
}


/****************** END of Perimeter / AREA *******************************/

/****************** FDP *******************************/

var fdp3rows = "Fill in the missing fractions, decimals or percentages in the following table (this first one has been done for you):<br><table style=\"page-break-inside: avoid !important;border-collapse:collapse;border: 1px solid black;font-size:22px;margin-left:60px; height: 170px;\" width=\"441\">\
<tbody>\
<tr style=\"border: 1px solid black\">\
<td style=\"border: 1px solid black;background-color: #dddddd; text-align: center;\"><strong>Fraction</strong></td>\
<td style=\"border: 1px solid black;background-color: #dddddd; text-align: center;\">\<strong>Decimal</strong></td>\
<td style=\"border: 1px solid black;background-color: #dddddd; text-align: center;\">\<strong>Percentage</strong></td>\
</tr>\
<tr style=\"border: 1px solid black\">\
<td style=\"border: 1px solid black;text-align: center;\"><strong><sup>1</sup>&frasl;<sub>2</sub></strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>0.5</strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>50%</strong></td>\
</tr>\
<tr style=\"border: 1px solid black\">\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%frac1%</strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%dec1%</strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%per1%</strong></td>\
</tr>\
<tr style=\"border: 1px solid black\">\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%frac2%</strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%dec2%</strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%per2%</strong></td>\
</tr>\
<tr style=\"border: 1px solid black;\">\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%frac3%</strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%dec3%</strong></td>\
<td style=\"border: 1px solid black;text-align: center;\"><strong>%per3%</strong></td>\
</tr>\
</tbody>\
</table>";

function getFDPPlus() {
	return "plus";
}

function getFDP() {
	var whichval = getRndInteger(1,4);
    switch (whichval) {
    	case 1:
        case 2:
        case 3:
        	return getFDP2();
            break;
        case 4:
        	return getFDP2();
            break;
    }
}

function getFDP2() {

	wbox = workingbox;

	var fdpfracs = ["<sup>1</sup>&frasl;<sub>2</sub>", "one half", "<sup>1</sup>&frasl;<sub>3</sub>", "one third" ,"<sup>1</sup>&frasl;<sub>4</sub>", "one quarter", "<sup>1</sup>&frasl;<sub>5</sub>", "one fifth", "<sup>1</sup>&frasl;<sub>10</sub>" ];
    var fdpdecs = [2, 2, 3, 3, 4, 4, 5, 5, 10];
    var fdppercs = ["50%", "50%", "33%", "33%", "25%", "25%", "20%", "20%", "10%"];
    
    useCalc = true;
    
    for (iii = 0; iii < fdpfracs.length-1; iii++) {
    	for (jjj = iii+1; jjj < fdpfracs.length; jjj++) {
        	if ( getRndInteger(1,100) > 50 ) {
            	var tmpval = fdpfracs[iii];
                fdpfracs[iii] = fdpfracs[jjj];
                fdpfracs[jjj] = tmpval;
                
                var tmpval = fdpdecs[iii];
                fdpdecs[iii] = fdpdecs[jjj];
                fdpdecs[jjj] = tmpval;
                
                var tmpval = fdppercs[iii];
                fdppercs[iii] = fdppercs[jjj];
                fdppercs[jjj] = tmpval;
            }
        }
    }
    
    var origprice = getRndInteger(10,100) * fdpdecs[1];
    var origcrowd = getRndInteger(1000, 1500) * fdpdecs[1];
    var origgiftshop = getRndInteger(100,250) * fdpdecs[1];
    
    var thisname = personnames[getRndInteger(0, personnames.length-1)];
    
    var whichvar = getRndInteger(1,22);
    
    var retstr = "";
    
    switch (whichvar) {
    	case 22:
        case 21:
        case 20:
        	retstr = "Calculate £" + origprice + " reduced by " + fdppercs[1];
            return retstr;
            break;
        case 19:
        case 18:
        case 17:
        	retstr = "Work out " + origcrowd + " increased by " + fdppercs[1];
            return retstr;
            break;
        case 16:
        case 15:
        	retstr = "Calculate £" + origprice + " reduced by " + fdpfracs[1];
            return retstr;
            break;
        case 14:
        case 13:
        	retstr = "Work out " + origcrowd + " increased by " + fdpfracs[1];
            return retstr;
            break;
        case 12:
        	retstr = "The mean average number of people shopping at the local market each week in 2018 was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went down by " + fdpfracs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;By how much did the average go down in 2019?";
            return retstr;
            break;
    	case 11:
        	retstr = "The mean average number of people shopping at the local market each week in 2018 was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went down by " + fdppercs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;What was the average number of weekly shoppers in 2019?";
            return retstr;
            break;
    	case 10:
        	retstr = "The mean average number of people shopping at the local market each week in 2018 was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went down by " + fdpfracs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;What was the average number of weekly shoppers in 2019?";
            return retstr;
            break;
    	case 9:
        	retstr = "The mean average number of people shopping at the local market each week in 2018 was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went down by " + fdppercs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;By how much did the average go down in 2019?";
            return retstr;
            break;
    	case 8:
        	retstr = "The mean average crowd at the local football club for the 2018 season was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went up by " + fdpfracs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;By how much did the average crowd go up for the 2019 season?";
            return retstr;
            break;
    	case 7:
        	retstr = "The mean average crowd at the local football club for the 2018 season was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went up by " + fdpfracs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;What was the average crowd for the 2019 season?";
            return retstr;
            break;
        case 6:
        	retstr = "The mean average crowd at the local football club for the 2018 season was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went up by " + fdppercs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;By how much did the average crowd go up for the 2019 season?";
            return retstr;
            break;
    	case 5:
        	retstr = "The mean average crowd at the local football club for the 2018 season was " + origcrowd;
            retstr += "<br>&nbsp;&nbsp;&nbsp;&nbsp;In 2019 the average went up by " + fdppercs[1];
            retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;What was the average crowd for the 2019 season?";
            return retstr;
            break;
    	case 1:
        	retstr = thisname + " sees an item in a shop priced at £" + origprice + " but the price tag says " + fdppercs[1] + " off.";
    retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How much will " + thisname + " pay for the item after the discount is applied?";
    		return retstr;
            break;
        case 2:
        	retstr = thisname + " sees an item in a shop priced at £" + origprice + " but the price tag says " + fdppercs[1] + " off.";
    		retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How much will " + thisname + " save off the original price?";
    		return retstr;
            break;
        case 3:
        	retstr = thisname + " sees an item in a shop priced at £" + origprice + " but the price tag says price reduced by " + fdpfracs[1];
    		retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How much will " + thisname + " pay for the item after the discount is applied?";
    		return retstr;
            break;
        case 4:
        	retstr = thisname + " sees an item in a shop priced at £" + origprice + " but the price tag says price reduced by " + fdpfracs[1];
    		retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;How much will " + thisname + " save off the original price?";
    		return retstr;
            break;
    }
}

function getFDP1() {
	var fdpfracs = ["<sup>1</sup>&frasl;<sub>3</sub>", "<sup>1</sup>&frasl;<sub>4</sub>","<sup>2</sup>&frasl;<sub>3</sub>", 
						"<sup>1</sup>&frasl;<sub>5</sub>", "<sup>2</sup>&frasl;<sub>5</sub>", "<sup>3</sup>&frasl;<sub>4</sub>", "<sup>3</sup>&frasl;<sub>5</sub>", 
						"<sup>4</sup>&frasl;<sub>5</sub>", "<sup>1</sup>&frasl;<sub>10</sub>", "<sup>3</sup>&frasl;<sub>10</sub>", "<sup>7</sup>&frasl;<sub>10</sub>", "<sup>9</sup>&frasl;<sub>10</sub>"];
    var fdpdecs = ["0.33", "0.25","0.66", "0.2", "0.4", "0.75", "0.6", "0.8", "0.1", "0.3", "0.7", "0.9"];
    var fdppercs = ["33%", "25%","66%", "20%", "40%", "75%", "60%", "80%", "10%", "30%", "70%", "90%"];
    
    var retstr = fdp3rows;
    
    for (iii = 0; iii < fdpfracs.length-1; iii++) {
    	for (jjj = iii+1; jjj < fdpfracs.length; jjj++) {
        	if ( getRndInteger(1,100) > 50 ) {
            	var tmpval = fdpfracs[iii];
                fdpfracs[iii] = fdpfracs[jjj];
                fdpfracs[jjj] = tmpval;
                
                var tmpval = fdpdecs[iii];
                fdpdecs[iii] = fdpdecs[jjj];
                fdpdecs[jjj] = tmpval;
                
                var tmpval = fdppercs[iii];
                fdppercs[iii] = fdppercs[jjj];
                fdppercs[jjj] = tmpval;
            }
        }
    }
    
    for (rowval = 1; rowval <=3; rowval++) {
    	vv = getRndInteger(1,3);
        switch (vv) {
        	case 1:
            	retstr = retstr.replace("%frac" + rowval + "%", fdpfracs[rowval]);
                retstr = retstr.replace("%dec" + rowval + "%", "");
                retstr = retstr.replace("%per" + rowval + "%", "");
                break;
            case 2:
            	retstr = retstr.replace("%frac" + rowval + "%", "");
                retstr = retstr.replace("%dec" + rowval + "%", fdpdecs[rowval]);
                retstr = retstr.replace("%per" + rowval + "%", "");
                break;
            case 3:
            	retstr = retstr.replace("%frac" + rowval + "%", "");
                retstr = retstr.replace("%dec" + rowval + "%", "");
                retstr = retstr.replace("%per" + rowval + "%", fdppercs[rowval]);
                break;
        }
    }
	return retstr;
}

/****************** END of FDP *******************************/

/****************** AVERAGES *******************************/

function getAverages(type) {

    switch (type) {
    	case 1:
        	return getAvg1();
            break;
        case 2:
        	return getAvg2();
            break;
        case 3:
        	return getAvg3();
            break;
        case 4:
        	return getAvg4();
            break;
    }
    
}

function getAvg4() {

	useCalc = true;
    
	var multiplier = 12;
	var num1 = getRndInteger(1,9)*multiplier;
    var num2 = getRndInteger(1,9)*multiplier;
    var num3 = getRndInteger(1,9)*multiplier;
    var num4 = getRndInteger(1,9)*multiplier;
    var num5 = getRndInteger(1,9)*multiplier;
    var num6 = getRndInteger(1,9)*multiplier;
    
   	var thisval = getRndInteger(3,6);
    var lisstr = "";
    switch (thisval) {
        case 1:
            liststr = num1 + ", " + num2 + ", " + num3;
            break;
        case 2:
            liststr = num1 + ", " + num2 + ", " + num3;
            break;
        case 3:
            liststr = num1 + ", " + num2 + ", " + num3 + ", " + num4 ;
            break;
        case 4:
            liststr = num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5;
            break;
        case 5:
            liststr = num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6;
            break;
        case 6:
            liststr = num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6;
            break;
        }
    
   	
    
    var retstr = "What is the MEAN of the following list of numbers:";
    retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + liststr;
    
    return retstr;
}

function getAvg3() {

	var multiplier = getRndInteger(1,5);
	var num1 = getRndInteger(1,8)*multiplier;
    var num2 = getRndInteger(9,17)*multiplier;
    var num3 = getRndInteger(18,26)*multiplier;
    var num4 = getRndInteger(27,35)*multiplier;
    var num5 = getRndInteger(36,44)*multiplier;
    var num6 = getRndInteger(45,53)*multiplier;
    
   	var thisval = getRndInteger(1,5);
    var lisstr = "";
    switch (thisval) {
        case 1:
            liststr = num3 + ", " + num3 + ", " + num3 + ", " + num1 + ", " + num3 + ", " + num4 + ", " + num1;
            break;
        case 2:
            liststr = num4 + ", " + num6 + ", " + num5 + ", " + num3 + ", " + num4 + ", " + num1 + ", " + num3 + ", " + num3 + ", " + num1
            break;
        case 3:
            liststr = num5 + ", " + num1 + ", " + num5 + ", " + num2 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num2 + ", " + num2
            break;
        case 4:
            liststr = num5 + ", " + num1 + ", " + num2 + ", " + num2 + ", " + num3 + ", " + num5 + ", " + num1 + ", " + num5 + ", " + num6;
            break;
        case 5:
            liststr = num3 + ", " + num2 + ", " + num4 + ", " + num5 + ", " + num1 + ", " + num4 + ", " + num2 + ", " + num3 + ", " + num4;
            break;
        }
    
   	
    
    var retstr = "What is the RANGE of the following list of numbers:";
    retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + liststr;
    
    return retstr;
}


function getAvg2() {

	var multiplier = getRndInteger(1,5);
	var num1 = getRndInteger(1,8)*multiplier;
    var num2 = getRndInteger(9,17)*multiplier;
    var num3 = getRndInteger(18,26)*multiplier;
    var num4 = getRndInteger(27,35)*multiplier;
    var num5 = getRndInteger(36,44)*multiplier;
    var num6 = getRndInteger(45,53)*multiplier;
    
   	var thisval = getRndInteger(1,5);
    var lisstr = "";
    switch (thisval) {
        case 1:
            liststr = num3 + ", " + num3 + ", " + num3 + ", " + num1 + ", " + num3 + ", " + num4 + ", " + num1;
            break;
        case 2:
            liststr = num4 + ", " + num6 + ", " + num5 + ", " + num3 + ", " + num4 + ", " + num1 + ", " + num3 + ", " + num3 + ", " + num1
            break;
        case 3:
            liststr = num5 + ", " + num1 + ", " + num5 + ", " + num2 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num2 + ", " + num2
            break;
        case 4:
            liststr = num5 + ", " + num1 + ", " + num2 + ", " + num2 + ", " + num3 + ", " + num5 + ", " + num1 + ", " + num5 + ", " + num6;
            break;
        case 5:
            liststr = num3 + ", " + num2 + ", " + num4 + ", " + num5 + ", " + num1 + ", " + num4 + ", " + num2 + ", " + num3 + ", " + num4;
            break;
        }
    
   	
    
    var retstr = "What is the MEDIAN of the following list of numbers:";
    retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + liststr;
    
    return retstr;
}


function getAvg1() {

	var multiplier = getRndInteger(1,5);
	var num1 = getRndInteger(1,8)*multiplier;
    var num2 = getRndInteger(9,17)*multiplier;
    var num3 = getRndInteger(18,26)*multiplier;
    var num4 = getRndInteger(27,35)*multiplier;
    var num5 = getRndInteger(36,44)*multiplier;
    var num6 = getRndInteger(45,53)*multiplier;
    
   	var thisval = getRndInteger(1,5);
    var lisstr = "";
    switch (thisval) {
        case 1:
            liststr = num3 + ", " + num3 + ", " + num3 + ", " + num1 + ", " + num3 + ", " + num4 + ", " + num1 + ", " + num4
            break;
        case 2:
            liststr = num4 + ", " + num6 + ", " + num5 + ", " + num3 + ", " + num4 + ", " + num1 + ", " + num3 + ", " + num3 + ", " + num1
            break;
        case 3:
            liststr = num5 + ", " + num1 + ", " + num5 + ", " + num2 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num2 + ", " + num2
            break;
        case 4:
            liststr = num5 + ", " + num1 + ", " + num5 + ", " + num2 + ", " + num2 + ", " + num3 + ", " + num5 + ", " + num1 + ", " + num5 + ", " + num6;
            break;
        case 5:
            liststr = num3 + ", " + num2 + ", " + num4 + ", " + num5 + ", " + num1 + ", " + num4 + ", " + num2 + ", " + num3 + ", " + num4
            break;
        }
    
   	
    
    var retstr = "What is the MODE of the following list of numbers:";
    retstr += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;" + liststr;
    
    return retstr;
}


/******************* END AVERAGES ************************/

/**************** Money ***********************************/

function randomiseExams() {
	if ( examsNewL2.length > 0 ) {
		/*
		for (ii = 0; ii < 1000; ii++ ) {
			var iii = getRndInteger(0,examsNewL2.length-1);
			var jjj = getRndInteger(0,examsNewL2.length-1);
			var tmp = examsNewL2[iii];
			examsNewL2[iii] = examsNewL2[jjj];
			examsNewL2[jjj] = tmp;
		}*/
		randomiseArray(examsNewL2);
	}
	if ( examsL2.length > 0 ) {
		for (ii = 0; ii < 1000; ii++ ) {
			var iii = getRndInteger(0,examsL2.length-1);
			var jjj = getRndInteger(0,examsL2.length-1);
			var tmp = examsL2[iii];
			examsL2[iii] = examsL2[jjj];
			examsL2[jjj] = tmp;
		}
	}
}

function randomiseArray(thisarray) {
	if ( thisarray.length > 0 ) {
		for (ii = 0; ii < 1000; ii++ ) {
			var iii = getRndInteger(0,thisarray.length-1);
			var jjj = getRndInteger(0,thisarray.length-1);
			var tmp = thisarray[iii];
			thisarray[iii] = thisarray[jjj];
			thisarray[jjj] = tmp;
		}
	}
}

var examsE3Count = 0;
var examsNewE3Count = 0;
var examsNewL1Count = 0;
var examsNewL2Count = 0;
var examsL2Count = 0;

//var examsE3 = [1];
//var examsL2 = [1,2,3,4,5,106,7,108,9,10,11,112,13,114,15,116,117,18,19,120,121,22,23,124,125,126,127,28,29,30];

function getAddMoneyE3() {
	examsNewL2Count++;
	
	if ( examsE3Count > examsE3.length-1) {
		examsE3Count = 0;
	}
	
	var sw = examsE3[examsE3Count];
	//sw = 25;
    switch (sw) {
		case 1:
			return "E3";
	}
}



/*************** END MONEY *********************************/

/****************** PV ***************************************/

function pvWhole() {
	
    var nums = [];
    
    var digits = [1,2,3,4,5,6,7,8,9];
    for (ii = 0; ii < digits.length-1; ii++ ) {
    	for (j = ii+1; j < digits.length;j++) {
        	if ( getRndInteger(1,100) > 50) {
            	var tmp = digits[ii];
                digits[ii] = digits[j];
                digits[j] = tmp;
            }
        }
    }
    
    var numdigits = getRndInteger(2,6);
    
    var numstr = "";
    for (ii=0; ii < numdigits; ii++ ) {
    	var val = digits[ii];
    	nums.push(val);
        numstr = numstr + val;
    }
    
    var askdigit = nums[getRndInteger(0,nums.length-1)];
	
	return "What is the value of the digit " + askdigit + " in the number " + numstr;
}

function pvDec() {
	var nums = [];
    
    var digits = [1,2,3,4,5,6,7,8,9];
    for (ii = 0; ii < digits.length-1; ii++ ) {
    	for (j = ii+1; j < digits.length;j++) {
        	if ( getRndInteger(1,100) > 50) {
            	var tmp = digits[ii];
                digits[ii] = digits[j];
                digits[j] = tmp;
            }
        }
    }
    
    var numdigits = getRndInteger(1,4);
    
    var numstr = "";
    for (ii=0; ii < numdigits; ii++ ) {
    	var val = digits[ii];
    	nums.push(val);
        numstr = numstr + val;
    }
    
    var askdigit = nums[getRndInteger(0,nums.length-1)];
	
	return "What is the value of the digit " + askdigit + " in the number 0." + numstr;
}

/****************** END PV ***************************************/

/****************** ORDERING ***************************************/

function orderWhole() {

	var nums = [];
	var seed = getRndInteger(1,9);
    
    var seed2 = 0;
    if ( seed > 3 && seed < 8) {
    	seed2 = seed + (2-getRndInteger(1,3));
    }
    
    if (seed2 == 0 || seed2 == seed) {
    	seed2 = getRndInteger(1,9);
    }
    
    var limit = getRndInteger(4,6);
	for (j=0; j < limit; j++) {
		nums.push(getRndInteger(500,99999));
	}
    
    
    
    for (j=0; j < nums.length-2; j++) {
    	for (k=j+1; k < nums.length-1;k++) {
        	if ( getRndInteger(1,100) > 50) {
            	var tmp = nums[j];
                nums[j] = nums[k];
                nums[k] = tmp;
            }
        }
    }
    
	if ( getRndInteger(1, 100) > 50 ) {
    
		var ret = "Write down the numbers in this list below in order from smallest to largest<br><br>&nbsp;&nbsp;&nbsp;&nbsp;";
    
    	for (j = 0; j <= nums.length-1; j++) {
    	if ( j != nums.length-1) {
        	ret = ret + Number(nums[j]) + ",&nbsp;&nbsp;";
        }
        else {
        	ret = ret + Number(nums[j]);
        }
    	}
    
    	return ret;
    }
    else {
    	var ret = "Write down the numbers in this list below in order from largest to smallest<br><br>&nbsp;&nbsp;&nbsp;&nbsp;";
    
    	for (j = 0; j <= nums.length-1; j++) {
    	if ( j != nums.length-1) {
        	ret = ret + Number(nums[j]) + ",&nbsp;&nbsp;";
        }
        else {
        	ret = ret + Number(nums[j]);
        }
    	}
    
    	return ret;
    }
}

function zeroOneOrSeed(seed) {
	var x = getRndInteger(1,10);
    
    switch (x) {
    	case 1:
        case 2:
        case 3:
        case 4:
        	return 0;
            break;
        case 5:
        case 6:
        case 7:
        	return 1;
            break;
        case 8:
        case 9:
        case 10:
        	return seed;
        	break;
    }
}

function orderDec(type) {

	var nums = [];
	var seed = getRndInteger(1,9);
    
    var seed2 = 0;
    if ( seed > 2 && seed < 8) {
    	seed2 = seed + (2-getRndInteger(1,3));
    }
    
    var xx = getRndInteger(2,8);
 
    nums.push("0." + (xx+1).toString());
    nums.push("0." + (xx-1).toString());
    //nums.push("0." + getRndInteger(1,9));
    nums.push("0." + getRndInteger(1,9) + getRndInteger(1,9));
    nums.push("0." + getRndInteger(1,9) + getRndInteger(1,9));
    nums.push("0." + getRndInteger(1,9) + getRndInteger(1,9)+ getRndInteger(1,9));
    nums.push("0." + getRndInteger(1,9) + getRndInteger(1,9)+ getRndInteger(1,9));
   
    for (j = 0; j < nums.length-2; j++) {
    	for (k = j+1; k < nums.length-1;k++) {
        	if ( getRndInteger(1,100) > 50) {
            	var tmp = nums[j];
                nums[j] = nums[k];
                nums[k] = tmp;
            }
        }
    }
    
    if ( getRndInteger(1, 100) > 50 ) {
    
		var ret = "Write down the numbers in this list below in order from smallest to largest<br><br>&nbsp;&nbsp;&nbsp;&nbsp;";
    
    	for (j = 0; j <= nums.length-1; j++) {
    	if ( j != nums.length-1) {
        	ret = ret + Number(nums[j]) + ",&nbsp;&nbsp;";
        }
        else {
        	ret = ret + Number(nums[j]);
        }
    	}
    
    	return ret;
    }
    else {
    	var ret = "Write down the numbers in this list below in order from largest to smallest<br><br>&nbsp;&nbsp;&nbsp;&nbsp;";
    
    	for (j = 0; j <= nums.length-1; j++) {
    	if ( j != nums.length-1) {
        	ret = ret + Number(nums[j]) + ",&nbsp;&nbsp;";
        }
        else {
        	ret = ret + Number(nums[j]);
        }
    	}
    
    	return ret;
    }
    
}


/********************* END ORDERING *******************************/

/********************* RATIO ***************************************/
 function getRatioEasy() {
 	
    var operandA = getRndInteger(1,3);
    var operandB = getRndInteger(4,6);
    
    var opersum = operandA + operandB;
    
    var total = opersum * getRndInteger(3,12);
    
    var variant = getRndInteger(1,3);
        switch (variant) {
        	case 1:
            	return "Split £" + total + " into the ratio " + operandA + ":" + operandB;
                break;
            case 2:
            	var thisname = personnames[getRndInteger(0, personnames.length-1)];
            	var thistreat = treatnames[getRndInteger(0, treatnames.length-1)];
            	var retstr = thisname + " gets £" + total + " for a " + thistreat + ".<br>&nbsp;&nbsp;&nbsp;&nbsp;The money is split into the ratio " + operandA + ":" + operandB + " and the larger amount given to charity.<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does " + thisname + " keep?";
            
            
            return retstr;
            break;
           case 3:
            	var thisname = personnames[getRndInteger(0, personnames.length-1)];
            	var thistreat = treatnames[getRndInteger(0, treatnames.length-1)];
            	var retstr = thisname + " gets £" + total + " for a " + thistreat + ".<br>&nbsp;&nbsp;&nbsp;&nbsp;The money is split into the ratio " + operandA + ":" + operandB + " and the smaller amount given to a friend.<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does " + thisname + " give to their friend?";
            
            
            return retstr;
            break;
         }
        
 	
 }
 
 function getRatioHard() {
 	var operandA = getRndInteger(1,4);
    var operandB = getRndInteger(5,10);
    
    var opersum = operandA + operandB;
    
    var total = opersum * getRndInteger(3,20);
    
    var variant = getRndInteger(1,3);
        switch (variant) {
        	case 1:
            	return "Split £" + total + " into the ratio " + operandA + ":" + operandB;
                break;
            case 2:
            	var thisname = personnames[getRndInteger(0, personnames.length-1)];
            	var thistreat = treatnames[getRndInteger(0, treatnames.length-1)];
            	var retstr = thisname + " gets £" + total + " for a " + thistreat + ".<br>&nbsp;&nbsp;&nbsp;&nbsp;The money is split into the ratio " + operandA + ":" + operandB + " and the larger amount given to charity.<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does " + thisname + " keep?";
            
            
            return retstr;
            break;
           case 3:
            	var thisname = personnames[getRndInteger(0, personnames.length-1)];
            	var thistreat = treatnames[getRndInteger(0, treatnames.length-1)];
            	var retstr = thisname + " gets £" + total + " for a " + thistreat + ".<br>&nbsp;&nbsp;&nbsp;&nbsp;The money is split into the ratio " + operandA + ":" + operandB + " and the smaller amount given to a friend.<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does " + thisname + " give to their friend?";
            
            
            return retstr;
            break;
         }
        
 }
 
 function getRatioSimplify() {
 	var operandA = getRndInteger(1,8);
    var operandB = getRndInteger(2,8);
    
    var mult = getRndInteger(2,4) * getRndInteger(3,5);
    
    return "Simplify the ratio " + operandA*mult + ":" + operandB*mult;
 }

/********************** END OF RATIO *****************************/

/********************* Addition and Substraction *************************/

function getAddSub100() {
	if ( getRndInteger(1,100) > 50 ) {
    	var operandA = getRndInteger(10,40);
    	var operandB = getRndInteger(50,90);
    
    	var variant = getRndInteger(1,4);
        switch (variant) {
        	case 1:
            	return "Work out " + operandB + " - " + operandA;
                break;
            case 2:
            	return "Work out " + operandB + " minus " + operandA;
                break;
            case 3:
            	return "Work out " + operandB + " take away " + operandA;
                break;
            case 4:
            	return "Work out what you are left with when you take " + operandA + " from " + operandB;
                break;
			
        }
    }
    else {
    	if ( getRndInteger(100) > 30 ) {
    		var operandA = getRndInteger(10,40);
    		var operandB = getRndInteger(50,90);
    
			var variant = getRndInteger(1,4);
        	switch (variant) {
        		case 1:
            		return "Work out " + operandB + " + " + operandA;
                	break;
            	case 2:
            		return "Work out " + operandB + " plus " + operandA;
                	break;
            	case 3:
            		return "Work out " + operandB + " added to " + operandA;
                	break;
            	case 4:
            		return "Work out what you get when you add " + operandB + " and " + operandA;
                	break;
        	}
       	}
        else {
        	var operandA = getRndInteger(80,100);
    		var operandB = getRndInteger(10,40);
            var operandC = getRndInteger(10,30);
            
            var thisname = personnames[getRndInteger(0, personnames.length-1)];
            var thistreat = treatnames[getRndInteger(0, treatnames.length-1)];
            var retstr = thisname + " gets £" + operandA + " for a " + thistreat + ".<br>&nbsp;&nbsp;&nbsp;&nbsp;£" + operandB + " is spent on treats and £" + operandC + " is given to a friend.<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does "+ thisname + " have left%nearest%?";
            
            if ( getRndInteger(1,100) > 30 ) {
            	retstr = retstr.replace("%nearest%", "");
            }
            else {
            	retstr = retstr.replace("%nearest%", " to the nearest £10");
            }
            
            return retstr;
        }
    }
}

function getAddSub1000() {

	if ( getRndInteger(1,100) > 50 ) {
    	var operandA = getRndInteger(50,450);
    	var operandB = getRndInteger(500,950);
    
        var variant = getRndInteger(1,4);
        switch (variant) {
        	case 1:
            	return "Work out " + operandB + " + " + operandA;
                break;
            case 2:
            	return "Work out " + operandB + " plus " + operandA;
                break;
            case 3:
            	return "Work out " + operandB + " added to " + operandA;
                break;
            case 4:
            	return "Work out what you get when you add " + operandB + " and " + operandA;
                break;
        }
        
    }
    else {
    	if ( getRndInteger(100) > 30 ) {
    		var operandA = getRndInteger(50,450);
    		var operandB = getRndInteger(500,950);
    
			var variant = getRndInteger(1,4);
			switch (variant) {
        		case 1:
            		return "Work out " + operandB + " - " + operandA;
                	break;
            	case 2:
            		return "Work out " + operandB + " minus " + operandA;
                	break;
            	case 3:
            		return "Work out " + operandB + " take away " + operandA;
                	break;
            	case 4:
            		return "Work out what you are left with when you take " + operandA + " from " + operandB;
                	break;
        	}
        }
        else {
        	var operandA = getRndInteger(800,1000);
    		var operandB = getRndInteger(100,440);
            var operandC = getRndInteger(100,320);
            
            var thisname = personnames[getRndInteger(0, personnames.length-1)];
            var thistreat = treatnames[getRndInteger(0, treatnames.length-1)];
            var retstr = thisname + " gets £" + operandA + " for a " + thistreat + ".<br>&nbsp;&nbsp;&nbsp;&nbsp;£" + operandB + " is spent on treats and £" + operandC + " is given to a friend.<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does "+ thisname + " have left%nearest%?";
            
            if ( getRndInteger(1,100) > 60 ) {
            	retstr = retstr.replace("%nearest%", "");
            }
            else {
            	retstr = retstr.replace("%nearest%", " to the nearest £100");
            }
            
            return retstr;
        }
       
    }
    
    
	return "Work out " + operandA + " + " + operandB;
}

/********************* End of Addition and Subtraction *******************/

/********************* rounding *************************/

function getRound10s() {
	var operandA = (getRndInteger(10, 99)*10) + getRndInteger(1, 9); 
	return "Round " + operandA + " to the nearest 10";
}

function getRound100sand1000s() {
	if ( getRndInteger(1, 100) > 50  ) {
    	var operandA = (getRndInteger(0, 20)*1000) + getRndInteger(1, 999); 
		return "Round " + operandA + " to the nearest 1000";
    }
    else {
    	var operandA = (getRndInteger(0, 20)*100) + getRndInteger(1, 99); 
		return "Round " + operandA + " to the nearest 100";
    }
}

function getround1DP(type) {
	if ( type == 1) {
		var operandA = getRndInteger(1,9);
    	var operandB = getRndInteger(1,9);
		var operandC = getRndInteger(1,9); 
		return "Round " + operandA + "." + operandB + operandC + " to 1 decimal place.";
    }
    else {
    	var operandA = getRndInteger(1,9);
    	var operandB = getRndInteger(1,9);
		var operandC = getRndInteger(1,9);
		var operandD = getRndInteger(1,9); 
		return "Round " + operandA + "." + operandB + operandC  + operandD + " to 1 decimal place.";
    }
}

/********************* End of rounding *******************/


/********************* Mult *************************/

function getMulNC() {
	var operandA = getRndInteger(2,10);
   	var operandB = getRndInteger(2,10);
    
    var variant = getRndInteger(5,7);
	switch (variant) {
        case 1:
            return "Calculate " + operandA + " X " + operandB;
            break;
        case 2:
           return "Work out " + operandA + " multiplied by " + operandB;
             break;
         case 3:
           return "What is " + operandA + " times " + operandB;
            break;
        case 4:
          	return "What are " + operandA + " lots of " + operandB;
             break;
	    case 5:
				var thisname = personnames[getRndInteger(0, personnames.length-1)];
            	return thisname + " is putting out chairs for a concert. There are " + getRndInteger(6,10) + " rows of chairs.<br>&nbsp;&nbsp;&nbsp;&nbsp;Each row has " + getRndInteger(4,6) + " chairs. How many chairs are there in total?";
                break;
		case 6:
				var thisname = personnames[getRndInteger(0, personnames.length-1)];
            	return thisname + "  needs to post " + Number((getRndInteger(2,4)*10)+getRndInteger(1,9)) + " Christmas cards. The cards come in packs of " + getRndInteger(5,6) + " cards.<br>&nbsp;&nbsp;&nbsp;&nbsp;How many packs of cards does " + thisname + " need to buy?";
                break;
		case 7:
				var thisname = personnames[getRndInteger(0, personnames.length-1)];
            	return thisname + " is packing pencils in boxes. Each box can contain " + Number(getRndInteger(3,8)*2) + " pencils.<br>&nbsp;&nbsp;&nbsp;&nbsp;If there are " + Number(getRndInteger(31,69)) + " pencils, how many boxes will " + thisname + " need?";
                break;
       }
}

function getMulC() {
	var operandA = getRndInteger(10, 90);
   	var operandB = getRndInteger(10, 90);
    
    var variant = getRndInteger(1,4);
	switch (variant) {
        case 1:
            return "Calculate " + operandA + " X " + operandB;
            break;
        case 2:
           return "Work out " + operandA + " multiplied by " + operandB;
             break;
         case 3:
           return "What is " + operandA + " times " + operandB;
            break;
        case 4:
          	return "What are " + operandA + " lots of " + operandB;
             break;
       }
}

function getMulCC() {
	var operandA = getRndInteger(10, 90);
   	var operandB = getRndInteger(10, 900);
    
    var variant = getRndInteger(1,4);
	switch (variant) {
        case 1:
            return "Calculate " + operandA + " X " + operandB;
            break;
        case 2:
           return "Work out " + operandA + " multiplied by " + operandB;
             break;
         case 3:
           return "What is " + operandA + " times " + operandB;
            break;
        case 4:
          	return "What are " + operandA + " lots of " + operandB;
             break;
       }
}

function getMulCCC() {
	var operandA = getRndInteger(100, 900);
   	var operandB = getRndInteger(100, 900);
    
    var variant = getRndInteger(1,4);
	switch (variant) {
        case 1:
            return "Calculate " + operandA + " X " + operandB;
            break;
        case 2:
           return "Work out " + operandA + " multiplied by " + operandB;
             break;
         case 3:
           return "What is " + operandA + " times " + operandB;
            break;
        case 4:
          	return "What are " + operandA + " lots of " + operandB;
             break;
       }
}


/********************* End of MUL *******************/

/********************* DIV *************************/

function getDivNC() {
	var operandA = getRndInteger(2, 10);
   	var operandB = getRndInteger(2, 10);
    
    var ans = operandA * operandB;
    
    var variant = getRndInteger(1,5);
	switch (variant) {
        case 1:
            return "Calculate " + ans + " divided by " + operandA;
            break;
        case 2:
           return "Work out " + ans + " divided by " + operandA;
             break;
         case 3:
           return "What is " + ans + " &#xf7 " + operandB;
            break;
         case 4:
        	var thisname = personnames[getRndInteger(0, personnames.length-1)];
            return thisname + " buys " + operandA + " identical items online for £" + ans + "<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does each item cost?";
            break;
         case 5:
        	var thisname = personnames[getRndInteger(0, personnames.length-1)];
            return thisname + " deals out " + ans + " tokens equally to " + operandA + " friends in a game.<br>&nbsp;&nbsp;&nbsp;&nbsp;How many tokens does each friend get?";
            break;
       }
	
}

function getDivC() {
	var operandA = getRndInteger(30, 80);
   	var operandB = getRndInteger(2, 10);
    
    var ans = operandA * operandB;
    
    var variant = getRndInteger(1,4);
	switch (variant) {
        case 1:
            return "Calculate " + ans + " divided by " + operandB;
            break;
        case 2:
           return "Work out " + ans + " divided by " + operandB;
             break;
         case 3:
           return "What is " + ans + " &#xf7 " + operandB;
            break;
        case 4:
           return "£" + ans + " is shared equally by " + operandB + " people.<br>&nbsp;&nbsp;&nbsp;&nbsp;How much does each person get?";
            break;
       }
}

/********************* End of DIV *******************/

/********************* Percent *************************/

function getPercNC() {
		var operandA = getRndInteger(2, 5);
   		var operandB = getRndInteger(2, 9);
    
    	var ans = operandA * operandB * 10;
      
      	var variant = getRndInteger(1,8);
		
		var percentval = getRndInteger(1,5)*5;
		
		switch (variant) {
        case 1:
            return "What is " + percentval + "% of £" + ans;
            break;
        case 2:
           	 return "An item costing £" + ans + " is reduced by " + percentval + "%<br>&nbsp;&nbsp;&nbsp;&nbsp;What is the new price of the item?";
             break;
        case 3:
           	 return "An item costing £" + ans + " is increased by " + percentval + "%<br>&nbsp;&nbsp;&nbsp;&nbsp;What is the new price of the item?";
             break;
        case 4:
           	 return "An item costing £" + ans + " is reduced by " + percentval + "%<br>&nbsp;&nbsp;&nbsp;&nbsp;How much is the item reduced by?";
             break;
        case 5:
           	 return "An item costing £" + ans + " is increased by " + percentval + "%<br>&nbsp;&nbsp;&nbsp;&nbsp;How much is the item increased by?";
             break;
		case 6:
		case 7:
		case 8:
			 return "What is " + percentval + "% of £" + ans;
				break;
       }
}

function getPercC() {
		var operandA = getRndInteger(500, 2500);
   		var operandB = getRndInteger(15, 95);
    
    	var ans = operandA * operandB * 10;
        
        return "What is " + operandB + "% of £" + operandA + " to the nearest £1";
}

/********************* End of Percent *******************/

/********************* Fractions *************************/

function getFracNC(type) {

		if ( type == 1 ) {
		var denomlist = [2,3,4,5,6];
		var denom = denomlist[getRndInteger(0,denomlist.length-1)];
   		
        var operandB = getRndInteger(2,10);
    
    	var ans = denom * operandB;
        
        var numer = 1;
        
        return "What is <span style=\"font-size:30px;\"><sup>" + numer + "</sup>&frasl;<sub>" + denom + "</sub></span> of " + ans;
        } else if ( type == 2 ) {
		var denomlist = [2,3,4,5,6];
		var denom = denomlist[getRndInteger(0,denomlist.length-1)];
   		
        var operandB = getRndInteger(2,8);
    
    	var ans = denom * operandB;
        
        var numer = getRndInteger(1, denom-1);
        
        return "What is <span style=\"font-size:30px;\"><sup>" + numer + "</sup>&frasl;<sub>" + denom + "</sub></span> of " + ans;
        }
        else {
        var denomlist = [2,3,4,5,6,8];
		var denom = denomlist[getRndInteger(0,denomlist.length-1)];
   		
        var operandB = getRndInteger(3,8);
    
    	var ans = denom * operandB;
        
        var numer = getRndInteger(1, denom-1);
        
        return "What is <span style=\"font-size:30px;\"><sup>" + numer + "</sup>&frasl;<sub>" + denom + "</sub></span> of " + ans;
        }
        
}

function getFracC() {
		var denomlist = [3,4,5,6,8,10,12];
		var denom = denomlist[getRndInteger(0,denomlist.length-1)];
   		
        var operandB = getRndInteger(5,25);
    
    	var ans = getRndInteger(50,500)*denom;
        
        var numer = getRndInteger(1, denom-1);
        
        return "What is <span style=\"font-size:30px;\"><sup>" + numer + "</sup>&frasl;<sub>" + denom + "</sub></span> of £" + ans;
}

function getFracSimp(type) {

		if ( type == 1 ) {
		var denomlist = [2,3,4,5,6];
        
		var denom = denomlist[getRndInteger(0,denomlist.length-1)];
        
        var numer = getRndInteger(1, denom-1);
        
        var variant = getRndInteger(1,3);
        var mult = 6;
        switch (variant) {
        	case 1:
            	mult = 4;
                break;
            case 2:
            	mult = 6;
                break;
            case 3:
            	mult = 8;
                break;
        }
        return "Write the fraction <span style=\"font-size:30px;\"><sup>" + numer*mult + "</sup>&frasl;<sub>" + denom*mult + "</sub></span> in its simplest form";
        }
        else {
        var denomlist = [2,3,4,5,6,8,10];
        
		var denom = denomlist[getRndInteger(0,denomlist.length-1)];
        
        var numer = getRndInteger(1, denom-1);
        
        var variant = getRndInteger(1,5);
        var mult = 6;
        switch (variant) {
        	case 1:
            	mult = 8;
                break;
            case 2:
            	mult = 6;
                break;
            case 3:
            	mult = 4;
                break;
            case 4:
            	mult = 10;
                break;
            case 5:
            	mult = 12;
                break;
        }
        return "Write the fraction <span style=\"font-size:30px;\"><sup>" + numer *mult + "</sup>&frasl;<sub>" + denom *mult + "</sub></span> in its simplest form";
        }
        
        
}
/********************* End of Percent *******************/

/********************* Generate Questions *************************/

var wboxhgt = 200;
var wboxalt = 200;
var questiontext = "<div id=\"thisquestiondiv\" style=\"width:96%;line-height: 1.5;page-break-inside: avoid !important\"><p style=\"width:100%;font-size:22px;margin-top:8px;\"><b>%question%</b></p>%workingbox%<br>";
var questiontextpagebreak = "<div style=\"line-height: 1.5;width:96%;page-break-before:always\"><p style=\"width:100%;font-size:38px;margin-top:8px;\"><b>%question%</b></p>%workingbox%<br>";

var workingbox = "<div style=\"page-break-inside: avoid !important;margin-left:20px;position:relative;float:left:width:100%;height:%wboxhgt%px;border: 1px solid black;padding:10px;font-size:20px\">Show all your working here %calc%:</div><div style=\"page-break-inside: avoid !important;margin-top:-50px;margin-right:5px;position:relative;float:right;width:50%;height:20px;padding:10px;font-size:20px\"><b>Answer:</b><hr></div>";

var checktext = "<div style=\"width:96%;page-break-inside: avoid !important;margin-left:20px;position:relative;float:left:width:80%;height:130px;border: 1px solid black;padding:10px;font-size:20px\">Show how you would check your answer to question %num% here:</div><br>";

var worksheetnoboxes = "<br><br><br><br><br>";

var questionspread = [];


function getQuestions(n) {

	examsNewL1Count = -1;
	examsNewL2Count = -1;
	examsL2Count = -1;
	
	if ( n > -1 ) {
		blnL1SessionSheet = false;
		blnE3SessionSheet = false;
		blnE2SessionSheet = false;
		blnL2SessionSheet = false;
	}
	
	randomiseExams();
	
	questionspread = [];
	if ( document.getElementById("addSymm").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(110000);
        }
    }
	
	if ( document.getElementById("addAnglesLines").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(-333);
        }
    }
	
	if ( document.getElementById("addGCSECalcF").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(999000);
        }
    }
	
	if ( document.getElementById("addE3Exam").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(999555);
        }
    }
	
	if ( document.getElementById("addE1Exam").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(999556);
        }
    }
	
	if ( document.getElementById("add5AL1L2").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(5555500);
        }
    }
	
	if ( document.getElementById("addfracComp").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(55880000);
        }
    }
	
	if ( document.getElementById("addCharts").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(220000);
        }
    }
	
	if ( document.getElementById("addTimeTables").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(330000);
        }
    }
	
	if ( document.getElementById("addsubchk100").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(1);
        }
    }
    if ( document.getElementById("addsubchk1000").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(11);
        }
    }
	
	if ( document.getElementById("addAddWheels").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(440000);
        }
    }
	
	if ( document.getElementById("addMulWheels12s").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(55120000);
        }
    }
	
	if ( document.getElementById("addTableMazes").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(55660000);
        }
    }
	
	if ( document.getElementById("addClocks").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(55770000);
        }
    }
	
    if ( document.getElementById("addMoney").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(111);
        }
    }
	
	if ( document.getElementById("addMoneyL2").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(-222);
        }
    }
	
	/*if ( document.getElementById("addMoneyE3").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(999);
        }
    }*/
    
    if ( document.getElementById("addmul10s").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(2);
        }
    }
    if ( document.getElementById("addmulMulti").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(22);
        }
    }
    if ( document.getElementById("addmulMultiPlus").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(222);
        }
    }
    if ( document.getElementById("addmulMultiPlusPlus").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(2222);
        }
    }
    
    if ( document.getElementById("adddivNonCalc").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(5);
        }
    }
	
	if ( document.getElementById("addNegs").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(555555);
        }
    }
	
    if ( document.getElementById("adddivMulti").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(55);
        }
    }
    
    if ( document.getElementById("addpercNonCalc").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(3);
        }
    }
    if ( document.getElementById("addpercCalc").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(33);
        }
    }
    
    if ( document.getElementById("addfracNonCalcNumer1").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(4);
        }
    }
    
    if ( document.getElementById("addfracNonCalcNumer123").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(45);
        }
    }
    
    if ( document.getElementById("addfracNonCalcPlus").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(46);
        }
    }
        
	if ( document.getElementById("addfracCalc").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(44);
        }
    }
    
    if ( document.getElementById("addFracSimp1").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(444);
        }
    }
    if ( document.getElementById("addFracSimp2").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(445);
        }
    }
    
    if ( document.getElementById("addRound10s").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(6);
        }
    }
        
	if ( document.getElementById("addRound100s1000s").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(66);
        }
    }
    
    if ( document.getElementById("addRound1DP2DP").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(666);
        }
    }
    
    if ( document.getElementById("addRound1DP3DP").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(6666);
        }
    }
    
    if ( document.getElementById("ratioEasy").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(7);
        }
    }
    
    if ( document.getElementById("ratioHard").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(77);
        }
    }
    
    if ( document.getElementById("ratioSimplify").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(777);
        }
    }
    
    if ( document.getElementById("orderingWhole").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(8);
        }
    }
    
    if ( document.getElementById("orderingDec").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(88);
        }
    }
    
    if ( document.getElementById("placeValueWhole").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(9);
        }
    }
    
    if ( document.getElementById("placeValueDec").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(99);
        }
    }
    
    if ( document.getElementById("addAverages1").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(1011);
        }
    }
    
    if ( document.getElementById("addAverages2").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(1012);
        }
    }
    
    if ( document.getElementById("addAverages3").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(1013);
        }
    }
    
    if ( document.getElementById("addAverages4").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(1014);
        }
    }
    
    if ( document.getElementById("addFDP").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(2000);
        }
    }
    
    if ( document.getElementById("addPerim").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(3000);
        }
    }
    
    if ( document.getElementById("addArea").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(4000);
        }
    }
    
    if ( document.getElementById("addMetric").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(5000);
        }
    }
	
	if ( document.getElementById("addMetricEasy").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(5500);
        }
    }
    
    if ( document.getElementById("addBestBuys").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(6000);
        }
    }
	
	/*
	if ( document.getElementById("examcalcL1").checked == true ) {
    	for (q = 1; q < 2; q++) {
        	questionspread.push(70000);
        }
    }
	*/
    
    document.getElementById("questionsheet").innerHTML = "";
    questionsasked = [];
    
	projectlist = [];
	
	document.getElementById("workshop").style.display = "none";
	
	if ( blnL1SessionSheet ) {
		getL1Worksheet();
	}
	else if (blnL2SessionSheet) {
		getL2Worksheet();
	}
	else if (blnE3SessionSheet) {
		getE3Worksheet();
	}
	else if (blnE2SessionSheet) {
		getE2Worksheet();
	}
	else {
		// check we are asking questions....
		if (questionspread.length == 0 ) {
			document.getElementById("questionsheet").innerHTML = "<span style=\"margin-left:50px;font-size:34px;color:red;\">Use the checkboxes to select question types</span>";
			return;
		}
		while (questionsasked.length < n ) {
			for (ii = 0; ii < 500; ii++ ) {
				iii = getRndInteger(0, questionspread.length-1);
				jjj = getRndInteger(0, questionspread.length-1);
					var tmp = questionspread[iii];
					questionspread[iii] = questionspread[jjj];
					questionspread[jjj] = tmp;
			}
			for (i = 0; i < questionspread.length; i++) {
				var currentquestion = getAQuestion(questionspread[i], questionsasked.length+1);
				if (questionsasked.includes(thisquestiontext) ) {
					if ( getRndInteger(1,100) > 1) {
						i--;
						continue;
					}
				}
				questionsasked.push(thisquestiontext);
				document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;;
				projectlist.push(currentquestion);
				if ( questionsasked.length >=n ) break;
			}
		}
    
		toggleOptions();
	
	
		if ( document.getElementById("questions").value == "slideshow") {
			document.getElementById("slideshow").style.height = "900px";
			document.getElementById("qsheet").style.height = "0px";
			slidenumber = 0;
			document.getElementById("mainquestion").innerHTML = projectlist[slidenumber];
		
		}
		else {
			document.getElementById("slideshow").style.height = "0px";
			document.getElementById("qsheet").style.height = "auto";
		}
	}
	
	outer = document.getElementById("questionsheet").outerHTML;
	
	//document.getElementById("questionsheet").innerHTML.replace("%cc%", "");;;
}

//
function getE2Worksheet() {
	document.getElementById("instructions").innerHTML = "";
		
		document.getElementById("workshop").innerHTML = document.getElementById("hiddenE1E2plan").innerHTML
		document.getElementById("workshop").style.display = "block";
	
	/*
		document.getElementById("instructions").innerHTML += "<h2 style=\"margin-left:10px;\">20 Minute Challenge<br><br>Do as much as you can in - <u>Move on to Section A after 20 minutes</u></h2>";
		
		document.getElementById("questionsheet").innerHTML += "<p style=\"float:right;margin-right:200px;\" >Remember:<br>10mm = 1cm, 100cm = 1m, 1000m = 1km<br>1000mg = 1g, 1000g = 1kg, 1000kg = 1 tonne<br>10ml = 1cl, 1000ml = 1L, 100cl = 1L</p>";
		
		document.getElementById("questionsheet").innerHTML += "<br><br><img width=\"90%\" src=\"./images/mazes/mazeE2.jpg\"><br><br>";
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding:10px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><h2>Section A - 40 minutes: Non Calculator Questions<br><br>Do as much as you can in 40 minutes<br><br><u>Move on to Section B after 40 minutes or when done</u></h2></div>";
		*/
		//document.getElementById("questionsheet").innerHTML += "<h2>1. Write down the current time here: _______________</h2><br>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">You should spend 40 minutes on this section. Unless your teacher says you should spend longer.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">After 40 minutes you should move on to section B - even if you haven't finished.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">What is time your wrote down above plus another 40 minutes? ___________</h2>";
		
		//questionsasked.push("a");
		
		// order w...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(8, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// rnd 10s..
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(6, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		for (jjjj = 0; jjjj < 3 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		for (jjjj = 0; jjjj < 3 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		for (jjjj = 0; jjjj < 3 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(22, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		// div
		for (jjjj = 0; jjjj < 3 ; jjjj++) {
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(440000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section B - Exam Style - <u>calculations can be done with a calculator</u></h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		for (jjjj = 0; jjjj < 15 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-111, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section C - Calculator Stretch/Challenge</h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(99, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Divide 2...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(4, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(99, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Divide 2...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(4, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Divide 2...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// negs
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(555555, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// metric
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5500, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		/*
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section D - Timeout</h1><h2>Take a moment to get yourself into the mood if you are feeling demotivated</h2><br></div>";
		
		// timeout
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-9999, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		*/
}

function getE3Worksheet() {
	document.getElementById("instructions").innerHTML = "";
		
		document.getElementById("workshop").style.display = "block";
		
		document.getElementById("workshop").innerHTML = document.getElementById("hiddenL2plan").innerHTML
	
		/*
	
		document.getElementById("instructions").innerHTML += "<h2 style=\"margin-left:10px;\">5 Minute Challenge<br><br>Do as much as you can in 5 minutes - <u>Move on to Section A after 5 minutes</u></h2>";
		
		
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(440000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"margin-top:70px;float:right;\" width=\"20%\" src=\"./images/5mins.jpg\">");;
			projectlist.push(currentquestion);
			break;
		}
		
		*/
		
		/*
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding:10px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><h2>Section A - Non Calculator Questions<br><br>Do as much as you can in 45 minutes<br><br><u>Move on to Section B after 45 minutes or when done</u></h2></div>";
		
		//document.getElementById("questionsheet").innerHTML += "<h2>1. Write down the current time here: _______________</h2><br>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">You should spend 45 minutes on this section. Unless your teacher says you should spend longer.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">After 45 minutes you should move on to section B - even if you haven't finished.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">What is time your wrote down above plus another 45 minutes? ___________</h2>";
		*/
		
		// order w...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(8, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// rnd 10s..
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(6, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// rdn100s/1000s...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(66, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// pv
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(9, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// Divide...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Add wheel
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55120000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// Divide...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// Divide...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(3000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// Divide...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(4000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section B - Calculator Questions</h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		for (jjjj = 0; jjjj < 9 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(999555, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section C - L1 Calculator Stretch/Challenge</h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		
		// order d...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(88, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}

// pvv
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(99, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}

		// Perc...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(3, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(4, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		for (jjjj = 0; jjjj < 3 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(111, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		/*
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section D - Timeout</h1><h2>Take a moment to get yourself into the mood if you are feeling demotivated</h2><br></div>";
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-9999, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		*/
}

function getL2Worksheet() {

	document.getElementById("workshop").innerHTML = document.getElementById("hiddenL2plan").innerHTML
	// hello 
		document.getElementById("instructions").innerHTML = "";
		
		document.getElementById("workshop").style.display = "block";
	
		/*
		document.getElementById("instructions").innerHTML += "<h2 style=\"margin-left:10px;\">5 Minute Warm Up<br><br>Do as much as you can in 5 minutes - <u>Move on to Section A after 5 minutes</u></h2>";
		
		// order d...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55660000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"position:absolute;float:left;top:190px;\" width=\"15%\" src=\"./images/5mins.jpg\">");;
			projectlist.push(currentquestion);
			break;
		}
		*/
		
		//document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding:10px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><h2>Section A - Non Calculator Questions<br><br>Do as much as you can in 45 minutes<br><br><u>Move on to Section B after 45 minutes or when done</u></h2></div>";
		
		//document.getElementById("questionsheet").innerHTML += "<h2>1. Write down the current time here: _______________</h2><br>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">You should spend 25 minutes on this section. Unless your teacher says you should spend longer.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">After 45 minutes you should move on to section B - even if you haven't finished.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">What is time your wrote down above plus another 45 minutes? ___________</h2>";
		
		// order d...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(88, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// mode
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1011, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// median
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1012, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// median
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1013, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
	
		// Rnd dec
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(666, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// pvv
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(99, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// addsub
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// negs
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(555555, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// metric harder
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(22, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Divide 2...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Perc...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2002, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Perc...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(3, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Ratio
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(7, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// timetables...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(330000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section B - Calculator Questions</h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		// Mean
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(6000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Mean
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(44, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// mean
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1014, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		for (jjjj = 0; jjjj < 10 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-222, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section C - Stretch/Challenge</h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(77, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(44, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(77, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(33, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(33, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(445, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		
		/*
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section D - Timeout</h1><h2>Take a moment to get yourself into the mood if you are feeling demotivated</h2><br></div>";
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-9999, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		*/
}

function getL1Worksheet() {
	document.getElementById("instructions").innerHTML = "";
		
		document.getElementById("workshop").style.display = "block";
		
		document.getElementById("workshop").innerHTML = document.getElementById("hiddenL2plan").innerHTML
	
		/*
		document.getElementById("instructions").innerHTML += "<h2 style=\"margin-left:10px;\">5 Minute Warm Up<br><br>Do as much as you can in 5 minutes - <u>Move on to Section A after 5 minutes</u></h2>";
		
		// order d...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55660000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"position:absolute;float:left;top:190px;opacity: 1.0\" width=\"15%\" src=\"./images/5mins.jpg\">");;
			projectlist.push(currentquestion);
			break;
		}
		*/
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding:10px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><h2>Section A - Non Calculator Questions<br><br>Do as much as you can in 45 minutes<br><br><u>Move on to Section B after 45 minutes or when done</u></h2></div>";
		
		//document.getElementById("questionsheet").innerHTML += "<h2>1. Write down the current time here: _______________</h2><br>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">You should spend 45 minutes on this section. Unless your teacher says you should spend longer.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">After 45 minutes you should move on to section B - even if you haven't finished.</h2>";
		//document.getElementById("questionsheet").innerHTML += "<h2 style=\"margin-left:20px;margin-bottom:50px;\">What is time your wrote down above plus another 45 minutes? ___________</h2>";
		
		//questionsasked.push("a");
		
		// order d...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(88, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// addsub
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
	
		// rdn100s/1000s...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(66, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
	
		// Rnd dec
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(666, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// pvv
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(99, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// negs
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(555555, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// metric
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5500, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Multiply
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(22, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Range
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1013, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
	
		// Divide...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Divide 2...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Perc...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2002, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Perc...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(3, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(4, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(3000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(4000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");
			projectlist.push(currentquestion);
			break;
		}
		
		// Perc...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(3, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(4, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");
			projectlist.push(currentquestion);
			break;
		}
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section B - Calculator Questions</h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		// Mean
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(6000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Mean
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(1014, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		for (jjjj = 0; jjjj < 10 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(111, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section C - L2 Calculator Stretch/Challenge</h1><h2>Write your working (what you did on the calculator) in the spaces</h2><br></div>";
		
		// metric harder
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-333, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
// metric harder
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(5000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// Mean
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(2000, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}

// Divide 2...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(55, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}

// Ratio
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(7, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
// Frac
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(44, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		// metric harder
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-333, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		
		for (jjjj = 0; jjjj < 2 ; jjjj++) {
		// exam...
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-222, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			//document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "<img style=\"float:right;pmargin-right:50px;opacity: 0.3;\" width=\"15%\" src=\"./images/calc.jpg\">");;
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;
			projectlist.push(currentquestion);
			break;
		}
		}
		
		/*
		document.getElementById("questionsheet").innerHTML += "<div style=\"page-break-before:always;padding-left:15px;margin-bottom:40px;margin-left:10px;;background-color:#dddddd;width:100%;\"><br><h1>Section D - Timeout</h1><h2>Take a moment to get yourself into the mood if you are feeling demotivated</h2><br></div>";
		
		// Ratio hard
		for (iiii = 0; iiii < 100; iiii++) {
			var currentquestion = getAQuestion(-9999, questionsasked.length+1);
			if (questionsasked.includes(thisquestiontext) ) {
				if ( getRndInteger(1,100) > 1) {
					iiii--;
					continue;
				}
			}
			questionsasked.push(thisquestiontext);
			document.getElementById("questionsheet").innerHTML += currentquestion.replace("%cc%", "");;;
			projectlist.push(currentquestion);
			break;
		}
		*/
}

var blnL1SessionSheet = false;

function getL2SessionSheet() {
	blnL2SessionSheet = true;
	blnL1SessionSheet = false;
	blnE3SessionSheet = false;
	blnE2SessionSheet = false;
	document.getElementById("questions").value = "questions"
	
	document.getElementById("titlebox").value = "Level 2 - Non Calc / Calc (with stretch and challenge section)"
	
	//document.getElementById("instructions").innerHTML = "<h1 style=\"margin-left:10px;\">Section A - Non Calculator Questions<br><br>Show ALL your working out</h1>";
	
	getQuestions(-1);
}

var blnL2SessionSheet = false;

function getL1SessionSheet() {
	blnL2SessionSheet = false;
	blnL1SessionSheet = true;
	blnE3SessionSheet = false;
	blnE2SessionSheet = false;
	document.getElementById("questions").value = "questions"
	
	document.getElementById("titlebox").value = "Level 1 - Non Calc / Calc (with stretch and challenge section)"
	
	//document.getElementById("instructions").innerHTML = "<h1 style=\"margin-left:10px;\">Section A - Non Calculator Questions<br><br>Show ALL your working out</h1>";
	
	getQuestions(-1);
}

var blnE3SessionSheet = false;

function getE3SessionSheet() {
	blnL2SessionSheet = false;
	blnL1SessionSheet = false;
	blnE3SessionSheet = true;
	blnE2SessionSheet = false;
	document.getElementById("questions").value = "questions"
	
	document.getElementById("titlebox").value = "E3 - Non Calc / Calc  (with stretch and challenge section)"
	
	//document.getElementById("instructions").innerHTML = "<h1 style=\"margin-left:10px;\">Section A - Non Calculator Questions<br><br>Show ALL your working out</h1>";
	
	getQuestions(-1);
}

var blnE2SessionSheet = false;

function getE2SessionSheet() {
	blnL2SessionSheet = false;
	blnL1SessionSheet = false;
	blnE3SessionSheet = false;
	blnE2SessionSheet = true;
	document.getElementById("questions").value = "questions"
	
	document.getElementById("titlebox").value = "E1/E2 - Non Calc / Calc  (with stretch and challenge section)"
	
	//document.getElementById("instructions").innerHTML = "<h1 style=\"margin-left:10px;\">Section A - Non Calculator Questions<br><br>Show ALL your working out</h1>";
	
	getQuestions(-1);
}

function NextQuestion() {

	
	if ( slidenumber == projectlist.length-1 ) {
		return;
	}
	
	var currentscale = 1.0;
var currentwidth = 96;

	slidenumber++;
	
	document.getElementById("mainquestion").innerHTML = projectlist[slidenumber].replace("%cc%", "").replace("%transform%", "transform: scale(" + currentscale + ")");
		
}

function LastQuestion() {

	if ( slidenumber == 0 ) {
		return;
	}
	
	var currentscale = 1.0;
var currentwidth = 96;

	slidenumber--;
	
	document.getElementById("mainquestion").innerHTML = projectlist[slidenumber].replace("%cc%", "").replace("%transform%", "transform: scale(" + currentscale + ")");
}

var projectlist = [];

var slidenumber = 0;

var useCalc = false;
var wbox = "";

var thisquestiontext = "";
function getAQuestion(rndqsttype, qnum) {
	
    var qtext = "";
    
    useCalc = false;
    wbox = "";
	
	wboxalt = wboxhgt;
    
    switch (rndqsttype) {
		case 5555500:
        	wbox = "";
            useCalc = true;
        	qtext = get5ADayL1L2();
        	break;
		case -333:
        	wbox = "";
            useCalc = false;
        	qtext = getAnglesLines();
        	break;
		case -111:
        	wbox = "";
            useCalc = false;
        	qtext = getE1E2();
        	break;
		case -9999:
			wbox = "";
			useCalc = false;
			qtext = getSumSearch();
			break;
		case 999000:
        	wbox = "";
            useCalc = true;
        	qtext = getGCSECalcF();
        	break;
		case 999555:
        	wbox = "";
            useCalc = true;
        	qtext = getE2E3();
        	break;
		case 999556:
        	wbox = "";
            useCalc = true;
        	qtext = getE1();
        	break;
		case 555555:
        	wbox = workingbox;
            useCalc = false;
        	qtext = getNegs();
        	break;
		case 220000:
        	wbox = "";
            useCalc = false;
        	qtext = getCharts();
        	break;
		case 330000:
        	wbox = "";
            useCalc = false;
        	qtext = getTimeTables();
        	break;
		case 440000:
        	wbox = "";
            useCalc = false;
        	qtext = getAddPuzzles();
        	break;
		case 55120000:
        	wbox = "";
            useCalc = false;
        	qtext = getMulWheels(1,12);
        	break;
		case 55660000:
        	wbox = "";
            useCalc = false;
        	qtext = getTableMazes();
        	break;
		case 55770000:
        	wbox = "";
            useCalc = false;
        	qtext = getClockFaces();
        	break;
		case 55880000:
        	wbox = "";
            useCalc = false;
        	qtext = getFracCompare();
        	break;
		case 70000:
        	wbox = workingbox;
            useCalc = true;
        	qtext = getExamL1();
        	break;
		case 110000:
        	wbox = "";
            useCalc = false;
        	qtext = getSymmetry();
        	break;
        case 6000:
        	wbox = workingbox;
            useCalc = true;
        	qtext = getBestBuys();
        	break;
        case 5000:
        	wbox = "";
        	qtext = getMetric(0);
        	break;
		case 5500:
        	wbox = "";
        	qtext = getMetricEasy(0);
        	break;
    	case 3000:
        	wbox = "";
        	qtext = getPerim();
        	break;
        case 4000:
        	wbox = "";
        	qtext = getArea();
        	break;
        case 2000:
        	wbox = "";
        	qtext = getFDP();
        	break;
		case 2002:
        	wbox = "";
        	qtext = getFDP1();
        	break;
        case 2200:
        	wbox = "";
        	qtext = getFDPPlus();
        	break;
    	case 1011:
        	qtext = getAverages(1);
            wbox = "";
        	break;
        case 1012:
        	qtext = getAverages(2);
            wbox = "";
        	break;
        case 1013:
        	qtext = getAverages(3);
            wbox = "";
        	break;
        case 1014:
        	qtext = getAverages(4);
            wbox = workingbox;
        	break;
    	case 1:
        	qtext = getAddSub100();
            wbox = workingbox;
        	break;
        case 11:
        	qtext = getAddSub1000();
            wbox = workingbox;
        	break;
        case 111:
			wbox = workingbox;
        	qtext = getAddMoney();
			useCalc = true;
        	break;
		case -222:
			wbox = workingbox;
        	qtext = getAddMoneyL2();
			useCalc = true;
        	break;
		case 999:
			wbox = workingbox;
        	qtext = getAddMoneyE3();
			useCalc = true;
        	break;
        case 2:
        	qtext = getMulNC();
            wbox = workingbox;
        	break;
        case 22:
        	qtext = getMulC();
            wbox = workingbox;
        	break;
        case 222:
        	qtext = getMulCC();
            wbox = workingbox;
        	break;
        case 2222:
        	qtext = getMulCCC();
            wbox = workingbox;
        	break;
        case 3:
        	qtext = getPercNC();
            wbox = workingbox;
        	break;
        case 33:
        	qtext = getPercC();
            wbox = workingbox;
            useCalc = true;
        	break;
        case 4:
        	qtext = getFracNC(1);
            wbox = workingbox;
        	break;
        case 45:
        	qtext = getFracNC(2);
            wbox = workingbox;
        	break;
        case 46:
        	qtext = getFracNC(3);
            wbox = workingbox;
        	break;
        case 44:
        	qtext = getFracC();
            wbox = workingbox;
            useCalc = true;
        	break;
        case 444:
        	qtext = getFracSimp(1);
            wbox = workingbox;
        	break;
        case 445:
        	qtext = getFracSimp(2);
            wbox = workingbox;
        	break;
        case 5:
        	qtext = getDivNC();
            wbox = workingbox;
        	break;
        case 55:
        	qtext = getDivC();
            wbox = workingbox;
        	break;
        case 6:
        	qtext = getRound10s();
            wbox = "";
        	break;
        case 66:
        	qtext = getRound100sand1000s();
            wbox = "";
            useCalc = false;
        	break;
        case 666:
        	qtext = getround1DP(1);
            wbox = "";
            useCalc = false;
        	break;
        case 6666:
        	qtext = getround1DP(2);
            wbox = "";
            useCalc = false;
        	break;
        case 7:
        	qtext = getRatioEasy();
            wbox = workingbox;
        	break;
        case 77:
        	qtext = getRatioHard();
            wbox = workingbox;
        	break;
        case 777:
        	qtext = getRatioSimplify();
            wbox = "";
        	break;
        case 8:
        	qtext = orderWhole();
            wbox = "";
        	break;
        case 88:
        	qtext = orderDec();
            wbox = "";
        	break;
        case 9:
        	qtext = pvWhole();
            wbox = "";
        	break;
        case 99:
        	qtext = pvDec();
            wbox = "";
        	break;
        default:
        	break;
    }
    
	thisquestiontext = qtext;
    if ( document.getElementById("questions").value == "showworking") {
    	var thisqtext = questiontext.replace("%workingbox%", wbox).replace("%num%", qnum).replace("%question%", qnum + ". " + qtext).replace("%wboxhgt%", wboxalt);
    
    	if ( useCalc ) {
    		thisqtext = thisqtext.replace("%calc%", "(you may use a calculator for this question)");
    	}
    	else {
    		thisqtext = thisqtext.replace("%calc%", "(do not use a calculator for this question)");
    	}
    
    	if ( questionspread[rndqsttype] != 444 && wbox.length > 0 && Math.floor(Math.random() * 100 > 85) ) {
    		thisqtext = thisqtext + checktext.replace("%num%", qnum);
    	}
    }
    else if ( document.getElementById("questions").value == "noworking") {
    	
    	var thisqtext = questiontext.replace("%workingbox%", wbox).replace("%num%", qnum).replace("%question%", qnum + ". " + qtext);
    
    	if ( useCalc ) {
    		thisqtext = thisqtext.replace("%calc%", "(you may use a calculator for this question)");
    	}
    	else {
    		thisqtext = thisqtext.replace("%calc%", "(do not use a calculator for this question)");
    	}
    }
    else if ( document.getElementById("questions").value == "questions" || document.getElementById("questions").value == "slideshow") {
    	wbox = "";
    	var thisqtext = questiontext.replace("%workingbox%", wbox).replace("%num%", qnum).replace("%question%", qnum + ". %cc%" + qtext);
    
    	if ( useCalc ) {
    		thisqtext = thisqtext.replace("%calc%", "(you may use a calculator for this question)");
    	}
    	else {
    		thisqtext = thisqtext.replace("%calc%", "(do not use a calculator for this question)");
    	}
    }
    else if ( document.getElementById("questions").value == "allworking") {
    	wbox = workingbox;
    	var thisqtext = questiontext.replace("%workingbox%", wbox).replace("%num%", qnum).replace("%question%", qnum + ". " + qtext);
    
    	if ( useCalc ) {
    		thisqtext = thisqtext.replace("%calc%", "(you may use a calculator for this question)");
    	}
    	else {
    		thisqtext = thisqtext.replace("%calc%", "(do not use a calculator for this question)");
    	}
        
        thisqtext = thisqtext + checktext.replace("%num%", qnum);
    }
	else if ( document.getElementById("questions").value == "oneperpage") {
    	wbox = "";
    	var thisqtext = questiontextpagebreak.replace("%workingbox%", wbox).replace("%num%", "").replace("%question%", qtext);
    
    	if ( useCalc ) {
    		thisqtext = thisqtext.replace("%calc%", "(you may use a calculator for this question)");
    	}
    	else {
    		thisqtext = thisqtext.replace("%calc%", "(do not use a calculator for this question)");
    	}
    }
	
	if ( document.getElementById("questions").value == "slideshow") {
		thisqtext = thisqtext.replace("%cc%","");
	}
	
    return thisqtext + "</div>";
}

function checkALL() {
	checkAllBoxes(true);
}

function checkAllBoxes(checktoggle)
{
  var checkboxes = new Array(); 
  checkboxes = document.getElementsByTagName('input');
 
  for (var i=0; i<checkboxes.length; i++)  {
    if (checkboxes[i].type == 'checkbox')   {
      
      	checkboxes[i].checked = checktoggle;
      
    }
  }
}

var sectionsarr = [" ", "basicnumber", "numberops", "fdpratio", "meassuresdata", "shapespace", "examstyle" ];

function checkSectionBoxes(sec, e)
{

  var checks = document.querySelectorAll('#' + sectionsarr[sec] + ' input[type="checkbox"]');
    for(var i =1; i< checks.length;i++){
      	checks[i].checked = e.checked;
   }
    
}

function getAddMoneyL2() {
	
	examsL2Count++;
	
	if ( examsL2Count > examsL2.length-1) {
		examsL2Count = 0;
	}
	
	return getAddMoneyL2Images();
	
	var sw = examsL2[examsL2Count];
	//sw = 26;
    switch (sw) {
    	case 1:
        	return getAddMoney1();
            break;
        case 2:
        	return getAddMoney2();
            break;
        case 3:
        	return getAddMoney3();
            break;
        case 4:
        	return getAddMoney4();
            break;
        case 5:
        	return getAddMoney5();
            break;
        case 106:
        	return getAddMoney106();
            break;
        case 7:
        	return getAddMoney7();
            break;
        case 108:
        	return getAddMoney108();
            break;
		case 9:
        	return getAddMoney9();
            break;
		case 10:
        	return getAddMoney10();
            break;
		case 11:
        	return getAddMoney11();
            break;
		case 112:
        	return getAddMoney112();
            break;
		case 13:
        	return getAddMoney13();
            break;
		case 114:
        	return getAddMoney114();
            break;
		case 15:
        	return getAddMoney15();
            break
		case 116:
			return getAddMoney116();
			break;
		case 117:
			return getAddMoney117();
			break;
		case 18:
			return getAddMoney18();
			break;
		case 19:
			return getAddMoney19();
			break;
		case 120:
			return getAddMoney120();
			break;
		case 121:
			return getAddMoney121();
			break;
		case 22:
			return getAddMoney22();
			break;
		case 23:
			return getAddMoney23();
			break;
		case 124:
			return getAddMoney124();
			break;
		case 125:
			return getAddMoney125();
			break;
		case 126:
			return getAddMoney126();
			break;
		case 127:
			return getAddMoney127();
			break;
		case 28:
			wbox = "";
			return getCharts();
			break;
		case 29:
			wbox = "";
			return getTimeTables();
			break;
		case 30:
			wbox = "";
			return getL1RevisionImage();
			break;
		
    }
}

var lshaperoom = '<table style="border-collapse: collapse; width:200px;" border="0">\
<tbody>\
<tr style="  height: 3px;">\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">%top%</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
</tr>\
<tr style="  height: 3px;">\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style=" background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
</tr>\
<tr style="  height: 3px;">\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
</tr>\
<tr style="  height: 3px;">\
<td style="   height: 3px; border-style: none;">%side1%</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; background-color: grey; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; background-color: grey; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
</tr>\
<tr style="  height: 3px;">\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; background-color: grey; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; background-color: grey; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">%side2%</td>\
</tr>\
<tr style="  height: 3px;">\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="background-color: grey;   height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; background-color: grey; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; background-color: grey; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
</tr>\
<tr style="  height: 3px;">\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">%base%</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="   height: 3px; border-style: none;">&nbsp;</td>\
<td style="  height: 3px; border-style: none;">&nbsp;</td>\
<td style=" height: 3px; border-style: none;">&nbsp;</td>\
</tr>\
</tbody>\
</table>';

