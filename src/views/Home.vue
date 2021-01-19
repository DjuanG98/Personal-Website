<template>
  <div id="home">
    <title> Djuan Gayle </title>
      <header>
        <div class="Image">
          <img src="" alt="Profile-Photo" 
              contain
              height ="150px"
              width = "150px">
              <p>
                Djuan Gayle
              </p>
        </div>
        <div class="Details">
          <div class="Title"> 
            <p>
              Goal
            </p>
          </div>
          <p>
            Future Entrepreneur and Computer Engineer,<br>
            with thorough hands-on experience in software <br>
            and hardware design and development, software <br>
            and hardware troubleshooting. Cad software certified. <br>
            Proficient in a variety of platforms, languages. <br>
            Skilled at team collaboration and management, <br>
            also while working independently in remote environments. <br>
          </p>
        </div>
      </header>
      <m-body></m-body>
      <footer>
        <slot name="footer"><dec-box></dec-box></slot>
      </footer>
  </div>
</template>

<script>
import DecBox from '../components/Dec-Box'
import MBody from '../components/Main-Body'

export default {
  name: 'Home',
  components: {
    DecBox,
    MBody,
  }
}
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: (3, 1fr);
  column-gap: 5px;
  background-image: linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5));
  min-height: 300px;
  align-items: center;
 
}
.Title{
  color: white;
  font-size: 1.5em;
}

.Image{
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;
  text-align: center;
  font-size: 1em;
  color: white;
  padding-top: 12px;
  border-radius: 15px;
  padding-bottom: 1px;
  padding-right: 20px;
  padding-left: 20px;
  border: solid;
  border: outset white;
  border-width: 8px;
}
.Details{
 grid-column-start: 3;
 font-size: 1em;
 color: white;
 justify-self: left;
}

footer{
  padding: 0px;
  margin-top: 5px;
  background-color: white;
}
</style>