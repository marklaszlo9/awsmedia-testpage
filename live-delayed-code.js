// video element ids
var live_player_id = "video_player_live";
var delayed_player_id = "video_player_delayed";
var ad_player_id = "video_player_ad";
// HLS endpoint
//Replace live_video_source with the first endpoint of the Primary MediaPackage Channel
var live_video_source = "https://528dc4ef17d725ed.mediapackage.eu-central-1.amazonaws.com/out/v1/6949e04e544741f5b8b69741ca07f8a1/index.m3u8";
//Replace delayed_video_source with the second endpoint of the same Primary MediaPackage Channel
var delayed_video_source = "https://528dc4ef17d725ed.mediapackage.eu-central-1.amazonaws.com/out/v1/f29f9b079ad54931822b57cd2027b0e4/index.m3u8";

var ad_video_source = "https://0d44f47835714dfbb1d62c5fc1006d29.mediatailor.eu-central-1.amazonaws.com/v1/master/f0ee54e0b07dcf57210fba5e9be372fcab2adb18/MyTestCampaign-1/index.m3u8";
// initalize the page
$(document).ready(() => {
    // set the live player
    prepare_player(live_player_id, live_video_source);
    // set the time delayed player
    prepare_player(delayed_player_id, delayed_video_source);
    //display the source URLs of the two players
    prepare_player(ad_player_id, ad_video_source);
    $("#live_source_URL").text("URL: " + live_video_source);
    $("#delayed_source_URL").text("URL: " + delayed_video_source);
    $("#ad_source_URL").text("URL: " + ad_video_source);
});

// set the specified player with the source URL
var prepare_player = (id, source) => {
    console.log("id = " + id);
    console.log("source = " + source);
    let player = videojs("#" + id);
    player.reset();
    player.src({
        "src": source,
        "type": "application/x-mpegURL"
    });
    player.load();
    player.play();
}
