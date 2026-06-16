function dapatkanData() {
  const senarai = document.getElementById("senaraiProduk");
  const status = document.getElementById("status");


  senarai.innerHTML = "";
  status.innerHTML = "Sedang mendapatkan data...";


  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
      if (!response.ok) {
        throw new Error("Masalah sambungan API");
      }
      return response.json();
    })
    .then(data => {
      console.log("Struktur data API:", data);


      status.innerHTML = "<p class='success'>Data berjaya diperoleh.</p>";


      data.forEach(post => {
        senarai.innerHTML += `
          <div class="post-card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
    })
    .catch(error => {
      console.error("Ralat:", error);
      status.innerHTML = "<p class='error'>Ralat sambungan. Sila cuba lagi.</p>";
    });
}