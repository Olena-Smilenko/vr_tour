var APP_DATA = {
  "scenes": [
    {
      "id": "0-strae",
      "name": "Straße",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08435945130960931,
          "pitch": 0.45303696207190214,
          "rotation": 0,
          "target": "1-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10838207797863753,
          "pitch": 0.26307833596387553,
          "rotation": 0,
          "target": "2-korridor"
        },
        {
          "yaw": 3.1204447294118705,
          "pitch": 0.45475635503470535,
          "rotation": 0,
          "target": "0-strae"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-korridor",
      "name": "Korridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7203701000646223,
          "pitch": 0.5775796106247526,
          "rotation": 1.5707963267948966,
          "target": "3-geldautomat"
        },
        {
          "yaw": -1.7087798131206942,
          "pitch": 0.4262181732004482,
          "rotation": 4.71238898038469,
          "target": "4-bcher"
        },
        {
          "yaw": -1.7055601608755424,
          "pitch": 0.3101818014940303,
          "rotation": 7.853981633974483,
          "target": "5-geldterminal"
        },
        {
          "yaw": -3.017543418713828,
          "pitch": 0.18095181527447757,
          "rotation": 0,
          "target": "1-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-geldautomat",
      "name": "Geldautomat",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.591683639246785,
          "pitch": 0.933824652380002,
          "rotation": 4.71238898038469,
          "target": "4-bcher"
        },
        {
          "yaw": -1.581643369129047,
          "pitch": 0.608700500774102,
          "rotation": 1.5707963267948966,
          "target": "5-geldterminal"
        },
        {
          "yaw": 1.5363687584522152,
          "pitch": 0.6497089457486815,
          "rotation": 1.5707963267948966,
          "target": "2-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bcher",
      "name": "Bücher",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8072024239498212,
          "pitch": 0.9521802825749717,
          "rotation": 1.5707963267948966,
          "target": "5-geldterminal"
        },
        {
          "yaw": 1.5351346601233464,
          "pitch": 0.8624793659179879,
          "rotation": 4.71238898038469,
          "target": "3-geldautomat"
        },
        {
          "yaw": 1.562225612353477,
          "pitch": 0.384928192747088,
          "rotation": 1.5707963267948966,
          "target": "2-korridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-geldterminal",
      "name": "Geldterminal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.188041398740719,
          "pitch": 0.9113657524778489,
          "rotation": 1.5707963267948966,
          "target": "4-bcher"
        },
        {
          "yaw": 2.172735419698414,
          "pitch": 0.5776672444800184,
          "rotation": 10.995574287564278,
          "target": "3-geldautomat"
        },
        {
          "yaw": 2.1762728650899152,
          "pitch": 0.3531388236044588,
          "rotation": 1.5707963267948966,
          "target": "2-korridor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
