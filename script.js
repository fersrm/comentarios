const noti = document.getElementsByClassName('notificacion');
const activo = document.getElementsByClassName('abierto');
const numero = document.getElementById('numero');
const todo = document.getElementById('todo');

numero.innerHTML=noti.length ;
for (let i = 0; i< noti.length; i++){
    noti[i].addEventListener('click',function(){
        this.classList.toggle('abierto')
        num=noti.length - activo.length
        //console.log(num);
        numero.innerHTML= num;

    })
}
todo.addEventListener('click',function(){
    for (let i = 0; i< noti.length; i++){
        noti[i].classList.add('abierto')
        num=noti.length - activo.length
        numero.innerHTML= num;
    }
});
