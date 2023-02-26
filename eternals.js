const eternalsData = [
    {
        name: "Sersi",
        skills: {
            1: "matter manipulation",
            2: "divine communication",
            3: "cosmic energy"
        },
        image: "images\\sersi.png"
    },
    {
        name: "Ikaris",
        skills: {
            1: "super strength",
            2: "super speed",
            3: "flight",
            4: "energy blasts",
            5: "super senses",
            6: "cosmic energy"
        },
        image: "images\\ikaris.png"
    },
    {
        name: "Kingo",
        skills: {
            1: "energy blasts",
            2: "sword",
            3: "cosmic energy"
        },
        image: "images\\kingo.png"
    },
    {
        name: "Sprite",
        skills: {
            1: "invisibility",
            2: "light bending",
            3: "illusions",
            4: "object duplication",
            5: "cosmic energy"
        },
        image: "images\\sprite.png"
    },
    {
        name: "Phastos",
        skills: {
            1: "conjuration",
            2: "technology",
            3: "super intelligence",
            4: "cosmic energy"
        },
        image: "images\\phastos.png"
    }
];

const eternalsList = document.createElement('ul');
const eternalsListContainer = document.querySelector("#eternalsListContainer");
eternalsListContainer.append(eternalsList);

eternalsData.forEach(eternal => {
    let eternalsListItem = document.createElement('li');
    eternalsListItem.textContent = eternal.name;
    eternalsList.append(eternalsListItem);
});

const showInfo = () => {
    const filteredListContainer = document.querySelector("#filteredListContainer");
    filteredListContainer.innerHTML = "";

    const filteredEternalsList = document.createElement('ul');
    filteredListContainer.append(filteredEternalsList);

    const enteredSkill = document.querySelector("#skill").value;

    eternalsData.forEach(eternal => {
        Object.keys(eternal.skills).forEach(skillKey => {
            if (eternal.skills[skillKey] == enteredSkill) {
                let filteredEternalsListItem = document.createElement('li');
                filteredEternalsListItem.textContent = `${eternal.name} possesses the skill of ${enteredSkill}`;
                filteredEternalsList.append(filteredEternalsListItem);

                let eternalImage = document.createElement("img");
                eternalImage.src = eternal.image;
                eternalImage.height = "160";
                eternalImage.width = "90";
                filteredEternalsList.append(eternalImage);
            }
        });
    });

    if (filteredEternalsList.querySelector("li") == null) {
        let filteredEternalsListItem = document.createElement('li');
        filteredEternalsListItem.textContent = `${enteredSkill} is not present in the skills of the eternals data list`;
        filteredEternalsList.append(filteredEternalsListItem);
    }
}
