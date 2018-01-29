
|Use Case Name       |CreateAccount|
|--------------------|----------------------------------|
|Participating Actors|User|
|Goal                |Valid account is created|
|Trigger             |User opens app|
|Preconditions       |Does Not Have Account, downloaded and installed app|
|Postconditions      |Account created successfully|
|Exceptions          |Invalid password, invalid username, timeout, other bad responses|

|   |Basic Flow:|
|---|--------------------------------|
|1  |App displays the login screen with a password and username field, and register and submit button|
|2  |User selects register|
|3  |Application displays the register screen asking for relevant information such as name, dirvers license(optional if no intention to drive)|
|4  |User enters required information such as email / pw / name / etc... and submits it|
|5  |Application sends authentication email to user|
|6  |User recieves email prompting them to click the link, They click the link|


|Use Case Name       |AdjustingTemperature|
|--------------------|----------------------------------|
|Participating Actors|Instructor|
|Goal                |To adjust the temperature displayed on the participants monitor|
|Trigger             |Taps on temperature control|
|Preconditions       |Temperature is displaying a current number|
|Postconditions      |Temperature is displaying the new desired number.|
|Exceptions          |Invalid number, Out of range|

|   |Basic Flow:|
|---|--------------------------------|
|1  |App shows the current temperature|
|2  |Instructor taps on the temperature control|
|3  |There is a numberpad pop-up that appears|
|4  |Instructor enters the desired temperature value and submits|
|5  |Temperature on instructor device updates to show new value|
|6  |A message confirming the success of the change on the patient monitor is displayed|

