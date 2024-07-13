document.addEventListener("DOMContentLoaded", function () {

  let imgBox = document.getElementById("imgBox");
  let qrImage = document.getElementById("qrImage");
  let qrText = document.getElementById("qrText");
  const GenerateButton = document.getElementById("GenerateButton");

  function GenerateQR() {
    if (qrText.value.length > 0) {
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        qrText.value;
      imgBox.classList.add("show-img");
    }
    else {
        qrText.classList.add("error");
        setTimeout(()=>{qrText.classList.remove("error");}, 500);
    }
  }


  GenerateButton.addEventListener("click", GenerateQR);
});
