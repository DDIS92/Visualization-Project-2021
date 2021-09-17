import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryVoronoiContainer, VictoryTooltip, VictoryZoomContainer, VictoryLegend, VictoryArea, VictoryLabel, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack, VictoryBoxPlot, VictoryPie, VictoryPolarAxis, VictoryGroup, Voronoi} from 'victory';
import {VictoryHistogram} from 'victory-histogram';
import { VictoryScatter } from 'victory-scatter';




//Importing the Manipulated and Aggregated Datasets to be used to build the visualizations//


// Scatterplot dataset //
const dataquiz_sp = require('C:/Users/Siddarth anand/victory-tutorial/SC_Quiz_Scores.json')


// Box and Whisker plot dataset //
const dataquiz_bwp = require('C:/Users/Siddarth anand/victory-tutorial/BWP_Quiz_Scores.json')


// Progress Bar datasets //
const dataprogress_student_course = require('C:/Users/Siddarth anand/victory-tutorial/Student_Course_Progress.json')
const dataprogress_course = require('C:/Users/Siddarth anand/victory-tutorial/Course_Progress_Final.json')


// Question Answer Selection datasets //
const questions_quiz = require('C:/Users/Siddarth anand/victory-tutorial/Quiz_Question_Selection.json')


// Evaluation datasets //
const course_evaluation = require('C:/Users/Siddarth anand/victory-tutorial/Course_Evaluation.json')
const course_evaluation_area = require('C:/Users/Siddarth anand/victory-tutorial/Course_Evaluation_Area.json')


// Quiz Parameters (currently used only for Question Selection dataset) //
const Quiz_Param = "Q101";
const Question_Param = "Quest001";
const Quiz_Name_Parameter = "Exponents and Logarithms Concepts Check";


// Course Filter Param (currently used only for Progress Bar datasets) //
const Course_Param = "Mathematics for Grade 6";
const Course_ID_Param = "C102";


// Individual Views //
// Student ID Filter //
const Student_Param = "St110";



// Calculating the minimum and maximum scores of the scatterplot dataset (dataquiz_sp) for the given assignment/quiz //
// This is done to make the y-axis scale dynamic and centered around the dataset (i.e., remove whitespace and avoid distorting the view)
let values  = dataquiz_sp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter).map(function(v) {
  return v.Score;
});
var mins = Math.min.apply( null, values );
var maxs = Math.max.apply( null, values );




// Filtering my Question Answer dataset to only contain the selected answers distribution for my defined parameters: //
// Quiz_Name_Parameter, Quiz_Param, Question_Param //
const questions_quiz_filtered = questions_quiz.filter(quest => (quest.QuizName === Quiz_Name_Parameter
                                                                //&& quest.QuizID === Quiz_Param
                                                                && quest.QuestionID === Question_Param))
const questions_quiz_filtered_v2 = []
questions_quiz_filtered_v2.push({x: "A",y: questions_quiz_filtered[0].AnswerA_Selected},
                {x: "B",y: questions_quiz_filtered[0].AnswerB_Selected},
                {x: "C",y: questions_quiz_filtered[0].AnswerC_Selected},
                {x: "D",y: questions_quiz_filtered[0].AnswerD_Selected}
                                                       );


// Storing the correct answer for the filtered question so that it can be highlighted in the visualization //
const Correct_Answer = questions_quiz_filtered[0].Correct_Answer;


// Creating a histogram-ready dataset using the scatterplot dataset// 
const histdata  = []
for(let i =0; i<dataquiz_sp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter).length; i++){
histdata.push({x: dataquiz_sp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter)[i].Score})
}              


// Formatting the box plot dataset so that it can be used in the visualization. For this view, we only need the scores as there will //
// only be data for one quiz (Quiz with Name Quiz_Name_Paramter)//
let Scores_BWP = dataquiz_bwp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter).map(function(v){
  for (let i =0; i < v.length; i++){
    for (let j =0; j < v[i].Scores.length; j++){
      return v[i].Scores[j];
  }}
});


