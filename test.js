const hero1Cards = [
  {
    pdtName: "TRAVELER CONSOLE",
    availability: "IN STOCK",
    originalPrice: "US$499",
    discountedPrice: "US$399",
    description: "Ideal for music & audio. Adaptable to any workflow."
  },
  {
    pdtName: "STUDIO CONSOLE",
    availability: "IN STOCK",
    originalPrice: "US$599",
    discountedPrice: "US$499",
    description: "Ideal for photo & video. Adaptable to any workflow."
  },
  {
    pdtName: "MASTER CONSOLE",
    availability: "PRE-ORDER",
    originalPrice: "US$1,099",
    discountedPrice: "US$799",
    description: "Ideal for Virtual Production & Film. Adaptable to any workflow."
  }
];

const hero1 = document.querySelector(".hero1");

function createHero1Card(cardImage, hero1CardNum, availabilityColor, cardNum) {
  const card = document.createElement("div");
  const cardImg = document.createElement("div");
  const pdtAvailability = document.createElement("p");
  const cardDeatails = document.createElement("div");
  const cardArranger = document.createElement("div");
  const cardPdtName = document.createElement("p");
  const cardArranger2 = document.createElement("div");
  const cardPdtOriginalPrice = document.createElement("p");
  const cardPdtDiscountedPrice = document.createElement("p");
  const cardDescription = document.createElement("p");

  card.classList.add("card");
  cardImg.classList.add(cardImage, "card-image", cardNum);
  pdtAvailability.innerText = hero1CardNum.availability;
  pdtAvailability.classList.add("availability", availabilityColor);
  cardPdtName.innerText = hero1CardNum.pdtName;
  cardPdtOriginalPrice.innerText = hero1CardNum.originalPrice;
  cardPdtOriginalPrice.classList.add("original-price", "adjust2");
  cardPdtDiscountedPrice.innerText = hero1CardNum.discountedPrice;
  cardPdtDiscountedPrice.classList.add("discounted-price");
  cardArranger.classList.add("word-arranger");
  cardArranger2.classList.add("price-arranger");
  cardDeatails.classList.add("adjust");
  cardDescription.innerText = hero1CardNum.description;
  cardDescription.classList.add("adjust");

  card.appendChild(cardImg);
  cardImg.appendChild(pdtAvailability);
  cardArranger2.appendChild(cardPdtDiscountedPrice);
  cardArranger2.appendChild(cardPdtOriginalPrice);
  cardArranger.appendChild(cardPdtName);
  cardArranger.appendChild(cardArranger2);
  cardDeatails.appendChild(cardArranger);
  cardDeatails.appendChild(cardDescription);
  card.appendChild(cardDeatails);

  return card;
}

const hero1Card1 = createHero1Card("card1-img", hero1Cards[0], "instock", "card1");
const hero1Card2 = createHero1Card("card2-img", hero1Cards[1], "instock", "card2");
const hero1Card3 = createHero1Card("card3-img", hero1Cards[2], "preorder", "card3");
hero1.classList.add("hero1");
hero1.appendChild(hero1Card1);
hero1.appendChild(hero1Card2);
hero1.appendChild(hero1Card3);

function changeImageOfHero1Card1() {
  const cardImgDiv = document.querySelector(".card1");
  cardImgDiv.classList.toggle("card1-img2");
}

function changeImageOfHero1Card2() {
  const cardImgDiv = document.querySelector(".card2");
  cardImgDiv.classList.toggle("card2-img2");
}

function changeImageOfHero1Card3() {
  const cardImgDiv = document.querySelector(".card3");
  cardImgDiv.classList.toggle("card3-img2");
}

hero1Card1.addEventListener("mouseenter", changeImageOfHero1Card1);
hero1Card1.addEventListener("mouseleave", changeImageOfHero1Card1);
hero1Card2.addEventListener("mouseenter", changeImageOfHero1Card2);
hero1Card2.addEventListener("mouseleave", changeImageOfHero1Card2);
hero1Card3.addEventListener("mouseenter", changeImageOfHero1Card3);
hero1Card3.addEventListener("mouseleave", changeImageOfHero1Card3);

const hero3Cards = [
  {
    pdtName: "MONOGRAM CORE",
    price: "US$149",
    availability: "IN STOCK"
  },
  {
    pdtName: "ORBITER MODULE",
    price: "US$99",
    availability: "PRE-ORDER"
  },
  {
    pdtName: "DIAL MODULE",
    price: "US$99",
    availability: "IN STOCK"
  },
  {
    pdtName: "SLIDER MODULE",
    price: "US$149",
    availability: "IN STOCK"
  },
  {
    pdtName: "ESSENTIAL KEYS MODULE",
    price: "US$99",
    availability: "PRE-ORDER"
  },
  {
    pdtName: "MONOGRAM CARE",
    price: "US$19 - US$129"
  }
];

