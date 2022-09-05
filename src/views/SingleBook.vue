<template>
<div class="container">
    <div class="row  justify-content-between gy-2">
        <div v-for="product in products" class="col-md-6 card d-flex" :key="product.id">
            <div>
            <div class="card-header">
            <h5 class="card-title mt-0">{{product.title}}</h5>
            <p class="card-text">{{product.BookCategory}}</p>
            </div>
            <div class="card-body">
            <img class="img-fluid image m-auto" :src="product.img" :alt="product.title">
                <p class="card-text description">{{product.book_description}}</p>
                <div class="row">
                    <ul class="text-decoration-none list-unstyled">
                        <li class="text-decoration-none list-unstyled">
                            <button class="favourites list-inline-item" @click="addTofavourites">add to favourites</button>
                                <router-link :to="{name:'SingleProduct',params:{id:product.product_id}}">
                            <button class="list-inline-item">View</button></router-link>
                        </li>
                    </ul>
                </div>
                <div class="row mb-0">
                <ul class="list-unstyled">
                <li class="list-unstyled">
                <button type="button" class="btn btn-danger lh-2 list-inline-item mb-0">Delete</button>
                <button type="button" class="btn btn-primary lh-2 list-inline-item mb-0">Add</button>
                <button type="button" class="btn btn-secondary lh-2 list-inline-item mb-0">Edit</button>
                </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>