// Individual Student Score from Boxplot (this stores the score for the filtered StudentID, so that it can be displayed alongside //
// the box-plot //
const BWP_Student = dataquiz_bwp.filter(quiz => quiz.Student === Student_Param && quiz.Quiz === Quiz_Name_Parameter)
const BWP_Student_Score = BWP_Student.map(function(v){
      return v.Scores;
});


// Filtering Course Evaluation Data for the given course (Course_Param)
const Course_Evaluation_Filtered = course_evaluation.filter(course => course.Course === Course_Param);
let Course_Evaluation_Scores = Course_Evaluation_Filtered[0].Evaluation;


// Filtering Course Evaluation Data for the given course (Course_Param)
const Course_Evaluation_Filtered_v2 = course_evaluation_area.filter(course => course.Name === Course_Param);
let Course_Evaluation_Scores_v2 = Course_Evaluation_Filtered_v2[0].Evaluation;



// Storing the lists of Student IDs, Course Names and Course IDs so that they can be used on the axes (if needed) //


// List of Students IDs //
let Students  = dataprogress_student_course.filter(course => course.Course === Course_Param).map(function(v) {
  return v.Student;
});


// List of Courses //
let Courses = dataprogress_course.map(function(v){
  return v.Course;
});


// List of Courses IDs //
let CourseIDs = dataprogress_course.map(function(v){
  return v.CourseID;
});



// Converting the Student Progress Data to be Pie Chart-ready //
let Student_param_progress = dataprogress_student_course.filter(x =>( x.Student===Student_Param && x.Course===Course_Param))
let course_progress_pie = []

for (let i =0; i<Student_param_progress.length; i++){
  course_progress_pie.push({x: "Progress Made",y: Student_param_progress[i].Pct_Read},
  //{x: "Progress Left",y: 100});
  {x: "Progress Left",y: Student_param_progress[i].Pct_Remaining});
  }


let course_progress_pie_100 = []

  for (let i =0; i<Student_param_progress.length; i++){
    course_progress_pie_100.push(
      //{x: "Progress Made",y: Student_param_progress[i].Pct_Read},
    //{x: "Progress Left",y: 100});
    {x: "Progress Total",y: 1});
    }



// Radar Chart Functions (adapted from Victory Source Code) //

// The idea behind this function to return the maximum value for each parameter. In my hypothetical example for Course Feedback, //
// I have assumed that each parameter has a maximum score of 5, and have hard-coded the maximum value as such. //
// In a scenario where the scales are different for each parameter, uncomment & comment out the specified lines below //
function getMaxima(data) {
  const groupedData = Object.keys(data[0]).reduce((memo, key) => {
    memo[key] = data.map((d) => d[key]);
    return memo;
  }, {});
  return Object.keys(groupedData).reduce((memo, key) => {
    //memo[key] = Math.max(...groupedData[key]); //Un-comment if the scales are different //
    memo[key] = 5 // Comment out if the scales are different //
    return memo;
  }, {});
};

// Returns the parameter name as x, and the values for that parameter (stored as an array) as y //
function processData(data) {
  const maxByGroup = getMaxima(data);
  const makeDataArray = (d) => {
    return Object.keys(d).map((key) => {
      return { x: key, y: d[key]/maxByGroup[key] };
    });
  };
  return data.map((datum) => makeDataArray(datum));
};




