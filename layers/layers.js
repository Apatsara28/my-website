var wms_layers = [];


        var lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0 = new ol.layer.Tile({
            'title': 'Cambodia, Laos, Thailand, Vietnam, Malaysia, Myanmar bilingual',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.osm-tools.org">© osm-tools.org & OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://a.tile.osm-tools.org/osm/{z}/{x}/{y}.png'
            })
        });
var lyr_SAVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11168550.000000, 1516057.659631, 11236440.000000, 1569112.545267]
                            })
                        });

lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0.setVisible(true);lyr_SAVI_1.setVisible(true);
var layersList = [lyr_CambodiaLaosThailandVietnamMalaysiaMyanmarbilingual_0,lyr_SAVI_1];
