<script setup>
import MainBackground from '@/layout/MainBackground.vue';
</script>
<template>
    <MainBackground>
        <div class="absolute -top-40 right-0">
            <img src="/images/flower4.png" class="" alt="Flower Decoration">
        </div>
        <div class="absolute -bottom-20 left-0 right-0 flex justify-center">
            <img src="/images/flower2.png" class="w-[50%] h-64" alt="Flower Decoration">
        </div>
        <div class="absolute top-0 -left-20">
            <img src="/images/flower1.png" class="w-72" alt="flower Decoration">
        </div>
        <div class="relative z-10">
            <div class="flex flex-col items-center justify-center gap-10 h-screen">
                <p class="text-primary text-3xl font-cinzel mb-10">The wedding of</p>
                <p class="text-primary text-6xl font-adelia">Rheyvince</p>
                <p class="text-primary text-4xl font-adelia">and</p>
                <p class="text-primary text-6xl font-adelia">Fatima</p>
                <p class="text-primary text-3xl font-cinzel">-02&#183;20&#183;25-</p>
            </div>
        </div>
    </MainBackground>
    <!-- <div class="h-screen bg-ivory">
        <p class="text-primary">this is the header</p>
        <p class="text-primary text-6xl font-bromello">Save the Date</p>
        <p class="text-primary text-6xl font-adelia">Save the Date</p>
        <p class="text-primary text-6xl font-photograph">Save the Date</p>
        <p class="text-primary text-6xl font-cinzel">Save the Date</p>
    </div> -->
</template>