// Rendering the visualizations//
class Main extends React.Component {


  
  render() {
    return (


<div>
"Sample Visualizations to Track Student/Teacher Learning Outcomes"
        
        
<h1>Quiz Grade Scatterplot V1</h1>
<VictoryChart
width = {600}
height ={300}
domainPadding={20}
  theme={VictoryTheme.material}
  //domain={{ y: [0.99*mins, 1.01*maxs] }} // This ensures that the y-axis values are centered around the data //
  domain = {{y:[0,100]}}
  
  containerComponent={
    <VictoryVoronoiContainer 

     />
   }

 //containerComponent={
   //<VictoryZoomContainer/> // Let's you zoom in and out. Seems like it only works well with one view //
  //}
  
  >
    
    <VictoryAxis
          dependentAxis
          style={{
            grid: {
              //stroke: t => (t % 10 === 0 ? "none" : "none") // You can assign "none" for the stroke as well//
              stroke: "black" // Hex code is #000000//
            }
          }}
        />

<VictoryAxis
          style={{
            grid: {
              //stroke: t => (t % 10 === 0 ? "none" : "none") // You can assign "none" for the stroke as well//
              stroke: "black" // Hex code is #000000//
            }
          }}
        />

    <VictoryScatter
     
    style={{ data: { fill: "#C43A31", stroke: "#000000", strokeWidth: 1}, labels:{fill: "#000000"}}}
    size={5}
    //labelComponent = {<VictoryVoronoiContainer labels={({ datum }) => Math.round(`${datum.Score}`)}/>}
    data={dataquiz_sp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter)}
    x={"StudentID"}
    y={"Score"}
    labels={({ datum }) => Math.round(`${datum.Score}`)}
    

    
  />
<VictoryLabel text={"Quiz Scores for: "+Quiz_Name_Parameter} x={300} y={30} textAnchor="middle"/>

</VictoryChart>



<h1>Quiz Grade Scatterplot V2: Student's View</h1>
<VictoryChart 
width = {600}
height ={300}
domainPadding={20}
  theme={VictoryTheme.material}
  //domain={{ y: [0.99*mins, 1.01*maxs] }} // This ensures that the y-axis values are centered around the data //
  domain = {{y:[0,100]}}
  
  //containerComponent={
   // <VictoryVoronoiContainer
     // mouseFollowTooltips
      //voronoiDimension="x"
      //labels={({ datum }) => Math.round(`${datum.Score}`)}
    ///>
  //}

  containerComponent={
    <VictoryZoomContainer/> // Let's you zoom in and out. Seems like it only works well with one view //
  }

  >

    <VictoryAxis
          dependentAxis
          style={{
            grid: {
              //stroke: t => (t % 10 === 0 ? "none" : "none") // You can assign "none" for the stroke as well//
              stroke: "black" // Hex code is #000000//
            }
          }}
        />

<VictoryAxis
          style={{
            grid: {
              //stroke: t => (t % 10 === 0 ? "none" : "none") // You can assign "none" for the stroke as well//
              stroke: "black" // Hex code is #000000//
            }
          }}
        />

    <VictoryScatter

    style={{ 
    data: { fill: ({ datum }) => datum.StudentID === Student_Param ? "#FF00FF" : "#C43A31",
    stroke: ({ datum }) => datum.StudentID === Student_Param ? "#800080" : "#000000", 
    strokeWidth: ({datum}) => datum.StudentID === Student_Param ? 2: "none" // Highlighting the students individual score //
  },
    labels:{fill: "#000000"}
  }}
    size={5}
    data={dataquiz_sp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter)}
    x={"StudentID"}
    y={"Score"}
    labels={({ datum }) => Math.round(`${datum.Score}`)}
    //labelComponent = {<VictoryTooltip/>}

  />
  
<VictoryLabel text={"Quiz Scores for: "+Quiz_Name_Parameter+", "+Student_Param} x={300} y={30} textAnchor="middle"/>

</VictoryChart>


        


<h1>Quiz Sample Box and Whisker Plot V1: One Quiz</h1>
  <VictoryChart domainPadding={20} 
  theme={VictoryTheme.material}
  width = {600}
height ={300}
  >
  <VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: ("none")
            }
          }}
        />

<VictoryAxis
          style={{
            grid: {
              stroke: ("none")
            }
          }}
        />


  <VictoryLabel text={"Quiz Scores for: "+Quiz_Name_Parameter} x={300} y={30} textAnchor="middle"/>
  <VictoryBoxPlot
  labels
  labelOrientation="top"
    data={dataquiz_bwp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter)}
    style={{
      grid: { stroke: "none" },
      min: { stroke: "#000000", strokeWidth: 4 },
      max: { stroke: "#000000", strokeWidth: 4 },
      q1: { fill: "#ADD8E6" ,stroke: "#000000", strokeWidth: 4 },
      q3: { fill: "#ADD8E6" ,stroke: "#000000", strokeWidth: 4 },
      median: { stroke: "#000000", stroke: "#000000", strokeWidth: 4 },
      minLabels: { fill: "#000000" },
      maxLabels: { fill: "#000000" },
      q3Labels: {fill: "#000000"},
      medianLabels: {fill: "#000000"},
      q1Labels: {fill: "#000000"}
    }}
    x = {"Quiz"}
    y = {"Scores"}
    
  />
 
