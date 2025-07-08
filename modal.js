"use strict";

let popup_modal = document.getElementById("popup_modal");
let popup_modal2 = document.getElementById("popup_modal2");
let popup_modal3 = document.getElementById("popup_modal3");
let container_modal = document.getElementById("container_modal")

let modal_desc_01 = document.getElementById("modal_desc_01");
let modal_img_01 = document.getElementById("modal_img_01");
let modal_desc_02 = document.getElementById("modal_desc_02");
let modal_img_02 = document.getElementById("modal_img_02");
let modal_desc_03 = document.getElementById("modal_desc_03");
let modal_img_03 = document.getElementById("modal_img_03");
// https://www.sejuku.net/blog/19754#JavaScript
window.onload = function(){
  modal_desc_01.innerHTML = "踏切の近くでは遊ばないでね。<br> 警報が鳴ったらわたらないでね。"
  modal_img_01.src = 'images/fumikiri/fumikiri.png'
  popup_modal.classList.add("open_popup_modal")
  
}


function openPopup(input_num){

  if (input_num === 1){
    modal_desc_02.innerHTML = '<a href="https://aceperio.com/navinavimap-fumikiri/" target="_blank" rel="noopener">こちら</a>'
    modal_img_02.src = 'images/fumikiri/navinavimap.png'
    popup_modal2.classList.add("open_popup_modal")
  } else if (input_num === 2) {
    modal_img_03.src = 'images/fumikiri/fumikiri-project.png'
    popup_modal3.classList.add("open_popup_modal")

  }
}

// close all modal
function closePopup(){
  container_modal.classList.remove("container_modal")
}
