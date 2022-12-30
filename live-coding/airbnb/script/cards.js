const cardContainer = document.querySelector('.store')

const cardTemplate = () => `
<article class="card" itemscope itemtype="https://schema.org/Product">
  <img
    class="card-image"
    width="300"
    itemprop="image"
    src="{{card-image}}"
    alt="{{card-alt}}"
  />

  <section class="card-body">
    <div class="card-description" itemprop="description">
      <h3 class="description-name" itemprop="name">{{card-name}}</h3>
      <p class="description-host">{{card-host}}</p>
      <p class="description-date">{{card-date}}</p>
      <p class="description-price">{{card-price}} SEK</p>
    </div>

    <span class="card-rating">{{card-rating}}</span>
  </section>
</article>
`;

cardsDB.forEach(card => {
  const div = document.createElement("div");

  div.innerHTML = cardTemplate()
    .slice()
    .replace('{{card-name}}', card.name)
    .replace('{{card-host}}', card.host)
    .replace('{{card-date}}', card.date)
    .replace('{{card-rating}}', card.rating)
    .replace('{{card-price}}', card.price)
    .replace('{{card-image}}', card.image.ref)
    .replace('{{card-alt}}', card.image.ref);

  cardContainer.append(div.firstElementChild);
});