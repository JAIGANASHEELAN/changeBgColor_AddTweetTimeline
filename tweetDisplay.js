const tweetform = document.querySelector('#tweetForm');
const ullink= document.querySelector('#link');
tweetform.addEventListener('submit' ,function(e){
    // user and tweet are names of input (html)
    const usernameInp= tweetform.elements.user;
    const tweetInp= tweetform.elements.tweet;
    e.preventDefault()

    addUsers( usernameInp.value, tweetInp.value)
    usernameInp.value='';//  reseting values
    tweetInp.value='';//  reseting values
    


}); 
const addUsers= (usernameInp, tweetInp)=>{
    const btag= document.createElement('b');
    const litag= document.createElement('li');
    litag.append(btag);
    btag.append(usernameInp);
    litag.append(` -->  ${tweetInp}`);
    ullink.append(litag);

}