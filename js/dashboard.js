var map = L.map('map').setView([22.9734, 78.6569], 6);
var layerLabeling = [];

//OSM
const o_std = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
});

//GSI Pale
const t_pale = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
  attribution:
    "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>kikakuchousei</a>",
});

//GSI Ort
const t_ort = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
  attribution:
    "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>kikakuchousei</a>",
});


// Streets
// Topographic
// NationalGeographic
// Oceans
// Gray
// DarkGray
// Imagery
// ImageryClarity (added in 2.1.3)
// ImageryFirefly (added in 2.2.0)
// ShadedRelief
// Terrain
// USATopo (added in 2.0.0)
// Physical (added in 2.2.0)
/*var streetsBasemapLayer = L.esri.basemapLayer('Streets');
var nationalGeographicBasemapLayer = L.esri.basemapLayer('NationalGeographic');
var oceansBasemapLayer = L.esri.basemapLayer('Oceans');
var grayBasemapLayer = L.esri.basemapLayer('Gray');
var darkGrayBasemapLayer = L.esri.basemapLayer('DarkGray');
var imageryBasemapLayer = L.esri.basemapLayer('Imagery');
var imageryClarityBasemapLayer = L.esri.basemapLayer('ImageryClarity');
var imageryFireflyBasemapLayer = L.esri.basemapLayer('ImageryFirefly');
var shadedReliefBasemapLayer = L.esri.basemapLayer('ShadedRelief');
var terrainBasemapLayer = L.esri.basemapLayer('Terrain');
var usaTopoBasemapLayer = L.esri.basemapLayer('USATopo');
var physicalBasemapLayer = L.esri.basemapLayer('Physical');

var topographicBasemapLayer = L.esri.basemapLayer('Topographic');
topographicBasemapLayer.addTo(map);

var baseMaps ={
  "DarkGray":darkGrayBasemapLayer,
  "Gray":grayBasemapLayer,
  "Imagery":imageryBasemapLayer,
  "ImageryClarity": imageryClarityBasemapLayer,
  "ImageryFirefly": imageryFireflyBasemapLayer,
  "NationalGeographic": nationalGeographicBasemapLayer,
  "Oceans": oceansBasemapLayer,
  "Physical":physicalBasemapLayer,
  "ShadedRelief": shadedReliefBasemapLayer,
  "Streets": streetsBasemapLayer,
  "Terrain":terrainBasemapLayer,
  "Topographic": topographicBasemapLayer,
  "USATopo": usaTopoBasemapLayer
}*/

var OpenTopoMap = L.tileLayer.provider("OpenTopoMap", {
  maxZoom: 17,
  attribution: '&copy; OpenStreetMap contributors, <a href="https://opentopomap.org">OpenTopoMap</a>'
});

OpenTopoMap.addTo(map)
// Remove leaflet from attribution
map.attributionControl.setPrefix('')

var osmGeocoder = new L.Control.OSMGeocoder({ placeholder: 'Search location...' });

map.addControl(osmGeocoder);

var imageUrl = 'image/Dindori.png',
  imageBounds = [[19.9734, 73.6569], [24.38985, 85.7615]];
// var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
//     imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
  var imageLayer = L.imageOverlay(imageUrl, imageBounds);//.addTo(map);

var baseMaps = {
  //"OpenTopoMap": OpenTopoMap
};
// var baseMaps = {
//   "Grayscale": grayscale,
//   Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//       layers: 'TOPO-WMS'
//   }),

//   Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//       layers: 'OSM-Overlay-WMS'
//   }),

//   'Topography, then places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//       layers: 'TOPO-WMS,OSM-Overlay-WMS'
//   }),

//   'Places, then topography': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//       layers: 'OSM-Overlay-WMS,TOPO-WMS'
//   })
// };



// var geojsonLayer = L.geoJson.ajax('data/Dams_MP.geojson');
// geojsonLayer.addUrl("data/District.geojson");
// geojsonLayer.addUrl("data/Drainage.geojson");
// // geojsonLayer.addUrl("data/MADHYA_PRADESH_AWS.geojson");
// // geojsonLayer.addUrl("data/MADHYA_PRADESH_AWS_ARG.geojson");
// geojsonLayer.addUrl("data/Major_Catchment.geojson");
// geojsonLayer.addUrl("data/State.geojson");
// geojsonLayer.addUrl("data/Sub_Catchment.geojson");
// geojsonLayer.addUrl("data/Sub_Sub_Catchment.geojson");
// geojsonLayer.addTo(map);


