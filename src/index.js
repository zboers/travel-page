function book() {
  let name = prompt("What is your name");
  let email = prompt("What is your email address?");
  let emoji = prompt("What is your favorite emoji?");

  alert(
    "Thank you " +
      name +
      "! We`ll be in touch by email, meanwhile start packing your stuff! " +
      emoji
  );
}
let bookButton = document.querySelector(".book-button");
bookButton.addEventListener("click", book);
