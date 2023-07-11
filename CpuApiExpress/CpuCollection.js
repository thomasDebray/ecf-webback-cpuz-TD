// import du module FileSystem (permet de manipuler les fichiers locaux)
const fs = require('fs');

class CpuCollection
{
    constructor()
    {
        // Chargement du JSON (e frontend, on utilisait fetch pour charger un fichier distant)
        // ici, on charge un fichier local
        let rawdata = fs.readFileSync('cpuz.json');

        // Conversion du JSON en objet JS et stockage de l'objet dans this.data
        this.data = JSON.parse(rawdata);
    }

    /**
     * 
     * @param {Number} _id 
     * @returns {Object} found CPU or empty object if not found
     */
    findCpuById(_id)
    {
        let cpu = {};

        // implémenter ici la recherche d'un CPU par son identifiant
        cpu = this.data.filter(cpu => cpu.id == _id);

        return cpu;
    }

    addCpu(_newCpu)
    {
        // implémenter ici l'ajout d'un CPU dans la collection 'this.data' puis retourner le nouveau CPU ajouté
        // Pensez à générer un nouvel identifiant pour le nouveau CPU

        let cpu_id = Math.max.apply(Math, this.data.map(function(cpu) { return cpu.id}))
        _newCpu.id = cpu_id +  1;
        this.data.push(_newCpu);

        return _newCpu;
    }
}


module.exports = CpuCollection