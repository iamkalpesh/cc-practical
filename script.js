var Courses = [
    {
      name: "LearnBIG",
      courses: [
        {
          name: "Holiday Card",
          courseComplete: 100,
          length: "0:03:00",
          description: "This is detail text about this awesome course",
          url: "https://lb-hc.learnbig.com"
        },
        {
          name: "Understanding the Millenial Mindset",
          courseComplete: 0,
          length: "1:10:00",
          description: "This is detail text about this awesome course",
          url: "https://adaptive-lb-mm.learnbig.com/?s=all@learnbig.com&h=kGDVrVgRS8tu87NJMRr%2B5Zh1DEh1cxMce3GpSWOrNLZpdl4X41rytsUUUfGxoP3zy%2FxYsM6via10edFWrrZUuw%3D%3D"
        }
      ]
    },
    {
      name: "Microsoft",
      courses: [
        {
          name: "Smart Interviewing",
          courseComplete: 0,
          length: "3:00:00",
          description: "This is detail text about this awesome course",
          url: "https://msft-si.learnbig.com"
        },
        {
          name: "CyberSecurity",
          courseComplete: 100,
          length: "3:00:00",
          description: "This is detail text about this awesome course",
          url: "https://msft-cs.learnbig.com"
        }
      ]
    },
    {
      name: "Strayer",
      courses: [
        {
          name: "Marketing 101",
          courseComplete: 90,
          length: "2:00:00",
          description: "This is detail text about this awesome course",
          url: "https://stra-mkt101.learnbig.com"
        },
        {
          name: "Communications",
          courseComplete: 0,
          length: "1:00:00",
          description: "This is detail text about this awesome course",
          url: "https://stra-com101.learnbig.com"
        },
        {
          name: "Coaching for Success",
          courseComplete: 0,
          length: "1:00:00",
          description: "This is detail text about this awesome course",
          url: "https://stra-cfs.learnbig.com"
        }
      ]
    },
    {
      name: "Taser",
      courses: [
        {
          name: "Getting Busy with Your Axon BodyCam",
          courseComplete: 0,
          length: "1:00:00",
          description: "This is detail text about this awesome course",
          url: "https://tasr-axon.learnbig.com"
        }
      ]
    }
  ];
  
  $(function(){
    $("[data-role='header'],[data-role='footer']").toolbar();
    $("#main-menu").panel().enhanceWithin();
    
    $(document).on('pagecreate', '#dynamic-page', function() {
      var $list = $('#courselist');
      
      $list.empty();
      
      Courses.forEach(function (company) {
        $list.append('<li data-role="list-divider"><h3>' + company.name + '</h3><span class="ui-li-count">' + company.courses.length + '</span></li>');
  debugger;    company.courses.forEach(function (course) {
          $list.append('<li><a href="#"><h4>' + course.name + '</h4>' +
                       '<p style="font-weight:bold">Course Length: ' + course.length + '</p>' +
                       '<p class="ui-li-aside">' + ((course.courseComplete === 0) ? 'Not Started' : 'In Progress') + '</p>' +
                       '<p>' + course.description + '</p>' +
                       '</a></li>');
        }, this);
      }, this);
      $list.listview('refresh');
    });
  })