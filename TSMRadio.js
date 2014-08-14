a = '<style>#radio{position: fixed;bottom:67px;right:15px;color:black;}</style>';
b = '<div style="position:fixed;bottom:67px;right:15px;width:350px;height:99px;"><div id="radio" draggable="true" style="width:350px;height:99px;border:0px;background-color:#FFF;opacity: 1;"; onmouseover = "divOpacityFull()"; onmouseout = "divOpacityLower()";><img src = "https://i.imgur.com/LmZeFDv.png"; id="playexterior"; height = 70; width = 70;></img><img src="https://i.imgur.com/zDiyTig.png"; onclick="searchBox()"; id = "playbutton"; style = "position:absolute;left:25px;top:20px;" height=24; width=21;></img><img src="https://i.imgur.com/sbQFTLT.png"; id = "infobutton"; style = "position:absolute;left:4px;bottom:13px;" onclick="gotoInfo()"; height=11; width=11;></img><button type="button" onclick="skip()">Skip</button><button type="button" onclick="goURL()">Source</button><select style = "position:absolute;left:70px;top:25px;" id="genreselect"><option value="trance";>Trance</option><option value="pop";>Pop</option><option value="dubstep";>Dubstep</option><option value="ambient";>Ambient</option></select><button type="button" onclick="submitGenre()" style="position:absolute;right:149px;top:23px;">Go</button><iframe id = "youtubeplayer" style = "position:absolute;right:7px;bottom:0px;z-index:1;" height="99px"; width="132px"; onmouseover="bigPlayer()" onmouseout="smallPlayer()" src="" frameborder="0";></iframe><div id="songtitle" style = "position:absolute; left:70px; top:0px; color:"#000"; height:8px; overflow:scroll;"></div><div id="version" style = "position:absolute; left:4px; bottom:2px; color:"#000";>v1.17.081314</div></div><div id="searchbox" style="opacity: 0.75;position: absolute;bottom:104px;left:0px;z-index:1;";><img id="glass"; src="https://i.imgur.com/31rIp1w.png"; height=14; width=14;><input type="text" id="searchterm" onkeypress="checkKey(event, this)";></div></div>';
 
function animateExterior(){
$("#playexterior").animate({
    opacity:'0',
  }, 2000);
$("#playexterior").animate({
    opacity:'1',
  }, 2000);
}
 
$('head').append(a);
$('body').append(b);
 
$("#searchbox").hide();
document.getElementById("searchterm").style.visibility="hidden";
document.getElementById("searchbox").style.zIndex="1";
document.getElementById("radio").style.zIndex="2";
 
songtitle.style.fontStyle="italic";
songtitle.style.fontSize="12px";
songtitle.style.fontFamily="Helvetica";
songtitle.style.zIndex="2";
version.style.fontSize="9px";
 
var suchVar = setInterval(function(){animateExterior();}, 4000);
 
