let initialIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  // Default theme
  var currentTheme = document.getElementById("theme").getAttribute("href");

  // Theme switch event handlers
  document.getElementById("button").addEventListener("click", function () {
    if (currentTheme == "./orangeTheme.css") {
      changeTheme("./greenTheme.css");
      document.getElementById("foodName").innerHTML = "Asian Cucumber Salad";
      document.getElementById("foodDesc").innerHTML =
        "Asian Cucumber Salad Recipe Made With Crunchy Cucumber, Onion, Rice Wine Vinegar, And A Few Secret Ingredients!";
    } else {
      changeTheme("./orangeTheme.css");
      document.getElementById("foodName").innerHTML =
        "Green Goddess Chicken Salad";
      document.getElementById("foodDesc").innerHTML =
        "It Is A Non Vegetarian Salad Which Consists Of The Green Goddess Dressing Mixed With Chicken, Peppers, Olives And Celery.";
    }
  });

  const locations = [
    { top: "225px", left: "730px" },
    { top: "225px", left: "-35px" },
    { top: "50px", left: "85px" },
    { top: "-50px", left: "340px" },
    { top: "50px", left: "605px" },
  ];

  const images = document.querySelectorAll(".images");
  document.getElementById("button").addEventListener("click", () => {
    document
      .getElementById("selectedFood")
      .setAttribute("src", images[(initialIndex + 3) % images.length].src);
    for (let i = 0; i < images.length; i++) {
      newIndex = (initialIndex + i) % images.length;
      images[newIndex].style.top = locations[i].top;
      images[newIndex].style.left = locations[i].left;
    }
    initialIndex = (initialIndex + 1) % images.length;
  });

  // Function to change the theme dynamically
  function changeTheme(theme) {
    document.getElementById("theme").setAttribute("href", theme);
    currentTheme = theme;
  }
});
