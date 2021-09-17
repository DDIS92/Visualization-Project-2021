
// Dummy Database containing Students, Teachers and Courses datasets //

const teachers = [
  {ID: "T101", 
  Registration_Details: [], 
  Email: "abc@123.com", Name: "", Age: 35, Password: "", UpdatedLast: "", 
  Qualifications:[], 
  Address_Details:[], 
  Course_Details:[
    {ID: "C101", 
  Name: "Mathematics for Grade 6",
   Academic_Term: "2021-2022", 
   Course_Rating: 4.5, 
   Difficulty: "Intermediate",
  Ratings:[]
}]
}
];

const courses = [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
Evaluation: [{Difficulty:5, Clarity: 3, Support: 3, Access_to_Materials: 2, Quality: 1, Assessment: 3}],
Units:[
{UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 0, Score: 0, Proficiency: "Unattempted/Not Familiar",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: ""}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]},
{QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: ""}]}
]}]
},
{UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 0, Score: 0, Proficiency: "Unattempted/Not Familiar",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: ""}]},
{QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: ""}]}
]}]},
{UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 0, Score: 0, Proficiency: "Unattempted/Not Familiar",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: ""}]},
{QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: ""}]}
]}]},
{UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 0, Score: 0, Proficiency: "Unattempted/Not Familiar",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: ""}]},
{QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: ""}]}
]}]}]},
{CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
Evaluation: [{Difficulty:5, Clarity: 3.5, Support: 3, Access_to_Materials: 4, Quality: 4.5, Assessment: 3.5}],
Units:[
{UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 0, Score: 0, Proficiency: "Unattempted/Not Familiar",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: ""}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: ""}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: ""}]}
]}]
},
{UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 0, Score: 0.5, Proficiency: "Need More Revision",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]}]},
{UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 0, Score: 0, Proficiency: "Unattempted/Not Familiar",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: ""}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: ""}]},
{QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: ""}]}
]}]},
{UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 0, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 0, Score: 0, Proficiency: "Unattempted/Not Familiar",
Questions :[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]},
{QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]},
{QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]}
]}]}]}
]
;



