class covidItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id=covid class="covid scrollspy">
            <div class="container-covid">
                <div class="row">
                    <div class="col m6">
                        <h3>Apa itu Covid-19</h3>
                        <p>COVID-19 (coronavirus disease 2019) adalah penyakit yang disebabkan oleh jenis coronavirus
                            baru yaitu Sars-CoV-2, yang dilaporkan pertama kali di Wuhan Tiongkok pada tanggal 31
                            Desember 2019. COVID-19 ini dapat menimbulkan gejala gangguan pernafasan akut seperti demam
                            diatas 38°C, batuk dan sesak nafas bagi manusia. Selain itu dapat disertai dengan lemas,
                            nyeri otot, dan diare. Pada penderita COVID-19 yang berat, dapat menimbulkan pneumonia,
                            sindroma pernafasan akut, gagal ginjal bahkan sampai kematian.
                        </p>
                    </div>
                    <div class="col m6 center">
                        <img src="../asset/covid.png" alt="global" class="responsive-img">
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('covid-item', covidItem);
