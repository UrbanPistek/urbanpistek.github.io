function loadGoogleMaps() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${window.ENV.GOOGLE_MAPS_API_KEY}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Initialize and add the map
function initMap() {

  // Center Point
  const center = { lat: 42.666318, lng:  -108.023603 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2, // 0 is no zoom
    center: center,
    mapTypeId: 'terrain',
    streetViewControl: false,
    options: {
      gestureHandling: 'greedy'
    }
  });

  displayMountains(map);
}

function displayMountains(map){

  let data = mapData();

  for(const item in data){
    const displayContent = `
    <div>
      <h6>${String(data[item].name)}</h6>
      <p><strong>Elevation</strong>: ${String(data[item].elevation_m)}m</p>
      <p><strong>Summit Year</strong>: ${String(data[item].year)}</p>
    </div>
    `;
    const infowindow = new google.maps.InfoWindow({
      content: displayContent,
    });

    const marker = new google.maps.Marker({
      position: data[item].coords,
      map: map,
      icon: "assets/img/map_icon2.png",
      title: data[item].name
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

  }
}

function mountainCount(){
  let data = mapData();
  var count =  Object.keys(data).length;
  return count;
}

function distanceCount(){
  let data = statsData();
  const totalDistance = Object.values(data).reduce((sum, year) => sum + year.distance_km, 0);
  return totalDistance;
}

function verticalCount(){
  let data = statsData();
  const totalVertical = Object.values(data).reduce((sum, year) => sum + year.vertical_m, 0);
  return totalVertical;
}

function mapData(){
  dataset = {
    poccatera_ridge_ab:{
      name: "Poccaterra Ridge", 
      coords: {
        lat: 50.60035099731596,
        lng: -115.01756647780198
      },
      elevation_m: 2664,
      year: 2017
    },
    ptarmigan_peak_ab:{
      name: "Ptarmigan Peak", 
      coords: {
        lat: 51.491753360360384,
        lng: -116.08864625382944
      },
      elevation_m: 3035,
      year: 2017
    },
    mount_swansea_bc:{
      name: "Mount Swansea", 
      coords: {
        lat: 50.507754294206045,
        lng: -115.95370252242223
      },
      elevation_m: 1731,
      year: 2017
    },
    mount_fable_ab:{
      name: "Mount Fable", 
      coords: {
        lat: 51.11843881418455,
        lng: -115.22642815504258
      },
      elevation_m: 2702,
      year: 2018
    },
    mount_fairview_ab:{
      name: "Fairview Mountain", 
      coords: {
        lat: 51.40011638194512,
        lng: -116.22553471571234
      },
      elevation_m: 2744,
      year: 2018
    },
    flinsch_peak_mt:{
      name: "Flinsch Peak", 
      coords: {
        lat: 48.498306054100425,
        lng: -113.46591216004508
      },
      elevation_m: 2812,
      year: 2018
    },
    mount_richardson_ab:{
      name: "Mount Richardson", 
      coords: {
        lat: 51.49542641072814,
        lng: -116.12342607836774
      },
      elevation_m: 3086,
      year: 2018
    },
    pika_peak_ab:{
      name: "Pika Peak", 
      coords: {
        lat: 51.493670191206384,
        lng: -116.10334673399639
      },
      elevation_m: 3053,
      year: 2017
    },
    heart_mountain_ab:{
      name: "Heart Mountain", 
      coords: {
        lat: 51.04034045114017,
        lng: -115.13804893429214
      },
      elevation_m: 2135,
      year: 2018
    },
    pikes_peak_co:{
      name: "Pikes Peak", 
      coords: {
        lat: 38.84108181103397,
        lng: -105.04262832615372
      },
      elevation_m: 4302,
      year: 2019
    },
    mount_elbert_co:{
      name: "Mount Elbert", 
      coords: {
        lat: 39.11821410518518,
        lng: -106.44604595707729
      },
      elevation_m: 4401,
      year: 2019
    },
    peak_eight_co:{
      name: "Peak Eight", 
      coords: {
        lat: 39.4732734858814,
        lng: -106.10361565762416
      },
      elevation_m: 3955,
      year: 2019
    },
    wastooch_ridge_ab:{
      name: "Wastooch Ridge", 
      coords: {
        lat: 50.9286120286826,
        lng: -115.04268717657192
      },
      elevation_m: 2330,
      year: 2020
    },
    old_baldy_peak_ab:{
      name: "Old Baldy Peak", 
      coords: {
        lat: 50.9105542210202,
        lng: -115.07149286474434
      },
      elevation_m: 2728,
      year: 2020
    },
    mount_mcdougall_ab:{
      name: "Mount McDougall", 
      coords: {
        lat: 50.897482660613974,
        lng: -115.05761260373013
      },
      elevation_m: 2726,
      year: 2020
    },
    volcano_peak_ab:{
      name: "Volcano Peak", 
      coords: {
        lat: 50.887004270062675,
        lng: -115.07432650261168
      },
      elevation_m: 2554,
      year: 2020
    },
    heather_ridge_ab:{
      name: "Heather Ridge", 
      coords: {
        lat: 51.47202664256885,
        lng: -116.05305335822156
      },
      elevation_m: 2636,
      year: 2020
    },
    mount_aylmer_ab:{
      name: "Mount Aylmer", 
      coords: {
        lat: 51.32529002983764,
        lng: -115.43191454410714
      },
      elevation_m: 3162,
      year: 2020
    },
    cyclone_mountain_ab:{
      name: "Cyclone Mountain", 
      coords: {
        lat: 51.56880250393304,
        lng: -116.07244375124378
      },
      elevation_m: 3050,
      year: 2020
    },
    pipestone_mountain_ab:{
      name: "Pipestone Mountain", 
      coords: {
        lat: 51.56285811858075,
        lng: -116.05166342919473
      },
      elevation_m: 2971,
      year: 2020
    },
    pipestone_towers_ab:{
      name: "Pipestone Towers", 
      coords: {
        lat: 51.56061966074995,
        lng: -116.03953046768841
      },
      elevation_m: 2800,
      year: 2020
    },
    sulphur_mountain_ab:{
      name: "Sulphur Mountain", 
      coords: {
        lat: 51.12397461621794,
        lng: -115.55605453144616
      },
      elevation_m: 2451,
      year: 2020
    },
    mount_jimmy_simpson_ab:{
      name: "Mount Jimmy Simpson", 
      coords: {
        lat: 51.68711777496557,
        lng: -116.50607281712512
      },
      elevation_m: 2966,
      year: 2020
    },
    mount_temple_ab:{
      name: "Mount Temple", 
      coords: {
        lat: 51.35115382855032,
        lng: -116.20724946762803
      },
      elevation_m: 3544,
      year: 2020
    },
    mount_drummond_ab:{
      name: "Mount Drummond", 
      coords: {
        lat: 51.59003423031431,
        lng: -116.01266769528337
      },
      elevation_m: 3148,
      year: 2020
    },
    mount_sparrowhawk_ab:{
      name: "Mount Sparrowhawk", 
      coords: {
        lat: 50.9410375359795,
        lng: -115.26516344801985
      },
      elevation_m: 3121,
      year: 2020
    },
    powderface_ridge_ab:{
      name: "Powderface Ridge", 
      coords: {
        lat: 50.843575638347374,
        lng: -114.85121672318587
      },
      elevation_m: 2210,
      year: 2020
    },
    packers_peak_ab:{
      name: "Packers Peak", 
      coords: {
        lat: 51.49460325535947,
        lng: -116.06830279437892
      },
      elevation_m: 2550,
      year: 2020
    },
    gap_peak_ab:{
      name: "Gap Peak", 
      coords: {
        lat: 51.091887177509925,
        lng: -115.2212394212465
      },
      elevation_m: 2517,
      year: 2021
    },
    porcupine_ridge_ab:{
      name: "Porcupine Ridge", 
      coords: {
        lat: 50.956718521060175,
        lng: -115.04683647249315
      },
      elevation_m: 2260,
      year: 2021
    },
    loder_peak_ab:{
      name: "Loder Peak", 
      coords: {
        lat: 51.09392879177906,
        lng: -115.1442144774476
      },
      elevation_m: 2088,
      year: 2021
    },
    mount_frank_ab:{
      name: "Mount Frank", 
      coords: {
        lat: 52.0542414499305,
        lng: -116.50133877774724
      },
      elevation_m: 2840,
      year: 2021
    },
    whirlpool_ridge_ab:{
      name: "Whirlpool Ridge", 
      coords: {
        lat: 52.0465614404953,
        lng: -116.49152700794414
      },
      elevation_m: 2590,
      year: 2021
    },
    ships_prow_ab:{
      name: "Ships Prow", 
      coords: {
        lat: 51.04549617788439,
        lng: -115.3791721822401
      },
      elevation_m: 2636,
      year: 2021
    },
    mount_james_walker_ab:{
      name: "Mount James Walker", 
      coords: {
        lat: 50.805175320175074,
        lng: -115.22014336017992
      },
      elevation_m: 3035,
      year: 2021
    },
    alpha_centauri_bc:{
      name: "Alpha Centauri", 
      coords: {
        lat: 50.60613434604467,
        lng: -116.53178740736116
      },
      elevation_m: 3070,
      year: 2021
    },
    north_star_peak_bc:{
      name: "North Star Peak", 
      coords: {
        lat: 50.610422852425145,
        lng: -116.5391493955364
      },
      elevation_m: 3123,
      year: 2021
    },
    fithty_forty_peak_bc:{
      name: "5040 Peak", 
      coords: {
        lat: 49.192049873865386,
        lng: -125.28237349686184
      },
      elevation_m: 1532,
      year: 2021
    },
    mount_wesley_bc:{
      name: "Mount Wesley", 
      coords: {
        lat: 49.308139230779084,
        lng: -124.64707688725407
      },
      elevation_m: 906,
      year: 2021
    },
    mount_olive_ab:{
      name: "Mount Olive", 
      coords: {
        lat: 51.61119059464057,
        lng: -116.4918224713054
      },
      elevation_m: 3130,
      year: 2021
    },
    ha_ling_peak_ab:{
      name: "Ha Ling Peak", 
      coords: {
        lat: 51.065039941567555,
        lng: -115.40051041445612
      },
      elevation_m: 2407,
      year: 2021
    },
    helena_peak_ab:{
      name: "Helena Peak", 
      coords: {
        lat: 51.32840372484505,
        lng: -115.93005733481455
      },
      elevation_m: 2862,
      year: 2021
    },
    forgetmenot_ridge_north_summit_ab:{
      name: "Forgetmenot Ridge North Summit", 
      coords: {
        lat: 50.79531864747603,
        lng: -114.81336887262998
      },
      elevation_m: 2229,
      year: 2021
    },
    prairie_mountain_ab:{
      name: "Prairie Mountain", 
      coords: {
        lat: 50.88931687192985,
        lng: -114.8069311943257
      },
      elevation_m: 2210,
      year: 2021
    },
    opal_ridge_ab:{
      name: "Opal Ridge", 
      coords: {
          lat: 50.785922,
          lng: -115.137083
        },
      elevation_m: 2575,
      year: 2022
      },
    grizzly_peak_ab:{
      name: "Grizzly Peak", 
      coords: {
          lat: 50.762149,
          lng: -115.119343
        },
      elevation_m: 2545,
      year: 2022
      }, 
    mount_smutwood_ab:{
      name: "Mount Smutwood", 
      coords: {
          lat: 50.800670,
          lng: -115.398394
        },
      elevation_m: 2693,
      year: 2022
      }, 
    parker_ridge_ab:{
      name: "Parker Ridge", 
      coords: {
          lat: 52.181561,
          lng: -117.089218
        },
      elevation_m: 2255,
      year: 2022
      }, 
    mount_willingdon_ab:{
      name: "Mount Willingdon", 
      coords: {
          lat: 51.756450,
          lng: -116.249051
        },
      elevation_m: 3373,
      year: 2022
      }, 
    mount_willingdon_crown_ab:{
      name: "Mount Willingdon Crown", 
      coords: {
          lat: 51.752981,
          lng: -116.235527
        },
      elevation_m: 3354,
      year: 2022
      },
    mount_mackay_ab:{
      name: "Mount Mackay", 
      coords: {
          lat: 50.851256, 
          lng: -115.119626
        },
      elevation_m: 2394,
      year: 2023
    },
    the_wedge_ab:{
      name: "The Wedge", 
      coords: {
          lat: 50.850034,
          lng: -115.134502
        },
      elevation_m: 2667,
      year: 2023
      },
    opal_north_peak_ab:{
      name: "Opal North Peak", 
      coords: {
          lat: 50.820842,
          lng: -115.144400
        },
      elevation_m: 2483,
      year: 2023
      },
    king_creek_ridge_ab:{
      name: "King Creek Ridge", 
      coords: {
          lat: 50.737500,
          lng: -115.105201
        },
      elevation_m: 2423,
      year: 2023
      },
    mt_joffre_ab:{
      name: "Mount Joffre", 
      coords: {
          lat: 50.528477,
          lng: -115.206786
        },
      elevation_m: 3450,
      year: 2023
      },
    mist_mountain_ab:{
      name: "Mist Mountain", 
      coords: {
          lat: 50.554130,
          lng: -114.910160
        },
      elevation_m: 3139,
      year: 2023
      },
    burroughs_mountain_wa:{
      name: "Burroughs Mountain", 
      coords: {
          lat: 46.901713,
          lng: -121.713637
        },
      elevation_m: 2380,
      year: 2023
      },
    crescent_spire_bc:{
      name: "Crescent Spire", 
      coords: {
          lat: 50.750315,
          lng: -116.776617
        },
      elevation_m: 2843,
      year: 2023
      },
    jumbo_mountain_bc:{
      name: "Jumbo Mountain", 
      coords: {
          lat: 50.403213,
          lng: -116.564999
        },
      elevation_m: 3390,
      year: 2023
      },
    androlumbia_ab:{
      name: "Androlumbia", 
      coords: {
          lat: 52.161586,
          lng: -117.251751
        },
      elevation_m: 3300,
      year: 2023
      },
    the_onion_ab:{
      name: "The Onion", 
      coords: {
          lat: 51.641103,
          lng: -116.502085
        },
      elevation_m: 2670,
      year: 2023
      },
    vice_president_bc:{
      name: "Vice President", 
      coords: {
          lat: 51.50275679512224,
          lng: -116.5524337141685
        },
      elevation_m: 3077,
      year: 2024
      },
    mt_hector_knob_ab:{
      name: "Mount Hector Knob", 
      coords: {
          lat: 51.57628348692926,
          lng: -116.25282349065854
        },
      elevation_m: 3386,
      year: 2024
      },
    rundeman_nor:{
      name: "Rundeman", 
      coords: {
          lat: 60.41283055993401,
          lng: 5.366504769737034
        },
      elevation_m: 568,
      year: 2024
      },
    blamanen_nor:{
      name: "Blamanen", 
      coords: {
          lat: 60.400644414335524,
          lng: 5.363543610879524
        },
      elevation_m: 554,
      year: 2024
      },
    gullfjellstoppen_nor:{
      name: "Gullfjellstoppen", 
      coords: {
          lat: 60.386354321395736,
          lng:  5.589364151591277
        },
      elevation_m: 987,
      year: 2024
      },
    predne_solisko_svk:{
      name: "Predne Solisko", 
      coords: {
          lat: 49.14946876266241,
          lng:  20.0390034725903
        },
      elevation_m: 2093,
      year: 2024
      },
    soliskovy_hrb_svk:{
      name: "Soliskovy Hrb", 
      coords: {
          lat: 49.15123716695834,
          lng:  20.036978404895436
        },
      elevation_m: 2302,
      year: 2024
      },
    ganekogotra_spn:{
      name: "Ganekogotra", 
      coords: {
          lat: 43.20174055707425,
          lng:  -2.979932783382581
        },
      elevation_m: 999,
      year: 2024
      },
    arrabatxu_spn:{
      name: "Arrabatxu", 
      coords: {
          lat: 43.200051249175424,
          lng: -2.982808111579372
        },
      elevation_m: 984,
      year: 2024
      },
    baldy_west_ab:{
      name: "Mount Baldy West", 
      coords: {
          lat: 51.000010,
          lng: -115.052185
        },
      elevation_m: 2125,
      year: 2024
      },
    baldy_south_ab:{
      name: "Mount Baldy South", 
      coords: {
          lat: 51.003178,
          lng: -115.044844
        },
      elevation_m: 2145,
      year: 2024
      },
    midnight_peak_ab:{
      name: "Midnight Peak", 
      coords: {
          lat: 50.979749,
          lng: -115.034775
        },
      elevation_m: 2348,
      year: 2024
      },
    midday_peak_ab:{
      name: "Midday Peak", 
      coords: {
          lat: 50.973973,
          lng: -115.027201
        },
      elevation_m: 2340,
      year: 2024
      },
    mount_niles_bc:{
      name: "Mount Niles", 
      coords: {
          lat: 51.505142,
          lng: -116.421050
        },
      elevation_m: 2972,
      year: 2024
      },
    mount_galatea_ab:{
      name: "Mount Galatea", 
      coords: {
          lat: 50.839622, 
          lng: -115.273452
        },
      elevation_m: 3185,
      year: 2024
      },
    mount_jellicoe_ab:{
      name: "Mount Jellicoe", 
      coords: {
          lat: 50.714495,
          lng: -115.290530
        },
      elevation_m: 3075,
      year: 2024
      },
    mount_hoffman_ab:{
      name: "Mount Hoffman", 
      coords: {
          lat: 50.605158,
          lng: -114.690404
        },
      elevation_m: 2005,
      year: 2024
      },
    clouds_rest_ca:{
      name: "Clouds Rest", 
      coords: {
          lat: 37.767689,
          lng: -119.489552
        },
      elevation_m: 3028,
      year: 2024
      },

    cox_hill_ab:{
      name: "Cox Hill", 
      coords: {
          lat: 50.990150,
          lng: -114.906649
        },
      elevation_m: 2190,
      year: 2025
      },
    grant_macewan_ab:{
      name: "Grant MacEwan Peak", 
      coords: {
          lat: 51.032846,
          lng: -115.121594
        },
      elevation_m: 2148,
      year: 2025
      },
    snow_dome_ab:{
      name: "Snow Dome", 
      coords: {
          lat: 52.186582,
          lng: -117.317222
        },
      elevation_m: 3456,
      year: 2025
      },
    vinicunca_peru:{
      name: "Vinicunca", 
      coords: {
          lat: -13.867774,
          lng: -71.303090
        },
      elevation_m: 5036,
      year: 2025
      },
    hatun_ritlyoq_peru:{
      name: "Hutan Rit'lyoq", 
      coords: {
          lat: -13.875757,
          lng: -71.312310
        },
      elevation_m: 5069,
      year: 2025
      },
    katunki_peru:{
      name: "Katunki", 
      coords: {
          lat: -13.469366,
          lng: -71.972831
        },
      elevation_m: 4182,
      year: 2025
      },
    chachani_peru:{
      name: "Chachani", 
      coords: {
          lat: -16.195187,
          lng: -71.532300
        },
      elevation_m: 6075,
      year: 2025
      },
    habel_ab:{
      name: "Mount Habel", 
      coords: {
          lat: 51.648702,
          lng: -116.571132
        },
      elevation_m: 3073,
      year: 2025
      },
    tilley_peak_ab:{
      name: "Tilley Peak", 
      coords: {
          lat: 51.671658,
          lng: -116.588729
        },
      elevation_m: 2961,
      year: 2025
      },
    highwood_ridge_ab:{
      name: "Highwood Ridge", 
      coords: {
          lat: 50.588565,
          lng: -114.992465
        },
      elevation_m: 2697,
      year: 2025
      },
    grizzly_ridge_ab:{
      name: "Grizzly Ridge", 
      coords: {
          lat: 50.582420,
          lng: -115.006180
        },
      elevation_m: 2700,
      year: 2025
      },
    mount_tyrwhitt_ab:{
      name: "Mount Trywhitt", 
      coords: {
          lat: 50.582171, 
          lng: -115.016238
        },
      elevation_m: 2874,
      year: 2025
      },
    volcano_ridge_ab:{
      name: "Volcano Ridge", 
      coords: {
          lat: 50.708419,
          lng: -114.711286
        },
      elevation_m: 2127,
      year: 2025
      },
    south_volcano_ridge_ab:{
      name: "South Volcano Ridge", 
      coords: {
          lat: 50.691296,
          lng: -114.705579
        },
      elevation_m: 1950,
      year: 2025
      },
    mount_aberdeen_ab:{
      name: "Mount Aberdeen", 
      coords: {
          lat: 51.378729,
          lng: -116.246586,
        },
      elevation_m: 3150,
      year: 2025
      },
    haddo_peak_ab:{
      name: "Haddo Peak", 
      coords: {
          lat: 51.381678,
          lng: -116.235599
        },
      elevation_m: 3070,
      year: 2025
      },
    tent_ridge_ab:{
      name: "Tent Ridge", 
      coords: {
          lat: 50.820273,
          lng: -115.373670
        },
      elevation_m: 2545,
      year: 2025
      },
    cathedral_mountain_bc:{
      name: "Cathedral Mountain", 
      coords: {
          lat: 51.396524,
          lng: -116.389994
        },
      elevation_m: 3189,
      year: 2025
      },
    mount_victoria_north_peak_bc:{
      name: "Mount Victoria North Peak", 
      coords: {
          lat: 51.384961,
          lng: -116.312689
        },
      elevation_m: 3388,
      year: 2025
      },
    mount_griffith_bc:{
      name: "Mount Griffith", 
      coords: {
          lat: 50.644389,
          lng: -116.579909
        },
      elevation_m: 2742,
      year: 2025
      },
    mount_nanette_bc:{
      name: "Mount Nanette", 
      coords: {
          lat: 50.634556,
          lng: -116.582532
        },
      elevation_m: 2917,
      year: 2025
      },
    guinns_peak_ab:{
      name: "Guinn's Peak", 
      coords: {
          lat: 50.877479,
          lng: -115.243471
        },
      elevation_m: 2617,
      year: 2025
      },
    whaleback_mountian_bc:{
      name: "Whaleback Mountain", 
      coords: {
          lat: 51.539287, 
          lng: -116.560526
        },
      elevation_m: 2612,
      year: 2025
      },
    forgetmenot_ridge_ab:{
      name: "Forgetmenot Ridge", 
      coords: {
          lat: 50.768295, 
          lng: -114.804238
        },
      elevation_m: 2332,
      year: 2025
      },
    forgetmenot_mountain_ab:{
      name: "Forgetmenot Mountain", 
      coords: {
          lat: 50.752726,  
          lng: -114.781729,
        },
      elevation_m: 2332,
      year: 2025
      },
}

  return dataset; 
}

function statsData(){
  dataset = {
    2017: {
      distance_km: 40,
      vertical_m: 2400,
    },
    2018: {
      distance_km: 89,
      vertical_m: 6800,
    },
    2019: {
      distance_km: 21,
      vertical_m: 2400,
    },
    2020: {
      distance_km: 368,
      vertical_m: 23000,
    },
    2021: {
      distance_km: 187,
      vertical_m: 16000,
    },
    2022: {
      distance_km: 106,
      vertical_m: 6500,
    },
    2023: {
      distance_km: 306,
      vertical_m: 21000,
    },
    2024: {
      distance_km: 328,
      vertical_m: 23200,
    },

    /*
    Cox Hill - 13, 780
    Grant MacEwan Peak - 12, 1060
    Balu Pass - 12, 850
    Snow Dome - 22, 1500
    Vinicunca + Hutan Rit'lyoq - 10, 600
    Katunki - 22, 1040
    Chachani - 9, 1000
    Salkantay - 79, 2800
    Habel + Tilley - 33, 2700
    Highwood + Grizzly + Tyrwhitt - 9, 1000
    Volcano Ridge + South - 17, 800
    Aberdeen + Haddo - 54, 2400
    Tent Ridge - 15, 840
    Cathedral Mountain - 20, 1700
    Mount Victoria North Peak - 20, 1700
    Mt. Griffith, Mt. Nanette - 48, 2200
    Guinns Peak & Spray Valley - 24, 1500
    Stanely Mitchell & Whaleback - 28, 1330
    Forgetmenot Traverse (North, Ridge, South) - 23, 1100
    Surprise Pass Ski Tour - 11, 900
    */
    2025: {
      distance_km: 481,
      vertical_m: 27800,
    },
  }

  return dataset;
}

// Load the map when the page is ready
loadGoogleMaps();
