//membuat Element Div
for (let i = 0; i < 9; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

//deklarasi variable untuk tombol dan element box
const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

//kode untuk membuat kode warna hexadecimal acak
function randomHexColorCode() {
    const chars = '0123456789abcdef'; // kumpulan karakter
    const colorLength = 6; // panjang karakter
    let color = ''; // konten dari chars dan colorLegth

    for (let i = 0; i < colorLength; i++) {
        let randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor + 1); // substring mengambil acak chars 
    }

    return `#` + color;
}

//menambahkan warna pada element box
function addColor(){
    randomColorBlock.forEach( e => {
        let newColor = randomHexColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}

//menjalankan fungsi ketika halaman dimuat
window.onload = () =>{
    addColor();
}