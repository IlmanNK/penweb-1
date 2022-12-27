function validasi() {
    let isian_nama = document.getElementById("name").value;
    let p = document.getElementById("nama");

    let isian_email = document.getElementById("email1").value;
    let p1 = document.getElementById("imel");

    let isian_jam = document.getElementById("jam").value;
    let p2 = document.getElementById("jamm");

    let isian_tujuan = document.getElementById("tujuan").value;
    let p3 = document.getElementById("tjn");

    let isian_tiket = document.getElementById("tiket").value;
    let p4 = document.getElementById("tkt");

    if (isian_nama == "") {
        p.innerHTML = `<p>` + "Nama tidak valid." + `</p>`;
        isian_nama.focus();
    } else if (isian_nama.length > 30) {
        p.innerHTML = `<p>` + "Maksimum 30 karakter." + `</p>`;
    } else {
        p.innerHTML = `<p></p>`;
    }

    if (isian_email == "") {
        p1.innerHTML = `<p>` + "Email wajib diisi." + `</p>`
    } else if (isian_email.length <= 9 || isian_email == "@gmail.com") {
        p1.innerHTML = `<p>` + "Email tidak valid." + `</p>`
    } else {
        p1.innerHTML = `<p></p>`;
    }

    if (isian_jam == "") {
        p2.innerHTML = `<p>` + "Jam Keberangkatan wajib diisi." + `</p>`
    } else {
        p2.innerHTML = `<p></p>`
    }

    if (isian_tujuan == "") {
        p3.innerHTML = `<p>` + "Tujuan Keberangkatan wajib diisi." + `</p>`
    } else {
        p3.innerHTML = `<p></p>`
    }

    if (isian_tiket == "" || isian_tiket <= 0) {
        p4.innerHTML = `<p>` + "Pembelian tiket minimal 1 tiket dan maximal 10 tiket." + `</p>`
    } else if (isian_tiket > 10) {
        p4.innerHTML = `<p>` + "Maximum 10 tiket." + `</p>`
    } else {
        p4.innerHTML = `<p></p>`
    }
}