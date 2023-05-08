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
      jobTitle: "Data Analyst",
      companyName: "Facebook",
      location: "Menlo Park, CA",
      yearsOfExperienceRequired: 2,
      applyURL: "https://www.facebook.com/careers/"
    },
    
    /*{
      jobTitle: "Data Analyst",
      companyName: "Facebook",
      location: "Menlo Park, CA",
      yearsOfExperienceRequired: 2,
      applyURL: "https://www.facebook.com/careers/"
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
  
