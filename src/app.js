import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
           countries: [] ,
           selectedCountry: {},
           favCountries: [],
           totalPopulation: 0
        },
        mounted(){
            this.fetchCountries();
        },
        methods:{
            fetchCountries: function(){
                fetch("https://restcountries.eu/rest/v2/all")
                    .then(response => response.json())
                    .then(data => this.countries = data)
                    .then(() => this.calculateTotalPopulation())
                    .catch(console.error);
            },
            saveToFav: function(){
                this.favCountries.push(this.selectedCountry)
            },
            calculateTotalPopulation: function(){
                let totalPopu = 0
                for (const country of this.countries) {
                    totalPopu += country.population
                }
                this.totalPopulation = totalPopu
                return totalPopu
            }
        }
    })


});