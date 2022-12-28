class TextComponent {
  constructor(text, className) {
    this.text = text;
    this.className = className;
  }

  renderAs(elementType) {
    let el = document.createElement(elementType);
    el.textContent = this.text;
    el.className = this.className;

    return el;
  }
}


class CounterButton {
  constructor(text) {
    this.text = text;
    this.counter = 0;
    this.incrementalValue = 1;
  }

  render() {
    return `<button class="button">${this.text}</button>`
  }

  updateIncrementalValue(newVal) {
    this.incrementalValue = newVal;
  }

  handleCounterClick(event) {
    this.counter = this.counter + this.incrementalValue;
    event.target.textContent = "Clicked: " + this.counter;
  }

  attachTo(container) {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = this.render();

    let el = tempDiv.firstElementChild;

    el.addEventListener("click", this.handleCounterClick.bind(this));

    container.append(el);
  }
}