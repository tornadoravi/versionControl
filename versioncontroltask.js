let updateList = [{
    versionName: "iOS 15",
    releseDate: "23/03/2021",
    bugs: ["b1E35P"],
    features: [`Wide Spectrum brings all background noises into your call (iPhone XS, iPhone XS Max, iPhone XR and later)`],
    author: ["ravi"],
    type: "patch"
},
{
    versionName: "iOS 15.1",
    releseDate: "21/09/2021",
    bugs: ["b1E3T6"],
    features: [`New automation triggers based on the current reading of a HomeKit-enabled humidity, air quality, or light level sensor
        Shortcuts
        
        New pre-built actions let you overlay text on images or gifs , plus a new collection of games lets you pass the time with Siri`],
    author: ["srini"],
    type: "enhancement"
},
{
    versionName: "iOS 15.4.1",
    releseDate: "10/10/2022",
    bugs: ["b1E357P"],
    features: [`"Battery may drain more quickly than expected after updating to iOS 15.4"
        "Braille devices may become unresponsive while navigating text or displaying an ale"`],
    author: ["srini"],
    type: "patch"
}, {
    versionName: "iOS 15.5",
    releseDate: "6/11/2022",
    bugs: ["b5E357P"],
    features: [`Wallet now enables Apple Cash customers to send and request money from their Apple Cash card"
        "Apple Podcasts includes a new setting to limit episodes stored on your iPhone and automatically delete older on"`],
    author: ["ravi"],
    type: "major"
}, {
    versionName: "iOS 15.6",
    releseDate: "18/12/2021",
    bugs: ["b1E857P"],
    features: [`TV app adds the option to restart a live sports game already in-progress and pause, rewind, or fast-forward`],
    author: ["ram"],
    type: "enhancement"
}]

let bugidList = [{
    id: "b1E35P",
    details: `"Unlock iPhone with Apple Watch may not work on iPhone 13 models"
    "Settings app may incorrectly display an alert that storage is full"
    "Audio meditations could unexpectedly start a workout on Apple Watch for some Fitness+ subscribers"`
}, {
    id: "b1E3T6",
    details: `"Photos app may incorrectly report storage is full when importing photos and videos"
    "Weather app may not show current temperature for My Location, and may display colors of animated backgrounds incorrectly"
    "Audio playing from an app may pause when locking the screen"
    "Wallet may unexpectedly quit when using VoiceOver with multiple passes"
    "Available Wi-Fi networks may not be detected"
    "Battery algorithms updated on iPhone 12 models to better estimate battery capacity over time"`
},
{
    id: "b1E357P",
    details: `"Made for iPhone hearing devices may lose connection within some third-party apps"`
},
{
    id: "b5E357P",
    details: `"Fixes an issue where home automations, triggered by people arriving or leaving, may fail"
    "Fixes an issue that may cause iPhone SE (3rd gen) to unexpectedly shutdown"`
},
{
    id: "b1E857P",
    details: `"Fixes an issue where Settings may continue to display that device storage is full even if it is available"
    "Fixes an issue that may cause braille devices to slow down or stop responding when navigating text in Mail"
    "Fixes an issue in Safari where a tab may revert back to a previous page"`
}
]
console.log(updateList)
// input 
var checkType = "patch"
var enterid = "b1E35P"
var checkyear = "2022"
var checkfeatures = "gifs"
var checkVersionName = "7.0. 04 (7004"

//   id     ************************************************************************************************************************************** */
console.log("id :", enterid)
function bugidLists(bugid) {
    for (let i = 0; i < bugid.length; i++) {
        if (bugid[i].id == enterid) {
            console.log("Bug:", bugidList[i].details)
        }
    }
}
bugidLists(bugidList)
console.log("*************************************************************************************************************************")
// year     **************************************************************************************************************************************

console.log("year :", checkyear)
console.log("*************************************************************************************************************************")
function release(years) {
    for (let i = 0; i < years.length; i++) {
        let year = ((years[i].releseDate).slice(-4))
        if (checkyear == year) {
            console.log(years[i])
        }
    }
}
release(updateList)
console.log("*************************************************************************************************************************")
//features    ****************************************************************************************************************************************
console.log("features :", checkfeatures)
function cheackfeature() {
    updateList.forEach(feat => {
        for (let i of feat.features) {
            let featureswordss = i.split(" ")


            for (let words of featureswordss) {
                if (words == checkfeatures) {
                    console.log("checkfeatures verisoon", feat.versionName)
                }

            }

        }
    })
}
cheackfeature()
console.log("*************************************************************************************************************************")
//max author    *******************************************************************************************************************************************
console.log("maxmium releases author:")
const authorNames = []
updateList.forEach((value) => {
    for (let i of value.author)
        authorNames.push(i)
})
// console.log(authorNames)
let mostFrequent = 1;
let authorName = 0
let m = 1;
for (let i = 0; i < authorNames.length; i++) {

    for (let j = 1; j < authorNames.length; j++) {
        if (authorNames[i] == authorNames[j])
            m++;
        if (mostFrequent < m) {
            mostFrequent = m;
            authorName = authorNames[i];
        }
    }
    m = 0;
}
console.log(`\nThe author'${authorName}'has worked on more no of releases, the count is "${mostFrequent}"`);
console.log("*************************************************************************************************************************")
//version name ******************************************************************************************************************************************* */
console.log("version name : ", checkVersionName)
console.log("*************************************************************************************************************************")
function versionNamez(name) {
    for (let i = 0; i < name.length; i++) {
        let cnname = name[i].versionName
        if (cnname == checkVersionName) {
            console.log(name[i])
        }
    }
}
versionNamez(updateList)
console.log("*************************************************************************************************************************")
//type      **********************************************************************************************************************************************
console.log("type :", checkType)
console.log("*************************************************************************************************************************")
function typez(typez) {
    for (let i = 0; i < typez.length; i++) {
        let cntype = typez[i].type
        if (cntype == checkType) {
            console.log(typez[i])
        }
    }
}
typez(updateList)
// **********************************************************************************************************************************************