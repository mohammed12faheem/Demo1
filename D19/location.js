function loc(){
    window.navigator.geolocation.getCurrentPosition((position)=>{
        let {latitude,longitude}=position.coords
        console.log(latitude,longitude);
        let url=`https://www.google.com/maps/place/${latitude},${longitude}`
        console.log(url);
    })
}
loc()
    