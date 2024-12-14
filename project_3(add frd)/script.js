 const addFriend  = document.querySelector('#add-friend-btn')
 const like = document.querySelector('#like-btn')

 addFriend.addEventListener('click',(e)=>{
     const friend = addFriend.innerHTML
     console.log(friend);
     
     if(friend === "Add friend"){
        addFriend.innerHTML= 'send request'
     }else{
        addFriend.innerHTML= 'Add friend'
     }

 })
 like.addEventListener('click',(e)=>{
    const liked = like.innerHTML='liked'

 })