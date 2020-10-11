class gejalacovidItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="gejala" class="scrollspy">
            <div class="containerr">
                <div class="flexcontent">
                    <div class="gambar center">
                        <img src="../asset/gejala.jpg" class="responsive-img">
                    </div>
                    <div class="konten">
                        <h3>Gejala Covid-19</h3>
                        <p>Infeksi virus Corona atau COVID-19 bisa menyebabkan penderitanya mengalami gejala flu,
                            seperti demam, pilek, batuk, sakit tenggorokan, dan sakit kepala; atau gejala penyakit
                            infeksi pernapasan berat, seperti demam tinggi, batuk berdahak bahkan berdarah, sesak napas,
                            dan nyeri dada.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('gejalacovid-item', gejalacovidItem);
