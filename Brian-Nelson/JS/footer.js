const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `  
    
    <div class="footer-content">
    <img src="./Assets/icon.jpg" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">movies</li>
            <li>
                <a href="#" class="footer-link">actions</a>
            </li>
            <li>
                <a href="#" class="footer-link">thrillers</a>
            </li>
            <li>
                <a href="#" class="footer-link">drama</a>
            </li>
            <li>
                <a href="#" class="footer-link">comedy</a>
            </li>
            <li>
                <a href="#" class="footer-link">sci-fi</a>
            </li>
            <li>
                <a href="#" class="footer-link">crime</a>
            </li>
            <li>
                <a href="#" class="footer-link">adventure</a>
            </li>
            <li>
                <a href="#" class="footer-link">history</a>
            </li>
            <li>
                <a href="#" class="footer-link">musical</a>
            </li>
            <li>
                <a href="#" class="footer-link">indie</a>
            </li>
        </ul>

        <ul class="category">
            <li class="category-title">tv shows</li>
            <li>
                <a href="#" class="footer-link">actions</a>
            </li>
            <li>
                <a href="#" class="footer-link">thrillers</a>
            </li>
            <li>
                <a href="#" class="footer-link">drama</a>
            </li>
            <li>
                <a href="#" class="footer-link">comedy</a>
            </li>

            <li>
                <a href="#" class="footer-link">crime</a>
            </li>
            <li>
                <a href="#" class="footer-link">adventure</a>
            </li>
            <li>
                <a href="#" class="footer-link">politics</a>
            </li>


        </ul>
        <ul class="category">
            <li class="category-title">documentaries</li>
            <li>
                <a href="#" class="footer-link">Biography</a>
            </li>
            <li>
                <a href="#" class="footer-link">sci-fi</a>
            </li>
            <li>
                <a href="#" class="footer-link">crime</a>
            </li>
            <li>
                <a href="#" class="footer-link">adventure</a>
            </li>
            <li>
                <a href="#" class="footer-link">history</a>
            </li>
            <li>
                <a href="#" class="footer-link">musical</a>
            </li>
            <li>
                <a href="#" class="footer-link">Religion</a>
            </li>
        </ul>
    </div>

</div>
<p class="footer-title">About KanzuMax</p>
<p class="info">KanzuMax is a Video Library service. What sets KanzuMax apart is a unique combination of hit East African and International content, first and exclusive TVseries, movies, the best kids’ shows, and Documentaries. Kanzumax was born in 2022. The service
    is available throughout East Africa and to selected markets worldwide.
</p>
<p class="info">Email: info@kanzumax.com</p>
<p class="info">Contact: Plot 155, Dembe Towers Mawanda Road, Kampala, Uganda</p>

    `;
}

createFooter();