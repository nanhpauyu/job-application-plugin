# Job Application Plugin

## Features
This is a Chrome plugin that scrapes job postings from LinkedIn, Indeed, and Glassdoor. It cannot be used alone; it must be combined with the [Django Job Application Tracker web application](https://github.com/nanhpauyu/django-job-application-tracker).

## Technologies Used
- JavaScript
- HTML
- CSS
- Chrome Browser
- VS Code
- Postman
- GitHub

## How to Use It

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/nanhpauyu/job-application-plugin.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd job-application-plugin
   ```

3. **Update the API URL:**
   - Open the `script.js` file in Notepad or VS Code.
   - On line 27 or 28, update the URL to the host of the [Django Job Application Tracker web application](https://github.com/nanhpauyu/django-job-application-tracker).
   - Save the file.

4. **Install the Chrome Plugin:**
   - Open Chrome Browser.
   - Click on the three-dot menu on the top-right corner and select **Manage Extensions**.
   - Enable **Developer Mode** (toggle in the top-right corner).
   - Click **Load Unpacked**.
   - Select the plugin folder.

You have successfully installed the Chrome plugin!

## How to Use the Plugin
- Open a job post fully in a new Chrome tab.
- Click the **Start** button from the plugin.

### Example:
![Like this](/images/job_post.png)

![Click Start](/images/plugin.png)
