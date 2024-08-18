var movie={
    name:"RRR",
    cast:["NTR","RCT","Alia"],

    //nested another object
    info:{
        director:'SS RajaMouli',
        lyricist:'Chandra Bose',
        hitsong:'Naatu..Naatu..',
        singer:"Rahul Sipligunj",
        choreography:"Prem Rakshit",
        countries:10,
        collections:"Rs. 1200 crores"
    }
}

console.log(movie.name);
console.log(movie.cast);
console.log(movie.cast[2]);
console.log(movie.info);
console.log(movie.info.collections);
console.log(movie.info.singer);
console.log(movie.info.choreography);