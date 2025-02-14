let start = document.getElementById('start');

start.addEventListener('click', async () => {
    console.log('Start scraping process...');
    start.classList.add("loading");
    start.disabled = true;

    try {
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: startScrape,
        });

    } catch (error) {
        console.error("Error executing script:", error);
    }

    setTimeout(() => {
        start.classList.remove("loading");
        start.disabled = false;
    }, 2000);
});

function startScrape() {
    // const url = 'http://127.0.0.1:8000/';
    const url = 'https://django-job-application-tracker.vercel.app/'
    currentDomain = location.origin
    let result
    if (currentDomain == 'https://www.indeed.com') {
        result = document.getElementById('jobDescriptionText').textContent
    } else if (currentDomain == 'https://www.linkedin.com') {
	a =  document.getElementsByClassName('t-14 artdeco-card')[0].textContent
        b = document.getElementById('job-details').textContent
 	result = a + b
    } else if (currentDomain == 'https://www.glassdoor.com') {
        result = document.getElementsByClassName('JobDetails_jobDetailsContainer__y9P3L')[0].textContent
    }
    console.log(result)

     const fetchData = async () => {
         const reponse = await fetch(
             `${url}add_post`,
             {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(
                     {
                         result: result,
                     }
                 )
             }
         )
             .catch((e) => {
                 console.log(e)
             })
         console.log(reponse)
     }
     const response = fetchData()
}