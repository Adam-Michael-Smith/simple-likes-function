const names = [ "John", "Adam", "Alex", "Jacob", "George", "Tony" ];

function numberOfLikes(names){

const [nameOne, nameTwo, nameThree] = names;
const [,,...intro] = names;
  
const [likesThis, likeThis, othersLikeThis, noLikes, and]
= [ "likes this", "like this", "others like this", "no one likes this", "and"];
  
if(names.length == 0){
    return `${noLikes}`; // no one likes this;
} else if(names.length > 0 && names.length < 2){
    return `${nameOne} ${likesThis}`; // name likes this;
} else if(names.length > 0 && names.length < 3){
    return `${nameOne} ${and} ${nameTwo} ${likeThis}`; // name and name like this;
} else if(names.length > 2 && names.length < 4){
    return `${nameOne}, ${nameTwo} ${and} ${nameThree} ${likeThis}`; // name, name and name like this;
} else if(names.length > 3){
    return `${nameOne}, ${nameTwo} ${and} ${intro.length} ${othersLikeThis}`; // name, name and number of others who like this;
}
}

console.log(numberOfLikes(names))