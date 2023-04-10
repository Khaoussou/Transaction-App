
const next = document.querySelector('.next');
const btnDetail = document.querySelector('.btn-detail');
const save = document.querySelector('button')
const data = document.querySelectorAll('.data');
const row = document.querySelectorAll('.row');
const img = document.querySelector('img');
let code = document.querySelector('code');
const form = document.querySelector('.form')
const select = document.getElementById('trans')
const mont = document.querySelector('#mnt');
let phone = document.getElementById('tel');
let td1 = document.querySelector('tr td:nth-child(1)');
let td2 = document.querySelector('tr td:nth-child(2)');
let td3 = document.querySelector('tr td:nth-child(3)');
let td4 = document.querySelector('tr td:nth-child(4)');
const info = document.querySelector('.info')
let nom = document.querySelector('.nom');
let prenom = document.querySelector('.prenom');
let mail = document.querySelector('.mail');
let telephone = document.querySelector('.telephone');
let soldeNewUser = document.querySelector('.solde');
let toff = document.querySelector('.toff');
const addUsers = document.querySelector('.add');
const modal = document.querySelector('.modal')
const transactions = document.querySelector('.transactions');
let tr = document.querySelector('tr');
let tBody = document.querySelector('tbody')
let card = document.querySelector('.card');
let solde = 0
let soldeActu = 0
let div = createElement('div',{class:'row dflex jcsb aic'});
let span1 = createElement('span',{class:'label'},'Solde :');
let span2 = createElement('span',{class:'data'})
div.append(span1,span2)
info.append(div)
let numb = 1
let i = 0
let day = new Date().toDateString()
let sens = 0
tBody.innerHTML = ''
const table = document.querySelector('table')
code.innerHTML = ''
let container = document.querySelector('.container')



const urls =
[
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1519011985187-444d62641929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg4fHx3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1622861431942-b45f2b5b6564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1668613403310-6679b1cca7b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1624140716840-5d89f311f500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
]

const users = 
[
    {nom:'NIANG',prenom:'SIDI',telephone:'708434422',email:'sidi@gmail.com',solde:0,transactions:[]},
    {nom:'MANE',prenom:'ADAMA',telephone:'708433455',email:'adama@gmail.com',solde:0,transactions:[]},
    {nom:'LY',prenom:'CHEIKH',telephone:'772673167',email:'cheikh@gmail.com',solde:0,transactions:[]},
    {nom:'DABO',prenom:'BINETA',telephone:'708183553',email:'bineta@gmail.com',solde:0,transactions:[]},
    {nom:'NDIAYE',prenom:'MAR',telephone:'770543035',email:'mar@gmail.com',solde:0,transactions:[]}
]

let length = users.length






getUser(i)

function getUser(i)
{
    data.forEach(d => 
        {
            if(d.id == 'lastname')
            {
                d.innerHTML = users[i].nom.toUpperCase()
            }
            if(d.id == 'firstname')
            {
                d.innerHTML = users[i].prenom.toUpperCase()
            }
            if(d.id == 'phone')
            {
                d.innerHTML = users[i].telephone
            }
            if(d.id == 'email')
            {
                d.innerHTML = users[i].email
            }
            img.src = urls[i]
        })
        span2.innerHTML = users[i].solde
        code.innerHTML = users[i].transactions.length
}

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

function getRamdomNumb(ran) 
{
    ran = Math.floor(Math.random() * length)    
    return ran;
}

function createTransact(numb,day,sens,montant)
{
    let tr1 = createElement('tr',{class:'tr'});
    let tr1Td1 = createElement('td',{class:'td'},numb)
    let tr1Td2 = createElement('td',{class:'td'},day)
    let tr1Td3 = createElement('td',{class:'td'},sens)
    let tr1Td4 = createElement('td',{class:'td'},montant)
    tr1.append(tr1Td1,tr1Td2,tr1Td3,tr1Td4);
    tBody.append(tr1);
}

function afficheTansact(pos) 
{
    users[pos].transactions.forEach(transaction => 
        {
            let {numero,date,sens,montant} = transaction
            if (transaction.sens == 1) 
            {
                sens = 'Depot'
            }
            else
            {
                sens = 'Retrait'
            }
            createTransact(numero,date,sens,montant)
        });
}

function addtransact(user,transaction) 
{
    user.transactions.push(transaction)
}

function calculSolde(pos,montant) 
{
    const destinataire = getUserByPhoneNumb(phone.value)
    if (sens == 1 && phone.value == '') 
    {
        users[pos].solde += montant
        addtransact(users[pos],{numero:numb,sens:sens,date:day,montant:montant})
    }
    else if (sens == -1 && phone.value == '')
    {
        users[pos].solde += -montant
        addtransact(users[pos],{numero:numb,sens:sens,date:day,montant:montant})
    }
    else if (sens == 1 && destinataire == undefined) 
    {
        console.log('bap bap bap');
    }
    numb++
    return users[pos].solde ;
}

function getUserByPhoneNumb(phone) 
{
    return users.find(user => user.telephone == phone)
}

function emptyField(inputs)
{
    inputs.forEach(input =>
        {
            input.value = ''
        })
}

btnDetail.addEventListener('click',()=>
{
    form.classList.toggle('active');
})

select.addEventListener('change',()=>
{
    if(select.value == 'd')
    {
        sens = 1 
        phone.disabled = false
    }
    else
    {
        sens = -1
        phone.disabled = true
    }
})

save.addEventListener('click',()=>
{
    tBody.innerHTML = ''
    let montant = +mont.value
    span2.innerHTML = calculSolde(i,montant);
    code.innerHTML = users[i].transactions.length
    afficheTansact(i)
    console.log(users[i]);
    emptyField([mont]);
})

next.addEventListener('click',()=>
{
    tBody.innerHTML = ''
    i = getRamdomNumb(length)
    getUser(i)
    afficheTansact(i)
})