function style() {
    document.getElementById('app').innerHTML = html;
    updateview();
    href = "style.css"

}


function updateViewForsidePage() {
    let html = '';
    for (let paragraf of model.text) {
        html += `<div style="color: ${paragraf.color}" id="paragraf">${paragraf.text}</div>`
        
    }


    document.getElementById('app').innerHTML = `
    
          <header>
          <h2>DYRERIKET</h2>

          <form method="get" action="iskogen.html">
              <button type="submit">I SKOGEN</button>
          </form>
          
      </header>

      <section>
          <nav>

              <img src="forside.jpg" alt="forside" style="width:500px;height:500px;">

          </nav>

          <article>
          <h1>DYRERIKET</h1>
          ${html} 
          </article>
      </section>

      <footer>
          <marquee>
              - TA VARE PÅ NATUREN - TA VARE PÅ DYRENE -
          </marquee>
      </footer>    
    
    `;
}