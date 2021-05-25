# projekt

## Sammanfattning

Detta projekt är för en hemsida vars syfte är att informera jägare och vuxna fritidsuppskattare om ett utval av sveriges viltdjur. Projektet inleddes 2021-03-22, och koden blev klar 2021-05-23, alltså ungefär 2 månaders tid från idé till färdig produkt. Hela projektets gång går att följa i dess dagbok, som ligger under wiki på dess github-sida. Projektet inleddes med planering, och gick sedan över till att få en passande layout. Layouten har testats och tagit emot kritik så att den blev så bra som möjligt.  Layouten var klar i stora drag efter första månaden av arbete, och content blev klar under andra delen av arbetet. Avslutningsvis validerades och finlirades sidan, samt testades genom simulering. Bilder kom med tillåtelse från Torleif Nilsson, viltfotograf. 


## Planering

Första planeringen av hemsidan på stor skärm: 
![alt text](planering/HighResLayout.PNG)

Slutgiltiga versionen av sidan på stor skärm:
![alt text]()

Som det syns så är slutsatsen rätt så lik planeringen, men inte exakt. Navbaren dras inte ned och upp, utan är statisk, och istället finns det en sidebar som används för att röra sig runt på sidan utöver ordinarie länkar. När man hovrar över bilderna kommer ingen dropdown meny, utan bildan markeras bara och texten lyser grön. Detta eftersom jag upplevde att dropdown menyer skulle bli jobbigt för användaren om man t.ex. drog musen över flera bilder samtidigt, och alla dessa skulle blinka till och text skulle komma upp. Det finns även en footer. 

## Innehåll och navigering

Hemsidans innehåll är främst information om de olika viltdjuren. detta innehåll följer en mall för varje djur, där det börjar med att berätta om djurets kännetecken, sedan matvanor och diet och till sist parning och beteende. Det finns även en sida som visar simplifierat vilka jakttider som finns för djuren. Anledning till att denna är simplifierad är för att det helt enkelt inte finns plats nog för att skriva varje läns lagar och regler. 

Man kan alltid ta sig från den sidan man är på till startsidan genom att trycka på "Sveriges vilt" högst upp. Man kan även ta sig till alla viltdjurssidorna genom att trycka på "Viltdjur" i navbaren, som öppnar upp en sidebar som drivs av javascript.

## Validering och hastighet

Samtliga sidor har validerats på flera sätt. 

All HTML har validerats genom [W3C HTML validator](http://validator.w3.org/), [Validator.nu](https://validator.nu/) och [W3C Unicorn validator](http://validator.w3.org/unicorn/). 

CSS har validerats genom [W3C CSS validator](http://validator.w3.org/unicorn/). 

Javascript har validerats genom [BeutifyTools.com](https://beautifytools.com/javascript-validator.php)

Alla bilder har komprimerats genom [TinyPNG]((https://tinypng.com/).) för att göra hemsidan snabbare.

Hemsidan har även testats genom lighthouse. 

Före bilder komprimerades såg lighthouse testet ut såhär:
![alt text](Planering/subsidalighthouseföre.PNG)

Efter bilder komprimerades såg lighthouse testet ut såhär:
![alt text](Planering/subsidalighthouseefter.PNG)

Alltså fick komprimeringen en effekt på hastigheten av sidan.

Hemsidan har testats på många olika upplösningar genom "inspect" verktyget på chrome, men har även testats på fysiska enheter. Detta inkluderar men är inte begränsat till: Samsung s9+, 24" skärm, 27" skärm, 32" TV, 55" TV, Macbook och ipad 2.

Hemsidan har även testats på google chrome, microsoft edge och mozilla firefox.

## Riktlinjer och simulering

Under programeringens gång har riktlinjer försökt följas, och har även manuellt testats. Hemsidan har även testats genom [Powermapper](https://try.powermapper.com/demo/Report/d801fa2a-ae5f-49db-b33d-6f93ab87ad96), som validerar, testar och ser till så att sidan uppfyller standards, samt testar tillgänglighet. Många fel hittades genom powermapper, men dessa jobbades bort och löstes. Nu återstår bara två problem, vilket är att internet explorer inte har css grid egenskapen, vilket inte riktigt kan lösas då hela sidan är baserad på css grid, samt att sidans länkar är för långa, vilket inte går att ändras då jag använder github pages som webbhotel, och jag inte har ett eget custom domain namn. Sidan har även simulerats genom [Browserstack](https://www.browserstack.com/), för att testa så att den fungerar på olika sidor och browsers.

## Upphovsrätt och lagar