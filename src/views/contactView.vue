<template>
<div class="container min-h-100 py-4">
 <div class="row">
  <div class="col-4"></div>
    <div class="col-md-8">
      <form action="https://formspree.io/f/meqdeker" method="post">
        <h1>Contact us</h1>
        
        <fieldset>
          
          <legend><span class="number">1</span> Your Basic Information</legend>
        
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name">
        
          <label for="email">Email:</label>
          <input type="email" id="mail" name="user_email">
       
          <label for="password">Password:</label>
          <input type="password" id="password"       name="user_password">
        
          <label>Age:</label>
          <input type="radio" id="under_13" value="under_13" name="user_age"><label for="under_13" class="light">Under 13</label><br>
          <input type="radio" id="over_13" value="over_13" name="user_age"><label for="over_13" class="light">Over 13</label>
          
        </fieldset>
        <fieldset>  
        
          <legend><span class="number">2</span> Your message</legend>
          
         <label for="msg">how can we assist you?</label>
          <textarea id="msg" name="user_msg"></textarea>
         <label for="role">Book Interests:</label>
          <select id="role" name="role">
            <optgroup label="boolCategory">
              <option value="library">Fiction</option>
              <option value="library">Fantasy</option>
              <option value="library">True Stories</option>
              <option value="library">Biographies</option>
              <option value="library">Love Story</option>
            </optgroup>
            <optgroup label="Occupation">
              <option value="library">Student</option>
              <option value="library">Employee</option>
              <option value="library">Other</option>
            </optgroup>
            <optgroup label="Hobbies">
              <option value="library">TV?</option>
              <option value="library">Studying?</option>
            </optgroup>
          </select>
          
          <label>Interests:</label>
          <input type="checkbox" id="development" value="interest_development" name="user_interest"><label class="light" for="development">Development</label><br>
          <input type="checkbox" id="design" value="interest_design" name="user_interest"><label class="light" for="design">Design</label><br>
          <input type="checkbox" id="business" value="interest_business" name="user_interest"><label class="light" for="business">Business</label>
          
         </fieldset>
       
        <button type="submit">Report</button>
        
       </form>
        </div>
        <div class="col-2">

        </div>
      </div>
      
</div>

<div class="col-md-2"></div>
</template>

<script>
import contactView from '@/views/contactView'
export default {
    name: '',
        components:{
        contactView
    }
}
</script>

<style scoped>
h1 {
  margin: 0 0 30px 0;
  text-align: center;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
}

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}

button {
  padding: 19px 39px 18px 39px;
  color: #FFF;
  background-color: #4bc970;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #3ac162;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
  margin-bottom: 10px;
}

fieldset {
  margin-bottom: 30px;
  border: none;
}

legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  border-radius: 100%;
}

@media screen and (min-width: 480px) {

  form {
    max-width: 480px;
  }

}

</style>