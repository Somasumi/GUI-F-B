// feedback.js
// Menampilkan pesan terima kasih setelah form dikirim.
// Catatan: form ini belum terhubung ke server, jadi data belum tersimpan.

const feedbackForm = document.getElementById("feedbackForm");
const thankYouBox = document.getElementById("thankYouBox");

feedbackForm.addEventListener("submit", function (event) {
  event.preventDefault();          // cegah halaman reload

  feedbackForm.hidden = true;      // sembunyikan form
  thankYouBox.hidden = false;      // tampilkan terima kasih

  thankYouBox.scrollIntoView({ behavior: "smooth", block: "center" });
});