var layerStyle = {
  DamsPointStyle: {
    fillColor: '#787673',
    //  fillColor: 'red',
    weight: 1,
    opacity: 1,
    color: '#787673',
    // color: 'red',
    dashArray: '1',
    fillOpacity: 1
  },
  State_Style: {
    fillColor: '#fff',
    fillOpacity: 0,
    color: '#000',
    dashArray: 3,
    weight: 2
  },
  District_Style: {
    fillColor: '#fff',
    fillOpacity: 0,
    color: '#686868',
    dashArray: 3,
    weight: 2
  },
  MajorCatchment_Style: {
    fillColor: '#fff',
    fillOpacity: 0,
    color: '#e69900',
    dashArray: 1,
    weight: 1
  },
  SubCatchment_Style: {
    //fillColor: '#004ca8',
    //fillOpacity: .5,
    color: '#004ca8',
    dashArray: 1,
    weight: 1
  },
  SubSubCatchment_Style: {
    //fillColor: '#004ca8',
    //fillOpacity: .5,
    color: '#b2b2b2',
    dashArray: 1,
    weight: 1
  },
  Reservior_Style: {
    fillColor: '#00c3ff',
    fillOpacity: 1,
    //color:'#00c3ff',
    dashArray: 0,
    weight: 0
  },
  Waterbody_Style: {
    fillColor: '#00c3ff',
    fillOpacity: 1,
    //color:'#00c3ff',
    dashArray: 0,
    weight: 0
  },
  Drainage_Style: {
    fillColor: '#00a2ff',
    fillOpacity: 1,
    weight: 0.5,
    color: '#00a2ff',
    opacity: 1
  }
}

var allGD = configureALLGD();
var dams = configureDams();
var district = configureDistrict();
var drainage = configureDrainage();
var majarCatchment = configureMajorCatchment();
var raingauge = configureRainGauge();
var reservior = configureReservior();
var state = configureState();
var subCatchment = configureSubCatchment();
var subsubCatchment = configureSubSubCatchment();
var waterbody = configureWaterbody();
var overlayMaps = {
  "ALL_GD_06082021_final87nos_2": allGD,
  "Dams MP": dams,
  "District": district,
  "Drainage": drainage,
  "Major Catchment": majarCatchment,
  "Reservior": reservior,
  "State": state,
  "Sub Catchment": subCatchment,
  "Sub Sub Catchment": subsubCatchment,
  "Waterbody": waterbody,

};
var overlaysTree = {
  label: 'Boundary',
  selectAllCheckbox: true,
  children: [
    {
      label: 'Administrative',
      selectAllCheckbox: true,
      children: [
        { label: 'District', layer: district },
        { label: 'State', layer: state }
      ]
    },
    {
      label: 'Hydrology & WR',
      selectAllCheckbox: true,
      children: [
        { label: 'All GD', layer: allGD },
        { label: 'Dams MP', layer: dams },
        { label: 'Drainage', layer: drainage },
        { label: 'Raingauge', layer: raingauge },
        { label: 'Reservior', layer: reservior },
        { label: 'Sub Catchment', layer: subCatchment },
        { label: 'Sub Sub Catchment', layer: subsubCatchment },
        { label: 'Waterbody', layer: waterbody },
        { label: 'Major Catchment', layer: majarCatchment },
        { label: 'OSM', layer: o_std },
        { label: 'GSI Pale', layer: t_pale },
        { label: 'GSI Ort', layer: imageLayer }
      ]
    }

  ]
}

if (window.matchMedia("(max-width: 767px)").matches) {
  L.control.layers.tree(baseMaps, overlaysTree).addTo(map);
} else {
  L.control.layers.tree(baseMaps, overlaysTree, { autoZIndex: true, sortLayers: false, collapsed: false, position: 'topright' }).addTo(map);
}


/*
To configure all GD layer for the application
1.  Load geojson
2.  Draw small points on map
3.  Configure Popup with GD's information
 */
