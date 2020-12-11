window.onload = function() {

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Increase in Student Enrollment from 2014-2015 to 2018-2019"
    },
    axisY: {
      title: ""
    },
    data: [{
      type: "column",
      showInLegend: true,
      legendMarkerColor: "grey",
      legendText: "number of students",
      dataPoints: [{
          y: 94,
          label: "Grade 6"
        },
        {
          y: 98,
          label: "Grade 7"
        },
        {
          y: 97,
          label: "Grade 8"
        },
        {
          y: 34,
          label: "Grade 9"
        },
        {
          y: 55,
          label: "Grade 10"
        },
        {
          y: -27,
          label: "Grade 11"
        },
        {
          y: 92,
          label: "Grade 12"
        }
      ]
    }]
  });

  chart.render();

  var chart = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Increase in Non-White Student Population from 2014-2015 to 2018-2019"
    },
    axisY: {
      title: ""
    },
    data: [{
      type: "column",
      showInLegend: true,
      legendMarkerColor: "grey",
      legendText: "number of non-white students",
      dataPoints: [{
          y: 36,
          label: "Gentry Middle School"
        },
        {
          y: 3,
          label: "Jefferson Middle School"
        },
        {
          y: 70,
          label: "Oakland Middle School"
        },
        {
          y: -3,
          label: "Smithton Middle School"
        },
        {
          y: 26,
          label: "West Middle School"
        },
        {
          y: 75,
          label: "Lange Middle School"
        },
        {
          y: 73,
          label: "Battle High School"
        },
        {
          y: 35,
          label: "Hickman High School"
        },
        {
          y: 82,
          label: "Rock Bridge High School"
        }
      ]
    }]
  });

  chart.render();

  var chart = new CanvasJS.Chart("chartContainer3", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Non-White Student Population in 2018-2019"
    },
    axisY: {
      title: ""
    },
    data: [{
      type: "column",
      showInLegend: true,
      legendMarkerColor: "grey",
      legendText: "Percentage of Student",
      dataPoints: [{
          y: 25.1,
          label: "Gentry Middle School"
        },
        {
          y: 36.5,
          label: "Jefferson Middle School"
        },
        {
          y: 55,
          label: "Oakland Middle School"
        },
        {
          y: 38.5,
          label: "Smithton Middle School"
        },
        {
          y: 38.6,
          label: "West Middle School"
        },
        {
          y: 55.4,
          label: "Lange Middle School"
        },
        {
          y: 47.4,
          label: "Battle High School"
        },
        {
          y: 35,
          label: "Hickman High School"
        },
        {
          y: 30.7,
          label: "Rock Bridge High School"
        }
      ]
    }]
  });

  chart.render();

}
