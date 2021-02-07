const mealItemCheck = document.getElementById('mealItemCheck');
const searchBtn = document.getElementById('search-button');
searchBtn.addEventListener('click', function () {
    document.getElementById("singleFoodItem").innerHTML = "";
    getMealData(mealItemCheck);
})

const getMealData = mealItemCheck => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealItemCheck.value}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const mealsDiv = document.getElementById("singleFoodItem");
        for (let i = 0; i < data.meals.length; i++) {
            const meal = data.meals[i];
            const mealsListDiv = document.getElementById('singleFoodItem');
            const mealDiv = document.createElement("div");
            mealDiv.className = "meal";
            const mealDetailsInfo = `
                <img class="img-fluid" src="${meal.strMealThumb}" alt="food-image">
                <h4 class='text-center'>${meal.strMeal}</h4>
                `
            mealDiv.innerHTML = mealDetailsInfo;
            mealsDiv.appendChild(mealDiv);

        };

    })
}