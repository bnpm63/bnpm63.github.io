fetch('http://api.weatherstack.com/current?access_key=6b1b30f702c108538c8e8ce7b1761174&query=San%20Jose')
  .then(response => response.json())
  .then(data => {

    const temperature = data.current.temperature;
    const temperatureFahrenheit = (temperature * 9/5) + 33;
    const temperatureFahrenheitTruncated = Math.trunc(temperatureFahrenheit);


    document.getElementById('temperature').textContent = `San Jose ${temperatureFahrenheitTruncated}°`;
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll("#floating-navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSectionId === "main") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            } else if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth",
                });
            }
        });
    });
});


const apiKey = 'a539d21daf6147cbbfc6a47b23ab49a6';
const apiUrl = 'https://api.spotify.com/v1/me/player/currently-playing';

async function getSpotifySong() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch Spotify song.');
        }

        const data = await response.json();
        const songInfo = data.item ? `${data.item.name} by ${data.item.artists[0].name}` : 'No song is currently playing.';
        document.getElementById('song-info').innerText = songInfo;
    } catch (error) {
        console.error('Error fetching Spotify data:', error);
        document.getElementById('song-info').innerText = '🎧 Whuss the Deal - Shoreline Mafia';
    }
}


getSpotifySong();