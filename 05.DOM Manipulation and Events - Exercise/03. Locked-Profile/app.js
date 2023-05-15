function lockedProfile() {
    let unlockCheckButtons = document.querySelectorAll('input[value="unlock"]');
    for (const unlockButton of unlockCheckButtons) {
        unlockButton.addEventListener('click', showInfo);
    }
    function showInfo(e) {
        let profile = e.target.parentElement;
        let showMoreBtn = profile.querySelector('button');
        showMoreBtn.addEventListener('click', onClick);
    }
    function onClick(e) {
        let profile = e.target.parentElement;
        let isUnlockedChecked = profile.querySelectorAll('input[value="unlock"]')[0].checked;
        if (isUnlockedChecked) {
            let info = profile.querySelector('div');
            if (e.target.textContent === "Show more") {
                e.target.textContent = 'Hide it';
                info.style.display = 'block';
            } else {
                e.target.textContent = 'Show more';
                info.style.display = 'none';
            }
        }
    }
}