</VictoryChart>




<h1>Quiz Sample Box and Whisker Plot V2: All Quizzes for a Course</h1>
  <VictoryChart domainPadding={20} 
  theme={VictoryTheme.material}
  width = {600}
height ={300}
  >
  <VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: ("none")
            }
          }}
        />

<VictoryAxis
//fixLabelOverlap 
          style={{
            grid: {
              stroke: ("none")
            }
            ,tickLabels : {fontSize: 7}
          }
        }
        />


  <VictoryLabel text={"Quiz Scores for Course: "+Course_Param} x={300} y={30} textAnchor="middle"/>
  <VictoryBoxPlot
    labelOrientation="top"
    data={dataquiz_bwp.filter(course=>course.CourseName === Course_Param)} // Filtering the dataset for the given course //
    style={{
      grid: { stroke: "none" },
      min: { stroke: "#000000", strokeWidth: 4 },
      max: { stroke: "#000000", strokeWidth: 4 },
      q1: { fill: "#ADD8E6" ,stroke: "#000000", strokeWidth: 4 },
      q3: { fill: "#ADD8E6" ,stroke: "#000000", strokeWidth: 4 },
      median: { stroke: "#000000", stroke: "#000000", strokeWidth: 4 },
      minLabels: { fill: "#000000"},
      maxLabels: { fill: "#000000" },
      q3Labels: {fill: "#000000"},
      medianLabels: {fill: "#000000"},
      q1Labels: {fill: "#000000"}
    }}
    x = {"Quiz"}
    y = {"Scores"}
    labels

  />
  
</VictoryChart>



<h1>Quiz Sample Box and Whisker Plot V3: One Quiz, One Student</h1>
  <VictoryChart domainPadding={20} 
  theme={VictoryTheme.material}
  width = {600}
height ={300}
  >
  <VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: ("none")
            }
          }}
        />

<VictoryAxis
          style={{
            grid: {
              stroke: ("none")
            }
          }}
        />


  <VictoryLabel text={"Quiz Scores for: "+Quiz_Name_Parameter} x={300} y={30} textAnchor="middle"/>
  <VictoryBoxPlot
  labels
  labelOrientation="top"
    data={dataquiz_bwp.filter(quiz => quiz.Quiz === Quiz_Name_Parameter)} // Filtering the dataset for the given Quiz
    style={{
      grid: { stroke: "none" },
      min: { stroke: "#000000", strokeWidth: 4 },
      max: { stroke: "#000000", strokeWidth: 4 },
      q1: { fill: "#ADD8E6" ,stroke: "#000000", strokeWidth: 4 },
      q3: { fill: "#ADD8E6" ,stroke: "#000000", strokeWidth: 4 },
      median: { stroke: "#000000", stroke: "#000000", strokeWidth: 4 },
      minLabels: { fill: "#000000" },
      maxLabels: { fill: "#000000" },
      q3Labels: {fill: "#000000"},
      medianLabels: {fill: "#000000"},
      q1Labels: {fill: "#000000"}
    }}
    x = {"Quiz"}
    y = {"Scores"}
    
  />
 
 <VictoryLegend x={125} y={50}
  title="Your Score"
  centerTitle
  data={[
    { name: Student_Param+": "+BWP_Student_Score, symbol: { fill: "none" }} // Showing the filtered students' score for the quiz //
  ]}
  >
  </VictoryLegend>
 
</VictoryChart>




<h1>Quiz Sample Histogram V1</h1>
  
<VictoryChart   width = {600}
height ={300}>
  

<VictoryLabel text={"Quiz Scores for: "+Quiz_Name_Parameter} x={300} y={30} textAnchor="middle"/>

<VictoryAxis
        label="Score"
      />

<VictoryAxis
dependentAxis
tickFormat={t => (t% 1 === 0 ? t: "")} // This calculation ensures that the values of the y-axis are integers. // 
                                       // Otherwise, you might have values like 3.5, 4.5, etc. which wouldn't make sense for a histogram //
      />

  <VictoryHistogram
