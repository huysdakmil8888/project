import { createApp } from 'vue';
import router from "@/router";
import store from "./store"
import App from "@/App";
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
import BaseBadge from "@/components/ui/BaseBadge";
createApp(App)
    .use(router)
    .use(store)
    .component('base-card',BaseCard)
    .component('base-button',BaseButton)
    .component('base-badge',BaseBadge)
    .mount('#app');
