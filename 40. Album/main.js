// Create a Function 
function make_album(artistName, AlbumTitle, tracks) {
    var album = {
        artist: artistName,
        title: AlbumTitle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three times function different values
var album1 = make_album("Atif Aslam", "Tu Jaane NA");
var album2 = make_album("ALi zafar", "PSL Anthem", 10);
var album3 = make_album("Sidhu Moosa wala", "Same Beef");
// print values of our object created function
console.log(album1);
console.log(album2);
console.log(album3);
