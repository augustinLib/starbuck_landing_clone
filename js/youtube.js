var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


      function onYouTubeIframeAPIReady() {
        // <div id="player"></div>
        new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        playerVars: {
            autoplay: true, // 자동 재생
            loop: true, // 반복 재생
            playlist: 'An6LvWQuj_8' //반복 재생 플레이리스트
        },
        events: {
            onReady: function (event) {
                event.target.mute() // 음소거
            }
        }
        });
    }
