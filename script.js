const tshirtArray = [
  {
    name: "SPORTS WEAR",
    price: 423,
    info: "info fino",
    img: "https://rzist.ae/cdn/shop/files/DSC081112_1600x.jpg?v=1689235108",
  },
  {
    name: "T-SHIRT FOR",
    price: 3235,
    info: "THE IMPOSSIBLE JET BLACK T-SHIRT",
    img: "https://rzist.ae/cdn/shop/products/navybluetshirt_1600x.jpg?v=1704316170",
  },
  {
    name: "MENS SPORTS",
    price: 5476,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/products/DSC09798_1600x.jpg?v=1704316173",
  },
  {
    name: "OCEAN T-SHIRT",
    price: 332,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/files/DSC081112_1600x.jpg?v=1689235108",
  },
  {
    name: "MEN’S DROP-SHOULDER",
    price: 336,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/files/DSC081112_1600x.jpg?v=1689235108",
  },
  {
    name: "SHOULDER TEE",
    price: 112,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/files/DSC081112_1600x.jpg?v=1689235108",
  },
  {
    name: "RZIST IN DESERT",
    price: 264,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/files/DSC081112_1600x.jpg?v=1689235108",
  },
  {
    name: "THE IMPOSSIBLE JET",
    price: 457,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/files/DSC081112_1600x.jpg?v=1689235108",
  },
  {
    name: "THE IMPOSSIBLE JET X",
    price: 542,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/files/DSC081112_1600x.jpg?v=1689235108",
  },
  {
    name: "BLACK T-SHIRT XX",
    price: 875,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/products/DSC00226_1600x.jpg?v=1704316159",
  },
  {
    name: "BLACK T-SHIRT X",
    price: 432,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/products/DSC00221_1600x.jpg?v=1704316156",
  },
  {
    name: "BLACK T-SHIRT",
    price: 676,
    info: "RZIST's impossible T-Shirt keeps up with its name and helps you achieve the impossible with ease. The color jet black is curated with a goal to simplify you gym wear collection and provide an everyday wear T-Shirt",
    img: "https://rzist.ae/cdn/shop/products/DSC00219_1600x.jpg?v=1704316150",
  },
];

const sliderx = document.getElementById("slider");

function renderSlides(abc) {
  sliderx.innerHTML = ""; // Clear existing slides
  const tshirtArray = abc;
  tshirtArray.forEach((tshirt) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    slide.innerHTML = `
      <span class="slide-info">${tshirt.info}</span>
      <span style="height: 80%; width: 100%">
        <img src="${tshirt.img}" alt="${tshirt.name}" width="100%" height="100%" />
      </span>
      <p>${tshirt.name}</p>
      <p>$${tshirt.price}</p>
    `;

    sliderx.appendChild(slide);
    console.log("dsdsdsds");
  });
}

renderSlides(tshirtArray); // Initial rendering

//

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

var container = document.getElementById("container");
var slider = document.getElementById("slider");
var slides = document.getElementsByClassName("slide").length;
var buttons = document.getElementsByClassName("btn");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else {
    if (w < 901) {
      slidesPerPage = 2;
    } else {
      if (w < 1101) {
        slidesPerPage = 3;
      } else {
        slidesPerPage = 4;
      }
    }
  }
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition != 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition != slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition == slidesCount) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
}

//

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredArray = tshirtArray.filter((tshirt) =>
    tshirt.name.toLowerCase().includes(searchTerm)
  );

  renderSlides(filteredArray); // Pass the filtered array
});
