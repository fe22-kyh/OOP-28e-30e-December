let app = document.querySelector(".app-container");

let appHeader = new TextComponent("Awesome header", "app-header");
let counterButton = new CounterButton("Click me a lot!");

app.append(appHeader.renderAs("h2"));

counterButton.attachTo(app);

setTimeout(() => {
  counterButton.updateIncrementalValue(2);

  setTimeout(() => {
    counterButton.updateIncrementalValue(5);
  }, 2000);
}, 2000);

