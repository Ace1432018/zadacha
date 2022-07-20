const json_url = 'data.json'
const container = document.getElementById('cardContainer');

let show=function(elem){
    elem.style.display='inline-block';
}
let hide=function(elem){
    elem.style.display='none'
}
let data;

async function getData(url) {
    const response = await fetch(url);
    data = await response.json();
    showData(data);
}

function showData(data) {
    for (let i = 0; i < data.length; i++) {
        let card=document.createElement('div');
        card.classList.add('card');
        let cardTitle=document.createElement('div');
        cardTitle.classList.add('cardTitle');
        let profilePic=document.createElement('img');
        profilePic.classList.add('profilePic');
        profilePic.src=data[i].profile_image;
        let titleText=document.createElement('div');
        titleText.classList.add('titleText');
        let name=document.createElement('h5');
        name.classList.add('name');
        name.innerText=data[i].name;
        let socialNet=document.createElement('img');
        socialNet.classList.add('socialNet');
        if(data[i].source_type==='facebook'){
            socialNet.src='/images/facebook.svg';
        }
        else{
            socialNet.src='/images/instagram-logo.svg';
        }
        let date=document.createElement('p');
        date.classList.add('date');
        date.innerText=data[i].date;
        cardTitle.appendChild(profilePic);
        cardTitle.appendChild(name);
        cardTitle.appendChild(socialNet);
        cardTitle.appendChild(date);
        let cardBody=document.createElement('div');
        cardBody.classList.add('cardBody');
        let image=document.createElement('img');
        image.classList.add('image');
        image.src=data[i].image;
        let description=document.createElement('p');
        description.classList.add('description')
        description.innerText=data[i].caption;
        cardBody.appendChild(image);
        cardBody.appendChild(description);
        let cardFooter=document.createElement('div');
        cardFooter.classList.add('cardFooter');
        let likeB=document.createElement('button');
        likeB.classList.add('like');
        likeB.innerHTML='<img src="images/heart.svg">';
        let likecount=document.createElement('p');
        likecount.classList.add('likeCount');
        likecount.innerHTML=data[i].likes;
        cardFooter.appendChild(likeB);
        cardFooter.appendChild(likecount);
        card.appendChild(cardTitle);
        card.appendChild(cardBody);
        card.appendChild(cardFooter);
        container.appendChild(card);
    }
}



getData(json_url);