const students = [
    {SID: "St101", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "A"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.4, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "D"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    },
    {SID: "St102", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "bcd@123.com", Name : "BCD", Age : 13, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [
    {
      CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
  }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.45, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "D"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
  }]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
  }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]}
    ]
  }]}
    ]
    },
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.5, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "B"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    },
    {SID: "St103", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "cde@123.com", Name : "CDE", Age : 11, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
  }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]
  }]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
  }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
    ]
  }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.4, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "B"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    },
    {SID: "St104", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "def@123.com", Name : "DEF", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
  }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]
  }]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]}
    ]
  }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.65, Proficiency: "Familiar",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]}
    ] 
  }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.65, Proficiency: "Familiar",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]}
]  
  }]}
    ]
    }
    ]
    },
    {SID: "St105", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "efg@123.com", Name : "EFG", Age : 13, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.9, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
  }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]
  }]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]}
    ]
  }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]}
    ]
  }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Familiar",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    }
    ,
    {SID: "St106", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.72, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.5, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "B"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.74, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    }
    ,
    {SID: "St107", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.56, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "B"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.4, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "D"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Familiar",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]}
]  
  }]}
    ]
    }
    ]
    }
    ,
    {SID: "St108", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.45, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.78, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.54, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.5, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "D"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Familiar",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "D"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    }
    ,
    {SID: "St109", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.79, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.73, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.5, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.65, Proficiency: "Familiar",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "D"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.9, Proficiency: "Largely Proficicent",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    }
    ,
    {SID: "St110", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: ""}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: ""}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: ""}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.58, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Unattempted/Not Familiar",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.65, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]  
  }]}
    ]
    }
    ]
    }
    ,
    {SID: "St111", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.57, Proficiency: "Need More Revision",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.5, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "D"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "C"}]}
]  
  }]}
    ]
    }
    ]
    },
    {SID: "St112", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.85, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "C"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "B"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.56, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.9, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "D"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "B"}]}
]  
  }]}
    ]
    }
    ]
    }
    ,
    {SID: "St113", 
    Registration_Details : [{CreationDate: "August 23rd 2021"}], 
    Email : "abc@123.com", Name : "ABC", Age : 12, Password: "xxxx", UpdatedLast: "August 23rd 2021", School: "XYZ Secondary School", Year: "6th Grade", 
    Address_Details: [], 
    Course_Details: [{CID:"C101", Name: "Mathematics for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Algebra I",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101101", Name: "Algebra I Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[
    {QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U102", Name: "Algebra II",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q101102", Name: "Algebra II Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.8, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
    ]}]},
    {UID:"U103", Name: "Mensuration",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101103", Name: "Mensuration Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.75, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "D"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "D",Selected_Answer: "C"}]}
    ]
    }]},
    {UID:"U104", Name: "Exponents and Logarithms",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q101104", Name: "Exponents and Logarithms Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Need More Revision",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
    {QuestionID: "Quest002", Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
    {QuestionID: "Quest003", Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]}
    ]
    }]}
    ]
    }
    ,
    {
      CID:"C102", Name: "Science for Grade 6", Academic_Term: "2021-2022", Course_Rating: 4.5, Difficulty: "Intermediate", 
    Units:[
    {UID:"U101", Name: "Newton's Laws of Motion",	Time_Spent_on_Unit: 3600, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102101", Name: "Laws of Motion Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]}
]
  }]},
    {UID:"U102", Name: "Electromagnetism",	Time_Spent_on_Unit: 2400, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102102", Name: "Electromagnetism Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "D"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]}
]  
  }]},
    {UID:"U103", Name: "3 States of Matter",	Time_Spent_on_Unit: 1200, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:1, 
    Quizzes:[{QID: "Q102103", Name: "3 States of Matter Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.7, Proficiency: "Largely Proficient",
    Questions:[{QuestionID: "Quest001",Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "C",Selected_Answer: "C"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "B",Selected_Answer: "B"}]}
]  
  }]},
    {UID:"U104", Name: "Cell Reproduction",	Time_Spent_on_Unit: 1800, Teaching_Medium: [{Video: "N",Audio: "Y", Text: "Y"}],ReadStatus:0, 
    Quizzes:[{QID: "Q102104", Name: "Cell Reproduction Concepts Check",Time_Spent_on_Quiz: 600, Score: 0.6, Proficiency: "Familiar",
    Questions:[{QuestionID: "Quest001", Q:"Question 1 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest002",Q:"Question 2 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "A"}]},
{QuestionID: "Quest003",Q:"Question 3 Text",Answers:[{A: "A",B: "B", C: "C",D: "D", Correct_Answer: "A",Selected_Answer: "B"}]}
]  
  }]}
    ]
    }
    ]
    }
    ];






// Manipulating the data to feed into the visualizations //

// 1. Quiz Scores - The idea is to generate the scores + students IDs in a scatterplot/bar plot format //


//scatterplot/barplot data final format
  scatterplot_barplot = []

  // scores format (only used when data for only one quiz was outputted) //
  scores = []

  //boxplot data final format
  box_whisker = []



  // This snippet of code examines the student database, returns the specified  fields, and then stores them in the scatterplot_barplot array //
  // & box_whisker array //
  // Fields for Scatterplot: Student ID, Quiz Name, 100*Score //
  // Fields for Box and Whisker: Student ID, Course ID, Course Name, Quiz Name, Quiz ID, 100*score //
  for(let i =0; i<students.length; i++){
    for(let j =0; j<students[i].Course_Details.length; j++){
      for(let k =0; k<students[i].Course_Details[j].Units.length; k++){
        for(let l =0; l<students[i].Course_Details[j].Units[k].Quizzes.length; l++){
        //if(students[i].Course_Details[j].Units[k].Quizzes[l].Name===Quiz_Name){
          student = students[i].SID;
          course = students[i].Course_Details[j].CID;
          course_name = students[i].Course_Details[j].Name;
          quiz = students[i].Course_Details[j].Units[k].Quizzes[l].Name;
          score = students[i].Course_Details[j].Units[k].Quizzes[l].Score;
          quiz_ID = students[i].Course_Details[j].Units[k].Quizzes[l].QID;
          scatterplot_barplot.push({StudentID: student, Quiz: quiz, Score: Math.round(100*score)});
  //}
        }
      //scores.push(100*score);
      box_whisker.push({Student: student, Course: course, CourseName: course_name, 
        Quiz: quiz, Quiz_ID: quiz_ID, Scores: Math.round(100*score)});
      //console.log(quiz,scores)
    }
  }
  };

  //box_whisker.push({Quiz: Quiz_Name, Scores: scores});

  
  // Validating the output
  //console.log(Quiz_Name, ":", scatterplot_barplot);
  //console.log(Quiz_Name, ":", box_whisker);






