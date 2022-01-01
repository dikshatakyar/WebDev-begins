const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedbands=bands.sort(function(a,b){
    if(strip(a)>strip(b)){
        return 1;
    }
    else{
        return -1;
    }
});
//The trim() method removes whitespace from both sides of a string
function strip(bandname){
    //regular expression
    return bandname.replace(/^(a |the |an )/i,'').trim();
}

document.querySelector('#bands').innerHTML=sortedbands
.map(band=>`<li>${band}</li>`)
.join('');

console.log(sortedbands);