var URLregex = /[A-Za-z0-9_-]{11}/;
var trance = ["HahwZ2g2ndo424Armin Van Buuren feat Justine Suissa - Burned With Desire (Rising Star Vocal)","8MZmPoPvJYE210OceanLab - Satellite (Official Music Video)","8JU2HjLR-ts482Above and Beyond - Alone Tonight","RVoYWHlxEzE188Energy 52 - Cafe Del Mar","LZSnoaLWCVU235Veracocha - Carte Blanche","UfG-GSwUhSU223BT - Flaming June (Original Video)","n4KrOOm8Nj8188Dash Berlin - Till The Sky Falls Down (Official Music Video)",'ll5ykbAumD4212Above & Beyond feat. Richard Bedford "Sun & Moon" (OFFICIAL MUSIC VIDEO)',"oTLJjoW867g230Delerium - Silence (ft. Sarah McLachlan) (Airscape Remix) [Official Music Video]","GmyDAV1LQec199ATB - Ecstasy [Official Music Video] ViVA","IlQa6xEcKaY220Chicane & Ferry Corsten - One Thousand Suns (feat Christian Burns) [Vocal Edit]","ET1-6Bef9xU594Saltwater (Original) by Chicane","6QEPrDBMqJ0243Robert Miles - Children","fvjgti7DMaM599Dj Tatana - Saltwater","ffkm7NSvVHg635System F - Insolation (Ferry Corsten Flashover Remix)","sq2D6YfIgkE636Airbase - Genie (Original Mix) HQ","i_hWIgEqibU249Zircon - Ladder To The Sky HD","j315NpcKzKc250Salt Tank - Eugina","_fO6zJ0AXNM451Dutch force - deadline","9JJmHYZQci4391Above & Beyond - Tri-State (5vel Remix)","8j202O7AFAY339Gaia Tuvan Original Mix","B-XNIdZtsw4171Oceanlab - Clear Blue Water (Ferry Corsten Remix)","dTHrIPHCBK4196Gouryella - Ligaya (Official Video)","2N1IWRIKQWI199Rank1 - Airwave (21St Century Mix) [Tune Of The Week] HD","5mAaalEtuxU561DJ Orkidea - Metaverse (Gareth Emery Remix)","nqLArgCbh70231SANDSTORM (darude)","gTPSxbQ9sbo500Rank 1 - Airwave (Original Mix)","U6396ZY_qro258Chicane - Offshore","FPLT7QOFHHk385[HD] Thrillseekers - Synathesia Fly Away","nuwo3FQGJlg296Nitrous Oxide - North Pole (Sunny Lax Remix)","V63vEgCsVlg443Airscape - L'Esperanza (Original Ver.)","RkzKAeJ9ZoY372Twisted Love (Distant Earth Vocal Version) ATB Feat. Christina Soto","qrSh0p-BNXg487ATB - Midnight Sun(Original Mix)","aI0WYqyqBLA328SHato & Paul Rockseek - Wonderfooled (Original mix) HQ","8irVOT5P2zw496Estiva - Next Level (Original Mix)","6ImnV9uzPAo330Mat Zo - Superman","g9FtQFWfoZI402If I Could Fly On The Surface (Daniel Kandi Mash-Up) - OceanLab vs Mike Shiver","LAAWWuYrjZo516Aalto - Taurine (Aiera Remix) [FULL TUNE]","r9w4eq7QX6E435Trilucid - Departures (Yuri Kane Remix)","KlDr5mCcTys241Estiva feat. Josie - Better Days (Original Extended Mix)","jOv02I3ewS0419Silence Groove | Seven (Original Mix)","_UhFyONure0295Estiva - I Feel Fine (Piano Mix)","fGFRJWPASTU347Above & Beyond - Prelude (HQ)","m4SPbhrgpxE332Above & Beyond pres. OceanLab - Lonely Girl","Z1FBVqapvtY180Jaco - Changes (Original Mix)","rH2wIsViQ4I419Leun à Me - All I know 2009","1xwhK6aHtsg474Ehren Stowers - Enigma (Original Mix) [HD]","3MNx6uUL0so446Phalanx - Im Alive (DJ Manian Remix)","rvlD8RqcHr4441Innovix & DJ Eric Flash - Time Flies (Toltec Remix)","53SIMdC03RY467Hydroid The Eternal Activa Remix","y3jNbh2A13w547Karen Overton - Your Loving Arms [Ja Sunrise Mix]","dT7bpxwamXo434Andain - Beautiful Things"];
 
var pop = ["CGyEd0aKWZE238Ellie Goulding - Burn","Sv6dMFF_yts252Fun.: We Are Young ft. Janelle Monáe [OFFICIAL VIDEO]","1G4isv_Fylg260Coldplay - Paradise","T3E9Wjbq44E216Gym Class Heroes: Stereo Hearts ft. Adam Levine [OFFICIAL VIDEO]","mOprnbaIgaY201Hall of Fame (The Script ft. will.i.am)Lyrics","rYEDA3JcQqw233Adele - Rolling in the Deep","0NKUpo_xKyQ220Ellie Goulding - Lights","d020hcWA_Wg258Coldplay - Clocks","y6Sxv-sUYtM247Pharrell Williams - Happy (Official Music Video)"];
 
