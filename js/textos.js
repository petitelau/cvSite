export const myName = `Hi ! My name is Laura Gomez.`;
export const middleMsg =`Experienced full stack developer.`;
export const heroMsg =`&#9829; Programming !`;

export const diploma1 =`
<p>Web Applications</p>
<p>FHNW Switzerland (Certificate of Advanced Studies)</p>
<p>June 2022</p>`;

export const diploma2 =`
<p>Management of Information Systems</p>
<p>France, Switzerland. European Diplome (Master degree)</p>
<p>June 2000</p>`;


export const diploma3 =`
<p>Computer Science Engineer</p>
<p>ITESM Mexico (Bacherlor degree)</p>
<p>December 1994</p>`;

export const job0 =`VASS
I've work most of my projects with Adobe Experience Manager. AEM is a complex software with a vast set of features. 
My work consisting on understanding the architecture and providing solutions  to create highly personalized experiences and content for the company web sites.
<span class="desc-paragraph blur-paragraph"> 
  More... 
</span>
AEM is built on java using frameworks and technology such as sling, osgi, JCR. Working mostly as a backend developer and technical lead on projects.
Some of the tasks include:
- Support on pre sales activities
- Develop an in-depth understanding of the client’s business and technical environment and translate it into viable solutions
- Migration from Adobe Manage Services to AEM
- Work on AEM on premises and AEM cloud

I've also participate on others projects outside AEM such as:

-AWS spring boot service to create WALLETS for apple and android
-Open AI api to create a chat for specific content.

`

export const job1 =`
DHL EXPRESS 

As a full stack developer, I've work cross-functionally (front and back end) implementing and supporting clearing application systems for the dhl express packages being imported /exported into Switzerland.
<span class="desc-paragraph blur-paragraph"> 
  More... 
</span>
Some of the tasks include: 
- Understanding the dhl business process, clear on the air 
- Integrating the application into the business process 
- Understanding and implementing Suisse customs requirements 
- Define business logic for service layer 
- Using service layer to mediate communication between controller and repository in a MVC model. 
- React development of complex pages 
- Communication with Swiss Customs via web services`;


export const job2 =`
KALLYSOFT 

Internet Application development for Cibavision, to manage contracts between Opticians retailers and customers.
<span class="desc-paragraph blur-paragraph"> 
More... 
</span>
 - Analysis and design. Development of a web application and standalone java application. 
 - Interface with InterCard for e-Payments. 
- GUI, Application and Integration tests.`;


export const job3 =`
PICTET

Configuration and Implementation of BMC Software tools to monitor the servers of the bank. Development of a standalone application and intranet application.`;


const getSkillRow = (text) => {
 const id = text.split(' ')[0];   
return `<div class="skill-row">
            <p class="skill-name-txt">${text}</p>
            <div class="skill-range-cont"><div id=${id} class="skill-range"></div></div>
        </div>`;
}

export const skillsFE = [];
['HTML / CSS', 'JavaScript ES6','React','Angular' ].forEach(t=> skillsFE.push(getSkillRow(t)));

export const skillsOther = [];
['Oracle / SQL', 'MongoDB','Maven','Git','TeamCity', 'SonarQ', 'MyEclipse', 'IntelliJ', 'Agile' ].forEach(t=> skillsOther.push(getSkillRow(t)));

export const skillsBE = [];
['Java', 'Hibernate','Spring','NodeJs'].forEach(t=>skillsBE.push(getSkillRow(t)));