<template>
  <div class="Main-Body">
    <div class="Grid">
        <div class="box1">
          <div class="Jobs">
            <pre>
              CEO
              2018 to Current
              MADD Technologies LLC - Lakeland, FL
              Current Owner of MADD Technologies, a consumer electronics company,
              specializing in the design and development of devices such as tablets,
              phones, computers and everyday life smart home devices.
              Consulting Services specializing in the design and development of mobile
              applications or devices envision by a customer.
            
              IT Specialist
              2018 to Current
              Florida Polytechnic University
              Assist in computer and classroom hardware troubleshooting
              Customer service and over the phone troubleshooting Computer Repair
            
              Inventory Specialist and Customer Service			
              Summer 2016
              Dollar General - Hollywood, FL
              Managing inventory.
              Restocking shelves.
              Customer service and sales.

              Audio and Video Production
              2011-2016
              Harvest Fire - Miami, FL
              Assist in video production.
              Video Editing.
              Soundboard management.
              Hardware troubleshooting.

              Computer Repair						
              2013-Present
              Specialize in computer repair.
              Tablet and phone repair. 
              Custom pc building.

              Electrician
              2014-2016
              SED Services - Hollywood, FL Worked as an electrician, in the construction of new and 
              remodeled houses and commercial businesses. 
              Running conduit. Providing electricity to commercial, and residential.
              Installing light fixtures, and installing breaker panels.

              Merchandising
              2013-2014
              Premium retail services	
              Stocking shelves
              Updating panoramas. 
              Talking with customers about products.
              Setting up displays.
              Taking inventory at stores like Best Buy, Office Depot, Baby r us, and Target.

              LIT - (Volunteer)
              2012-2013
              YMCA - Hollywood, FL
              Care and monitor of young children
              Mentoring 


            </pre>
              </div>
                </div>
                  <div class="box2">
                    <div class= "Skills">
                      <pre>
                        Software Design

                        Leadership

                        Mentoring

                        Entrepreneur Skills

                        Project Management
                        
                        IT Skills

                        Software Development Language, 
                        C++, Flutter, C#, Python

                        Collaborative

                        Excellent Problem Solving

                        Customer Service

                        Certified in Cad Software

                      </pre>
          </div>
      </div>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'Main-Body',
  
}
</script>

<style scoped>

.Grid {
  display: grid;
  grid-template-columns: (3, 1fr);
  grid-template-rows: auto;
  column-gap: 10px;
  margin: 10px;
  text-align: center;
}

.box1{
  grid-column-start: 1;
  grid-column-end: 3;
  object-fit: fill;
  background-color: whitesmoke;
  grid-row-start: auto;
  text-align: left;
}

.box2{
  grid-column-start: 3;
  grid-column-end: 4;
  background-color: whitesmoke;
  padding-left: 0px;
  text-align: left;
  min-height: 200px;
}

.Jobs pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: Arial;
  margin-top: 10px;
}

.skills pre {
  white-space: pre-wrap; 
  word-wrap: break-word;
  font-family: inherit;
  margin-top: 10px;
  
}

</style>
