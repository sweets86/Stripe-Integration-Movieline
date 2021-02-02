# MovieLine Integration med Stripe
* Frontend: React, Blueprint Designsystem
* Backend: Node.js & Express

# Innehåll

* Frontend: En webbshop applikation som säljer filmer, inspirerad av en gammal butik som fanns i Göteborg (Movieline).
Startsida visar alla produkter. Trycker man på titeln av en vald produkt visas en specifik sida för den produkten.
Det är möjligt att lägga till en produkt till kundvagn både från startsida och produktsidan.
Antal produkter i kundvagnen visas i navbaren och trycker man på cart-iconen kommer man till kundvagnssida där man ser sina varor.
Deleteknappen tar bort en produkt i taget och totalpriset visas på sidan.
Checkout tar dig till betalningssidan där du ser din order samt fält för kundinformation, fraktalternativ och betalsättsalternativ.
Alla fält är validerade och måste fyllas i för att utföra betalningen.
På sidan visas totalpris inkl. fraktalternativ och moms.
Efter betalning får du en bekräftelse att betalningen är genomförd.
Vid betalning av Visa har Stripe API implenterats och du får upp en betalningsruta med din produktinformation.
Fyller i fälten och om betalningen är godkänd kommer du till bekräftelesidan med din order.

* Länk till Github-repo Frontend
https://github.com/sweets86/Stripe-Integration-Movieline

* Backend: I servern vid uppkoppling till Stripe API skapas en order.
När köpet är bekräftat valideras köpet med sessionID och skapar en json.fil med orderinformation och sessionID.

* Länk till Github-repo Backend
https://github.com/sweets86/Backend-Stripe-Movieline

# För att köra applikationen
Ladda ner filerna från Github och kopiera innehållet i en ny mapp och öppna mappen i VSC. Du behöver ha node.js installerat på datorn. Öppna terminalen och skriv in npm install. Du kommer se att node_modules mappen läggs till.
Därefter skriver du in npm start i terminalen. Nu bör du fått igång applikationen till port localhost:3000.
I stripeForm.tsx filen, ersätt och klistra in din PUBLIC_KEY från ditt Stripe konto mellan situationstecken och spara filen.
För backend skriver du node app.js i terminalen. Nu bör du fått igång applikationen till port localhost:5000. LÄS README.