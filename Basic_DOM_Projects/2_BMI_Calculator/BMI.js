const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value);  // This will not work because the value of the input field is empty when the page loads

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default behaviour of the form submission i.e. page reload

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || isNaN(height) || height <= 0) {
        results.innerHTML = 'Please enter valid Height';
    }
    else if (weight === '' || isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please enter valid Weight';
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span> <br>`;

        let BMI = "";
        if (bmi < 18.5) {
            BMI = "Underweight";
        }
        else if (bmi >= 18.5 && bmi < 24.9) {
            BMI = "Normal";
        }
        else if (bmi >= 25 && bmi < 29.9) {
            BMI = "Overweight";
        }
        else {
            BMI = "Obese";
        }

        results.innerHTML += `<span>Your BMI Category is ${BMI}</span>`;
    }

});