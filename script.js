// algoritma angka ganjil dan genap

const angka = parseInt(prompt("masukan angka"));
(() => {
  if (isNaN(angka)) {
    alert("harus memasukan angka");
    return window.location.reload();
  }

  angka % 2 == 0 ? alert("genap") : alert("ganjil");
  return window.location.reload();
})();