var dubstep = ["WSeNSzJ2-Jw245SKRILLEX - Scary Monsters And Nice Sprites","DX3jFA01gEs182Adele - Rumour Has It Dubstep Remix - David Orton","IsuVMdnF8A0247Zedd - Spectrum (Official Video) ft. Matthew Koma","32HT9LRq6D0238Juventa - Move Into Light (Ft. Erica Curran) (Koven Remix) (Music Video)","Xll_Q-Sd6qA213Protohype ft. Alina Renae - Fly (Killabyte Remix)","uAuXRpxE370247PatrickReza - Take Me Away (ft. Jilian)","Uvs8DzB1mwU311Secoya - RUN","TYYyMu3pzL4261FIRST OF THE YEAR (EQUINOX) - SKRILLEX","k6lVhGeyXuw308Skrillex - Cinema (Official)","o9kNBCwBprg334Embrace One Ft. Shaz Sparks - Altitude (Serobliss Remix)","U33HBe148N4301Day One - Aurora (Dubstep Mix)","CkyMqGALMoY465Myon & Shane 54 - Lights (feat. Aruna) (5vel Remix)","mxXYDfF-7ls281Adoxe - Cadence","TKadG4csoGY227Kirsty Hawkshaw - Reason to Forgive (T-Mass Remix)","x9kA9GYOzHc252Modestep & Koven - Take It All","MmzjN0D-a0k240PhaseOne - Take Me Away ft. Nicole Millar [Dubstep]"];
 
var ambient = ["0Z4cLmbw6q0296Aphex Twin - Heliosphan","fp1gm4nxzD8229Hugh and Saturation - Cirrus","ffsPRJqoRmk591Thomas Newman - Ghosts (Aaron Static & Fort Road Remix)","WIjWaulrLjs248Any Other Name - Thomas Newman","j4huZYzOD8Q609Thomas Newman - That Next Place"];

var chill = ["4Zuj65p0dxY302Alt+F4 -Alt+F4 (W&D Chill Out Remix) [HD]"]
 
var genre = "trance";
var quality = "large";
var boxopen = 0;
var minimized = 0;
var songlength = 235;

var thisVar = setInterval(function(){refresh();}, songlength*1000+5000);
 
function divOpacityFull(){
document.getElementById("radio").style.opacity="1";
}
 
function divOpacityLower(){
document.getElementById("radio").style.opacity="0.75";
}
 
function gotoInfo(){
window.open("https://sites.google.com/site/anelegantworldoftext/tsm-radio-player-s-info");
}
 
function bigPlayer(){
document.getElementById("youtubeplayer").width="640px";
document.getElementById("youtubeplayer").height="480px";
document.getElementById("youtubeplayer").style.right="0px";
document.getElementById("youtubeplayer").style.zIndex="3";
}
 
function smallPlayer(){
document.getElementById("youtubeplayer").width="132px";
document.getElementById("youtubeplayer").height="99px";
document.getElementById("youtubeplayer").style.right="7px";
document.getElementById("youtubeplayer").style.zIndex="1";
}
 
function checkKey(e, textarea){
code = (e.keyCode);
if (code == 13) {
if (minimized == 0){
searchDatabase();
} else {
alert ("Maximize radio first");
}
}
}

$("#searchbox").keydown(function(e) {
if (e.keyCode == 27) {uninstall();}
if (e.keyCode == 17) {minimize();}
});
 
