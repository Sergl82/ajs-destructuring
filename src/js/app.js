export default function getAttackOptions({ special }) {
  const optionsArr = [];
  special.forEach((element) => {
    const {
      id,
      name,
      icon,
      description = 'описание недоступно',
    } = element;
    optionsArr.push({
      id, name, icon, description,
    });
  });
  return optionsArr;
}
