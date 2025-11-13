// Metric System Conversions flashcards
// Copy and paste this into the FLASHCARDS variable in your TSOFA app

let FLASHCARDS = [
    // Metric Prefixes
    ["<b>kilo- (k)</b><br>Multiplier", "1,000 (10³)"],
    ["<b>hecto- (h)</b><br>Multiplier", "100 (10²)"],
    ["<b>deka- (da)</b><br>Multiplier", "10 (10¹)"],
    ["<b>Base unit</b><br>Multiplier", "1 (10⁰)"],
    ["<b>deci- (d)</b><br>Multiplier", "0.1 (10⁻¹)"],
    ["<b>centi- (c)</b><br>Multiplier", "0.01 (10⁻²)"],
    ["<b>milli- (m)</b><br>Multiplier", "0.001 (10⁻³)"],
    ["<b>micro- (μ)</b><br>Multiplier", "0.000001 (10⁻⁶)"],
    ["<b>nano- (n)</b><br>Multiplier", "0.000000001 (10⁻⁹)"],
    
    // Length Conversions - Metric to Metric
    ["<b>1 kilometer</b><br>to meters", "1,000 meters"],
    ["<b>1 meter</b><br>to centimeters", "100 centimeters"],
    ["<b>1 meter</b><br>to millimeters", "1,000 millimeters"],
    ["<b>1 centimeter</b><br>to millimeters", "10 millimeters"],
    ["<b>1 decimeter</b><br>to centimeters", "10 centimeters"],
    ["<b>1 hectometer</b><br>to meters", "100 meters"],
    ["<b>1 dekameter</b><br>to meters", "10 meters"],
    ["<b>1 millimeter</b><br>to micrometers", "1,000 micrometers"],
    ["<b>1 meter</b><br>to kilometers", "0.001 kilometer"],
    ["<b>1 centimeter</b><br>to meters", "0.01 meter"],
    ["<b>1 millimeter</b><br>to meters", "0.001 meter"],
    ["<b>1 millimeter</b><br>to centimeters", "0.1 centimeter"],
    
    // Length - Metric to Imperial
    ["<b>1 meter</b><br>to feet", "3.28084 feet"],
    ["<b>1 kilometer</b><br>to miles", "0.621371 miles"],
    ["<b>1 centimeter</b><br>to inches", "0.393701 inches"],
    ["<b>1 inch</b><br>to centimeters", "2.54 centimeters"],
    ["<b>1 foot</b><br>to meters", "0.3048 meter"],
    ["<b>1 mile</b><br>to kilometers", "1.60934 kilometers"],
    ["<b>1 yard</b><br>to meters", "0.9144 meter"],
    
    // Mass/Weight Conversions - Metric to Metric
    ["<b>1 kilogram</b><br>to grams", "1,000 grams"],
    ["<b>1 gram</b><br>to milligrams", "1,000 milligrams"],
    ["<b>1 metric ton</b><br>to kilograms", "1,000 kilograms"],
    ["<b>1 gram</b><br>to centigrams", "100 centigrams"],
    ["<b>1 hectogram</b><br>to grams", "100 grams"],
    ["<b>1 dekagram</b><br>to grams", "10 grams"],
    ["<b>1 decigram</b><br>to grams", "0.1 gram"],
    ["<b>1 centigram</b><br>to grams", "0.01 gram"],
    ["<b>1 milligram</b><br>to grams", "0.001 gram"],
    ["<b>1 microgram</b><br>to milligrams", "0.001 milligram"],
    ["<b>1 gram</b><br>to kilograms", "0.001 kilogram"],
    ["<b>1 milligram</b><br>to micrograms", "1,000 micrograms"],
    
    // Mass - Metric to Imperial
    ["<b>1 kilogram</b><br>to pounds", "2.20462 pounds"],
    ["<b>1 gram</b><br>to ounces", "0.035274 ounces"],
    ["<b>1 metric ton</b><br>to US tons", "1.10231 tons"],
    ["<b>1 pound</b><br>to kilograms", "0.453592 kilogram"],
    ["<b>1 ounce</b><br>to grams", "28.3495 grams"],
    
    // Volume Conversions - Metric to Metric
    ["<b>1 liter</b><br>to milliliters", "1,000 milliliters"],
    ["<b>1 kiloliter</b><br>to liters", "1,000 liters"],
    ["<b>1 liter</b><br>to centiliters", "100 centiliters"],
    ["<b>1 liter</b><br>to deciliters", "10 deciliters"],
    ["<b>1 hectoliter</b><br>to liters", "100 liters"],
    ["<b>1 dekaliter</b><br>to liters", "10 liters"],
    ["<b>1 milliliter</b><br>to microliters", "1,000 microliters"],
    ["<b>1 cubic meter</b><br>to liters", "1,000 liters"],
    ["<b>1 cubic centimeter</b><br>to milliliters", "1 milliliter"],
    ["<b>1 milliliter</b><br>to cubic centimeters", "1 cubic centimeter"],
    ["<b>1 deciliter</b><br>to liters", "0.1 liter"],
    ["<b>1 centiliter</b><br>to liters", "0.01 liter"],
    ["<b>1 milliliter</b><br>to liters", "0.001 liter"],
    
    // Volume - Metric to Imperial
    ["<b>1 liter</b><br>to US gallons", "0.264172 gallons"],
    ["<b>1 liter</b><br>to US quarts", "1.05669 quarts"],
    ["<b>1 milliliter</b><br>to teaspoons", "0.202884 teaspoons"],
    ["<b>1 milliliter</b><br>to fluid ounces", "0.033814 fluid ounces"],
    ["<b>1 US gallon</b><br>to liters", "3.78541 liters"],
    ["<b>1 US quart</b><br>to liters", "0.946353 liter"],
    ["<b>1 US cup</b><br>to milliliters", "236.588 milliliters"],
    ["<b>1 tablespoon</b><br>to milliliters", "14.7868 milliliters"],
    ["<b>1 teaspoon</b><br>to milliliters", "4.92892 milliliters"],
    
    // Temperature Conversions
    ["<b>Celsius to Fahrenheit</b><br>Formula", "(°C × 9/5) + 32 = °F"],
    ["<b>Fahrenheit to Celsius</b><br>Formula", "(°F - 32) × 5/9 = °C"],
    ["<b>Celsius to Kelvin</b><br>Formula", "°C + 273.15 = K"],
    ["<b>Kelvin to Celsius</b><br>Formula", "K - 273.15 = °C"],
    ["<b>0°C</b><br>in Fahrenheit", "32°F (freezing point)"],
    ["<b>100°C</b><br>in Fahrenheit", "212°F (boiling point)"],
    ["<b>37°C</b><br>in Fahrenheit", "98.6°F (body temp)"],
    ["<b>20°C</b><br>in Fahrenheit", "68°F (room temp)"],
    ["<b>-40°C</b><br>in Fahrenheit", "-40°F (same value!)"],
    
    // Area Conversions
    ["<b>1 square meter</b><br>to square centimeters", "10,000 cm²"],
    ["<b>1 square kilometer</b><br>to square meters", "1,000,000 m²"],
    ["<b>1 hectare</b><br>to square meters", "10,000 m²"],
    ["<b>1 square centimeter</b><br>to square millimeters", "100 mm²"],
    ["<b>1 square meter</b><br>to square feet", "10.7639 square feet"],
    ["<b>1 hectare</b><br>to acres", "2.47105 acres"],
    ["<b>1 acre</b><br>to hectares", "0.404686 hectare"],
    ["<b>1 square kilometer</b><br>to square miles", "0.386102 square miles"],
    ["<b>1 square mile</b><br>to square kilometers", "2.58999 km²"],
    
    // Speed Conversions
    ["<b>1 meter/second</b><br>to km/hour", "3.6 km/h"],
    ["<b>1 km/hour</b><br>to meters/second", "0.277778 m/s"],
    ["<b>1 km/hour</b><br>to miles/hour", "0.621371 mph"],
    ["<b>1 mile/hour</b><br>to km/hour", "1.60934 km/h"],
    ["<b>1 meter/second</b><br>to feet/second", "3.28084 ft/s"],
    
    // Pressure
    ["<b>1 atmosphere</b><br>to pascals", "101,325 Pa"],
    ["<b>1 bar</b><br>to pascals", "100,000 Pa"],
    ["<b>1 kilopascal</b><br>to pascals", "1,000 Pa"],
    ["<b>1 atmosphere</b><br>to bars", "1.01325 bars"],
    
    // Energy
    ["<b>1 joule</b><br>to calories", "0.239006 calories"],
    ["<b>1 calorie</b><br>to joules", "4.184 joules"],
    ["<b>1 kilocalorie</b><br>to calories", "1,000 calories"],
    ["<b>1 kilowatt-hour</b><br>to joules", "3,600,000 joules"],
    
    // Common Approximations
    ["<b>1 inch</b><br>Quick approximation", "≈ 2.5 cm"],
    ["<b>1 meter</b><br>Quick approximation", "≈ 3 feet 3 inches"],
    ["<b>1 kilogram</b><br>Quick approximation", "≈ 2.2 pounds"],
    ["<b>1 liter</b><br>Quick approximation", "≈ 1 quart"],
    ["<b>1 kilometer</b><br>Quick approximation", "≈ 0.6 miles"],
    ["<b>1 mile</b><br>Quick approximation", "≈ 1.6 kilometers"]
];