const fs = require('fs');

// Writing the scatterplot data to a JSON file
let data = JSON.stringify(scatterplot_barplot);
fs.writeFileSync('SC_Quiz_Scores.json', data);


// Writing the boxplot data to a JSON file
let data2 = JSON.stringify(box_whisker);
fs.writeFileSync('BWP_Quiz_Scores.json', data2);





//2. Progress Calculation //

// This will have the progress at student and course level //
progressbar_student_and_course = []


// Calculating the percentage read for each course and student, based on ReadStatus, and storing the specified fields in the //
// progressbar_student_and_course array. //
// Fields stored: Student ID, Course Name, Course ID, Pct_Read, Pct_Remaining
// The calculation for Pct_Read is 100*(Number of Units with ReadStatus = 1/Number of Units in Total) //
// The calculation for Pct_Remaining is (100 - 100*Pct_Read) //
for(let i =0; i<students.length; i++){
  for(let j =0; j<students[i].Course_Details.length; j++){
    var d=0
    for(let k =0; k<students[i].Course_Details[j].Units.length; k++){
      d += students[i].Course_Details[j].Units[k].ReadStatus}
      progressbar_student_and_course.push({Student: students[i].SID, 
        Course: students[i].Course_Details[j].Name,
        CourseID: students[i].Course_Details[j].CID, 
        Number_of_Courses_Read: d,
        Pct_Read: 100*d/students[i].Course_Details[j].Units.length,
        Pct_Remaining: 100-100*d/students[i].Course_Details[j].Units.length})
        //console.log(students[i].SID, students[i].Course_Details[j].Units, d)
    }};


// Validating the output //
//console.log(progressbar_student_and_course);



// Writing the Progress Data at Student/Course Level
let data3 = JSON.stringify(progressbar_student_and_course);
fs.writeFileSync('Student_Course_Progress.json', data3);




//3. Course Average Completion Rate - Currently I have incorporated the calculation for average completion //
// I planned to implement the median as well //


// This was done in two steps. First, the specified fields from progress_student_and_course were stored in progressbar_course_intermediate //
// Fields: Course ID, Course Name and Pct_Read //
progressbar_course_intermediate = []


for(let i =0; i<progressbar_student_and_course.length; i++){
  progressbar_course_intermediate.push({CourseID: progressbar_student_and_course[i].CourseID,
                                      Course: progressbar_student_and_course[i].Course, 
                                      Pct_Read: progressbar_student_and_course[i].Pct_Read})
}


// Validating the output //
//console.log(progressbar_course_intermediate)



// Grouping the fields from progressbar_course_intermediate by Course Name so that I can calculate the average completion rate //
// Key-Value pairing: Course is the key, the JSON array containing Course ID and Pct_Read is the value //
progressbar_course_intermediate_v2 = progressbar_course_intermediate.reduce((acc, item) => {
  acc[`${item.Course}`] = (acc[`${item.Course}`] || []);
  acc[`${item.Course}`].push({CourseID: item.CourseID, Scores: item.Pct_Read});
  return acc;
}, {});


// Validating the output //
//console.log(progressbar_course_intermediate_v2);


// Writing the Progress Data at Course/CourseID Level (step 2) (Validation step)
let data4 = JSON.stringify(progressbar_course_intermediate_v2);
fs.writeFileSync('Course_Progress.json', data4);



// Calculating and storing the average completion rate by Course Name. I am also storing the CourseID in case users want to use that
// field to filter the dataset. //
progressbar_course_intermediate_v3 = []


// This is a classic sum/count calculation. For each course, the completion rates are summed up, then divided by the number of records // 
// (in this case, the number of students //
// The course ID/Course Name and their corresponding average are stored in progressbar_course_intermediate_v3 //
var sum = 0;
for( var key in progressbar_course_intermediate_v2){
  value = progressbar_course_intermediate_v2[key]
  //console.log("XXX",value, sum,key)
  for( var i = 0; i < value.length; i++ ){
    sum +=  value[i].Scores;
    //console.log(sum,value[i].Scores)
  }
  var avg = sum/value.length;
  progressbar_course_intermediate_v3[key] = ({avg: avg, CourseID: value[0].CourseID})
  sum = 0
  };


