import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
           countries: [] ,
           selectedCountry: {},
           favCountries: [],
           population: 0
        },
        mounted(){
            this.fetchCountryName();
            this.calculateTotalPopulation();
        },
        methods:{
            fetchCountryName: function(){
                fetch("https://restcountries.eu/rest/v2/all")
                .then(response => response.json())
                .then(data => this.countries = data)
                .catch(console.error);
            },
            saveToFav: function(){
                this.favCountries.push(this.selectedCountry)
            },
            calculateTotalPopulation: function(){
                let totalPopu = 0
                for (const country of this.countries) {
                    totalPopu += country.population
                } this.population = totalPopu
            }
        }
    })


});