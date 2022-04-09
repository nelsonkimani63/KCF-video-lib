const createdNav = () => {

    let nav = document.querySelector(".navbar");
    nav.innerHTML = `
        <div class="nav">
            <img src="Assets/icon.jpg" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search movies, TV shows, Documentaries">
                    <button class="search-btn">search</button>
                </div>
              <div>


              
              <a href="#"><i class="fas fa-shopping-cart"></i></a>
              </div>
        
               
            </div>
        </div>
        <ul class="link-container">

            <li class="link-item">
                <a href="#" class="link">Home</a>
            </li>
            <li class="link-item">
                <a href="#" class="link">Box Office</a>
            </li>
            <li class="link-item">
                <a href="#" class="link">Thrillers</a>
            </li>
            <li class="link-item">
                <a href="#" class="link">Action</a>
            </li>
        </ul>
    `;
}

createdNav();