// Validating the output //
//console.log(progressbar_course_intermediate_v3)


// Generating the final Course Average Completion Rate dataset // 
// Fields: Course_Name, Course ID, Avg_Completion_Rate, Remaining (this was calcuated to make the progress bar) //
progressbar_course_final = []

for (var key in progressbar_course_intermediate_v3){
  progressbar_course_final.push({Course: key,
    CourseID: progressbar_course_intermediate_v3[key].CourseID,
    Avg_Completion_Rate: progressbar_course_intermediate_v3[key].avg,
    Remaining: 100 - progressbar_course_intermediate_v3[key].avg});
}


// Writing the Course Completion Rate data (step 3)
let data5 = JSON.stringify(progressbar_course_final);
fs.writeFileSync('Course_Progress_Final.json', data5);



//4. Question Selection Visualization Data - Pie Chart/Bar Chart


// Creating an array to store the relevant Quiz fields: Quiz ID, Question ID, Quiz Name, Question and Selected Answer //
Quiz_Question_Answer_Selected = []


// This scrap of code was written to validate an additional statistic: the proportion of questions answered correctly //
sum_correct = 0
total_answer = 0
 for(let i =0; i<students.length; i++){
  for(let j =0; j<students[i].Course_Details.length; j++){
    for(let k =0; k<students[i].Course_Details[j].Units.length; k++){
      for(let l =0; l<students[i].Course_Details[j].Units[k].Quizzes.length; l++){
        for(let m =0; m<students[i].Course_Details[j].Units[k].Quizzes[l].Questions.length; m++){
          total_answer +=1
          if(students[i].Course_Details[j].Units[k].Quizzes[l].Questions[m].Answers[0].Correct_Answer
            ===students[i].Course_Details[j].Units[k].Quizzes[l].Questions[m].Answers[0].Selected_Answer){
              sum_correct +=1
            }
              Quiz_Question_Answer_Selected.push({
              QuizName: students[i].Course_Details[j].Units[k].Quizzes[l].Name,
              QuizID: students[i].Course_Details[j].Units[k].Quizzes[l].QID,
              QuestionID: students[i].Course_Details[j].Units[k].Quizzes[l].Questions[m].QuestionID,
              QuestionName: students[i].Course_Details[j].Units[k].Quizzes[l].Questions[m].Q,
              AnswerSelected: students[i].Course_Details[j].Units[k].Quizzes[l].Questions[m].Answers[0].Selected_Answer
              ,Correct_Answer: students[i].Course_Details[j].Units[k].Quizzes[l].Questions[m].Answers[0].Correct_Answer
              })
     }
     total_answer = 0
     sum_correct = 0
  }
}
    }
  }
//}
;

// Validating Scrap output //
//console.log(Quiz_Question_Answer_Selected)



// Grouping the relevant fields by Quiz ID and Question ID so that I can count the number of selections per answer //
// Key-Value pairing: Quiz ID, Quiz Name, Question ID and Question Name is the composite key, //
// the JSON array containing Quiz ID, Quiz Name, Question ID, Question Name, Selected Answer and Correct Answer is the value //
const Quiz_Question_Answer_Selected_v2 = Quiz_Question_Answer_Selected.reduce((r, { QuizName, QuizID, QuestionID,QuestionName,...rest}) => {
  const key = `${QuizName}-${QuizID}-${QuestionID}-${QuestionName}`;
  r[key] = r[key] || { QuizName, QuizID, QuestionID, QuestionName: [] };
  r[key]["QuestionName"].push(rest)
  return r;
}, {})



// Storing the values from Quiz_Question_Answer_Selected_v2 in Quiz_Question_Answer_Selected_v3 //
const Quiz_Question_Answer_Selected_v3 = Object.values(Quiz_Question_Answer_Selected_v2)


// Validating output //
console.log("test", Quiz_Question_Answer_Selected_v3)




