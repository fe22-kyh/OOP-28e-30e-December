class CardDetailsModal {
  constructor(cardComponent) {
    this.parent = cardComponent;
    this.isOpen = false;
  }

  show() {
    if (this.isOpen) {
      return false;
    }

    this.modalElement = this.render();
    document.body.append(this.modalElement);

    this.isOpen = true;
  }

  exit(event) {
    if (event.currentTarget != event.target) {
      return false;
    }

    this.modalElement.remove();

    this.isOpen = false;
  }

  render() {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card-modal">
      <div class="modal-content">
        <image class="modal-image" src=${this.parent.image.ref}>
        <p>Price: ${this.parent.price}&nbsp;kr</p>
        <p>Rating: ${this.parent.rating}&nbsp;/&nbsp;5</p>
        <button class="reserve-button">Reserve</button>
      </div>
    </div>
    `

    let el = div.firstElementChild;
    // let reserveBtn = el.querySelector(".reserve-button");

    el.addEventListener("click", event => this.exit(event));
    // reserveBtn.addEventListener("click", () => alert("You done it now"));

    return el;
  }
}

class CardComponent {
  constructor(cardDetails) {
    this.name = cardDetails.name;
    this.host = cardDetails.host;
    this.date = cardDetails.date;
    this.rating = cardDetails.rating;
    this.price = cardDetails.price;
    this.image = cardDetails.image;

    this.modal = new CardDetailsModal(this);
  }

  render() {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = `
    <article class="card" itemscope itemtype="https://schema.org/Product">
      <img
        class="card-image"
        width="300"
        itemprop="image"
        src="${this.image.ref}"
        alt="${this.image.alt}"
      />

      <section class="card-body">
        <div class="card-description" itemprop="description">
          <h3 class="description-name" itemprop="name">${this.name}</h3>
          <p class="description-host">${this.host}</p>
          <p class="description-date">${this.date}</p>
          <p class="description-price">${this.price} SEK</p>
        </div>

        <span class="card-rating">${this.rating}</span>
      </section>
    </article>
    `

    let el = tempDiv.firstElementChild;

    el.addEventListener("click", event => this.handleClick(event));
    // el.addEventListener("click", this.handleClick.bind(this));
    // el.addEventListener("click", this.handleClick); // Does not work, this context changes

    return el;
  }

  handleClick(event) {
    this.modal.show();
  }
}