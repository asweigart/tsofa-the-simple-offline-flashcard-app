// Pharmacology Mnemonics flashcards
// Copy and paste this into the FLASHCARDS variable in your TSOFA app

let FLASHCARDS = [
    // Autonomic Nervous System
    ["<b>DUMBBELSS - Cholinergic Crisis</b>", "<b>D</b>iarrhea<br><b>U</b>rination<br><b>M</b>iosis<br><b>B</b>radycardia<br><b>B</b>ronchospasm<br><b>E</b>mesis<br><b>L</b>acrimation<br><b>S</b>alivation<br><b>S</b>weating"],
    ["<b>SLUDGE - Cholinergic Effects</b>", "<b>S</b>alivation<br><b>L</b>acrimation<br><b>U</b>rination<br><b>D</b>efecation<br><b>G</b>I distress<br><b>E</b>mesis"],
    ["<b>Anticholinergic Effects - Hot as a Hare</b>", "Hot as a hare (hyperthermia)<br>Blind as a bat (mydriasis)<br>Dry as a bone (no secretions)<br>Red as a beet (flushed)<br>Mad as a hatter (confusion)"],
    ["<b>Anticholinergic - Can't See, Can't Pee</b>", "Can't see (blurred vision)<br>Can't pee (urinary retention)<br>Can't spit (dry mouth)<br>Can't shit (constipation)"],
    ["<b>Beta Blockers - ABCDEFGH</b>", "<b>A</b>tenolol<br><b>B</b>isoprolol<br><b>C</b>arvedilol<br><b>E</b>smolol<br><b>L</b>abetalol<br><b>M</b>etoprolol<br><b>N</b>adolol<br><b>P</b>ropranolol"],
    ["<b>Beta-1 Selective - BEAM</b>", "<b>B</b>isoprolol<br><b>E</b>smolol<br><b>A</b>tenolol<br><b>M</b>etoprolol"],
    ["<b>Alpha + Beta Blockers - CL</b>", "<b>C</b>arvedilol<br><b>L</b>abetalol"],
    
    // Cardiovascular
    ["<b>ACE Inhibitors - PRIL</b>", "All end in -pril:<br>Captopril<br>Enalapril<br>Lisinopril<br>Ramipril<br>Benazepril"],
    ["<b>ARBs - SARTAN</b>", "All end in -sartan:<br>Losartan<br>Valsartan<br>Irbesartan<br>Candesartan<br>Telmisartan"],
    ["<b>ACE Inhibitor Side Effects - CAPTOPRIL</b>", "<b>C</b>ough<br><b>A</b>ngioedema<br><b>P</b>roteinuria<br><b>T</b>aste changes<br><b>O</b>rthostatic hypotension<br><b>P</b>otassium increased<br><b>R</b>enal failure<br><b>I</b>ndigestion<br><b>L</b>eukopenia"],
    ["<b>Digoxin Toxicity - VANDALISM</b>", "<b>V</b>omiting<br><b>A</b>nxiety/Agitation<br><b>N</b>ausea<br><b>D</b>iarrhea<br><b>A</b>rrhythmias<br><b>L</b>ethargy<br><b>I</b>nsomnia<br><b>S</b>cotomas (yellow vision)<br><b>M</b>ental confusion"],
    ["<b>Statins - Statins Stop Synthesis</b>", "HMG-CoA reductase inhibitors<br>All end in -statin:<br>Atorvastatin<br>Simvastatin<br>Rosuvastatin<br>Pravastatin<br>Lovastatin"],
    ["<b>Calcium Channel Blockers - Verapamil/Diltiazem</b>", "Verapamil = Ventricle (affects heart)<br>Diltiazem = Dual (heart + vessels)<br>Dihydropyridines = Dilate (vessels only, end in -dipine)"],
    ["<b>Dihydropyridines - DIPINE</b>", "All end in -dipine:<br>Amlodipine<br>Nifedipine<br>Felodipine<br>Nicardipine"],
    ["<b>Loop Diuretics - BLAST</b>", "<b>B</b>umetanide<br><b>L</b>asix (Furosemide)<br><b>A</b>nd<br><b>S</b>odium loss<br><b>T</b>orsemide"],
    ["<b>Thiazide Side Effects - GLUC</b>", "<b>G</b>lycemia (hyperglycemia)<br><b>L</b>ipidemia<br><b>U</b>ricemia<br><b>C</b>alcemia (hypercalcemia)"],
    ["<b>K-Sparing Diuretics - SAE</b>", "<b>S</b>pironolactone<br><b>A</b>miloride<br><b>E</b>plerenone (+ Triamterene)"],
    
    // Antibiotics
    ["<b>Penicillin - CEOPS</b>", "<b>C</b>ell wall synthesis inhibition<br><b>E</b>ffective against gram-positive<br><b>O</b>ral or IV<br><b>P</b>enicillin-binding proteins<br><b>S</b>ensitivity/allergy common"],
    ["<b>Cephalosporin Generations</b>", "1st gen: PEcK (Proteus, E. coli, Klebsiella)<br>2nd gen: HEN PEcKS (+ H. influenzae, Enterobacter, Neisseria)<br>3rd gen: Serious infections<br>4th gen: Pseudomonas<br>5th gen: MRSA"],
    ["<b>Aminoglycosides - GNATS</b>", "<b>G</b>entamicin<br><b>N</b>eomycin<br><b>A</b>mikacin<br><b>T</b>obramycin<br><b>S</b>treptomycin"],
    ["<b>Aminoglycoside Toxicity - NOT</b>", "<b>N</b>ephrotoxicity<br><b>O</b>totoxicity<br><b>T</b>eratogenic"],
    ["<b>Macrolides - ACE</b>", "<b>A</b>zithromycin<br><b>C</b>larithromycin<br><b>E</b>rythromycin"],
    ["<b>Fluoroquinolones - FLOX</b>", "All end in -floxacin:<br>Ciprofloxacin<br>Levofloxacin<br>Moxifloxacin<br>Ofloxacin"],
    ["<b>Quinolone Side Effects - QUIT</b>", "<b>Q</b>T prolongation<br><b>U</b>pper GI upset<br><b>I</b>nsomnia<br><b>T</b>endon rupture"],
    ["<b>Tetracycline Warnings - TEETH</b>", "<b>T</b>eeth discoloration<br><b>E</b>sophagitis<br><b>E</b>nzyme inhibition<br><b>T</b>eratogenic<br><b>H</b>epatotoxicity"],
    ["<b>Sulfonamides - SMX-TMP</b>", "Sulfamethoxazole-Trimethoprim (Bactrim)<br>Side effects: Stevens-Johnson, Megaloblastic anemia, X-hemolysis (G6PD), Teratogenic, Marrow suppression, Photosensitivity"],
    ["<b>Anti-TB RIPE</b>", "<b>R</b>ifampin (orange urine)<br><b>I</b>soniazid (peripheral neuropathy)<br><b>P</b>yrazinamide (hyperuricemia)<br><b>E</b>thambutol (optic neuritis)"],
    ["<b>Metronidazole - GET on the METRO</b>", "<b>G</b>iardia<br><b>E</b>ntamoeba<br><b>T</b>richomonas<br>+ Anaerobes<br>Disulfiram reaction with alcohol"],
    
    // Antifungals
    ["<b>Azole Antifungals</b>", "All end in -azole:<br>Fluconazole<br>Itraconazole<br>Voriconazole<br>Ketoconazole<br>Posaconazole"],
    ["<b>Amphotericin B - Ampho-terrible</b>", "Ampho-terrible due to:<br>Fever/chills<br>Nephrotoxicity<br>Hypokalemia<br>Hypomagnesemia<br>Anemia"],
    
    // Antivirals
    ["<b>HIV Protease Inhibitors - NAVIR</b>", "All end in -navir:<br>Ritonavir<br>Saquinavir<br>Indinavir<br>Atazanavir<br>Darunavir"],
    ["<b>NRTIs - ZALCITABINE</b>", "<b>Z</b>idovudine (AZT)<br><b>A</b>bacavir<br><b>L</b>amivudine<br><b>C</b>ombivir<br><b>I</b>nosine (ddI)<br><b>T</b>enofovir<br><b>A</b>pricitabine<br><b>B</b>ivudine<br><b>I</b>doxuridine<br><b>N</b>ucleosides<br><b>E</b>mtricitabine"],
    ["<b>Acyclovir - HSV and VZV</b>", "Herpes Simplex Virus<br>Varicella Zoster Virus<br>Requires viral thymidine kinase"],
    
    // CNS/Psychiatry
    ["<b>Antidepressants - SSRIs</b>", "PFZES:<br><b>P</b>aroxetine<br><b>F</b>luoxetine<br><b>Z</b>oloft (Sertraline)<br><b>E</b>scitalopram<br><b>S</b>ertraline"],
    ["<b>SNRIs - VEND</b>", "<b>V</b>enlafaxine<br><b>E</b>ffexor (brand)<br><b>N</b>orepinephrine + serotonin<br><b>D</b>uloxetine"],
    ["<b>TCA Side Effects - TCA'S</b>", "<b>T</b>hrombocytopenia<br><b>C</b>ardiac arrhythmias<br><b>A</b>nticholinergic<br><b>S</b>edation"],
    ["<b>MAOIs - PIST</b>", "<b>P</b>henelzine<br><b>I</b>socarboxazid<br><b>S</b>elegiline<br><b>T</b>ranylcypromine"],
    ["<b>MAOI + Tyramine - WINE & CHEESE</b>", "Avoid:<br>Wine<br>Cheese (aged)<br>Beer<br>Sausage<br>Chocolate<br>→ Hypertensive crisis"],
    ["<b>Benzodiazepines - PAM and LAM</b>", "All end in -pam or -lam:<br>Diazepam<br>Lorazepam<br>Alprazolam<br>Clonazepam<br>Midazolam"],
    ["<b>Benzo Withdrawal - ABCD</b>", "<b>A</b>nxiety<br><b>B</b>enzo withdrawal<br><b>C</b>onvulsions<br><b>D</b>elirium"],
    ["<b>Antipsychotics - Typical HIGH</b>", "<b>H</b>aloperidol<br><b>I</b>ncreased prolactin<br><b>G</b>ynecomastia<br><b>H</b>igh potency = High EPS"],
    ["<b>Atypical Antipsychotics - QRAZO</b>", "<b>Q</b>uetiapine<br><b>R</b>isperidone<br><b>A</b>ripiprazole<br><b>Z</b>iprasidone<br><b>O</b>lanzapine"],
    ["<b>EPS - ADAPT</b>", "<b>A</b>cute dystonia<br><b>D</b>yskinesia (tardive)<br><b>A</b>kathisia<br><b>P</b>arkinsonism<br><b>T</b>remor"],
    ["<b>Neuroleptic Malignant Syndrome - FEVER</b>", "<b>F</b>ever<br><b>E</b>ncephalopathy<br><b>V</b>ital signs unstable<br><b>E</b>levated CK<br><b>R</b>igidity"],
    ["<b>Lithium Side Effects - LMNOP</b>", "<b>L</b>ithium<br><b>M</b>ovement (tremor)<br><b>N</b>ephrogenic DI<br><b>O</b>bese (weight gain)<br><b>P</b>regnancy (Ebstein's anomaly)"],
    ["<b>Lithium Toxicity Levels</b>", "Fine tremor = therapeutic<br>Coarse tremor = toxic<br>Confusion = very toxic<br>Convulsions = severe toxicity"],
    
    // Pain Management
    ["<b>Opioid Receptors - MOP DOP KOP</b>", "<b>M</b>u = Morphine (analgesia, euphoria, respiratory depression)<br><b>D</b>elta = Dysphoria<br><b>K</b>appa = Kappa (analgesia, sedation)"],
    ["<b>Morphine Side Effects - MORPHINE</b>", "<b>M</b>iosis<br><b>O</b>ut of it (sedation)<br><b>R</b>espiratory depression<br><b>P</b>neumonia (aspiration risk)<br><b>H</b>ypotension<br><b>I</b>nfrequency (constipation)<br><b>N</b>ausea<br><b>E</b>uphoria"],
    ["<b>Naloxone - NOX the OX</b>", "Naloxone knocks off opioids<br>Reverses respiratory depression<br>Can precipitate withdrawal"],
    ["<b>NSAIDs - NSAID</b>", "<b>N</b>ephrotoxicity<br><b>S</b>tomach ulcers<br><b>A</b>sthma exacerbation<br><b>I</b>nteractions (warfarin)<br><b>D</b>isplace other drugs"],
    ["<b>COX-2 Inhibitors - COXIB</b>", "All end in -coxib:<br>Celecoxib<br>Rofecoxib (withdrawn)<br>Valdecoxib (withdrawn)"],
    
    // Diabetes
    ["<b>Sulfonylureas - GLIP/GLYB</b>", "Glipizide<br>Glyburide<br>Glimepiride<br>→ Stimulate insulin release"],
    ["<b>Biguanides - METFORMIN</b>", "<b>M</b>etformin<br><b>E</b>nhances insulin sensitivity<br><b>T</b>akes time to work<br><b>F</b>irst-line for T2DM<br><b>O</b>ral<br><b>R</b>enal contraindication<br><b>M</b>inimal hypoglycemia<br><b>I</b>nhibits gluconeogenesis<br><b>N</b>o weight gain"],
    ["<b>DPP-4 Inhibitors - GLIPTIN</b>", "All end in -gliptin:<br>Sitagliptin<br>Saxagliptin<br>Linagliptin<br>Alogliptin"],
    ["<b>GLP-1 Agonists - TIDE</b>", "All end in -tide:<br>Exenatide<br>Liraglutide<br>Dulaglutide<br>Semaglutide"],
    ["<b>SGLT2 Inhibitors - FLOZIN</b>", "All end in -flozin:<br>Canagliflozin<br>Dapagliflozin<br>Empagliflozin"],
    ["<b>Insulin Types - RAN LONG</b>", "<b>R</b>apid (Lispro, Aspart, Glulisine)<br><b>A</b>cting<br><b>N</b>PH (intermediate)<br><b>LONG</b> (Glargine, Detemir)"],
    
    // GI Drugs
    ["<b>PPIs - PRAZOLE</b>", "All end in -prazole:<br>Omeprazole<br>Lansoprazole<br>Esomeprazole<br>Pantoprazole<br>Rabeprazole"],
    ["<b>H2 Blockers - TIDINE</b>", "All end in -tidine:<br>Ranitidine<br>Famotidine<br>Cimetidine<br>Nizatidine"],
    ["<b>Cimetidine - P450 INHIBITOR</b>", "Inhibits cytochrome P450<br>Causes gynecomastia<br>Multiple drug interactions"],
    ["<b>Antiemetics - VOMIT</b>", "<b>V</b>omiting center antagonists<br><b>O</b>ndansetron (5-HT3)<br><b>M</b>etoclopramide (D2)<br><b>I</b>psapirone<br><b>T</b>ravel sickness (scopolamine)"],
    
    // Respiratory
    ["<b>Asthma Controllers - LICS</b>", "<b>L</b>ong-acting beta agonists<br><b>I</b>nhaled corticosteroids<br><b>C</b>romolyn<br><b>S</b>almeterol"],
    ["<b>Asthma Relievers - SABA</b>", "<b>S</b>hort<br><b>A</b>cting<br><b>B</b>eta<br><b>A</b>gonists (Albuterol)"],
    ["<b>Methylxanthines - TEA</b>", "<b>T</b>heophylline<br><b>E</b>uphylline<br><b>A</b>minophylline<br>Narrow therapeutic index"],
    
    // Immunosuppressants
    ["<b>Calcineurin Inhibitors - CT</b>", "<b>C</b>yclosporine<br><b>T</b>acrolimus<br>Both nephrotoxic"],
    ["<b>Cyclosporine Side Effects - CHIMP</b>", "<b>C</b>yclosporine<br><b>H</b>irsutism<br><b>I</b>nfections<br><b>M</b>arrow suppression<br><b>P</b>ancytopenia"],
    ["<b>Tacrolimus vs Cyclosporine</b>", "Tacrolimus = No gum/hair problems<br>Cyclosporine = Gingival hyperplasia, Hirsutism"],
    
    // Chemotherapy
    ["<b>Alkylating Agents - CCNMB</b>", "<b>C</b>yclophosphamide<br><b>C</b>armustine<br><b>N</b>itrogen mustards<br><b>M</b>echlorethamine<br><b>B</b>usulfan"],
    ["<b>Cyclophosphamide - HAMS</b>", "<b>H</b>emorrhagic cystitis<br><b>A</b>lopecia<br><b>M</b>yelosuppression<br><b>S</b>terility<br>Prevent with MESNA"],
    ["<b>Anthracyclines - Doxorubicin</b>", "Doxorubicin = Dilated cardiomyopathy<br>Daunorubicin<br>Red urine<br>Prevent with Dexrazoxane"],
    ["<b>Vinca Alkaloids - CRISPY</b>", "<b>C</b>onstipation<br><b>R</b>ed blood cells affected<br><b>I</b>leus (paralytic)<br><b>S</b>ensory neuropathy<br><b>P</b>eripheral neuropathy<br><b>Y</b>oung cells affected"],
    ["<b>5-FU Rescue</b>", "5-FU toxicity → Leucovorin rescue<br>Methotrexate toxicity → Leucovorin rescue"],
    
    // Hormones
    ["<b>Corticosteroids - BECLOMETHASONE</b>", "<b>B</b>eclomethasone<br><b>E</b>czema treatment<br><b>C</b>ortisol-like<br><b>L</b>ung maturity (prenatal)<br><b>O</b>steoporosis risk<br><b>M</b>oon face<br><b>E</b>levated glucose<br><b>T</b>hin skin<br><b>H</b>ypertension<br><b>A</b>drenal suppression<br><b>S</b>triae<br><b>O</b>besity (central)<br><b>N</b>ecrosis (avascular)<br><b>E</b>cchymoses"],
    ["<b>Thyroid - PTU vs Methimazole</b>", "PTU = Pregnancy (1st trimester)<br>Methimazole = More potent, once daily"],
    ["<b>Bisphosphonates - DRONATE</b>", "All end in -dronate:<br>Alendronate<br>Risedronate<br>Ibandronate<br>Zoledronate<br>Take upright with water"],
    
    // Anticoagulants
    ["<b>Warfarin - WARFARIN</b>", "<b>W</b>arfarin<br><b>A</b>ffects vitamin K<br><b>R</b>eversal with vitamin K<br><b>F</b>actor monitoring (INR)<br><b>A</b>void in pregnancy<br><b>R</b>at poison origin<br><b>I</b>nteractions (many)<br><b>N</b>ecrosis (skin)"],
    ["<b>Heparin vs LMWH</b>", "Heparin = Monitor PTT, protamine reversal<br>LMWH = No monitoring needed, less HIT"],
    ["<b>DOACs - XABAN/GATRAN</b>", "Xa inhibitors end in -xaban:<br>Rivaroxaban, Apixaban, Edoxaban<br>Direct thrombin inhibitors end in -gatran:<br>Dabigatran"],
    ["<b>HIT - Heparin-Induced Thrombocytopenia</b>", "Heparin → Antibodies → Thrombosis<br>Low platelets but clotting<br>Stop heparin immediately"],
    
    // Drug Interactions
    ["<b>CYP450 Inducers - PC BRAS</b>", "<b>P</b>henytoin<br><b>C</b>arbamazepine<br><b>B</b>arbiturates<br><b>R</b>ifampin<br><b>A</b>lcohol (chronic)<br><b>S</b>t. John's wort"],
    ["<b>CYP450 Inhibitors - SICK FACES.COM</b>", "<b>S</b>odium valproate<br><b>I</b>soniazid<br><b>C</b>imetidine<br><b>K</b>etoconazole<br><b>F</b>luconazole<br><b>A</b>lcohol (acute)<br><b>C</b>hloramphenicol<br><b>E</b>rythromycin<br><b>S</b>ulfonamides<br><b>C</b>iprofloxacin<br><b>O</b>meprazole<br><b>M</b>etronidazole"],
    ["<b>Grapefruit Juice</b>", "Inhibits CYP3A4<br>Increases levels of:<br>Statins<br>Calcium channel blockers<br>Cyclosporine"],
    
    // Toxicology
    ["<b>Acetaminophen OD - NAC</b>", "N-Acetylcysteine<br>Replenishes glutathione<br>Most effective within 8 hours"],
    ["<b>Aspirin OD - ASPIRIN</b>", "<b>A</b>lkalinize urine<br><b>S</b>alicylate level<br><b>P</b>H monitoring<br><b>I</b>V fluids<br><b>R</b>espiratory alkalosis then acidosis<br><b>I</b>ncreased temperature<br><b>N</b>eurological symptoms"],
    ["<b>Beta Blocker OD - GAIT</b>", "<b>G</b>lucagon<br><b>A</b>tropine<br><b>I</b>nsulin + glucose<br><b>T</b>emporary pacing"],
    ["<b>TCA Overdose - 3 C's</b>", "<b>C</b>ardiac arrhythmias<br><b>C</b>onvulsions<br><b>C</b>oma<br>Treat with sodium bicarbonate"],
    ["<b>Organophosphate Poisoning - 2 PAM</b>", "Atropine + Pralidoxime (2-PAM)<br>Atropine for muscarinic<br>2-PAM regenerates AChE"],
    
    // Vitamins
    ["<b>Fat Soluble Vitamins - ADEK</b>", "<b>A</b> - Vision, epithelial<br><b>D</b> - Calcium absorption<br><b>E</b> - Antioxidant<br><b>K</b> - Clotting factors"],
    ["<b>B Vitamins - B1-12</b>", "B1 (Thiamine) - Wernicke's<br>B2 (Riboflavin) - FAD<br>B3 (Niacin) - NAD, pellagra<br>B6 (Pyridoxine) - Transamination<br>B9 (Folate) - Neural tube<br>B12 (Cobalamin) - Megaloblastic anemia"],
    ["<b>Vitamin Deficiencies - Night PACK</b>", "<b>Night</b> blindness = Vitamin A<br><b>P</b>ellagra = B3 (Niacin)<br><b>A</b>nemia = B12, Folate<br><b>C</b>oagulation = Vitamin K<br><b>K</b>orsakoff = B1 (Thiamine)"],
    
    // Miscellaneous
    ["<b>Gout - CAMP</b>", "<b>C</b>olchicine (acute)<br><b>A</b>llopurinol (chronic)<br><b>M</b>aintenance therapy<br><b>P</b>robenecid (uricosuric)"],
    ["<b>Allopurinol vs Febuxostat</b>", "Allopurinol = Xanthine oxidase inhibitor, rash<br>Febuxostat = Non-purine XO inhibitor"],
    ["<b>PDE5 Inhibitors - AFIL</b>", "All end in -afil:<br>Sildenafil<br>Tadalafil<br>Vardenafil<br>Contraindicated with nitrates"],
    ["<b>Migraine Abortive - TRIPTANS</b>", "All end in -triptan:<br>Sumatriptan<br>Rizatriptan<br>Zolmitriptan<br>5-HT1B/1D agonists"],
    ["<b>DRESS Syndrome Drugs</b>", "<b>D</b>rug<br><b>R</b>ash<br><b>E</b>osinophilia<br><b>S</b>ystemic<br><b>S</b>ymptoms<br>Common: Allopurinol, Anticonvulsants, Sulfonamides"],
    ["<b>Stevens-Johnson Drugs - SCAM</b>", "<b>S</b>ulfonamides<br><b>C</b>arbamazepine<br><b>A</b>llopurinol<br><b>M</b>odafinil (also Lamotrigine)"],
    ["<b>Drug-Induced Lupus - SHIP</b>", "<b>S</b>ulfonamides<br><b>H</b>ydralazine<br><b>I</b>soniazid<br><b>P</b>rocainamide"],
    ["<b>Drugs Causing Gynecomastia - DISCO</b>", "<b>D</b>igoxin<br><b>I</b>soniazid<br><b>S</b>pironolactone<br><b>C</b>imetidine<br><b>O</b>estrogens"],
    ["<b>Teratogenic Drugs - WARPATH</b>", "<b>W</b>arfarin<br><b>A</b>CE inhibitors<br><b>R</b>etinoids<br><b>P</b>henytoin<br><b>A</b>lcohol<br><b>T</b>halidomide<br><b>H</b>ormones"]
];
