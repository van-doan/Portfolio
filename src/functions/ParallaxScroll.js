import $ from "jquery";
import _ from 'underscore';

export function parallaxScroll(e) {
// ------------- VARIABLES ------------- //
let delta = '';
let ticking = false;
let currentSlideNumber = 0;
const isFirefox = (/Firefox/i.test(navigator.userAgent));
const isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
const scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
const slideDurationSetting = 600; //Amount of time for which slide is "locked"
const totalSlideNumber = $(".page-section").length;
  if (isFirefox) {
    //Set delta for Firefox
    delta = e.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -e.deltaY;
  } else {
    //Set delta for all other browsers
    delta = e.wheelDelta;
  }

  if (ticking !== true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
  // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
  const slideDurationTimeout = (slideDuration) => {
    setTimeout(function() {
      ticking = false;
    }, slideDuration);
  }
  
  // ------------- ADD EVENT LISTENER ------------- //
  var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
  window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);
  
  // ------------- SLIDE MOTION ------------- //
  const nextItem = () => {
    var $previousSlide = $(".page-section").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
  }
  
  const previousItem = () => {
    var $currentSlide = $(".page-section").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  }
}