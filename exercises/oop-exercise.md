# Todo
HopelessCoordinators Inc. är i stort behov av en todo app och ber nu dig att skapa deras framtida webbgräsnitt. 

## Syfte
Skapa sig färdighet i att bygga upp en webbapplikation med hjälp av objekt.

## Ignition
3.. 2.. 1..

I din applikation kommer du att behöva minst två klasser, en klass som representerar en lista av todos, och en klass som representerar varje uppgift i todo:n.

Klassen för en todo kan se ut som följande och bör placeras i en javascript fil kallad "todo.js"
```js
class TodoItem {
  constructor() {
    this.title = "Placeholder title...";
    this.content = "Placeholder content...";
  }
}
```

Utöver en TodoItem så behövs även en klass som kan representera själva listan av todos.

```js
class TodoList {
  constructor() {
    this.todos = []; // empty array
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  printTitles() {
    console.log(`There are ${this.todos.length} entries in the todo list`);
    this.todos.forEach(todo => console.log(todo.title));
  }

  getTodosByTitle(titleQuery) {
    // To-be implemented
  }
}
```

Exempel på när en todo skapas och läggs till i listan av todos

```js
let todoList = new TodoList();

let todo = new Todo();
todo.title = "Laundry";
todo.content = "On monday at 15:00 I have to do laundry before parents arrive";

todoList.addTodoItem(todo);

todoList.printTitles();
```


## Uppgift - #1 Implementering

Skapa ett enklare gränssnitt i html och css med en todo container som endast innehåller ut ett par stycken todos innehåll med hjälp av objekten ovan. 

Uppgiften är att placera all todo logik (skapandet av mock-todos) i filen todo.js och allt visuellt (dom manipulation) i en fil kallad app.js. Detta innebär att du kommer behöva skapa upp ett par stycken TodoItem instanser (med hjälp av new TodoItem) i todo.js och använda metoden "addTodoItem" för att placera den interna todos arrayen i TodoList objektet.

app.js & index.html (förslag på objekt till html logik)
<details>
  <summary>Exempel - Spoiler warning</summary>
    
  index.html
  ```html
  <ul class="todo-container"></ul>
  ```
  
  ```js
  const todoList = document.querySelector(".todo-container");

  function createTodoListItem(todo) {
    let li = document.createElement("li");
    li.textContent = `
    <h3>${todo.title}</h3>
    <p>${todo.content}</p>
    `;

    return li;
  }

  todoList.todos.forEach(todo => {
    let li = createTodoListItem(todo);
    todoContainer.append(li);
  });
  ```
</details>



<details>
  <summary>Lösning - Spoiler warning</summary>

  todo.js
  ```js
  let todoList = new TodoList();

  let todo = new Todo();
  todo.title = "Laundry";
  todo.content = "On monday at 15:00 I have to do laundry before parents arrive";

  todoList.addTodoItem(todo);

  todo = new Todo(); // todo är redan deklarerad, här skapar vi endast en ny instans på samma referens som innan
  todo.title = "Bake pancakes"
  todo.content = "Promised my younger brother to help him bake pancakes at 17:00 tomorrow";

  todoList.addTodoItem(todo);
  ```
</details>

---

## #2 Förbättringen

Utöka objektet TodoItem med en tidstämpel. Gör detta genom att tilldela TodoItem en egenskap kallad "startDate", värdet på startDate ska sättas i konstruktorn med "new Date()".

```js
let todo = new Todo();
todo.title = "Timed todo";
todo.content = "This todo has a start date";

console.log(todo.startDate); // Prints time when todo was created (just now)
```

<details>
  <summary>Lösning - Spoiler warning</summary>

  ```js
  class TodoItem {
    constructor() {
      this.title = "Placeholder title...";
      this.content = "Placeholder content...";
      this.startDate = new Date();
    }
  }
  ```
</details>

---

Lägg även till en metod som kan sätta ett slutdatum (egenskap todo.endDate) för todo:n. Namnge metoden "setDeadline".

```js
let todo = new Todo();
todo.title = "Timed todo";
todo.content = "This todo has a start date";

todo.setDeadline("2022-05-05");
console.log(todo.endDate); //2022-05-05
```
<details>
  <summary>Lösning - Spoiler warning</summary>

  ```js
  class TodoItem {
    constructor() {
      this.title = "Placeholder title...";
      this.content = "Placeholder content...";
      this.startDate = new Date();
    }

    setDeadline(endDate) {
      this.endDate = endDate;
    }
  }
  ```
</details>

--- 

Skapa en metod setDeadlineIn som tar emot ett heltal för antal dagar.

```js
let todo = new Todo();
todo.title = "Timed todo";
todo.content = "This todo has a start date";

todo.setDeadlineIn(2);
console.log(todo.endDate); //two days from now in format yyyy-mm-dd
```

Datum kan formateras på många olika sätt, se exempelvis [how to format dates in javascript](https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/) som exempel.

<details>
  <summary>Lösning - Spoiler warning</summary>

  ```js
  class TodoItem {
    constructor() {
      this.title = "Placeholder title...";
      this.content = "Placeholder content...";
      this.startDate = new Date();
    }

    setDeadline(endDate) {
      this.endDate = endDate;
    }

    setDeadlineIn(days) {
      let date = new Date();
      date = date.setDate(date.getDate() + days);
      date = new Date(date);
      this.endDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
  }
  ```
</details>

---


## #3 Sökning

Implementera logiken för "getTodosByTitle" som ska returnera en lista av todos som matchar mot en viss sökning.

```js
let todoList = new TodoList();

  let todo = new Todo();
todo.title = "Laundry";
todo.content = "On monday at 15:00 I have to do laundry before parents arrive";

todoList.addTodoItem(todo);

todo = new Todo();
todo.title = "Bake pancakes"
todo.content = "Promised my younger brother to help him bake pancakes at 17:00 tomorrow";

todoList.addTodoItem(todo);

```

```js
let searchedTodos = todoList.getTodosByTitle("bake"); // [{title: "Bake pan...", content: "Promised my..."}]
```

```js
let searchedTodos = todoList.getTodosByTitle("a"); // [{title: "Laundry", content: "On monday..."}, {title: "Bake pan...", content: "Promised my..."}]
```

```js
let searchedTodos = todoList.getTodosByTitle("Clean up"); // [] (no result)
```

<details>
  <summary>Lösning - Spoiler warning</summary>

  ```js
  class TodoList {
  constructor() {
    this.todos = []; // empty array
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  printTitles() {
    console.log(`There are ${this.todos.length} entries in the todo list`);
    this.todos.forEach(todo => console.log(todo.title));
  }

  getTodosByTitle(titleQuery) {
    let results = this.todos.find(todo => todo.title.includes(titleQuery));

    if(results == undefined) {
      return [];
    } else {
      return results;
    }
  }
  ```
</details>


## Evolution - Level ups (avanderat)
Friviliga tillägg


1. I klassen TodoItem skapa en metod som kollar tid sedan todo:n skapades
   
2. I klassen TodoItem skapa en metod som kollar tiden som kvarstår på en todo givet en startDate och en endDate som implementerad ovan

3. I klassen TodoList skapa en metod som hämtar alla todos med en kvarstående tid som är lägre en en given parameter

4. I klassen TodoItem skapa en metod som hämtar en html template för en todo

5. I klassen TodoList skapa en metod som skapar en html lista av todos.
