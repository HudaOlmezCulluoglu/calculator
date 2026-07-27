// 1. ADIM: HTML ELEMANLARINI SEÇME
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn'); // .btn sınıfına sahip TÜM butonları seçer

let currentInput = ""; // Ekranda biriken matematiksel ifade tutulur

// 2. ADIM: BUTONLARA TIKLAMA (CLICK) DİNLEYİCİSİ EKLEME
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Tıklanan butonun 'data-val' özniteliğindeki değeri alıyoruz
        const value = button.getAttribute('data-val');
        
        // Bu değeri işlemek üzere ana fonksiyonumuza gönderiyoruz
        handleInput(value);
    });
});

// 3. ADIM: HESAPLAMA VE MANTIK FONKSİYONU
function handleInput(value) {
    if (value === 'C') {
        // Ekranı tamamen sıfırla
        currentInput = "";
    } 
    else if (value === 'CE' || value === 'DEL') {
        // Son girilen karakteri sil
        currentInput = currentInput.slice(0, -1);
    } 
    else if (value === '=') {
        // Ekranda yazan işlemi hesapla
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = "Hata!";
        }
    } 
    else if (value === '√') {
        // Karekök alma işlemi
        try {
            currentInput = Math.sqrt(eval(currentInput)).toString();
        } catch (error) {
            currentInput = "Hata!";
        }
    } 
    else {
        // Sayı veya operatör tuşlarına basıldıysa yan yana ekle
        currentInput += value;
    }

    // 4. ADIM: EKRANI GÜNCELLEME
    // Eğer currentInput boşsa ekranda "0" göster, doluysa mevcut ifadeyi göster
    display.innerText = currentInput || "0";
}