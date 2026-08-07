console.log("import.meta =", import.meta);
console.log("import.meta.env =", import.meta.env);

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const form = document.getElementById("coverLetterForm");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");


form.addEventListener("submit", async function (event) {

    event.preventDefault();

    console.log("Generate button clicked");


    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value.trim();
    const company = document.getElementById("company").value.trim();
    const skills = document.getElementById("skills").value.trim();


    if (!name || !role || !company || !skills) {

        output.textContent = "Please fill all fields.";

        return;
    }


    output.textContent = "Generating cover letter...";


    const prompt = `
Create a professional ATS-friendly cover letter.

Candidate Name: ${name}
Job Role: ${role}
Target Company: ${company}
Skills: ${skills}

Requirements:
- Professional tone
- Around 250 words
- Return only the cover letter
`;


    try {


        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },


                body: JSON.stringify({

                    contents: [

                        {
                            parts: [

                                {
                                    text: prompt
                                }

                            ]
                        }

                    ]

                })

            }
        );


        const data = await response.json();


        console.log("Status:", response.status);
        console.log("Data:", data);



        if (!response.ok) {

            throw new Error(JSON.stringify(data));

        }



        if (
            data.candidates &&
            data.candidates.length > 0
        ) {


            output.textContent =
                data.candidates[0]
                .content
                .parts[0]
                .text;


        } else {


            output.textContent =
                generateFallback(
                    name,
                    role,
                    company,
                    skills
                );

        }



    } catch (error) {


        console.error("Gemini Error:", error);


        console.log(
            "Using fallback cover letter generator"
        );


        output.textContent =
            generateFallback(
                name,
                role,
                company,
                skills
            );

    }

});



// Fallback Generator
function generateFallback(
    name,
    role,
    company,
    skills
) {


return `

Dear Hiring Manager at ${company},


I am ${name}, and I am writing to express my interest in the ${role} position at ${company}.


I have developed strong skills in ${skills}. My technical knowledge, problem-solving abilities, and dedication to continuous learning allow me to contribute effectively to your organization.


I am excited about the opportunity to bring my skills and enthusiasm to your team. I believe my experience and passion make me a suitable candidate for this role.


Thank you for considering my application. I look forward to the opportunity to discuss how my skills can contribute to the success of your organization.


Sincerely,

${name}

`;

}




// Copy Button

copyBtn.addEventListener("click", function () {


    if (!output.textContent) {

        return;

    }


    navigator.clipboard.writeText(
        output.textContent
    );


    copyBtn.textContent = "Copied!";


    setTimeout(() => {

        copyBtn.textContent = "Copy";

    }, 2000);


});