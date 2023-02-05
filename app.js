const modal_btn = document.getElementById('modal-luancher');
const modal = document.getElementById('modal');
const modal_avatar = document.getElementById('modal-avatar');
const avatar = document.getElementById('avatar');
const color_picker = document.getElementById('color-picker');
const save_btn = document.getElementById('save');
const avatar_changed = document.getElementById('profile-2');
const body = document.getElementById('body');
const name = document.getElementById('name');
const username = document.getElementById('username');
const img_back = document.getElementById('.img-back');
let color = '';

modal_btn.addEventListener('click', (e)=>{
    modal.style.top = '0%';
});

modal.addEventListener('click', (e)=>{
    if(e.srcElement === modal){
        modal.style.top = '-100%';
    }
});

color_picker.addEventListener('change',e=>{
    color = e.target.value
})

save_btn.addEventListener('click', (e)=>{
    modal.style.top = '-100%';
    avatar.src = modal_avatar.src
    body.style.backgroundColor = `linear-gradient(58deg, #212121 5%, {color} 5% 15%, #212121 15% 20%, #fff 20% 85%, {color} 85% 90%, #212121 90% 100%)`;
    name.innerText = username.value;
    img_back = `linear-gradient(90deg,{color} 50%, #212121 50% 100%)`;
});