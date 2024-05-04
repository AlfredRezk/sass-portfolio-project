const jobs = [
    {
        date:"2020-2024",
        employer: "CLARUSWAY",
        title:"Instructor & Full Stack Developer"
    },
    {
        date:"2019-2020",
        employer: "Google",
        title:"Full Stack Developer"
    },
    {
        date:"2015-2019",
        employer: "Facebook",
        title:"Front End Developer"
    },


]


const html = jobs.map(job=>`
<div class="jobs__job">
<h2 class="text-secondary">${job.date}</h2>
<h3>${job.employer}</h3>
<h6>${job.title}</h6>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum obcaecati fuga, pariatur vitae sed illo, ipsa ipsam eveniet magnam, animi velit. Esse accusantium omnis maxime corrupti pariatur quis molestias!</p>
</div>
`).join('')

document.querySelector('.jobs').innerHTML = html