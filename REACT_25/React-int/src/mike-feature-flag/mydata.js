


const dummyApiResponse = {
    showLightDarkMode : true,
    showTicTacToe : true,
    showRandomColorGenerator : true,
    showTreeView: true
}


function myFeatureFlagData(){

    //async JS function, fetches the dummydata
    return new Promise((resolve, reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('some error occured! please try again')
    })

}

export default myFeatureFlagData

//simply returns dummyApiResponse data, works in non-blocking way, simply handles operation