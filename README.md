# FFTechtest
There is a farm called AppleTree Farm. It has 7 fields
</br>
| Name |  Width | Length | Crop | Last Sprayed
| :-----: | :-------:  | :------:  | :------:  | :------: |
| Cowfield| 300 metres |400 metres |Barley |18th February 
| Top |200 metres |600 metres| Barley |22nd December
| Hillside | 600 metres |400 metres |Winter Wheat| 5th February
| Big Field |800 metres |500 metres |Sugar Beet| 9th January
| Upper River |200 metres |200 metres |Barley |18th January
| Lower River |500 metres |100 metres |Sugar Beet| 8th February
| Southside |400 metres |400 metres |Winter Wheat |12th January


</br>
</br>
The farmer has an account with The Happy Chemical Co to provide their chemicals.
In particular there are the following chemicals that Appletree Farm consistently uses

</br>
</br>

| Name |  Crop Usage | Price per Litre | Application Frequency
| :-----: | :-------:  | :------:  | :------:  | 
|Ryezapon | Winter Wheat |£240| 6 weeks
|Berbelikar |Barley |£156| 4 weeks
|Quadranis| Sugar| Beet| £191| 9 weeks

</br>

## Assumptions you can make
- 1 Litre of a given chemical covers 1 Hectare of a given crop
- This is true for all chemicals and all crops
- The farmer needs to order the chemical 1 week before the next spraying application
- The chemical cannot be stored, all of it must be used each time it is ordered
- A chemical can not be sprayed on a crop to which it is not tailored

## The Challenge
Our farm manager needs assistance managing their order catalogue. They want to know
when they need to order their next batch of each chemical, and how much it will cost them

## Approach and sample

I wanted to create 4 classes from the beggining, two for the products(fields and farm) and two for the managers(Appletree Farm Manager and The Happy Chemical Co).

They process was pretty much straight forward as all the assumptions were given.

![alt text](https://github.com/jaitone/FFTechtest/raw/main/FFmanager.png)

If a field does not exist, the application will stop with an error.
If a chemical is not tailored, the application will give a error and stop.
If a chemical is not properly spelled or doesn't exist, the application will stop.