function searchBox(){
if (boxopen == 0){
$("#searchbox").show(400);
setTimeout(function(){document.getElementById("searchterm").style.visibility="visible";}, 400);
boxopen=1;
} else {
$("#searchbox").hide(400);
document.getElementById("searchterm").style.visibility="hidden";
boxopen=0;
$('#searchterm').val("");
}
}
 
function searchDatabase(){
strprelim = $("#searchterm").val();
if (strprelim!==""){
motherarray = trance.concat(pop,dubstep,ambient);
str = strprelim.toLowerCase();
megasearch = searchStringInArray(str,motherarray);
if (megasearch > -1){
searchBox();
$('#searchterm').val("");
boxopen=0;
searchfound();
}
}
}
 
function searchStringInArray (str, strArray) {
    for (var j=0; j<strArray.length; j++) {
        if (strArray[j].toLowerCase().match(str)) return j;
    }
    return -1;
}
 
function searchfound(){
newsong = motherarray[megasearch];
setSongVars();
clearInterval(thisVar);
songlength = newsong.substring(11,14);
thisVar = setInterval(function(){refresh();}, songlength*1000+5000);
}
 
function refresh(){
newsong = chooseOne();
setSongVars();
clearInterval(thisVar);
songlength = newsong.substring(11,14);
thisVar = setInterval(function(){refresh();}, songlength*1000+5000);
}
 
function setSongVars(){
var newURL = newsong.match(URLregex);//yeah, regex wasn't really necessary here :P
songlength = newsong.substring(11,14);
var newTitle = newsong.substring(14);
document.getElementById("youtubeplayer").src="//www.youtube.com/embed/" + newURL + "?rel=0&amp;autoplay=1&amp;iv_load_policy=3&amp;vq=" + quality;
currentURL = "https://www.youtube.com/watch?v=" + newURL;
document.getElementById("songtitle").innerHTML=newTitle;
}
 
function skip(){
newsong = chooseOne();
setSongVars();
clearInterval(thisVar);
songlength = newsong.substring(11,14);
thisVar = setInterval(function(){refresh();}, songlength*1000+5000);
}
 
function submitGenre(){
 
var genresubmit = genreselect.value;
 
if (genresubmit !== genre){
if (genresubmit == "trance"){
playDaTrance();
}
if (genresubmit == "pop"){
playDaPop();
}
if (genresubmit == "dubstep"){
playDaDubstep();
}
if (genresubmit == "ambient"){
playDaAmbient();
}
} else {
alert("You are already on that channel");
}
}
 
function playDaTrance(){
genre = "trance";
skip();
}
 
function goURL(){
window.open(currentURL);
}
 
function playDaPop(){
genre = "pop";
skip();
}
 
function playDaDubstep(){
genre = "dubstep";
skip();
}
 
function playDaAmbient(){
genre = "ambient";
skip();
}

function playDaChill(){
genre = "chill";
skip();
}
 
function chooseOne(){
if (genre == "trance"){
return trance[Math.floor(Math.random()*trance.length)];
}
if (genre == "pop"){
return pop[Math.floor(Math.random()*pop.length)];
}
if (genre == "dubstep"){
return dubstep[Math.floor(Math.random()*dubstep.length)];
}
if (genre == "ambient"){
return ambient[Math.floor(Math.random()*ambient.length)];
}
if (genre == "chill"){
return chill[Math.floor(Math.random()*chill.length)];
}
}

function minimize(){
if (minimized == 0){
$("#radio").hide(1000);
document.getElementById("searchbox").style.visibility="visible";
$("#searchbox").animate({
    opacity:'0.2',
  }, 1000);
$('#searchterm').val("");
boxopen = 1;
minimized = 1;
} else {
$("#radio").show(1000);
$("#searchbox").animate({
    opacity:'0.75',
  }, 1000);
minimized = 0;
}
}

function uninstall(){
$("#radio").remove();
$("#searchbox").remove();
clearInterval(thisVar);
}
 
skip();
 
console.log("Radio Player has loaded.");
