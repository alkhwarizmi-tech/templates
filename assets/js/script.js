var swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  speed: 8000,
  allowTouchMove: false,
});

var swiper = new Swiper(".mySwiperBack", {
  spaceBetween: 30,
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 8000,
  allowTouchMove: false,
});
// scroll
document.addEventListener("DOMContentLoaded", () => {
  const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  gsap.registerPlugin(ScrollTrigger);

  scroller.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".container2", {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".container2").style.transform
      ? "transform"
      : "fixed",
  });

  gsap.to(".pin-wrap", {
    x: () =>
      -(document.querySelector(".pin-wrap").scrollWidth - window.innerWidth) +
      "px",
    ease: "none",
    scrollTrigger: {
      trigger: "#sectionPin",
      start: "top top",
      end: () => "+=" + document.querySelector(".pin-wrap").scrollWidth,
      pin: true,
      scrub: true,
      scroller: ".container2",
    },
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
});

// Sidebar Toggle
const sidebar = document.getElementById("sidebar");

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  sidebar.classList.remove("translate-x-full");
  sidebar.classList.add("translate-x-0");
  openBtn.classList.add("hidden"); // Open button chhupana
  closeBtn.classList.remove("hidden"); // Close button dikhana
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("translate-x-full");
  setTimeout(() => {
    openBtn.classList.remove("hidden"); // Open button wapas dikhana
    closeBtn.classList.add("hidden"); // Close button chhupana
  }, 500);
});
// toggleBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("hidden");
// });
// toggleBtn.addEventListener("click", () => {
//   if (sidebar.classList.contains("translate-x-full")) {
//     sidebar.classList.remove("translate-x-full");
//     sidebar.classList.add("translate-x-0"); // Slide in
//     classHide.classList.toggle("hidden");
//   } else {
//     classHide.classList.toggle("hidden");
//     sidebar.classList.add("translate-x-full"); // Slide out
//   }
// });
// const body = document.body;

// Color Theme Change
// document.querySelectorAll(".color-btn").forEach((button) => {
//   button.addEventListener("click", () => {
//     const color = button.dataset.color;
//     document.documentElement.style.setProperty("--tw-text-opacity", "1");
//     document.documentElement.style.setProperty("--tw-bg-opacity", "1");
//     document.documentElement.style.setProperty(
//       "--tw-text-color",
//       `rgba(var(--tw-color-${color}), var(--tw-text-opacity))`
//     );
//   });
// });

// card
// document.getElementById("cards").onmousemove = (e) => {
//   for (const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   }
// };

// hover
options = {
  cursorOuter: "circle-basic",
  hoverEffect: "circle-move",
  hoverItemMove: true,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
};
magicMouse(options);

$(".img-cursor").mouseover(function () {
  $("#magicMouseCursor").addClass("change");
}),
  $(".img-cursor").mouseleave(function () {
    $("#magicMouseCursor").removeClass("change");
  });
