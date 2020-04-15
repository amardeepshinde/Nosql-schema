db.cources.insert({
 "cources": [ 
    {
        "cource_id": "1",
        "modelname": "ruby",
         "qustions": [ {"qid": 1 , "qustion1":[ {"a": 20,
                                      "b": 30,
                                      "c": 40
                                       }]
                                      },
                       { "qid": 2 ,"qustion2":[ {"a": 20,
                                       "b": 30,
                                       "c": 40
                                      } ]  
                                  }
                              ],
                       
                       
        "cource_id": "2",
        "modelname": "rails",
         "qustions": [ { "qid": 1 ,"qustion1": [{"a": 20,
                                                  "b": 30,
                                                   "c": 40
                                      } ]
                                      },
                        {"qid": 2 ,"qustion2": [ {"a": 20,
                                                  "b": 30,
                                                   "c": 40
                                      } ]
                                      } 
                       ]
                       
          
                       
           }],
                   
              
               
               
               
               
     "users": [  { "name" : "xyz",
                 "userid" : 123,
                  "cources":[{"cource_id": 1},
                              {"cource_id": 2}],
                  "assignement":[{"qid": 2},
                                 {"qid": 1 }]
                     
                                       
     }]
 })
