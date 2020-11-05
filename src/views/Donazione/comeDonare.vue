<template>
  <div class="container home_part">
    <h1 class="donazione"> {{howToTitle}} </h1>
    <hr>
    <div class="donazione_div">
      <div>
          <text-img :titleSection=title :textSection=firstPart 
                    :titleSectionTwo=titleImg ></text-img>

          <two-blocks-comp :title=titleSectionRL :textRL=ageText
                         :titleSectionTwoRL=titleSecRL :textSectionTwoRL=textSectionTwoRLeft>
          </two-blocks-comp>

          <two-blocks-comp :title=titleSecRL2 :textRL=textStatoSalute
                         :titleSectionTwoRL=lifeStyle :textSectionTwoRL=lifeStyleText>
          </two-blocks-comp>

          <only-text :text=onlyText :coloredText=colored></only-text>
          
          <hr>

          <listable :textTitle=textTitle :firstText=firstText
                         :secondText=secondText :textBfList=textBfList
                         :endText=endText :l1=l1 :l2=l2 :l3=l3 :l4=l4 :l5=l5
                         :l6=l6 :l7=l7>
          </listable>

          <hr> 

          <listable :textTitle=textSusp :firstText=firstSusp
                         :secondText=secondSusp :thirdText=thirdSusp 
                         :forthText=forthSusp :textBfList=textBfList
                         :endText=endSusp :l1=l11 :l2=l22 :l3=l33 :l4=l44 :l5=l55
                         :l6=l66 :l7=l77>
          </listable>

          <hr>
         <!-- 

          <h3 class="text2 color">NOTIZIE UTILI PER IL DONATORE DI SANGUE</h3>
          <img class="come_donare2" src="../../assets/percorso.png"/>
          <h2 class="text2 darkblue">Prima della donazione:</h2>
          <p class="text2"> Prima delle  donazioni  è consigliato fare una colazione leggera, priva di alimenti grassi.
              Nel caso si doni al pomeriggio è possibile consumare il pranzo purché sia leggero, ovvero senza latticini né grassi. È pertanto indicato mangiare pasta condita in modo semplice (olio, pomodoro),
                carne, pesce, verdura, frutta, pane. È sempre bene presentarsi ben idratati bevendo acqua abbondantemente dal giorno precedente.</p>
          <h2 class="text2 darkblue">Dopo la donazione:</h2>
          <p class="text2"> Si raccomanda di:</p>
          <ul class="text2">
              <li>Rimanere sdraiati per qualche minuto sul lettino</li>
              <li>Bere acqua, succhi di frutta ed altro, ma non alcolici</li>
              <li>Non svolgere attività o hobby rischiosi o faticosi</li>
              <li>Fare un pasto non abbondante e soprattutto di lieve impegno digestivo</li>
              <li>Evitare nella giornata di svolgere attività fisiche intense e di frequentare ambienti chiusi, caldi e affollati</li>
              <li>Nel caso di donazione pomeridiana è consigliatissimo, come anche per le donazioni mattutine, evitare attività faticose
                e allenamenti sportivi il giorno precedente alla donazione e anche il giorno stesso.</li><br/>
          </ul>
          <hr> <br/>

          <h3 class="text2 color">PROCEDURE DI DONAZIONE DEL SANGUE</h3>
          <p class="text2"> Di seguito vengono riportate in sintesi le principali informazioni sulle varie procedure di raccolta del sangue e degli
            emocomponenti attuate presso i Servizi Trasfusionali e gli eventuali possibili inconvenienti.</p>
        <h2 class="text2 darkblue">Donazione sangue intero</h2>
        <p class="text2"> Il prelievo di sangue viene raccolto in una sacca di plastica monouso. <br/>
          La <strong>quantità</strong> di sangue raccolto è stabilita per legge in 450 millilitri (con una tolleranza in più o in meno del 10%);
          è sempre il medico che decide la quantità precisa di sangue da prelevare. <br/>
          La <strong>durata</strong> della donazione si aggira intorno ai 10 minuti.<br/>
          L'<strong>intervallo</strong> tra una donazione di sangue intero e l'altra non deve essere inferiore ai 90 giorni.
          La frequenza annua di tale donazione non deve essere superiore a 4 nell'uomo e a 2 nelle donne in età fertile.<br/>
          La massa liquida (plasma) sottratta all'organismo con la donazione si reintegra nel giro di poche ore, la parte corpuscolata
          (globuli rossi, globuli bianchi, piastrine) nel giro di qualche giorno.</p>
          <img class="come_donare" src="../../assets/tempo.png"/> <br/>

          <h2 class="text2 darkblue">Donazione in aferesi</h2>
          <p class="text2">L' <strong class="darkblue">AFERESI</strong> consiste nel prelevare con apposite apparecchiature (separatori cellulari con utilizzo di kit sterili e monouso) l'emocomponente che interessa e rimettere in circolo la parte restante.</p>
          <p class="text2">Con questo metodo si possono effettuare donazioni di:</p>
          <ul class="text2">
              <li>Plasma</li>
              <li>Piastrine</li>
              <li>Globuli rossi</li>
              <li>Leucociti</li>
              <li>Multicomponent (due componenti del sangue, ad es. plasma + piastrine)</li>
          </ul>
          <p class="text2">La durata della donazione in aferesi varia a seconda del tipo di donazione e dell'apparecchiatura usata (dai 30 minuti ai 50 minuti circa).</p>
     -->
      </div>
    </div>
  </div>