style={{
  data: {
    fill: "#BC5090",
    stroke: "#000000"
  }
}}

  data={histdata}
/>
</VictoryChart>




<h1>Progress BarPlot by Student for a Given Course</h1>
<VictoryChart 
          domainPadding={10}
          theme={VictoryTheme.material}
          width = {600}
height ={300}
          
        >

<VictoryLabel text={"Progress Bars for Students Taking "+Course_Param} x={300} y={30} textAnchor="middle"/>


<VictoryAxis
          dependentAxis = {true}
          style={{
            grid: {
              stroke: ("none")
            }
          }
        }
        //tickFormat={() => ''} 
        />

<VictoryAxis
style={{grid: {
              stroke: ("none")
                }
              }}
          tickValues = {Students}
          tickFormat={() => ''} 
        />


          <VictoryStack horizontal
            colorScale={["#008000", "#90EE90"]} // A stacked bar chart was used to create the progress bars. //
                                                // The completed progress has a standard green fill, and remaining progress has a light green fill //
          >

            <VictoryBar
              style = {{ data: { width: 10, stroke: "#000000", strokeWidth: 1} }}
              data={dataprogress_student_course.filter(course => course.Course === Course_Param)} // Filtering progress data for the given course //
              x={"Student"}
              y={"Pct_Read"}
              labels = { (datum)  => Math.round(`${datum.Number_of_Courses_Read}`)} // Number of read units //
              labelComponent={<VictoryTooltip />}



            />

            <VictoryBar
              style = {{stroke: "#000000"},{ data: { width: 10 } }}
              barWidth = {10}
              data={dataprogress_student_course.filter(course => course.Course === Course_Param)} // Filtering progress data for the given course //
              x={"Student"}
              y={"Pct_Remaining"}
              //labels = {(datum) => datum.Pct_Read+"%"}
              labels = { (datum)  => Math.round(`${datum.Pct_Read}`)+"%"}


            />



          </VictoryStack>
        </VictoryChart>


  

<h1>Progress BarPlot for a Student in a Given Course</h1>
<VictoryChart 
          domainPadding={10}
          theme={VictoryTheme.material}
          width = {600}
height ={300}
          
        >

<VictoryLabel text={"Progress Bars for Student "+ Student_Param+", "+Course_Param} x={300} y={30} textAnchor="middle"/>


<VictoryAxis
          dependentAxis = {true}
          style={{
            grid: {
              stroke: ("none")
            }
          }
        }
        //tickValues = {Student_Param}

        tickFormat={() => ''} 
        />

<VictoryAxis
style={{grid: {
              stroke: ("none")
                }
              }}
          tickFormat={() => ''} 
        />




          <VictoryStack horizontal
            colorScale={["#008000", "#90EE90"]} // A stacked bar chart was used to create the progress bars. //
            // The completed progress has a standard green fill, and remaining progress has a light green fill //
          >

            <VictoryBar
              style = {{ data: { width: 10, stroke: "#000000", strokeWidth: 1} }}
              data={dataprogress_student_course.filter(course => course.Course === Course_Param
                && course.Student === Student_Param)} // Filtering progress data for the given course and student //
              x={"Student"}
              y={"Pct_Read"}
              labels = { (datum)  => Math.round(`${datum.Number_of_Courses_Read}`)} // Number of read units //
              labelComponent={<VictoryTooltip />}

            />

            <VictoryBar
              style = {{stroke: "#000000"},{ data: { width: 10 } }}
              barWidth = {10}
              data={dataprogress_student_course.filter(course => course.Course === Course_Param
                && course.Student === Student_Param)} // Filtering progress data for the given course and student //
              x={"Student"}
              y={"Pct_Remaining"}
              //labels = {(datum) => datum.Pct_Read+"%"}
              labels = { (datum)  => Math.round(`${datum.Pct_Read}`)+"%"}


            />



          </VictoryStack>
        </VictoryChart>





<h1>Progress BarPlot for a Given Course</h1>
<VictoryChart 
          domainPadding={20}
          theme={VictoryTheme.material}
          width = {600}
          height ={300}
        >

<VictoryLabel text={"Average Progress Rate for Course: "+Course_Param} x={300} y={30} textAnchor="middle"/>


