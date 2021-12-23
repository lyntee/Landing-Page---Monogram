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

function createCard(cardImage, hero1CardNum, availabilityColor, cardNum) {
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

const card1 = createCard("card1-img", hero1Cards[0], "instock", "card1");
const card2 = createCard("card2-img", hero1Cards[1], "instock", "card2");
const card3 = createCard("card3-img", hero1Cards[2], "preorder", "card3");
hero1.classList.add("hero1");
hero1.appendChild(card1);
hero1.appendChild(card2);
hero1.appendChild(card3);

function changeImage1() {
  const cardImgDiv = document.querySelector(".card1");
  cardImgDiv.classList.add("card1-img2");
}

function revertImage1() {
  const cardImgDiv = document.querySelector(".card1");
  cardImgDiv.classList.remove("card1-img2");
}

function changeImage2() {
  const cardImgDiv = document.querySelector(".card2");
  cardImgDiv.classList.add("card2-img2");
}

function revertImage2() {
  const cardImgDiv = document.querySelector(".card2");
  cardImgDiv.classList.remove("card2-img2");
}

function changeImage3() {
  const cardImgDiv = document.querySelector(".card3");
  cardImgDiv.classList.add("card3-img2");
}

function revertImage3() {
  const cardImgDiv = document.querySelector(".card3");
  cardImgDiv.classList.remove("card3-img2");
}

card1.addEventListener("mouseenter", changeImage1);
card1.addEventListener("mouseleave", revertImage1);
card2.addEventListener("mouseenter", changeImage2);
card2.addEventListener("mouseleave", revertImage2);
card3.addEventListener("mouseenter", changeImage3);
card3.addEventListener("mouseleave", revertImage3);