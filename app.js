document.addEventListener('DOMContentLoaded', function () {
  const dataDocelowa = new Date('2024-04-06T00:00:00');

  function odswiez() {
    const aktualnaData = new Date();
    const timeDifference = dataDocelowa - aktualnaData;

    if (timeDifference > 0) {
      const dni = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const godziny = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minuty = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const sekundy = Math.floor((timeDifference % (1000 * 60)) / 1000);
      const milisekundy = timeDifference % 1000;

      const element = document.getElementById('odliczanie');
      element.innerHTML = `
                <p>${dni} dni</p>
                <p>${godziny} godzin</p>
                <p>${minuty} minut</p>
                <p>${sekundy}.${milisekundy} sekund</p>
            `;
    } else {
      document.getElementById('odliczanie').innerHTML =
        '<p>Odliczanie zakonczone!</p>';
    }
  }

  setInterval(odswiez, 1);
});
