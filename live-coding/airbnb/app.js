const cardContainer = document.querySelector('.store');

cardsDB.forEach(cardDetails => {
  let cardComponent = new CardComponent(cardDetails);
  cardContainer.append(cardComponent.render());
});