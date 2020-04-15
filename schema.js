db.courses.insert([
    {
        _id: 'c1',
        name: "ruby"
        
    },
    {
        _id: 'c2',
        name: "rails"
        
    }
]);

db.model.insert([
    {
         course: 'c1',
        _id: 'm1',
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
    },
    {
          course: 'c2'
        _id: 'm2',
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
    }
]);


db.user.insert([
    {
        _id: 'u1',
        name: 'xyz',
        
        model: ['m1', 'm2']
        assignement: [1,2]
    },

 {
        _id: 'u2',
        name: 'abc',
        
        model: ['m1']
 
        assignement: [1,2]
    },
    
]);


db.ansers.insert([
    {
        _id: 'a1',
         user: 'u1'
        quastion: [ 1 , 2 ]
       
    }
 {
        _id: 'a2',
         user: 'u2'
        quastion: [ 1 , 2 ]
       
    }
]);
