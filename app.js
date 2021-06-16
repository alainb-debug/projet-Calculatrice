// DOM


const touches =[...document.querySelectorAll('.bouton')];
const listekeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran'); 
// Touche 6 = keycode 102
document.addEventListener('keydown', (e) =>{
const valeur = e.keycode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
      calculer(valeur)
     
})

const calculer = (valeur) =>{
    if(listekeycode.includes(valeur)){
        switch(valeur){
           case '8':
               ecran.textContent = "";
               break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode= listekeycode.indexOf (valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}
window.addEventListener('error', (e) => {
    alert('erreur est survenue dans votre calcul: ' + e.message)
})