function playVideo(videoSrc, title) {
    const video = document.getElementById('main-video');
    const videoTitle = document.getElementById('video-title');

    video.src = videoSrc;
    videoTitle.textContent = title;
}

// Example function to handle search
document.getElementById('search-button').addEventListener('click', function() {
    const searchQuery = document.getElementById('search').value;
    alert('Search functionality is not implemented. You searched for: ' + searchQuery);
});
