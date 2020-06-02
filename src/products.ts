export interface Product {
    id: number
    title: string
    descreption: string
    img: string
    price: number

}

export const products: Product[] = [{
    id: 1,
    title: "Pirates of the Silicon Valley",
    descreption: "Filmen handlar om persondatorns genombrott genom rivaliteten mellan Apple Computer och Microsoft, Filmen utspelar sig i slutet av 1970-talet fram till 1997.",
    img: "pirates_bigImg.jpg",
    price: 299
}, {
    id: 2,
    title: "Silicon Valley",
    descreption: "Silicon Valley är en amerikansk sitcom skapad av Mike Judge, John Altschuler och Dave Krinsky. Serien hade premiär 6 april 2014 på HBO Seriens fjärde säsong hade premiär 2017 och HBO har meddelat att en femte säsong kommer att ha premiär 2018.[1]Handlingen kretsar kring sex unga män som startar ett IT-företag i Silicon Valley. Företaget heter Pied Piper och har en unik kompressionsalgoritm som de vill utveckla",
    img: "silicon_bigImg.jpg",
    price: 399
}, {
    id: 3,
    title: "The Social Network",
    descreption: "Social Network (originaltitel: The Social Network) är en amerikansk biografisk dramafilm från 2010, regisserad av David Fincher efter manus av Aaron Sorkin. Filmen baseras på Ben Mezrichs bok The Accidental Billionaires och handlar om uppkomsten av webbplatsen Facebook och dess grundare Mark Zuckerberg och Eduardo Saverin, samt Napster-grundaren Sean Parker. Zuckerberg porträtteras av Jesse Eisenberg",
    img: "socialNet_bigImg.jpg",
    price: 599,
}, {
    id: 4,
    title: "Jobs",
    descreption: "Jobs är en amerikansk dramafilm från 2013 i regi av Joshua Michael Stern. Filmen skildrar Steve Jobs' liv och Apples historia från 1970- talet till 2000- talets början. Steve Jobs spelas av Ashton Kutcher[1] och Steve Wozniak spelas av Josh Gad. Filmen hade premiär den 16 augusti 2013.",
    img: "jobs_bigImg.jpg",
    price: 599,
}]