

const dummyApiResp = {
    scroll: true,
    gitprof: false
}

function myData(){

    return new Promise((resolve, reject) => {
        if(dummyApiResp) setTimeout(resolve(dummyApiResp), 500);
        else reject('some error occured')
    })

}

export default myData