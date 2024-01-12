function updateValue(selectElement) {
  // Seçim menüsünden seçilen değeri al
  var selectedValue = selectElement.value;
  var clasName = selectElement.id;
  console.log(clasName);
  // Switch kullanarak seçilen değere göre farklı alanlara yazdır
  switch (clasName) {
    case "plaka":
      document.getElementsByClassName(clasName)[0].innerHTML =
        "<b>Plaka No:</b> " + selectedValue;
      break;
    case "sase":
      document.getElementsByClassName(clasName)[0].innerHTML =
        "<b>Şase No:</b> " + selectedValue;
      break;
    case "sagOnKapi":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "sagArkaKapi":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "sagOnCmrlk":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "sagArkaCmrlk":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "solOnKapi":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "solArkaKapi":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "solOnCmrlk":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "solArkaCmrlk":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "tavan":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "bagaj":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "kaput":
      document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
      break;
    case "onPanel":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "sagOmuz":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "sagArkaSasi":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "sagIcDirek":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "sagOrtaDirek":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "sagOnSasi":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "sagOnPodye":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "sagArkaKilit":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "solArkaKilit":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "solArkaSasi":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "solIcDirek":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "solOmuz":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "solOnPodye":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "solOnSasi":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "solOrtaDirek":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    case "bagajHavuz":
        document.getElementsByClassName(clasName)[0].innerHTML = selectedValue;
    break;
    default:
      break;
  }
}
window.onload = function () {
  TakeDate();
  document.getElementsByClassName("printDiv")[0].style="display:none";
};
document.getElementById("printDiv").addEventListener("click", view);
document.getElementById("geri").addEventListener("click", back);
    
function TakeDate() {
    // Şuanki tarihi al
var suankiTarih = new Date();

// Tarihi istediğiniz formatta yazdır
var gun = suankiTarih.getDate();
var ay = suankiTarih.getMonth() + 1; // Aylar 0'dan başladığı için +1 ekliyoruz
var yil = suankiTarih.getFullYear();
  
var formatliTarih = `${gun}/${ay}/${yil}`;
document.getElementsByClassName("Tarih")[0].innerHTML ="<b> <br>Tarih: </b>"+ " <br>"+formatliTarih;

}
function view(){
    document.getElementsByClassName("formdivi")[0].style="display:none";
    document.getElementsByClassName("printDiv")[0].style="display:block";   
}
function back(){
    document.getElementsByClassName("formdivi")[0].style="display:block";
    document.getElementsByClassName("printDiv")[0].style="display:none";   
}



