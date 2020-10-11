class footerItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section id="footer">
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12 logo-center">
                        <img src="asset/logo.png" alt="logo" class="logo-footer">
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="#global">Data Global</a></li>
                            <li><a class="grey-text text-lighten-3" href="#covid">Covid-19</a></li>
                            <li><a class="grey-text text-lighten-3" href="#gejala">Gejala</a></li>
                            <li><a class="grey-text text-lighten-3" href="#indo">Data Indonesia</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container center brtop">
                    © 2020 - Design by
                    <a class="grey-text text-lighten-4" href="https://www.dicoding.com/users/396238">EggsDev</a>
                </div>
            </div>
        </footer>
    </section>
        `;
    }
}

customElements.define('footer-item', footerItem);