<VictoryAxis
style={{grid: {
              stroke: ("none")
                }
              }
            }
         //tickValues = {''}
         tickFormat={() => ''}
        />


<VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: ("none")
            }
          }
        }
          tickFormat={() => ''}

        />


          <VictoryStack horizontal
            colorScale={["#008000", "#90EE90"]}
          >

            <VictoryBar
              style = {{ data: { width: 10, stroke: "#000000", strokeWidth: 1} }}
              data={dataprogress_course.filter(course => course.Course===Course_Param)} // Filtering progress data for the given course //
              x={"Course"}
              y={"Avg_Completion_Rate"}
              labels = { (datum)  => Math.round(`${datum.Avg_Completion_Rate}`)+"%"} // Change this to number of read units //
              labelComponent={<VictoryTooltip />}
            />

            <VictoryBar
              style = {{ data: { width: 10} }}
              data={dataprogress_course.filter(course => course.Course===Course_Param)} // Filtering progress data for the given course //
              x={"Course"}
              y={"Remaining"}
              //labels = {(datum) => datum.Avg_Completion_Rate+"%"}
              labels = { (datum)  => Math.round(`${datum.Avg_Completion_Rate}`)+"%"}

            />



          </VictoryStack>
        </VictoryChart>




<h1>Sample Pie Chart for Individual Student Progress V1</h1>
<VictoryChart   width = {600} // In order to add a title (done using VictoryLabel), VictoryPie must be nested within VictoryChart //
  height ={300}>


  <VictoryAxis   // As a Pie Chart is being nested within VictoryChart, the axes are enabled by default. Therefore, the axes must be disabled //
          style={{
            grid: {
              stroke: ("none")
            }
            ,axis: {stroke: "transparent"}, 
    ticks: {stroke: "transparent"},
    tickLabels: { fill:"transparent"} 
          }
        }
        labels = {false}
        />


<VictoryAxis   // As a Pie Chart is being nested within VictoryChart, the axes are enabled by default. Therefore, the axes must be disabled //
          dependentAxis
          style={{
            grid: {
              stroke: ("none")
            }
            ,axis: {stroke: "transparent"}, 
    ticks: {stroke: "transparent"},
    tickLabels: { fill:"transparent"} 
          }
        }
        labels = {false}

        />


<VictoryLabel text={"Progress for Student "+ Student_Param+", "+Course_Param} x={300} y={15} textAnchor="middle"/>



<VictoryPie // This additional pie chart was added as a last minute formatting preference. //
// This adds a pie chart with a score of 100 as the background image. It makes the chart look smoother as opposed to two half-circles //
  colorScale={["#90EE90"]}
            standalone={false}
            width={400} height={400}
            data={course_progress_pie_100}
            innerRadius={120}
            cornerRadius={25}
            labels={datum => (datum.x === "Total"? "": "")}
          />




<VictoryPie
// changed none to #90EE90 //
  colorScale={["#008000", "#90EE90" ]}
            standalone={false}
            width={400} height={400}
            data={course_progress_pie}
            innerRadius={120}
            cornerRadius={25}
            labels={datum => (datum.x === "Progress Made"? "": "")}
          />
  
  <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={300} y={150}
                  text={course_progress_pie[0].y+"%"}
                  style={{ fontSize: 45 }}
                />


  
</VictoryChart>


  


  <h1>Sample Pie Chart for Answer Selection Distribution V1</h1>
  <VictoryChart   width = {600} // As with the circular progress bar example, a Pie Chart must be nested within VictoryChart in order to add a Chart Title //
  height ={300}>
  <VictoryAxis
          style={{
            grid: {
              stroke: ("none")
            }
            ,axis: {stroke: "transparent"}, 
    ticks: {stroke: "transparent"},
    tickLabels: { fill:"transparent"} 
          }
        }
        labels = {false}
        />


<VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: ("none")
            }
            ,axis: {stroke: "transparent"}, 
    tickLabels: { fill:"transparent"} 
          }
        }
        labels = {false}

        />

