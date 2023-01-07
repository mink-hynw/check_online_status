// let errorInternet = document.getElementById('error');
// let successInternet = document.getElementById('success');

// window.addEventListener('offline', () =>{
//     errorInternet.style.display = 'block';
// });

// window.addEventListener('online', ()=> {
//     successInternet.style.display = 'block';
// });

let alerts = document.querySelectorAll('.alert');
alerts.forEach(item=>{
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('close')){
            item.style.display = 'none';
        }
    });
});


window.addEventListener('offline', function(){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'grid';
});

window.addEventListener('online', function(){
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display ='grid';
});
