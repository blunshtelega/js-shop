Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="search-form header__search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                    <label class="visually-hidden" for="seacrh">поиск</label>            
                    <input type="text" class="search-field header__search" v-model="userSearch" placeholder="Поиск">
            </form>`
})


{
    /* <button type="submit" class="btn-search">
    <i class="fas fa-search"></i>
    </button> */
}