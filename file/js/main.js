// memvalidasi form
function validateForm() {
  const berat = document.getElementById("berat").value;
  const usia = document.getElementById("usia").value;
  const tinggi = document.getElementById("tinggi").value;
  const gender = document.querySelector('input[name="option"]:checked');

  if (!gender ||!berat ||!usia ||!tinggi) {
    alert("Mohon isi semua form terlebih dahulu!");
    return;
  }
  if (usia < 18) {
    alert("Maaf, Anda belum cukup umur untuk menggunakan BMI. Silakan konsultasikan dengan dokter.");
    return;
  }
  const bmi = calculateBMI(berat, tinggi);
  displayResult(bmi, gender.value, usia);
}

// menghitung hasil dari berat dan tinggi badan
function calculateBMI(berat, tinggi) {
  const heightInMeter = tinggi / 100;
  const bmi = berat / (heightInMeter * heightInMeter);
  return bmi.toFixed(2);
}

// menampilkan hasil data yang diinput
function displayResult(bmi, gender, usia) {
  const angkaHasilElement = document.getElementById("angka-hasil");
  const andaMemilikiElement = document.getElementById("anda-memiliki");
  const genderElement = document.getElementById("gender");
  const umurElement = document.getElementById("umur");

  angkaHasilElement.innerText = `Angka BMI Anda adalah ${bmi}`;
  andaMemilikiElement.innerText = `Berat badan Anda ${getBMICategory(bmi)}`;
  genderElement.innerText = `Jenis Kelamin: ${gender}`;
  umurElement.innerText = `Usia: ${usia} tahun`;
}

// menghitung berat badan
function getBMICategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// mereset seluruh data
function resetButton() {
  document.getElementById("berat").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("tinggi").value = "";
  document.querySelectorAll('input[name="option"]').forEach((radio) => {
    radio.checked = false;
  });
  document.getElementById("angka-hasil").innerText = "";
  document.getElementById("anda-memiliki").innerText = "";
  document.getElementById("gender").innerText = "";
  document.getElementById("umur").innerText = "";
}