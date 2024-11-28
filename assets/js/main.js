// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};



    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;

    // Cek apakah dark mode sudah diaktifkan sebelumnya
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true; // Menandakan bahwa dark mode sudah aktif
    }

    // Toggle dark mode saat tombol berubah
    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Simpan status dark mode
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled'); // Hapus status dark mode
        }
    });


    const searchInput = document.getElementById('searchInput');
    const accountRows = document.querySelectorAll('.account-row'); // Ambil semua baris akun

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase(); // Ambil nilai pencarian dan ubah menjadi lowercase

        accountRows.forEach(row => {
            const rowText = row.textContent.toLowerCase(); // Ambil semua teks dalam baris
            if (rowText.includes(searchTerm)) {
                row.style.display = ''; // Tampilkan baris jika cocok
            } else {
                row.style.display = 'none'; // Sembunyikan baris jika tidak cocok
            }
        });
    });




    function editAccount() {
        // Logika untuk mengedit akun, bisa membuka form atau mengarahkan ke halaman edit
        alert('BELUM JADI WOY!');
    }

    function deleteAccount() {
        // Konfirmasi sebelum menghapus akun
        if (confirm('Are you sure you want to delete this account?')) {
            alert('GABISA COK!');
            // Logika untuk menghapus akun (misalnya mengirim request ke server atau menghapus elemen)
        }
    }

