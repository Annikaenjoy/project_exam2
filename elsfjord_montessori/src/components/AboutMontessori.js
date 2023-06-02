import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMontessori = (props) => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md={8}>
            {" "}
            <article>
              {" "}
              <p>
                {" "}
                Montessoripedagogikken bygger på et syn hvor barnet er i
                sentrum. Et syn der sosial, emosjonell, fysisk og intellektuell
                utvikling anses som like viktige. Her skal barnet både få rom
                til å være selvstendig og klare seg selv, og få lov til å være
                en viktig bidragsyter for fellesskapet. Den voksnes rolle er å
                veilede og tilrettelegge, og gi barnet rom til å prøve og feile.
                «Hjelp meg å gjøre det selv» er et mye brukt sitat fra Maria
                Montessori. Nettopp fordi det sier så mye om det vi ønsker å
                gjøre. Et av montessoripedagogikkens viktigste mål er å gi barna
                en forståelse av hvordan alt i verden henger sammen. For å
                forstå verden, må man se sammenhenger og helheter. Vårt ansvar
                for å ta vare på den jorden vi lever på, forstå den og
                respektere den er sentralt i montessoripedagogikken.
              </p>{" "}
              <Col xs={12} lg={6}>
                {" "}
                <figure className="quote">
                  <blockquote>
                    <p>
                      <span className="bqstart">"</span>
                      Do not tell them how to do it. Show them how to do it and
                      do not say a word. If you tell them, they will watch your
                      lips move. If you show them, they will want to do it
                      themselves.<span className="bqend">"</span>
                    </p>
                  </blockquote>
                  <figcaption>— Maria Montessori</figcaption>
                </figure>
              </Col>
              <p>
                {" "}
                Aldersblandede grupper er et grunnleggende montessoripedagogisk
                prinsipp. Det skaper et dynamisk miljø der læreprosessen er
                fleksibel, naturlig og åpen. Aldersblanding samsvarer med et
                pensum som ikke er lineært, og pensumet må ikke brytes ned i
                bestemte presentasjoner til begrensede aldersgrupper. De
                aldersblandede gruppene samsvarer med utviklingstrinnene. Man
                ønsker å oppnå følgende med aldersblandede grupper:
              </p>
              <section>
                <ul>
                  <li>
                    Elever med ulik erfaringsbakgrunn kommer sammen og hjelper
                    hverandre.
                  </li>
                  <li>
                    Et «minisamfunn» skapes der elevene gis mange muligheter til
                    å utvikle sin sosiale kompetanse.
                  </li>
                  <li>
                    Læreren får muligheten til å observere den enkelte over en
                    lengre periode, og i ulike sosiale sammenhenger.
                  </li>
                  <li>
                    Elevene har muligheten til å arbeide på mange nivåer
                    samtidig, etter evne og normen blir samarbeid (i stedet for
                    konkurranse).
                  </li>
                  <li> Vennskap oppmuntres på tvers av klasser. </li>

                  <li>
                    Elever med spesielle behov kan repetere eller jobbe lenge
                    med et arbeid uten å måtte forlate grupperommet.
                  </li>

                  <li>
                    Elever inspirerer hverandre og oppmuntrer hverandre til
                    innsats og utforskning.
                  </li>
                  <li>
                    Yngre elever stimuleres til å tilegne seg grunnleggende
                    ferdigheter av eldre elever.
                  </li>
                </ul>
              </section>
              <p>
                {" "}
                Barnet i et montessorilæringsmiljø har frihet til å påvirke valg
                av aktiviteter og tidsbruk store deler av dagen. Det kan velge å
                jobbe alene, i gruppe eller sammen med et annet barn. I
                grupperommene har barna frihet til å bevege seg etter egne
                behov. Denne friheten må imidlertid alltid styres av i hvor stor
                grad det enkelte barn er i stand til å respektere andres frihet,
                gruppens regler og/ eller sine egne indre behov. Friheten i et
                montessorimiljø gis innenfor tydelige rammer og med definerte
                strukturer. Montessori mente at barnet kun kan utvikles som
                menneske gjennom frihet og erfaringer. En forutsetning for
                friheten er at man også utvikler disiplin og hensyn til
                fellesskapet. Ingen barn skal gis mer frihet de ikke er modne
                for å håndtere. Når man kommer inn i et montessorigrupperom,
                legger man raskt merke til montessorimateriellet som befinner
                seg i hyllene. Maria Montessori utviklet dette materiellet
                gjennom mange års arbeid med barn, og hennes etterfølgere
                videreutviklet det, spesielt grunnskolemateriellet. Materiellet
                kan karakteriseres som “konkretiserte abstraksjoner” heller enn
                konkretiseringsmateriell. Man har analysert et område og funnet
                vesentlige regler eller abstraksjoner, og gjort disse synlige
                gjennom materiellet. Arbeidet med materiellet leder barnet fra
                konkret virkelighet, gjennom en gradvis abstraksjonsprosess, til
                å kunne gjøre generaliseringer, forstå sammenhenger og sette opp
                regler. Materiellet skal tjene både de faglige, personlige og
                sosiale målsettinger ved skolen. Det skal gi nøkler til
                forståelse, klargjøre begreper og sammenhenger, analysere
                vanskeligheter i et fag og stimulere til videre arbeid. Mye av
                materiellet vil være likt over hele verden.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMontessori;
