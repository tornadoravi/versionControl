enum eReleaseType { MAJOR, ENHANCEMENT, PATCH }

interface ReleaseList {
    versionName: string,
    releseDate: Date,
    bugs: string[] | string,
    features: string[] | string,
    author: string[] | string,
    type: eReleaseType
}

interface IBugId {
    bugID: string,
    bugDetails: string[] | string
}

let versionUpdateReleaseList: ReleaseList[] = [{
    versionName: "iOS 15",
    releseDate: new Date("05/03/2021"),
    bugs: ["b1E35P"],
    features: ["Wide Spectrum brings all background noises into your call (iPhone XS, iPhone XS Max, iPhone XR and later)"],
    author: ["ravi"],
    type: eReleaseType.ENHANCEMENT
},
{
    versionName: "iOS 15.1",
    releseDate: new Date("06/09/2021"),
    bugs: ["b1E3T6"],
    features: [`New automation triggers based on the current reading of a HomeKit-enabled humidity, air quality, or light level sensor
        Shortcuts
        
        New pre-built actions let you overlay text on images or gifs , plus a new collection of games lets you pass the time with Siri`],
    author: ["srini"],
    type: eReleaseType.MAJOR
},
{
    versionName: "iOS 15.4.1",
    releseDate: new Date("09/10/2022"),
    bugs: ["b1E357P"],
    features: [`"Battery may drain more quickly than expected after updating to iOS 15.4"
        "Braille devices may become unresponsive while navigating text or displaying an ale"`],
    author: ["srini"],
    type: eReleaseType.ENHANCEMENT
}, {
    versionName: "iOS 15.5",
    releseDate: new Date("01/11/2022"),
    bugs: ["b5E357P"],
    features: [`Wallet now enables Apple Cash customers to send and request money from their Apple Cash card"
        "Apple Podcasts includes a new setting to limit episodes stored on your iPhone and automatically delete older on"`],
    author: ["ravi"],
    type: eReleaseType.PATCH
}, {
    versionName: "iOS 15.6",
    releseDate: new Date("09/12/2021"),
    bugs: ["b1E857P"],
    features: [`TV app adds the option to restart a live sports game already in-progress and pause, rewind, or fast-forward`],
    author: ["ram"],
    type: eReleaseType.MAJOR
}]

let bugIdDetailsList: IBugId[] = [{
    bugID: "b1E35P",
    bugDetails: [`"Unlock iPhone with Apple Watch may not work on iPhone 13 models"
    "Settings app may incorrectly display an alert that storage is full"
    "Audio meditations could unexpectedly start a workout on Apple Watch for some Fitness+ subscribers"`]
}, {
    bugID: "b1E3T6",
    bugDetails: ["Photos app may incorrectly report storage is full when importing photos and videos" +
        "Weather app may not show current temperature for My Location, and may display colors of animated backgrounds incorrectly" +
        "Audio playing from an app may pause when locking the screen" +
        "Wallet may unexpectedly quit when using VoiceOver with multiple passes" +
        "Available Wi-Fi networks may not be detected" +
        "Battery algorithms updated on iPhone 12 models to better estimate battery capacity over time"]
},
{
    bugID: "b1E357P",
    bugDetails: [`"Made for iPhone hearing devices may lose connection within some third-party apps"`]
},
{
    bugID: "b5E357P",
    bugDetails: [`"Fixes an issue where home automations, triggered by people arriving or leaving, may fail"
    "Fixes an issue that may cause iPhone SE (3rd gen) to unexpectedly shutdown"`]
},
{
    bugID: "b1E857P",
    bugDetails: [`"Fixes an issue where Settings may continue to display that device storage is full even if it is available"
    "Fixes an issue that may cause braille devices to slow down or stop responding when navigating text in Mail"
    "Fixes an issue in Safari where a tab may revert back to a previous page"`]
}
]
// console.log(versionUpdateReleaseList)
// console.log("*************************************************************************************************************************")
// // input 
var checkInputType = eReleaseType.MAJOR
var checkInputId = "b1E35P"
var checkInputYear = "2021"
var checkInputFeatures = "stored"
var checkInputVersionName = "iOS 15.4.1"
//  checkYEAR------------------------------------------
console.log("*****************************************************************************************************")
console.log("FIND YEAR BACIS VERSION CONTROL LIST")
console.log("*****************************************************************************************************")
function cheackYear(year: string) {
    let filterYear = versionUpdateReleaseList.filter(element => element.releseDate.toString().includes(year))
    console.log(filterYear)
}
cheackYear(checkInputYear)

//  checkBUGID------------------------------------------
console.log("*****************************************************************************************************")
console.log("FIND  BUG ID BACIS BUG DETAILS LIST")
console.log("*****************************************************************************************************")
function checkBugId(id: string) {
    let filterBugId = bugIdDetailsList.filter(index => index.bugID.includes(id))
    console.log(filterBugId)
}
checkBugId(checkInputId)

//  checkBugType------------------------------------------
console.log("*****************************************************************************************************")
console.log("FIND BUG TYPE  BACIS VERSION CONTROL LIST")
console.log("*****************************************************************************************************")
function cheackBugType(types: eReleaseType) {
    let filterType = versionUpdateReleaseList.filter(bugType => bugType.type === types)
    console.log(filterType)
}
cheackBugType(checkInputType)

//  checkBugFeatures------------------------------------------

console.log("*****************************************************************************************************")
console.log("FIND FEATURES  BACIS VERSION CONTROL LIST")
console.log("*****************************************************************************************************")
function cheackFeatures(Feature: string) {
    for (let cheack of versionUpdateReleaseList) {
        if (cheack.features[0].split(' ').toString().includes(Feature)) {
            console.log(cheack.versionName)
        }
    }
}
cheackFeatures(checkInputFeatures)


//  checkMAXReleaseAuthor------------------------------------------
console.log("*****************************************************************************************************")


function maxReleaseAuthor() {

    console.log("maxmium releases author:")
    const authorNames: string[] = []
    versionUpdateReleaseList.forEach((value) => {
        for (let element of value.author)
            authorNames.push(element)
    })
    // console.log(authorNames)
    let mostFrequent = 1;
    let authorName = "default"
    let count = 1;
    for (let element = 0; element < authorNames.length; element++) {
        for (let index = 1; index < authorNames.length; index++) {
            if (authorNames[element] == authorNames[index])
            count++;
            if (mostFrequent < count) {
                mostFrequent = count;
                authorName = authorNames[element];
            }
        }
        count = 0;
    } console.log("*****************************************************************************************************")
    console.log(`\nThe author'${authorName}'has worked on more no of releases, the count is "${mostFrequent}"`);
}
maxReleaseAuthor()