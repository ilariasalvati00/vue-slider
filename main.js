const { createApp } = Vue;

const options = {
    data: function(){
        return {
            slides: [
                {
                    immagine: 'https://img.freepik.com/free-photo/close-up-friendly-looking-happy-positive-lucky-young-female-wearing-checked-shirt-t-shirt-smiling-broadly-delighted-feeling-awesome-joyful-day-enjoying-life-standing-white-background_176420-34722.jpg',
                    titolo: 'Esperienza fantastica!',
                    contenuto: 'Ho apprezzato molto il servizio e la qualità del prodotto. Sicuramente tornerò!',
                    autoreNome: 'Marco',
                    autoreCognome: 'Rossi'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg',
                    titolo: 'Prodotto eccezionale!',
                    contenuto: 'Il prodotto supera le aspettative, funziona benissimo e ha un ottimo design.',
                    autoreNome: 'Laura',
                    autoreCognome: 'Bianchi'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg',
                    titolo: 'Servizio impeccabile!',
                    contenuto: 'Il personale è cordiale e attento alle esigenze del cliente. Consigliato!',
                    autoreNome: 'Giovanni',
                    autoreCognome: 'Verdi'
                }
            ],
            i: 0
        };   
    },

    methods: {
        previous: function(){
            if (this.i <= 0){
                this.i = this.slides.length - 1;
            }
            else{
                this.i--;
            }
            clearInterval(this.timer);
        },
        next: function(){
            if (this.i >= this.slides.length - 1){
                this.i = 0;
            }
            else{
                this.i = this.i + 1;
            }
            clearInterval(this.timer)
            this.timer = setInterval(this.next, 3000);
        },
        active: function(indice){
            this.i = indice;
            clearInterval(this.timer);
        }
    },

    mounted: function(){
        this.timer = setInterval(this.next, 3000);
    }
};

createApp(options).mount("#app");

