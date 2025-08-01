var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5735729672415406,
        "pitch": 0.0006078276584222664,
        "fov": 1.755628879623973
      },
      "linkHotspots": [
        {
          "yaw": -1.215607097299209,
          "pitch": 0.05848346317719866,
          "rotation": 15.707963267948973,
          "target": "1-powder-room"
        },
        {
          "yaw": -0.03857460834628945,
          "pitch": 0.4693938136966782,
          "rotation": 3.141592653589793,
          "target": "2-living-and-dining"
        },
        {
          "yaw": 0.07409373041419443,
          "pitch": 0.07856427622444428,
          "rotation": 3.141592653589793,
          "target": "3-dining-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-powder-room",
      "name": "Powder Room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0542921496725306,
        "pitch": -0.006140152428981693,
        "fov": 1.755628879623973
      },
      "linkHotspots": [
        {
          "yaw": 2.84857935009933,
          "pitch": 0.0429735131506348,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-and-dining",
      "name": "Living and Dining",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.005628449500028054,
        "pitch": 0,
        "fov": 1.7500004301239414
      },
      "linkHotspots": [
        {
          "yaw": 0.2770676974655615,
          "pitch": 0.19048301819037405,
          "rotation": 3.141592653589793,
          "target": "3-dining-corner"
        },
        {
          "yaw": -1.134159355881657,
          "pitch": 0.27630280668432583,
          "rotation": 3.141592653589793,
          "target": "4-tv-console"
        },
        {
          "yaw": -1.5498558204932618,
          "pitch": 0.005275664415165693,
          "rotation": 0,
          "target": "5-masters-bedroom"
        },
        {
          "yaw": 2.9587165782366194,
          "pitch": 0.08574360062102215,
          "rotation": 4.71238898038469,
          "target": "0-kitchen"
        },
        {
          "yaw": -2.971772559868757,
          "pitch": 0.0866920694350668,
          "rotation": 7.853981633974483,
          "target": "1-powder-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-corner",
      "name": "Dining Corner",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.018645863489791026,
          "pitch": 0.04425244490706426,
          "rotation": 4.71238898038469,
          "target": "0-kitchen"
        },
        {
          "yaw": 0.15720021263105366,
          "pitch": 0.043715077097925104,
          "rotation": 1.5707963267948966,
          "target": "1-powder-room"
        },
        {
          "yaw": 0.18661600632558972,
          "pitch": 0.322243001247454,
          "rotation": 3.141592653589793,
          "target": "2-living-and-dining"
        },
        {
          "yaw": 1.0621336483806143,
          "pitch": 0.053928304541418726,
          "rotation": 0,
          "target": "5-masters-bedroom"
        },
        {
          "yaw": 1.103770982767113,
          "pitch": 0.2908490319834005,
          "rotation": 9.42477796076938,
          "target": "4-tv-console"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tv-console",
      "name": "TV Console",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5680979243518394,
        "pitch": 0.0017528332535494684,
        "fov": 1.5110331857463202
      },
      "linkHotspots": [
        {
          "yaw": 2.6142749944734103,
          "pitch": 0.035456276429407296,
          "rotation": 0,
          "target": "5-masters-bedroom"
        },
        {
          "yaw": 0.5905317231426892,
          "pitch": 0.4303259270916726,
          "rotation": 3.141592653589793,
          "target": "2-living-and-dining"
        },
        {
          "yaw": -0.4657028511312582,
          "pitch": 0.14254605625229289,
          "rotation": 3.141592653589793,
          "target": "3-dining-corner"
        },
        {
          "yaw": 0.6945999912294862,
          "pitch": 0.006028641415532832,
          "rotation": 7.853981633974483,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-masters-bedroom",
      "name": "Master's Bedroom",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2349884767527417,
          "pitch": 0.11595822341762307,
          "rotation": 0,
          "target": "4-tv-console"
        },
        {
          "yaw": 0.02097594193784147,
          "pitch": 0.29417343427200926,
          "rotation": 3.141592653589793,
          "target": "6-bed"
        },
        {
          "yaw": -0.900893687614424,
          "pitch": 0.06386530757164621,
          "rotation": 4.71238898038469,
          "target": "7-closet"
        },
        {
          "yaw": -1.5769028496424085,
          "pitch": 0.0824911282387859,
          "rotation": 0,
          "target": "8-masters-toilet-and-bath"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bed",
      "name": "Bed",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.37930011730861857,
          "pitch": -0.04327944323541999,
          "rotation": 0,
          "target": "4-tv-console"
        },
        {
          "yaw": 0.8622281845392834,
          "pitch": -0.08412082732986015,
          "rotation": 0,
          "target": "8-masters-toilet-and-bath"
        },
        {
          "yaw": 1.5112645291108553,
          "pitch": -0.022419886354795082,
          "rotation": 0,
          "target": "7-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-closet",
      "name": "Closet",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.959174705306541,
          "pitch": 0.14727453895374687,
          "rotation": 3.141592653589793,
          "target": "6-bed"
        },
        {
          "yaw": -2.6072372475921313,
          "pitch": 0.09990975066029328,
          "rotation": 1.5707963267948966,
          "target": "5-masters-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-masters-toilet-and-bath",
      "name": "Master's Toilet and Bath",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.604154438704974,
          "pitch": 0.013556517741246665,
          "rotation": 0,
          "target": "5-masters-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "GrandMesa ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