function configureALLGD() {
  var renderer = L.canvas();
  var allGD = L.geoJson.ajax('data/ALL_GD_06082021_final87nos_2.geojson', {
    pointToLayer: function (feature, latlng) {
      // console.log(feature.properties.Sation_Nam);
      var gdIcon = L.icon({
        iconUrl: 'image/markers/gd.png',
        iconSize: [8, 8], // size of the icon        
        //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location        
        //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
      var m = L.marker(latlng, {
        icon: gdIcon
      });

      m.bindTooltip(feature.properties.Sation_Nam, {
        permanent: true,
        direction: "center",
        className: "custom-tooltip-nobg",
        opacity: 0
      });

      return m;
    },

  });

  allGD.bindPopup(function (layer) {
    return "<p>" + layer.feature.properties.Sation_Nam + "</p>";
  });
  createLabelFeature(allGD, 9);
  return allGD;
}




/*
To configure dam layer for the application
1.  Load geojson
2.  Draw small points on map
3.  Configure Popup with dam's information
 */
function configureDams() {
  var dams = L.geoJson.ajax('data/Dams_MP_Rev01.geojson', {
    pointToLayer: function (feature, latlng) {
      // console.log(feature);
      // var m = L.marker(latlng, {
      //   icon: L.divIcon({
      //     iconSize: null,
      //     className: 'label',
      //     html: '<div>' + feature.properties.Name + '</div>'
      //   })
      // }) 
      var m = L.circleMarker(latlng, layerStyle.DamsPointStyle);
      m.bindTooltip(feature.properties.Name, {
        permanent: true,
        direction: "center",
        className: "custom-tooltip-nobg",
        opacity: 0
      });
      //m.bindLabel("Manish");
      m.setRadius(2);
      return m;
    },
    //   onEachFeature: function (feature, layer) {
    //     //console.log(layer);
    //     layer.bindLabel(feature.geometry.coordinates.toString());
    //     layer.showLabel();
    //     // layer.bindLabel('Manish').addTo(map);
    //   }
  });

  dams.bindPopup(function (layer) {
    console.log(layer.feature.properties);
    return "<p><img width=240 height=240 src='image/01.jpg'/></><p>" + "<b>Name: </b>" + layer.feature.properties.Name + "<br>"
      + "<b>River: </b>" + layer.feature.properties.River + "<br>"
      + "<b>Dam Type: </b>" + layer.feature.properties.Dam_Type + "<br>"
      + "<b>Gross Storage: </b>" + layer.feature.properties.Gross__Sto + "<br>"
      + "<b>Purpose: </b>" + layer.feature.properties.Purpose + "<br>"
      + "<a target='_blank' href='chart.html?id=" + layer.feature.properties.UID + "&name=" + encodeURIComponent(layer.feature.properties.Name) + "'>Time Series Visualization</a>"
      + '</p>';
  });
  dams.addTo(map);
  createLabelFeature(dams, 9);
  return dams;
}

/**
 * To create label fetaure for the layer 
 * @param {*} layer 
 */
function createLabelFeature(layer, zoomLevel) {
  var obj = {};
  obj["visible"] = false;
  obj["layer"] = layer;
  obj["zoom"] = zoomLevel;
  layerLabeling.push(obj);
}

/*
To configure district layer for the application
1.  Load geojson
2.  Configure Popup with district's information
 */
function configureDistrict() {
  var district = L.geoJson.ajax('data/District.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.District_Style);
      layer.bindTooltip(feature.properties.DISTRICT, {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  district.bindPopup(function (layer) {
    //console.log(layer.feature.properties);
    return "<p>" + "<b>District: </b>" + layer.feature.properties.DISTRICT;
  });
  district.addTo(map);
  return district;
}

/*
To configure dam layer for the application
1.  Load geojson
2.  Configure Popup with drainage's information
 */
function configureDrainage() {
  var drainage = L.geoJson.ajax('data/Drainage.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.Drainage_Style);
      layer.bindTooltip('comming soon', {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  drainage.bindPopup(function (layer) {
    //console.log(layer.feature.properties);
    return 'comming soon';
  });
  return drainage; blue
}

/*
To configure raingauge layer for the application
1.  Load geojson
2.  Draw small points on map
3.  Configure Popup with raingauge's information
 */
function configureRainGauge() {
  var renderer = L.canvas();
  var raingauge = L.geoJson.ajax('data/ALL_GD_06082021_final87nos_2.geojson', {
    pointToLayer: function (feature, latlng) {
      var gdIcon = L.icon({
        iconUrl: 'image/markers/rg.png',
        iconSize: [10, 10], // size of the icon        
        //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location        
        //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
      var m = L.marker(latlng, {
        icon: gdIcon
      });

      m.bindTooltip(feature.properties.Sation_Nam, {
        permanent: true,
        direction: "center",
        className: "custom-tooltip-nobg",
        opacity: 0
      });

      return m;
    },

  });

  raingauge.bindPopup(function (layer) {
    return "<p>" + layer.feature.properties.Sation_Nam + "</p>";
  });
  createLabelFeature(raingauge, 9);
  return raingauge;
}


/*
To configure reservior layer for an application
1.  Load geojson
2.  Configure popup with reservior's infomation
*/
function configureReservior() {
  var reservior = L.geoJson.ajax('data/Reservior.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.Reservior_Style);
      layer.bindTooltip(feature.properties.name, {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  reservior.bindPopup(function (layer) {
    console.log(layer.feature.properties);
    return "<p><img alt='test' width=240 height=240 src='image/02.jpg'/><br>"
      + "<b>Name: </b>" + layer.feature.properties.name + "<br>"
      + "<a target='_blank' href='chart.html?id=" + layer.feature.properties.osm_id + "'>Time Series Visualization</a>"
      + "</p>";
  });
  reservior.addTo(map);
  return reservior;
}

/*
To configure state layer
1.  Load geojson
2.  Configure popup with state's infomation
*/
function configureState() {
  var state = L.geoJson.ajax('data/State.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.State_Style);
      layer.bindTooltip(feature.properties.ST_NM, {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  state.bindPopup(function (layer) {
    // console.log(layer.feature.properties);
    return "<p>" + "<b>State: </b>" + layer.feature.properties.ST_NM + "</p>";
  });
  // L.polygon().bindTooltip("Testing").addTo(map);
  // L.rectangle([[48.84, 2.34], [48.86, 2.36]]).bindTooltip("test").addTo(map);
  state.addTo(map);
  return state;
}

/*
To configure waterbody layer
1.  Load geojson
2.  Configure popup with waterbody's infomation
*/
function configureWaterbody() {
  var waterbody = L.geoJson.ajax('data/Waterbody.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.Waterbody_Style);
      layer.bindTooltip(feature.properties.name, {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  waterbody.bindPopup(function (layer) {
    // console.log(layer.feature.properties);
    return "<p>" + "<b>Name: </b>" + layer.feature.properties.name + "</p>";
  });
  return waterbody;
}

/*
To configure major catchment layer
1.  Load geojson
2.  Configure popup with major catchment's infomation
*/
function configureMajorCatchment() {
  var majarCatchment = L.geoJson.ajax('data/Major_Catchment.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.MajorCatchment_Style);
      layer.bindTooltip("feature.properties.name", {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  majarCatchment.bindPopup(function (layer) {
    // console.log(layer.feature.properties);
    return "<p>" + "<b>Name: </b>" + "layer.feature.properties.name" + "</p>";
  });
  return majarCatchment;
}

/*
To configure sub catchment layer
1.  Load geojson
2.  Configure popup with sub catchment's infomation
*/
function configureSubCatchment() {
  var subCatchment = L.geoJson.ajax('data/Sub_Catchment.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.SubCatchment_Style);
      layer.bindTooltip("feature.properties.name", {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  subCatchment.bindPopup(function (layer) {
    // console.log(layer.feature.properties);
    return "<p>" + "<b>Name: </b>" + "layer.feature.properties.name" + "</p>";
  });
  return subCatchment;
}

/*
To configure sub sub catchment layer
1.  Load geojson
2.  Configure popup with sub catchment's infomation
*/
function configureSubSubCatchment() {
  var subsubCatchment = L.geoJson.ajax('data/Sub_Sub_Catchment.geojson', {
    onEachFeature: function (feature, layer) {
      layer.setStyle(layerStyle.SubSubCatchment_Style);
      layer.bindTooltip("feature.properties.name", {
        className: 'custom-tooltip-withbg'
      });
    }
  });
  subsubCatchment.bindPopup(function (layer) {
    // console.log(layer.feature.properties);
    return "<p>" + "<b>Name: </b>" + "layer.feature.properties.name" + "</p>";
  });
  return subsubCatchment;
}

//var damVisible;

map.on('zoomend', function (e) {
  // console.log(map.getZoom());
  layerLabeling.map(function (o, i) {
    if (map.getZoom() > o.zoom) {
      if (!o.visible) {
        o.layer.eachLayer(function (l, i) {
          try {
            if (typeof l.setRadius === "function") {
              l.setRadius(4);
            }
            l._tooltip.setOpacity(1);
          }
          catch (e) {
            console.log(e);
          }
        });
        o.visible = true;
      }
    } else {
      if (o.visible) {
        o.layer.eachLayer(function (l) {
          try {
            if (typeof l.setRadius === "function") {
              l.setRadius(2);
            }
            l._tooltip.setOpacity(0);
          }
          catch (e) {
            console.log(e);
          }
        });
        o.visible = false;
      }
    }
  });
});


map.addControl(new L.Control.Fullscreen({
  title: {
    'false': 'View Fullscreen',
    'true': 'Exit Fullscreen'
  }
}));

// add the weather control
// L.control.weather({
//   lang: "es",
//   units: "metric"
// }).addTo(map);


//AddLayer
const Map_AddLayer = {
  'OSM': o_std,
  'GSI Pale': t_pale,
  'GSI Ort': imageLayer,
};

//OpacityControl
L.control
  .opacity(Map_AddLayer, {
    collapsed: true,
    //label: 'Layers Opacity',
    position: 'bottomleft'
  })
  .addTo(map);

// polylineMeasure
// L.control.polylineMeasure({
//   showClearControl: true,
//   showBearings: true,
//   showUnitControl: true
// }).addTo(map);

// To add measure control
// var measureControl = L.control.measure({
//   position: 'topleft',
//   primaryLengthUnit: 'meters',
//   //secondaryLengthUnit: 'meters',
//   primaryAreaUnit: 'hectares',
//   //secondaryAreaUnit: 'sqmeters',
//   activeColor: '#FF0000',
//   completedColor: '#FF0000'
// });
// measureControl.addTo(map);

