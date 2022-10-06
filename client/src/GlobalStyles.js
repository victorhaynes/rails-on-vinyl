import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  body {
    background-color: rgb(255,255,255);
    color: black;
  }

  .slider-frame{
    overflow: hidden;
    height: 250px;
    width: 1000px;
    margin-top: 12.5px;
    margin-left: auto;
    margin-right: auto;
    /* width: 66%; */
  }

@-webkit-keyframes slide_animation{
  0% {left: 0px;}
  10% {left: 0px;}
  20% {left: 1000px;}
  30% {left: 1000px;}
  40% {left: 2000px;}
  50% {left: 2000px;}
  60% {left: 2000px;}
  70% {left: 2000px;}
  80% {left: 0px;}
  90% {left: 0px;}
  100% {left: 0px;}
}

.slide-images {
  width: 3000px;
  height: 250px;
  margin: 0 0 0 -2000px;
  position: relative;
  -webkit-animation-name: slide_animation;
  -webkit-animation-duration: 33s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  -webkit-animation-play-state: running;
}

.img-container {
  height: 250px;
  width: 1000px;
  position: relative;
  float: left;
  cursor: pointer;
}

`



export default GlobalStyles