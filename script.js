document.getElementById("dietForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;

    let age = parseInt(document.getElementById("age").value);

    let gender = document.getElementById("gender").value;

    let weight = parseFloat(document.getElementById("weight").value);

    let height = parseFloat(document.getElementById("height").value);

    let activity = parseFloat(document.getElementById("activity").value);

    let bmr;

    // BMR Calculation

    if(gender === "male"){

        bmr = 10 * weight + 6.25 * height - 5 * age + 5;

    }else{

        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // TDEE Calculation

    let tdee = bmr * activity;

    let dietPlan = "";
    let emoji = "";

    // Diet Suggestion

    if(tdee < 2000){

        dietPlan =
        "Eat more protein, fruits, milk, eggs, and vegetables.";

        emoji = "🥑";

    }else if(tdee >= 2000 && tdee < 3000){

        dietPlan =
        "Maintain balanced carbs, proteins, and healthy fats.";

        emoji = "🍎";

    }else{

        dietPlan =
        "You need a high calorie and protein-rich diet.";

        emoji = "💪";
    }

    // Show Result Section

    document.getElementById("resultBox").style.display = "block";

    // Display Results

    document.getElementById("bmr").innerHTML =
    `${name}, your BMR is ${bmr.toFixed(2)} Calories/day`;

    document.getElementById("tdee").innerHTML =
    `Your TDEE is ${tdee.toFixed(2)} Calories/day`;

    document.getElementById("diet").innerHTML =
    `${emoji} ${dietPlan}`;

});