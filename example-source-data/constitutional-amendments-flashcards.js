// US Constitutional Amendments flashcards
// Copy and paste this into the FLASHCARDS variable in your TSOFA app

let FLASHCARDS = [
    ["<b>1st Amendment</b><br><small>1791</small>", "Freedom of religion, speech, press, assembly, and petition"],
    ["<b>2nd Amendment</b><br><small>1791</small>", "Right to keep and bear arms"],
    ["<b>3rd Amendment</b><br><small>1791</small>", "No quartering of soldiers in private homes without consent"],
    ["<b>4th Amendment</b><br><small>1791</small>", "Protection against unreasonable searches and seizures; requires warrants"],
    ["<b>5th Amendment</b><br><small>1791</small>", "Due process, no double jeopardy, no self-incrimination, eminent domain"],
    ["<b>6th Amendment</b><br><small>1791</small>", "Right to speedy and public trial by jury, right to counsel"],
    ["<b>7th Amendment</b><br><small>1791</small>", "Right to jury trial in civil cases"],
    ["<b>8th Amendment</b><br><small>1791</small>", "No excessive bail or fines, no cruel and unusual punishment"],
    ["<b>9th Amendment</b><br><small>1791</small>", "Rights not listed in Constitution are retained by the people"],
    ["<b>10th Amendment</b><br><small>1791</small>", "Powers not delegated to federal government are reserved to states or people"],
    ["<b>11th Amendment</b><br><small>1795</small>", "Limits lawsuits against states in federal court"],
    ["<b>12th Amendment</b><br><small>1804</small>", "Revised presidential election procedures; separate votes for President and VP"],
    ["<b>13th Amendment</b><br><small>1865</small>", "Abolishes slavery and involuntary servitude"],
    ["<b>14th Amendment</b><br><small>1868</small>", "Citizenship, due process, equal protection under law"],
    ["<b>15th Amendment</b><br><small>1870</small>", "Voting rights cannot be denied based on race, color, or previous servitude"],
    ["<b>16th Amendment</b><br><small>1913</small>", "Congress can collect income taxes"],
    ["<b>17th Amendment</b><br><small>1913</small>", "Direct election of senators by the people"],
    ["<b>18th Amendment</b><br><small>1919</small>", "Prohibition of alcohol (repealed by 21st Amendment)"],
    ["<b>19th Amendment</b><br><small>1920</small>", "Women's right to vote"],
    ["<b>20th Amendment</b><br><small>1933</small>", "Changes presidential and congressional term dates; addresses succession"],
    ["<b>21st Amendment</b><br><small>1933</small>", "Repeals 18th Amendment (Prohibition)"],
    ["<b>22nd Amendment</b><br><small>1951</small>", "Limits president to two terms"],
    ["<b>23rd Amendment</b><br><small>1961</small>", "Gives Washington D.C. electoral votes"],
    ["<b>24th Amendment</b><br><small>1964</small>", "Prohibits poll taxes in federal elections"],
    ["<b>25th Amendment</b><br><small>1967</small>", "Presidential succession and disability procedures"],
    ["<b>26th Amendment</b><br><small>1971</small>", "Voting age lowered to 18"],
    ["<b>27th Amendment</b><br><small>1992</small>", "Congressional pay changes take effect after next election"],
    
    // Bill of Rights Summary
    ["<b>Bill of Rights</b>", "First 10 amendments; ratified 1791; guarantees civil rights and liberties"],
    
    // Key Phrases and Concepts
    ["<b>1st Amendment - Establishment Clause</b>", "Government cannot establish an official religion"],
    ["<b>1st Amendment - Free Exercise Clause</b>", "Government cannot prohibit free exercise of religion"],
    ["<b>1st Amendment - Freedom of Speech</b>", "Protection of expression, with limited exceptions"],
    ["<b>1st Amendment - Freedom of Press</b>", "Protection for news media and publications"],
    ["<b>1st Amendment - Right to Assemble</b>", "Peaceful gathering and protest protected"],
    ["<b>1st Amendment - Right to Petition</b>", "Right to appeal to government for redress of grievances"],
    
    ["<b>2nd Amendment - Militia Clause</b>", "\"A well regulated Militia, being necessary to the security of a free State\""],
    ["<b>2nd Amendment - Right to Bear Arms</b>", "\"the right of the people to keep and bear Arms, shall not be infringed\""],
    
    ["<b>4th Amendment - Probable Cause</b>", "Reasonable grounds needed for search warrants"],
    ["<b>4th Amendment - Warrant Requirements</b>", "Must describe place to be searched and items to be seized"],
    
    ["<b>5th Amendment - Grand Jury</b>", "Serious federal crimes require grand jury indictment"],
    ["<b>5th Amendment - Double Jeopardy</b>", "Cannot be tried twice for the same crime"],
    ["<b>5th Amendment - Self-Incrimination</b>", "Right to remain silent; cannot be forced to testify against yourself"],
    ["<b>5th Amendment - Due Process</b>", "Government must follow fair procedures"],
    ["<b>5th Amendment - Eminent Domain</b>", "Private property taken for public use requires just compensation"],
    
    ["<b>6th Amendment - Speedy Trial</b>", "Right to prompt trial without unnecessary delays"],
    ["<b>6th Amendment - Public Trial</b>", "Trials must be open to public scrutiny"],
    ["<b>6th Amendment - Impartial Jury</b>", "Jury must be unbiased and from district where crime occurred"],
    ["<b>6th Amendment - Right to Counsel</b>", "Right to attorney, provided if cannot afford"],
    ["<b>6th Amendment - Confrontation Clause</b>", "Right to confront witnesses against you"],
    
    ["<b>8th Amendment - Excessive Bail</b>", "Bail amount must be reasonable"],
    ["<b>8th Amendment - Cruel and Unusual</b>", "Punishment must be proportionate to crime"],
    
    ["<b>14th Amendment - Citizenship Clause</b>", "All persons born or naturalized in US are citizens"],
    ["<b>14th Amendment - Due Process Clause</b>", "States cannot deprive life, liberty, property without due process"],
    ["<b>14th Amendment - Equal Protection</b>", "States must provide equal protection under law to all persons"],
    
    // Reconstruction Amendments
    ["<b>Reconstruction Amendments</b>", "13th, 14th, and 15th Amendments; addressed slavery and civil rights"],
    
    // Progressive Era Amendments
    ["<b>Progressive Era Amendments</b>", "16th, 17th, 18th, 19th; early 20th century reforms"],
    
    // Voting Rights Amendments
    ["<b>Voting Rights Amendments</b>", "15th (race), 19th (women), 24th (poll tax), 26th (age 18)"],
    
    // Presidential Amendments
    ["<b>Presidential Term Amendments</b>", "12th (election), 20th (term dates), 22nd (term limits), 25th (succession)"],
    
    // Only Repealed Amendment
    ["<b>Only Repealed Amendment</b>", "18th Amendment (Prohibition) repealed by 21st Amendment"],
    
    // Most Recent Amendment
    ["<b>Most Recent Amendment</b>", "27th Amendment (1992) - Congressional pay changes"],
    
    // Longest Ratification
    ["<b>Longest Ratification Period</b>", "27th Amendment - proposed 1789, ratified 1992 (203 years)"],
    
    // Civil War Amendments
    ["<b>Civil War Amendments</b>", "13th (slavery), 14th (citizenship), 15th (voting rights)"],
    
    // Unenumerated Rights
    ["<b>9th Amendment Purpose</b>", "Ensures rights not listed are still protected"],
    ["<b>10th Amendment Purpose</b>", "Limits federal power; preserves state sovereignty"]
];