// Counting the number of answer selections by question and quiz //
// For each question, the following operations take place: //
// If the Selected Answer equals "A", 1 is added to the parameter A. //
// If the Selected Answer equals "B", 1 is added to the parameter B. //
// If the Selected Answer equals "C", 1 is added to the parameter C. //
// If the Selected Answer equals "D", 1 is added to the parameter D. //
// The Quiz ID/Quiz Name and Question ID are stored in Quiz_Question_Answer_Selected_v4 (can add Question Text as well, once that has) //
// been defined in the dataset //
// The Correct Answer is simply stored as a parameter called Correct_Answer, which is then stored in Quiz_Question_Answer_Selected_v4 //
// as a field //
// The totals for A,B,C,D are stored as fields in Quiz_Question_Answer_Selected_v4 //
Quiz_Question_Answer_Selected_v4 = []

for(let i =0; i<Quiz_Question_Answer_Selected_v3.length; i++){
A = 0
B = 0
C = 0
D = 0
let Correct_Answer = ""
for(let j =0; j<Quiz_Question_Answer_Selected_v3[i].QuestionName.length; j++){

if(Quiz_Question_Answer_Selected_v3[i].QuestionName[j].AnswerSelected==="A"){
  A +=1
}
if(Quiz_Question_Answer_Selected_v3[i].QuestionName[j].AnswerSelected==="B"){
  B +=1
}
if(Quiz_Question_Answer_Selected_v3[i].QuestionName[j].AnswerSelected==="C"){
  C +=1
}
if(Quiz_Question_Answer_Selected_v3[i].QuestionName[j].AnswerSelected==="D"){
  D +=1
}
Correct_Answer = Quiz_Question_Answer_Selected_v3[i].QuestionName[j].Correct_Answer
}

Quiz_Question_Answer_Selected_v4.push({QuizID: Quiz_Question_Answer_Selected_v3[i].QuizID,
  QuizName: Quiz_Question_Answer_Selected_v3[i].QuizName,
  QuestionID: Quiz_Question_Answer_Selected_v3[i].QuestionID,
  Correct_Answer: Correct_Answer,
AnswerA_Selected: A, AnswerB_Selected: B, AnswerC_Selected: C, AnswerD_Selected: D
})

A = 0
B = 0
C = 0
D = 0

};


// Validating the output //
//console.log(Quiz_Question_Answer_Selected_v4)



// Writing the Answer Selection Data //
let data6 = JSON.stringify(Quiz_Question_Answer_Selected_v4);
fs.writeFileSync('Quiz_Question_Selection.json', data6);



// Evaluation Code (Radar Chart Format)//


// This pushes two fields to course_evaluation: //
// Course Name, and Evaluation (which is an array with different parameters and their scores) //
course_evaluation = [];


for(let i =0; i<courses.length; i++){
  //for(let j =0; j<courses[i].Course_Details.length; j++){
    course_evaluation.push({
        Course: courses[i].Name,
        Evaluation: courses[i].Evaluation})
    
    //console.log(i, course_evaluation)

    };


// Writing the Evaluation data //
let data7 = JSON.stringify(course_evaluation);
fs.writeFileSync('Course_Evaluation.json', data7);



// Evaluation Code (Area Format) // - This was used for the second Victory View (the area chart). Might not be needed anymore //
evaluation_metrics = [];

for(let i =0; i<courses.length; i++){
  for(let j =0; j<courses[i].Evaluation.length; j++){
    metrics = []
    keys = Object.keys(courses[i].Evaluation[j])
    values = Object.values(courses[i].Evaluation[j])
    for(let k =0; k<keys.length; k++){
  metrics.push({x: keys[k], y0: 0, y: values[k]})
  }
  evaluation_metrics.push({Name: courses[i].Name, Evaluation: metrics})
  }
  };

  //console.log("X", metrics)
  //console.log("Y",evaluation_metrics[1].Evaluation, evaluation_metrics[1].Name)


// Writing the alternate version of the evaluation data //
let data8 = JSON.stringify(evaluation_metrics);
fs.writeFileSync('Course_Evaluation_Area.json', data8);

  


// Debugging Space //
const questions_quiz = require('C:/Users/Siddarth anand/victory-tutorial/Quiz_Question_Selection.json')
const Quiz_Param = "Q101101";
const Question_Param = "Quest002";
const Quiz_Name_Parameter = "Algebra I Concepts Check";
const Course_Param = "Mathematics for Grade 6";
const Student_Param = "St102";




