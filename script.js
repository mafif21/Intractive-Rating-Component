const ratings = document.querySelectorAll(".rating");
const submit = document.querySelector(".submit");
const card1 = document.querySelector(".card-content1");
const card2 = document.querySelector(".card-content2");

ratings.forEach(rating => {
  rating.addEventListener("click", function () {
    rating.classList.toggle("choose");
  });
});

submit.addEventListener("click", function () {
  let userRating = 0;
  ratings.forEach(rating => {
    if (rating.classList.contains("choose")) {
      let data = rating.getAttribute("data-rating");
      userRating = data;
    }
  });
  const inforate = document.querySelector(".info-selected p");
  inforate.textContent = `You selected ${userRating} out of ${ratings.length}`;
  card1.classList.add("dnone");
  card2.classList.remove("dnone");
});
