//lorem text
const text = [
    "Sushi dubbed kawaii kakashi senpai nani daijoubu onii-chan. Pokemon suki nya arigatou waifu kanojo. Kitsune tomodachi kouhai inu yaoi arigato sumimasen daisuki. Gozaimasu kun nya Shippuden nihongo Death Note. Watashi Dragon Ball kareshi namae otaku oishii. Anime baka sensei subbed kowai Tokyo. Kyoto nande desu Inuyasha. Doki doki yatta usagi Cowboy Bebop. Hayao Miyazaki neko chan ojisan. Nani Naruto yuri ohayou kun One-Punch Man. Hoshii ramen dubbed sakura Demon Slayer. Attack on Titan gozaimasu Hokkaido nihon kitsune. Sword Art Online arigato naze daijoubu. Kawaii Sasuke yuri kouhai gomennasai genki Tokyo.",
    "Konnichiwa nande senpai ojisan. Obaasan soba ramen desu doki doki. Moshi Moshi dubbed Kakashi manga waifu. Sailor Moon hana suki nya kun namae kistune. Itadakimasu doko nani Cowboy Bebop. Omae wa tokidoki zenzen hai My Hero Academia. Sumimasen Kyoto naze nya ne Fullmetal Alchemist. Kimi No Na Wa inu kun doki doki moshi gozaimasu. Osaka sakura One Piece nihongo watashi anata dubbed. Usagi ohayou manga baka daijoubu nande senpai. Kakashi nya neko yuri gomennasai. Desu ka genki weeb omae wa.",
    "Mochi Inuyasha nihon hoshii naze sushi. Ramen chan doko ikura Osaka. Dragon Ball kareshi kouhai subbed kowai Death Note. Kanojo nande gozaimasu ka daisuki anime sakura otaku Naruto. Tokidoki Tokyo Sailor Moon neko nya konban wa. Gohan usagi Hokkaido nani watashi Hayao Miyazaki. Waifu ohayou anime sumimasen naze ne Fullmetal Alchemist. Senpai anata zenzen genki nihon kitsune kowai subbed Tokyo sushi namae oishii. Nanji gozaimasu kun tomodachi yuri inu ka Attack on Titan. Weeb manga itadakimasu desu One Piece nya kun moshi moshi.",
    "Sushi dubbed kawaii kakashi senpai nani daijoubu onii-chan. Pokemon suki nya arigatou waifu kanojo. Kitsune tomodachi kouhai inu yaoi arigato sumimasen daisuki. Gozaimasu kun nya Shippuden nihongo Death Note. Watashi Dragon Ball kareshi namae otaku oishii. Anime baka sensei subbed kowai Tokyo. Kyoto nande desu Inuyasha. Doki doki yatta usagi Cowboy Bebop. Hayao Miyazaki neko chan ojisan. Nani Naruto yuri ohayou kun One-Punch Man. Hoshii ramen dubbed sakura Demon Slayer. Attack on Titan gozaimasu Hokkaido nihon kitsune. Sword Art Online arigato naze daijoubu. Kawaii Sasuke yuri kouhai gomennasai genki Tokyo.",
    "Konnichiwa nande senpai ojisan. Obaasan soba ramen desu doki doki. Moshi Moshi dubbed Kakashi manga waifu. Sailor Moon hana suki nya kun namae kistune. Itadakimasu doko nani Cowboy Bebop. Omae wa tokidoki zenzen hai My Hero Academia. Sumimasen Kyoto naze nya ne Fullmetal Alchemist. Kimi No Na Wa inu kun doki doki moshi gozaimasu. Osaka sakura One Piece nihongo watashi anata dubbed. Usagi ohayou manga baka daijoubu nande senpai. Kakashi nya neko yuri gomennasai. Desu ka genki weeb omae wa.",
    "Mochi Inuyasha nihon hoshii naze sushi. Ramen chan doko ikura Osaka. Dragon Ball kareshi kouhai subbed kowai Death Note. Kanojo nande gozaimasu ka daisuki anime sakura otaku Naruto. Tokidoki Tokyo Sailor Moon neko nya konban wa. Gohan usagi Hokkaido nani watashi Hayao Miyazaki. Waifu ohayou anime sumimasen naze ne Fullmetal Alchemist. Senpai anata zenzen genki nihon kitsune kowai subbed Tokyo sushi namae oishii. Nanji gozaimasu kun tomodachi yuri inu ka Attack on Titan. Weeb manga itadakimasu desu One Piece nya kun moshi moshi.",
    "Sushi dubbed kawaii kakashi senpai nani daijoubu onii-chan. Pokemon suki nya arigatou waifu kanojo. Kitsune tomodachi kouhai inu yaoi arigato sumimasen daisuki. Gozaimasu kun nya Shippuden nihongo Death Note. Watashi Dragon Ball kareshi namae otaku oishii. Anime baka sensei subbed kowai Tokyo. Kyoto nande desu Inuyasha. Doki doki yatta usagi Cowboy Bebop. Hayao Miyazaki neko chan ojisan. Nani Naruto yuri ohayou kun One-Punch Man. Hoshii ramen dubbed sakura Demon Slayer. Attack on Titan gozaimasu Hokkaido nihon kitsune. Sword Art Online arigato naze daijoubu. Kawaii Sasuke yuri kouhai gomennasai genki Tokyo.",
    "Konnichiwa nande senpai ojisan. Obaasan soba ramen desu doki doki. Moshi Moshi dubbed Kakashi manga waifu. Sailor Moon hana suki nya kun namae kistune. Itadakimasu doko nani Cowboy Bebop. Omae wa tokidoki zenzen hai My Hero Academia. Sumimasen Kyoto naze nya ne Fullmetal Alchemist. Kimi No Na Wa inu kun doki doki moshi gozaimasu. Osaka sakura One Piece nihongo watashi anata dubbed. Usagi ohayou manga baka daijoubu nande senpai. Kakashi nya neko yuri gomennasai. Desu ka genki weeb omae wa.",
    "Mochi Inuyasha nihon hoshii naze sushi. Ramen chan doko ikura Osaka. Dragon Ball kareshi kouhai subbed kowai Death Note. Kanojo nande gozaimasu ka daisuki anime sakura otaku Naruto. Tokidoki Tokyo Sailor Moon neko nya konban wa. Gohan usagi Hokkaido nani watashi Hayao Miyazaki. Waifu ohayou anime sumimasen naze ne Fullmetal Alchemist. Senpai anata zenzen genki nihon kitsune kowai subbed Tokyo sushi namae oishii. Nanji gozaimasu kun tomodachi yuri inu ka Attack on Titan. Weeb manga itadakimasu desu One Piece nya kun moshi moshi.",
    "Sushi dubbed kawaii kakashi senpai nani daijoubu onii-chan. Pokemon suki nya arigatou waifu kanojo. Kitsune tomodachi kouhai inu yaoi arigato sumimasen daisuki. Gozaimasu kun nya Shippuden nihongo Death Note. Watashi Dragon Ball kareshi namae otaku oishii. Anime baka sensei subbed kowai Tokyo. Kyoto nande desu Inuyasha. Doki doki yatta usagi Cowboy Bebop. Hayao Miyazaki neko chan ojisan. Nani Naruto yuri ohayou kun One-Punch Man. Hoshii ramen dubbed sakura Demon Slayer. Attack on Titan gozaimasu Hokkaido nihon kitsune. Sword Art Online arigato naze daijoubu. Kawaii Sasuke yuri kouhai gomennasai genki Tokyo.",
    "Konnichiwa nande senpai ojisan. Obaasan soba ramen desu doki doki. Moshi Moshi dubbed Kakashi manga waifu. Sailor Moon hana suki nya kun namae kistune. Itadakimasu doko nani Cowboy Bebop. Omae wa tokidoki zenzen hai My Hero Academia. Sumimasen Kyoto naze nya ne Fullmetal Alchemist. Kimi No Na Wa inu kun doki doki moshi gozaimasu. Osaka sakura One Piece nihongo watashi anata dubbed. Usagi ohayou manga baka daijoubu nande senpai. Kakashi nya neko yuri gomennasai. Desu ka genki weeb omae wa.",
    "Mochi Inuyasha nihon hoshii naze sushi. Ramen chan doko ikura Osaka. Dragon Ball kareshi kouhai subbed kowai Death Note. Kanojo nande gozaimasu ka daisuki anime sakura otaku Naruto. Tokidoki Tokyo Sailor Moon neko nya konban wa. Gohan usagi Hokkaido nani watashi Hayao Miyazaki. Waifu ohayou anime sumimasen naze ne Fullmetal Alchemist. Senpai anata zenzen genki nihon kitsune kowai subbed Tokyo sushi namae oishii. Nanji gozaimasu kun tomodachi yuri inu ka Attack on Titan. Weeb manga itadakimasu desu One Piece nya kun moshi moshi.",
    "Sushi dubbed kawaii kakashi senpai nani daijoubu onii-chan. Pokemon suki nya arigatou waifu kanojo. Kitsune tomodachi kouhai inu yaoi arigato sumimasen daisuki. Gozaimasu kun nya Shippuden nihongo Death Note. Watashi Dragon Ball kareshi namae otaku oishii. Anime baka sensei subbed kowai Tokyo. Kyoto nande desu Inuyasha. Doki doki yatta usagi Cowboy Bebop. Hayao Miyazaki neko chan ojisan. Nani Naruto yuri ohayou kun One-Punch Man. Hoshii ramen dubbed sakura Demon Slayer. Attack on Titan gozaimasu Hokkaido nihon kitsune. Sword Art Online arigato naze daijoubu. Kawaii Sasuke yuri kouhai gomennasai genki Tokyo."
];
//querySelector returns the first element that matches a specified CSS slector(s)
const form = document.querySelector(".lorem-form");
const amount = document.getElementById('amount');
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    //empty
    // -1
    // > 9
    if(isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`; //.innerHTML gets or sets HTML markup contained within the result element. 
    }
    else {
        let tempText = text.slice(0, value); //Draws from the value defined early. 1 - 9.
        tempText = tempText.map(function(item) {
            return `<p class = "results">${item}</p>`;
        })
        .join("");
        result.innerHTML = tempText;
        console.log(tempText);
    }
});

// map() creates a new array with the results of calling a function for every array element. 