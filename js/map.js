var HelperStyle =
[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#003057"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#003057"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#003057"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#D5E8F7"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#D5E8F7"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#003057"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#003057"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
          
            {
                "saturation": "-50"
            },
            {
                "lightness": "-9"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#003057"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
				
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#003057"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#B3D9F8"
            }
        ]
    }
];


function myMap() {
	     
         var mapProp = {
         center:new google.maps.LatLng(-12.815747, 130.962773),
         zoom: 3.5,
		 styles: HelperStyle,
		 mapTypeId: google.maps.MapTypeId.ROADMAP
         };
         var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	     var marker1 = new google.maps.Marker
		    ( 
				{
					center: new google.maps.LatLng( -37.815747, 144.962773 ),//VIC
					map: map,
					title: 'PTE Helper Melbourne',
					position: new google.maps.LatLng( -37.815747, 144.962773  )
				} 
			);
	      
		  var marker2 = new google.maps.Marker
			( 
				{
					center: new google.maps.LatLng(-33.871864, 151.207099),//SYDNEY
					map: map,
					title: 'PTE Helper Sydney',
					position: new google.maps.LatLng( -33.871864, 151.207099 )
				}
			)
		  var marker3 = new google.maps.Marker
			( 
				{
					center: new google.maps.LatLng(-41.186903, 146.343229),//TAS
					map: map,
					title: 'PTE Helper Tasmania',
					position: new google.maps.LatLng( -41.186903, 146.343229 )
				}
			)
			
		  var marker4 = new google.maps.Marker
			( 
				{
					center: new google.maps.LatLng(10.772115, 106.700274),//VN
					map: map,
					title: 'PTE Helper HCM',
					position: new google.maps.LatLng( 10.772115, 106.700274)
				}
			);
	 
}
google.maps.event.addDomListener( window, 'load', myMap );


function zoom_map1() {//MEL
			var mapProp = {
				center: new google.maps.LatLng( -37.815747, 144.962773  ),
				zoom: 16,
				styles: HelperStyle,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map( document.getElementById( 'googleMap' ), mapProp );
	        var info = "PTE Helper Melbourne</strong";
	        var infowindow = new google.maps.InfoWindow({
		        content: info 
	        });
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng( -37.815747, 144.962773  ),
				map: map,
				title: 'PTE Helper Melbourne'
			});
	        google.maps.event.addListerner(marker, 'click', function () {
				infowindow.open(map, marker);
			});
		}
google.maps.event.addDomListener( window, 'load', myMap );

function zoom_map2() { //SYD
			var mapProp = {
				center: new google.maps.LatLng( -33.871864, 151.207099 ),
				zoom: 16,
				styles: HelperStyle,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map( document.getElementById( 'googleMap' ), mapProp );
			var marker = new google.maps.Marker( {
				position: new google.maps.LatLng( -33.871864, 151.207099 ),
				map: map
			} );
		}
google.maps.event.addDomListener( window, 'load', myMap );

function zoom_map3() { //TAS
			var mapProp = {
				center: new google.maps.LatLng( -41.186903, 146.343229),
				zoom: 16,
				styles: HelperStyle,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map( document.getElementById( 'googleMap' ), mapProp );
			var marker = new google.maps.Marker( {
				position: new google.maps.LatLng( -41.186903, 146.343229 ),
				map: map
			} );
		}
google.maps.event.addDomListener( window, 'load', myMap );

function zoom_map4() { //VN
			var mapProp = {
				center: new google.maps.LatLng( 10.772115, 106.700274 ),
				zoom: 16,
				styles: HelperStyle,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map( document.getElementById( 'googleMap' ), mapProp );
			var marker = new google.maps.Marker( {
				position: new google.maps.LatLng( 10.772115, 106.700274),
				map: map
			} );
		}
google.maps.event.addDomListener( window, 'load', myMap );