</template>

<script>
import textImg from '../reusableComponent/textImg.vue'
import twoBlocksComp from '../reusableComponent/twoBlocksComp.vue'
import onlyText from '../reusableComponent/onlyText.vue'
import listable from '../reusableComponent/listableText.vue'

export default {
  name:"donare",
   data: function(){
    return{
      howToTitle: "Come donare",
      title: "Donazione di sangue anonima, gratuita, periodica e responsabile",
      firstPart: "Per diventare donatori di sangue occorre recarsi in un Centro Trasfusionale di Forlì (Ospedale) "+ 
                  ". Si verrà sottoposti ad un breve colloquio medico e "+
                  "ad un esame del sangue ed elettrocardiogramma per accertare l'idoneità fisica del donatore alla donazione. Infatti,"+
                  " oltre all'attenzione riservata al sangue che il paziente dovrà ricevere, la salute del donatore è"+
                  " uno dei punti cardine dell'attività dell'Avis e del Servizio Sanitario Nazionale.",
      titleImg: "Requisiti generali per donare:",
      imgPath: '../../assets/come_donare1.png',

      titleSectionRL: "Età",
      ageText: "Occorre avere un'eta compresa tra i 18 ed i 60 anni per candidarsi a diventare donatori. "+
              "La donazione di sangue intero da parte di donatori periodici di età "+
              "superiore ai 65 anni può essere consentita fino al compimento del 70° anno, previa valutazione clinica "+
              "dei principali fattori di rischio correlati all’età.",
      titleSecRL: "Peso",
      textSectionTwoRLeft: "Per un buon risultato della donazione il peso dei donatori non deve essere inferiore ai 50 Kg",
      titleSecRL2: "Stato di salute",
      textStatoSalute: "Il donatore deve godere di buone condizioni fisiche generali. Quindi, la pressione arteriosa massima deve essere inferiore o"+
                        " uguale a 180 mmHg e la pressione arteriosa minima inferiore o uguale a 100 mmHg.",
      lifeStyle: "Stile di vita",
      lifeStyleText: "Nessun comportamento a rischio che possa compromettere la nostra salute e/o quella di chi riceve il nostro sangue.",
      onlyText: "Esistono alcuni motivi per cui non è possibile effttuare la donazione:",
      colored: "è sempre opportuno consultare il medico dell'Unità di raccolta o del Centro Trasfusionale perchè la professionalità" +
              " dei medici è il miglior modo per avere le informazioni corrette ed adeguate alla propria situazione.",
      textTitle: "Chi non può donare?",
      firstText: "Poiché alcuni virus, tra cui quello dell'AIDS o dell'epatite, in alcuni rari casi non rivelano la loro presenza "+
                  "agli esami di laboratorio, in particolare quando l'infezione è stata contratta di recente ('periodo finestra'),"+ 
                  " è di fondamentale importanza, per accrescere ulteriormente il livello di sicurezza del sangue, informare "+
                  "il donatore su tutte quelle situazioni comportamentali e condizioni sanitarie che possono comportare il rischio"+
                  " di esposizione ad agenti infettivi trasmissibili attraverso il sangue. In tal modo il donatore, se adeguatamente"+
                  " informato e consapevole delle sue responsabilità in merito alla sicurezza del sangue donato, nel dubbio di "+
                  "essersi recentemente esposto a qualche rischio di contagio, può rivolgersi al personale Medico dei Servizi "+
                  "Trasfusionali, che è a disposizione per qualsiasi chiarimento e consiglio, nel rispetto del più assoluto "+
                  "segreto professionale e può astenersi dal donare il sangue (autoesclusione).",
      secondText: "Si ricorda che la privacy del donatore è tenuta in massima considerazione",
      textBfList: "Tra le ragioni più diffuse per cui un donatore può essere valutato non idoneo alla donazione troviamo:",
      l1: "Malattie cardiovascolari,",
      l2: "Diabete trattato con insulina,",
      l3: "Uso abituale di droghe o chi ha un trascorso di tossicodipendenza,",
      l4: "Uso eccessivo di alcolici,",
      l5: "Rapporti sessuali ad alto rischio di trasmissione malattie: rapporti sessuali occasionali, promiscui, a pagamento,",
      l6: "Positività al test delle Epatiti B e C,",
      l7: "Positività al test della Sifilide o dell’HIV.",
      endText: "Per tutti gli altri fattori si rimanda al giudizio del medico.",
      textSusp: "Chi può essere temporaneamente sospeso dalla donazione?",
      firstSusp: "Una sospensione temporanea non pregiudica la possibilità di donare in futuro. È una misura che viene presa "+
                  "per proteggere i donatori e i riceventi. Alcune cause di sospensione possono però essere previste dagli "+
                  "stessi donatori, i quali possono autosospendersi, rimandando la donazione a un periodo successivo. Altre "+
                  "sospensioni temporanee vengono invece stabilite dai medici.",
      secondSusp: "E' sempre opportuno consultare il medico dell'Unità di raccolta o del Centro Trasfusionale, perchè la "+
                  "professionalità dei medici è il miglior modo per avere le informazioni corrette ed adeguate alla propria situazione.",
      thirdSusp: "A titolo esemplificativo e non esaustivo si riportano alcune novità introdotte dai nuovi decreti.",
      forthSusp: "Infatti alcune condizioni di sospensione temporanea sono state modificate o non sono più presenti nel nuovo decreto.",
      l11: "Viaggi nei paesi tropicali: sosta 6 mesi,",
      l22: "Viaggi in paesi con endemia per la malaria: sospensione di 6 mesi per le donazioni di sangue ma prima di effettuare "+
            "qualsiasi donazione va effettuato il test per la presenza di anticorpi anti malaria. Va comunque rispettato "+
            "l’intervallo di 6 mesi se il paese oltre ad essere malarico è anche tropicale,",
      l33: "Non c’è più sospensione per la puntura di zecca ma solo per la malattia di Lyme,",
      l44: "Sospensione di 6 mesi dopo il termine della gravidanza e non più 12 mesi,",
      l55: "Possibilità di prolungare l’età di donazione fino a 70 anni se le condizioni di buona salute sono conservate,",
      l66: "La convivenza sia prolungata e abituale che occasionale con soggetto, anche se non partner sessuale, con positività "+
            "per HBsAg e/o anti HCV prevede una sospensione fino a 4 mesi dopo la cessazione della convivenza. Tale sospensione "+
            "si applica anche se il donatore è vaccinato per l’epatite B,",
      l77: "Le patologie autoimmuni non sono più motivo di sospensione definitiva ma va valutato caso per caso, "+
            "ovvero se la patologia coinvolge più organi o solo uno.",
      endSusp: "Altri elementi che possono sconsigliare la donazione emergeranno durante il colloquio e l'attenta compilazione del "+
                "questionario e dalla visita medica."
    }
  },
  components: {
    textImg,
    twoBlocksComp,
    onlyText,
    listable
  },
}
</script>