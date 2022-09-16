window.onload=()=>{
    // declarables
    let cards=['html','css','js','css','js','html'];
    let selected='';
    let id ;
    // functions
    // suffle cards order
    const shuffle=()=>{
        cards = cards.sort(() => 0.5 - Math.random());
    }
    // select function
    const select=(type,id)=>{
        cardFlip(id);
        if(selected==type){

        }
    }
    // flip card
    const cardFlip=(id)=>{
        document.getElementById(id).style.transform='rotateY(180deg)';
    }
    
}