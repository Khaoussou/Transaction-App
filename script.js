
const next = document.querySelector('.next');
const btnDetail = document.querySelector('.btn-detail');
const save = document.querySelector('button')
const data = document.querySelectorAll('.data');
const row = document.querySelectorAll('.row');
const img = document.querySelector('img');
let code = document.querySelector('code');
const form = document.querySelector('.form')
const select = document.getElementById('trans')
const input= document.querySelector('input')
let td1 = document.querySelector('tr td:nth-child(1)');
let td2 = document.querySelector('tr td:nth-child(2)');
let td3 = document.querySelector('tr td:nth-child(3)');
let td4 = document.querySelector('tr td:nth-child(4)');
let tr = document.querySelector('tr');
let tBody = document.querySelector('tbody')
console.log(tBody);
const table = document.querySelector('table')
code.innerHTML = ''

const url =
[
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHx3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1622861431942-b45f2b5b6564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1624140716840-5d89f311f500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
]

const tabUsers = 
[
    {nom:'NIANG',prenom:'SIDI',telephone:'70 843 44 22',email:'',transactions:[]},
    {nom:'MANE',prenom:'ADAMA',telephone:'77 122 34 55',email:'',transactions:[]},
    {nom:'LY',prenom:'CHEIKH',telephone:'77 267 31 67',email:'',transactions:[]},
    {nom:'DIALLO',prenom:'SIRA',telephone:'77 456 04 35',email:'',transactions:[]}
]



let i = 0
getUser(i)
function getUser(i)
{
    let firstname = null
    data.forEach(d => 
        {
            if(d.id == 'lastname')
            {
                d.innerHTML = tabUsers[i].nom
            }
            if(d.id == 'firstname')
            {
                d.innerHTML = tabUsers[i].prenom
                firstname = d.innerHTML
            }
            if(d.id == 'phone')
            {
                d.innerHTML = tabUsers[i].telephone
            }
            if(d.id == 'email')
            {
                d.innerHTML = firstname.toLowerCase()+'@exemple.com'
            }
            img.src = url[i]
        });
}

function getRamdomNumb(ran)
{
    ran = Math.floor(Math.random() * tabUsers.length)
    return ran;
}
// console.log(getRamdomNumb(i))

function createElement(element,attributs,elementContent)
{
    const e = document.createElement(element)
    for (const cle in attributs) 
    {
        e.setAttribute(cle,attributs[cle])
    }
    e.textContent = elementContent
    return e
}

function getSelected(select)
{
    return select.options[select.selectedIndex].value;
}


let montant = input.value
function addTransactions(pos)
{
    let object = {numero:'', date:'', sens:'', montant:''}
    object.numero = numb;
    object.date =  day;
    object.sens = sens;
    object.montant = montant;
    let tr1 = createElement('tr',{class:'tr'});
    let tr1Td1 = createElement('td',{class:'td'},numb)
    let tr1Td2 = createElement('td',{class:'td'},day)
    let tr1Td3 = createElement('td',{class:'td'},sens)
    let tr1Td4 = createElement('td',{class:'td'},montant)
    tabUsers[pos].transactions.push(object)
    console.log(tabUsers[pos]);
    code.innerHTML = tabUsers[pos].transactions.length 
    tr1.append(tr1Td1,tr1Td2,tr1Td3,tr1Td4)
    tBody.append(tr1)
}




btnDetail.addEventListener('click',()=>
{
    form.classList.toggle('active')
})

let sens = 0
select.addEventListener('change',()=>
{
    if (getSelected(select) == 'd') 
    {
        sens = 1
    }
    else
    {
        sens = -1
    }
})

let numb = 1
let day = new Date().toLocaleDateString()
save.addEventListener('click',()=>
{
    montant = input.value;
    if( montant == 0 || sens == 0 )
    {
        alert('bap bap bap')
    }
    else
    {
        addTransactions(i)
        input.value = '';
        numb++;
    }
})

next.addEventListener('click',()=>
{
    i = getRamdomNumb(tabUsers.length)
    getUser(i)
    tBody.innerHTML = ''
    code.innerHTML = tabUsers[i].transactions.length
})
