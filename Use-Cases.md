
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
|7  |The new temperature is showing on the patient's monitor|


|Use Case Name       |AdjustingHeartRate|
|--------------------|----------------------------------|
|Participating Actors|Instructor|
|Goal                |To adjust the displayed heart rate on the participants monitor|
|Trigger             |Taps on heart rate control|
|Preconditions       |Heart rate is at a current state and rate|
|Postconditions      |Heart rate is at a potentially new state and rate|
|Exceptions          |Invalid number, Number out of range|

|   |Basic Flow:|
|---|--------------------------------|
|1  |App shows the current heart rate and state|
|2  |Instructor taps on the heart rate control|
|3  |Instrcutor selects from a set of waveforms reflecting different states of the heart|
|4  |Instructor enters the desired beats per minute|
|5  |Heart rate on instructor device updates to show new value|
|6  |A message confirming the success of the change on the patient monitor is displayed|
|7  |A new waveform and frequency is displayed on the patient's monitor|

