// Auto-generated path/road rooms
// Generated: 2025-12-29T07:03:42.225Z
// Total rooms: 2855

export const pathRooms = {
  "path_connect_buckland_kitchen_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "erebor_armory",
      "north": "path_connect_buckland_kitchen_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_buckland_kitchen_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_buckland_kitchen_1",
      "north": "path_connect_buckland_kitchen_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_buckland_kitchen_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_buckland_kitchen_2",
      "north": "path_connect_buckland_cellar_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_buckland_cellar_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_buckland_kitchen_3",
      "north": "path_connect_buckland_cellar_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_buckland_cellar_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_buckland_cellar_1",
      "north": "path_old_forest_barrow_downs_8"
    },
    "items": [],
    "enemies": []
  },
  "path_old_forest_barrow_downs_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_buckland_cellar_2",
      "north": "path_old_forest_barrow_downs_13"
    },
    "items": [],
    "enemies": []
  },
  "path_old_forest_barrow_downs_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_old_forest_barrow_downs_8",
      "north": "path_old_forest_barrow_downs_19"
    },
    "items": [],
    "enemies": []
  },
  "path_old_forest_barrow_downs_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_old_forest_barrow_downs_13",
      "north": "path_old_forest_barrow_downs_24"
    },
    "items": [],
    "enemies": []
  },
  "path_old_forest_barrow_downs_24": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_old_forest_barrow_downs_19",
      "east": "riverbank_forest_river_0_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_0_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "path_old_forest_barrow_downs_24",
      "south": "riverbank_forest_river_0_7_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_0_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_forest_river_0_3_0_1",
      "south": "riverbank_forest_river_1_1_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_forest_river_0_7_1_0",
      "south": "riverbank_forest_river_1_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_forest_river_1_1_1_0",
      "south": "river_forest_river_1_3"
    },
    "items": [],
    "enemies": []
  },
  "river_forest_river_1_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_forest_river_1_1_0_1",
      "south": "riverbank_forest_river_1_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_forest_river_1_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_forest_river_1_3",
      "south": "riverbank_forest_river_1_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_forest_river_1_3_1_0",
      "south": "riverbank_forest_river_1_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_forest_river_1_5_1_0",
      "south": "river_forest_river_1_7"
    },
    "items": [],
    "enemies": []
  },
  "river_forest_river_1_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_forest_river_1_5_0_1",
      "south": "riverbank_forest_river_1_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_forest_river_1_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_forest_river_1_7",
      "east": "riverbank_forest_river_1_9_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_forest_river_1_7_1_0",
      "north": "riverbank_forest_river_1_9_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_9_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_forest_river_1_9_1_0",
      "north": "river_forest_river_1_1"
    },
    "items": [],
    "enemies": []
  },
  "river_forest_river_1_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_forest_river_1_9_0_1",
      "north": "riverbank_forest_river_1_1_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_forest_river_1_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_forest_river_1_1",
      "north": "riverbank_forest_river_1_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_forest_river_1_1_1",
      "north": "riverbank_forest_river_1_2_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_forest_river_1_1_2",
      "north": "riverbank_forest_river_2_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_2_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_forest_river_1_2_1",
      "north": "riverbank_forest_river_0_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_0_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_forest_river_2_0_2",
      "north": "riverbank_forest_river_1_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_1_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_forest_river_0_0_2",
      "north": "riverbank_forest_river_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_forest_river_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_forest_river_1_2_2",
      "north": "river_forest_river_2_1"
    },
    "items": [],
    "enemies": []
  },
  "river_forest_river_2_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_forest_river_2_0_1",
      "north": "riverbank_forest_river_2_1_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_forest_river_2_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_forest_river_2_1",
      "east": "path_connect_bree_east_road_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_bree_east_road_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "riverbank_forest_river_2_1_1",
      "east": "path_connect_bree_east_road_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_bree_east_road_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_bree_east_road_1",
      "east": "path_shire_bree_2"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_bree_east_road_2",
      "east": "path_shire_bree_3"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_2",
      "east": "path_shire_bree_4"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_3",
      "east": "path_shire_bree_5"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_4",
      "east": "path_shire_bree_6"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_5",
      "east": "path_shire_bree_7"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_6",
      "east": "path_shire_bree_8"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_7",
      "east": "path_shire_bree_9"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_8",
      "east": "path_shire_bree_14"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_9",
      "east": "path_shire_bree_13"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_bree_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_bree_14",
      "south": "path_bree_weathertop_8"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_weathertop_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_shire_bree_13",
      "south": "path_bree_weathertop_13"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_weathertop_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_weathertop_8",
      "south": "path_bree_weathertop_18"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_weathertop_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_weathertop_13",
      "south": "path_bree_weathertop_24"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_weathertop_24": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_weathertop_18",
      "south": "path_bree_weathertop_29"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_weathertop_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_weathertop_24",
      "south": "path_bree_weathertop_34"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_weathertop_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_weathertop_29",
      "south": "path_bree_weathertop_39"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_weathertop_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_weathertop_34",
      "south": "road_bree_weathertop_8"
    },
    "items": [],
    "enemies": []
  },
  "road_bree_weathertop_8": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "path_bree_weathertop_39",
      "south": "road_bree_weathertop_9"
    },
    "items": [],
    "enemies": []
  },
  "road_bree_weathertop_9": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "road_bree_weathertop_8",
      "south": "road_bree_weathertop_11"
    },
    "items": [],
    "enemies": []
  },
  "road_bree_weathertop_11": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "road_bree_weathertop_9",
      "south": "road_bree_weathertop_12"
    },
    "items": [],
    "enemies": []
  },
  "road_bree_weathertop_12": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "road_bree_weathertop_11",
      "south": "path_connect_weathertop_approach_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_weathertop_approach_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "road_bree_weathertop_12",
      "west": "path_connect_weathertop_approach_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_weathertop_approach_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_weathertop_approach_1",
      "west": "path_connect_weathertop_summit_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_weathertop_summit_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_weathertop_approach_2",
      "west": "path_connect_weathertop_summit_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_weathertop_summit_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_weathertop_summit_1",
      "west": "path_connect_weathertop_summit_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_weathertop_summit_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_weathertop_summit_2",
      "west": "path_connect_weathertop_base_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_weathertop_base_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_weathertop_summit_3",
      "west": "path_weathertop_rivendell_3"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_weathertop_base_1",
      "west": "path_weathertop_rivendell_8"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_weathertop_rivendell_3",
      "west": "path_weathertop_rivendell_9"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_weathertop_rivendell_8",
      "west": "path_weathertop_rivendell_13"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_weathertop_rivendell_9",
      "west": "path_weathertop_rivendell_18"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_weathertop_rivendell_13",
      "west": "path_weathertop_rivendell_23"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_weathertop_rivendell_18",
      "west": "path_weathertop_rivendell_26"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_weathertop_rivendell_23",
      "west": "path_weathertop_rivendell_29"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_weathertop_rivendell_26",
      "south": "path_weathertop_rivendell_34"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_weathertop_rivendell_29",
      "east": "path_weathertop_rivendell_39"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_34",
      "east": "path_weathertop_rivendell_43"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_43": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_39",
      "east": "path_weathertop_rivendell_44"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_44": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_43",
      "east": "path_weathertop_rivendell_49"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_44",
      "east": "path_weathertop_rivendell_4"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_49",
      "east": "path_weathertop_rivendell_6"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_4",
      "east": "path_weathertop_rivendell_11"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_6",
      "east": "path_weathertop_rivendell_12"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_11",
      "east": "path_bree_rivendell_12"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_12",
      "east": "path_bree_rivendell_14"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_12",
      "east": "path_bree_rivendell_15"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_14",
      "east": "path_bree_rivendell_17"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_15",
      "east": "path_bree_rivendell_18"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_17",
      "east": "path_bree_rivendell_20"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_18",
      "east": "path_bree_rivendell_21"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_20",
      "east": "path_bree_rivendell_23"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_21",
      "east": "path_weathertop_rivendell_10"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_23",
      "east": "path_bree_rivendell_10"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_weathertop_rivendell_10",
      "east": "path_bree_rivendell_11"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_10",
      "east": "path_bree_rivendell_22"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_22": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_11",
      "east": "path_bree_rivendell_25"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_25": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_22",
      "east": "path_bree_rivendell_26"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_bree_rivendell_25",
      "south": "path_weathertop_rivendell_7"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_rivendell_26",
      "south": "path_weathertop_rivendell_1"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_weathertop_rivendell_7",
      "south": "path_weathertop_rivendell_2"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_weathertop_rivendell_1",
      "south": "path_bree_rivendell_5"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_weathertop_rivendell_2",
      "south": "path_bree_rivendell_6"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_rivendell_5",
      "south": "path_connect_rivendell_gardens_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_rivendell_gardens_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_rivendell_6",
      "south": "path_bree_rivendell_4"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_rivendell_gardens_1",
      "south": "path_weathertop_rivendell_5"
    },
    "items": [],
    "enemies": []
  },
  "path_weathertop_rivendell_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_rivendell_4",
      "south": "path_bree_rivendell_7"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_weathertop_rivendell_5",
      "south": "path_bree_rivendell_8"
    },
    "items": [],
    "enemies": []
  },
  "path_bree_rivendell_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_rivendell_7",
      "south": "path_connect_elrond_study_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_elrond_study_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_bree_rivendell_8",
      "south": "path_connect_rivendell_library_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_rivendell_library_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_elrond_study_1",
      "south": "path_connect_rivendell_library_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_rivendell_library_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_rivendell_library_2",
      "south": "path_rivendell_moria_8"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_rivendell_library_4",
      "south": "path_rivendell_moria_9"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rivendell_moria_8",
      "south": "path_rivendell_moria_13"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rivendell_moria_9",
      "south": "path_rivendell_moria_18"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rivendell_moria_13",
      "south": "path_rivendell_moria_23"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rivendell_moria_18",
      "east": "path_rivendell_moria_26"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rivendell_moria_23",
      "north": "path_rivendell_moria_29"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rivendell_moria_26",
      "north": "path_rivendell_moria_34"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rivendell_moria_29",
      "north": "path_rivendell_moria_39"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rivendell_moria_34",
      "north": "path_rivendell_moria_43"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_43": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rivendell_moria_39",
      "north": "path_rivendell_moria_44"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_44": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rivendell_moria_43",
      "north": "path_rivendell_moria_49"
    },
    "items": [],
    "enemies": []
  },
  "path_rivendell_moria_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rivendell_moria_44",
      "north": "road_rivendell_moria_3"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_3": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "path_rivendell_moria_49",
      "north": "road_rivendell_moria_4"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_4": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_3",
      "north": "road_rivendell_moria_6"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_6": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_4",
      "north": "road_rivendell_moria_8"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_8": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_6",
      "north": "road_rivendell_moria_9"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_9": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_8",
      "north": "road_rivendell_moria_11"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_11": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_9",
      "north": "road_rivendell_moria_12"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_12": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_11",
      "north": "road_rivendell_moria_14"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_14": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_12",
      "north": "road_rivendell_moria_5"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_5": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_14",
      "north": "road_rivendell_moria_7"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_7": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_5",
      "north": "road_rivendell_moria_10"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_10": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_7",
      "north": "road_rivendell_moria_13"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_13": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_10",
      "north": "road_rivendell_moria_15"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_15": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_13",
      "north": "road_rivendell_moria_1"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_1": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_15",
      "north": "road_rivendell_moria_2"
    },
    "items": [],
    "enemies": []
  },
  "road_rivendell_moria_2": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rivendell_moria_1",
      "north": "path_moria_lothlorien_1"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "road_rivendell_moria_2",
      "north": "path_moria_lothlorien_8"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_moria_lothlorien_1",
      "north": "path_moria_lothlorien_13"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_moria_lothlorien_8",
      "east": "path_moria_lothlorien_18"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_13",
      "east": "path_moria_lothlorien_23"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_18",
      "east": "path_moria_lothlorien_29"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_23",
      "east": "path_moria_lothlorien_34"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_29",
      "east": "path_moria_lothlorien_39"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_34",
      "east": "path_moria_lothlorien_44"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_44": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_39",
      "east": "path_moria_lothlorien_49"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_44",
      "east": "path_moria_lothlorien_3"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_49",
      "east": "path_moria_lothlorien_4"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_3",
      "east": "path_moria_lothlorien_6"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_4",
      "east": "path_moria_lothlorien_9"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_6",
      "east": "path_moria_lothlorien_11"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_9",
      "east": "path_moria_lothlorien_12"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_11",
      "east": "path_moria_lothlorien_14"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_12",
      "east": "path_moria_lothlorien_5"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_14",
      "east": "path_moria_lothlorien_15"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_5",
      "east": "path_connect_lothlorien_border_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_lothlorien_border_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_15",
      "east": "path_moria_lothlorien_2"
    },
    "items": [],
    "enemies": []
  },
  "path_moria_lothlorien_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_lothlorien_border_1",
      "east": "path_lothlorien_fangorn_1"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_moria_lothlorien_2",
      "east": "path_lothlorien_fangorn_6"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_1",
      "east": "path_lothlorien_fangorn_8"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_6",
      "east": "path_lothlorien_fangorn_13"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_8",
      "east": "path_lothlorien_fangorn_16"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_13",
      "east": "path_lothlorien_fangorn_18"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_16",
      "east": "path_lothlorien_fangorn_23"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_18",
      "east": "path_lothlorien_fangorn_26"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_23",
      "east": "path_lothlorien_fangorn_29"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_26",
      "east": "path_lothlorien_fangorn_34"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_29",
      "east": "path_lothlorien_fangorn_36"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_36": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_34",
      "east": "path_lothlorien_fangorn_39"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_36",
      "east": "path_lothlorien_fangorn_49"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_39",
      "east": "path_lothlorien_fangorn_3"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_49",
      "east": "path_lothlorien_fangorn_4"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_3",
      "east": "path_lothlorien_fangorn_5"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_4",
      "east": "path_lothlorien_fangorn_9"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_5",
      "east": "path_lothlorien_fangorn_11"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_fangorn_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_fangorn_9",
      "east": "riverbank_entwash_0_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "path_lothlorien_fangorn_11",
      "east": "river_entwash_0_9"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_0_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_entwash_0_7_-1_0",
      "north": "riverbank_entwash_0_9_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_0_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_0_9",
      "north": "riverbank_entwash_0_11_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_9_-1_0",
      "north": "riverbank_entwash_0_11_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_11_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_11_1_0",
      "north": "riverbank_entwash_0_13_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_11_-1_0",
      "north": "riverbank_entwash_0_13_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_13_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_13_1_0",
      "north": "riverbank_entwash_0_14_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_14_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_13_-1_0",
      "north": "riverbank_entwash_0_15_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_15_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_14_1_0",
      "north": "riverbank_entwash_0_15_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_15_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_15_1_0",
      "north": "riverbank_entwash_0_17_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_0_17_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_0_15_-1_0",
      "north": "river_entwash_0_19"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_0_19": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_0_17_-1_0",
      "north": "riverbank_entwash_1_2_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_0_19",
      "north": "river_entwash_1_3"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_1_2_1_0",
      "north": "riverbank_entwash_1_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_1_3",
      "north": "river_entwash_1_5"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_1_3_1_0",
      "north": "riverbank_entwash_1_5_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_1_5",
      "north": "riverbank_entwash_1_6_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_6_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_1_5_1_0",
      "north": "river_entwash_1_7"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_1_6_1_0",
      "north": "riverbank_entwash_1_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_1_7",
      "north": "riverbank_entwash_1_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_1_7_1_0",
      "north": "river_entwash_1_9"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_1_7_-1_0",
      "north": "riverbank_entwash_1_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_1_9",
      "north": "riverbank_entwash_1_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_1_9_1_0",
      "north": "riverbank_entwash_1_10_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_10_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_1_9_-1_0",
      "north": "river_entwash_1_11"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_11": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_1_10_1_0",
      "north": "riverbank_entwash_1_11_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_1_11",
      "north": "riverbank_entwash_1_11_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_11_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_1_11_1_0",
      "north": "river_entwash_1_13"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_13": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_1_11_-1_0",
      "north": "riverbank_entwash_1_13_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_1_13",
      "west": "riverbank_entwash_1_13_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_13_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_1_13_1_0",
      "west": "riverbank_entwash_1_14_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_14_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_1_13_-1_0",
      "west": "river_entwash_1_15"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_15": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_1_14_1_0",
      "west": "riverbank_entwash_1_15_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_15_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_1_15",
      "west": "riverbank_entwash_1_17_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_17_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_1_15_1_0",
      "west": "river_entwash_1_19"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_19": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_1_17_-1_0",
      "west": "riverbank_entwash_1_3_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_1_19",
      "west": "riverbank_entwash_1_5_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_1_3_-1_0",
      "west": "riverbank_entwash_1_8_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_8_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_1_5_-1_0",
      "west": "riverbank_entwash_2_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_1_8_1_0",
      "west": "riverbank_entwash_2_3_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_2_2_1_0",
      "west": "riverbank_entwash_2_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_2_3_1_0",
      "north": "riverbank_entwash_2_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_2_3_-1_0",
      "north": "riverbank_entwash_2_6_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_6_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_2_5_1_0",
      "north": "river_entwash_2_7"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_2_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_2_6_1_0",
      "north": "riverbank_entwash_2_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_2_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_2_7",
      "north": "riverbank_entwash_2_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_2_7_1_0",
      "north": "river_entwash_2_9"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_2_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_2_7_-1_0",
      "north": "riverbank_entwash_2_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_2_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_2_9",
      "north": "riverbank_entwash_2_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_2_9_1_0",
      "north": "riverbank_entwash_2_10_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_10_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_2_9_-1_0",
      "north": "river_entwash_2_11"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_2_11": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_2_10_1_0",
      "north": "riverbank_entwash_2_11_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_2_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_2_11",
      "north": "riverbank_entwash_2_11_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_11_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_2_11_1_0",
      "north": "river_entwash_3_1"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_3_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_2_11_-1_0",
      "north": "riverbank_entwash_3_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_3_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_3_1",
      "north": "riverbank_entwash_3_1_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_1_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_3_1_1_0",
      "north": "riverbank_entwash_3_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_3_1_-1_0",
      "north": "river_entwash_3_3"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_3_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_entwash_3_2_1_0",
      "north": "riverbank_entwash_3_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_3_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_entwash_3_3",
      "north": "riverbank_entwash_3_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_entwash_3_3_1_0",
      "west": "river_entwash_3_5"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_3_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_3_3_-1_0",
      "west": "riverbank_entwash_3_5_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_3_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_3_5",
      "west": "riverbank_entwash_3_5_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_3_5_1_0",
      "west": "river_entwash_3_7"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_3_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_3_5_-1_0",
      "west": "riverbank_entwash_3_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_3_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_3_7",
      "west": "riverbank_entwash_3_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_3_7_1_0",
      "west": "riverbank_entwash_3_8_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_8_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_3_7_-1_0",
      "west": "riverbank_entwash_3_9_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_3_8_1_0",
      "west": "river_entwash_2_13"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_2_13": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_3_9_1_0",
      "west": "riverbank_entwash_2_13_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_2_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_2_13",
      "west": "riverbank_entwash_2_13_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_13_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_2_13_1_0",
      "west": "river_entwash_3_9"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_3_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_2_13_-1_0",
      "west": "river_entwash_1_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "river_entwash_1_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "river_entwash_3_9",
      "west": "riverbank_entwash_1_1_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_1_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_1_1",
      "west": "river_entwash_2_1"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_2_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_1_1_1",
      "west": "riverbank_entwash_2_1_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_2_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_2_1",
      "west": "river_entwash_2_2"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_2_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_entwash_2_1_1",
      "west": "riverbank_entwash_2_2_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_2_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_entwash_2_2",
      "west": "riverbank_entwash_2_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_entwash_2_2_1",
      "south": "riverbank_entwash_1_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_2_2_2",
      "south": "riverbank_entwash_1_2_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_1_1_2",
      "south": "riverbank_entwash_1_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_1_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_1_2_1",
      "south": "riverbank_entwash_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_1_2_2",
      "south": "riverbank_entwash_2_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_2_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_2_0_1",
      "south": "riverbank_entwash_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_2_1_2",
      "south": "riverbank_entwash_3_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_3_0_1",
      "south": "riverbank_entwash_3_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_3_0_2",
      "south": "riverbank_entwash_3_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_entwash_3_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_entwash_3_1_1",
      "south": "river_entwash_1_2"
    },
    "items": [],
    "enemies": []
  },
  "river_entwash_1_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_entwash_3_1_2",
      "south": "river_entwash_3_2"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "river_entwash_3_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "river_entwash_1_2",
      "south": "riverbank_entwash_3_2_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_entwash_3_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_entwash_3_2",
      "south": "path_connect_fangorn_border_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_fangorn_border_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "riverbank_entwash_3_2_1",
      "south": "path_fangorn_rohan_8"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_fangorn_border_1",
      "south": "path_fangorn_rohan_13"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_8",
      "south": "path_fangorn_rohan_16"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_13",
      "south": "path_fangorn_rohan_18"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_16",
      "south": "path_fangorn_rohan_23"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_18",
      "south": "path_fangorn_rohan_26"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_23",
      "south": "path_fangorn_rohan_29"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_26",
      "south": "path_fangorn_rohan_34"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_29",
      "south": "path_fangorn_rohan_36"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_36": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_34",
      "south": "path_fangorn_rohan_39"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_36",
      "south": "path_fangorn_rohan_44"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_44": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_39",
      "south": "path_fangorn_rohan_46"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_46": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_44",
      "south": "path_fangorn_rohan_49"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_rohan_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_fangorn_rohan_46",
      "south": "road_fangorn_rohan_4"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_4": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "path_fangorn_rohan_49",
      "west": "road_fangorn_rohan_5"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_5": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_4",
      "west": "road_fangorn_rohan_6"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_6": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_5",
      "west": "road_fangorn_rohan_8"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_8": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_6",
      "west": "road_fangorn_rohan_9"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_9": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_8",
      "west": "road_fangorn_rohan_11"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_11": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_9",
      "west": "road_fangorn_rohan_12"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_12": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_11",
      "west": "road_fangorn_rohan_2"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_2": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_12",
      "west": "road_fangorn_rohan_3"
    },
    "items": [],
    "enemies": []
  },
  "road_fangorn_rohan_3": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_fangorn_rohan_2",
      "west": "path_rohan_gondor_3"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "road_fangorn_rohan_3",
      "north": "path_rohan_gondor_5"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rohan_gondor_3",
      "north": "path_rohan_gondor_8"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rohan_gondor_5",
      "north": "path_rohan_gondor_13"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rohan_gondor_8",
      "north": "path_rohan_gondor_14"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rohan_gondor_13",
      "north": "path_rohan_gondor_19"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rohan_gondor_14",
      "north": "path_rohan_gondor_22"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_22": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rohan_gondor_19",
      "north": "path_rohan_gondor_24"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_gondor_24": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_rohan_gondor_22",
      "north": "road_rohan_gondor_3"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_3": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "path_rohan_gondor_24",
      "north": "road_rohan_gondor_4"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_4": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_3",
      "north": "road_rohan_gondor_5"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_5": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_4",
      "north": "road_rohan_gondor_6"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_6": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_5",
      "north": "road_rohan_gondor_8"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_8": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_6",
      "north": "road_rohan_gondor_9"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_9": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_8",
      "north": "road_rohan_gondor_11"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_11": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_9",
      "north": "road_rohan_gondor_1"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_1": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_11",
      "north": "road_rohan_gondor_2"
    },
    "items": [],
    "enemies": []
  },
  "road_rohan_gondor_2": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "road_rohan_gondor_1",
      "east": "path_minas_tirith_mordor_3"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "road_rohan_gondor_2",
      "east": "path_minas_tirith_mordor_8"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_minas_tirith_mordor_3",
      "east": "path_minas_tirith_mordor_13"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_minas_tirith_mordor_8",
      "east": "path_minas_tirith_mordor_18"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_minas_tirith_mordor_13",
      "east": "path_minas_tirith_mordor_23"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_minas_tirith_mordor_18",
      "east": "path_minas_tirith_mordor_29"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_minas_tirith_mordor_23",
      "east": "path_minas_tirith_mordor_34"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_minas_tirith_mordor_29",
      "east": "path_minas_tirith_mordor_39"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_minas_tirith_mordor_34",
      "north": "path_minas_tirith_mordor_44"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_44": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_minas_tirith_mordor_39",
      "west": "path_minas_tirith_mordor_49"
    },
    "items": [],
    "enemies": []
  },
  "path_minas_tirith_mordor_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_minas_tirith_mordor_44",
      "west": "road_minas_tirith_mordor_3"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_3": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "path_minas_tirith_mordor_49",
      "west": "road_minas_tirith_mordor_4"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_4": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_3",
      "west": "road_minas_tirith_mordor_5"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_5": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_4",
      "west": "road_minas_tirith_mordor_6"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_6": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_5",
      "west": "road_minas_tirith_mordor_8"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_8": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_6",
      "west": "road_minas_tirith_mordor_9"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_9": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_8",
      "west": "road_minas_tirith_mordor_11"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_11": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_9",
      "west": "road_minas_tirith_mordor_12"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_12": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_11",
      "west": "road_minas_tirith_mordor_13"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_13": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_minas_tirith_mordor_12",
      "south": "road_minas_tirith_mordor_14"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_14": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "road_minas_tirith_mordor_13",
      "south": "road_minas_tirith_mordor_7"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_7": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "road_minas_tirith_mordor_14",
      "south": "road_minas_tirith_mordor_1"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_1": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "road_minas_tirith_mordor_7",
      "south": "road_minas_tirith_mordor_2"
    },
    "items": [],
    "enemies": []
  },
  "road_minas_tirith_mordor_2": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "north": "road_minas_tirith_mordor_1",
      "south": "path_shire_old_forest_17"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "road_minas_tirith_mordor_2",
      "south": "path_shire_old_forest_18"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_shire_old_forest_17",
      "south": "path_shire_old_forest_23"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_shire_old_forest_18",
      "south": "path_shire_old_forest_28"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_28": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_shire_old_forest_23",
      "east": "path_shire_old_forest_33"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_33": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_28",
      "north": "path_shire_old_forest_38"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_38": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_shire_old_forest_33",
      "north": "path_shire_old_forest_43"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_43": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_shire_old_forest_38",
      "north": "path_shire_old_forest_48"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_48": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_shire_old_forest_43",
      "north": "path_shire_old_forest_51"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_51": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_shire_old_forest_48",
      "north": "path_shire_old_forest_54"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_54": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_shire_old_forest_51",
      "north": "path_shire_old_forest_59"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_59": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_shire_old_forest_54",
      "north": "path_shire_old_forest_64"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_64": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_shire_old_forest_59"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_69": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_74"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_74": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_shire_old_forest_69",
      "west": "path_barrow_downs_bree_8"
    },
    "items": [],
    "enemies": []
  },
  "path_barrow_downs_bree_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_shire_old_forest_74",
      "west": "path_barrow_downs_bree_14"
    },
    "items": [],
    "enemies": []
  },
  "path_barrow_downs_bree_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_barrow_downs_bree_8",
      "west": "path_barrow_downs_bree_19"
    },
    "items": [],
    "enemies": []
  },
  "path_barrow_downs_bree_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_barrow_downs_bree_14",
      "west": "path_gondor_minas_tirith_3"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_minas_tirith_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_barrow_downs_bree_19",
      "west": "path_gondor_minas_tirith_8"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_minas_tirith_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_gondor_minas_tirith_3",
      "west": "path_gondor_minas_tirith_13"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_minas_tirith_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_gondor_minas_tirith_8",
      "west": "path_gondor_minas_tirith_19"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_minas_tirith_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_gondor_minas_tirith_13",
      "west": "path_gondor_minas_tirith_24"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_minas_tirith_24": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_gondor_minas_tirith_19",
      "west": "path_lothlorien_mirkwood_3"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_gondor_minas_tirith_24",
      "south": "path_lothlorien_mirkwood_8"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_3",
      "south": "path_lothlorien_mirkwood_13"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_8",
      "south": "path_lothlorien_mirkwood_18"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_13",
      "south": "path_lothlorien_mirkwood_23"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_18",
      "south": "path_lothlorien_mirkwood_28"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_28": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_23",
      "south": "path_lothlorien_mirkwood_33"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_33": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_28",
      "south": "path_lothlorien_mirkwood_39"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_33",
      "south": "path_lothlorien_mirkwood_44"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_44": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_39",
      "south": "path_lothlorien_mirkwood_49"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_44",
      "south": "path_lothlorien_mirkwood_54"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_54": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_49",
      "south": "path_lothlorien_mirkwood_59"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_59": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_54",
      "south": "path_lothlorien_mirkwood_64"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_64": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_lothlorien_mirkwood_59",
      "east": "path_lothlorien_mirkwood_74"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_74": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_64",
      "east": "path_mirkwood_erebor_6"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_74",
      "east": "path_mirkwood_erebor_8"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_6",
      "east": "path_mirkwood_erebor_13"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_8",
      "east": "path_mirkwood_erebor_16"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_13",
      "east": "path_mirkwood_erebor_18"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_16",
      "east": "path_mirkwood_erebor_23"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_18",
      "east": "path_mirkwood_erebor_26"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_23",
      "east": "path_mirkwood_erebor_29"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_26",
      "east": "path_mirkwood_erebor_34"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_34": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_29",
      "east": "path_mirkwood_erebor_36"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_36": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_34",
      "east": "path_mirkwood_erebor_39"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_39": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_mirkwood_erebor_36",
      "north": "path_mirkwood_erebor_44"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_44": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_mirkwood_erebor_39",
      "west": "path_mirkwood_erebor_46"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_46": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_mirkwood_erebor_44",
      "west": "path_mirkwood_erebor_49"
    },
    "items": [],
    "enemies": []
  },
  "path_mirkwood_erebor_49": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_mirkwood_erebor_46",
      "west": "filler_-5_-8"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_-8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "path_mirkwood_erebor_49",
      "west": "filler_-5_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_-8",
      "west": "filler_-5_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_-7",
      "west": "filler_-5_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_-6",
      "west": "filler_-5_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_2",
      "west": "filler_-5_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_3",
      "west": "filler_-5_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_4",
      "west": "filler_-5_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-5_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_5",
      "west": "filler_-4_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-5_6",
      "north": "filler_-4_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-4_-7",
      "east": "filler_-4_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_-6",
      "east": "filler_-4_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_-5",
      "east": "filler_-4_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_5",
      "east": "filler_-4_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_6",
      "east": "filler_-4_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_7",
      "east": "filler_-4_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_19",
      "east": "filler_-4_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_-4_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_20",
      "east": "filler_-3_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-4_21",
      "east": "filler_-3_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_-7",
      "east": "filler_-3_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_-6",
      "east": "filler_-3_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_-5",
      "north": "filler_-3_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-3_5",
      "west": "filler_-3_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_6",
      "west": "filler_-3_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_7",
      "west": "filler_-3_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_8",
      "west": "filler_-3_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_9",
      "west": "filler_-3_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_10",
      "west": "filler_-3_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_11",
      "west": "filler_-3_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_12",
      "west": "filler_-3_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_13",
      "west": "filler_-3_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_14",
      "west": "filler_-3_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_15",
      "west": "filler_-3_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-3_16",
      "north": "filler_-3_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-3_17",
      "east": "filler_-3_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_18",
      "east": "filler_-3_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_19",
      "east": "filler_-3_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_20",
      "east": "filler_-3_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_21",
      "east": "filler_-3_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_-3_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_22",
      "east": "filler_-2_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-3_23",
      "east": "filler_-2_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_-7",
      "east": "filler_-2_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_-6",
      "east": "filler_-2_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_-5",
      "east": "filler_-2_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_5",
      "east": "filler_-2_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-2_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_-2_8",
      "south": "filler_-2_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_-2_9",
      "south": "filler_-2_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_-2_10",
      "south": "filler_-2_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_-2_11",
      "south": "filler_-2_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_-2_12",
      "south": "filler_-2_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_-2_13",
      "south": "filler_-2_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_-2_14",
      "east": "filler_-2_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_15",
      "east": "filler_-2_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_16",
      "east": "filler_-2_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_17",
      "east": "filler_-2_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_18",
      "east": "filler_-2_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_19",
      "east": "filler_-2_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_20",
      "east": "filler_-2_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-2_21",
      "north": "filler_-2_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_-2_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-2_22",
      "west": "filler_-1_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-2_23",
      "west": "filler_-1_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-1_-7",
      "west": "filler_-1_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-1_-6",
      "west": "filler_-1_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-1_-5",
      "west": "filler_-1_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-1_5",
      "west": "filler_-1_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_-1_6",
      "north": "filler_-1_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_7",
      "east": "filler_-1_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-1_8",
      "east": "filler_-1_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-1_9",
      "east": "filler_-1_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-1_10",
      "east": "filler_-1_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-1_11",
      "east": "filler_-1_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-1_12",
      "east": "filler_-1_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_-1_13",
      "north": "filler_-1_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_14",
      "north": "filler_-1_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_15",
      "north": "filler_-1_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_16",
      "north": "filler_-1_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_17",
      "north": "filler_-1_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_18",
      "north": "filler_-1_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_22",
      "north": "filler_-1_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_-1_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_23",
      "north": "filler_0_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_0_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_-1_24",
      "north": "filler_0_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_0_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_0_-7",
      "west": "filler_0_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_0_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_0_-6",
      "west": "filler_0_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_0_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_0_-5",
      "west": "filler_0_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_0_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_0_0",
      "west": "filler_0_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_0_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_0_22",
      "west": "filler_0_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_0_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_0_23",
      "west": "filler_1_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_0_24",
      "west": "filler_1_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_1_-7",
      "north": "filler_1_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_1_-6",
      "east": "filler_1_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_1_-5",
      "east": "filler_1_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_1_5",
      "east": "filler_1_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_1_6",
      "east": "filler_1_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_1_7",
      "east": "filler_1_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_1_8",
      "east": "filler_1_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_1_9",
      "east": "filler_1_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_1_18",
      "north": "filler_1_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_1_22",
      "north": "filler_1_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_1_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_1_23",
      "west": "filler_2_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_1_24",
      "west": "filler_2_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_2_-7",
      "west": "filler_2_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_2_-6",
      "west": "filler_2_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_2_-5",
      "west": "filler_2_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_2_11",
      "west": "filler_2_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_2_12",
      "west": "filler_2_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_2_13",
      "south": "filler_2_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_2_14",
      "east": "filler_2_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_2_15",
      "east": "filler_2_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_2_16",
      "east": "filler_2_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_2_17",
      "east": "filler_2_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_2_18",
      "east": "filler_2_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_2_19",
      "east": "filler_2_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_2_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_2_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_2_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_2_22",
      "south": "filler_3_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_2_23",
      "south": "filler_3_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_3_-7",
      "south": "filler_3_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_3_-6",
      "south": "filler_3_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_3_-5",
      "south": "filler_3_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_3_5",
      "south": "filler_3_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_3_6",
      "east": "filler_3_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_3_7",
      "east": "filler_3_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_3_8",
      "east": "filler_3_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_3_9",
      "north": "filler_3_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_3_10",
      "west": "filler_3_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_3_11",
      "west": "filler_3_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_3_12",
      "north": "filler_3_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_3_13",
      "east": "filler_3_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_3_14",
      "east": "filler_3_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_3_15",
      "north": "filler_3_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_3_16",
      "west": "filler_3_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_3_17",
      "west": "filler_3_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_3_18",
      "north": "filler_3_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_3_19",
      "east": "filler_3_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_3_20",
      "east": "filler_3_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_3_21",
      "north": "filler_3_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_3_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_3_22",
      "west": "filler_4_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_3_23",
      "west": "filler_4_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_4_-7",
      "north": "filler_4_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_4_-6",
      "east": "filler_4_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_4_-5",
      "east": "filler_4_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_4_5",
      "north": "filler_4_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_4_6",
      "west": "filler_4_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_4_7",
      "west": "filler_4_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_4_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_4_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_4_10",
      "west": "filler_4_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_4_11",
      "south": "filler_4_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_4_12",
      "east": "filler_4_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_4_13",
      "east": "filler_4_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_4_14",
      "south": "filler_4_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_4_15",
      "west": "filler_4_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_4_16",
      "west": "filler_4_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_4_17",
      "southeast": "filler_4_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "northwest": "filler_4_19",
      "east": "filler_4_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_4_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_4_20",
      "south": "filler_5_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_4_21",
      "west": "filler_5_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_5_-6",
      "south": "filler_5_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_5_-5",
      "east": "filler_5_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_5_-4",
      "south": "filler_5_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_5_-3",
      "west": "filler_5_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_5_-1",
      "south": "filler_5_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_5_1",
      "east": "filler_5_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_5_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_5_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_5_4",
      "west": "filler_5_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_5_5",
      "west": "filler_5_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_5_6",
      "west": "filler_5_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_5_7",
      "west": "filler_5_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_5_8",
      "south": "filler_5_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_5_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_5_9",
      "south": "filler_6_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_5_10",
      "south": "filler_6_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_-6",
      "south": "filler_6_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_-5",
      "south": "filler_6_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_-4",
      "south": "filler_6_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_-3",
      "south": "filler_6_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_-2",
      "south": "filler_6_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_-1",
      "south": "filler_6_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_1",
      "south": "filler_6_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_2",
      "south": "filler_6_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_3",
      "south": "filler_6_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_4",
      "south": "filler_6_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_6_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_6_5",
      "east": "filler_7_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_6_6",
      "east": "filler_7_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_-4",
      "east": "filler_7_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_-3",
      "east": "filler_7_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_-2",
      "east": "filler_7_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_-1",
      "east": "filler_7_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_1",
      "east": "filler_7_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_2",
      "east": "filler_7_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_7_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_3",
      "east": "filler_8_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_8_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_7_4",
      "east": "filler_8_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_8_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_8_-4",
      "east": "filler_8_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_8_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_8_-3",
      "east": "filler_8_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_8_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_8_-2",
      "east": "filler_8_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_8_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_8_-1",
      "east": "filler_8_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_8_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_8_2",
      "east": "filler_8_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_8_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_8_3",
      "east": "filler_9_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_9_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_8_4",
      "east": "filler_9_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_9_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_9_-3",
      "east": "filler_9_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_9_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_9_-2",
      "east": "filler_9_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_9_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_9_-1",
      "east": "filler_9_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_9_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_9_1",
      "east": "filler_9_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_9_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_9_2",
      "east": "filler_10_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_9_3",
      "east": "filler_10_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_-3",
      "east": "filler_10_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_-2",
      "east": "filler_10_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_-1",
      "east": "filler_10_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_1",
      "east": "filler_10_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_2",
      "east": "filler_10_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_3",
      "east": "filler_10_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_10_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_4",
      "east": "filler_11_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_10_5",
      "east": "filler_11_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_-3",
      "east": "filler_11_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_-2",
      "east": "filler_11_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_-1",
      "east": "filler_11_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_1",
      "east": "filler_11_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_2",
      "east": "filler_11_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_3",
      "east": "filler_11_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_11_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_4",
      "east": "filler_12_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_12_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_11_5",
      "east": "filler_12_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_12_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_12_-3",
      "east": "filler_12_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_12_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_12_-2",
      "north": "filler_12_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_12_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_12_-1",
      "north": "filler_12_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_12_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_12_4",
      "north": "filler_12_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_12_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_12_5",
      "north": "filler_13_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_12_6",
      "north": "filler_13_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_-3",
      "north": "filler_13_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_-2",
      "north": "filler_13_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_-1",
      "north": "filler_13_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_1",
      "north": "filler_13_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_2",
      "north": "filler_13_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_3",
      "north": "filler_13_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_13_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_4",
      "north": "filler_14_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_13_5",
      "north": "filler_14_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_14_-3",
      "north": "filler_14_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_14_-2",
      "east": "filler_14_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_14_-1",
      "south": "filler_14_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_14_1",
      "south": "filler_14_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_14_2",
      "south": "filler_14_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_14_3",
      "south": "filler_14_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_14_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_14_4",
      "south": "filler_15_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_15_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_14_5",
      "south": "filler_15_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_15_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_15_-3",
      "south": "filler_15_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_15_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_15_-2",
      "south": "filler_15_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_15_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_15_-1",
      "south": "filler_15_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_15_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_15_1",
      "south": "filler_15_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_15_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_15_2",
      "south": "filler_16_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_16_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_15_3",
      "south": "filler_16_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_16_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_16_-3",
      "south": "filler_16_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_16_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_16_-2",
      "east": "filler_16_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_16_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_16_-1",
      "east": "filler_16_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_16_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_16_1",
      "east": "filler_16_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_16_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_16_2",
      "east": "filler_17_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_17_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_16_3",
      "north": "filler_17_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_17_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_17_-3",
      "west": "filler_17_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_17_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_17_-2",
      "west": "filler_17_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_17_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_17_-1",
      "west": "filler_17_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_17_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_17_1",
      "north": "filler_17_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_17_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_17_2",
      "east": "filler_17_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_17_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_17_3",
      "east": "filler_18_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_17_4",
      "east": "filler_18_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_18_-3",
      "north": "filler_18_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_18_-2",
      "west": "filler_18_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_18_-1",
      "west": "filler_18_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_18_1",
      "west": "filler_18_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_18_2",
      "north": "filler_18_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_18_3",
      "east": "filler_18_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_18_4",
      "east": "filler_18_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_18_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_18_5",
      "east": "filler_19_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_18_6",
      "north": "filler_19_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_19_-3",
      "west": "filler_19_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_19_-2",
      "west": "filler_19_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_19_-1",
      "west": "filler_19_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_19_1",
      "north": "filler_19_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_19_2",
      "east": "filler_19_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_19_3",
      "east": "filler_19_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_19_4",
      "east": "filler_19_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_19_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_19_5",
      "north": "filler_20_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_20_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_19_6",
      "west": "filler_20_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_20_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_20_-3",
      "west": "filler_20_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_20_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_20_-2",
      "west": "filler_20_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_20_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_20_-1",
      "north": "filler_20_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_20_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_20_5",
      "north": "filler_20_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_20_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_20_6",
      "north": "filler_21_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_20_7",
      "north": "filler_21_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_21_-2",
      "north": "filler_21_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_21_-1",
      "north": "filler_21_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_21_0",
      "north": "filler_21_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_21_1",
      "north": "filler_21_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_21_2",
      "north": "filler_21_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_21_4",
      "west": "filler_21_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_21_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_21_5",
      "west": "filler_22_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_22_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_21_6",
      "west": "filler_22_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_22_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_22_-2",
      "west": "filler_22_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_22_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_22_-1",
      "west": "filler_22_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_22_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_22_0",
      "west": "filler_22_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_22_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_22_1",
      "west": "filler_22_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_22_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_22_4",
      "west": "filler_22_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_22_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_22_5",
      "west": "filler_23_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_23_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_22_6",
      "west": "filler_23_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_23_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_23_-1",
      "west": "filler_23_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_23_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_23_0",
      "west": "filler_23_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_23_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_23_1",
      "west": "filler_23_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_23_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_23_3",
      "west": "filler_23_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_23_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_23_4",
      "west": "filler_24_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_24_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_23_5",
      "south": "filler_24_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_24_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_24_-1",
      "south": "filler_24_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_24_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_24_0",
      "south": "filler_24_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_24_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_24_1",
      "south": "filler_24_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_24_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_24_3",
      "south": "filler_24_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_24_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_24_4",
      "south": "filler_25_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_25_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_24_5",
      "south": "filler_25_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_25_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_25_-2",
      "south": "filler_25_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_25_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_25_-1",
      "south": "filler_25_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_25_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_25_0",
      "south": "filler_25_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_25_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_25_3",
      "south": "filler_25_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_25_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_25_4",
      "south": "filler_26_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_26_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_25_5",
      "south": "filler_26_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_26_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_26_-2",
      "west": "filler_26_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_26_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_26_-1",
      "west": "filler_26_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_26_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_26_0",
      "west": "filler_26_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_26_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_26_2",
      "west": "filler_26_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_26_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_26_3",
      "west": "filler_27_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_27_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_26_4",
      "west": "filler_27_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_27_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_27_-2",
      "west": "filler_27_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_27_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_27_-1",
      "west": "filler_27_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_27_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_27_0",
      "west": "filler_27_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_27_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_27_2",
      "west": "filler_27_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_27_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_27_3",
      "west": "filler_27_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_27_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_27_4",
      "west": "filler_28_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_27_5",
      "west": "filler_28_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_28_-3",
      "west": "filler_28_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_28_-2",
      "west": "filler_28_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_28_-1",
      "west": "filler_28_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_28_2",
      "west": "filler_28_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_28_3",
      "north": "filler_28_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_28_4",
      "north": "filler_28_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_28_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_28_5",
      "north": "filler_29_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_28_6",
      "north": "filler_29_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_29_-3",
      "north": "filler_29_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_29_-2",
      "north": "filler_29_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_29_-1",
      "north": "filler_29_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_29_1",
      "north": "filler_29_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_29_2",
      "east": "filler_29_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_29_4",
      "east": "filler_29_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_29_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_29_5",
      "east": "filler_30_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_30_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_29_6",
      "east": "filler_30_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_30_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_30_-3",
      "east": "filler_30_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_30_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_30_-2",
      "east": "filler_30_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_30_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_30_-1",
      "east": "filler_30_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_30_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_30_5",
      "east": "filler_30_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_30_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_30_6",
      "east": "filler_31_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_30_7",
      "east": "filler_31_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_31_-2",
      "east": "filler_31_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_31_-1",
      "east": "filler_31_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_31_0",
      "east": "filler_31_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_31_1",
      "east": "filler_31_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_31_2",
      "east": "filler_31_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_31_4",
      "east": "filler_31_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_31_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_31_5",
      "north": "filler_32_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_32_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_31_6",
      "west": "filler_32_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_32_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_32_-2",
      "west": "filler_32_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_32_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_32_-1",
      "west": "filler_32_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_32_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_32_0",
      "west": "filler_32_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_32_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_32_1",
      "west": "filler_32_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_32_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_32_4",
      "west": "filler_32_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_32_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_32_5",
      "west": "filler_33_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_33_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_32_6",
      "west": "filler_33_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_33_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_33_-1",
      "west": "filler_33_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_33_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_33_0",
      "west": "filler_33_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_33_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_33_1",
      "north": "filler_33_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_33_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_33_3",
      "east": "filler_33_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_33_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_33_4",
      "east": "filler_34_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_34_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_33_5",
      "east": "filler_34_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_34_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_34_-1",
      "east": "filler_34_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_34_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_34_0",
      "north": "filler_34_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_34_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_34_1",
      "north": "filler_34_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_34_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_34_3",
      "north": "filler_34_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_34_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_34_4",
      "north": "filler_35_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_35_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_34_5",
      "north": "filler_35_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_35_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_35_-2",
      "north": "filler_35_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_35_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_35_-1",
      "north": "filler_35_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_35_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_35_0",
      "north": "filler_35_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_35_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_35_3",
      "north": "filler_35_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_35_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_35_4",
      "north": "filler_36_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_36_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_35_5",
      "north": "filler_36_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_36_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_36_-2",
      "north": "filler_36_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_36_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_36_-1",
      "north": "filler_36_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_36_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_36_0",
      "north": "filler_36_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_36_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_36_2",
      "north": "filler_36_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_36_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_36_3",
      "north": "filler_37_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_37_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_36_4",
      "north": "filler_37_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_37_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_37_-2",
      "north": "filler_37_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_37_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_37_-1",
      "north": "filler_37_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_37_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_37_0",
      "north": "filler_37_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_37_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_37_2",
      "north": "filler_37_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_37_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_37_3",
      "north": "filler_38_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_38_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_37_4",
      "north": "filler_38_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_38_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_38_-3",
      "north": "filler_38_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_38_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_38_-2",
      "north": "filler_38_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_38_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_38_-1",
      "west": "filler_38_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_38_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_38_2",
      "west": "filler_38_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_38_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_38_3",
      "west": "filler_39_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_39_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_38_4",
      "west": "filler_39_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_39_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_39_-3",
      "south": "filler_39_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_39_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_39_-2",
      "east": "filler_39_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_39_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_39_-1",
      "east": "filler_39_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_39_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_39_1",
      "east": "filler_39_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_39_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_39_2",
      "south": "filler_40_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_39_3",
      "west": "filler_40_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_40_-4",
      "west": "filler_40_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_40_-3",
      "west": "filler_40_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_40_-2",
      "south": "filler_40_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_40_-1",
      "south": "filler_40_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_40_1",
      "south": "filler_40_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_40_2",
      "south": "filler_40_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_40_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_40_3",
      "south": "filler_41_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_40_4",
      "south": "filler_41_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_41_-3",
      "south": "filler_41_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_41_-2",
      "south": "filler_41_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_41_-1",
      "south": "filler_41_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_41_0",
      "south": "filler_41_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_41_1",
      "south": "filler_41_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_41_2",
      "south": "filler_41_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_41_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_41_3",
      "east": "filler_42_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_41_4",
      "east": "filler_42_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_42_-15",
      "east": "filler_42_-13"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_-13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_42_-14",
      "north": "filler_42_-12"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_42_-13",
      "west": "filler_42_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_42_-12",
      "west": "filler_42_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_42_-3",
      "north": "filler_42_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_42_-2",
      "east": "filler_42_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_42_-1",
      "east": "filler_42_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_42_0",
      "north": "filler_42_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_42_1",
      "west": "filler_42_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_42_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_42_2",
      "west": "filler_43_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_42_3",
      "north": "filler_43_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_43_-17",
      "east": "filler_43_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_43_-16",
      "east": "filler_43_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_43_-15",
      "north": "filler_43_-13"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_43_-14",
      "west": "filler_43_-12"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_43_-13",
      "west": "filler_43_-11"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_43_-12",
      "north": "filler_43_-10"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_43_-11",
      "east": "filler_43_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_43_-10",
      "east": "filler_43_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_43_-3",
      "north": "filler_43_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_43_-2",
      "west": "filler_43_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_43_-1",
      "west": "filler_43_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_43_0",
      "north": "filler_43_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_43_1",
      "east": "filler_43_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_43_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_43_2",
      "east": "filler_44_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_43_3",
      "north": "filler_44_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_44_-18",
      "west": "filler_44_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_44_-17",
      "west": "filler_44_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_44_-16",
      "north": "filler_44_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_44_-15",
      "east": "filler_44_-13"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_44_-14",
      "north": "filler_44_-12"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_44_-13",
      "east": "filler_44_-11"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_44_-12",
      "south": "filler_44_-10"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_44_-11"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_44_-8"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_44_-9",
      "north": "filler_44_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_44_-8",
      "north": "filler_44_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_44_-3",
      "north": "filler_44_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_44_-2",
      "east": "filler_44_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_44_-1",
      "east": "filler_44_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_44_0",
      "east": "filler_44_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_44_1",
      "east": "filler_44_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_44_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_44_2",
      "east": "filler_45_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_44_3",
      "east": "filler_45_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_45_-18",
      "east": "filler_45_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_45_-17",
      "east": "filler_45_-11"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_45_-16",
      "east": "filler_45_-10"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_45_-11",
      "east": "filler_45_-9"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_45_-10",
      "east": "filler_45_-8"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_45_-9",
      "east": "filler_45_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_45_-8",
      "south": "filler_45_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_45_-7",
      "west": "filler_45_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_-6",
      "west": "filler_45_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_-5",
      "west": "filler_45_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_-3",
      "west": "filler_45_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_-2",
      "west": "filler_45_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_-1",
      "west": "filler_45_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_0",
      "west": "filler_45_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_1",
      "west": "filler_45_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_45_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_2",
      "west": "filler_46_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_45_3",
      "west": "filler_46_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_46_-19",
      "west": "filler_46_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_46_-18",
      "south": "filler_46_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_46_-17",
      "east": "filler_46_-10"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-14",
      "east": "filler_46_-9"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-10",
      "east": "filler_46_-8"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-9",
      "east": "filler_46_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-8",
      "east": "filler_46_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-7",
      "east": "filler_46_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-6",
      "east": "filler_46_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-5",
      "east": "filler_46_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-4",
      "east": "filler_46_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-3",
      "east": "filler_46_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-2",
      "east": "filler_46_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_46_-1",
      "south": "filler_46_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_46_0",
      "west": "filler_46_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_46_1",
      "west": "filler_46_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_46_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_46_2",
      "west": "filler_47_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_46_3",
      "south": "filler_47_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-19",
      "south": "filler_47_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-18",
      "south": "filler_47_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-17",
      "south": "filler_47_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-15",
      "south": "filler_47_-13"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-14",
      "south": "filler_47_-12"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-13",
      "south": "filler_47_-11"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-12",
      "south": "filler_47_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-11",
      "south": "filler_47_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-7",
      "south": "filler_47_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-6",
      "south": "filler_47_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-5",
      "south": "filler_47_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_47_-4",
      "east": "filler_47_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_47_-3",
      "north": "filler_47_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_47_-2",
      "north": "filler_47_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_47_-1",
      "north": "filler_47_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_47_0",
      "north": "filler_47_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_47_1",
      "north": "filler_47_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_47_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_47_2",
      "north": "filler_48_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_47_3",
      "north": "filler_48_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_48_-20",
      "north": "filler_48_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_48_-19",
      "north": "filler_48_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_48_-18",
      "north": "filler_48_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_48_-15",
      "north": "filler_48_-13"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_48_-14",
      "east": "filler_48_-12"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_48_-13",
      "east": "filler_48_-11"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_48_-12",
      "south": "filler_48_-10"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_48_-11",
      "west": "filler_48_-9"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_48_-10",
      "south": "filler_48_-8"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_48_-9",
      "east": "filler_48_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_48_-8",
      "south": "filler_48_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_48_-4",
      "west": "filler_48_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_48_-3",
      "south": "filler_48_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_48_-2",
      "east": "filler_48_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_48_-1",
      "south": "filler_48_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_48_0",
      "west": "filler_48_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_48_1",
      "south": "filler_48_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_48_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_48_2",
      "east": "filler_49_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_48_3",
      "south": "filler_49_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_49_-20",
      "west": "filler_49_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-19",
      "south": "filler_49_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_49_-18",
      "east": "filler_49_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_49_-16",
      "south": "filler_49_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_49_-15",
      "west": "filler_49_-13"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-14",
      "south": "filler_49_-12"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_49_-13",
      "east": "filler_49_-11"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_49_-12",
      "south": "filler_49_-10"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_49_-11",
      "west": "filler_49_-9"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-10",
      "south": "filler_49_-8"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_49_-9",
      "west": "filler_49_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-8",
      "west": "filler_49_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-7",
      "west": "filler_49_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-6",
      "west": "filler_49_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-5",
      "west": "filler_49_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_-1",
      "west": "filler_49_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_0",
      "west": "filler_49_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_1",
      "west": "filler_49_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_2",
      "west": "filler_49_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_3",
      "west": "filler_49_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_49_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_4",
      "west": "filler_50_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_49_5",
      "north": "filler_50_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_50_-20",
      "east": "filler_50_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-19",
      "east": "filler_50_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-16",
      "east": "filler_50_-14"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-15",
      "east": "filler_50_-10"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-14",
      "east": "filler_50_-9"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-10",
      "east": "filler_50_-8"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-9",
      "east": "filler_50_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-8",
      "east": "filler_50_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_-7",
      "north": "filler_50_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_50_-6",
      "west": "filler_50_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_-5",
      "west": "filler_50_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_-4",
      "west": "filler_50_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_-3",
      "west": "filler_50_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_-2",
      "west": "filler_50_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_2",
      "west": "filler_50_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_3",
      "west": "filler_50_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_4",
      "west": "filler_50_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_50_5",
      "north": "filler_50_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_50_6",
      "east": "filler_50_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_7",
      "east": "filler_50_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_50_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_8",
      "east": "filler_51_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_50_9",
      "east": "filler_51_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_51_-20",
      "east": "filler_51_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_51_-19",
      "east": "filler_51_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_51_-17",
      "east": "filler_51_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_51_-16",
      "north": "filler_51_-7"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-15",
      "north": "filler_51_-6"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-7",
      "north": "filler_51_-5"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-6",
      "north": "filler_51_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-5",
      "north": "filler_51_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-4",
      "north": "filler_51_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-3",
      "north": "filler_51_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-2",
      "north": "filler_51_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_-1",
      "north": "filler_51_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_4",
      "north": "filler_51_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_51_5",
      "east": "filler_51_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_51_6",
      "south": "filler_51_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_51_7",
      "south": "filler_51_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_51_8",
      "south": "filler_51_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_51_9",
      "south": "filler_51_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_51_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_51_10",
      "south": "filler_52_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_51_11",
      "south": "filler_52_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_52_-20",
      "south": "filler_52_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_52_-17",
      "south": "filler_52_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_52_-16",
      "south": "filler_52_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_52_-15",
      "south": "filler_52_-3"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_52_-4"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_52_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_52_-2",
      "west": "filler_52_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_52_-1",
      "west": "filler_52_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_52_0",
      "west": "filler_52_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_52_1",
      "west": "filler_52_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_52_2",
      "west": "filler_52_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_52_6",
      "north": "filler_52_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_52_7",
      "east": "filler_52_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_52_8",
      "east": "filler_52_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_52_9",
      "east": "filler_52_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_52_10",
      "east": "filler_52_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_52_11",
      "east": "filler_52_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_52_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_52_12",
      "east": "filler_53_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_52_13",
      "north": "filler_53_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_53_-20",
      "west": "filler_53_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_-18",
      "west": "filler_53_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_-17",
      "west": "filler_53_-2"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_-16",
      "west": "filler_53_-1"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_-1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_-2",
      "west": "filler_53_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_-1",
      "west": "filler_53_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_0",
      "north": "filler_53_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_53_1",
      "east": "filler_53_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_53_2",
      "east": "filler_53_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_53_3",
      "east": "filler_53_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_53_4",
      "east": "filler_53_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_53_10",
      "east": "filler_53_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_53_11",
      "east": "filler_53_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_53_12",
      "north": "filler_53_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_53_13",
      "west": "filler_53_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_53_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_14",
      "west": "filler_54_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_53_15",
      "west": "filler_54_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_54_-18",
      "west": "filler_54_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_54_-17",
      "west": "filler_54_0"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_0": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_54_-16",
      "west": "filler_54_1"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_1": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_54_0",
      "north": "filler_54_2"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_54_1",
      "east": "filler_54_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_54_2",
      "east": "filler_54_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_54_3",
      "east": "filler_54_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_54_4",
      "east": "filler_54_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_54_5",
      "east": "filler_54_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_54_6",
      "east": "filler_54_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_54_12",
      "north": "filler_54_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_54_13",
      "west": "filler_54_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_54_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_54_14",
      "west": "filler_55_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_54_15",
      "west": "filler_55_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_55_-17",
      "west": "filler_55_-15"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_-15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_55_-16",
      "west": "filler_55_3"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_55_-15",
      "west": "filler_55_4"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_4": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_55_3",
      "north": "filler_55_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_55_4",
      "east": "filler_55_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_55_5",
      "east": "filler_55_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_55_6",
      "north": "filler_55_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_55_7",
      "north": "filler_55_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_55_8",
      "east": "filler_55_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_55_14",
      "east": "filler_55_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_55_15",
      "east": "filler_55_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_55_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_55_16",
      "east": "filler_56_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_55_17",
      "south": "filler_56_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_56_-20",
      "west": "filler_56_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_56_-18",
      "west": "filler_56_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_56_-17",
      "west": "filler_56_5"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_5": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "filler_56_-16",
      "south": "filler_56_6"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_6": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_56_5",
      "east": "filler_56_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_56_6",
      "east": "filler_56_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_56_7",
      "east": "filler_56_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_56_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_56_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_56_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {},
    "items": [],
    "enemies": []
  },
  "filler_56_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_56_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_56_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_56_18",
      "north": "filler_57_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_56_19",
      "north": "filler_57_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_-20",
      "north": "filler_57_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_-19",
      "north": "filler_57_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_-18",
      "north": "filler_57_-16"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_-16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_-17",
      "north": "filler_57_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_-16",
      "north": "filler_57_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_7",
      "north": "filler_57_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_8",
      "north": "filler_57_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_9",
      "north": "filler_57_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_10",
      "north": "filler_57_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_57_11",
      "east": "filler_57_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_12",
      "south": "filler_57_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_57_16",
      "south": "filler_57_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_57_17",
      "south": "filler_57_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_57_18",
      "south": "filler_57_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_57_19",
      "east": "filler_57_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_20",
      "east": "filler_57_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_21",
      "east": "filler_57_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_22",
      "east": "filler_57_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_23",
      "east": "filler_57_25"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_25": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_24",
      "east": "filler_57_26"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_26": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_25",
      "east": "filler_57_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_26",
      "east": "filler_57_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_27",
      "east": "filler_57_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_28",
      "east": "filler_57_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_29",
      "east": "filler_57_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_30",
      "east": "filler_57_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_31",
      "east": "filler_57_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_32",
      "east": "filler_57_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_57_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_33",
      "east": "filler_58_-20"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_-20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_57_34",
      "east": "filler_58_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_-20",
      "east": "filler_58_-18"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_-18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_-19",
      "east": "filler_58_-17"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_-18",
      "east": "filler_58_7"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_-17",
      "east": "filler_58_8"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_7",
      "south": "filler_58_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_58_8",
      "south": "filler_58_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_58_9",
      "south": "filler_58_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_58_10",
      "east": "filler_58_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_11",
      "east": "filler_58_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_12",
      "east": "filler_58_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_13",
      "east": "filler_58_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_14",
      "east": "filler_58_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_18",
      "east": "filler_58_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_19",
      "east": "filler_58_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_20",
      "east": "filler_58_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_21",
      "east": "filler_58_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_22",
      "east": "filler_58_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_23",
      "east": "filler_58_25"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_25": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_24",
      "east": "filler_58_26"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_26": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_25",
      "east": "filler_58_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_58_26",
      "north": "filler_58_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_27",
      "north": "filler_58_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_28",
      "north": "filler_58_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_29",
      "north": "filler_58_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_30",
      "north": "filler_58_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_31",
      "north": "filler_58_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_32",
      "north": "filler_58_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_33",
      "north": "filler_58_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_34",
      "north": "filler_58_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_58_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_35",
      "north": "filler_59_-19"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_-19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_58_36",
      "north": "filler_59_9"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_9": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_-19",
      "north": "filler_59_10"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_10": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_9",
      "north": "filler_59_11"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_11": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_10",
      "north": "filler_59_12"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_11",
      "north": "filler_59_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_12",
      "north": "filler_59_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_13",
      "north": "filler_59_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_14",
      "north": "filler_59_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_15",
      "north": "filler_59_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_16",
      "north": "filler_59_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_20",
      "north": "filler_59_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_21",
      "north": "filler_59_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_22",
      "north": "filler_59_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_23",
      "north": "filler_59_25"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_25": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_24",
      "north": "filler_59_26"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_26": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_25",
      "north": "filler_59_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_26",
      "north": "filler_59_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_27",
      "north": "filler_59_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_28",
      "north": "filler_59_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_29",
      "north": "filler_59_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_30",
      "north": "filler_59_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_59_31",
      "east": "filler_59_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_59_32",
      "east": "filler_59_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_59_33",
      "east": "filler_59_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_59_34",
      "east": "filler_59_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_59_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_59_35",
      "east": "filler_60_13"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_59_36",
      "east": "filler_60_14"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_14": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_13",
      "east": "filler_60_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_14",
      "east": "filler_60_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_15",
      "east": "filler_60_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_16",
      "east": "filler_60_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_17",
      "east": "filler_60_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_18",
      "east": "filler_60_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_35",
      "east": "filler_60_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_60_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_60_36",
      "north": "filler_61_15"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_15": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_60_37",
      "north": "filler_61_16"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_16": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_15",
      "north": "filler_61_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_16",
      "north": "filler_61_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_17",
      "north": "filler_61_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_18",
      "north": "filler_61_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_19",
      "north": "filler_61_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_20",
      "north": "filler_61_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_21",
      "north": "filler_61_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_22",
      "north": "filler_61_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_23",
      "north": "filler_61_25"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_25": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_24",
      "north": "filler_61_26"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_26": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_25",
      "north": "filler_61_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_26",
      "north": "filler_61_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_27",
      "north": "filler_61_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_28",
      "north": "filler_61_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_29",
      "north": "filler_61_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_61_30",
      "east": "filler_61_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_61_31",
      "east": "filler_61_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_61_34",
      "east": "filler_61_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_61_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_61_35",
      "east": "filler_62_17"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_61_36",
      "east": "filler_62_18"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_17",
      "east": "filler_62_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_18",
      "east": "filler_62_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_19",
      "east": "filler_62_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_20",
      "east": "filler_62_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_21",
      "east": "filler_62_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_22",
      "east": "filler_62_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_23",
      "east": "filler_62_25"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_25": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_24",
      "east": "filler_62_26"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_26": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_25",
      "east": "filler_62_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_26",
      "east": "filler_62_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_27",
      "east": "filler_62_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_28",
      "east": "filler_62_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_29",
      "east": "filler_62_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_30",
      "east": "filler_62_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_62_31",
      "south": "filler_62_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_62_33",
      "south": "filler_62_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_62_34",
      "south": "filler_62_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_62_35",
      "south": "filler_62_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_62_36",
      "south": "filler_62_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_62_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_62_37",
      "south": "filler_63_19"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_19": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_62_38",
      "south": "filler_63_20"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_20": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_19",
      "south": "filler_63_21"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_21": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_20",
      "south": "filler_63_22"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_21",
      "south": "filler_63_23"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_22",
      "south": "filler_63_24"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_24": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_23",
      "south": "filler_63_25"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_25": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_24",
      "south": "filler_63_26"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_26": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_25",
      "south": "filler_63_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_26",
      "south": "filler_63_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_27",
      "south": "filler_63_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_28",
      "south": "filler_63_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_29",
      "south": "filler_63_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_30",
      "south": "filler_63_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_33",
      "south": "filler_63_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_34",
      "south": "filler_63_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_35",
      "south": "filler_63_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_36",
      "south": "filler_63_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_37",
      "south": "filler_63_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_38",
      "south": "filler_63_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_63_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_39",
      "south": "filler_64_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_63_40",
      "south": "filler_64_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_27",
      "south": "filler_64_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_28",
      "south": "filler_64_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_29",
      "south": "filler_64_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_32",
      "south": "filler_64_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_33",
      "south": "filler_64_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_34",
      "south": "filler_64_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_35",
      "south": "filler_64_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_64_36",
      "east": "filler_64_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_64_37",
      "east": "filler_64_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_64_38",
      "east": "filler_64_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_64_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_64_39",
      "east": "filler_65_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_65_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_64_40",
      "east": "filler_65_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_65_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_65_27",
      "east": "filler_65_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_65_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_65_28",
      "east": "filler_65_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_65_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_65_29",
      "east": "filler_65_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_65_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_65_39",
      "east": "filler_65_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_65_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_65_40",
      "east": "filler_66_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_65_41",
      "east": "filler_66_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_66_27",
      "east": "filler_66_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_66_28",
      "east": "filler_66_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_66_29",
      "east": "filler_66_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_66_31",
      "east": "filler_66_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_66_32",
      "east": "filler_66_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_66_33",
      "south": "filler_66_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_66_34",
      "south": "filler_66_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_66_35",
      "south": "filler_66_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_66_36",
      "south": "filler_66_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_66_37",
      "south": "filler_66_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_66_38",
      "south": "filler_66_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_66_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_66_39",
      "south": "filler_67_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_66_40",
      "south": "filler_67_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_67_27",
      "south": "filler_67_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_67_28",
      "south": "filler_67_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_67_29",
      "east": "filler_67_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_31",
      "east": "filler_67_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_32",
      "east": "filler_67_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_33",
      "east": "filler_67_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_34",
      "east": "filler_67_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_35",
      "east": "filler_67_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_36",
      "east": "filler_67_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_37",
      "east": "filler_67_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_38",
      "east": "filler_67_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_39",
      "east": "filler_67_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_40",
      "east": "filler_67_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_67_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_41",
      "east": "filler_68_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_67_42",
      "east": "filler_68_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_27",
      "east": "filler_68_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_28",
      "east": "filler_68_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_29",
      "east": "filler_68_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_31",
      "east": "filler_68_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_32",
      "east": "filler_68_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_33",
      "east": "filler_68_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_34",
      "east": "filler_68_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_35",
      "east": "filler_68_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_36",
      "east": "filler_68_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_37",
      "east": "filler_68_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_38",
      "east": "filler_68_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_39",
      "east": "filler_68_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_40",
      "east": "filler_68_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_41",
      "east": "filler_68_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_42",
      "east": "filler_68_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_68_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_43",
      "east": "filler_69_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_68_44",
      "east": "filler_69_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_27",
      "east": "filler_69_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_28",
      "east": "filler_69_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_29",
      "east": "filler_69_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_31",
      "east": "filler_69_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_32",
      "east": "filler_69_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_33",
      "east": "filler_69_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_34",
      "east": "filler_69_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_35",
      "east": "filler_69_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_36",
      "east": "filler_69_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_37",
      "east": "filler_69_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_38",
      "east": "filler_69_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_39",
      "east": "filler_69_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_40",
      "east": "filler_69_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_41",
      "east": "filler_69_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_42",
      "east": "filler_69_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_69_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_43",
      "east": "filler_70_27"
    },
    "items": [],
    "enemies": []
  },
  "filler_70_27": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_69_44",
      "east": "filler_70_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_70_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_70_27",
      "east": "filler_70_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_70_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_70_28",
      "east": "filler_70_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_70_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_70_29",
      "east": "filler_70_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_70_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_70_43",
      "east": "filler_70_45"
    },
    "items": [],
    "enemies": []
  },
  "filler_70_45": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_70_44",
      "east": "filler_71_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_70_45",
      "east": "filler_71_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_28",
      "east": "filler_71_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_29",
      "east": "filler_71_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_30",
      "east": "filler_71_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_31",
      "east": "filler_71_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_32",
      "east": "filler_71_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_33",
      "east": "filler_71_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_34",
      "east": "filler_71_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_35",
      "east": "filler_71_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_36",
      "east": "filler_71_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_37",
      "east": "filler_71_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_38",
      "east": "filler_71_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_39",
      "east": "filler_71_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_40",
      "east": "filler_71_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_41",
      "east": "filler_71_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_43",
      "east": "filler_71_45"
    },
    "items": [],
    "enemies": []
  },
  "filler_71_45": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_44",
      "east": "filler_72_28"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_71_45",
      "east": "filler_72_29"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_29": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_28",
      "east": "filler_72_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_29",
      "east": "filler_72_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_30",
      "east": "filler_72_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_31",
      "east": "filler_72_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_32",
      "east": "filler_72_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_33",
      "east": "filler_72_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_34",
      "east": "filler_72_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_35",
      "east": "filler_72_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_36",
      "east": "filler_72_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_37",
      "east": "filler_72_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_38",
      "east": "filler_72_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_39",
      "east": "filler_72_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_40",
      "east": "filler_72_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_41",
      "east": "filler_72_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_43",
      "east": "filler_72_45"
    },
    "items": [],
    "enemies": []
  },
  "filler_72_45": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_44",
      "east": "filler_73_30"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_30": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_72_45",
      "east": "filler_73_31"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_31": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_73_30",
      "east": "filler_73_32"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_32": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_73_31",
      "east": "filler_73_33"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_73_32",
      "east": "filler_73_34"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_34": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_73_33",
      "east": "filler_73_35"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_35": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_73_34",
      "south": "filler_73_36"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_36": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_35",
      "south": "filler_73_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_36",
      "south": "filler_73_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_37",
      "south": "filler_73_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_38",
      "south": "filler_73_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_39",
      "south": "filler_73_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_40",
      "south": "filler_73_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_42",
      "south": "filler_73_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_73_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_43",
      "south": "filler_74_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_74_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_73_44",
      "south": "filler_74_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_74_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_74_38",
      "south": "filler_74_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_74_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_74_39",
      "south": "filler_74_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_74_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_74_40",
      "south": "filler_74_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_74_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_74_42",
      "south": "filler_74_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_74_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_74_43",
      "south": "filler_75_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_75_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_74_44",
      "south": "filler_75_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_75_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_75_38",
      "east": "filler_75_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_75_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_75_39",
      "east": "filler_75_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_75_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_75_40",
      "east": "filler_75_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_75_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_75_42",
      "east": "filler_75_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_75_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_75_43",
      "east": "filler_76_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_76_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_75_44",
      "east": "filler_76_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_76_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_76_38",
      "east": "filler_76_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_76_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_76_39",
      "east": "filler_76_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_76_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_76_40",
      "east": "filler_76_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_76_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_76_42",
      "east": "filler_76_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_76_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_76_43",
      "east": "filler_76_51"
    },
    "items": [],
    "enemies": []
  },
  "filler_76_51": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_76_44",
      "east": "filler_77_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_76_51",
      "east": "filler_77_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_77_38",
      "east": "filler_77_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_77_39",
      "east": "filler_77_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_77_40",
      "east": "filler_77_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_77_42",
      "north": "filler_77_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_43",
      "north": "filler_77_45"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_45": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_44",
      "north": "filler_77_46"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_46": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_45",
      "north": "filler_77_47"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_47": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_46",
      "north": "filler_77_48"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_47",
      "north": "filler_77_49"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_49": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_48",
      "north": "filler_77_50"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_50": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_49",
      "north": "filler_77_51"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_51": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_50",
      "north": "filler_77_52"
    },
    "items": [],
    "enemies": []
  },
  "filler_77_52": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_51",
      "north": "filler_78_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_77_52",
      "north": "filler_78_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_37",
      "north": "filler_78_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_38",
      "north": "filler_78_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_39",
      "north": "filler_78_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_41",
      "north": "filler_78_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_42",
      "north": "filler_78_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_43",
      "north": "filler_78_45"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_45": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_44",
      "north": "filler_78_46"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_46": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_45",
      "north": "filler_78_47"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_47": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_78_46",
      "east": "filler_78_48"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_78_47",
      "south": "filler_78_49"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_49": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_78_48",
      "south": "filler_78_50"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_50": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_78_49",
      "south": "filler_78_51"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_51": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_78_50",
      "south": "filler_78_52"
    },
    "items": [],
    "enemies": []
  },
  "filler_78_52": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_78_51",
      "south": "filler_79_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_78_52",
      "south": "filler_79_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_79_37",
      "south": "filler_79_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_79_38",
      "south": "filler_79_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_79_39",
      "south": "filler_79_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "filler_79_41",
      "east": "filler_79_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_42",
      "east": "filler_79_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_43",
      "east": "filler_79_45"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_45": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_44",
      "east": "filler_79_46"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_46": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_45",
      "east": "filler_79_47"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_47": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_46",
      "east": "filler_79_48"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_47",
      "east": "filler_79_49"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_49": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_48",
      "east": "filler_79_50"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_50": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_49",
      "east": "filler_79_52"
    },
    "items": [],
    "enemies": []
  },
  "filler_79_52": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_50",
      "east": "filler_80_37"
    },
    "items": [],
    "enemies": []
  },
  "filler_80_37": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_79_52",
      "east": "filler_80_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_80_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_80_37",
      "east": "filler_80_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_80_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_80_38",
      "east": "filler_81_38"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_80_39",
      "east": "filler_81_39"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_39": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_81_38",
      "east": "filler_81_40"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_40": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "filler_81_39",
      "north": "filler_81_41"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_41": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_40",
      "north": "filler_81_42"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_42": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_41",
      "north": "filler_81_43"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_42",
      "north": "filler_81_44"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_44": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_43",
      "north": "filler_81_45"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_45": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_44",
      "north": "filler_81_46"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_46": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_45",
      "north": "filler_81_47"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_47": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_46",
      "north": "filler_81_48"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_47",
      "north": "filler_81_49"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_49": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_48",
      "north": "filler_81_50"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_50": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_49",
      "north": "filler_81_52"
    },
    "items": [],
    "enemies": []
  },
  "filler_81_52": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "filler_81_50",
      "north": "path_lothlorien_mirkwood_4"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "filler_81_52",
      "north": "path_lothlorien_mirkwood_6"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_lothlorien_mirkwood_4",
      "north": "path_lothlorien_mirkwood_7"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_lothlorien_mirkwood_6",
      "north": "path_lothlorien_mirkwood_9"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_lothlorien_mirkwood_7",
      "east": "path_lothlorien_mirkwood_10"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_9",
      "east": "path_lothlorien_mirkwood_12"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_10",
      "east": "path_lothlorien_mirkwood_14"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_12",
      "east": "path_lothlorien_mirkwood_15"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_14",
      "east": "path_lothlorien_mirkwood_17"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_15",
      "east": "path_lothlorien_mirkwood_20"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_17",
      "east": "road_gondor_minas_tirith_3"
    },
    "items": [],
    "enemies": []
  },
  "road_gondor_minas_tirith_3": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "path_lothlorien_mirkwood_20",
      "east": "road_gondor_minas_tirith_4"
    },
    "items": [],
    "enemies": []
  },
  "road_gondor_minas_tirith_4": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "road_gondor_minas_tirith_3",
      "east": "road_mirkwood_erebor_4"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_4": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "road_gondor_minas_tirith_4",
      "east": "road_mirkwood_erebor_5"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_5": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "road_mirkwood_erebor_4",
      "east": "road_mirkwood_erebor_6"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_6": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "road_mirkwood_erebor_5",
      "east": "road_mirkwood_erebor_8"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_8": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "road_mirkwood_erebor_6",
      "east": "road_mirkwood_erebor_9"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_9": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "road_mirkwood_erebor_8",
      "east": "road_mirkwood_erebor_11"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_11": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "west": "road_mirkwood_erebor_9",
      "east": "river_anduin_river_0_0"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_0_0": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "road_mirkwood_erebor_11",
      "east": "riverbank_anduin_river_0_0_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_0_0_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_0_0",
      "east": "riverbank_anduin_river_0_0_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_0_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_0_1_0",
      "east": "riverbank_anduin_river_0_0_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_0_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_0_-1_0",
      "east": "riverbank_anduin_river_0_0_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_0_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_0_0_1",
      "east": "riverbank_anduin_river_0_1_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_0_0_-1",
      "east": "riverbank_anduin_river_0_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_1_1_0",
      "north": "riverbank_anduin_river_0_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_1_0_1",
      "north": "riverbank_anduin_river_0_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_1_0_-1",
      "north": "riverbank_anduin_river_0_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_2_1_0",
      "north": "riverbank_anduin_river_0_3_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_2_0_1",
      "north": "riverbank_anduin_river_0_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_3_1_0",
      "north": "riverbank_anduin_river_0_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_3_0_1",
      "north": "riverbank_anduin_river_0_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_5_1_0",
      "north": "riverbank_anduin_river_0_5_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_5_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_5_0_1",
      "north": "riverbank_anduin_river_0_6_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_6_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_5_0_-1",
      "north": "riverbank_anduin_river_0_6_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_6_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_6_1_0",
      "north": "riverbank_anduin_river_0_7_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_6_0_1",
      "north": "riverbank_anduin_river_0_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_7_1_0",
      "north": "riverbank_anduin_river_0_9_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_7_0_1",
      "north": "riverbank_anduin_river_0_9_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_9_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_9_1_0",
      "north": "riverbank_anduin_river_0_9_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_9_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_9_0_1",
      "north": "riverbank_anduin_river_0_10_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_10_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_9_0_-1",
      "north": "riverbank_anduin_river_0_10_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_10_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_10_1_0",
      "north": "riverbank_anduin_river_0_11_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_10_0_1",
      "north": "riverbank_anduin_river_0_11_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_11_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_11_1_0",
      "north": "riverbank_anduin_river_0_13_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_11_0_1",
      "north": "riverbank_anduin_river_0_13_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_13_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_13_1_0",
      "north": "riverbank_anduin_river_0_13_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_13_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_13_0_1",
      "north": "riverbank_anduin_river_0_14_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_14_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_13_0_-1",
      "north": "riverbank_anduin_river_0_14_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_14_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_14_1_0",
      "north": "riverbank_anduin_river_0_15_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_15_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_14_0_1",
      "north": "riverbank_anduin_river_0_15_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_15_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_15_1_0",
      "north": "riverbank_anduin_river_0_17_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_17_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_15_0_1",
      "north": "riverbank_anduin_river_0_17_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_17_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_17_1_0",
      "north": "riverbank_anduin_river_0_18_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_18_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_17_0_-1",
      "north": "riverbank_anduin_river_0_18_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_18_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_18_1_0",
      "east": "riverbank_anduin_river_0_19_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_19_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_18_0_1",
      "east": "riverbank_anduin_river_0_19_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_19_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_19_1_0",
      "east": "riverbank_anduin_river_0_21_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_21_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_19_0_1",
      "east": "riverbank_anduin_river_0_21_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_21_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_21_1_0",
      "east": "riverbank_anduin_river_0_21_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_21_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_21_0_1",
      "east": "riverbank_anduin_river_0_22_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_22_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_21_0_-1",
      "east": "riverbank_anduin_river_0_22_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_22_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_22_1_0",
      "east": "riverbank_anduin_river_0_23_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_23_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_22_0_1",
      "east": "riverbank_anduin_river_0_23_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_23_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_23_1_0",
      "east": "riverbank_anduin_river_0_25_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_25_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_23_0_1",
      "east": "riverbank_anduin_river_0_25_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_25_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_25_1_0",
      "east": "riverbank_anduin_river_0_25_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_25_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_25_0_1",
      "east": "riverbank_anduin_river_0_26_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_26_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_25_0_-1",
      "east": "riverbank_anduin_river_0_26_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_26_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_26_1_0",
      "east": "riverbank_anduin_river_0_27_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_27_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_26_0_1",
      "east": "riverbank_anduin_river_0_27_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_27_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_0_27_1_0",
      "south": "riverbank_anduin_river_0_29_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_29_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_27_0_1",
      "south": "riverbank_anduin_river_0_29_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_29_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_29_1_0",
      "south": "riverbank_anduin_river_0_29_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_29_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_29_0_1",
      "south": "riverbank_anduin_river_0_30_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_30_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_29_0_-1",
      "south": "riverbank_anduin_river_0_30_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_30_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_30_1_0",
      "south": "riverbank_anduin_river_0_31_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_31_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_30_0_1",
      "south": "riverbank_anduin_river_0_31_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_31_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_31_1_0",
      "south": "riverbank_anduin_river_0_33_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_33_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_31_0_1",
      "south": "riverbank_anduin_river_0_33_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_33_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_33_1_0",
      "south": "riverbank_anduin_river_0_33_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_33_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_33_0_1",
      "south": "riverbank_anduin_river_0_34_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_34_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_33_0_-1",
      "south": "riverbank_anduin_river_0_34_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_34_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_34_1_0",
      "south": "riverbank_anduin_river_0_35_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_35_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_34_0_1",
      "south": "riverbank_anduin_river_0_35_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_35_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_35_1_0",
      "south": "riverbank_anduin_river_0_37_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_37_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_35_0_1",
      "south": "riverbank_anduin_river_0_37_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_37_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_37_1_0",
      "south": "riverbank_anduin_river_0_37_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_37_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_37_0_1",
      "south": "riverbank_anduin_river_0_38_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_38_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_37_0_-1",
      "south": "riverbank_anduin_river_0_38_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_38_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_38_1_0",
      "south": "riverbank_anduin_river_0_39_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_39_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_38_0_1",
      "south": "riverbank_anduin_river_0_39_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_39_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_39_1_0",
      "south": "river_anduin_river_1_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_0_39_0_1",
      "south": "riverbank_anduin_river_1_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_1_1",
      "south": "riverbank_anduin_river_1_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_1_1_0",
      "south": "river_anduin_river_1_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_1_3_-1_0",
      "south": "riverbank_anduin_river_1_13_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_1_9",
      "south": "river_anduin_river_1_15"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_15": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_1_13_1_0",
      "south": "riverbank_anduin_river_1_15_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_15_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_1_15",
      "south": "river_anduin_river_1_17"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_17": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_1_15_1_0",
      "south": "riverbank_anduin_river_1_17_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_17_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_1_17",
      "south": "riverbank_anduin_river_1_17_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_17_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_17_1_0",
      "south": "river_anduin_river_1_19"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_19": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_1_17_-1_0",
      "south": "riverbank_anduin_river_1_19_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_19_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_1_19",
      "south": "riverbank_anduin_river_1_19_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_19_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_19_1_0",
      "south": "river_anduin_river_2_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_1_19_-1_0",
      "south": "riverbank_anduin_river_2_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_2_1",
      "south": "riverbank_anduin_river_2_1_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_1_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_2_1_1_0",
      "south": "river_anduin_river_2_3"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_2_1_-1_0",
      "south": "riverbank_anduin_river_2_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_2_3",
      "south": "riverbank_anduin_river_2_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_2_3_1_0",
      "south": "river_anduin_river_2_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_2_3_-1_0",
      "south": "riverbank_anduin_river_2_5_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_2_5",
      "east": "riverbank_anduin_river_2_5_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_2_5_1_0",
      "east": "river_anduin_river_2_7"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_2_5_-1_0",
      "east": "riverbank_anduin_river_2_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_2_7",
      "east": "riverbank_anduin_river_2_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_2_7_1_0",
      "east": "river_anduin_river_2_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_2_7_-1_0",
      "east": "riverbank_anduin_river_2_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_2_9",
      "east": "riverbank_anduin_river_2_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_2_9_1_0",
      "east": "river_anduin_river_2_11"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_11": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_2_9_-1_0",
      "east": "riverbank_anduin_river_2_11_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_2_11",
      "east": "riverbank_anduin_river_2_11_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_11_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_2_11_1_0",
      "east": "river_anduin_river_2_13"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_13": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_2_11_-1_0",
      "east": "riverbank_anduin_river_2_13_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_2_13",
      "east": "riverbank_anduin_river_2_13_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_13_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_2_13_1_0",
      "east": "river_anduin_river_2_15"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_15": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_2_13_-1_0",
      "south": "riverbank_anduin_river_2_15_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_15_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_2_15",
      "south": "riverbank_anduin_river_2_15_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_15_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_2_15_1_0",
      "south": "river_anduin_river_2_17"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_17": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_2_15_-1_0",
      "south": "riverbank_anduin_river_2_17_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_17_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_2_17",
      "south": "riverbank_anduin_river_2_17_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_17_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_2_17_1_0",
      "south": "river_anduin_river_2_19"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_2_19": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_2_17_-1_0",
      "south": "riverbank_anduin_river_2_19_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_2_19_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_2_19",
      "south": "riverbank_anduin_river_2_19_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_19_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_2_19_1_0",
      "south": "river_anduin_river_3_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_2_19_-1_0",
      "south": "riverbank_anduin_river_3_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_3_1",
      "south": "riverbank_anduin_river_3_1_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_1_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_3_1_1_0",
      "south": "river_anduin_river_3_3"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_3_1_-1_0",
      "south": "riverbank_anduin_river_3_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_3_3",
      "south": "riverbank_anduin_river_3_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_3_3_1_0",
      "south": "river_anduin_river_3_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_3_3_-1_0",
      "south": "riverbank_anduin_river_3_5_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_3_5",
      "south": "riverbank_anduin_river_3_5_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_3_5_1_0",
      "south": "river_anduin_river_3_7"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_3_5_-1_0",
      "south": "riverbank_anduin_river_3_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_3_7",
      "south": "riverbank_anduin_river_3_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_3_7_1_0",
      "south": "river_anduin_river_3_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_3_7_-1_0",
      "south": "riverbank_anduin_river_3_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_3_9",
      "south": "riverbank_anduin_river_3_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_3_9_1_0",
      "east": "river_anduin_river_3_11"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_11": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_3_9_-1_0",
      "east": "riverbank_anduin_river_3_11_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_3_11",
      "east": "riverbank_anduin_river_3_11_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_11_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_3_11_1_0",
      "east": "river_anduin_river_3_13"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_13": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_3_11_-1_0",
      "east": "riverbank_anduin_river_3_13_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_3_13",
      "east": "riverbank_anduin_river_3_13_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_13_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_3_13_1_0",
      "east": "river_anduin_river_3_15"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_15": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_3_13_-1_0",
      "east": "riverbank_anduin_river_3_15_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_15_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_3_15",
      "east": "riverbank_anduin_river_3_15_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_15_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_3_15_1_0",
      "east": "river_anduin_river_3_17"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_17": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_3_15_-1_0",
      "east": "riverbank_anduin_river_3_17_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_17_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_3_17",
      "east": "riverbank_anduin_river_3_17_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_17_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_3_17_1_0",
      "east": "river_anduin_river_3_19"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_3_19": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_3_17_-1_0",
      "east": "riverbank_anduin_river_3_19_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_3_19_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_3_19",
      "east": "riverbank_anduin_river_3_19_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_3_19_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_3_19_1_0",
      "north": "countryside_-17_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-17_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "riverbank_anduin_river_3_19_-1_0",
      "north": "countryside_-17_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-17_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-17_-22",
      "north": "countryside_-12_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-12_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-17_23",
      "north": "countryside_-12_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-12_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-12_-22",
      "north": "countryside_-7_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-7_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-12_23",
      "north": "countryside_-7_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-7_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-7_-22",
      "north": "countryside_-2_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-2_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-7_23",
      "north": "countryside_-2_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-2_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-2_-22",
      "north": "countryside_-2_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-2_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-2_23",
      "north": "countryside_3_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_3_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_-2_28",
      "north": "countryside_3_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_3_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_3_-22",
      "north": "countryside_3_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_3_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_3_23",
      "north": "countryside_8_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_8_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_3_28",
      "north": "countryside_8_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_8_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_8_-22",
      "north": "countryside_13_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_13_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_8_23",
      "north": "countryside_13_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_13_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_13_-22",
      "north": "countryside_18_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_18_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_13_23",
      "north": "countryside_18_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_18_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_18_-22",
      "north": "countryside_18_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_18_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_18_-17",
      "north": "countryside_18_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_18_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_18_18",
      "north": "countryside_23_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_23_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_18_23",
      "west": "countryside_23_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_23_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_23_-17",
      "west": "countryside_23_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_23_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_23_-12",
      "west": "countryside_23_-2"
    },
    "items": [],
    "enemies": []
  },
  "countryside_23_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_23_-7",
      "west": "countryside_23_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_23_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_23_-2",
      "west": "countryside_23_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_23_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_23_8",
      "west": "countryside_23_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_23_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_23_13",
      "west": "countryside_28_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_28_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_23_18",
      "west": "countryside_28_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_28_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_28_-12",
      "west": "countryside_28_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_28_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_28_-7",
      "west": "countryside_33_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_33_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_28_8",
      "west": "countryside_33_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_33_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_33_-12",
      "west": "countryside_38_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_38_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_33_8",
      "west": "countryside_38_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_38_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_38_-22",
      "west": "countryside_38_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_38_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_38_-17",
      "north": "countryside_38_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_38_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_38_-12",
      "east": "countryside_38_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_38_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_38_-7",
      "east": "countryside_43_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_43_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_38_8",
      "east": "countryside_43_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_43_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_43_-22",
      "east": "countryside_43_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_43_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_43_-7",
      "east": "countryside_48_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_48_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_43_8",
      "east": "countryside_48_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_48_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_48_-22",
      "east": "countryside_48_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_48_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_48_8",
      "east": "countryside_48_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_48_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_48_13",
      "east": "countryside_53_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_48_18",
      "east": "countryside_53_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_-12",
      "east": "countryside_53_-2"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_-7",
      "east": "countryside_53_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_-2",
      "east": "countryside_53_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_18",
      "east": "countryside_53_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_23",
      "east": "countryside_53_33"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_28",
      "east": "countryside_53_38"
    },
    "items": [],
    "enemies": []
  },
  "countryside_53_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_33",
      "east": "countryside_58_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_58_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_53_38",
      "east": "countryside_58_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_58_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_58_-22",
      "east": "countryside_58_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_58_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_58_-17",
      "north": "countryside_58_-2"
    },
    "items": [],
    "enemies": []
  },
  "countryside_58_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_58_-12",
      "north": "countryside_58_3"
    },
    "items": [],
    "enemies": []
  },
  "countryside_58_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_58_-2",
      "north": "countryside_58_38"
    },
    "items": [],
    "enemies": []
  },
  "countryside_58_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_58_3",
      "north": "countryside_63_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_63_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_58_38",
      "north": "countryside_63_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_63_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_63_-22",
      "north": "countryside_63_3"
    },
    "items": [],
    "enemies": []
  },
  "countryside_63_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_63_-17",
      "north": "countryside_63_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_63_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_63_3",
      "north": "countryside_63_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_63_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_63_8",
      "north": "countryside_63_43"
    },
    "items": [],
    "enemies": []
  },
  "countryside_63_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_63_13",
      "north": "countryside_63_48"
    },
    "items": [],
    "enemies": []
  },
  "countryside_63_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_63_43",
      "north": "countryside_68_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_68_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_63_48",
      "north": "countryside_68_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_68_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_68_13",
      "north": "countryside_68_48"
    },
    "items": [],
    "enemies": []
  },
  "countryside_68_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_68_18",
      "north": "countryside_73_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_73_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_68_48",
      "north": "countryside_73_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_73_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_73_18",
      "north": "countryside_73_33"
    },
    "items": [],
    "enemies": []
  },
  "countryside_73_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_73_23",
      "north": "countryside_73_38"
    },
    "items": [],
    "enemies": []
  },
  "countryside_73_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_73_33",
      "east": "countryside_73_48"
    },
    "items": [],
    "enemies": []
  },
  "countryside_73_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_73_38",
      "south": "countryside_78_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_78_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_73_48",
      "south": "countryside_78_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_78_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_78_23",
      "south": "countryside_-19_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-19_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_78_28",
      "south": "countryside_-19_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-19_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-19_-22",
      "south": "countryside_-14_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-14_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-19_23",
      "south": "countryside_-14_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-14_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-14_-22",
      "south": "countryside_-9_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-9_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-14_23",
      "south": "countryside_-9_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-9_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-9_-22",
      "south": "countryside_-4_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-4_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-9_23",
      "south": "countryside_-4_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-4_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-4_-22",
      "south": "countryside_-4_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_-4_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-4_23",
      "south": "countryside_1_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_1_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_-4_28",
      "south": "countryside_1_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_1_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_1_-22",
      "south": "countryside_6_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_6_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_1_28",
      "south": "countryside_6_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_6_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_6_-22",
      "south": "countryside_11_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_11_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "north": "countryside_6_23",
      "east": "countryside_11_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_11_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_11_-22",
      "east": "countryside_16_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_16_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_11_23",
      "east": "countryside_16_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_16_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_16_-22",
      "east": "countryside_21_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_21_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_16_23",
      "east": "countryside_21_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_21_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_21_-22",
      "east": "countryside_21_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_21_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_21_-17",
      "east": "countryside_21_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_21_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_21_-12",
      "east": "countryside_21_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_21_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_21_8",
      "east": "countryside_21_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_21_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_21_13",
      "east": "countryside_21_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_21_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_21_18",
      "east": "countryside_26_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_21_23",
      "east": "countryside_26_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_26_-17",
      "east": "countryside_26_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_26_-12",
      "east": "countryside_26_-2"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_26_-7",
      "east": "countryside_26_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_26_-2",
      "east": "countryside_26_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_26_8",
      "east": "countryside_26_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_26_13",
      "east": "countryside_31_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_31_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_26_18",
      "east": "countryside_31_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_31_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_31_-12",
      "east": "countryside_36_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_36_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_31_8",
      "east": "countryside_36_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_36_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_36_-17",
      "east": "countryside_36_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_36_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_36_-12",
      "east": "countryside_36_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_36_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_36_-7",
      "east": "countryside_41_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_41_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_36_8",
      "east": "countryside_41_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_41_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_41_-22",
      "east": "countryside_41_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_41_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_41_-12",
      "east": "countryside_41_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_41_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_41_-7",
      "east": "countryside_46_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_46_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_41_8",
      "east": "countryside_46_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_46_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_46_-22",
      "east": "countryside_46_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_46_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_46_8",
      "east": "countryside_51_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_51_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_46_13",
      "east": "countryside_51_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_51_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_51_-12",
      "east": "countryside_51_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_51_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_51_-7",
      "east": "countryside_51_33"
    },
    "items": [],
    "enemies": []
  },
  "countryside_51_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_51_18",
      "east": "countryside_56_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_51_33",
      "east": "countryside_56_-7"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_-7": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_56_-12",
      "east": "countryside_56_-2"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_-2": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_56_-7",
      "east": "countryside_56_3"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_56_-2",
      "east": "countryside_56_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "west": "countryside_56_3",
      "north": "countryside_56_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_56_23",
      "north": "countryside_56_33"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_33": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_56_28",
      "north": "countryside_56_38"
    },
    "items": [],
    "enemies": []
  },
  "countryside_56_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_56_33",
      "north": "countryside_61_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_61_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_56_38",
      "north": "countryside_61_-17"
    },
    "items": [],
    "enemies": []
  },
  "countryside_61_-17": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_61_-22",
      "north": "countryside_61_-12"
    },
    "items": [],
    "enemies": []
  },
  "countryside_61_-12": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_61_-17",
      "north": "countryside_61_3"
    },
    "items": [],
    "enemies": []
  },
  "countryside_61_3": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_61_-12",
      "north": "countryside_61_8"
    },
    "items": [],
    "enemies": []
  },
  "countryside_61_8": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_61_3",
      "north": "countryside_61_38"
    },
    "items": [],
    "enemies": []
  },
  "countryside_61_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_61_8",
      "north": "countryside_61_43"
    },
    "items": [],
    "enemies": []
  },
  "countryside_61_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_61_38",
      "north": "countryside_66_13"
    },
    "items": [],
    "enemies": []
  },
  "countryside_66_13": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_61_43",
      "north": "countryside_66_43"
    },
    "items": [],
    "enemies": []
  },
  "countryside_66_43": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_66_13",
      "north": "countryside_66_48"
    },
    "items": [],
    "enemies": []
  },
  "countryside_66_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "south": "countryside_66_43",
      "west": "countryside_71_18"
    },
    "items": [],
    "enemies": []
  },
  "countryside_71_18": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_66_48",
      "west": "countryside_71_48"
    },
    "items": [],
    "enemies": []
  },
  "countryside_71_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_71_18",
      "west": "countryside_76_23"
    },
    "items": [],
    "enemies": []
  },
  "countryside_76_23": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_71_48",
      "west": "countryside_76_38"
    },
    "items": [],
    "enemies": []
  },
  "countryside_76_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_76_23",
      "west": "countryside_76_48"
    },
    "items": [],
    "enemies": []
  },
  "countryside_76_48": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_76_38",
      "west": "countryside_81_28"
    },
    "items": [],
    "enemies": []
  },
  "countryside_81_28": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_76_48",
      "west": "countryside_81_38"
    },
    "items": [],
    "enemies": []
  },
  "countryside_81_38": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_81_28",
      "west": "countryside_26_-22"
    },
    "items": [],
    "enemies": []
  },
  "countryside_26_-22": {
    "name": "Path",
    "description": "You are on a narrow path. The trail winds through the landscape.",
    "exits": {
      "east": "countryside_81_38",
      "west": "path_fangorn_mirkwood_9"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "countryside_26_-22",
      "west": "path_fangorn_mirkwood_12"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_9",
      "west": "path_fangorn_mirkwood_13"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_12",
      "west": "path_fangorn_mirkwood_20"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_13",
      "west": "path_fangorn_mirkwood_23"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_20",
      "west": "path_fangorn_mirkwood_24"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_24": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_23",
      "west": "path_fangorn_mirkwood_27"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_27": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_24",
      "west": "path_fangorn_mirkwood_32"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_32": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_27",
      "west": "river_anduin_river_0_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_0_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "path_fangorn_mirkwood_32",
      "west": "riverbank_anduin_river_0_1_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_0_1_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_0_1",
      "west": "river_anduin_river_0_3"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_0_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_0_1_-1_0",
      "south": "riverbank_anduin_river_0_3_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_0_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_0_3",
      "south": "river_anduin_river_0_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_0_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_0_3_-1_0",
      "south": "riverbank_anduin_river_0_5_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_0_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_0_5",
      "south": "river_anduin_river_0_7"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_0_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_0_5_-1_0",
      "south": "riverbank_anduin_river_0_7_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_0_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_0_7",
      "south": "river_anduin_river_0_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_0_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_0_7_-1_0",
      "south": "riverbank_anduin_river_0_9_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_0_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_0_9",
      "south": "riverbank_anduin_river_1_0_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_0_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_0_9_-1_0",
      "south": "riverbank_anduin_river_1_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_0_0_1",
      "south": "riverbank_anduin_river_1_3_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_1_0_-1",
      "south": "riverbank_anduin_river_1_3_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_3_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_3_1_0",
      "south": "riverbank_anduin_river_1_4_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_4_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_3_0_-1",
      "east": "riverbank_anduin_river_1_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_4_0_1",
      "east": "riverbank_anduin_river_1_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_5_1_0",
      "east": "riverbank_anduin_river_1_7_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_5_0_1",
      "east": "riverbank_anduin_river_1_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_7_1_0",
      "east": "riverbank_anduin_river_1_9_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_7_0_1",
      "east": "riverbank_anduin_river_1_9_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_9_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_9_1_0",
      "east": "riverbank_anduin_river_1_9_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_9_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_9_0_1",
      "east": "riverbank_anduin_river_1_10_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_10_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_9_0_-1",
      "east": "riverbank_anduin_river_1_10_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_10_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_10_1_0",
      "east": "riverbank_anduin_river_1_11_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_10_0_1",
      "east": "riverbank_anduin_river_1_11_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_11_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_11_1_0",
      "east": "riverbank_anduin_river_1_13_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_13_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_11_0_1",
      "east": "riverbank_anduin_river_1_13_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_13_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_13_0_1",
      "east": "riverbank_anduin_river_1_15_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_15_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_13_0_-1",
      "east": "riverbank_anduin_river_1_15_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_15_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_15_0_1",
      "east": "riverbank_anduin_river_1_17_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_17_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_15_0_-1",
      "east": "riverbank_anduin_river_1_19_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_19_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_17_0_1",
      "east": "riverbank_anduin_river_1_19_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_19_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_19_0_1",
      "north": "riverbank_anduin_river_2_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_1_19_0_-1",
      "west": "riverbank_anduin_river_2_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_1_0_1",
      "west": "riverbank_anduin_river_2_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_1_0_-1",
      "west": "riverbank_anduin_river_2_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_2_1_0",
      "west": "riverbank_anduin_river_2_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_2_0_1",
      "west": "riverbank_anduin_river_2_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_3_0_1",
      "west": "riverbank_anduin_river_2_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_5_0_1",
      "west": "riverbank_anduin_river_2_9_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_9_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_7_0_1",
      "west": "riverbank_anduin_river_2_9_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_9_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_9_0_1",
      "west": "riverbank_anduin_river_2_10_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_10_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_9_0_-1",
      "west": "riverbank_anduin_river_4_1_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_10_0_1",
      "west": "riverbank_anduin_river_4_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_1_1_0",
      "west": "riverbank_anduin_river_4_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_1_0_1",
      "west": "riverbank_anduin_river_4_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_1_0_-1",
      "west": "riverbank_anduin_river_4_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_2_1_0",
      "west": "riverbank_anduin_river_4_3_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_2_0_1",
      "west": "riverbank_anduin_river_4_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_3_1_0",
      "west": "riverbank_anduin_river_4_4_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_4_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_3_0_1",
      "north": "riverbank_anduin_river_4_4_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_4_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_4_4_1_0",
      "east": "riverbank_anduin_river_4_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_4_0_1",
      "east": "riverbank_anduin_river_4_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_5_1_0",
      "east": "riverbank_anduin_river_4_6_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_6_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_5_0_1",
      "east": "riverbank_anduin_river_4_6_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_6_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_6_1_0",
      "east": "riverbank_anduin_river_4_7_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_6_0_1",
      "east": "riverbank_anduin_river_4_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_7_1_0",
      "east": "river_anduin_river_4_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_4_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_4_7_0_1",
      "east": "riverbank_anduin_river_4_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_4_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_4_9",
      "east": "riverbank_anduin_river_4_9_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_9_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_9_1_0",
      "east": "river_anduin_river_4_11"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_4_11": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_4_9_0_1",
      "east": "riverbank_anduin_river_4_11_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_4_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_4_11",
      "east": "riverbank_anduin_river_4_11_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_11_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_11_1_0",
      "east": "river_anduin_river_4_13"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_4_13": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_4_11_0_1",
      "north": "riverbank_anduin_river_4_13_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_4_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_anduin_river_4_13",
      "north": "riverbank_anduin_river_4_13_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_13_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_4_13_1_0",
      "north": "riverbank_anduin_river_5_1_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_4_13_0_1",
      "north": "riverbank_anduin_river_5_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_5_1_1_0",
      "north": "riverbank_anduin_river_5_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_5_1_0_1",
      "north": "riverbank_anduin_river_5_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_5_1_0_-1",
      "north": "riverbank_anduin_river_5_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_5_2_1_0",
      "north": "riverbank_anduin_river_5_3_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_5_2_0_1",
      "north": "riverbank_anduin_river_5_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_5_3_1_0",
      "east": "riverbank_anduin_river_5_4_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_4_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_5_3_0_1",
      "east": "riverbank_anduin_river_5_4_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_4_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_5_4_1_0",
      "east": "riverbank_anduin_river_5_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_5_4_0_1",
      "east": "riverbank_anduin_river_5_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_5_5_1_0",
      "south": "riverbank_anduin_river_5_6_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_6_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_5_5_0_1",
      "west": "riverbank_anduin_river_5_6_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_6_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_6_1_0",
      "west": "riverbank_anduin_river_5_7_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_6_0_1",
      "west": "riverbank_anduin_river_5_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_7_1_0",
      "south": "river_anduin_river_5_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_5_7_0_1",
      "east": "riverbank_anduin_river_5_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_5_9",
      "east": "riverbank_anduin_river_5_9_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_9_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_5_9_1_0",
      "east": "river_anduin_river_5_11"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_11": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_5_9_0_1",
      "south": "riverbank_anduin_river_5_11_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_5_11",
      "west": "riverbank_anduin_river_5_11_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_11_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_11_1_0",
      "west": "river_anduin_river_5_13"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_13": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_5_11_0_1",
      "west": "riverbank_anduin_river_5_13_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_5_13",
      "south": "riverbank_anduin_river_5_13_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_13_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_5_13_1_0",
      "east": "river_anduin_river_6_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_5_13_0_1",
      "east": "riverbank_anduin_river_6_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_6_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_6_1",
      "east": "river_anduin_river_6_3"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_6_1_1_0",
      "south": "riverbank_anduin_river_6_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_6_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_6_3",
      "west": "riverbank_anduin_river_6_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_3_1_0",
      "west": "river_anduin_river_6_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_6_3_-1_0",
      "west": "riverbank_anduin_river_6_5_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_6_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_6_5",
      "south": "riverbank_anduin_river_6_5_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_6_5_1_0",
      "east": "river_anduin_river_6_7"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_6_5_-1_0",
      "east": "riverbank_anduin_river_6_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_6_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_6_7",
      "east": "riverbank_anduin_river_6_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_7_1_0",
      "south": "river_anduin_river_6_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "north": "riverbank_anduin_river_6_7_-1_0",
      "west": "riverbank_anduin_river_6_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_6_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_6_9",
      "west": "riverbank_anduin_river_6_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_9_1_0",
      "west": "river_anduin_river_6_11"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_11": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_6_9_-1_0",
      "south": "riverbank_anduin_river_6_11_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_6_11_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "river_anduin_river_6_11",
      "east": "riverbank_anduin_river_6_11_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_11_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_11_1_0",
      "east": "river_anduin_river_7_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_7_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_6_11_-1_0",
      "east": "riverbank_anduin_river_7_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_7_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_7_1",
      "south": "riverbank_anduin_river_7_1_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_1_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_7_1_1_0",
      "west": "riverbank_anduin_river_7_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_1_-1_0",
      "west": "river_anduin_river_7_3"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_7_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_7_2_1_0",
      "west": "riverbank_anduin_river_7_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_7_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_7_3"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_7_4_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_4_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_3_-1_0",
      "west": "river_anduin_river_7_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_7_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_7_4_1_0",
      "west": "riverbank_anduin_river_7_5_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_7_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_7_5",
      "west": "riverbank_anduin_river_7_5_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_5_1_0",
      "west": "river_anduin_river_7_7"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_7_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_7_5_-1_0",
      "west": "riverbank_anduin_river_7_7_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_7_7_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_7_7",
      "west": "riverbank_anduin_river_7_7_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_7_1_0",
      "west": "river_anduin_river_7_9"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_7_9": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_7_7_-1_0",
      "west": "riverbank_anduin_river_7_9_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_7_9_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_7_9",
      "west": "riverbank_anduin_river_7_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_9_1_0",
      "west": "river_bruinen_0_0"
    },
    "items": [],
    "enemies": []
  },
  "river_bruinen_0_0": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_7_9_-1_0",
      "west": "riverbank_bruinen_0_0_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_bruinen_0_0_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_bruinen_0_0",
      "north": "riverbank_bruinen_0_0_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_0_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_bruinen_0_0_1_0",
      "east": "riverbank_bruinen_0_0_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_0_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_0_0_-1_0",
      "east": "riverbank_bruinen_0_1_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_0_0_0_-1",
      "east": "riverbank_bruinen_0_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_0_1_1_0",
      "east": "riverbank_bruinen_0_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_0_1_0_-1",
      "east": "riverbank_bruinen_0_3_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_0_2_1_0",
      "east": "riverbank_bruinen_0_6_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_6_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_0_3_1_0",
      "east": "riverbank_bruinen_0_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_0_6_1_0",
      "east": "river_bruinen_1_1"
    },
    "items": [],
    "enemies": []
  },
  "river_bruinen_1_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_bruinen_0_7_0_1",
      "east": "river_bruinen_1_3"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "river_bruinen_1_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "river_bruinen_1_1",
      "east": "riverbank_bruinen_1_3_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_bruinen_1_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_bruinen_1_3",
      "east": "riverbank_bruinen_1_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_1_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_1_3_-1_0",
      "east": "river_bruinen_2_1"
    },
    "items": [],
    "enemies": []
  },
  "river_bruinen_2_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_bruinen_1_5_1_0",
      "north": "riverbank_bruinen_2_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_bruinen_2_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_bruinen_2_1",
      "west": "riverbank_bruinen_2_1_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_1_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_bruinen_2_1_1_0",
      "west": "river_bruinen_2_3"
    },
    "items": [],
    "enemies": []
  },
  "river_bruinen_2_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_bruinen_2_1_-1_0",
      "west": "riverbank_bruinen_2_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_bruinen_2_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_bruinen_2_3",
      "west": "riverbank_bruinen_2_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_bruinen_2_3_1_0",
      "west": "river_bruinen_2_5"
    },
    "items": [],
    "enemies": []
  },
  "river_bruinen_2_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_bruinen_2_3_-1_0",
      "west": "riverbank_bruinen_2_5_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_bruinen_2_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_bruinen_2_5",
      "west": "riverbank_bruinen_2_5_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_bruinen_2_5_1_0",
      "west": "riverbank_celebrant_0_0_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_0_0_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_bruinen_2_5_-1_0",
      "west": "river_celebrant_0_1"
    },
    "items": [],
    "enemies": []
  },
  "river_celebrant_0_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_celebrant_0_0_-1_0",
      "west": "riverbank_celebrant_0_1_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_celebrant_0_1_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_celebrant_0_1",
      "west": "riverbank_celebrant_0_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_0_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_celebrant_0_1_1_0",
      "west": "river_celebrant_0_3"
    },
    "items": [],
    "enemies": []
  },
  "river_celebrant_0_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_celebrant_0_2_1_0",
      "north": "riverbank_celebrant_0_3_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_celebrant_0_3_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_celebrant_0_3",
      "east": "riverbank_celebrant_0_5_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_0_5_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_celebrant_0_3_1_0",
      "east": "path_branch_21_29_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_29_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "riverbank_celebrant_0_5_1_0",
      "east": "path_branch_21_29_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_29_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_29_3",
      "east": "path_branch_21_29_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_29_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_29_4",
      "east": "path_branch_21_30_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_30_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_29_6",
      "east": "path_branch_21_30_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_30_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_30_3",
      "east": "path_branch_21_31_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_31_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_30_9",
      "east": "path_branch_21_31_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_31_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_31_4",
      "east": "path_branch_21_31_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_31_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_31_6",
      "east": "path_branch_21_31_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_31_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_31_7",
      "east": "path_branch_21_31_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_31_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_31_8",
      "east": "path_branch_21_31_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_31_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_31_9",
      "north": "path_branch_21_31_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_31_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_31_10",
      "west": "path_branch_21_32_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_31_11",
      "west": "path_branch_21_32_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_32_8",
      "west": "path_branch_21_32_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_32_10",
      "west": "path_branch_21_33_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_33_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_32_11",
      "west": "path_branch_21_36_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_33_7",
      "west": "path_branch_21_36_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_36_9",
      "west": "path_branch_21_40_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_40_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_36_10",
      "west": "path_branch_23_35_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_23_35_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_40_16",
      "west": "path_branch_24_34_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_34_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_23_35_8",
      "west": "path_branch_26_35_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_26_35_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_24_34_6",
      "west": "path_branch_26_35_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_26_35_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_26_35_5",
      "west": "path_branch_42_54_1"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_42_54_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_26_35_6",
      "north": "path_branch_46_54_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_46_54_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_42_54_1",
      "east": "path_branch_46_54_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_46_54_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_46_54_6",
      "east": "path_branch_53_63_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_53_63_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_46_54_7",
      "east": "path_branch_53_66_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_53_66_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_53_63_7",
      "east": "path_branch_53_72_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_53_72_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_53_66_6",
      "east": "path_branch_56_74_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_56_74_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_53_72_9",
      "east": "path_branch_57_74_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_57_74_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_56_74_4",
      "east": "path_branch_57_74_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_57_74_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_57_74_2",
      "east": "path_branch_57_74_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_57_74_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_57_74_5",
      "east": "path_branch_57_74_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_57_74_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_57_74_8",
      "east": "path_branch_58_65_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_58_65_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_57_74_11",
      "east": "path_branch_66_83_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_83_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_58_65_2",
      "east": "path_branch_66_83_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_83_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_83_8",
      "north": "path_branch_66_83_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_83_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_66_83_10",
      "west": "path_branch_66_84_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_84_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_83_12",
      "west": "path_branch_66_84_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_84_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_84_8",
      "west": "path_branch_66_84_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_84_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_84_11",
      "west": "path_branch_67_85_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_67_85_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_84_13",
      "west": "path_branch_67_85_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_67_85_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_67_85_8",
      "west": "path_branch_67_85_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_67_85_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_67_85_11",
      "west": "path_branch_76_89_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_76_89_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_67_85_13",
      "west": "path_branch_76_89_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_76_89_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_76_89_3",
      "west": "path_branch_76_89_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_76_89_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_76_89_4",
      "west": "path_branch_76_90_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_76_90_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_76_89_6",
      "west": "path_branch_76_92_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_76_92_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_76_90_9",
      "west": "path_branch_77_96_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_77_96_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_76_92_6",
      "north": "path_branch_78_85_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_77_96_3",
      "east": "path_branch_78_85_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_3",
      "east": "path_branch_78_85_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_4",
      "east": "path_branch_78_85_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_6",
      "east": "path_branch_78_85_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_7",
      "east": "path_branch_78_85_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_10",
      "east": "path_branch_78_85_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_12",
      "east": "path_branch_78_85_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_85_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_13",
      "east": "path_branch_78_96_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_96_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_85_15",
      "east": "path_branch_78_96_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_96_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_96_4",
      "east": "path_branch_78_96_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_96_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_96_6",
      "east": "path_branch_80_85_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_80_85_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_96_7",
      "east": "path_branch_80_85_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_80_85_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_80_85_3",
      "north": "path_branch_80_85_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_80_85_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_80_85_4",
      "west": "path_branch_80_85_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_80_85_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_80_85_5",
      "west": "path_branch_80_88_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_80_88_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_80_85_7",
      "west": "path_branch_80_88_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_80_88_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_80_88_9",
      "west": "path_branch_80_88_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_80_88_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_80_88_10",
      "west": "path_branch_81_84_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_84_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_80_88_12",
      "west": "path_branch_83_90_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_83_90_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_81_84_7",
      "west": "path_branch_83_94_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_83_94_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_83_90_13",
      "west": "path_branch_83_96_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_83_96_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_83_94_12",
      "west": "path_branch_84_91_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_91_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_83_96_10",
      "west": "path_branch_89_107_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_84_91_12",
      "west": "path_branch_89_107_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_3",
      "west": "path_branch_89_107_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_89_107_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_9",
      "west": "path_branch_89_107_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_10",
      "west": "path_branch_89_107_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_11",
      "west": "path_branch_89_107_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_12",
      "west": "path_branch_89_107_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_13",
      "west": "path_branch_89_107_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_89_107_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_15",
      "west": "path_branch_92_104_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_104_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_89_107_16",
      "west": "path_branch_92_104_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_104_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_104_4",
      "west": "path_branch_92_104_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_104_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_104_10",
      "west": "path_branch_92_106_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_106_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_104_15",
      "west": "path_branch_92_106_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_106_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_106_3",
      "west": "path_branch_92_106_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_106_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_106_10",
      "west": "path_branch_92_106_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_106_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_106_11",
      "west": "path_branch_92_106_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_92_106_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_106_12",
      "west": "path_branch_95_107_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_95_107_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_92_106_15",
      "west": "path_branch_95_107_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_95_107_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_95_107_7",
      "west": "path_branch_95_107_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_95_107_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_95_107_9",
      "west": "path_lothlorien_mirkwood_19"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_95_107_12",
      "north": "path_lothlorien_mirkwood_21"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_lothlorien_mirkwood_19",
      "east": "path_fangorn_mirkwood_10"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_lothlorien_mirkwood_21",
      "east": "path_fangorn_mirkwood_16"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_fangorn_mirkwood_10",
      "east": "path_fangorn_mirkwood_18"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_fangorn_mirkwood_16",
      "east": "path_fangorn_mirkwood_21"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_fangorn_mirkwood_18",
      "east": "path_fangorn_mirkwood_26"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_fangorn_mirkwood_21",
      "east": "riverbank_anduin_river_1_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "path_fangorn_mirkwood_26",
      "east": "riverbank_anduin_river_1_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_1_0_1",
      "east": "river_anduin_river_1_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_1_3_0_1",
      "east": "riverbank_anduin_river_1_7_0_-1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_7_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_1_5",
      "east": "riverbank_anduin_river_1_11_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_11_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_7_0_-1",
      "east": "riverbank_anduin_river_1_17_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_17_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_11_0_-1",
      "east": "riverbank_anduin_river_2_5_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_5_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_1_17_0_-1",
      "east": "riverbank_anduin_river_4_3_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_2_5_0_-1",
      "east": "river_anduin_river_4_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_4_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_4_3_-1_0",
      "east": "river_anduin_river_4_7"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "river_anduin_river_4_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "river_anduin_river_4_5",
      "east": "riverbank_anduin_river_4_7_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_4_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_4_7",
      "east": "riverbank_anduin_river_4_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_7_-1_0",
      "east": "riverbank_anduin_river_4_13_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_13_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_4_9_-1_0",
      "north": "river_anduin_river_5_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_anduin_river_4_13_-1_0",
      "west": "riverbank_anduin_river_5_1_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_1_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_5_1",
      "west": "river_anduin_river_5_3"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_5_1_-1_0",
      "west": "riverbank_anduin_river_5_3_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_3_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_5_3",
      "west": "river_anduin_river_5_5"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_5": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_5_3_-1_0",
      "west": "riverbank_anduin_river_5_5_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_5_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_5_5",
      "west": "river_anduin_river_5_7"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_7": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_5_5_-1_0",
      "west": "riverbank_anduin_river_5_7_-1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_7_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_5_7",
      "west": "riverbank_anduin_river_5_9_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_9_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_7_-1_0",
      "west": "riverbank_anduin_river_5_11_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_11_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_9_-1_0",
      "west": "riverbank_anduin_river_5_13_-1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_13_-1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_11_-1_0",
      "west": "riverbank_anduin_river_6_0_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_0_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_13_-1_0",
      "west": "riverbank_anduin_river_6_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_0_0_1",
      "west": "riverbank_anduin_river_6_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_1_0_1",
      "west": "riverbank_anduin_river_6_2_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_2_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_1_0_-1",
      "west": "riverbank_anduin_river_6_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_2_1_0",
      "west": "riverbank_anduin_river_6_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_2_0_1",
      "west": "riverbank_anduin_river_6_4_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_4_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_3_0_1",
      "west": "riverbank_anduin_river_6_4_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_4_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_4_1_0",
      "north": "riverbank_anduin_river_6_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_6_4_0_1",
      "east": "riverbank_anduin_river_6_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_5_0_1",
      "east": "riverbank_anduin_river_6_9_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_9_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_7_0_1",
      "east": "riverbank_anduin_river_6_9_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_9_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_9_0_1",
      "east": "riverbank_anduin_river_6_10_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_10_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_9_0_-1",
      "east": "riverbank_anduin_river_6_10_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_10_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_10_1_0",
      "east": "riverbank_anduin_river_6_11_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_11_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_10_0_1",
      "east": "riverbank_anduin_river_6_12_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_12_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_11_0_1",
      "east": "riverbank_anduin_river_6_12_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_12_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_12_1_0",
      "east": "riverbank_anduin_river_6_13_1_0"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_13_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_12_0_1",
      "east": "riverbank_anduin_river_6_13_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_13_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_13_1_0",
      "east": "river_anduin_river_6_15"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_15": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "riverbank_anduin_river_6_13_0_1",
      "east": "riverbank_anduin_river_6_15_1_0"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_6_15_1_0": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "river_anduin_river_6_15",
      "east": "riverbank_anduin_river_6_15_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_15_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_15_1_0",
      "east": "riverbank_bruinen_1_1_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_1_1_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_anduin_river_6_15_0_1",
      "east": "riverbank_bruinen_2_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_1_1_0_-1",
      "north": "riverbank_bruinen_2_3_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_3_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_bruinen_2_2_0_1",
      "north": "riverbank_bruinen_2_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_bruinen_2_3_0_1",
      "north": "path_branch_15_26_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_15_26_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "riverbank_bruinen_2_5_0_1",
      "north": "path_branch_15_26_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_15_26_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_15_26_18",
      "north": "path_branch_15_26_21"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_15_26_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_15_26_19",
      "north": "path_branch_21_32_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_15_26_21",
      "north": "path_branch_21_32_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_32_2",
      "north": "path_branch_21_32_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_32_3",
      "north": "path_branch_21_32_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_32_4",
      "north": "path_branch_21_32_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_32_6",
      "north": "path_branch_21_32_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_32_7",
      "north": "path_branch_21_34_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_34_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_32_9",
      "north": "path_branch_21_34_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_34_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_34_2",
      "north": "path_branch_21_34_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_34_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_34_6",
      "north": "path_branch_21_36_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_34_8",
      "north": "path_branch_21_36_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_21_36_4",
      "east": "path_branch_21_36_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_36_5",
      "south": "path_branch_21_36_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_36_6",
      "south": "path_branch_21_38_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_38_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_36_8",
      "south": "path_branch_21_40_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_40_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_38_11",
      "south": "path_branch_21_40_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_40_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_40_9",
      "south": "path_branch_24_31_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_40_11",
      "south": "path_branch_24_31_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_2",
      "south": "path_branch_24_31_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_3",
      "south": "path_branch_24_31_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_6",
      "south": "path_branch_24_31_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_8",
      "south": "path_branch_24_31_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_9",
      "south": "path_branch_24_31_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_10",
      "south": "path_branch_27_36_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_36_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_11",
      "south": "path_branch_27_36_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_36_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_27_36_7",
      "south": "path_branch_33_60_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_27_36_8",
      "south": "path_branch_33_60_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_60_10",
      "south": "path_branch_33_60_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_60_11",
      "east": "path_branch_33_60_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_33_60_12",
      "east": "path_branch_33_60_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_33_60_14",
      "north": "path_branch_33_60_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_60_15",
      "north": "path_branch_33_60_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_60_16",
      "north": "path_branch_33_60_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_60_17",
      "north": "path_branch_33_60_20"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_60_18",
      "north": "path_branch_33_60_21"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_60_20",
      "north": "path_branch_33_62_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_60_21",
      "north": "path_branch_33_62_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_62_4",
      "north": "path_branch_33_62_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_62_16",
      "north": "path_branch_33_62_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_62_17",
      "north": "path_branch_33_62_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_62_18",
      "north": "path_branch_33_62_20"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_62_19",
      "north": "path_branch_33_62_21"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_62_20",
      "north": "path_branch_36_61_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_62_21",
      "north": "path_branch_36_61_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_36_61_7",
      "north": "path_branch_36_61_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_36_61_9",
      "north": "path_branch_39_58_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_36_61_17",
      "north": "path_branch_39_58_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_39_58_6",
      "north": "path_branch_39_58_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_39_58_8",
      "east": "path_branch_39_58_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_39_58_9",
      "south": "path_branch_39_58_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_58_11",
      "south": "path_branch_39_58_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_58_13",
      "south": "path_branch_39_60_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_58_14",
      "south": "path_branch_39_60_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_60_2",
      "south": "path_branch_39_60_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_60_8",
      "south": "path_branch_39_60_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_60_12",
      "south": "path_branch_39_60_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_60_16",
      "south": "path_branch_60_65_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_60_65_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_60_18",
      "south": "path_branch_63_84_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_84_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_60_65_6",
      "south": "path_branch_63_84_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_84_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_63_84_5",
      "south": "path_branch_63_84_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_84_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_63_84_6",
      "east": "path_branch_63_84_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_84_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_84_7",
      "east": "path_branch_63_84_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_84_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_84_8",
      "east": "path_branch_63_86_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_86_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_84_9",
      "east": "path_branch_63_86_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_86_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_86_6",
      "east": "path_branch_66_85_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_85_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_86_8",
      "east": "path_branch_66_85_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_85_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_85_8",
      "east": "path_branch_75_96_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_75_96_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_85_12",
      "east": "path_branch_78_83_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_83_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_75_96_19",
      "east": "path_branch_78_87_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_87_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_83_2",
      "east": "path_branch_78_87_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_87_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_87_4",
      "east": "path_branch_78_87_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_87_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_87_5",
      "east": "path_branch_78_87_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_87_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_87_6",
      "east": "path_branch_78_87_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_87_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_87_7",
      "east": "path_branch_78_93_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_93_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_87_8",
      "east": "path_branch_78_103_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_93_3",
      "east": "path_branch_78_103_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_103_3",
      "north": "path_branch_78_103_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_4",
      "north": "path_branch_78_103_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_5",
      "north": "path_branch_78_103_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_6",
      "north": "path_branch_78_103_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_7",
      "north": "path_branch_78_103_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_8",
      "north": "path_branch_78_103_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_10",
      "north": "path_branch_78_103_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_11",
      "north": "path_branch_78_103_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_13",
      "north": "path_branch_78_103_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_14",
      "north": "path_branch_78_103_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_15",
      "north": "path_branch_78_105_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_103_16",
      "north": "path_branch_78_105_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_78_105_11",
      "east": "path_branch_78_105_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_105_14",
      "south": "path_branch_81_102_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_102_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_78_105_17",
      "south": "path_branch_81_102_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_102_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_102_6",
      "south": "path_branch_81_106_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_102_17",
      "south": "path_branch_81_106_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_4",
      "south": "path_branch_81_106_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_7",
      "south": "path_branch_81_106_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_8",
      "south": "path_branch_81_106_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_9",
      "south": "path_branch_81_106_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_10",
      "south": "path_branch_81_106_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_11",
      "south": "path_branch_81_106_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_12",
      "south": "path_branch_81_106_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_13",
      "south": "path_branch_81_106_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_14",
      "south": "path_branch_81_106_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_16",
      "south": "path_branch_81_108_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_108_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_106_17",
      "south": "path_branch_81_108_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_108_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_108_7",
      "south": "path_branch_81_108_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_108_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_108_10",
      "south": "path_branch_81_108_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_108_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_108_13",
      "south": "path_branch_81_108_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_108_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_108_16",
      "south": "path_branch_81_110_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_110_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_108_18",
      "south": "path_branch_81_110_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_110_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_110_8",
      "east": "path_branch_84_91_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_91_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_110_10",
      "east": "path_branch_84_91_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_91_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_91_9",
      "east": "path_branch_84_95_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_95_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_91_10",
      "south": "path_branch_84_95_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_95_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_84_95_3",
      "south": "path_branch_84_95_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_95_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_84_95_4",
      "east": "path_branch_84_109_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_109_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_95_11",
      "east": "path_branch_84_111_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_111_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_109_15",
      "east": "path_branch_84_111_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_111_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_111_16",
      "east": "path_branch_90_103_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_111_17",
      "east": "path_branch_90_103_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_5",
      "east": "path_branch_90_103_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_8",
      "east": "path_branch_90_103_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_9",
      "east": "path_branch_90_103_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_10",
      "east": "path_branch_90_103_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_11",
      "east": "path_branch_90_103_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_12",
      "east": "path_branch_90_103_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_13",
      "east": "path_branch_90_103_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_14",
      "east": "path_branch_90_103_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_15",
      "east": "path_branch_90_107_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_103_16",
      "east": "path_branch_90_107_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_107_10",
      "east": "path_branch_93_106_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_106_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_107_13",
      "east": "path_branch_93_106_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_106_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_93_106_5",
      "east": "path_branch_93_106_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_106_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_93_106_8",
      "east": "path_branch_93_106_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_106_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_93_106_11",
      "east": "path_branch_93_106_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_106_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_93_106_13",
      "east": "path_branch_96_103_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_103_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_93_106_17",
      "east": "path_branch_96_103_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_103_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_103_5",
      "east": "path_branch_96_105_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_105_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_103_6",
      "east": "path_branch_96_107_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_107_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_105_13",
      "east": "path_branch_96_107_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_107_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_107_8",
      "east": "path_branch_96_107_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_107_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_107_9",
      "east": "path_branch_102_109_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_109_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_107_14",
      "east": "path_branch_102_109_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_109_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_109_4",
      "east": "path_branch_102_109_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_109_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_109_6",
      "east": "path_branch_102_109_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_109_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_109_7",
      "east": "path_branch_102_109_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_109_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_109_8",
      "east": "path_branch_102_111_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_111_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_109_9",
      "east": "path_branch_105_110_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_105_110_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_111_13",
      "north": "path_branch_114_129_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_129_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_105_110_6",
      "north": "path_branch_114_129_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_129_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_114_129_5",
      "north": "path_branch_114_131_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_131_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_114_129_9",
      "north": "path_branch_114_135_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_135_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_114_131_3",
      "north": "path_branch_114_135_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_135_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_114_135_8",
      "north": "path_branch_114_135_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_135_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_114_135_9",
      "north": "path_branch_117_128_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_128_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_114_135_10",
      "north": "path_branch_117_128_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_128_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_128_9",
      "north": "path_branch_117_128_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_128_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_128_11",
      "north": "path_branch_117_144_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_128_13",
      "north": "path_branch_117_144_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_3",
      "north": "path_branch_117_144_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_4",
      "north": "path_branch_117_144_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_6",
      "north": "path_branch_117_144_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_7",
      "north": "path_branch_117_144_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_8",
      "north": "path_branch_117_144_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_9",
      "north": "path_branch_117_144_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_10",
      "east": "path_branch_117_144_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_144_11",
      "east": "path_branch_117_144_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_144_13",
      "east": "path_branch_117_144_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_144_14",
      "east": "path_branch_120_135_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_135_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_144_15",
      "east": "path_branch_120_135_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_135_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_120_135_8",
      "east": "path_branch_120_135_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_135_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_120_135_9",
      "east": "path_branch_120_135_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_135_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_120_135_11",
      "east": "path_branch_123_136_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_136_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_120_135_12",
      "east": "path_branch_129_158_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_136_4",
      "east": "path_branch_129_158_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_5",
      "east": "path_branch_129_158_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_7",
      "east": "path_branch_129_158_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_8",
      "east": "path_branch_129_158_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_10",
      "east": "path_branch_129_158_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_11",
      "east": "path_branch_129_158_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_12",
      "north": "path_branch_129_158_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_129_158_13",
      "north": "path_branch_129_158_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_129_158_14",
      "north": "path_branch_129_158_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_129_158_15",
      "north": "path_branch_129_158_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_129_158_16",
      "north": "path_branch_129_158_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_129_158_17",
      "north": "path_branch_132_157_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_129_158_18",
      "north": "path_branch_132_157_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_157_9",
      "north": "path_branch_132_157_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_157_10",
      "north": "path_branch_132_157_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_157_11",
      "north": "path_branch_132_157_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_157_12",
      "north": "path_branch_132_159_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_157_16",
      "north": "path_branch_132_159_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_159_9",
      "north": "path_branch_132_159_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_159_12",
      "north": "path_branch_132_159_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_159_13",
      "north": "path_branch_132_159_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_159_14",
      "north": "path_branch_132_161_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_161_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_159_15",
      "north": "path_branch_135_158_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_158_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_161_16",
      "east": "path_branch_135_160_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_160_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_135_158_18",
      "south": "path_branch_135_162_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_162_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_160_11",
      "south": "path_branch_135_162_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_162_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_162_12",
      "south": "path_branch_135_162_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_162_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_162_13",
      "south": "path_branch_135_162_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_162_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_162_14",
      "south": "path_branch_135_164_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_164_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_162_15",
      "south": "path_branch_135_164_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_164_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_164_5",
      "south": "path_branch_144_165_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_165_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_164_14",
      "south": "path_branch_144_165_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_165_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_165_4",
      "south": "path_branch_144_171_1"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_171_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_165_5",
      "south": "path_branch_144_173_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_171_1",
      "south": "path_branch_144_173_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_173_6",
      "south": "path_branch_144_173_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_173_8",
      "south": "path_branch_144_173_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_173_10",
      "south": "path_branch_144_173_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_173_11",
      "south": "path_branch_21_32_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_173_13",
      "south": "path_branch_21_34_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_34_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_32_5",
      "south": "path_branch_21_36_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_34_3",
      "south": "path_branch_21_36_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_36_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_36_2",
      "west": "path_branch_21_40_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_40_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_36_7",
      "west": "path_branch_24_31_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_21_40_8",
      "west": "path_branch_24_31_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_24_31_5",
      "west": "path_branch_33_60_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_24_31_7",
      "west": "path_branch_33_62_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_33_60_13",
      "west": "path_branch_36_61_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_33_62_3",
      "west": "path_branch_36_61_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_36_61_8",
      "west": "path_branch_39_58_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_36_61_16",
      "west": "path_branch_39_58_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_58_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_39_58_7",
      "west": "path_branch_39_60_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_39_58_12",
      "west": "path_branch_39_60_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_39_60_7",
      "west": "path_branch_39_60_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_39_60_13",
      "west": "path_branch_39_60_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_60_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_39_60_15",
      "west": "path_branch_39_62_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_62_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_39_60_17",
      "west": "path_branch_39_62_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_39_62_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_39_62_5",
      "south": "path_branch_66_85_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_85_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_39_62_15",
      "east": "path_branch_66_85_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_85_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_85_9",
      "east": "path_branch_78_107_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_107_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_85_11",
      "east": "path_branch_78_107_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_107_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_107_9",
      "east": "path_branch_81_86_1"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_86_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_107_12",
      "east": "path_branch_81_102_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_102_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_86_1",
      "east": "path_branch_81_104_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_104_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_102_15",
      "east": "path_branch_81_106_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_106_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_104_4",
      "east": "path_branch_81_110_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_110_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_106_6",
      "east": "path_branch_90_105_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_105_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_110_4",
      "east": "path_branch_90_105_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_105_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_105_12",
      "east": "path_branch_90_107_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_105_14",
      "east": "path_branch_93_106_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_106_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_90_107_12",
      "east": "path_branch_93_106_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_106_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_93_106_6",
      "east": "path_branch_105_110_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_105_110_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_93_106_10",
      "east": "path_branch_105_110_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_105_110_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_105_110_4",
      "east": "path_branch_114_131_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_131_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_105_110_11",
      "east": "path_branch_117_128_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_128_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_114_131_5",
      "east": "path_branch_117_128_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_128_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_128_7",
      "north": "path_branch_117_136_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_136_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_128_12",
      "north": "path_branch_120_135_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_135_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_136_10",
      "north": "path_branch_120_137_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_137_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_120_135_7",
      "north": "path_branch_132_157_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_120_137_9",
      "north": "path_branch_132_157_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_157_14",
      "north": "path_branch_132_159_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_157_17",
      "north": "path_branch_132_159_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_159_10",
      "north": "path_branch_132_161_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_161_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_159_16",
      "north": "path_branch_132_161_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_161_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_161_11",
      "north": "path_branch_135_158_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_158_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_132_161_15",
      "west": "path_branch_135_160_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_160_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_135_158_12",
      "west": "path_branch_144_171_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_171_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_135_160_14",
      "north": "path_branch_144_171_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_171_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_144_171_9",
      "east": "path_branch_144_173_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_171_10",
      "east": "path_branch_144_173_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_173_7",
      "east": "path_branch_21_38_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_38_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_173_12",
      "east": "path_branch_36_61_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_38_7",
      "east": "path_branch_66_85_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_85_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_36_61_10",
      "east": "path_branch_78_103_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_85_10",
      "east": "path_branch_78_103_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_103_2",
      "east": "path_branch_78_103_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_103_9",
      "east": "path_branch_78_103_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_103_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_103_12",
      "east": "path_branch_78_105_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_103_19",
      "east": "path_branch_78_105_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_105_6",
      "east": "path_branch_78_105_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_105_7",
      "east": "path_branch_78_105_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_105_9",
      "east": "path_branch_78_105_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_105_12",
      "east": "path_branch_78_107_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_107_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_105_16",
      "east": "path_branch_78_107_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_107_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_107_15",
      "east": "path_branch_81_102_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_102_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_107_16",
      "east": "path_branch_81_102_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_102_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_102_8",
      "east": "path_branch_81_110_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_110_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_102_14",
      "east": "path_branch_81_110_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_110_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_110_3",
      "east": "path_branch_81_110_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_110_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_110_5",
      "east": "path_branch_81_110_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_110_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_110_6",
      "east": "path_branch_84_89_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_89_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_110_9",
      "east": "path_branch_84_91_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_91_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_89_8",
      "north": "path_branch_87_110_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_87_110_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_84_91_3",
      "north": "path_branch_90_103_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_103_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_87_110_14",
      "north": "path_branch_90_105_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_105_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_103_6",
      "north": "path_branch_90_105_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_105_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_105_10",
      "north": "path_branch_90_105_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_105_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_105_11",
      "north": "path_branch_90_107_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_105_13",
      "north": "path_branch_90_107_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_107_3",
      "north": "path_branch_90_107_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_107_11",
      "north": "path_branch_90_107_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_107_14",
      "north": "path_branch_90_109_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_109_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_107_18",
      "north": "path_branch_93_102_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_102_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_90_109_13",
      "north": "path_branch_96_105_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_105_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_93_102_8",
      "north": "path_branch_96_105_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_105_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_96_105_8",
      "north": "path_branch_96_109_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_109_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_96_105_9",
      "east": "path_branch_96_109_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_96_109_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_109_10",
      "east": "path_branch_102_111_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_111_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_96_109_13",
      "east": "path_branch_102_111_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_111_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_111_4",
      "east": "path_branch_102_111_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_111_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_111_6",
      "east": "path_branch_102_111_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_111_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_111_7",
      "east": "path_branch_102_111_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_102_111_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_111_8",
      "east": "path_branch_105_110_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_105_110_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_102_111_9",
      "east": "path_branch_105_110_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_105_110_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_105_110_5",
      "east": "path_branch_105_110_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_105_110_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_105_110_7",
      "east": "path_branch_114_131_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_131_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_105_110_8",
      "east": "path_branch_117_136_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_136_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_114_131_8",
      "east": "path_branch_129_158_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_136_8",
      "east": "path_branch_129_158_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_129_158_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_9",
      "east": "path_branch_132_157_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_157_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_129_158_19",
      "east": "path_branch_132_161_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_161_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_132_157_15",
      "east": "path_branch_135_160_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_160_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_132_161_12",
      "south": "path_branch_21_38_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_38_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_135_160_15",
      "south": "path_branch_24_31_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_31_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_21_38_5",
      "south": "path_branch_24_37_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_37_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_31_4",
      "south": "path_branch_36_61_20"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_24_37_11",
      "south": "path_branch_78_93_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_93_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_36_61_20",
      "south": "path_branch_78_105_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_78_93_5",
      "south": "path_branch_78_105_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_105_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_78_105_8",
      "south": "path_branch_78_107_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_107_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_78_105_10",
      "south": "path_branch_78_107_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_107_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_78_107_3",
      "south": "path_branch_78_107_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_107_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_78_107_7",
      "south": "path_branch_81_104_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_104_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_78_107_13",
      "south": "path_branch_87_110_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_87_110_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_81_104_6",
      "south": "path_branch_87_110_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_87_110_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_87_110_12",
      "south": "path_branch_90_107_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_87_110_15",
      "south": "path_branch_90_107_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_107_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_90_107_4",
      "south": "path_branch_90_109_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_90_109_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_90_107_8",
      "south": "path_branch_93_102_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_93_102_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_90_109_12",
      "south": "path_branch_114_139_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_139_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_93_102_14",
      "south": "path_branch_117_132_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_132_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_114_139_4",
      "west": "path_connect_path_bree_weathertop_8_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_weathertop_8_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_117_132_11",
      "west": "path_connect_path_bree_weathertop_8_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_weathertop_8_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_weathertop_8_1",
      "west": "path_connect_path_bree_weathertop_34_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_weathertop_34_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_weathertop_8_3",
      "west": "path_connect_path_bree_weathertop_34_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_weathertop_34_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_weathertop_34_1",
      "west": "path_connect_road_bree_weathertop_8_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_road_bree_weathertop_8_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_weathertop_34_2",
      "west": "path_connect_road_bree_weathertop_8_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_road_bree_weathertop_8_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_road_bree_weathertop_8_1",
      "west": "path_connect_road_bree_weathertop_8_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_road_bree_weathertop_8_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_road_bree_weathertop_8_2",
      "west": "path_connect_road_bree_weathertop_9_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_road_bree_weathertop_9_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_road_bree_weathertop_8_3",
      "west": "path_connect_path_branch_84_95_3_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_84_95_3_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_road_bree_weathertop_9_1",
      "west": "path_connect_path_branch_84_109_15_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_84_109_15_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_84_95_3_1",
      "west": "path_connect_path_branch_84_111_16_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_84_111_16_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_84_109_15_1",
      "west": "path_connect_path_branch_84_111_17_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_84_111_17_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_84_111_16_1",
      "west": "path_connect_path_branch_90_103_14_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_90_103_14_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_84_111_17_1",
      "west": "path_connect_path_branch_90_107_10_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_90_107_10_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_90_103_14_1",
      "west": "path_connect_path_branch_93_106_5_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_93_106_5_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_90_107_10_1",
      "west": "path_connect_path_branch_93_106_17_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_93_106_17_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_93_106_5_1",
      "west": "path_connect_path_branch_93_106_17_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_93_106_17_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_93_106_17_1",
      "west": "path_connect_path_branch_96_103_6_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_96_103_6_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_93_106_17_2",
      "west": "path_connect_path_branch_96_107_8_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_96_107_8_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_96_103_6_1",
      "west": "path_connect_path_branch_102_109_6_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_102_109_6_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_96_107_8_1",
      "west": "path_connect_path_branch_102_109_8_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_102_109_8_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_102_109_6_1",
      "west": "path_connect_path_branch_114_129_5_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_114_129_5_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_102_109_8_1",
      "west": "path_connect_path_branch_129_158_10_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_129_158_10_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_114_129_5_1",
      "west": "path_connect_path_branch_129_158_14_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_129_158_14_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_129_158_10_1",
      "west": "path_connect_path_branch_132_159_9_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_132_159_9_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_129_158_14_1",
      "west": "path_connect_path_branch_135_158_18_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_135_158_18_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_132_159_9_1",
      "west": "path_connect_path_branch_135_164_14_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_135_164_14_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_135_158_18_1",
      "west": "path_connect_path_branch_144_173_11_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_144_173_11_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_135_164_14_1",
      "north": "path_connect_path_branch_144_173_13_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_144_173_13_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_branch_144_173_11_1",
      "north": "path_connect_path_branch_21_34_3_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_21_34_3_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_branch_144_173_13_1",
      "north": "path_connect_path_branch_21_36_2_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_21_36_2_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_branch_21_34_3_1",
      "north": "path_connect_path_branch_21_36_7_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_21_36_7_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_branch_21_36_2_1",
      "east": "path_connect_path_branch_117_128_7_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_117_128_7_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_21_36_7_1",
      "east": "path_connect_path_branch_117_136_10_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_117_136_10_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_117_128_7_1",
      "east": "path_connect_path_branch_120_135_7_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_120_135_7_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_117_136_10_1",
      "east": "path_connect_path_branch_132_159_16_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_132_159_16_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_120_135_7_1",
      "east": "path_connect_path_branch_132_161_15_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_132_161_15_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_132_159_16_1",
      "east": "path_connect_path_branch_135_158_12_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_135_158_12_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_132_161_15_1",
      "east": "path_connect_path_branch_135_160_14_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_135_160_14_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_135_158_12_1",
      "east": "path_connect_path_branch_144_171_9_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_144_171_9_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_135_160_14_1",
      "east": "path_connect_path_branch_144_173_7_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_144_173_7_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_144_171_9_1",
      "east": "path_connect_path_branch_144_173_12_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_144_173_12_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_144_173_7_1",
      "east": "path_connect_path_branch_90_107_3_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_90_107_3_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_144_173_12_1",
      "east": "path_connect_path_branch_90_109_13_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_90_109_13_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_90_107_3_1",
      "east": "path_connect_path_branch_93_102_8_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_93_102_8_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_90_109_13_2",
      "east": "path_connect_path_branch_96_109_10_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_96_109_10_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_93_102_8_1",
      "east": "path_connect_trollshaws_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_trollshaws_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_branch_96_109_10_1",
      "east": "path_connect_trollshaws_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_trollshaws_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_trollshaws_1",
      "east": "path_connect_mithril_mine_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_mithril_mine_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_trollshaws_2",
      "east": "path_connect_mithril_mine_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_mithril_mine_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_mithril_mine_1",
      "east": "path_connect_east_gate_approach_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_east_gate_approach_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_mithril_mine_2",
      "east": "path_connect_anduin_midstream_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_anduin_midstream_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_east_gate_approach_1",
      "east": "path_connect_dead_city_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_dead_city_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_anduin_midstream_1",
      "east": "path_connect_orthanc_base_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_orthanc_base_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_dead_city_1",
      "east": "path_connect_house_of_stewards_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_house_of_stewards_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_orthanc_base_1",
      "east": "riverbank_anduin_river_0_7_0_-1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_7_0_-1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "path_connect_house_of_stewards_1",
      "east": "path_branch_21_32_1"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_21_32_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "riverbank_anduin_river_0_7_0_-1",
      "east": "path_branch_24_37_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_24_37_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_21_32_1",
      "east": "path_branch_27_32_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_32_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_24_37_7",
      "north": "path_branch_27_32_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_32_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_27_32_3",
      "north": "path_branch_27_32_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_32_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_27_32_5",
      "north": "path_branch_27_32_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_32_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_27_32_6",
      "north": "path_branch_27_32_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_32_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_27_32_8",
      "north": "path_branch_27_40_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_27_40_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_27_32_9",
      "north": "path_branch_33_56_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_56_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_27_40_3",
      "north": "path_branch_33_56_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_56_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_56_15",
      "north": "path_branch_33_56_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_56_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_56_16",
      "north": "path_branch_33_56_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_56_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_33_56_17",
      "west": "path_branch_33_56_20"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_56_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_33_56_18",
      "south": "path_branch_33_60_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_60_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_56_20",
      "south": "path_branch_33_62_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_60_19",
      "south": "path_branch_33_62_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_62_9",
      "south": "path_branch_33_62_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_62_10",
      "south": "path_branch_33_62_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_62_12",
      "south": "path_branch_33_62_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_62_13",
      "south": "path_branch_33_62_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_33_62_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_62_14",
      "south": "path_branch_36_61_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_33_62_15",
      "west": "path_branch_36_61_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_36_61_12",
      "west": "path_branch_36_61_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_36_61_13",
      "west": "path_branch_36_61_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_36_61_15",
      "west": "path_branch_36_61_21"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_36_61_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_36_61_18",
      "west": "path_branch_57_86_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_57_86_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_36_61_21",
      "west": "path_branch_57_86_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_57_86_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_57_86_16",
      "west": "path_branch_57_86_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_57_86_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_57_86_17",
      "west": "path_branch_60_65_2"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_60_65_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_57_86_18",
      "west": "path_branch_60_87_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_60_87_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_60_65_2",
      "west": "path_branch_60_87_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_60_87_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_60_87_17",
      "west": "path_branch_60_87_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_60_87_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_60_87_18",
      "west": "path_branch_60_87_20"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_60_87_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_60_87_19",
      "west": "path_branch_60_87_21"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_60_87_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_60_87_20",
      "north": "path_branch_63_76_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_60_87_21",
      "east": "path_branch_63_76_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_8",
      "east": "path_branch_63_76_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_9",
      "east": "path_branch_63_76_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_10",
      "east": "path_branch_63_76_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_11",
      "east": "path_branch_63_76_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_13",
      "east": "path_branch_63_76_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_14",
      "east": "path_branch_63_76_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_15",
      "east": "path_branch_63_76_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_16",
      "east": "path_branch_63_76_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_76_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_17",
      "east": "path_branch_63_78_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_78_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_76_18",
      "east": "path_branch_63_78_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_78_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_78_9",
      "east": "path_branch_63_80_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_80_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_63_78_19",
      "north": "path_branch_63_80_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_80_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_63_80_12",
      "west": "path_branch_63_80_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_80_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_80_14",
      "west": "path_branch_63_82_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_82_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_80_18",
      "west": "path_branch_63_82_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_82_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_82_8",
      "west": "path_branch_63_82_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_82_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_82_10",
      "west": "path_branch_63_82_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_82_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_82_12",
      "west": "path_branch_63_82_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_82_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_82_13",
      "west": "path_branch_63_82_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_82_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_82_15",
      "west": "path_branch_63_82_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_82_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_82_16",
      "west": "path_branch_63_88_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_88_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_82_18",
      "west": "path_branch_63_88_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_63_88_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_88_12",
      "west": "path_branch_66_79_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_79_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_63_88_13",
      "west": "path_branch_66_79_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_79_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_79_11",
      "north": "path_branch_66_79_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_79_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_66_79_12",
      "east": "path_branch_66_81_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_81_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_79_15",
      "east": "path_branch_66_81_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_81_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_81_10",
      "east": "path_branch_66_83_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_83_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_81_16",
      "east": "path_branch_66_83_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_83_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_83_13",
      "east": "path_branch_66_87_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_87_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_83_16",
      "east": "path_branch_66_87_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_87_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_87_5",
      "east": "path_branch_66_95_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_87_7",
      "east": "path_branch_66_95_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_95_10",
      "east": "path_branch_66_95_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_95_11",
      "east": "path_branch_66_95_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_95_13",
      "east": "path_branch_66_95_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_95_14",
      "east": "path_branch_66_95_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_66_95_15",
      "north": "path_branch_66_95_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_66_95_17",
      "west": "path_branch_66_95_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_95_18",
      "west": "path_branch_66_95_20"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_95_19",
      "west": "path_branch_66_95_21"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_66_95_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_95_20",
      "west": "path_branch_69_76_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_69_76_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_66_95_21",
      "west": "path_branch_69_76_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_69_76_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_69_76_11",
      "west": "path_branch_69_78_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_69_78_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_69_76_12",
      "west": "path_branch_72_77_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_77_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_69_78_18",
      "west": "path_branch_72_77_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_77_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_72_77_8",
      "west": "path_branch_72_77_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_77_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_72_77_9",
      "west": "path_branch_72_77_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_77_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_72_77_11",
      "west": "path_branch_72_81_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_81_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_72_77_12",
      "west": "path_branch_72_89_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_89_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_72_81_14",
      "north": "path_branch_72_95_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_95_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_72_89_14",
      "east": "path_branch_72_95_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_95_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_72_95_13",
      "east": "path_branch_72_95_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_95_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_72_95_15",
      "east": "path_branch_72_95_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_72_95_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_72_95_16",
      "east": "path_branch_75_94_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_75_94_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_72_95_19",
      "east": "path_branch_78_93_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_93_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_75_94_18",
      "east": "path_branch_78_93_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_78_93_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_93_4",
      "east": "path_branch_81_92_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_92_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_78_93_6",
      "east": "path_branch_81_92_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_92_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_92_3",
      "east": "path_branch_81_104_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_81_104_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_92_6",
      "east": "path_branch_84_103_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_103_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_81_104_5",
      "east": "path_branch_84_103_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_84_103_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_103_13",
      "east": "path_branch_87_96_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_87_96_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_84_103_14",
      "north": "path_branch_87_104_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_87_104_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_87_96_7",
      "west": "path_branch_114_133_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_133_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_87_104_15",
      "west": "path_branch_114_143_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_133_9",
      "west": "path_branch_114_143_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_6",
      "west": "path_branch_114_143_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_7",
      "west": "path_branch_114_143_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_8",
      "west": "path_branch_114_143_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_9",
      "west": "path_branch_114_143_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_10",
      "west": "path_branch_114_143_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_11",
      "west": "path_branch_114_143_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_12",
      "west": "path_branch_114_143_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_14",
      "west": "path_branch_114_143_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_15",
      "west": "path_branch_114_143_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_114_143_17",
      "north": "path_branch_114_143_20"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_114_143_19",
      "east": "path_branch_114_143_21"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_114_143_20",
      "east": "path_branch_114_143_22"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_114_143_22": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_114_143_21",
      "east": "path_branch_117_126_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_126_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_114_143_22",
      "east": "path_branch_117_126_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_126_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_126_7",
      "east": "path_branch_117_126_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_126_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_126_8",
      "east": "path_branch_117_132_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_132_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_126_10",
      "east": "path_branch_117_132_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_132_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_132_7",
      "east": "path_branch_117_132_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_132_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_132_8",
      "east": "path_branch_117_132_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_132_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_132_9",
      "east": "path_branch_117_144_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_132_10",
      "east": "path_branch_117_144_16"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_144_12",
      "east": "path_branch_117_144_17"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_117_144_16",
      "north": "path_branch_117_144_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_117_144_17",
      "west": "path_branch_117_144_19"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_117_144_19": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_117_144_18",
      "west": "path_branch_120_133_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_133_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_117_144_19",
      "west": "path_branch_120_143_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_133_13",
      "west": "path_branch_120_143_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_3",
      "west": "path_branch_120_143_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_4",
      "west": "path_branch_120_143_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_5",
      "west": "path_branch_120_143_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_7",
      "west": "path_branch_120_143_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_8",
      "west": "path_branch_120_143_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_10",
      "west": "path_branch_120_143_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_11",
      "west": "path_branch_120_143_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_13",
      "west": "path_branch_120_143_18"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_120_143_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_120_143_15",
      "north": "path_branch_123_128_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_128_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_120_143_18",
      "east": "path_branch_123_128_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_128_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_128_6",
      "east": "path_branch_123_128_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_128_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_128_7",
      "east": "path_branch_123_128_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_128_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_128_9",
      "east": "path_branch_123_128_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_128_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_128_11",
      "east": "path_branch_123_144_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_144_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_128_13",
      "east": "path_branch_123_144_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_144_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_144_8",
      "east": "path_branch_123_152_3"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_144_12",
      "east": "path_branch_123_152_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_152_3",
      "east": "path_branch_123_152_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_152_5",
      "east": "path_branch_123_152_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_152_6",
      "east": "path_branch_123_152_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_152_8",
      "east": "path_branch_123_152_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_152_9",
      "east": "path_branch_123_152_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_152_11",
      "east": "path_branch_123_152_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_123_152_12",
      "north": "path_branch_123_152_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_123_152_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_123_152_13",
      "west": "path_branch_132_159_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_159_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_123_152_15",
      "west": "path_branch_132_161_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_132_161_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_132_159_11",
      "west": "path_branch_135_156_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_156_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_132_161_14",
      "west": "path_branch_135_156_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_156_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_135_156_6",
      "west": "path_branch_135_156_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_156_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_135_156_8",
      "west": "path_branch_135_156_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_156_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_135_156_9",
      "west": "path_branch_135_156_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_156_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_135_156_10",
      "west": "path_branch_135_156_14"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_156_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_135_156_13",
      "north": "path_branch_135_156_15"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_156_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_135_156_14",
      "north": "path_branch_135_158_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_158_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_135_156_15",
      "north": "path_branch_135_162_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_162_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_135_158_11",
      "east": "path_branch_135_162_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_135_162_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_135_162_9",
      "east": "path_branch_138_157_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_138_157_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_135_162_10",
      "east": "path_branch_144_169_4"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_138_157_7",
      "east": "path_branch_144_169_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_169_4",
      "east": "path_branch_144_169_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_169_5",
      "east": "path_branch_144_169_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_169_6",
      "east": "path_branch_144_169_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_169_7",
      "east": "path_branch_144_169_10"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_branch_144_169_9",
      "south": "path_branch_144_169_11"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_branch_144_169_10",
      "west": "path_branch_144_169_12"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_144_169_11",
      "west": "path_branch_144_169_13"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_169_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_144_169_12",
      "west": "path_branch_144_171_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_171_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_144_169_13",
      "west": "path_branch_144_171_8"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_171_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_144_171_7",
      "west": "path_branch_144_173_9"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_144_173_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_144_171_8",
      "west": "path_connect_snowbourn_banks_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_snowbourn_banks_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_144_173_9",
      "west": "path_connect_snowbourn_banks_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_snowbourn_banks_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_snowbourn_banks_1",
      "south": "path_connect_snowbourn_banks_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_snowbourn_banks_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_snowbourn_banks_2",
      "east": "path_connect_snowbourn_banks_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_snowbourn_banks_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_snowbourn_banks_3",
      "east": "path_connect_pelargir_port_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_pelargir_port_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_snowbourn_banks_4",
      "east": "path_connect_pelargir_port_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_pelargir_port_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_pelargir_port_1",
      "east": "path_connect_minas_morgul_gates_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_minas_morgul_gates_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_pelargir_port_2",
      "east": "path_connect_minas_morgul_gates_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_minas_morgul_gates_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_minas_morgul_gates_1",
      "east": "path_connect_minas_morgul_gates_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_minas_morgul_gates_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_minas_morgul_gates_2",
      "east": "path_connect_path_rohan_mordor_4_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_4_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_minas_morgul_gates_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_4_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_path_rohan_mordor_4_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_4_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_rohan_mordor_4_2",
      "north": "path_connect_path_rohan_mordor_4_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_4_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_rohan_mordor_4_3",
      "north": "path_connect_path_rohan_mordor_12_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_12_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_rohan_mordor_4_4",
      "north": "path_connect_path_rohan_mordor_12_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_12_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_rohan_mordor_12_1",
      "north": "path_connect_path_rohan_mordor_12_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_12_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_rohan_mordor_12_2",
      "north": "path_connect_path_rohan_mordor_12_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_rohan_mordor_12_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_rohan_mordor_12_3",
      "north": "path_connect_east_emnet_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_east_emnet_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_rohan_mordor_12_4",
      "west": "path_connect_east_emnet_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_east_emnet_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_east_emnet_1",
      "west": "path_connect_mount_doom_summit_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_mount_doom_summit_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_east_emnet_2",
      "west": "path_lothlorien_mirkwood_1"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_mount_doom_summit_1",
      "west": "path_lothlorien_mirkwood_2"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_lothlorien_mirkwood_1",
      "west": "road_mirkwood_erebor_1"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_1": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "path_lothlorien_mirkwood_2",
      "west": "road_mirkwood_erebor_2"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_2": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "road_mirkwood_erebor_1",
      "west": "path_fangorn_mirkwood_2"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "road_mirkwood_erebor_2",
      "west": "path_fangorn_mirkwood_3"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_fangorn_mirkwood_2",
      "north": "path_fangorn_mirkwood_4"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_fangorn_mirkwood_3",
      "north": "path_fangorn_mirkwood_5"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_fangorn_mirkwood_4",
      "north": "riverbank_anduin_river_0_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "path_fangorn_mirkwood_5",
      "north": "riverbank_anduin_river_0_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_1_1",
      "north": "river_anduin_river_0_2"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_0_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "south": "riverbank_anduin_river_0_1_2",
      "north": "riverbank_anduin_river_0_2_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_0_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "river_anduin_river_0_2",
      "north": "riverbank_anduin_river_0_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_0_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_2_1",
      "north": "riverbank_anduin_river_1_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_0_2_2",
      "north": "riverbank_anduin_river_1_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_anduin_river_1_1_1",
      "west": "river_anduin_river_1_2"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_1_1_2",
      "west": "riverbank_anduin_river_1_2_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_1_2",
      "west": "riverbank_anduin_river_1_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_1_2_1",
      "west": "river_anduin_river_1_3"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_3": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_1_2_2",
      "west": "riverbank_anduin_river_1_3_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_3_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_1_3",
      "west": "riverbank_anduin_river_1_3_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_3_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_1_3_1",
      "west": "river_anduin_river_1_4"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_1_4": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_1_3_2",
      "west": "riverbank_anduin_river_1_4_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_1_4_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_1_4",
      "west": "riverbank_anduin_river_1_4_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_4_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_1_4_1",
      "west": "riverbank_anduin_river_2_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_1_4_2",
      "west": "riverbank_anduin_river_2_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_2_1_1",
      "west": "river_anduin_river_4_1"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_4_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_2_1_2",
      "west": "riverbank_anduin_river_4_1_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_4_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_4_1",
      "west": "riverbank_anduin_river_4_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_1_1",
      "west": "river_anduin_river_4_2"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_4_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_4_1_2",
      "west": "riverbank_anduin_river_4_2_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_4_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_4_2",
      "west": "riverbank_anduin_river_4_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_4_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_2_1",
      "west": "riverbank_anduin_river_5_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_4_2_2",
      "west": "riverbank_anduin_river_5_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_1_1",
      "west": "river_anduin_river_5_2"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_5_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "east": "riverbank_anduin_river_5_1_2",
      "west": "riverbank_anduin_river_5_2_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "riverbank_anduin_river_5_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "river_anduin_river_5_2",
      "west": "riverbank_anduin_river_5_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_2_1",
      "west": "riverbank_anduin_river_6_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_5_2_2",
      "west": "riverbank_anduin_river_6_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_0_2",
      "west": "riverbank_anduin_river_6_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_1_1",
      "west": "riverbank_anduin_river_6_2_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_2_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_1_2",
      "west": "riverbank_anduin_river_6_3_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_3_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_2_2",
      "west": "riverbank_anduin_river_6_3_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_3_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_3_1",
      "west": "riverbank_anduin_river_7_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_6_3_2",
      "west": "riverbank_anduin_river_7_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_0_1",
      "west": "riverbank_anduin_river_7_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_0_2",
      "west": "riverbank_anduin_river_7_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_7_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_1_1",
      "west": "riverbank_bruinen_2_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_anduin_river_7_1_2",
      "west": "riverbank_celebrant_0_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_0_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_bruinen_2_1_1",
      "west": "riverbank_celebrant_0_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_0_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "east": "riverbank_celebrant_0_0_2",
      "west": "path_connect_path_weathertop_rivendell_3_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_3_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "riverbank_celebrant_0_1_1",
      "west": "path_connect_path_weathertop_rivendell_9_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_9_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_weathertop_rivendell_3_1",
      "west": "path_connect_path_weathertop_rivendell_13_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_13_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_weathertop_rivendell_9_1",
      "west": "path_connect_path_weathertop_rivendell_1_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_1_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_weathertop_rivendell_13_1",
      "west": "path_connect_path_weathertop_rivendell_2_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_2_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_weathertop_rivendell_1_1",
      "west": "path_connect_path_weathertop_rivendell_2_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_2_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_weathertop_rivendell_2_1",
      "south": "path_connect_road_rivendell_moria_1_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_road_rivendell_moria_1_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_path_weathertop_rivendell_2_2",
      "south": "path_connect_road_rivendell_moria_1_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_road_rivendell_moria_1_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_road_rivendell_moria_1_2",
      "south": "riverbank_anduin_river_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "path_connect_road_rivendell_moria_1_4",
      "south": "riverbank_anduin_river_1_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_1_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_0_1",
      "south": "riverbank_anduin_river_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_1_0_2",
      "south": "riverbank_anduin_river_2_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_2_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_2_0_1",
      "south": "riverbank_anduin_river_5_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_2_0_2",
      "south": "riverbank_anduin_river_5_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_5_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_5_0_1",
      "south": "riverbank_anduin_river_6_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_5_0_2",
      "south": "riverbank_anduin_river_6_2_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_anduin_river_6_2_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_6_0_1",
      "south": "riverbank_bruinen_0_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_0_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_anduin_river_6_2_1",
      "south": "riverbank_bruinen_1_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_1_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_bruinen_0_1_2",
      "south": "riverbank_bruinen_1_1_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_1_1_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_bruinen_1_0_2",
      "south": "riverbank_bruinen_1_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_1_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "north": "riverbank_bruinen_1_1_1",
      "east": "riverbank_bruinen_2_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "west": "riverbank_bruinen_1_1_2",
      "north": "riverbank_bruinen_2_0_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_0_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_bruinen_2_0_1",
      "north": "riverbank_bruinen_2_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_bruinen_2_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_bruinen_2_0_2",
      "north": "riverbank_celebrant_0_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_0_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_bruinen_2_1_2",
      "north": "riverbank_celebrant_0_1_2"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_0_1_2": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_celebrant_0_0_1",
      "north": "riverbank_celebrant_1_0_1"
    },
    "items": [],
    "enemies": []
  },
  "riverbank_celebrant_1_0_1": {
    "name": "Riverbank",
    "description": "You stand on the bank of a river.",
    "exits": {
      "south": "riverbank_celebrant_0_1_2",
      "north": "path_branch_10_35_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_10_35_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "riverbank_celebrant_1_0_1",
      "north": "path_connect_path_bree_rivendell_11_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_11_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_branch_10_35_6",
      "north": "path_connect_path_bree_rivendell_11_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_11_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_bree_rivendell_11_1",
      "north": "path_connect_path_bree_rivendell_11_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_11_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_bree_rivendell_11_2",
      "north": "path_connect_path_bree_rivendell_22_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_22_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_bree_rivendell_11_4",
      "north": "path_connect_path_branch_10_35_6_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_10_35_6_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_bree_rivendell_22_1",
      "north": "path_lothlorien_mirkwood_5"
    },
    "items": [],
    "enemies": []
  },
  "path_lothlorien_mirkwood_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "south": "path_connect_path_branch_10_35_6_1",
      "north": "road_mirkwood_erebor_3"
    },
    "items": [],
    "enemies": []
  },
  "road_mirkwood_erebor_3": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "south": "path_lothlorien_mirkwood_5",
      "east": "path_fangorn_mirkwood_6"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "road_mirkwood_erebor_3",
      "east": "path_fangorn_mirkwood_7"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_fangorn_mirkwood_6",
      "east": "path_fangorn_mirkwood_8"
    },
    "items": [],
    "enemies": []
  },
  "path_fangorn_mirkwood_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_fangorn_mirkwood_7",
      "east": "river_anduin_river_6_2"
    },
    "items": [],
    "enemies": []
  },
  "river_anduin_river_6_2": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "path_fangorn_mirkwood_8",
      "east": "river_celebrant_2_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "river_celebrant_2_1": {
    "name": "River",
    "description": "You are on a flowing river. You need a boat.",
    "exits": {
      "west": "river_anduin_river_6_2",
      "east": "path_connect_path_weathertop_rivendell_6_1"
    },
    "items": [],
    "enemies": [],
    "requirements": [
      {
        "type": "item",
        "item": "boat"
      }
    ]
  },
  "path_connect_path_weathertop_rivendell_6_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "river_celebrant_2_1",
      "east": "path_connect_path_weathertop_rivendell_7_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_7_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_6_1",
      "east": "path_connect_path_bree_rivendell_7_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_7_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_7_3",
      "east": "path_connect_path_bree_rivendell_8_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_8_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_bree_rivendell_7_1",
      "east": "path_connect_path_bree_rivendell_8_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_8_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_bree_rivendell_8_2",
      "east": "path_shire_old_forest_1"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_bree_rivendell_8_3",
      "east": "path_shire_old_forest_2"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_1",
      "east": "path_shire_old_forest_3"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_2",
      "east": "path_shire_old_forest_4"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_3",
      "east": "path_shire_old_forest_5"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_4",
      "east": "path_shire_old_forest_6"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_5",
      "east": "path_connect_overhill_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_overhill_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_shire_old_forest_6",
      "east": "path_connect_scary_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_scary_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_overhill_1",
      "east": "path_connect_scary_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_scary_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_scary_1",
      "east": "path_connect_needlehole_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_needlehole_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_scary_2",
      "east": "path_connect_needlehole_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_needlehole_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_needlehole_1",
      "east": "path_connect_rushock_bog_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_rushock_bog_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_needlehole_2",
      "east": "path_connect_rushock_bog_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_rushock_bog_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_rushock_bog_1",
      "east": "path_connect_rushock_bog_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_rushock_bog_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_rushock_bog_2",
      "east": "path_connect_rushock_bog_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_rushock_bog_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_rushock_bog_3",
      "east": "path_connect_path_weathertop_rivendell_13_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_13_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_rushock_bog_4",
      "east": "path_connect_path_weathertop_rivendell_13_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_13_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_13_2",
      "east": "path_connect_path_weathertop_rivendell_23_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_23_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_13_3",
      "east": "path_connect_path_weathertop_rivendell_29_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_29_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_23_2",
      "east": "path_connect_path_weathertop_rivendell_4_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_4_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_29_1",
      "east": "path_connect_path_weathertop_rivendell_6_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_6_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_4_1",
      "east": "path_connect_riverbank_forest_river_2_0_2_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_riverbank_forest_river_2_0_2_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_6_3",
      "east": "path_connect_riverbank_forest_river_0_0_2_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_riverbank_forest_river_0_0_2_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_riverbank_forest_river_2_0_2_1",
      "east": "path_connect_riverbank_forest_river_1_2_2_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_riverbank_forest_river_1_2_2_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_riverbank_forest_river_0_0_2_1",
      "east": "path_connect_riverbank_forest_river_2_0_1_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_riverbank_forest_river_2_0_1_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_riverbank_forest_river_1_2_2_1",
      "east": "path_connect_path_weathertop_rivendell_5_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_5_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_riverbank_forest_river_2_0_1_1",
      "east": "path_connect_path_shire_old_forest_5_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_old_forest_5_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_weathertop_rivendell_5_1",
      "east": "path_connect_path_shire_old_forest_5_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_old_forest_5_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_shire_old_forest_5_1",
      "east": "path_connect_path_shire_old_forest_5_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_old_forest_5_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_connect_path_shire_old_forest_5_2",
      "south": "path_connect_path_shire_old_forest_6_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_old_forest_6_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_connect_path_shire_old_forest_5_3",
      "west": "path_connect_path_shire_bree_5_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_bree_5_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_old_forest_6_1",
      "west": "path_connect_path_shire_bree_5_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_bree_5_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_bree_5_1",
      "west": "path_connect_path_shire_bree_5_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_bree_5_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_bree_5_2",
      "west": "path_connect_path_shire_bree_6_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_bree_6_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_bree_5_3",
      "west": "path_shire_old_forest_7"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_bree_6_1",
      "west": "path_shire_old_forest_8"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_shire_old_forest_7",
      "west": "path_shire_old_forest_13"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_shire_old_forest_8",
      "west": "path_shire_old_forest_14"
    },
    "items": [],
    "enemies": []
  },
  "path_shire_old_forest_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_shire_old_forest_13",
      "west": "road_gondor_minas_tirith_1"
    },
    "items": [],
    "enemies": []
  },
  "road_gondor_minas_tirith_1": {
    "name": "Road",
    "description": "You are on a well-maintained road.",
    "exits": {
      "east": "path_shire_old_forest_14",
      "west": "path_branch_0_35_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_0_35_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "road_gondor_minas_tirith_1",
      "west": "path_branch_0_35_7"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_0_35_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_0_35_6",
      "west": "path_connect_waymeet_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_waymeet_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_0_35_7",
      "west": "path_connect_waymeet_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_waymeet_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_waymeet_1",
      "west": "path_connect_waymeet_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_waymeet_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_waymeet_2",
      "west": "path_connect_overhill_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_overhill_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_waymeet_3",
      "west": "path_connect_overhill_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_overhill_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_overhill_2",
      "west": "path_connect_path_bree_rivendell_14_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_14_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_overhill_3",
      "west": "path_connect_path_bree_rivendell_14_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_14_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_rivendell_14_1",
      "west": "path_connect_path_bree_rivendell_17_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_17_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_rivendell_14_3",
      "west": "path_connect_path_bree_rivendell_5_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_5_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_rivendell_17_2",
      "west": "path_connect_path_bree_rivendell_5_4"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_5_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_rivendell_5_2",
      "west": "path_connect_riverbank_forest_river_1_2_1_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_riverbank_forest_river_1_2_1_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_rivendell_5_4",
      "west": "path_connect_old_forest_entrance_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_old_forest_entrance_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_riverbank_forest_river_1_2_1_1",
      "west": "path_connect_path_shire_old_forest_14_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_old_forest_14_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_old_forest_entrance_1",
      "west": "path_branch_0_35_5"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_0_35_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_old_forest_14_1",
      "west": "path_branch_20_35_6"
    },
    "items": [],
    "enemies": []
  },
  "path_branch_20_35_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_0_35_5",
      "west": "path_connect_path_bree_weathertop_29_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_weathertop_29_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_branch_20_35_6",
      "west": "path_connect_path_bree_weathertop_39_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_weathertop_39_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_weathertop_29_1",
      "west": "path_connect_path_weathertop_rivendell_2_3"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_weathertop_rivendell_2_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_weathertop_39_1",
      "west": "path_connect_path_bree_rivendell_6_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_6_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_weathertop_rivendell_2_3",
      "west": "path_connect_path_bree_rivendell_4_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_bree_rivendell_4_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_rivendell_6_1",
      "west": "path_connect_path_shire_old_forest_13_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_old_forest_13_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_bree_rivendell_4_2",
      "west": "path_connect_path_shire_bree_14_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_shire_bree_14_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_old_forest_13_2",
      "west": "path_connect_path_connect_elrond_study_1_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_connect_elrond_study_1_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_shire_bree_14_1",
      "west": "path_connect_path_branch_0_35_5_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_0_35_5_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_connect_elrond_study_1_2",
      "west": "path_connect_path_branch_0_35_5_2"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_path_branch_0_35_5_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_0_35_5_1",
      "west": "path_rohan_mordor_3"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_path_branch_0_35_5_2",
      "west": "path_rohan_mordor_4"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_3",
      "south": "path_rohan_mordor_6"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rohan_mordor_4",
      "east": "path_rohan_mordor_9"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_6",
      "east": "path_rohan_mordor_11"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_9",
      "east": "path_rohan_mordor_12"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_11",
      "east": "path_rohan_mordor_14"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_12",
      "east": "path_rohan_mordor_17"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_14",
      "east": "path_rohan_mordor_18"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_17",
      "east": "path_rohan_mordor_20"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_20": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_18",
      "east": "path_rohan_mordor_21"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_20",
      "east": "path_rohan_mordor_23"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_23": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_21",
      "east": "path_rohan_mordor_25"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_25": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_23",
      "east": "path_rohan_mordor_26"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_26": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_25",
      "east": "path_rohan_mordor_28"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_28": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_26",
      "east": "path_gondor_mordor_3"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_3": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_rohan_mordor_28",
      "east": "path_gondor_mordor_6"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_6": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_gondor_mordor_3",
      "east": "path_gondor_mordor_9"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_9": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_gondor_mordor_6",
      "east": "path_gondor_mordor_10"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_gondor_mordor_9",
      "east": "path_gondor_mordor_11"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_11": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_gondor_mordor_10",
      "east": "path_gondor_mordor_12"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_12": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_gondor_mordor_11",
      "east": "path_gondor_mordor_13"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_13": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "west": "path_gondor_mordor_12",
      "south": "path_gondor_mordor_14"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_14": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_gondor_mordor_13",
      "south": "path_gondor_mordor_15"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_gondor_mordor_14",
      "south": "path_gondor_mordor_17"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_17": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_gondor_mordor_15",
      "south": "path_gondor_mordor_18"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_18": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_gondor_mordor_17",
      "south": "path_gondor_mordor_21"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_21": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_gondor_mordor_18",
      "south": "path_gondor_mordor_7"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_gondor_mordor_21",
      "south": "path_rohan_mordor_15"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_15": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_gondor_mordor_7",
      "south": "path_rohan_mordor_16"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_16": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rohan_mordor_15",
      "south": "path_rohan_mordor_5"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_5": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rohan_mordor_16",
      "south": "path_rohan_mordor_8"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_8": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rohan_mordor_5",
      "south": "path_rohan_mordor_10"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_10": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rohan_mordor_8",
      "south": "path_rohan_mordor_27"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_27": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "north": "path_rohan_mordor_10",
      "west": "path_rohan_mordor_29"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_29": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_27",
      "west": "path_rohan_mordor_30"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_30": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_29",
      "west": "path_rohan_mordor_31"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_31": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_30",
      "west": "path_rohan_mordor_32"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_32": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_31",
      "west": "path_connect_mordor_plains_1"
    },
    "items": [],
    "enemies": []
  },
  "path_connect_mordor_plains_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_32",
      "west": "path_rohan_mordor_1"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_connect_mordor_plains_1",
      "west": "path_rohan_mordor_2"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_2": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_1",
      "west": "path_gondor_mordor_1"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_1": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_rohan_mordor_2",
      "west": "path_gondor_mordor_4"
    },
    "items": [],
    "enemies": []
  },
  "path_gondor_mordor_4": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_gondor_mordor_1",
      "west": "path_rohan_mordor_7"
    },
    "items": [],
    "enemies": []
  },
  "path_rohan_mordor_7": {
    "name": "Path",
    "description": "You are on a narrow path.",
    "exits": {
      "east": "path_gondor_mordor_4",
      "south": "green_dragon"
    },
    "items": [],
    "enemies": []
  }
};
