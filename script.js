import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1
});

// (function () {
//     var cards = document.querySelectorAll(".card.effect__click");
//     for (let i = 0, len = cards.length; i < len; i++) {
//         let card = cards[i];
//         clickListener(card);
//     }

//     function clickListener(card) {
//         card.addEventListener("click", function () {
//             let c = this.classList;
//             c.contains("flipped") === true ? c.remove("flipped") :
//                 c.add("flipped");
//         })
//     }
// })();

// (function () {

//     //cache vars
//     let cards = document.querySelectorAll(".card.effect__random");
//     let timeMin = 1;
//     let timeMax = 3;
//     let timeouts = [];

//     //loop through cards
//     for (let i = 0, len = cards.length; i < len; i++) {
//         let card = cards[i];
//         let cardID = card.getAttribute("data-id");
//         let id = "timeoutID" + cardID;
//         let time = randomNum(timeMin, timeMax) * 1000;
//         cardsTimeout(id, time, card);
//     }

//     //timeout listener
//     function cardsTimeout(id, time, card) {
//         if (id in timeouts) {
//             clearTimeout(timeouts[id]);
//         }
//         timeouts[id] = setTimeout(function () {
//             let c = card.classList;
//             let newTime = randomNum(timeMin, timeMax) * 1000;
//             c.contains("flipped") === true ? c.remove("flipped") :
//                 c.add("flipped");
//             cardsTimeout(id, newTime, card);
//         }, time);
//     }

//     //random number generator given min and max
//     function randomNum(min, max) {
//         return Math.random() * (min - max) + min;
//     }
// })();

