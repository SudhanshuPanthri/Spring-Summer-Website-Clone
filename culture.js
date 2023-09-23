function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main2"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main2", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main2").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();
let cultureTl = gsap.timeline();

cultureTl
  .from("#w-page1", {
    opacity: 0,
    y: "-100%",
  })
  .to("#w-page1", {
    opacity: 1,
    y: "0%",
    duration: 2,
    ease: "Power4.easeOut",
  });

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#h11",
    scroller: "#main2",
    start: "top 35%",
    end: "top -25%",
    scrub: 2,
  },
});

tl3.to("#img1", {
  y: "-20%",
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#w-page3>h1",
    scroller: "#main2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

tl.to("#w-page3", {
  backgroundColor: "#f4f0e6",
  color: "#ff3c00",
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#w-page4",
    scroller: "#main2",
    start: "top 80%",
    end: "top 30%",
    scrub: 1,
  },
});

tl2.to("#camera", {
  y: "-30%",
});

const personObj = [
  {
    id: 1,
    name: "Mia Bay",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Mia2.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Director",
  },
  {
    id: 2,
    name: "Hasse Finderup",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Hasse.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Visual Designer, UI",
  },
  {
    id: 3,
    name: "Mai Celi",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Mai.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Junior Designer",
  },
  {
    id: 4,
    name: "Ramiro Espada",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Ramiro.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Front-end Developer",
  },
  {
    id: 5,
    name: "Cecilie",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Cece.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Senior Project Manager",
  },
  {
    id: 6,
    name: "Roman",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Romain.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Associative Creator Director",
  },
  {
    id: 7,
    name: "Pauline",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Pau.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Senior Visual Designer",
  },
  {
    id: 8,
    name: "Ula",
    pictureUrl:
      "https://springsummer.imgix.net/uploads/Ula.jpg?auto=compress%2Cformat&fit=clip&q=35&w=1880",
    designation: "Senior UX Designer",
  },
];

let card = "";

for (let i = 0; i < personObj.length; i++) {
  card += `<div class="card">
    <img src=${personObj[i].pictureUrl} alt="personImg" />
    <h3>${personObj[i].name}</h3>
    <h3>${personObj[i].designation}</h3>
  </div>`;
}

document.querySelector("#cardsWrapper").innerHTML = card;
