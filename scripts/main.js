let content, inputAsig, inputValoracion, btnEnviar;

const anyadirAsig = () => {
    content.innerHTML += `
        <ion-col size="12" size-md="4">
            <ion-card>
                <ion-card-header>
                <ion-card-title>${inputAsig.value}</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                ${inputValoracion.value}
                </ion-card-content>
            </ion-card>
        </ion-col>
    `
}

const main = () => {
    content = document.querySelector('#content');
    inputAsig = document.querySelector('#inputAsig');
    inputValoracion = document.querySelector('#inputValoracion');
    btnEnviar = document.querySelector('#btnEnviar');

    btnEnviar.addEventListener('click', anyadirAsig);
}

window.addEventListener('load', main);