const produk = [
    { id: 1, nama: "Adidas City Munchen Edge", harga: 4000000, stok:20, kategori:"Sepatu" },
    { id: 2, nama: "Adidas Liverpool", harga: 3000000, stok:10, kategori:"Sepatu" },
    { id: 3, nama: "Adidas Shanghai", harga: 5650000, stok:5,  kategori:"Sepatu" },
    { id: 4, nama: "Adidas City Warszawa", harga: 9900000, stok:0,  kategori:"Sepatu" },
    { id: 5, nama: "Adidas Samba", harga:2300000 , stok:7,  kategori:"Sepatu" },
];

const tabelproduk =document.getElementById("tabelproduk");

function tampilproduk() {

tabelproduk.innerHTML = "";

produk.forEach(item => {
    
    const baris =`
        <tr>
            <td class="p-3">${item.id}</td>
            <td class="p-3">${item.nama}</td>
            <td class="p-3">Rp ${item.harga.toLocaleString("id-ID")}</td>
            <td class="p-3">${item.stok}</td>
            <td class="p-3">${item.kategori}</td>
            <td class="p-3">${item.stok > 0 ? "Tersedia" : "Habis"}</td>
        </tr>
    `;

    tabelproduk.innerHTML += baris;

});
}

const formproduk = document.getElementById("formproduk");

formproduk.addEventListener("submit",function(event) {
    event.preventDefault();


const id =document.getElementById("id").value;
const nama=document.getElementById("nama").value;
const harga=Number(document.getElementById("harga").value);
const stok=Number(document.getElementById("stok").value);
const kategori=document.getElementById("kategori").value;

const produkbaru = {
    id : Number(id),
    nama: nama,
    harga: harga,
    stok: stok,
    kategori: kategori,
};

produk.push(produkbaru);

tampilproduk();

formproduk.reset();

});

tampilproduk();




