function style() {
    document.getElementById('app').innerHTML = html;
    updateview();
    href = "style.css"

}

function updateViewiskogenPage() {
    let html = '';
    for (let paragraf of model.text) {
        html += `<div style="color: ${paragraf.color}" id="paragraf">${paragraf.text}</div>`
    }

    document.getElementById('app').innerHTML = `
    
    <body>
    <header>
        <h2>NORSKE SKOGER</h2>

        <form method="get" action="index.html">
            <button type="submit">DYRERIKET</button>
        </form>

        
    </header>

    <section>
        <nav>

            <img src="skogen.jpg" alt="forside" style="width:500px;height:500px;">

        </nav>

        <article>
            <h1>NORGES SKOGER</h1>
            <b>
                Vi har et imponerende antall ulike skogtyper i Norge og nesten 60 prosent av alle norske arter lever i skog. <br>
                Variasjonen i skogtyper og artsmangfoldet i skog i Norge kommer av at vi har et langstrakt og skogrikt land, med store variasjoner i værforhold, klima, jordtyper og landskap.<br>
                <br>
                Her har vi alt fra edelløvskog med bøk og eik i sør til fjellbjørkskog i nord. <br>
                Noen av skogområdene i Midt-Norge og på Vestlandet har et så stabilt fuktig klima og høyt antall regnværsdager at de har regnskog!<br>
                
                Dessverre er skog det økosystemet som kommer dårligst ut i vurderingen over hvordan det står til i naturen vår. <br>
                I Norsk Rødliste for arter 2015 slås det fast at om lag halvparten av de utrydningstruede artene i Norge lever i skog, hvor skogbruk truer 85 prosent av de mest truede artene.<br>
                <br>
                Det er særlig effekter av flatehogst som gir negativ effekt på artene, men også plukkhogst, treslagsskifte, bygging av skogsbilveier og fravær av skogbranner kan virke negativt. <br>
                For å forbedre situasjonen i skog må det tas sterkere naturhensyn, både gjennom skogvern og gjennom miljøansvarlig skogsdrift.</b>

        </article>

    </section>

    <footer>
        <marquee>
            - TA VARE PÅ NATUREN - TA VARE PÅ DYRENE - 
        </marquee>
    </footer>
    `;
}    