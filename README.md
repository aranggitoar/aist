# **Alkitab Interlinear Sumber Terbuka (Yunani/Ibrani-Indonesia)**
*Read in [Indonesian](https://github.com/benihyangbaik/asti#readme), [English](https://github.com/benihyangbaik/asti/blob/main/README.en.md), [Brazillian Portuguese](https://github.com/benihyangbaik/asti/blob/main/README.ptbr.md).*

*Alkitab Interlinear Sumber Terbuka* (**AIST**) merupakan sebuah proyek yang
diadakan oleh Benih Yang Baik untuk memudahkan akses Alkitab Interlinear dalam
bahasa Indonesia kepada seluruh jemaat berbahasa Indonesia.

AIST dapat dikutip, digunakan secara bebas, dengan memberikan atribusi kepada
[Benih Yang Baik](https://benihyangbaik.com).


## **Alkitab Interlinear dalam Format Digital**
Pada waktu yang sama, karena belum ada standar format digital tertentu untuk
Alkitab interlinear, AIST juga menyediakan dan menyebarluaskan penggunaan
sebuah format digital Alkitab interlinear dalam dua bentuk: (1) *ringan secara
komputasi*, (2) *jelas dan mudah dimengerti*.


### **Ringan Secara Komputasi**
Bentuk (1) adalah format [Alkitab Ibrani Open
Scriptures](https://github.com/openscriptures/morphhb) (Open Scriptures Hebrew
Bible, OSHB) dengan sedikit modifikasi. Yaitu tambahan satu poin data di depan
poin data bahasa asli. Contoh:

**Format OSHB Asli**
```json
{
  "Genesis": [
    [
      [
        ["ב/ראשית","Hb/H7225","HR/Ncfsa"],
        ["ברא","H1254","HVqp3ms"],
        ["אלהים","H430","HNcmpa"],
        ["את","H853","HTo"],
        ["ה/שמים","Hd/H8064","HTd/Ncmpa"],
        ["ו/את","Hc/H853","HC/To"],
        ["ה/ארץ","Hd/H776","HTd/Ncbsa"]
      ]
    ]
  ]
}
```

**Format OSHB Dimodifikasi**
```json
{
  "Genesis": [
    [
      [
        ["Pada mulanya","ב/ראשית","Hb/H7225","HR/Ncfsa"],
        ["menciptakan","ברא","H1254","HVqp3ms"],
        ["Allah","אלהים","H430","HNcmpa"],
        ["-","את","H853","HTo"],
        ["surga","ה/שמים","Hd/H8064","HTd/Ncmpa"],
        ["dan","ו/את","Hc/H853","HC/To"],
        ["bumi","ה/ארץ","Hd/H776","HTd/Ncbsa"]
      ]
    ]
  ]
}
```


## **Sumber**
1. Teks Yunani: [Perjanjian Baru Yunani Mayoritas
   Bizantium](https://github.com/byztxt/byzantine-majority-text) (Byzantine
   Majority Greek New Testament) oleh Robinson dan Pierpoint.
2. Teks Ibrani: OSHB oleh Open Scriptures, Kodeks Leningrad Westminster
   (Westminster Leningrad Codex).


## **Tujuan**
1. Menyediakan Alkitab interlinear sumber terbuka, terutama dalam format
   digital, dalam bahasa Indonesia.
2. Memudahkan akses orang Indonesia kepada Alkitab interlinear, terutama
   dalam format digital.
3. Menyebarluaskan penggunaan format digital Alkitab interlinear yang dapat
   terbaca oleh manusia berbasis UTF-8 yang mudah dikonversi dalam berbagai
   format lain.

Semua orang berhak mengakses Alkitab dalam bahasa aslinya dengan mudah dan
Tuhan Yesus menghendaki semua orang untuk mengenal-Nya dengan benar.


## **Langkah-Langkah**
Untuk mencapai kemudahan akses dalam berbagai format, diperlukan hal-hal berikut:
- [ ] Sebuah format interlinear dalam dua bentuk: (1) kecil dalam ukuran file
  dan (2) jelas serta mudah dimengerti.
- [x] Sebuah alat untuk menerjemahkan teks asli ke dalam bahasa target sebagai
  aplikasi desktop dan aplikasi web. Sekarang sudah siap digunakan: [repositori
  kode sumber](https://github.com/benihyangbaik/interlinear-bible-simple-editor),
  [aplikasi web](https://ibse.benihyangbaik.com).
- [ ] Sebuah alat untuk menampilkan format ini dalam sebuah aplikasi web.
- [ ] Sebuah alat konversi format interlinear bentuk (1) ke bentuk (2) dan
  sebaliknya, dan nantinya format-format lain bila diperlukan.


## **Perkembangan**
- Alat penerjemahan sudah siap digunakan, namun masih ada beberapa fitur yang kurang.
- Format interlinear yang ringan secara komputasi sudah siap digunakan, [cek
  atas](https://github.com/benihyangbaik/asti#ringan-secara-komputasi)
  dan Kitab Kejadian sedang diterjemahkan.
- ~~Teks Bizantium sedang dalam proses konversi, dari versi *parsed* dan
  *CSV-Unicode* dalam repositori yang sudah disebutkan [di
  atas](https://github.com/benihyangbaik/asti#sumber). Ini ditunda hingga
  pertengahan Februari 2022, kecuali seseorang berkontribusi.~~ Teks Bizantium
  telah selesai di konversi dan siap diterjemahkan, [lihat
  disini](https://github.com/benihyangbaik/interlinear-bible-simple-editor/blob/main/data/byzmt.json).


## **Kamus Bahasa Teknis**
**Interlinear**: secara harafiah, menurut kamus Merriam-Webster, "dimasukkan di
antara baris yang telah ditulis atau dicetak" atau "ditulis atau dicetak dalam
bahasa yang berbeda atau teks yang bergantian dalam baris-baris yang
berurutan". Dalam dunia penerjemahan Alkitab, interlinear berarti sebuah *teks
terjemahan harafiah atau konsisten secara harafiah yang lengkap penomoran
strong, teks bahasa asli, dan kode morfologi bahasa asli dalam satu baris*.

**Sumber Terbuka**: kode sumber yang dibuat *tersedia untuk diubah dan
didistribusikan* secara bebas.

**Kode Sumber**: sebuah *koleksi kode, ditulis dalam bahasa pemrograman tertentu
yang dapat dibaca dan dipahami manusia*, umumnya sebagai teks biasa (pada
umumnya dalam format UTF-8 atau UTF-16). Karena teks Alkitab ini tersedia
sebagai teks biasa dalam bahasa pemrograman tertentu yang dapat dibaca dan
dipahami, maka ia terhitung sebagai sebuah kode sumber.

**Bahasa Pemrograman**: sebuah bahasa formal yang terdiri dari sekumpulan kata
yang menghasilkan berbagai bentuk keluaran kode mesin.

**Bahasa Formal**: terdiri dari kata-kata yang abjadnya diambil dari sebuah
alfabet dan dibentuk dengan baik menurut sekumpulan peraturan tertentu.

**UTF-8, Unicode (Universal Coded Character Set) Transformation Format -
8-bit**: sebuah *format pengkodean karakter* dalam lebar variabel dengan
variasi satu sampai empat bita (8 bit) yang digunakan dalam komunikasi
elektronik.

**Universal Coded Character Set**: sebuah *standar teknologi informasi
untuk pengkodean, representasi, dan penanganan teks* yang diekspresikan dalam
kebanyakan sistem penulisan dunia secara konsisten.

**Pengkodean Karakter**: karena mesin hanya mengerti angka 0 dan 1, maka *mesin
perlu cara untuk mengenali semua karakter abjad dan simbol* yang digunakan oleh
manusia dari seluruh dunia dan mengomunikasikannya kepada manusia secara
grafis maupun kepada mesin lain. *Proses menjadikan setiap karakter dan simbol
sebaris angka 0 dan 1* (contoh: 0040 = @, 0041 = A, 0042 = B) adalah pengkodean
karakter.
