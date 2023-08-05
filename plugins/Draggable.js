import { Container, Draggable } from "vue3-smooth-dnd";
    
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Container', Container);
    nuxtApp.vueApp.component('SmoothDraggable', Draggable);
});