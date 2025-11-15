const TOPIC = 'Nursing Student Mnemonics';

let FLASHCARDS = [
// Vital Signs and Assessment
["<b>PERRLA</b><br>Pupil Assessment", "Pupils Equal, Round, Reactive to Light and Accommodation"],
["<b>COCA</b><br>Pupil Response", "Constriction, Opposite eye constricts, Consensual reflex, Accommodation"],
["<b>OLDCART</b><br>Pain Assessment", "Onset, Location, Duration, Character, Aggravating factors, Relieving factors, Timing"],
["<b>OPQRST</b><br>Pain Assessment", "Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Timing"],
["<b>SOCRATES</b><br>Pain Assessment", "Site, Onset, Character, Radiation, Associations, Time course, Exacerbating factors, Severity"],
["<b>ABC</b><br>Priority Assessment", "Airway, Breathing, Circulation"],
["<b>ABCDE</b><br>Emergency Assessment", "Airway, Breathing, Circulation, Disability, Exposure"],

// Medication Administration
["<b>5 Rights</b><br>Medication Safety", "Right patient, Right drug, Right dose, Right route, Right time"],
["<b>10 Rights</b><br>Extended Medication Safety", "Patient, Drug, Dose, Route, Time, Documentation, Reason, Response, Refusal, Education"],
["<b>STAMP</b><br>Drug Administration", "Site, Time, Amount, Method, Person"],
["<b>MAR</b><br>Before Giving Meds", "Medication Administration Record - check allergies, interactions, contraindications"],

// Injections
["<b>Z-TRACK</b><br>IM Injection Sites", "Zigzag path: Pull skin laterally, inject, release skin"],
["<b>VGLAD</b><br>IM Injection Sites", "Ventrogluteal, Gluteus maximus, Lateral thigh, Anterior thigh, Deltoid"],

// Lab Values
["<b>60-40-20 Rule</b><br>Body Fluid Distribution", "60% total body water, 40% intracellular, 20% extracellular"],
["<b>ROME</b><br>ABG Interpretation", "Respiratory Opposite, Metabolic Equal (pH and CO2/HCO3 direction)"],
["<b>CADET face</b><br>Hypocalcemia Signs", "Convulsions, Arrhythmias, Decreased DTRs, Emotional lability, Trousseau's/Chvostek's signs"],
["<b>MURDER</b><br>Hyperkalemia Signs", "Muscle weakness, Urine abnormalities, Respiratory distress, Decreased cardiac contractility, ECG changes, Reflexes"],
["<b>FRIED SALT</b><br>Hyponatremia Causes", "Fever, Retention (fluid), Increased ADH, Excess water, Diuretics, SIADH, Aldosterone deficiency, Loss of sodium, Tea and toast diet"],

// Cardiac
["<b>MONA</b><br>MI Treatment", "Morphine, Oxygen, Nitroglycerin, Aspirin"],
["<b>PQRST</b><br>ECG Waves", "P wave (atrial depolarization), QRS complex (ventricular depolarization), T wave (ventricular repolarization)"],
["<b>TAPS DIBS</b><br>Heart Sounds", "Tricuspid, Aortic, Pulmonic, Erb's point, Mitral (listening locations)"],
["<b>UNLOAD FAST</b><br>Left-Sided Heart Failure", "Upright position, Nitrates, Lasix, Oxygen, ACE inhibitors, Digoxin, Fluids decrease, Afterload decrease, Sodium restriction, Test (daily weights, I&O)"],
["<b>SWELLING</b><br>Right-Sided Heart Failure", "Swelling, Weight gain, Edema, Liver enlargement, Low output, Increased JVD, Nocturia, Girth increased"],

// Respiratory
["<b>BREATHE</b><br>Respiratory Distress", "Blue color, Respiratory rate changes, Extra effort, Abnormal breath sounds, Tripod position, Head bobbing, Exhaustion"],
["<b>PHARLAP</b><br>COPD Management", "Pursed lip breathing, Humidified O2, Antibiotics, Rest, Low concentration O2, Adequate fluids, Position upright"],
["<b>A FROG</b><br>Asthma Triggers", "Allergens, Food, Respiratory infections, Outside irritants, GERD"],

// Neurological
["<b>FAST</b><br>Stroke Recognition", "Face drooping, Arm weakness, Speech difficulty, Time to call 911"],
["<b>BEFAST</b><br>Extended Stroke Signs", "Balance, Eyes, Face, Arms, Speech, Time"],
["<b>AEIOU TIPS</b><br>Altered Mental Status", "Alcohol, Epilepsy, Insulin, Overdose, Uremia, Trauma, Infection, Psychiatric, Stroke"],
["<b>MUDPILES</b><br>Metabolic Acidosis", "Methanol, Uremia, Diabetic ketoacidosis, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates"],
["<b>CLEVER PD</b><br>Metabolic Alkalosis", "Contraction, Licorice, Endocrine, Vomiting, Excess alkali, Refeeding, Post-hypercapnia, Diuretics"],
["<b>PERLA</b><br>Cranial Nerve III, IV, VI", "Pupils Equal Reactive to Light and Accommodation"],

// GI/Nutrition
["<b>BMW</b><br>Bowel Sounds", "Borborygmi (hyperactive), Minimal (hypoactive), Whoosh (normal)"],
["<b>BRAT</b><br>Diarrhea Diet", "Bananas, Rice, Applesauce, Toast"],
["<b>F ACTIVE</b><br>Liver Failure Signs", "Fetor hepaticus, Asterixis, Confusion, Tremor, Increased ammonia, Vomiting, Edema"],

// Diabetes
["<b>3 P's</b><br>Diabetes Symptoms", "Polyuria, Polydipsia, Polyphagia"],
["<b>HOT and DRY</b><br>Hyperglycemia", "Hot and dry, sugar high (skin is hot and dry)"],
["<b>COLD and CLAMMY</b><br>Hypoglycemia", "Cold and clammy, need some candy (skin is cold and clammy)"],
["<b>TIRED</b><br>Hypoglycemia Signs", "Tachycardia, Irritability, Restlessness, Excessive hunger, Diaphoresis"],

// Obstetrics
["<b>APGAR</b><br>Newborn Assessment", "Appearance, Pulse, Grimace, Activity, Respiration"],
["<b>BUBBLE HE</b><br>Postpartum Assessment", "Breasts, Uterus, Bladder, Bowels, Lochia, Episiotomy, Homan's sign, Emotions"],
["<b>HELLP</b><br>Pregnancy Complication", "Hemolysis, Elevated Liver enzymes, Low Platelet count"],
["<b>TORCH</b><br>Congenital Infections", "Toxoplasmosis, Other (syphilis, varicella), Rubella, Cytomegalovirus, Herpes"],
["<b>VEAL CHOP</b><br>Fetal Heart Monitoring", "Variable→Cord compression, Early→Head compression, Accelerations→OK, Late→Placental insufficiency"],

// Pediatrics
["<b>SPAMS</b><br>Infant Reflexes", "Startle, Palmer grasp, Asymmetric tonic neck, Moro, Stepping"],
["<b>TICLS</b><br>Pediatric Assessment", "Tone, Interactiveness, Consolability, Look/gaze, Speech/cry"],
["<b>FLACC</b><br>Pediatric Pain Scale", "Face, Legs, Activity, Cry, Consolability"],

// Mental Health
["<b>SIGECAPS</b><br>Depression Symptoms", "Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicidal ideation"],
["<b>DIGFAST</b><br>Mania Symptoms", "Distractibility, Insomnia, Grandiosity, Flight of ideas, Activity increase, Speech pressured, Thoughtlessness"],
["<b>SAD PERSONS</b><br>Suicide Risk", "Sex, Age, Depression, Previous attempt, Ethanol, Rational thinking loss, Social support lacking, Organized plan, No spouse, Sickness"],
["<b>STAMP</b><br>Therapeutic Communication", "Sit, Talk at eye level, Appearance calm, Make contact, Position (open)"],

// Pharmacology
["<b>ACE</b><br>ACE Inhibitor Side Effects", "Angioedema, Cough, Elevated K+"],
["<b>ABCDEFG</b><br>Beta Blocker Side Effects", "Asthma exacerbation, Bradycardia, CHF exacerbation, Depression, Erectile dysfunction, Fatigue, Glucose masking"],
["<b>SLUDGE</b><br>Cholinergic Crisis", "Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis"],
["<b>Red Man</b><br>Vancomycin Reaction", "Red man syndrome - flushing of face, neck, torso from rapid infusion"],
["<b>CANT SEE</b><br>Anticholinergic Effects", "Constipation, Anhidrosis, No urination, Tachycardia, Sedation, Enlarged pupils, Erythema"],

// Infection Control
["<b>SPIDERMAN</b><br>Contact Precautions", "Sepsis, Pediculosis, Impetigo, Diarrhea, MRSA, Abscess, Norwalk"],
["<b>MTV</b><br>Airborne Precautions", "Measles, TB, Varicella (+ disseminated zoster)"],
["<b>PIMP</b><br>Droplet Precautions", "Pertussis, Influenza, Meningococcal, Pneumonia"],

// Emergency
["<b>DOPE</b><br>ETT Problems", "Displacement, Obstruction, Pneumothorax, Equipment failure"],
["<b>RATS</b><br>Restraint Documentation", "Reason, Alternatives tried, Type of restraint, Safety checks"],
["<b>SBAR</b><br>Communication", "Situation, Background, Assessment, Recommendation"],
["<b>ISBAR</b><br>Handoff Communication", "Introduction, Situation, Background, Assessment, Recommendation"],

// Fluids and Electrolytes
["<b>ISO-HYPO-HYPER</b><br>IV Fluids", "Isotonic (NS, LR) - stays in vessels, Hypotonic (0.45% NS) - moves to cells, Hypertonic (3% NS) - pulls from cells"],
["<b>MACHINE</b><br>Hypokalemia Causes", "Medications, Alkalosis, Cellular shift, Hyperinsulinemia, Inadequate intake, Nephric loss, Excess GI losses"],

// Cancer
["<b>CAUTION</b><br>Cancer Warning Signs", "Change in bowel/bladder, A sore that doesn't heal, Unusual bleeding, Thickening/lump, Indigestion/difficulty swallowing, Obvious change in mole, Nagging cough"],

// Skin
["<b>ABCDE</b><br>Melanoma Assessment", "Asymmetry, Border irregular, Color variation, Diameter >6mm, Evolving"],
["<b>TIME</b><br>Wound Healing", "Tissue, Infection, Moisture, Edge of wound"],

// Musculoskeletal
["<b>RICE</b><br>Acute Injury", "Rest, Ice, Compression, Elevation"],
["<b>5 P's</b><br>Compartment Syndrome", "Pain, Pressure, Pallor, Paresthesia, Pulselessness"],
["<b>6 P's</b><br>Peripheral Vascular Disease", "Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia"],

// Shock
["<b>SHOCKED</b><br>Shock Types", "Septic, Hypovolemic, Obstructive, Cardiogenic, K-distributive (anaphylactic), Endocrine, Dissociative"],

// Documentation
["<b>PIE</b><br>Charting Format", "Problem, Intervention, Evaluation"],
["<b>DAR</b><br>Focus Charting", "Data, Action, Response"],
["<b>SOAP</b><br>Progress Notes", "Subjective, Objective, Assessment, Plan"],
["<b>SOAPIE</b><br>Extended Notes", "Subjective, Objective, Assessment, Plan, Intervention, Evaluation"]
];
