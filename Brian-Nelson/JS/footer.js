const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `  
    
    <div class="footer-content">
        <img src="./Assets/icon.jpg" class="logo" alt="">


        <p class="footer-title">About KanzuMax</p>
<p class="info">KanzuMax is a Video Library service. What sets KanzuMax apart is a unique combination of hit East African and International content, first and exclusive TVseries, movies, the best kids’ shows, and Documentaries. Kanzumax was born in 2022. The service
    is available throughout East Africa and to selected markets worldwide.
</p>
<p class="info">Email: info@kanzumax.com</p>
<p class="info">Contact: Plot 155, Dembe Towers Mawanda Road, Kampala, Uganda</p>
    </div>


    `;
}

createFooter();