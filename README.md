# VueTestV2

## Project
Webshop.

Features/Functions
    Customer
        See categories
        See products
        See related/recommended/also bought products
        See Cart: Add/Remove products, adjust amount, see total.
    Admin
        CRUDs: Products, Orders, Categories
    Design
        Modern
        Responsive
        Mobile first
        PWA
    Code
        Module based - Lazy loaded
        Services
        Reusable form system
        Infinite scrolling.
    Approach: Vertical e.g. do all steps for products, then categories, then...

Stack
    Vue + Vuetify + Axios
    Akita + RxJS
    LoopBack + MongoDB
    GraphQL + Apollo?

## Things to figure out
### Low level
- Services
    > https://medium.com/@liutingchun_95744/vue-js-using-a-stateful-angular-like-service-to-organize-your-code-abf109f32ab7
- RxJS: https://github.com/vuejs/vue-rx
- State management
    > Vuex vs Akita.
- Http / API consumption
    > GraphQL -> Apollo.
    > Axios: https://github.com/axios/axios
- Design: Vuetify -> Has container + responsive.
- Form system

### Medium level
- Authentication.
- Roles.
- Pagination.

### High level
- Web shop
    > Products
    > Categories
    > Cart
    > Checkout
    > Recommended products
- Admin area
    > Categories CRUD
    > Products CRUD
- Consumer area