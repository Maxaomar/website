export function nav() {
   const navBar = ` <section class="header">
    <nav>
      <a href="index.html"><img src="./images/hosting-services.png"></a>
      <div class="nav-links" id="navLinks">
        <i class="fa fa-times" onclick="hideMenu()"></i>
        <ul>
          <li><a href=""> HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">COURCE</a></li>
          <li><a href="">BLOG</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
      <i class="fa fa-bars" onclick="showMenu()"></i>
    </nav>

    <div class="text-box">
      <h1>Mohamed Omar Company</h1>
      <p>
        Making website is now one of the easiest thing in the world  .
        you just need to learn HTML , CSS, <br>Javascript
        and you are good to go.
      </p>
      <a href="" class="hero-btn">Visit Us to Know more</a>
    </div>
      </section>
      `
}