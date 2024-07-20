function aliImranVictory() {
    const title = "Ali Imran's Thrilling Victory: Conquering the Cyber Lab";
    const series = "Halqa-e-Maut (Circle of Death), Fifth Part Top Target";
    const heroName = "Ali Imran";
    const heroTitle = "Master of Computers (MSc, DSc, Oxon)";
    const teamName = "Pakisha Secret Service";
    const location = "Israel's top-secret computerized laboratory, hidden beneath the dangerous coastal mountains of Australia";
    const objective = "producing weapons to destroy Muslim holy sites";

    // Constructing the storyline
    const storyline = `
        In the final installment of the Imran Series, "${series}", our hero ${heroName}, also known as the "${heroTitle}",
        leads his team, ${teamName}, to a thrilling victory.

        After overcoming numerous challenges, ${heroName} and his team infiltrate ${location}, controlled by the country's top five scientists through the cyber computer report.
        The lab was ${objective}.

        ${heroName}, a computer science student and expert, engages in a mental and intellectual battle with the cyber system, ultimately becoming the lab's supreme chief.
        He then uses the cyber system to destroy the laboratory and the factory producing the weapons, erasing all traces of the lab's existence.

        This victory marks a significant milestone in the fight against terrorism and the protection of Muslim holy sites.
        ${heroName}'s exceptional skills and bravery have saved the day once again!
    `;

    // Returning the compiled script
    return `${title}\n${"-".repeat(title.length)}\n${storyline}`;
}

// Call the function to compile the script
const compiledScript = aliImranVictory();
console.log(compiledScript);

