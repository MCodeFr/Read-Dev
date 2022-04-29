const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async (client) => {
  (await pGlob(`${process.cwd()}/selects/*/*.js`)).map(
    async (selectMenuFile) => {
      const selectMenu = require(selectMenuFile);

      if (!selectMenu.name)
        return console.log(
          `Select Menus non déclanché, ajoutez un nom à votre menu !\nFichier -> ${selectMenuFile}`
        );

      client.selects.set(selectMenu.name, selectMenu);
    }
  );
};
