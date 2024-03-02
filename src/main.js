import { createApp } from 'vue'
import App from './App.vue'
import Keycloak from 'keycloak-js';

const renderApp = () => {
    createApp(App).mount('#app');
};

const kc = new Keycloak({
    url: 'http://jesse:8080',
    realm: 'sandbox',
    clientId: 'yvovuejs1',
});

console.log('KeyCloak created: ' + kc);

try {
    const authenticated = await kc.init(
        {
            initOptions: {
                pkceMethod: 'S256', 
                redirectUri: 'http://localhost:8081',
                checkLoginIframe: false
            }
        });
    if (!authenticated) {
        kc.login();
    }
    console.log(`User is ${authenticated ? 'authenticated' : 'not authenticated'}`);
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}



renderApp();