questions_quiz_filtered = questions_quiz.filter(quest => (
  //quest.QuizID === Quiz_Param 
  //&& 
  quest.QuestionID === Question_Param
  && quest.QuizName === Quiz_Name_Parameter
  ))

//console.log(questions_quiz_filtered)

questions_quiz_filtered_v2 = []
questions_quiz_filtered_v2.push({x: "A",y: questions_quiz_filtered[0].AnswerA_Selected},
{x: "B",y: questions_quiz_filtered[0].AnswerB_Selected},
{x: "C",y: questions_quiz_filtered[0].AnswerC_Selected},
{x: "D",y: questions_quiz_filtered[0].AnswerD_Selected}
);



const course_evaluation_read = require('C:/Users/Siddarth anand/victory-tutorial/Course_Evaluation.json')
const Course_Evaluation_Filtered = course_evaluation_read.filter(course => course.Course === Course_Param);
let Course_Evaluation_Scores = Course_Evaluation_Filtered[0].Evaluation;



function getMaxima(data) {
  const groupedData = Object.keys(data[0]).reduce((memo, key) => {
    memo[key] = data.map((d) => d[key]);
    return memo;
  }, {});
  return Object.keys(groupedData).reduce((memo, key) => {
    //memo[key] = Math.max(...groupedData[key]);
    memo[key] = 5
    return memo;
  }, {});
};

function processData(data) {
  const maxByGroup = getMaxima(data);
  const makeDataArray = (d) => {
    return Object.keys(d).map((key) => {
      return { x: key, y: d[key]/maxByGroup[key] };
    });
  };
  return data.map((datum) => makeDataArray(datum));
};


Course_Evaluation_Scores_processed = processData(Course_Evaluation_Scores)
Course_Evaluation_Scores_max = getMaxima(Course_Evaluation_Scores)

//console.log("AAAAAA",Course_Evaluation_Scores_processed)
//console.log("VVVVVV", Course_Evaluation_Scores_max)


//console.log("CCCCC", Course_Evaluation_Filtered[0].Evaluation)

// Validating output //
//console.log(questions_quiz_filtered_v2)



//const dataquiz_sp = require('C:/Users/Siddarth anand/victory-tutorial/Algebra I Concepts CheckSC_Quiz_Scores.json')
//const histdata  = []
//for(let i =0; i<dataquiz_sp.length; i++){
//histdata.push({x: dataquiz_sp[i].Score})
//}

//console.log("XXXX", histdata);


const dataquiz_bwp = require('C:/Users/Siddarth anand/victory-tutorial/BWP_Quiz_Scores.json')
const BWP_Student = dataquiz_bwp.filter(quiz => quiz.Student === Student_Param && quiz.Quiz === Quiz_Name_Parameter)
const BWP_Student_v2 = BWP_Student.map(function(v){
      return v.Scores;
});


//console.log(BWP_Student_v2)

const dataprogress_student_course = require('C:/Users/Siddarth anand/victory-tutorial/Student_Course_Progress.json')
const Student_param_progress = dataprogress_student_course.filter(x =>( x.Student===Student_Param && x.Course===Course_Param))
const course_progress_pie = []


for (let i =0; i<Student_param_progress.length; i++){
  course_progress_pie.push({x: "Progress Made",y: Student_param_progress[i].Pct_Read},
  {x: "Progress Left",y: Student_param_progress[i].Pct_Remaining});
  }

//console.log(course_progress_pie)




// Misc. //

// Getting the list of courses//
CourseList = new Set()

for(let i =0; i<students.length; i++){
  for(let j =0; j<students[i].Course_Details.length; j++){
    CourseList.add(students[i].Course_Details[j].Name)
  }
  };

  //console.log("Current Courses: ",CourseList);



// Getting the list of units //
  UnitList = new Set()

for(let i =0; i<students.length; i++){
  for(let j =0; j<students[i].Course_Details.length; j++){
    for(let k =0; k<students[i].Course_Details[j].Units.length; k++){
    UnitList.add(students[i].Course_Details[j].Units[k].Name)
    }
  }
  };

  //console.log("Current Units: ",UnitList);