<template>
    <div class="loader">
        <span>Loading...</span>
    </div>
</template>
<style>
    .loader {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 5px solid #e74c3c;
    animation: load 2s linear infinite;
    margin: 5px auto;
    }

    .loader::before,.loader::after {
    content: '';
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    }

    .loader::before {
    border-top: 5px solid #3498db ;
    transform: rotate(120deg);
    }

    .loader::after {
    border-top: 5px solid #3498db;
    transform: rotate(240deg);
    }

    .loader span {
    margin: auto;
    font-size: small;
    width: 100px;
    height: 100px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    animation: a2 2s linear infinite;
    }

    @keyframes load {
    to {
        transform: rotate(360deg);
    }
    }

    @keyframes a2 {
    to {
        transform: rotate(-360deg);
    }
    }
</style>