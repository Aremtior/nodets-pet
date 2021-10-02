type MenuOptions = '' | 'cat' | 'dog' | 'fish' | 'all';

export const createMenuObject = (activeMenu: MenuOptions) => {
  const returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu !== '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;
};
