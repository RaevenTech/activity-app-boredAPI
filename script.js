const activity = document.getElementById("activity")
const activityBtn = document.getElementById("activity-btn")

const baseURL = "https://apis.scrimba.com/bored/api/activity"

const getFetchData = () => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => activity.innerText = data.activity)
}

activityBtn.addEventListener("click", () =>{
    getFetchData()
})