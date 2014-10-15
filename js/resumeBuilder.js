var bio = {
	"name": "Cynthia O'Donnell",
	"role": "Front End Web Developer",
	"logo": "images/logo100Transparent.png",
	"welcomMessage": "Welcome to my resume!",
	"contacts": {
		"website" : "www.mimibambino.com", 
		"email" : "mimibambino@gmail.com",
		"github" : "MimiBambino",
		"twitter" : "@mimibambino",
		"location" : "Naples, Italy"
	},
	"skills": ["awesomeness", "programming", "web development", "paper airplanes"], 
	"image": "images/Cynthia.jpg",
	"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedLogo = HTMLheaderLogo.replace("%data%", bio.logo);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedPic = HTMLbioPic.replace("%data%", bio.image);

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$(".col-md-10").prepend(formattedRole);
		$(".col-md-10").prepend(formattedName);
		$(".col-md-2").append(formattedLogo);

		$(".contacts").append(HTMLcontactsStart);
		$("#contacts").append(formattedEmail);
		$("#contacts").append(formattedWebsite);
		$("#contacts").append(formattedGithub);
		$("#contacts").append(formattedTwitter);
		$("#contacts").append(formattedLocation);
	    $(".pic").append(formattedPic);
	    $(".skills").append(HTMLskillsStart);

		for (var skill in bio.skills) {
	      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		  $("#skills").append(formattedSkill);
		}
	}
};

var work = {
	"jobs": [
	{
	    "employer": "Case, Lombardi and Pettit",
	    "title": "Attorney",
	    "location": "Honolulu, Hawaii",
	    "dates": "2008 - 2010",
	    "description": "As a bankruptcy and business litigation attorney, I represented individual debtors in personal bankruptcy proceedings.  I also advised business clients on their rights under federal bankruptcy law as creditors and I participated in the successful reorganization of companies emerging from bankruptcy protection."
	},
	{
	    "employer": "United States Navy",
	    "title": "Navy Surface Warfare Officer",
	    "location": "Norfolk, Virginia",
	    "dates": "2001 - 2005",
	    "description": "As a U.S. Navy Surface Warfare Officer onboard a Guided Missile Destroyer I supervised and trained a division of 20 Sailors. Additionally, I oversaw the maintenance and use of all onboard missile launching system hardware (including all missiles) and installation and use of system software."
	}
	],
	"display": function(){
		for (var i in work.jobs){
			var job = work.jobs[i];
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);
			var employerAndTitle = formattedEmployer + formattedJobTitle;
			$(".work-entry:last").append(employerAndTitle);

			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			$(".work-entry:last").append(formattedDescription);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			$(".work-entry:last").append(formattedLocation);
		}
	}
};

var projects = {
	"project": [
	{
		"title": "Mockup Portfolio",
		"dates": "2014",
		"description": "A single page website made to showcase all of my projects",
		"images": ["images/Brigitte.jpg", "images/Grandpa.jpg", "images/Johnny.jpg"]
	},
	{
		"title": "Interactive Resume",
		"dates": "2014",
		"description": "A resume made with javascript, jQuery and JSON",
		"images": ["images/fry.jpg"]
	}
	],
	"display": function() {
		for (var i in projects.project) {
			var project = projects.project[i];
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
			$(".project-entry:last").append(formattedDescription);
			if (project.images.length > 0) {
				for (var image in project.images) {
					var formattedImage = HTMLprojectImage.replace("%data%", project.images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};



var education = {
	"schools": [
	  {
		"name": "University of Florida",
		"location": "Gainesville, Florida",
		"degree": "Juris Doctor", 
		"major": ["Law"],
		"dates": "2005 - 2008",
		"url": "http://www.law.ufl.edu/"
	  },
	  {
		"name": "Florida State University",
		"location": "Tallahassee, Florida",
		"degree": "Bachelor of Arts",
		"major": ["Music"],
		"dates": "1996 - 2000",
		"url": "http://www.music.fsu.edu//"
	  }
	],
	"onlineCourses": [
	  {
		"title": "Front End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com",
		"certificate": ""
  	  },
  	  {
  	  	"title": "Introduction to Linux",
  	  	"school": "edX",
  	  	"dates": 2014,
  	  	"url": "https://courses.edx.org/courses/LinuxFoundationX/LFS101x/2T2014/info",
        "certificate": "images/IntroToLinuxCertificate.pdf"
  	  },
  	  {
  	  	"title": "Engineering Software as a Service",
  	  	"school": "edx",
  	  	"dates": 2014,
  	  	"url": "https://courses.edx.org/courses/BerkeleyX/CS_CS169.1x/1T2014/info",
        "certificate": "images/SaasCertificate.pdf"
  	  }
	],
	"display": function() {
		for (var i in education.schools) {
			var school = education.schools[i];
			$("#education").append(HTMLschoolStart);
			var formattedNameDegree = HTMLschoolNameandDegree.replace("#", school.url).replace("%data1%", school.name).replace("%data2%", school.degree);
			$(".education-entry:last").append(formattedNameDegree);	
			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedLocation);
			if (school.major.length > 0) {
				for (var j in school.major) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", school.major[j]);
					$(".education-entry:last").append(formattedMajor);
				}
			}
		}
	
		for (var i in education.onlineCourses){
			var oC = education.onlineCourses[i];
			$("#online").append(HTMLonlineStart);
			var formattedTitle = HTMLonlineTitleAndSchool.replace("#", oC.url).replace("%data1%", oC.title).replace("%data2%", oC.school);
			$(".online-entry:last").append(formattedTitle);
			var formattedDates = HTMLonlineDates.replace("%data%", oC.dates);
			$(".online-entry:last").append(formattedDates);
            if (oC.certificate){
                var formattedCertificate = HTMLcerficate.replace("#", oC.certificate);
                $(".online-entry:last").append(formattedCertificate);
            }
		}
	}
}

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

work.display();
bio.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);






































