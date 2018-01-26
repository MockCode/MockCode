##<a name="use_case_1"/>Use Case 1</a>:
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