const {dataFields} = require("../config");

function prepareData(citizens) {
    const resultData = {};
    for (const citizen of citizens) {
        let currentDataPath = resultData;
        const citizenGroups = citizen.groups;
        citizenGroups.sort((a, b) => dataFields.indexOf(a.type) - dataFields.indexOf(b.type));
        let currentGroupDepth = 0;
        for (const group of citizen.groups) {
            if (group.type !== dataFields[currentGroupDepth]) {
                break;
            }
            currentGroupDepth++;
            currentDataPath[group.type] = currentDataPath[group.type] || [];
            const indexOfGroupItem = currentDataPath[group.type].findIndex(obj => {
                return obj.name === group.name;
            });
            if (indexOfGroupItem === -1) {
                const groupItem = {
                    name: group.name
                };
                currentDataPath[group.type].push(groupItem);
                currentDataPath = groupItem;
            } else {
                currentDataPath = currentDataPath[group.type][indexOfGroupItem];
            }
        }
        currentDataPath.citizens = currentDataPath.citizens || [];
        delete citizen.groups;
        currentDataPath.citizens.push(citizen);
    }

    return resultData;
}

module.exports = {
    prepareData
};

