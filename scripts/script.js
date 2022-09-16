window.onload=()=>{
    // html elements
    const game=document.querySelector('.game');
    // declarables
    let cards=['html','css','js','css','js','html'];
    let selected='';
    let selectedId='' ;
    // functions
    // suffle cards order
    const shuffle=()=>{
        cards = cards.sort(() => 0.5 - Math.random());
    }
    // select function
    const select=(type,id)=>{
        cardFlip(id);
        if(selected==type&&selectedId!=id){
            setTimeout(removeCards,1000,type);
            selected='';
        }
        else{
            if(selectedId!=''){
                cardClose(selectedId);
            }
            selected=type;
            selectedId=id;
        }
        console.log(selected+" "+id);
    }
    // flip card
    const cardFlip=(id)=>{
        document.getElementById(id).style.transform='rotateY(180deg)';
    }
    // close card
    const cardClose=(id)=>{
        document.getElementById(id).style.transform='rotateY(0)';
    }
    // remove cards by class
    const removeCards=(type)=>{
        const typeClass=document.querySelectorAll(`.${type}`);
        for(const el of typeClass){
            el.parentElement.style.display = 'none';
        }
    }
    // create cards
    const createCard=(type,id)=>{
        // create divs
        const card= document.createElement('div');
        const cardInner= document.createElement('div');
        const question=document.createElement('div');
        const pic=document.createElement('div');
        // add attributes
        card.classList='card';
        card.onclick=()=> select(type,id);
        cardInner.classList='card-inner';
        cardInner.setAttribute('id',id);
        question.classList='question-bg';
        pic.classList=`pic-bg ${type}`;
        // nest divs
        cardInner.appendChild(question);
        cardInner.appendChild(pic);
        card.appendChild(cardInner);
        // add to game
        game.appendChild(card);
    }
    // start game
    const startGame=()=>{
        shuffle();
        for(const key in cards){
            createCard(cards[key],key);
        }
    }
    startGame();
}