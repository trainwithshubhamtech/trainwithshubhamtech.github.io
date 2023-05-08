const jobList = [
    {
      jobTitle: "Software Engineer",
      companyName: "Google",
      location: "Mountain View, CA",
      yearsOfExperienceRequired: 5,
      applyURL: "https://careers.google.com/jobs"
    },
    {
      jobTitle: "devops engineer",
      companyName: "Facebook",
      location: "Menlo Park, CA",
      yearsOfExperienceRequired: 2,
      applyURL: "https://www.facebook.com/careers/"
    },
    
    {
      jobTitle: "Data Analyst",
      companyName: "Facebook",
      location: "Menlo Park, CA",
      yearsOfExperienceRequired: 2,
      applyURL: "https://www.facebook.com/careers/"
    },
    {
      jobTitle: "AWS Freelance Trainer",
      companyName: "Tata Consultancy Services",
      location: "Hyderabad, Telangana,India",
      yearsOfExperienceRequired: 3,
      applyURL: "https://www.tcs.com/careers"
    },
    
    {
      jobTitle: "DevOps Engineer",
      companyName: "GlobalLogic",
      location: "Noida, Uttar Pradesh,India",
      yearsOfExperienceRequired: 5,
      applyURL: "https://www.globallogic.com/careers/"
    },
    {
      jobTitle: "AWS RedShift",
      companyName: "Larsen & Toubro",
      location: "Pune,Maharastra,India",
      yearsOfExperienceRequired: 3,
      applyURL: "https://www.larsentoubro.com/corporate/careers/"
    },
    {
      jobTitle: "cloud Azure",
      companyName: "Macropace Technologies",
      location: "Bengaluru, Karnataka",
      yearsOfExperienceRequired: 5,
      applyURL: "http://www.macropace.com/careers.html"
    },
    {
      jobTitle: "Python Developer+AWS",
      companyName: "TEKsystems",
      location: "Bengaluru, Karnataka",
      yearsOfExperienceRequired: 4,
      applyURL: "https://careers.teksystems.com/us/en/search-results"
    },
    {
      jobTitle: "Junior DevOps System Associate",
      companyName: "Ryel Projects Private Limited",
      location: "Mumbai, Maharashtra",
      yearsOfExperienceRequired: 0,
      applyURL: "https://ryel.co/job-openings/"
    },
    {
      jobTitle: "AWS/Linux",
      companyName: "Aproposdrive Technologies",
      location: "Mumbai, Maharashtra",
      yearsOfExperienceRequired: 0,
      applyURL: "https://aproposdrive.com/career.html"
    },
    {
      jobTitle: "Junior DevOps System Associate",
      companyName: "Ryel Projects Private Limited",
      location: "Mumbai, Maharashtra",
      yearsOfExperienceRequired: 0,
      applyURL: "https://ryel.co/job-openings/"
    },
    {
      jobTitle: "AWS DevOps",
      companyName: "Hexaware Technologies",
      location: "Pune, Maharashtra",
      yearsOfExperienceRequired: 0,
      applyURL: "https://hexaware.com/careers/"
    },
    {
      jobTitle: "Cloud DevOps Engineer",
      companyName: "Northern Trust Corporation",
      location: "Pune, Maharashtra",
      yearsOfExperienceRequired: 4,
      applyURL: "https://www.northerntrust.com/canada/about-us/careers"
    },
    {
      jobTitle: "DevOps",
      companyName: "Houghton Mifflin Harcourt",
      location: "Pune, Maharashtra",
      yearsOfExperienceRequired: 1,
      applyURL: "https://careers.hmhco.com/"
    },
    {
      jobTitle: "Azure DevOps Engineer",
      companyName: "TJC Group",
      location: "Pune, Maharashtra",
      yearsOfExperienceRequired: 5,
      applyURL: "https://www.tjc-group.com/careers/"
    },
    {
      jobTitle: "DevOps",
      companyName: "Houghton Mifflin Harcourt",
      location: "Pune, Maharashtra",
      yearsOfExperienceRequired: 1,
      applyURL: "https://careers.hmhco.com/"
    },
    {
      jobTitle: "DevOps",
      companyName: "Vbeyond",
      location: "Mumbai, Maharashtra",
      yearsOfExperienceRequired: 3,
      applyURL: "https://www.diverselynx.com/career-with-us/"
    },
    /*{
      jobTitle: "DevOps",
      companyName: "Vbeyond",
      location: "Mumbai, Maharashtra",
      yearsOfExperienceRequired: 3,
      applyURL: "https://www.diverselynx.com/career-with-us/"
    },*/
];

jobList.forEach(job => {
    AddJobData(job.jobTitle, job.companyName, job.location, job.yearsOfExperienceRequired, job.applyURL)
  });
  

function AddJobData(jt, jc, jl, jy, ju) {
    var divElement = `
    <div class="panel panel-default">
          <div class="panel-body">
            <h3>`+jt+`</h3>
            <h4>`+jc+`</h4>
            <p>Location : `+jl+`</p>
            <p>Years of Experience Required : `+jy+`</p>
            <button type="button" class="btn btn-primary" onclick="location.href='`+ju+`'">Apply Now</button>
          </div>
    </div>
    `
    $('#lelo').append(divElement)
}
  
