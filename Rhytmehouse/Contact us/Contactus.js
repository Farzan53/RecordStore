if(navigator.geolocation){
    navigator.geolocation.watchPosition(function(pos){
        console.log('latitude'+pos.coords.latitude+'longitude'+pos.coords.longitude)
        document.getElementById('loc').innerHTML='<a href=https://www.google.com/maps/@24.9288507,67.0390239,14z?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D'+pos.coords.latitude+' , '+pos.coords.longitude+'"> <img src="map.jpg"></a>'
    })
}