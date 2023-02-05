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
const root = document.querySelectorAll(':root');
console.log(root)

modal_btn.addEventListener('click', (e)=>{
    modal.style.top = '0%';
});

modal.addEventListener('click', (e)=>{
    if(e.srcElement === modal){
        modal.style.top = '-100%';
    }
});

save_btn.addEventListener('click', (e)=>{
    modal.style.top = '-100%';
    avatar.src = modal_avatar.src
    name.innerText = username.value;
    root.style.setProperty('--primary', `${color_picker.value}`)
});