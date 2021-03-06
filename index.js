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
            const dataMeals = data.meals;
            dataMeals.forEach(meal => {
                const mealsListDiv = document.getElementById('singleFoodItem');
                const mealDiv = document.createElement("div");
                mealDiv.className = "meal";
                const mealDetailsInfo = `
                <div onclick="displaySingleFoodDetails('${meal.idMeal}')" id="Hide-div">
                    <img  class="img-fluid" src="${meal.strMealThumb}" alt="food-image">
                    <h4 class='text-center'>${meal.strMeal}</h4>
                </div>
                `
                mealDiv.innerHTML = mealDetailsInfo;
                mealsDiv.appendChild(mealDiv);
            });
        })
        .catch(error=> {displayError();
            
        })
    }
function displayError(){
       document.getElementById("singleFoodItem").innerHTML="";
       document.getElementById("allFoodDetails").innerHTML=" ";
        const errorDiv = document.getElementById("singleFoodItem");
        const errorDivShow = document.createElement("div");
        errorDivShow.className ="error";
        const errorDivShowInfo =` 
            <span class='text-center'> Food name Is not found in the menu card! 
            Please write Down valid food name.</span> 
        `
        errorDivShow.innerHTML = errorDivShowInfo;
        errorDiv.appendChild(errorDivShow);
       
    }

const displaySingleFoodDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const mealDetails = document.getElementById("allFoodDetails");
            mealDetails.innerHTML = `
            <div id="hideSingleMillsDetails">
                <img class="img-fluid" src="${data.meals[0].strMealThumb}" alt="meal-image">
                <h4 class='text-center'>${data.meals[0].strMeal}</h4>
                <h4 class='text-center'>Ingredients</h4>
                <ul class='text-center'>
                    <li> ${data.meals[0].strIngredient1} </li>
                    <li> ${data.meals[0].strIngredient2} </li>
                    <li> ${data.meals[0].strIngredient3} </li>
                    <li> ${data.meals[0].strIngredient4} </li>
                    <li> ${data.meals[0].strIngredient5} </li>
                    <li> ${data.meals[0].strIngredient6} </li>
                </ul>
           </div>`
        })
    }