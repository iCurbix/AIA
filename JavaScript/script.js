const ul = document.querySelector('ul');

const newli = document.createElement('li');

const author = document.createElement('input');
const title = document.createElement('input')
const author2 = document.createElement('span');
const title2 = document.createElement('span');
const button_save = document.createElement('button');
const button_edit = document.createElement('button');
const button_remove = document.createElement('button');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');

button_save.appendChild(document.createTextNode('save'));
button_edit.appendChild(document.createTextNode('edit'));
button_remove.appendChild(document.createTextNode('remove'));

button_save.setAttribute('class', 'save');
button_edit.setAttribute('class', 'edit');
button_remove.setAttribute('class', 'remove');
author.setAttribute('class', 'author');
author2.setAttribute('class', 'author');
title.setAttribute('class', 'title');
title2.setAttribute('class', 'title');

button_edit.style.display = 'none';

div1.appendChild(author);
div2.appendChild(title);
div3.appendChild(button_save);
div3.appendChild(button_edit);
div3.appendChild(button_remove);

newli.appendChild(div1);
newli.appendChild(div2);
newli.appendChild(div3);

function save() {
    const li = this.parentNode.parentNode;
    const au = li.querySelector(".author");
    const ti = li.querySelector(".title");
    const au2 = author2.cloneNode();
    const ti2 = title2.cloneNode();
    au2.appendChild(document.createTextNode(au.value));
    ti2.appendChild(document.createTextNode(ti.value));
    au.remove();
    ti.remove();
    li.children[0].appendChild(au2);
    li.children[1].appendChild(ti2);
    li.querySelector(".save").style.display = 'none';
    li.querySelector(".edit").style.display = 'inline';
}

function edit() {
    const li = this.parentNode.parentNode;
    const au2 = li.querySelector(".author");
    const ti2 = li.querySelector(".title");
    const au = author.cloneNode();
    const ti = title.cloneNode();
    au.value = au2.innerHTML;
    ti.value = ti2.innerHTML;
    au2.remove();
    ti2.remove();
    li.children[0].appendChild(au);
    li.children[1].appendChild(ti);
    li.querySelector(".edit").style.display = 'none';
    li.querySelector(".save").style.display = 'inline';
}

function remove() {
    this.parentNode.parentNode.remove();
}

function add() {
    const someli = newli.cloneNode(true);
    ul.appendChild(someli);
    const saveb = someli.querySelector(".save");
    const editb = someli.querySelector(".edit");
    const removeb = someli.querySelector(".remove");
    saveb.onclick = save;
    editb.onclick = edit;
    removeb.onclick = remove;
}

