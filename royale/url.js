var LOBBY_MUSIC_URL = "https://vgmdownloads.com/soundtracks/super-mario-all-stars-super-mario-bros/drhkktsf/04%20-%20Super%20Mario%20Bros.%20The%20Lost%20Levels%20title.mp3";
var MENU_MUSIC_URL = "https://vgmdownloads.com/soundtracks/super-mario-all-stars-super-mario-bros/drhkktsf/04%20-%20Super%20Mario%20Bros.%20The%20Lost%20Levels%20title.mp3";
var SKINCOUNT = 1;
var SKIN_MUSIC_URL = {};
var TILE_ANIMATION = {};
var OBJ_ANIMATION = {};
var GUEST_SKINS = [];
(function() {
    var assetData = resources["assets.json"];
    if (assetData.skins.count != undefined)
        SKINCOUNT=assetData.skins.count;
    for (i in assetData.skins.properties) {
        var prop = assetData.skins.properties;
        var music = prop[i].music;
        if (music != undefined)
            SKIN_MUSIC_URL[prop[i].id] = music;
        if (prop[i].forGuests) GUEST_SKINS.push(prop[i].id);
    }
    if (assetData.tileAnim) {
        for (var anim of assetData.tileAnim) {
            var obj = {};
            obj.tiles = anim.tiles;
            obj.delay = anim.delay;
            obj.tilesets = anim.tilesets || [];
            TILE_ANIMATION[anim.startTile] = obj;
        }
    }
    if (assetData.objAnim) {
        for (var anim of assetData.objAnim) {
            var obj = {};
            obj.tiles = anim.tiles;
            obj.delay = anim.delay;
            obj.tilesets = anim.tilesets || [];
            OBJ_ANIMATION[anim.startTile] = obj;
        }
    }
})();
print("loading url.js finished");