const hero3 = document.querySelector(".hero3");

function createHero3Card(cardImage, hero3CardNum) {
  const hero3Card = document.createElement("div");
  const hero3CardImgDiv = document.createElement("div");
  const hero3CardAvailbility = document.createElement("p");
  const hero3CardDescription = document.createElement("div");
  const hero3CardPdtName = document.createElement("h3");
  const hero3CardPrice = document.createElement("p");

  hero3Card.classList.add("card");
  hero3CardImgDiv.classList.add(cardImage, "card-image");
  hero3CardAvailbility.innerText = hero3CardNum.availability;
  hero3CardAvailbility.classList.add("availability");
  if (hero3CardAvailbility.innerText === "IN STOCK") {
    hero3CardAvailbility.classList.add("instock");
  } else if (hero3CardAvailbility.innerText === "PRE-ORDER") {
    hero3CardAvailbility.classList.add("preorder");
  } else {
    hero3CardAvailbility.innerText = "";
  }
  hero3CardPdtName.innerText = hero3CardNum.pdtName;
  hero3CardPrice.innerText = hero3CardNum.price;
  hero3CardDescription.classList.add("word-arranger");

  hero3CardDescription.appendChild(hero3CardPdtName);
  hero3CardDescription.appendChild(hero3CardPrice);
  hero3CardImgDiv.appendChild(hero3CardAvailbility);
  hero3Card.appendChild(hero3CardImgDiv);
  hero3Card.appendChild(hero3CardDescription);

  return hero3Card;
}

const hero3Card1 = createHero3Card("hero3-card1-img", hero3Cards[0]);
const hero3Card2 = createHero3Card("hero3-card2-img", hero3Cards[1]);
const hero3Card3 = createHero3Card("hero3-card3-img", hero3Cards[2]);
const hero3Card4 = createHero3Card("hero3-card4-img", hero3Cards[3]);
const hero3Card5 = createHero3Card("hero3-card5-img", hero3Cards[4]);
const hero3Card6 = createHero3Card("hero3-card6-img", hero3Cards[5]);
hero3.appendChild(hero3Card1);
hero3.appendChild(hero3Card2);
hero3.appendChild(hero3Card3);
hero3.appendChild(hero3Card4);
hero3.appendChild(hero3Card5);
hero3.appendChild(hero3Card6);

function changeImageOfHero3Card1() {
  const cardImgDiv = document.querySelector(".hero3-card1-img");
  cardImgDiv.classList.toggle("hero3-card1-img2");
}

function changeImageOfHero3Card2() {
  const cardImgDiv = document.querySelector(".hero3-card2-img");
  cardImgDiv.classList.toggle("hero3-card2-img2");
}

function changeImageOfHero3Card3() {
  const cardImgDiv = document.querySelector(".hero3-card3-img");
  cardImgDiv.classList.toggle("hero3-card3-img2");
}

function changeImageOfHero3Card4() {
  const cardImgDiv = document.querySelector(".hero3-card4-img");
  cardImgDiv.classList.toggle("hero3-card4-img2");
}

function changeImageOfHero3Card5() {
  const cardImgDiv = document.querySelector(".hero3-card5-img");
  cardImgDiv.classList.toggle("hero3-card5-img2");
}

function changeImageOfHero3Card6() {
  const cardImgDiv = document.querySelector(".hero3-card6-img");
  cardImgDiv.classList.toggle("hero3-card6-img2");
}

hero3Card1.addEventListener("mouseenter", changeImageOfHero3Card1);
hero3Card1.addEventListener("mouseleave", changeImageOfHero3Card1);
hero3Card2.addEventListener("mouseenter", changeImageOfHero3Card2);
hero3Card2.addEventListener("mouseleave", changeImageOfHero3Card2);
hero3Card3.addEventListener("mouseenter", changeImageOfHero3Card3);
hero3Card3.addEventListener("mouseleave", changeImageOfHero3Card3);
hero3Card4.addEventListener("mouseleave", changeImageOfHero3Card4);
hero3Card4.addEventListener("mouseleave", changeImageOfHero3Card4);
hero3Card5.addEventListener("mouseleave", changeImageOfHero3Card5);
hero3Card5.addEventListener("mouseleave", changeImageOfHero3Card5);
hero3Card6.addEventListener("mouseleave", changeImageOfHero3Card6);
hero3Card6.addEventListener("mouseleave", changeImageOfHero3Card6);

const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const sideMenu = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.remove("not-shown");
  sideMenu.classList.add("mobile-view");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("mobile-view");
  sideMenu.classList.add("not-shown");
});