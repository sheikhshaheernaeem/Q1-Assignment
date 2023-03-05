function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three different album objects
var album1 = make_album("The Beatles", "Abbey Road");
var album2 = make_album("Pink Floyd", "The Wall", 26);
var album3 = make_album("Led Zeppelin", "IV", 8);
// Print each album object to the console
console.log(album1);
console.log(album2);
console.log(album3);
