/// <reference types="../@types/jquery" />
// HTML ELEMENTS

var closeBtn=document.querySelector('.icon1');
var menuIcon=document.querySelector('.menuIcon');
let head=document.querySelectorAll('.head1');

// APP VARIABLES
// FUNCTIONS
$(function(){
    var sidebarWidth= $('.sidebarInner1').outerWidth();
$('.sidebarInner1').animate({marginLeft:`-${sidebarWidth}`},500);

$('.closeIcon').on('click',function(){
    $('.sidebarInner1').animate({marginLeft:`-${sidebarWidth}`},500);
})
$(menuIcon).on('click',function(){
    sidebarWidth=$('.sidebarInner1').outerWidth();
    let sidebarLeft=$('.sidebarInner1').css('marginLeft');
    if(sidebarLeft=='0px'){
        $('.sidebarInner1').animate({marginLeft:`-${sidebarWidth}`},500);
    }
    else{
        $('.sidebarInner1').animate({marginLeft:`0`},500);
    }
})
$(head).on('click',function(e){
    let head=e.target;
    let info=$(head).next();
    $(head).next().css('display','block');
     if($(info).has('display','block')){
        $(head).on('click',function(e){
            let head=e.target;
            $(head).next().css('display','none');
        })
     }
})
// count down
 
var myfunc=setInterval(function(){
    let deadline = new Date("dec 31, 2024 15:37:25").getTime();
    let now  = new Date().getTime();
    let t = deadline - now;
let days = Math.floor(t/(1000*60*60*24));
let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((t%(1000*60*60))/(1000*60));
let seconds = Math.floor((t%(1000*60))/1000);
document.querySelector('.h1').innerHTML = days + "d ";
document.querySelector('.h2').innerHTML=hours + "h";
document.querySelector('.h3').innerHTML=minutes + "m";
document.querySelector('.h4').innerHTML=seconds + "s";
 if(t<0){
    clearInterval(myfunc);
    document.querySelector('.row').innerHTML="expired";
 }

 
},1000)
// myfunc();
let c=$('.count').html();
$('#text').on('keypress',function(){
    c--;
    $('.count').html(c);
    console.log(c);
    if(c==0||c<0){
        c="your availabe character finished"+" ";
        $('.count').html(c);
          
    }
})
$('.loader').fadeOut(500, function () {
        $('.loadingScreen').slideUp(500, function () {
            $('body').css('overflow', 'auto',function(){
                
            })
        });

    });
$('#text').on('keydown',function(e){
    if (e.code=="Backspace"&& c<100){
        c++;
        console.log(c);
        $('.count').html(c);
         
    }
})
$('a[href^="#"]').on('click',function(){
         
    let href=$(this).attr('href');
    let offset=$(href).offset().top;
    $('body,html').animate({scrollTop:offset},1000);
 })
})


         
// EVENTS