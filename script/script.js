console.log("script")

        let video = "lofi jamz"
        let mute = "sound off"
        let timeStamp = "1:56:04";
        let videoTitle = "cow hiphop";
        let videoThumbnail = "image of clouds";
        let addToQueue = "play next";
        let saveToWatchLater = "check-out later";
        let saveToPlaylist  = "keep";
        let download = "store info";
        let share = "copy link";
        let notIntrested = "dislike content";
        let dontRecommendChannel = "hide profile";
        let report = "flag content";
    let videoOptions = [addToQueue,saveToWatchLater,saveToPlaylist,download,share,notIntrested,dontRecommendChannel,report];
    let createrTitle = "PB&Jamz"
    let numberViews = 30486;
    let postDate = "08/13/2016";
let contentWindow = [video,mute,timeStamp,videoTitle,videoThumbnail,videoOptions,createrTitle,numberViews,postDate];
let notifications = "keep me informed";
let X = "hide suggestions"

document.write(
    `
    <p class="font">Unintrested? ${X} </p>
    <p class="font">Like the content? ${notifications} </p>
    <p class="font">Todays vids: ${contentWindow} </p>
    <p class="font">Most played: ${video} </p>
    <p class="font">Silence video: ${mute} </p>
    <p class="font">Video length: ${timeStamp} </p>
    <p class="font">Name of video: ${videoTitle} </p>
    <p class="font">Channel: ${videoThumbnail} </p>
    <p class="font">More... ${videoOptions} </p>
    <p class="font">To watch next, ${addToQueue} </p>
    <p class="font">Maybe another time? ${saveToWatchLater} </p>
    <p class="font">Add it to the mix! ${saveToPlaylist} </p>
    <p class="font">Watch offline ${download} </p>
    <p class="font">Show someone! ${share} </p>
    <p class="font">Didn't like the video? ${notIntrested} </p>
    <p class="font">Unitrestead? ${dontRecommendChannel} </p>
    <p class="font">offesnsive material ${report} </p>
    <p class="font">Posted by ${createrTitle} </p>
    <p class="font">Watched by ${numberViews} </p>
    <p class="font">Posted ${postDate} </p>
    `
)