<VictoryLabel text={"Answer Selection for: "+Quiz_Name_Parameter+", "+Question_Param} x={300} y={10} textAnchor="middle"/>


  <VictoryPie
  //width = {600}
  //height ={300}
  colorScale={["#003F5C", "#58508D", "#BC5090", "#FF6361"]}
  data={questions_quiz_filtered_v2}
  labels={(datum ) => (datum.y > 0 ? datum.x + ": "+ datum.y + "": "")}
  style={{
    data: {
      fillOpacity: 0.7, stroke: "#000000", strokeWidth: 1
    }
    ,labels:{fill:datum=>(datum.x === Correct_Answer ? "#4B0082":"#000000") // This lets you highlight the correct answer, increasing its visibility //
    ,
    fontSize:datum=>(datum.x === Correct_Answer ? 17:13) // This lets you make the correct answer larger, increasing its visibility //
  }
  }}
  
/>
</VictoryChart>




<h1>Sample Bar Chart for Answer Selection Distribution V1</h1>
<VictoryChart 
          domainPadding={20}
          theme={VictoryTheme.material}
          width = {600}
          height ={300}
        >

<VictoryAxis
style={{grid: {
              stroke: ("none")
                }
              }
            }
         tickValues = {["A","B","C","D"]} // x-axis tick values are hard-coded, as the assumption is that all quiz data will have these 4 answer choices //
                                          // This can change in the future // 
        />


<VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: ("none")
            }
          }
        }
        />
<VictoryLabel text={"Answer Selection for: "+Quiz_Name_Parameter+", "+Question_Param} x={300} y={30} textAnchor="middle"/>

  <VictoryBar

  style={{data: { fill: "#C43A31", stroke: "#000000", strokeWidth: 2 }
  }
}


  data={questions_quiz_filtered_v2}
  x={datum => datum.x}
  y={datum => datum.y}
  labels={(datum ) => (datum.y > 0 ? datum.x + ": "+ datum.y + "": "")} // only shows labels if there are more than 0 records for the given answer choice //
/>
        </VictoryChart>




<h1>Radar/Polar Chart for Course Feedback Scores V1</h1>

<VictoryChart polar
        theme={VictoryTheme.material}
        width = {600}
        height ={300}
      >
        <VictoryGroup colorScale={["#FFD700"]} // Both fill and stroke for the area chart are gold, but the fill has a low opacity so that the axis values can be seen more easily //
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {processData(Course_Evaluation_Scores).map((data, i) => {
            return <VictoryArea key={i} data={data}/>;
          })}
        </VictoryGroup>
      {
        Object.keys(getMaxima(Course_Evaluation_Scores)).map((key, i) => { // Axis formatting based on the values for each parameter // 
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={
                <VictoryLabel labelPlacement="vertical"/>
              }
              labelPlacement="perpendicular" // Changes the way the parameter names are displayed on the radar chart //
              axisValue={i + 1} label={key}
              tickFormat={(t) => Math.ceil(t * getMaxima(Course_Evaluation_Scores)[key])}
              tickValues={[0.2,0.4,0.6,0.8,1]} // This could be tweaked in future. Hard coded values for now //
            />
          );
        })
      }

<VictoryLabel text={"Feedback for Course: "+Course_Param} x={300} y={10} textAnchor="middle"/>
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }
        }
        
        />

      </VictoryChart>




<h1>Radar/Polar Chart for Course Feedback V2</h1> 
  <VictoryChart polar
  theme={VictoryTheme.material} // An alternate way to build the radar chart //
  width = {600}
  height ={300}
>
<VictoryLabel text={"Feedback for Course: "+Course_Param} x={300} y={10} textAnchor="middle"/>
  <VictoryPolarAxis dependentAxis
    style={{ axis: { stroke: "none" }, grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }}} // This is a simpler but less detailed version of the radar chart above //
    tickFormat = {t => ""}
    
  />
  <VictoryPolarAxis 
  labelPlacement ="vertical"/>


  <VictoryArea
    data={Course_Evaluation_Scores_v2}
    style={{
      data: { fill: "#C43A31", fillOpacity: 0.2, strokeWidth:2},
      axisLabel: { padding: 10 }
    }}
    //labels = {datum => Math.round(datum.y,2)}
  />

</VictoryChart>



      </div>
    );
  }
}




const app = document.getElementById('app');
ReactDOM.render(<Main />, app);