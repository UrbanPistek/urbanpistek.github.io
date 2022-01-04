// Initialize and add the map
function initMap() {

  // Center Point
  const center = { lat: 42.666318, lng:  -108.023603 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4, // 0 is no zoom
    center: center,
    mapTypeId: 'terrain'
  });

  displayMountains(map);
}

function displayMountains(map){

  let data = mapData();

  for(const item in data){
    console.log(data[item].name)
      const infowindow = new google.maps.InfoWindow({
    content: String(data[item].name),
  });

    const marker = new google.maps.Marker({
      position: data[item].coords,
      map: map,
      icon: "assets/img/map_icon.svg",
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

function mapData(){
  dataset = {
    poccatera_ridge_ab:{
      name: "Poccaterra Rdige", 
      coords: {
        lat: 50.60035099731596,
        lng: -115.01756647780198
      },
      elevation_m: 2664
    },
    ptarmigan_peak_ab:{
    name: "Ptarmigan Peak", 
    coords: {
        lat: 51.491753360360384,
        lng: -116.08864625382944
      },
    elevation_m: 3035
    },
    mount_swansea_bc:{
    name: "Mount Swansea", 
    coords: {
        lat: 50.507754294206045,
        lng: -115.95370252242223
      },
    elevation_m: 1731
    },
    mount_fable_ab:{
    name: "Mount Fable", 
    coords: {
        lat: 51.11843881418455,
        lng: -115.22642815504258
      },
    elevation_m: 2702
    },
    mount_fairview_ab:{
    name: "Fairview Mountain", 
    coords: {
        lat: 51.40011638194512,
        lng: -116.22553471571234
      },
    elevation_m: 2744
    },
    flinsch_peak_mt:{
    name: "Flinsch Peak", 
    coords: {
        lat: 48.498306054100425,
        lng: -113.46591216004508
      },
    elevation_m: 2812
    },
    mount_richardson_ab:{
    name: "Mount Richardson", 
    coords: {
        lat: 51.49542641072814,
        lng: -116.12342607836774
      },
    elevation_m: 3086
    },
    pika_peak_ab:{
    name: "Pika Peak", 
    coords: {
        lat: 51.493670191206384,
        lng: -116.10334673399639
      },
    elevation_m: 3053
    },
    heart_mountain_ab:{
    name: "Heart Mountain", 
    coords: {
        lat: 51.04034045114017,
        lng: -115.13804893429214
      },
    elevation_m: 2135
    },
    pikes_peak_co:{
    name: "Pikes Peak", 
    coords: {
        lat: 38.84108181103397,
        lng: -105.04262832615372
      },
    elevation_m: 4302
    },
    mount_elbert_co:{
    name: "Mount Elbert", 
    coords: {
        lat: 39.11821410518518,
        lng: -106.44604595707729
      },
    elevation_m: 4401
    },
    peak_eight_co:{
    name: "Peak Eight", 
    coords: {
        lat: 39.4732734858814,
        lng: -106.10361565762416
      },
    elevation_m: 3955
    },
    wastooch_ridge_ab:{
    name: "Wastooch Ridge", 
    coords: {
        lat: 50.9286120286826,
        lng: -115.04268717657192
      },
    elevation_m: 2330
    },
    old_baldy_peak_ab:{
    name: "Old Baldy Peak", 
    coords: {
        lat: 50.9105542210202,
        lng: -115.07149286474434
      },
    elevation_m: 2728
    },
    mount_mcdougall_ab:{
    name: "Mount McDougall", 
    coords: {
        lat: 50.897482660613974,
        lng: -115.05761260373013
      },
    elevation_m: 2726
    },
    volcano_peak_ab:{
    name: "Volcano Peak", 
    coords: {
        lat: 50.887004270062675,
        lng: -115.07432650261168
      },
    elevation_m: 2554
    },
    heather_ridge_ab:{
    name: "Heather Ridge", 
    coords: {
        lat: 51.47202664256885,
        lng: -116.05305335822156
      },
    elevation_m: 2636
    },
    mount_aylmer_ab:{
    name: "Mount Aylmer", 
    coords: {
        lat: 51.32529002983764,
        lng: -115.43191454410714
      },
    elevation_m: 3162
    },
    cyclone_mountain_ab:{
    name: "Cyclone Mountain", 
    coords: {
        lat: 51.56880250393304,
        lng: -116.07244375124378
      },
    elevation_m: 3050
    },
    pipestone_mountain_ab:{
    name: "Pipestone Mountain", 
    coords: {
        lat: 51.56285811858075,
        lng: -116.05166342919473
      },
    elevation_m: 2971
    },
    pipestone_towers_ab:{
    name: "Pipestone Towers", 
    coords: {
        lat: 51.56061966074995,
        lng: -116.03953046768841
      },
    elevation_m: 2800
    },
    sulphur_mountain_ab:{
    name: "Sulphur Mountain", 
    coords: {
        lat: 51.12397461621794,
        lng: -115.55605453144616
      },
    elevation_m: 2451
    },
    mount_jimmy_simpson_ab:{
    name: "Mount Jimmy Simpson", 
    coords: {
        lat: 51.68711777496557,
        lng: -116.50607281712512
      },
    elevation_m: 2966
    },
    mount_temple_ab:{
    name: "Mount Temple", 
    coords: {
        lat: 51.35115382855032,
        lng: -116.20724946762803
      },
    elevation_m: 3544
    },
    mount_drummond_ab:{
    name: "Mount Drummond", 
    coords: {
        lat: 51.59003423031431,
        lng: -116.01266769528337
      },
    elevation_m: 3148
    },
    mount_sparrowhawk_ab:{
    name: "Mount Sparrowhawk", 
    coords: {
        lat: 50.9410375359795,
        lng: -115.26516344801985
      },
    elevation_m: 3121
    },
    powderface_ridge_ab:{
    name: "Powderface Ridge", 
    coords: {
        lat: 50.843575638347374,
        lng: -114.85121672318587
      },
    elevation_m: 2210
    },
    packers_peak_ab:{
    name: "Packers Peak", 
    coords: {
        lat: 51.49460325535947,
        lng: -116.06830279437892
      },
    elevation_m: 2550
    },
    gap_peak_ab:{
    name: "Gap Peak", 
    coords: {
        lat: 51.091887177509925,
        lng: -115.2212394212465
      },
    elevation_m: 2517
    },
    porcupine_ridge_ab:{
    name: "Porcupine Ridge", 
    coords: {
        lat: 50.956718521060175,
        lng: -115.04683647249315
      },
    elevation_m: 2260
    },
    loder_peak_ab:{
    name: "Loder Peak", 
    coords: {
        lat: 51.09392879177906,
        lng: -115.1442144774476
      },
    elevation_m: 2088
    },
    mount_frank_ab:{
    name: "Mount Frank", 
    coords: {
        lat: 52.0542414499305,
        lng: -116.50133877774724
      },
    elevation_m: 2840
    },
    whirlpool_ridge_ab:{
    name: "Whirlpool Ridge", 
    coords: {
        lat: 52.0465614404953,
        lng: -116.49152700794414
      },
    elevation_m: 2590
    },
    ships_prow_ab:{
    name: "Ships Prow", 
    coords: {
        lat: 51.04549617788439,
        lng: -115.3791721822401
      },
    elevation_m: 2636
    },
    mount_james_walker_ab:{
    name: "Mount James Walker", 
    coords: {
        lat: 50.805175320175074,
        lng: -115.22014336017992
      },
    elevation_m: 3035
    },
    alpha_centauri_bc:{
    name: "Alpha Centauri", 
    coords: {
        lat: 50.60613434604467,
        lng: -116.53178740736116
      },
    elevation_m: 3070
    },
    north_star_peak_bc:{
    name: "North Star Peak", 
    coords: {
        lat: 50.610422852425145,
        lng: -116.5391493955364
      },
    elevation_m: 3123
    },
    fithty_forty_peak_bc:{
    name: "5040 Peak", 
    coords: {
        lat: 49.192049873865386,
        lng: -125.28237349686184
      },
    elevation_m: 1532
    },
    mount_wesley_bc:{
    name: "Mount Wesley", 
    coords: {
        lat: 49.308139230779084,
        lng: -124.64707688725407
      },
    elevation_m: 906
    },
    mount_olive_ab:{
    name: "Mount Olive", 
    coords: {
        lat: 51.61119059464057,
        lng: -116.4918224713054
      },
    elevation_m: 3130
    },
    ha_ling_peak_ab:{
    name: "Ha Ling Peak", 
    coords: {
        lat: 51.065039941567555,
        lng: -115.40051041445612
      },
    elevation_m: 2407
    },
    helena_peak_ab:{
    name: "Helena Peak", 
    coords: {
        lat: 51.32840372484505,
        lng: -115.93005733481455
      },
    elevation_m: 2862
    },
    mount_forgetmenot_ab:{
    name: "Mount Forgetmenot", 
    coords: {
        lat: 50.79531864747603,
        lng: -114.81336887262998
      },
    elevation_m: 2229
    },
    prairie_mountain_ab:{
    name: "Prairie Mountain", 
    coords: {
        lat: 50.88931687192985,
        lng: -114.8069311943257
      },
    elevation_m: 2210
    }
  }

  return dataset; 
}