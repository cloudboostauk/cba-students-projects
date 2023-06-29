document.addEventListener('DOMContentLoaded', function() {
  const calculateBtn = document.getElementById('calculateBtn');
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const genderSelect = document.getElementById('gender');
  const resultText = document.getElementById('result');
  const adviceText = document.getElementById('advice');

  calculateBtn.addEventListener('click', function() {
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const gender = genderSelect.value;

    if (isNaN(height) || isNaN(weight)) {
      resultText.textContent = 'Invalid input';
      adviceText.textContent = '';
      return;
    }

    const bmi = calculateBMI(height, weight);
    const category = getBMICategory(bmi, gender);
    const advice = getAdvice(category);

    resultText.textContent = `Your BMI: ${bmi.toFixed(2)}`;
    adviceText.textContent = advice;
  });

  function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / (height (m))^2
    const heightInMeter = height / 100; // Convert height to meters
    return weight / (heightInMeter * heightInMeter);
  }

  function getBMICategory(bmi, gender) {
    if (gender === 'male') {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi < 25) {
        return 'Normal weight';
      } else if (bmi < 30) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    } else {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi < 24) {
        return 'Normal weight';
      } else if (bmi < 29) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    }
  }

  function getAdvice(category) {
    switch (category) {
      case 'Underweight':
        return 'You are underweight. Consider consulting a nutritionist.';
      case 'Normal weight':
        return 'Congratulations! You have a normal weight.';
      case 'Overweight':
        return 'You are overweight. Try to maintain a balanced diet and exercise regularly.';
      case 'Obese':
        return 'You are obese. It is important to focus on improving your health through diet and exercise.';
      default:
        return '';
    }
  }
});
