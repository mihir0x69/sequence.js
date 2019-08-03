

const boardSlots = [
  
    [{"row": 0, "col": 0,
    "isCorner": true
    },
    {"row": 0, "col": 1,
    "card": {
        "suit": 1, // number between 1 - 4
        "rank": 2, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 0, "col": 2,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 0, "col": 3 ,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 4, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 0, "col": 4 ,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 0, "col": 5,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 0, "col": 6,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 7, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 0, "col": 7 ,
    
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 0, "col": 8 ,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 0, "col": 9 ,
      "isCorner": true}] ,
    [{"row": 1, "col": 0 ,
    "card": {
        "suit": 2, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 1, "col": 1 ,
      "card": {
        "suit": 2, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 1, "col": 2 ,
      "card": {
        "suit": 2, // number between 1 - 4
        "rank": 4, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 1, "col": 3 ,
      "card": {
        "suit": 2, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 1, "col": 4,
      "card": {
        "suit": 2, // number between 1 - 4
        "rank": 2, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 1, "col": 5 ,
      "card": {
        "suit": 4, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 1, "col": 6,
      "card": {
        "suit": 4, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 1, "col": 7,
      "card": {
        "suit": 4, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 1, "col": 8 ,
      "card": {
        "suit": 4, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 1, "col": 9 ,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }}] ,
    [{"row": 2, "col": 0 ,
    "card": {
        "suit": 2, // number between 1 - 4
        "rank": 7, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 2, "col": 1,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 2, "col": 2 ,
      "card": {
        "suit": 3, // number between 1 - 4
        "rank": 2, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 2, "col": 3 ,
      "card": {
        "suit": 3, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 2, "col": 4,
      "card": {
        "suit": 3, // number between 1 - 4
        "rank": 4, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 2, "col": 5 ,
      "card": {
        "suit": 3, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 2, "col": 6,
      "card": {
        "suit": 3, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 2, "col": 7 ,
      "card": {
        "suit": 3, // number between 1 - 4
        "rank": 7, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 2, "col": 8 ,
      "card": {
        "suit": 4, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 2, "col": 9 ,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }}] ,
      //done till now **********************************
    [{"row": 3, "col": 0, "card": {
        "suit": 2, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 3, "col": 1 },{"row": 3, "col": 2 ,
      "card": {
        "suit": 1, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 3, "col": 2 ,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 3, "col": 3 ,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 3, "col": 4 ,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 4, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 3, "col": 5 ,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 3, "col": 6,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 2, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 3, "col": 7 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 3, "col": 8 ,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},
      {"row": 3, "col": 9 ,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } }] ,
    [{"row": 4, "col": 0,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 4, "col": 1 ,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 4, "col": 2 ,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 7, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 4, "col": 3 ,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 4, "col": 4,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 4, "col": 5 ,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 4, // number between 1 - 136
        "twoEyedJack": false, // boolean re6
        "oneEyedJack": false // boolean rep6
      } },{"row": 4, "col": 6 ,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 1, // number between 1 - 136
        "twoEyedJack": false, // boolean re6
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 4, "col": 7,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 4, "col": 8,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 7, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 4, "col": 9,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } }] ,
    [{"row": 5, "col": 0,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 5, "col": 1 ,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 5, "col": 2 ,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 5, "col": 3,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 7, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 5, "col": 4 ,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 2, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 5, "col": 5,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 5, "col": 6,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 5, "col": 7,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 5, "col": 8 ,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 5, "col": 9 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 2, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }}] ,
    [{"row": 6, "col": 0,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 1,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 2,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 3,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 4,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 5,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 6,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 7,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 8,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 6, "col": 9 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }}] ,
    [{"row": 7, "col": 0,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 1 ,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 7, "col": 2,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 3,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 4,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 5,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 6,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 7,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 8,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 4, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 7, "col": 9,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 4, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } }] ,
    [{"row": 8, "col": 0,"card": {
        "suit": 2, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 8, "col": 1,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 7, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 8, "col": 2 ,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 8, "col": 3 ,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 8, "col": 4,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 4, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 8, "col": 5,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 8, "col": 6,"card": {
        "suit": 1, // number between 1 - 4
        "rank": 2, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 8, "col": 7,"card": {"suit": 4, // number between 1 "isCorner": true
        "rank": 2, // number between 1 "isCorner": true
        "twoEyedJack": false, // boolea"isCorner": true
        "oneEyedJack": false // boolean"isCorner": true
      } },{"row": 8, "col": 8,"card": {
        "suit": 4, // number between 1 - 4
        "rank": 3, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 8, "col": 9,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 5, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } }] ,
    [{"row": 9, "col": 0,"isCorner":true },
    {"row": 9, "col": 1 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 9, "col": 2 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 13, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 9, "col": 3 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 12, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 9, "col": 4 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 10, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 9, "col": 5 ,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 9, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      }},{"row": 9, "col": 6,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 8, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 9, "col": 7,"card": {
        "suit": 7, // number between 1 - 4
        "rank": 1, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 9, "col": 8,"card": {
        "suit": 3, // number between 1 - 4
        "rank": 6, // number between 1 - 13
        "twoEyedJack": false, // boolean represent if its a two eyed jack
        "oneEyedJack": false // boolean represent if its a one eyed jack
      } },{"row": 9, "col": 9 ,"isCorner": true}] 
    
]



function getFreePostionsAroundCardSLot(boardSlots,playerCards,yourChipcolor) {
    var allCardPositions = [];
    for (let i = 0; i < playerCards.length; i++) {
        const card = playerCards[i];
        allCardPositions.push(getCardPositionsFromBoard(boardSlots,card));
    }      
   return getAllPossiblePlacmentsFromCardSlots (allCardPositions);
}


function getCardPositionsFromBoard(boardSlots,card) {
    let cardPositions = [];
    for (let row = 0; row < boardSlots.length; row++) {
        const slotsRow = boardSlots[row];
        for (let col = 0; col < slotsRow.length; col++) {
            let slot = slotsRow[col];
            if (slot.chip == null &&   slot.card != null 
                && slot.card.suit === card.suit && slot.card.rank === card.rank) {
                cardPositions.push ({ "row": row, "col": col ,weight : 0 });
              }
        }
    }
    return cardPositions;
}


function getAllPossiblePlacmentsFromCardSlots(allCardPositions) {
    debugger
    var positionsShouldConsider = [];
    for (let row = 0; row < allCardPositions.length; row++) {
        var positions = allCardPositions[row];
        for (let position = 0; position < positions.length; position++) {
        var currentPosition = positions[position]    
        //get vertical positions increasing
        for(let row=currentPosition.row+1 ; row < currentPosition.row+5 ; row++ ) {
            if(row > 9) {
                break;
            }
            positionsShouldConsider.push({"row":row ,"col":currentPosition.col})
        }

        //get vertical positions decreasing
        for(let row=currentPosition.row -1 ; row < currentPosition.row - 5 ; row-- ) {
            if(row < 0) {
                break;
            }
            positionsShouldConsider.push({"row":row ,"col":currentPosition.col})
        }

         //get horizantal positions increasing
         for(let col=currentPosition.col + 1 ; col < currentPosition.col+5 ; col++ ) {
            if(col > 9) {
                break;
            }
            positionsShouldConsider.push({"row":currentPosition.row ,"col":col})
        }

        //get horizantal positions decreasing
        for(let col=currentPosition.col-1 ; col < currentPosition.col-5 ; col-- ) {
            if(col < 0) {
                break;
            }
            positionsShouldConsider.push({"row":currentPosition.row ,"col":col})
        }
    }
}

    return positionsShouldConsider;
}