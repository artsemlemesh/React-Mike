


const dummyApiResponse = {
    showLightDarkMode : true,
    showTicTacToe : true,
    showRandomColorGenerator : true,
    showAccordian : false,
    showTreeView: true
}


function featureFlagData(){
// new Promise creates a new object, takes a single argument, a function called the executor function. this function takes two parameters: 'resolve' and 'reject'
//resolve called when the async operation is successful and the promised task has been completed. its used to fullfill the promise with a result value
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('some error occured! Please try again')
    })
}

export default featureFlagData