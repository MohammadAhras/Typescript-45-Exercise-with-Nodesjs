// Create a Function 
function make_album(artistName: string, AlbumTitle: string, tracks?: number){
    let album:{ artist: string, title: string, tracks?: number} ={
        artist: artistName,
        title: AlbumTitle,
    };
if(tracks !== undefined){
    album.tracks = tracks;
}

return album;

}

//calling three times function different values
let album1 = make_album("Atif Aslam", "Tu Jaane NA");
let album2 = make_album("ALi zafar", "PSL Anthem",10);
let album3 = make_album("Sidhu Moosa wala", "Same Beef")
// print values of our object created function
console.log(album1);
console.log(album2);
console.log(album3);